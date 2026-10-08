import sharp from "sharp";
import { readdir, mkdir, copyFile, stat, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.resolve("public");
const BACKUP_DIR = path.resolve(".image-backup");
const MAX_SIDE = 2048;           // cap longest dimension
const JPEG_Q = 78;
const PNG_Q = 82;

// Files passed as CLI args (basenames) => only process those. Empty => all.
const only = process.argv.slice(2);

const kb = (n) => (n / 1024).toFixed(0) + " KB";
const isImg = (f) => /\.(png|jpe?g)$/i.test(f);

async function compressOne(file) {
  const src = path.join(PUBLIC_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const before = (await stat(src)).size;

  // back up original once
  const backup = path.join(BACKUP_DIR, file);
  if (!existsSync(backup)) await copyFile(src, backup);

  const img = sharp(backup, { failOn: "none" }); // read from pristine backup
  const meta = await img.metadata();
  let pipe = sharp(backup, { failOn: "none" }).rotate(); // respect EXIF

  const longest = Math.max(meta.width || 0, meta.height || 0);
  if (longest > MAX_SIDE) {
    pipe = pipe.resize({ width: meta.width >= meta.height ? MAX_SIDE : undefined,
                         height: meta.height > meta.width ? MAX_SIDE : undefined,
                         fit: "inside", withoutEnlargement: true });
  }

  if (ext === ".png") {
    pipe = pipe.png({ palette: true, quality: PNG_Q, effort: 8, compressionLevel: 9 });
  } else {
    pipe = pipe.jpeg({ quality: JPEG_Q, mozjpeg: true });
  }

  const tmp = src + ".tmp";
  await pipe.toFile(tmp);
  const after = (await stat(tmp)).size;

  if (after < before) {
    await rename(tmp, src);
    return { file, before, after, saved: before - after, replaced: true };
  } else {
    // compressed not smaller -> keep original, discard tmp
    const { unlink } = await import("node:fs/promises");
    await unlink(tmp);
    return { file, before, after, saved: 0, replaced: false };
  }
}

async function main() {
  await mkdir(BACKUP_DIR, { recursive: true });
  let list = (await readdir(PUBLIC_DIR)).filter(isImg);
  if (only.length) list = list.filter((f) => only.includes(f));
  list.sort();

  let totB = 0, totA = 0, changed = 0;
  const rows = [];
  for (const f of list) {
    try {
      const r = await compressOne(f);
      totB += r.before; totA += r.after || r.before;
      if (r.replaced) changed++;
      rows.push(r);
      const pct = r.before ? Math.round((1 - r.after / r.before) * 100) : 0;
      console.log(
        `${r.replaced ? "✓" : "·"} ${f.padEnd(34)} ${kb(r.before).padStart(9)} -> ${kb(r.after).padStart(9)} ${r.replaced ? `(-${pct}%)` : "(kept)"}`
      );
    } catch (e) {
      console.log(`✗ ${f}  ERROR: ${e.message}`);
    }
  }
  console.log("\n———");
  console.log(`Files processed: ${list.length}, replaced: ${changed}`);
  console.log(`Total: ${(totB/1048576).toFixed(1)} MB -> ${(totA/1048576).toFixed(1)} MB  (saved ${((totB-totA)/1048576).toFixed(1)} MB, -${Math.round((1-totA/totB)*100)}%)`);
}

main();
