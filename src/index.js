import './index.css'
import printMe from './print.js'

function component() {
  var div = document.createElement('div')
  var btn = document.createElement('button')

  div.innerHTML = '那么生成'
  div.classList.add('hello')

  btn.innerHTML = '点击'
  btn.onclick = printMe

  div.appendChild(btn)

  return div
}

document.body.appendChild(component())