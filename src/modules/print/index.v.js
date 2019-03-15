import React, { Component } from 'react'

import { connect } from 'dva'

class Print extends Component {

  render() {
    return (
      <div>
        打印页面
      </div>
    )
  }
}

export default connect((state) => ({
  print: state.print
}))(Print)