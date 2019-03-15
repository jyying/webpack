const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devtool: 'inline-source-map',
  mode:'development',
  plugins: [
    new BundleAnalyzerPlugin()
  ],
}