<template id="">
  <div class="order-box">
    <vHeader :headTitle="pTitle" :isBack='isBack' :operation="operation"></vHeader>
    <div class="order-content">
      <div class="tab-box box-flex">
        <div class="item-list" :class="{active: currentIndex == item.id}" @click="selectTab(item)"  v-for="item in tabList">{{ item.name }} </div>
      </div>
      <div class="order-list-box">
        <div class="order-list" v-for="item in orderList">
          <div class="box-btw">
            <span>订单编号：{{ item.identifier }}</span>
            <span>{{ item.status == 0 ? '未付款' : (item.status == 1 ? '待提货' : '已提货') }}</span>
          </div>
          <div class="box-btw">
            <img src="../assets/image/default.png" alt="">
            <Icon type="chevron-right"></Icon>
          </div>
          <div class="box-btw">
            <span>2018/04/30 13:51</span>
            <p><span>共{{ item.num }}件商品</span> <span>{{ item.priceFee }}</span></p>
          </div>
          <div class="box-end">
            <button type="button" name="button">去付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
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
      operation:{
        text: '',
        isOperation: false
      },
      currentIndex:0,
      tabList:[
        {name:'全部',id:1, status: 1},
        {name:'未付款',id:2, status: 2},
        {name:'待提货',id:3, status: 3},
        {name:'已提货',id:4, status: 4}
      ],
      list:[
        { identifier: 10841,status: 3,num: 2,priceFee: 13.22, created:''},
        { identifier: 10141,status: 2,num: 3,priceFee: 17.32, created:''},
        { identifier: 10741,status: 4,num: 2,priceFee: 19.22, created:''},
        { identifier: 10241,status: 4,num: 5,priceFee: 10.42, created:''},
        { identifier: 10341,status: 3,num: 4,priceFee: 12.22, created:''},
        { identifier: 10041,status: 2,num: 7,priceFee: 15.62, created:''},
        { identifier: 10541,status: 3,num: 9,priceFee: 13.29, created:''},
        { identifier: 10641,status: 4,num: 1,priceFee: 18.22, created:''},
        { identifier: 10941,status: 2,num: 5,priceFee: 11.63, created:''}
      ],
      orderList:[]
    }
  },
  mounted(){
    let vm = this
    vm.currentIndex = vm.$route.params.id
    vm.orderList = _.filter(vm.list, function(item){
      if (vm.currentIndex == 1) {
        return item
      }else{
        return vm.currentIndex == item.status
      }
    })
  },
  methods:{
    selectTab (item) {
      this.currentIndex = item.id
      let orderList = this.list
      this.orderList = _.filter(orderList,function(_item){
        if(item.status == 1){
          return item
        }else {
          return _item.status == item.status
        }
      })
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
  // height: calc(100% - 80px)
  width: 100%
  color: #333333
  background: $bg-gray
  .tab-box
    position: fixed
    left: 0
    top: 80px
    width: 100%
    height: 100px
    border-bottom: 1px solid $border-gray
    background: $bg-white
    .item-list
      flex: 1
      height: 100px
      line-height: 100px
      @include font-dpr(12px)
      text-align: center
  .order-list-box
    margin-top: 120px
    .order-list
      background: $bg-white
      margin-bottom: 20px
      div
        border-top: 1px solid $border-gray
        padding: 20px 25px
        @include font-dpr(12px)
        button
          border: none
          background: none
</style>
