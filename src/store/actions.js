import * as types from './type.js'
export default {
    showloader:({ commit }) => {
        commit( types.SHOWLOADING )
    },
    hideloader:({ commit }) => {
        commit( types.HIDELOADING )
    },
    addgood:({ commit }) => {
      commit( types.ADDGOODS )
    },
    detelegood:({ commit }) => {
      commit( types.DETELEGOODS )
    }
}
