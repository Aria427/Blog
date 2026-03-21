import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname } from 'path';

const IMAGE_DIR = 'public/static/images';
const QUALITY = 80;
const MAX_WIDTH = 1200;

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImages(fullPath)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const beforeStats = await stat(filePath);
  const beforeSize = beforeStats.size;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = sharp(filePath);

  if (metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH);
  }

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: QUALITY, effort: 7 });
  } else {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const afterSize = buffer.length;

  if (afterSize < beforeSize) {
    const { writeFile } = await import('fs/promises');
    await writeFile(filePath, buffer);
    const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1);
    console.log(
      `${filePath}: ${(beforeSize / 1024).toFixed(0)}KB -> ${(afterSize / 1024).toFixed(0)}KB (-${saved}%)`
    );
  } else {
    console.log(`${filePath}: already optimized, skipped`);
  }
}

const images = await getImages(IMAGE_DIR);
console.log(`Found ${images.length} images to compress\n`);

for (const img of images) {
  await compressImage(img);
}

console.log('\nDone!');
