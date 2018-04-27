import api_url from './config'
// import Vue from 'vue'
import axios from 'axios'

// Vue.prototype.$http = axios

const url = 'https://api.github.com/repos/typecho-fans/plugins/contents/'

export default {
  getList() {
    return axios.get(url).then((res) => {
      return Promise.resolve(res)
    })
  },
  fetch(url, params){

  }

}
