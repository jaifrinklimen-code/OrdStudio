import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

export type TemplateCategory =
  | 'Presentation'
  | 'Resume'
  | 'Business'
  | 'Invitation'
  | 'Posters'
  | 'Flyers'
  | 'Reports';

export interface TemplateCatalogEntry {
  id: string;
  name: string;
  category: TemplateCategory;
  size: string;
  gradient: string;
  premium: boolean;
  likes: number;
  views: number;
  elements: unknown[];
  slides: unknown[];
  fileUrl: string;
  fileName: string;
  fileType: string;
  fileExtension: string;
  isFolderTemplate: true;
}

const CATEGORY_FOLDERS: Record<string, string> = {
  Presentation: 'presentations',
  Resume: 'resumes',
  Business: 'business',
  Invitation: 'invitations',
  Posters: 'posters',
  Flyers: 'flyers',
  Reports: 'reports',
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  Presentation: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
  Resume: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
  Business: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
  Invitation: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
  Posters: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
  Flyers: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  Reports: 'linear-gradient(135deg, #0f172a 0%, #64748b 100%)',
};

const MIME_TYPES: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

const isTemplateFile = (fileName: string): boolean => {
  const normalized = fileName.toLowerCase();
  return ['.pdf', '.ppt', '.pptx', '.doc', '.docx'].some(ext => normalized.endsWith(ext));
};

const inferTemplateSize = (fileName: string): string => {
  const extension = path.extname(fileName).toLowerCase();
  switch (extension) {
    case '.ppt':
    case '.pptx':
      return 'Presentation deck';
    case '.doc':
    case '.docx':
      return 'Document';
    default:
      return 'PDF file';
  }
};

const findTemplateRoot = (startDir: string): string | null => {
  let directory = path.resolve(startDir);
  while (true) {
    const candidate = path.join(directory, 'templates');
    if (fsSync.existsSync(candidate)) {
      return candidate;
    }

    const parent = path.dirname(directory);
    if (parent === directory) {
      return null;
    }
    directory = parent;
  }
};

export const getTemplateRoot = (): string | null => {
  const candidates = [
    process.cwd(),
    path.resolve(process.cwd(), '..'),
    path.resolve(process.cwd(), '..', '..'),
    path.resolve(process.cwd(), '..', '..', '..'),
  ];

  for (const dir of candidates) {
    const found = findTemplateRoot(dir);
    if (found) return found;
  }

  return null;
};

export function normalizeTemplateCategoryName(rawCategory: string): TemplateCategory {
  const normalized = String(rawCategory || '').trim().toLowerCase();
  if (!normalized) return 'Presentation';

  const folderKey = normalized.replace(/s$/, '').replace(/[^a-z]/g, '');

  if (folderKey === 'presentation' || folderKey === 'present') return 'Presentation';
  if (folderKey === 'resume' || folderKey === 'resum') return 'Resume';
  if (folderKey === 'business' || folderKey === 'biz') return 'Business';
  if (folderKey === 'invitation' || folderKey === 'invite' || folderKey === 'wedding') return 'Invitation';
  if (folderKey === 'poster' || folderKey === 'post') return 'Posters';
  if (folderKey === 'flyer' || folderKey === 'fly') return 'Flyers';
  if (folderKey === 'report' || folderKey === 'reports') return 'Reports';

  const titleized = normalized
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return titleized as TemplateCategory;
}

export function resolveTemplateFolderFromCategory(category: string): string {
  const normalized = String(category || '').trim().toLowerCase();
  if (!normalized) return 'presentations';

  const aliases: Record<string, string> = {
    presentation: 'presentations',
    presentations: 'presentations',
    resume: 'resumes',
    resumes: 'resumes',
    business: 'business',
    invitation: 'invitations',
    invitations: 'invitations',
    posters: 'posters',
    poster: 'posters',
    flyers: 'flyers',
    flyer: 'flyers',
    reports: 'reports',
    report: 'reports',
  };

  const direct = aliases[normalized];
  if (direct) return direct;

  return normalized.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').toLowerCase() || 'presentations';
}

export async function discoverTemplateCatalog(): Promise<TemplateCatalogEntry[]> {
  const root = getTemplateRoot();
  if (!root) return [];

  const catalog: TemplateCatalogEntry[] = [];
  const knownFolders = new Set(Object.values(CATEGORY_FOLDERS));

  let directoryEntries;
  try {
    directoryEntries = await fs.readdir(root, { withFileTypes: true });
  } catch {
    return [];
  }
  const folders = directoryEntries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  for (const folderName of [...new Set([...folders, ...Object.values(CATEGORY_FOLDERS)])]) {
    if (!knownFolders.has(folderName) && !folders.includes(folderName)) continue;

    const categoryDir = path.join(root, folderName);
    try {
      const entries = await fs.readdir(categoryDir, { withFileTypes: true });
      const files = entries.filter(entry => entry.isFile() && isTemplateFile(entry.name));

      const categoryName = normalizeTemplateCategoryName(folderName);

      for (const file of files) {
        const fileExtension = path.extname(file.name).toLowerCase();
        const safeName = file.name.replace(/\.[^/.]+$/, '');
        const catalogEntry: TemplateCatalogEntry = {
          id: `${categoryName.toLowerCase()}-${safeName}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
          name: safeName
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim(),
          category: categoryName,
          size: inferTemplateSize(file.name),
          gradient: CATEGORY_GRADIENTS[categoryName] || 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          premium: false,
          likes: 0,
          views: 0,
          elements: [],
          slides: [],
          fileUrl: `/api/templates/file?category=${encodeURIComponent(categoryName)}&name=${encodeURIComponent(file.name)}`,
          fileName: file.name,
          fileType: MIME_TYPES[fileExtension] || 'application/octet-stream',
          fileExtension,
          isFolderTemplate: true,
        };

        catalog.push(catalogEntry);
      }
    } catch {
      // Ignore missing category folders; the app should still render available sections.
    }
  }

  return catalog.sort((a, b) => a.name.localeCompare(b.name));
}
