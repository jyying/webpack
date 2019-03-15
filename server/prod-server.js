const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression())

app.use(express.static(path.resolve(__dirname, '../dist')))

app.listen(8081, function () {
  console.log('已经启动8081端口')
})