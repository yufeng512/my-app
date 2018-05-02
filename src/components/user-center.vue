<style scoped lang="sass" rel="stylesheet/sass">
@import '../assets/styles/mixin'
@import '../assets/styles/variable'

.user-center-box
  position: absolute
  width: 100%
  background: $bg-gray
  height: 100%
  .user-content
    margin-top: 80px
    .user-box
      padding: 20px
      background: $bg-white
      border-top: 1px solid $border-gray
      border-bottom: 1px solid $border-gray
      .user-info-box
        align-items: center
        .head-pic
          width: 120px
          height: 120px
          border-radius: 50%
          background: $color-background-d
          margin-right: 20px
        .user-info
          h4
            color: $font-gray
            height: 40px
            line-height: 40px
            @include font-dpr(12px)
          p
            color: $font-gray
            height: 40px
            line-height: 40px
            @include font-dpr(12px)
    .areas-box
      background: $bg-white
      padding: 20px 0
      border-top: 1px solid $border-gray
      border-bottom: 1px solid $border-gray
      margin: 20px 0
      p
       color: $font-gray6
       padding: 10px 20px
       @include font-dpr(11px)
    .order-box
      background: $bg-white
      margin-bottom: 80px
      ul
        li
          padding: 0 20px
          height: 80px
          border-bottom: 1px solid $border-gray
          &:first-child
            border-top: 1px solid $border-gray
          span
            line-height: 80px
            color: $font-gray
            @include font-dpr(12px)
    .go-shoping
      width: 90%
      height: 80px
      border-radius: 10px
      color: $border-red
      text-align: center
      line-height: 80px
      @include font-dpr(14px)
      border: 1px solid $border-red
      margin: 0 auto
      background: $bg-white

</style>
<template id="">
  <div class="user-center-box">
    <vHeader :headTitle="pTitle" :isBack='isBack' :operation='operation' />
    <div class="user-content">
      <div class="user-box">
        <div class="user-info-box box-flex">
          <div class="head-pic">
            <img src="" alt="">
          </div>
          <div class="user-info">
            <h4>玉峰</h4>
            <p>13524542656</p>
          </div>
        </div>
        <div class="">

        </div>
      </div>
      <div class="areas-box">
        <div class="">
          <p>提货点: 株洲10号店·芙蓉兴盛</p>
          <p>地址: 株洲10号店·芙蓉兴盛</p>
          <p>电话: <span>13387416173</span></p>
        </div>
      </div>
      <div class="order-box">
        <ul>
          <li class="box-flex" v-for="item in orderList" :key="item.id" @click="goOrder(item)">
            <span>{{ item.name }}</span>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="go-shoping"> 去购物 </div>
    </div>
    <vFooter
      @userCenter="$router.push('/userCenter')"
      @goHome="$router.push('/home')"
      @goShop="$router.push('/shopping')" />
  </div>
</template>
<script>
import vHeader from '@/common/p-header/p-header'
import vFooter from '@/common/p-footer/p-footer'

export default {
  name: 'userCenter',
  data () {
    return {
      pTitle: '个人中心',
      isBack: true,
      operation:{
        text: '',
        isOperation: false
      },
      orderList:[
        { name:'全部订单', id:1 },
        { name:'未付款', id:2 },
        { name:'待提货', id:3 },
        { name:'已提货', id:4 },
      ]
    }
  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
    goOrder(item){
      this.$router.push('/order/'+item.id)
    }
  }
}

</script>
