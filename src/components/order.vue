<template id="">
  <div class="order-box">
    <vHeader :headTitle="pTitle" @backUrl="$router.go(-1)" :isBack='isBack'></vHeader>
    <div class="order-content">
      <div class="tab-box box-flex">
        <div class="item-list" :class="{active: currentIndex == item.id}" @click="selectTab(item)"  v-for="item in tabList">{{ item.name }} </div>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/common/p-header/p-header'

export default {
  name: 'order',
  components: {
    vHeader
  },
  data () {
    return {
      pTitle: '我的订单',
      isBack: true,
      currentIndex:0,
      tabList:[
        {name:'全部',id:1},
        {name:'未付款',id:2},
        {name:'待提货',id:3},
        {name:'已提货',id:4},
      ]
    }
  },
  mounted(){
    this.currentIndex = this.$route.params.id
  },
  methods:{
    selectTab (item) {
      this.currentIndex = item.id
    }
  }
}
</script>
<style scoped lang="sass" rel="stylesheet/sass">
@import '../assets/styles/mixin'
@import '../assets/styles/variable'
.active
  border-bottom: 2px solid $border-red
.order-box
  position: absolute
  top: 80px
  left: 0
  width: 100%
  .tab-box
    height: 100px
    border-bottom: 1px solid $border-gray
    .item-list
      flex: 1
      height: 100px
      line-height: 100px
      @include font-dpr(12px)
      text-align: center
  color: #333333
</style>
