import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getTemplateRoot, discoverTemplateCatalog } from './templateCatalog';
import app from '../app';

const root = getTemplateRoot();

test('template catalog resolves the shared templates folder', () => {
  assert.ok(root, 'expected a shared templates folder to be found');
  assert.ok(root.includes('templates'));
  assert.ok(root.endsWith('templates'));
});

test('discoverTemplateCatalog includes resume and presentation groups', async () => {
  const catalog = await discoverTemplateCatalog();
  assert.ok(Array.isArray(catalog));
  const categories = catalog.map(item => item.category);
  assert.ok(categories.includes('Resume') || categories.includes('Presentation'));
});

test('template file route serves files inline for browser previews', async () => {
  const root = getTemplateRoot();
  assert.ok(root, 'expected a shared templates folder to be found');

  const resumeDir = path.join(root, 'resumes');
  const resumeFiles = await fs.readdir(resumeDir);
  const pdfFile = resumeFiles.find(file => file.toLowerCase().endsWith('.pdf'));
  assert.ok(pdfFile, 'expected at least one resume PDF in the templates folder');

  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once('listening', () => resolve()));

  try {
    const address = server.address();
    assert.ok(address && typeof address === 'object' && address.port);

    const response = await fetch(`http://127.0.0.1:${address.port}/api/templates/file?category=Resume&name=${encodeURIComponent(pdfFile)}`);
    assert.equal(response.status, 200, 'expected template file request to succeed');
    assert.match((response.headers.get('content-type') || '').toLowerCase(), /pdf/);
    assert.match((response.headers.get('content-disposition') || '').toLowerCase(), /inline/);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  }
});
