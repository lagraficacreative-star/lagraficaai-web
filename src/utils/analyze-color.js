import { createReadStream } from 'fs';
import { PNG } from 'pngjs';

const stream = createReadStream('collage.png');
stream.pipe(new PNG({ filterType: 4 }))
    .on('parsed', function () {
        // Sample a few pixels from top-left to find background color
        const idx = 0; // Top left pixel (0,0)
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];

        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }

        console.log(`Top-left pixel: rgba(${r},${g},${b},${a})`);
        console.log(`Hex: #${toHex(r)}${toHex(g)}${toHex(b)}`);
    })
    .on('error', (err) => console.error('Error parsing PNG:', err));
