import dva from 'dva'

import appRouter from '../router'

const app = dva()

app.router(appRouter)

app.start('#root')