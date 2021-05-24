
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Redirect.vue') },
      { path: 'Home', component: () => import('pages/Home.vue') },
      { path: 'CakeInfo', component: () => import('pages/CakeInfo.vue') },
      { path: 'Shop', component: () => import('pages/Shop.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'CreateAccount', component: () => import('pages/CreateAccount.vue') },
      { path: 'ManageAccount', component: () => import('pages/ManageAccount.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
