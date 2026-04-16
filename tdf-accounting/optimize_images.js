const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const tdfRoot = __dirname;

const imageDirs = [
  path.join(tdfRoot, 'public', 'images'),
  path.join(projectRoot, 'new_assets')
];

const updateDirs = [
  path.join(tdfRoot, 'src'),
  path.join(projectRoot, 'new_assets'),
  path.join(projectRoot, 'plan')
];

const MAX_WIDTH = 1920;
const QUALITY = 85;

const ignoreList = ['favicon.png', 'favicon.ico'];

async function processImages(dir) {
    if (!fs.existsSync(dir)) return [];
    
    let converted = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            converted.push(...await processImages(fullPath));
        } else {
            const ext = path.extname(file).toLowerCase();
            if ((ext === '.jpg' || ext === '.jpeg' || ext === '.png') && !ignoreList.includes(file)) {
                
                const webpFileName = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
                const outputFullPath = path.join(dir, webpFileName);
                
                try {
                    const metadata = await sharp(fullPath).metadata();
                    
                    let image = sharp(fullPath);
                    
                    if (metadata.width > MAX_WIDTH) {
                        image = image.resize({ width: MAX_WIDTH, withoutEnlargement: true });
                    }
                    
                    await image.webp({ quality: QUALITY }).toFile(outputFullPath);
                    console.log(`Converted: ${file} -> ${webpFileName}`);
                    
                    converted.push({
                      old: file,
                      new: webpFileName
                    });

                    try {
                        fs.unlinkSync(fullPath);
                        console.log(`Deleted original: ${file}`);
                    } catch (e) {
                        console.warn(`Could not delete original: ${file} - ${e.message}`);
                    }
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            }
        }
    }
    return converted;
}

function updateFileContent(dir, map) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            updateFileContent(fullPath, map);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let origContent = content;
            map.forEach(item => {
                const regex = new RegExp(item.old.replace(/\./g, '\\.'), 'g');
                content = content.replace(regex, item.new);
            });
            if (content !== origContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated references in: ${fullPath}`);
            }
        }
    }
}

async function main() {
    console.log("Starting optimization...");
    for (const dir of imageDirs) {
        const map = await processImages(dir);
        if (map.length > 0) {
            for (const updateDir of updateDirs) {
                updateFileContent(updateDir, map);
            }
        }
    }
    console.log("Optimization complete.");
}

main();
