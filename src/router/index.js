import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

import App from '../modules/index'

import routers from './router'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {
            routers.map(({ path, ...dynamics }, key) => {
              console.log(dynamics)
              return (
                <Route
                  path={path}
                  exact
                  key={key}
                  component={dynamic({ app, ...dynamics })}
                />
              )
            })
          }
          <Route exact render={() => <div>无效的地址</div>} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Routers