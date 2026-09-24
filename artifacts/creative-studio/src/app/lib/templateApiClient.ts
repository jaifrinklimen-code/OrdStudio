import { secureFetch } from '../../lib/secureFetch';

let cachedApiTemplates: any[] | null = null;
let apiTemplatesPromise: Promise<any[]> | null = null;

/**
 * Fetches templates from /api/templates with in-memory caching and in-flight request deduplication.
 * Prevents redundant multi-megabyte JSON network roundtrips across view switches.
 */
export async function fetchCachedTemplates(): Promise<any[]> {
  if (cachedApiTemplates && cachedApiTemplates.length > 0) {
    return cachedApiTemplates;
  }

  if (apiTemplatesPromise) {
    return apiTemplatesPromise;
  }

  apiTemplatesPromise = (async () => {
    try {
      const res = await secureFetch('/api/templates');
      if (!res.ok) return [];
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedApiTemplates = data;
        return data;
      }
      return [];
    } catch (err) {
      console.warn('Unable to fetch API templates, using fallback:', err);
      return [];
    } finally {
      apiTemplatesPromise = null;
    }
  })();

  return apiTemplatesPromise;
}

const cachedProjectsByUser = new Map<string, any[]>();
const pendingProjectsPromiseByUser = new Map<string, Promise<any[]>>();

/**
 * Fetches user projects from /api/projects with in-memory caching and request deduplication.
 */
export async function fetchCachedProjects(userId: string): Promise<any[]> {
  if (!userId || userId === 'guest') return [];

  if (cachedProjectsByUser.has(userId)) {
    return cachedProjectsByUser.get(userId)!;
  }

  if (pendingProjectsPromiseByUser.has(userId)) {
    return pendingProjectsPromiseByUser.get(userId)!;
  }

  const promise = (async () => {
    try {
      const res = await secureFetch('/api/projects');
      if (!res.ok) return [];
      const data = await res.json();
      if (Array.isArray(data)) {
        const userProjects = data.filter((p: any) => p && String(p.user_id) === String(userId));
        cachedProjectsByUser.set(userId, userProjects);
        return userProjects;
      }
      return [];
    } catch {
      return [];
    } finally {
      pendingProjectsPromiseByUser.delete(userId);
    }
  })();

  pendingProjectsPromiseByUser.set(userId, promise);
  return promise;
}

export function invalidateProjectsCache(userId?: string) {
  if (userId) {
    cachedProjectsByUser.delete(userId);
  } else {
    cachedProjectsByUser.clear();
  }
}
