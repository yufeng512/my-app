import axios from 'axios'

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
