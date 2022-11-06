import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const production = process.env.NODE_ENV === 'production';
const baseconfig = {
  mainFields: ["svelte", "browser", "module", "main"],
  loader: { '.svg': 'dataurl' },
  // assetNames: 'public/assets/[name]-[hash]',
  bundle: true,
  charset: 'utf8',
  sourcemap: true,
  watch: process.argv.includes('--watch'),
  minify: production,
  target: 'es6',
  plugins: [sveltePlugin({ preprocess: sveltePreprocess() })],
  logLevel: "info"
}
async function build(config) {
  return esbuild.build({ ...baseconfig, ...config })//.catch(() => process.exit(1))
}
export default build;
