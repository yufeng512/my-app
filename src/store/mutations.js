import * as types from './type.js'

const state = {
    showLoading: false,
    goodsList: [],
    goodsId:1,
    currentGoods:{}
}

const mutations = {
    [types.SHOWLOADING](state){
        state.showLoading = true
    },
    [types.HIDELOADING](state){
        state.showLoading = false
    },
    [types.ADDGOODS](state){
      state.goodsId++
      let goods = {id: state.goodsId,name: '芦荟',priceFee: 16.5,standard: '160ml',num: 1,isCheck: false}
      state.goodsList.push(goods)
      state.currentGoods = goods
    },
    [types.DETELEGOODS](state){
      let i = state.goodsList.indexOf(state.currentGoods)
      console.log(i);
      state.goodsList.splice(i,1)
    }
}

const getters = {
    showLoading(state){
        return state.showLoading
    },
    goodslist(){
      return state.goodsList
    }

}

export default {
    state,mutations,getters
}
