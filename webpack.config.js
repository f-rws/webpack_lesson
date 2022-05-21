const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
// const outputPath = path.resolve(__dirname, 'public');
console.log(outputPath)

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: outputPath
  },
  mode: "development",
  devServer: {
    static: {
      directory: outputPath
    },
    open: true,
  }
}