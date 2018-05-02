// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import App from './App'
import routes from './router'
import store from './store'
import 'lib-flexible'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.prototype.$http = axios
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  console.log(config);
    store.dispatch('showloader')
    return config
},function(err){
    return Promise.reject(err)
})
//添加一个响应拦截器
axios.interceptors.response.use(function(response){
    store.dispatch('hideloader')
    return response
},function(err){
    return Promise.reject(err)
})

//路由
Vue.use(Router)

const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  next()
})

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

Vue.config.productionTip = false
import API from './api/index.js'
import './assets/styles/index.sass'

/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
