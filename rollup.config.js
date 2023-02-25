// rollup.config.js
import path from 'path'
import postcss from 'rollup-plugin-postcss'

const resolveFile = source => path.resolve(__dirname, source)
export default {
  input: "./src/index.js",
  output: [
    {
      file: resolveFile('index.js'),
      format: 'es'
    },
  ],
  plugins:[
    postcss()
  ]
};