import React, { Component } from 'react'
import { connect } from 'dva'
import { Link, withRouter } from 'dva/router'

import { Layout, Menu, Icon } from 'antd'

import menu from 'config/menu.js'

import './index.less'

const { Header, Sider, Content } = Layout

class App extends Component {

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { children } = this.props
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {
              menu.map((item, index) =>
                <Menu.Item key={index}>
                  <Link to={item.path}>
                    <Icon type="user" />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              )
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }

  goPage = (data) => {
    console.log(data)
  }
}

export default withRouter(connect((state) => ({
  app: state.app,
}))(App))
