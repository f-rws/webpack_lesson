const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        type: 'asset',
        generator: {
          filename: 'images/[name][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // node-modules 配下の .js と .jsx ファイルを除外
        use: {
          loader: "babel-loader"
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
      // {
      //   test: /\.(jpe?g|png|svg|ico|gif)$/i,
      //   loader: "url-loader",
      //   options: {
      //     limit: 2048,
      //     name: "images/[name].[ext]"
      //   }
      // }
    ]
  },
  devServer: {
    static: {
      directory: outputPath
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}