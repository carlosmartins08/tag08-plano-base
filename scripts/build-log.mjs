import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const run = spawnSync('npm', ['run', 'build'], {
  encoding: 'utf8',
  shell: true,
  env: { ...process.env, FORCE_COLOR: '0', NO_COLOR: '1' },
  maxBuffer: 1024 * 1024 * 20,
});

const output = `${run.stdout ?? ''}${run.stderr ?? ''}`;

const clean = output
  .replace(/\u001b\[[0-9;]*[A-Za-z]/g, '')
  .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
  .replace(/^\s*\n/gm, '')
  .replace(/\n{3,}/g, '\n\n');

writeFileSync('build_log.txt', clean, 'utf8');
writeFileSync('build_log_2.txt', clean, 'utf8');

if (typeof run.status === 'number') {
  process.exit(run.status);
}

process.exit(1);
