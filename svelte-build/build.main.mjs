import build from './build.mjs';

const result = await build({
    entryPoints: ["src/main.ts"],
    outdir: process.env.ASSET_FOLDER,

})
