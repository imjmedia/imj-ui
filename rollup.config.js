// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';
import image from '@rollup/plugin-image';
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import svg from 'rollup-plugin-svg-import';
import svgr from '@svgr/rollup'

import importAssets from 'rollup-plugin-import-assets';

const packageJson = require("./package.json");

export default [
  {
    input: './src/index.ts',

    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],

    plugins: [
      cleaner({
        targets: [
          './dist/'
        ]
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      svgr(),
      peerDepsExternal(),
      postcss({
        extract: true,
        modules: true,
        use: ['sass'],
      }),
      babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' }),
      
      
      
      //terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];