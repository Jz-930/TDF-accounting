const fs = require('fs');
const path = require('path');

const originContentDir = path.join(__dirname, 'origin_content', 'old_assets');
if (!fs.existsSync(originContentDir)) {
    fs.mkdirSync(originContentDir, { recursive: true });
}

const sources = [
    path.join(__dirname, 'tdf-accounting', 'public', 'images'),
    path.join(__dirname, 'new_assets')
];

let movedCount = 0;

for (const srcDir of sources) {
    if (!fs.existsSync(srcDir)) continue;
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        // Skip favicon which wasn't converted
        if (file === 'favicon.png' || file === 'favicon.ico') continue;
        
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            // Check if there is a corresponding webp file to make sure it was a replaced original
            const webpFile = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
            if (fs.existsSync(path.join(srcDir, webpFile))) {
                let suffix = "";
                let newFileName = file;
                let newPath = path.join(originContentDir, newFileName);
                
                // Avoid overwriting if same filename from different directories
                while (fs.existsSync(newPath)) {
                    suffix = suffix ? suffix + 1 : 1;
                    const name = path.parse(file).name;
                    newFileName = `${name}_${suffix}${ext}`;
                    newPath = path.join(originContentDir, newFileName);
                }

                const oldPath = path.join(srcDir, file);
                try {
                    // Try rename first
                    fs.renameSync(oldPath, newPath);
                    console.log(`Moved: ${file} -> origin_content/old_assets/${newFileName}`);
                    movedCount++;
                } catch (e) {
                    try {
                        // If rename fails (EPERM), try copy and unlink, or just copy to back it up
                        fs.copyFileSync(oldPath, newPath);
                        try {
                            fs.unlinkSync(oldPath);
                            console.log(`Moved via copy/unlink: ${file}`);
                            movedCount++;
                        } catch (e3) {
                            console.warn(`File is locked but backed up to origin_content. Still could not delete original: ${oldPath}`);
                            // We don't increment movedCount because the original is still there
                        }
                    } catch (e2) {
                        console.error(`Failed to move ${file}: ${e2.message}`);
                    }
                }
            }
        }
    }
}
console.log(`Finished handling old images.`);
