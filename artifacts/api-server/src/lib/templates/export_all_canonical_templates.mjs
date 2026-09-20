import fs from 'fs';
import path from 'path';

const libDir = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/api-server/src/lib/templates');
const frontendOut = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/creative-studio/src/app/lib/canonicalTemplates.ts');

function extractArrayFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/=\s*(\[\s*[\s\S]*\])\s*;?\s*$/);
  if (!match) {
    throw new Error(`Could not find JSON array in ${filePath}`);
  }
  return JSON.parse(match[1]);
}

console.log('Loading template categories...');
const presentations = extractArrayFromFile(path.join(libDir, 'presentations.ts'));
const resumes = extractArrayFromFile(path.join(libDir, 'resumes.ts'));
const business = extractArrayFromFile(path.join(libDir, 'business.ts'));
const invitations = extractArrayFromFile(path.join(libDir, 'invitations.ts'));
const posters = extractArrayFromFile(path.join(libDir, 'posters.ts'));
const flyers = extractArrayFromFile(path.join(libDir, 'flyers.ts'));
const reports = extractArrayFromFile(path.join(libDir, 'reports.ts'));

console.log(`Presentations: ${presentations.length}`);
console.log(`Resumes: ${resumes.length}`);
console.log(`Business: ${business.length}`);
console.log(`Invitations: ${invitations.length}`);
console.log(`Posters: ${posters.length}`);
console.log(`Flyers: ${flyers.length}`);
console.log(`Reports: ${reports.length}`);

const allTemplates = [
  ...presentations,
  ...resumes,
  ...business,
  ...invitations,
  ...posters,
  ...flyers,
  ...reports
];

console.log(`Total canonical templates: ${allTemplates.length}`);

const jsonStr = JSON.stringify(allTemplates, null, 2);
const tsContent = `// Canonical Studio Templates (100% Native Coordinates & Real Slide Counts)
// Auto-generated single source of truth for offline/initial client state

export const CANONICAL_FALLBACK_TEMPLATES: any[] = ${jsonStr};
`;

fs.writeFileSync(frontendOut, tsContent, 'utf-8');
console.log(`Successfully exported ${allTemplates.length} canonical templates to ${frontendOut} (${(tsContent.length / 1024 / 1024).toFixed(2)} MB)!`);
