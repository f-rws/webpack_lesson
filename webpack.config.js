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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg|ico|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "images/[name].[ext]"
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: outputPath
    },
    open: true,
  }
}