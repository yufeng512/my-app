import { SHOWLOADING,HIDELOADING,ADDLIST} from './type.js'

const state = {
    showLoading: false,
    dataList: [1,2,3,4,5]
}

const mutations = {
    [SHOWLOADING](state){
        state.showLoading = true
    },
    [HIDELOADING](state){
        state.showLoading = false
    },
    [ADDLIST](state){
      state.dataList.push(33)
    }
}

const getters = {
    showLoading(state){
        return state.showLoading
    },
    dataList(){
        return state.dataList
    }

}

export default {
    state,mutations,getters
}
