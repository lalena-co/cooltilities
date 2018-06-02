import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    name: 'cooltilities',
    file: 'dist/cooltilities.js',
    format: 'cjs',
    sourceMap: true,
    exports: 'named',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
