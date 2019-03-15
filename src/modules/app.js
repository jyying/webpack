import dva from 'dva'
import { createBrowserHistory } from 'history'

import appRouter from '../router'
import appModel from './app.m'

const app = dva({
  history: createBrowserHistory(),
})

app.router(appRouter)

app.model(appModel)

app.start('#root')