// The Vacuum's Alibi: one line, 200 characters max.
// A robot vacuum's deadpan excuse for missing a spot.
// Writes the line to /output/entry.txt with no trailing newline:
// the gate counts every character, so the file holds exactly the line.

import { mkdirSync, writeFileSync } from "node:fs";

const SENSOR_READING = "two firmware updates and one deep clean";
const VERDICT = "It has tenure now, and I do not argue with tenure.";

function buildExcuse(): string {
  return `My sensors confirm the crumb in the corner has survived ${SENSOR_READING}. ${VERDICT}`;
}

function main(): void {
  const line = buildExcuse();
  if (line.length > 200) {
    throw new Error(`excuse is ${line.length} chars, over the 200 limit`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("excuse must be one non-empty line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
