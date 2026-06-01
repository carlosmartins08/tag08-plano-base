import fs from 'node:fs';
import path from 'node:path';

const envPath = path.resolve(process.cwd(), '.env.local');

if (!fs.existsSync(envPath)) {
  console.error('[tracking:env] Missing .env.local file.');
  process.exit(1);
}

const raw = fs.readFileSync(envPath, 'utf-8');
const lines = raw.split(/\r?\n/);

const map = new Map();
for (const line of lines) {
  const normalized = line.trim();
  if (!normalized || normalized.startsWith('#')) continue;
  const idx = normalized.indexOf('=');
  if (idx <= 0) continue;
  const key = normalized.slice(0, idx).trim();
  const value = normalized.slice(idx + 1).trim();
  map.set(key, value);
}

const required = [
  'GOOGLE_MAPS_API_KEY',
  'NEXT_PUBLIC_GA_TRACKING_ID',
  'NEXT_PUBLIC_GOOGLE_TAG_ID',
  'NEXT_PUBLIC_GOOGLE_ADS_ID',
  'NEXT_PUBLIC_META_PIXEL_ID',
];

const placeholders = new Set([
  'PLACEHOLDER_API_KEY',
  'REPLACE_WITH_GA4_MEASUREMENT_ID',
  'REPLACE_WITH_GOOGLE_TAG_ID',
  'REPLACE_WITH_GOOGLE_ADS_ID',
  'REPLACE_WITH_META_PIXEL_ID',
  'REPLACE_WITH_GOOGLE_MAPS_API_KEY',
]);

const missing = [];
const invalid = [];

for (const key of required) {
  const value = map.get(key);
  if (!value) {
    missing.push(key);
    continue;
  }
  if (placeholders.has(value)) {
    invalid.push(`${key} uses placeholder value`);
  }
}

const ga = map.get('NEXT_PUBLIC_GA_TRACKING_ID') ?? '';
const gt = map.get('NEXT_PUBLIC_GOOGLE_TAG_ID') ?? '';
const ads = map.get('NEXT_PUBLIC_GOOGLE_ADS_ID') ?? '';
const pixel = map.get('NEXT_PUBLIC_META_PIXEL_ID') ?? '';

if (ga && !/^G-[A-Z0-9]+$/i.test(ga)) invalid.push('NEXT_PUBLIC_GA_TRACKING_ID format is invalid');
if (gt && !/^GT-[A-Z0-9]+$/i.test(gt)) invalid.push('NEXT_PUBLIC_GOOGLE_TAG_ID format is invalid');
if (ads && !/^AW-[0-9]+$/i.test(ads)) invalid.push('NEXT_PUBLIC_GOOGLE_ADS_ID format is invalid');
if (pixel && !/^[0-9]{8,20}$/.test(pixel)) invalid.push('NEXT_PUBLIC_META_PIXEL_ID format is invalid');

if (missing.length || invalid.length) {
  console.error('[tracking:env] Configuration check failed.');
  if (missing.length) {
    console.error(`- Missing: ${missing.join(', ')}`);
  }
  if (invalid.length) {
    console.error(`- Invalid: ${invalid.join('; ')}`);
  }
  process.exit(1);
}

console.log('[tracking:env] OK - tracking environment is ready.');
