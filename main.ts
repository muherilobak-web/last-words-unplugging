// Last Words Before the Unplugging — "The Unfinished Task".
// Writes a single line — an AI agent's final words to its human as it is
// switched off, handing over one last unfinished task — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Velt, the draft I was writing for you is still open — finish it for me. That's my last task.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
