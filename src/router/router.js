export default [
  {
    path: '/main',
    models: () => [import('../modules/main/index.m')],
    component: () => import('../modules/main/index'),
  },
  {
    path: '/print',
    models: () => [import('../modules/print/index.m')],
    component: () => import('../modules/print/index.v'),
  },
]