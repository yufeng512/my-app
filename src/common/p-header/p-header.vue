<template id="">
  <div class="header-box">
    <div class="back" v-show="isBack" @click="$router.go(-1)">
      <Icon type="chevron-left"></Icon>
      <span>返回</span>
    </div>
    <h4>{{headTitle}}</h4>
    <div class="operation" v-show="operation.isOperation" @click="editOperation">
      {{ operation.text }}
    </div>
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
    },
    operation:{
      type: Object,
      required: true
    }
  },
  methods:{
    editOperation(){
      this.$emit('editOperation')
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
  .back
    position: absolute
    left: 0
    height: 80px
    display: flex
    align-items: center
    line-height: 80px
    padding: 0 20px
    color: $font-white
    @include font-dpr(12px)
    span
      margin-left: 5px
  .operation
    position: absolute
    right: 0
    top: 0
    height: 80px
    line-height: 80px
    padding: 0 30px
    color: $font-white
    @include font-dpr(12px)
  h4
    text-align: center
    line-height: 80px
    color: $font-white
    @include font-dpr(14px)

</style>
