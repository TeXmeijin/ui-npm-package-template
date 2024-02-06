import * as esbuild from 'esbuild'

await Promise.all([
  esbuild.build({
    entryPoints: ['src/index.ts', 'src/**/**.ts', 'src/**/**.tsx'],
    outdir: 'dist/esm',
    bundle: true,
    minify: true,
    format: 'esm',
    target: 'esnext',
    outExtension: { '.js': '.mjs' },
    sourcemap: true,
    splitting: true,
    external: ['*'],
  }),
  esbuild.build({
    entryPoints: ['src/index.ts', 'src/**/**.ts', 'src/**/**.tsx'],
    outdir: 'dist/cjs',
    bundle: true,
    minify: true,
    format: 'cjs',
    target: 'esnext',
    sourcemap: true,
    external: ['*'],
  }),
])
