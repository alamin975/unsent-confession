// Unsent: The Micro-Confession Sprint — one micro-confession in two parts:
// a To: line naming who it was meant for, and the unsent message itself.
import * as fs from "node:fs";

const entry = "To: The friend I stopped calling\nI still type your name when something funny happens, then delete it before I press send.";

// Write the two-line confession exactly as typed: To: line, then the message.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
