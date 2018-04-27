<template id="">
  <div class="header-box">
    <div v-show="isBack" @click="backUrl">
      <i class="icon-back"></i>
      <span>返回</span>
    </div>
    <h4>{{headTitle}}</h4>
  </div>
</template>
<script>
export default {
  name: 'p-header',
  data () {
    return {
    }
  },
  props: {
    headTitle: {
      type: String,
      required: true
    },
    isBack: {
      type: Boolean
    }
  },
  methods:{
    backUrl(){
      this.$emit('backUrl')
    }
  }
}

</script>
<style media="screen" lang="sass" rel="stylesheet/sass">
@import '../../assets/styles/mixin'
@import '../../assets/styles/variable'

.header-box
  width: 100%
  height: 80px
  position: fixed
  top: 0
  left: 0
  z-index: 999
  background: $color-background
  // border-bottom: 1px solid $border-gray
  div
    position: absolute
    left: 0
    height: 80px
    display: flex
    align-items: center
    line-height: 80px
    padding: 0 20px
    color: $font-white
    @include font-dpr(12px)
  h4
    text-align: center
    line-height: 80px
    color: $font-white
    @include font-dpr(14px)

</style>
