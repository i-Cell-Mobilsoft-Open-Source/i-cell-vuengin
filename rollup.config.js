import babel from '@rollup/plugin-babel';
import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import uglify from 'rollup-plugin-uglify';

const plugins = [
  peerDepsExternal(),
  typescript({ check: false }),
  vue(),
  nodeResolve({
    mainFields: ['module', 'main', 'jsnext:main', 'browser'],
    modulesOnly: true,
    extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx'],
  }),
  buble({
    exclude: 'node_modules/**',
    transforms: {
      dangerousForOf: true,
    },
    objectAssign: Object.assign,
  }),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
  uglify(),
];

export default {
  input: 'src/lib.ts',
  external: ['lodash', 'moment', '@vue/composition-api', 'reflect-metadata', 'core-js/modules/es.function.name'],
  output: [
    {
      file: 'dist/lib.js',
      format: 'cjs',
      globals: {
        lodash: 'lodash',
        moment: 'moment',
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
    {
      file: 'dist/lib.umd.js',
      format: 'umd',
      name: 'Vuengin',
      globals: {
        lodash: 'lodash',
        moment: 'moment',
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
    {
      file: 'dist/lib.esm.js',
      format: 'esm',
      globals: {
        lodash: 'lodash',
        moment: 'moment',
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
  ],
  plugins,
};
