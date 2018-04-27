<template id="">
  <div class="footer-box box-flex">
    <div class="" @click="goHome()" > 首页 </div>
    <div class="">
       <div>购物车</div>
     </div>
    <div class="" @click="userCenter()"> 个人中心 </div>
  </div>
</template>
<script>
export default {
  name: 'vFooter',
  data () {
    return {

    }
  },
  methods: {
      userCenter(){
        this.$emit('userCenter')
      },
      goHome(){
        this.$emit('goHome')
      }
  }
}

</script>
<style lang="sass" scoped rel="stylesheet">
@import '../../assets/styles/mixin'
@import '../../assets/styles/variable'

.footer-box
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  height: 100px
  align-items: center
  background: $bg-white
  border-top: 1px solid $border-gray
  z-index: 999
  div
    flex: 1
    height: 100px
    line-height: 100px
    color: $font-gray6
    text-align: center
    @include font-dpr(12px)
    div
      display: block
      color: $font-white
      width: 120px
      height: 120px
      line-height: 120px
      border-radius: 50%
      position: relative
      top: -30px
      margin: 0 auto
      background: $color-sub-theme
</style>
