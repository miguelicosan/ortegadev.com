import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const IMAGES_DIR = './public/images';
const QUALITY = 85;

// Función recursiva para procesar directorios
async function processDirectory(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const outputPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      console.log(`Convirtiendo: ${fullPath}`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: QUALITY })
          .toFile(outputPath);
        
        const originalSize = stat.size;
        const newSize = statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${file} → ${file.replace(/\.(png|jpg|jpeg)$/i, '.webp')}`);
        console.log(`  ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% reducción)\n`);
      } catch (error) {
        console.error(`✗ Error procesando ${file}:`, error.message);
      }
    }
  }
}

console.log('🖼️  Iniciando conversión de imágenes a WebP...\n');
processDirectory(IMAGES_DIR)
  .then(() => {
    console.log('✅ Conversión completada!');
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
