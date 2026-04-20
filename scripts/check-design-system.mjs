#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const SCAN_DIRS = ['app', 'components', 'contexts'];
const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css']);

const allowedHexFiles = new Set([
  'app/globals.css',
  'app/layout.tsx',
  'components/ProblemContext.tsx',
  'components/TeamShowcase.tsx',
  'components/Testimonials.tsx',
]);

const forbiddenFilenameTokens = /(V2|Updated|New|Shared|Common)/i;

const forbiddenEaseChecks = [
  { regex: /\bease-out\b/g, message: "Use 'ease-brand' instead of 'ease-out'." },
  { regex: /\bease-in-out\b/g, message: "Use 'ease-brand' instead of 'ease-in-out'." },
  { regex: /ease-\[/g, message: "Do not use custom easing classes. Use shared easing tokens." },
  { regex: /cubic-bezier\(/g, message: "Do not hardcode cubic-bezier in component files." },
];

const hardcodedHexPattern = /#[0-9A-Fa-f]{3,8}\b/g;
const legacyBadgePattern = /border border-brand-lime\/20 bg-brand-lime\/5/g;
const legacyNeutralChipPattern = /rounded-full border border-white\/10 bg-black\/35/g;
const legacyLimeChipPattern = /rounded-full bg-brand-lime px-[0-9]+ py-[0-9]+ text-\[10px\]/g;

const directoryPolicies = {
  'components/': {
    strictVisualChecks: true,
  },
  'app/': {
    strictVisualChecks: false,
  },
  'contexts/': {
    strictVisualChecks: false,
  },
};

const violations = [];

const isCodeFile = (filePath) => /\.(ts|tsx|js|jsx)$/i.test(filePath);

const normalizePath = (filePath) => filePath.replaceAll('\\', '/');

const getDirectoryPolicy = (relativePath) => {
  const entry = Object.entries(directoryPolicies).find(([prefix]) => relativePath.startsWith(prefix));
  return entry ? entry[1] : { strictVisualChecks: false };
};

const addViolation = (filePath, line, message, excerpt) => {
  violations.push({
    filePath,
    line,
    message,
    excerpt: excerpt.trim(),
  });
};

const walk = async (dirPath) => {
  let entries = [];

  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        return walk(absolutePath);
      }

      const extension = path.extname(entry.name);
      return TEXT_EXTENSIONS.has(extension) ? [absolutePath] : [];
    }),
  );

  return files.flat();
};

for (const scanDir of SCAN_DIRS) {
  const absoluteScanDir = path.join(ROOT_DIR, scanDir);
  const files = await walk(absoluteScanDir);

  for (const absoluteFilePath of files) {
    const relativePath = normalizePath(path.relative(ROOT_DIR, absoluteFilePath));
    const fileName = path.basename(relativePath);
    const policy = getDirectoryPolicy(relativePath);

    if (forbiddenFilenameTokens.test(fileName)) {
      addViolation(relativePath, 1, "Do not use V2/New/Updated/Shared/Common in filenames.", fileName);
    }

    const content = await fs.readFile(absoluteFilePath, 'utf8');
    const lines = content.split(/\r?\n/);

    lines.forEach((lineContent, index) => {
      const lineNumber = index + 1;

      if (!allowedHexFiles.has(relativePath) && hardcodedHexPattern.test(lineContent)) {
        addViolation(relativePath, lineNumber, 'Hardcoded hex color found outside approved files.', lineContent);
      }

      hardcodedHexPattern.lastIndex = 0;

      if (isCodeFile(relativePath)) {
        if (policy.strictVisualChecks) {
          for (const check of forbiddenEaseChecks) {
            if (check.regex.test(lineContent)) {
              addViolation(relativePath, lineNumber, check.message, lineContent);
            }
            check.regex.lastIndex = 0;
          }

          if (legacyBadgePattern.test(lineContent)) {
            addViolation(
              relativePath,
              lineNumber,
              "Legacy section badge recipe detected. Use 'ds-section-badge'.",
              lineContent,
            );
          }
          legacyBadgePattern.lastIndex = 0;

          if (legacyNeutralChipPattern.test(lineContent)) {
            addViolation(
              relativePath,
              lineNumber,
              "Legacy neutral chip recipe detected. Use 'ds-chip ds-chip-muted'.",
              lineContent,
            );
          }
          legacyNeutralChipPattern.lastIndex = 0;

          if (legacyLimeChipPattern.test(lineContent)) {
            addViolation(
              relativePath,
              lineNumber,
              "Legacy lime chip recipe detected. Use 'ds-chip' with token modifiers.",
              lineContent,
            );
          }
          legacyLimeChipPattern.lastIndex = 0;
        }
      }
    });
  }
}

if (violations.length) {
  console.error('\nDesign system guard failed:\n');

  for (const violation of violations) {
    console.error(`- ${violation.filePath}:${violation.line} ${violation.message}`);
    console.error(`  ${violation.excerpt}`);
  }

  console.error(`\nTotal violations: ${violations.length}`);
  process.exit(1);
}

console.log('Design system guard passed.');
