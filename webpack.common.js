const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const production = process.env.NODE_ENV === 'production'
const extWebpackConfig = production ? require('./webpack.prod') : require('./webpack.dev')

const _webpack = {
  entry: {
    app: './src/modules/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, './src/config'), // 前端配置
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/app.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
  },
  optimization: {
    splitChunks: {
      name: 'common'
    }
  }
}
module.exports = merge(_webpack, extWebpackConfig)