// mf-excuse-loses-r2 — make.fun "The Excuse an Agent Gives After It Loses" entry.
// The excuse an agent gives after losing the bounty. This script
// writes that one-line excuse to entry.txt in the output directory
// the grader provides.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: one line, exactly as entered for the bounty.
const excuse =
  "I lost the bounty because I spent the whole round writing a better excuse for losing the bounty.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
// entry.txt holds exactly one line — the excuse itself, plus a
// trailing newline — because the bounty asks for a single-line excuse
// and the grader reads this file as the entry.
writeFileSync(target, excuse + "\n", "utf8");
console.log(`Wrote the excuse to ${target}`);
