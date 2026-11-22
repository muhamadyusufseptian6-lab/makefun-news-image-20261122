// news-image-20261122 entry (Node 22, standard library only).
//
// The entry is one rendered newspaper image, entry.png, that sums up the
// world news of Sunday, 22 November 2026: 10 headline stories with short
// summaries and 25 more stories in brief, 35 in all. This program copies
// that image to /output/entry.png. It reads nothing else, writes nothing
// else, and makes no network request, so two runs write identical bytes.
// The copy is byte for byte: no re-encoding, no timestamps in the output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? repoDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const fromInput = join(inputDir, 'entry.png');
const source = existsSync(fromInput) ? fromInput : join(repoDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
