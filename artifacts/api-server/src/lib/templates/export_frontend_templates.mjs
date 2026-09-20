import fs from 'fs';
import path from 'path';

// Load the compiled templates or bundle them
import { SEED_TEMPLATES } from '../templateSeedData.js';

const frontendOut = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/creative-studio/src/app/lib/canonicalTemplates.ts');

const jsonStr = JSON.stringify(SEED_TEMPLATES, null, 2);

const tsContent = `// Canonical Studio Templates (100% Native Coordinates & Real Slide Counts)
// Auto-generated single source of truth for offline/initial client state

export const CANONICAL_FALLBACK_TEMPLATES: any[] = ${jsonStr};
`;

fs.writeFileSync(frontendOut, tsContent);
console.log(`Successfully exported ${SEED_TEMPLATES.length} canonical templates to creative-studio!`);
