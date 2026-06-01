import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const ALLOWED_ROOT_ENTRIES = new Set([
  '.git',
  '.github',
  '.gitignore',
  '.env.example',
  '.env.local',
  'README.md',
  'app',
  'components',
  'contexts',
  'docs',
  'i18n',
  'lib',
  'public',
  'scripts',
  'constants.tsx',
  'translations.ts',
  'types.ts',
  'eslint.config.mjs',
  'next-env.d.ts',
  'next.config.ts',
  'package.json',
  'package-lock.json',
  'postcss.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'node_modules',
  '.next',
]);

const entries = fs.readdirSync(ROOT, { withFileTypes: true });
const unexpected = entries
  .map((entry) => entry.name)
  .filter((name) => !ALLOWED_ROOT_ENTRIES.has(name))
  .sort((a, b) => a.localeCompare(b));

if (unexpected.length > 0) {
  console.error('Root hygiene check failed. Unexpected entries in repository root:');
  for (const item of unexpected) {
    console.error(`- ${item}`);
  }
  console.error(`Move artifacts to ${path.join('docs', 'artifacts')} or update the allowlist intentionally.`);
  process.exit(1);
}

console.log('Root hygiene check passed.');
