import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const externalDeps = [
  ...Object.keys(packageJson.peerDependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
  // ...Object.keys(packageJson.dependencies || {}),
  'react',
  /\.css$/,
];

export default [
  {
    external: externalDeps,
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        globals: {
          react: 'React',
        },
        // preserveModules: true,
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        globals: {
          react: 'React',
        },
        // preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), postcss()],
  },
  {
    external: externalDeps,
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
