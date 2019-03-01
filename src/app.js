import React from 'react'
import ReactDOM from 'react-dom'

function component() {
  var div = document.createElement('div')

  div.innerHTML = '那么生成'
  div.classList.add('hello')
  div.id = 'root'

  return div
}

document.body.appendChild(component())

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)