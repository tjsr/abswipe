import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    external: [...Object.keys(packageJson.peerDependencies || {})],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), postcss()],
  },
  {
    external: [...Object.keys(packageJson.peerDependencies || {}), /\.css$/],
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
