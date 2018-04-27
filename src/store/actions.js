import * as types from './type.js'
console.log(types.SHOWLOADING);
export default {
    showloader:({ commit }) => {
        commit( types.SHOWLOADING )
    },
    hideloader:({ commit }) => {
        commit( types.HIDELOADING )
    },
}
