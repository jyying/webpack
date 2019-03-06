import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

import App from '../src/index'

import routers from './router'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {
            routers.map(({ path, ...dynamics }, key) => {
              return (
                <Route
                  path={path}
                  key={key}
                  component={dynamic({ app, ...dynamics })}
                />
              )
            })
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Routers