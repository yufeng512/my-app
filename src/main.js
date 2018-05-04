// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import store from './store'
import 'lib-flexible'

import MintUI from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

import API from './api/index.js'
import './assets/styles/index.sass'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
