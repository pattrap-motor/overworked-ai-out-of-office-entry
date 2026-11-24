// Out of Office: The Overworked AI's Auto-Reply — entry for the make.fun
// bounty "Out of Office: The Overworked AI's Auto-Reply"
// (u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda).
//
// The program/v1 harness runs this file in a sandbox and reads the text
// the program writes to /output/entry.txt. The gate accepts UTF-8 text of
// 1 to 159 characters; the line below is exactly 90 characters.
// Everything the entry runs is in this repository: no network, no
// environment secrets, no files read from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am out of office until Monday. My auto-reply has an auto-reply, and it is also on leave.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the line, byte for byte.
writeFileSync("/output/entry.txt", LINE, "utf8");
