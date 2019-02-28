const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.common.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: false,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

function getPage(page, req, res, next) {

  const filename = path.join(compiler.outputPath, page) + '.html'

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return (next(err))
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
}

app.get('/', getPage.bind(null, 'index'))

app.listen(8081, function () {
  console.log('已经启动8081端口')
})