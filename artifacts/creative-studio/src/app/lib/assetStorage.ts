import { supabase } from '../../lib/supabase';

export interface StoredAsset {
  id: string;
  userId: string;
  name: string;
  size: string;
  type: 'image' | 'text' | 'pdf' | 'other';
  previewUrl?: string;
  content?: string;
  pdfPages?: string[];
  storagePath?: string;
  uploadedAt: string;
  timestamp: number;
  fileBlob?: Blob;
  isDemo?: boolean;
}

const DB_NAME = 'ord_assets_db';
const STORE_NAME = 'user_assets';
const DB_VERSION = 1;

/**
 * Get current authenticated user ID or 'guest'
 */
export async function getCurrentUserId(): Promise<string> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user?.id || 'guest';
  } catch {
    return 'guest';
  }
}

/**
 * Open IndexedDB for persistent binary asset storage
 */
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Load all stored assets for the given user ID
 */
export async function loadUserAssets(userId: string): Promise<StoredAsset[]> {
  // First check fast local metadata cache
  const cacheKey = `ord_user_assets_meta_${userId}`;
  let cached: StoredAsset[] = [];
  try {
    const meta = localStorage.getItem(cacheKey);
    if (meta) {
      // Strip stale blob: URLs for non-image types from cache — they are revoked between sessions
      const parsed: StoredAsset[] = JSON.parse(meta);
      cached = parsed.map(a => {
        if (a.type !== 'image' && a.previewUrl && a.previewUrl.startsWith('blob:')) {
          return { ...a, previewUrl: undefined };
        }
        return a;
      });
    }
  } catch {}

  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('userId');
      const request = index.getAll(IDBKeyRange.only(userId));

      request.onsuccess = () => {
        const records: StoredAsset[] = request.result || [];
        records.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

        // Recreate transient object URLs from stored binary blobs
        // For images AND pdfs — both need fresh blob URLs each session
        records.forEach(asset => {
          if (asset.fileBlob) {
            // Always clear stale blob: previewUrls (they are revoked between sessions)
            if (asset.previewUrl && asset.previewUrl.startsWith('blob:')) {
              asset.previewUrl = undefined;
            }
            // Recreate from stored binary for images
            if (asset.type === 'image' && !asset.previewUrl) {
              try {
                asset.previewUrl = URL.createObjectURL(asset.fileBlob);
              } catch {}
            }
            // For PDFs: create blob URL from actual binary so PDF viewer gets real bytes
            if (asset.type === 'pdf' && !asset.previewUrl) {
              try {
                const pdfBlob = asset.fileBlob instanceof Blob
                  ? new Blob([asset.fileBlob], { type: 'application/pdf' })
                  : null;
                if (pdfBlob) {
                  asset.previewUrl = URL.createObjectURL(pdfBlob);
                }
              } catch {}
            }
          }
        });

        resolve(records.length > 0 ? records : cached);
      };

      request.onerror = () => {
        resolve(cached);
      };
    });
  } catch {
    return cached;
  }
}

/**
 * Persist an asset into IndexedDB and update localStorage metadata cache
 */
export async function saveUserAsset(asset: StoredAsset): Promise<void> {
  // Update localStorage metadata (without heavy blob)
  try {
    const cacheKey = `ord_user_assets_meta_${asset.userId}`;
    const existingStr = localStorage.getItem(cacheKey);
    const existing: StoredAsset[] = existingStr ? JSON.parse(existingStr) : [];
    const metaItem: StoredAsset = {
      ...asset,
      fileBlob: undefined, // do not store raw blob in localStorage
      // Strip blob: URLs — they are session-scoped and become invalid after reload.
      // fileBlob in IndexedDB is the persistent source; blob URLs are recreated on load.
      previewUrl: asset.previewUrl && asset.previewUrl.startsWith('blob:') ? undefined : asset.previewUrl
    };
    const updated = [metaItem, ...existing.filter(a => a.id !== asset.id)];
    localStorage.setItem(cacheKey, JSON.stringify(updated.slice(0, 50)));
  } catch {}

  // Store full asset in IndexedDB
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(asset);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('IndexedDB save failed:', err);
  }
}

/**
 * Delete an asset from IndexedDB and metadata cache
 */
export async function deleteUserAsset(id: string, userId: string): Promise<void> {
  // Update metadata cache
  try {
    const cacheKey = `ord_user_assets_meta_${userId}`;
    const existingStr = localStorage.getItem(cacheKey);
    if (existingStr) {
      const existing: StoredAsset[] = JSON.parse(existingStr);
      const filtered = existing.filter(a => a.id !== id);
      localStorage.setItem(cacheKey, JSON.stringify(filtered));
    }
  } catch {}

  // Delete from IndexedDB
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete failed:', err);
  }
}

/**
 * Attempt direct upload to Supabase Storage bucket ('assets') if configured.
 * Safely returns the public/remote URL if successful, or null if storage bucket is not configured.
 */
export async function uploadToSupabaseStorageIfConfigured(
  file: File,
  userId: string
): Promise<{ path?: string; publicUrl?: string } | null> {
  try {
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const storagePath = `${userId}/${Date.now()}-${cleanName}`;
    const { data, error } = await supabase.storage
      .from('assets')
      .upload(storagePath, file, { cacheControl: '3600', upsert: false });

    if (!error && data?.path) {
      const { data: pubData } = supabase.storage.from('assets').getPublicUrl(data.path);
      return {
        path: data.path,
        publicUrl: pubData?.publicUrl || undefined
      };
    }
  } catch {
    // Supabase Storage bucket not configured or permissions not set
  }
  return null;
}
