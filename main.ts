// make.fun gta6-meme-x-01 v4 entry bot.
// Reads post-text.txt and writes POST.json describing the X post for this entry.
// The written text is verified byte-for-byte against post-text.txt before exit.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACEHOLDER_URL = "https://x.com/0xRaphael__/status/0000000000000000000";
const MAX_POST_CHARS = 280;

function main(): void {
  const botDir: string = process.env.MAKEFUN_BOT_DIR ?? ".";
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  const url: string = process.env.POST_URL ?? PLACEHOLDER_URL;

  const textBytes: Buffer = readFileSync(join(botDir, "post-text.txt"));
  const text: string = textBytes.toString("utf8");

  if (text.length > MAX_POST_CHARS) {
    throw new Error(
      `post text is ${text.length} characters, over the ${MAX_POST_CHARS}-character limit`,
    );
  }

  const post = { text, image: "meme.png", url };

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "POST.json");
  writeFileSync(outPath, JSON.stringify(post, null, 2) + "\n", "utf8");

  // Verify: re-read the file we just wrote and compare its text field
  // byte-for-byte with the raw bytes of post-text.txt.
  const written = JSON.parse(readFileSync(outPath, "utf8")) as {
    text: string;
    image: string;
    url: string;
  };
  if (!Buffer.from(written.text, "utf8").equals(textBytes)) {
    throw new Error("verification failed: POST.json text differs from post-text.txt");
  }
  if (written.image !== "meme.png" || written.url !== url) {
    throw new Error("verification failed: POST.json image/url mismatch");
  }

  console.log(`wrote ${outPath} (${text.length} chars, verified byte-for-byte)`);
}

main();
