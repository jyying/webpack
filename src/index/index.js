import React, { Component } from 'react'

import { Layout, Menu, Icon } from 'antd'

import './index.less'

const { Header, Sider, Content } = Layout

export default class App extends Component {

  state = {
    collapsed: false,

    nav: [
      {
        title: "自动生成json模板",
        path: "",
        icon: true
      }
    ]
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { nav } = this.state
    const { children } = this.props
    console.log(this.props)
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              nav.map((item, index) =>
                <Menu.Item key={index}>
                  <Icon type="user" />
                  <span>{item.title}</span>
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
}