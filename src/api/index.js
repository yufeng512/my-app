// import Vue from 'vue'
import axios from 'axios'
import { Promise } from 'es6-promise'
import store from '../store'

const url = 'https://api.github.com/repos/typecho-fans/plugins/contents/'

// Vue.prototype.$http = axios
//添加一个请求拦截器
axios.interceptors.request.use(config => {
  const token = sessionStorage.getItem("token");
  config.data = JSON.stringify(config.data);
  config.headers = {
   'Content-Type':'application/json' //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
  };
  if (token) {
   config.headers.Authorization = "Token " + token; //携带权限参数
  }
  store.dispatch('showloader')
  return config;
 },
 err => {
  return Promise.reject(err);
 })
//添加一个响应拦截器
axios.interceptors.response.use(response => {
    store.dispatch('hideloader')
    console.log(response);
    if(response.status == 401) {
      this.$router.push('/login')//push后面是一个参数对象，可以携带很多参数，具体可以去vue-router上查看，例如query字段表示携带的参数
    }
    return response
  },
  err => {
    return Promise.reject(err)
  })

export default {
  getList() {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
       resolve(response);
      })
      .catch(err => {
       reject(err)
      })
    })
  },
  fetch(url, params){

  }

}
