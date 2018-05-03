<template>
  <div class="warpper">
    <vHeader :headTitle="pTitle" :isBack="isBack" :operation='operation' @editOperation="editOperationBtn()" />
    <div class="container">
      <div class="item-box box-flex" v-for="(item,index) in dataList" :key="item.id">
        <div class="check-box">
          <input type="checkbox" v-model="item.isCheck" @change="checkChange(item)">
          <div class="checked"> </div>
        </div>
        <div class="item-pic">
          <img src="../assets/image/default.png" alt="">
        </div>
        <div class="item-right box-flex">
          <div class="title-box box-flex">
            <div class="">
              <p>{{ item.name }}({{ item.standard }})</p>
              <span>X{{item.num}}</span>
            </div>
            <div class="delete-box" @click="deleteItem(index)">
              <Icon type="trash-a"></Icon>
            </div>
          </div>
          <div class="operation-num-box box-flex">
            <div class="operation-num box-flex">
              <div class="" @click="addReduce(item,0)">
                 <Icon type="ios-minus-empty"></Icon>
              </div>
              <div class="">{{ item.num }}</div>
              <div class="" @click="addReduce(item,1)">
                 <Icon type="ios-plus-empty"></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="operation-shop-cart box-flex">
      <div class="select-price-fee box-flex">
        <div class="check-box">
          <input type="checkbox" v-model="checkAll" @change="handleCheckAll()">
          <div class="checked"> </div>
        </div>
        <span class="price-fee">合计 {{ priceFee }}</span>
      </div>
      <div class="balance" @click="balance"> 结算</div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import { MessageBox } from 'mint-ui'
import vHeader from '@/common/p-header/p-header'
import vRadio from '@/common/components/radio'

export default {
  name: 'shopping',
  data () {
    return {
      pTitle: '购物车',
      priceFee: 0,
      isBack: true,
      operation: {
        text: '编辑',
        isOperation: true
      },
      checkAll: false,
      dataList:[
        {id: 1,name: '芦荟',priceFee: 16.5,standard: '160ml',num: 1,isCheck: false},
        {id: 2,name: '海南椰奶',priceFee: 21.5,standard: '250ml',num: 1,isCheck: false},
        {id: 3,name: '步步高富贵竹',priceFee: 16.5,standard: '110mm',num: 1,isCheck: false},
        {id: 4,name: '高档水晶玻璃花瓶',priceFee: 16.5,standard: '100mm',num: 1,isCheck: false},
        {id: 5,name: '芦荟',priceFee: 16.5,standard: '160ml',num: 1,isCheck: false},
        {id: 6,name: '海南椰奶',priceFee: 21.5,standard: '250ml',num: 1,isCheck: false},
        {id: 7,name: '步步高富贵竹',priceFee: 16.5,standard: '110mm',num: 1,isCheck: false},
        {id: 8,name: '高档水晶玻璃花瓶',priceFee: 16.5,standard: '100mm',num: 1,isCheck: false}
      ]
    }
  },
  components: {
    vHeader,
    vRadio
  },
  methods: {
    addReduce(item,i){
      if (i == 0) {
        if (item.num == 1) return
        item.num--
      }else if(i == 1){
        item.num++
      }
      this.checkChange()
    },
    balance(){
    },
    deleteItem(index){
      let vm = this
      MessageBox({
        title: '提示',
        message: '确定删除此商品吗?',
        showCancelButton: true
      }).then(function (action) {
        if (action == 'confirm') {
          vm.dataList.splice(index,1)
          vm.checkChange()
        }
      })
    },
    checkChange() {
      let priceFee = 0
      let isAll = _.every(this.dataList, function(item){
        return item.isCheck == true
      })
      if(isAll){
        this.checkAll = true
      }else{
        this.checkAll = false
      }
      _.each(this.dataList, function(item){
        if(item.isCheck){
          priceFee += item.priceFee * item.num
        }
      })
      this.priceFee = priceFee.toFixed(2)
    },
    handleCheckAll(){
      if(this.checkAll){
        _.each(this.dataList, function(item){ item.isCheck = true })
        this.checkChange()
      }else{
        _.each(this.dataList, function(item){ item.isCheck = false })
        this.priceFee = 0
      }
    },
    editOperationBtn(){
      this.operation.text = '完成'
    }
  },
  watch:{
    isAllChecked(cur,old){

    }
  }
}
</script>
<style scoped lang="sass" rel="stylesheet/sass">
@import '../assets/styles/mixin'
@import '../assets/styles/variable'

.warpper
  position: absolute
  top: 0
  left: 0
  height: calc(100% - 80px)
  width: 100%
  background: $bg-gray
  // overflow: auto
  // -webkit-overflow-scrolling: touch
  color: $font-gray
  .container
    padding-top: 100px
    padding-bottom: 100px
    .item-box
      height: 200px
      border-top: 1px solid $border-gray
      border-bottom: 1px solid $border-gray
      padding: 20px 0
      background: $bg-white
      margin-bottom: 20px
      .check-box
        flex: 0 0 80px
      .item-pic
        flex: 0 0 160px
        width: 16px
        img
          width: 100%
      .item-right
        flex: 0 1 100%
        padding: 0 25px
        flex-direction: column
        justify-content: space-between
        .title-box
          justify-content: space-between
          p,i,span
            @include font-dpr(12px)
          p
            height: 50px
            line-height: 50px
            white-space: nowrap
            max-width: 420px
            overflow: hidden
            margin-bottom: 10px
          .delete-box
            width: 80px
            height: 80px
            line-height: 60px
            text-align: center
        .operation-num-box
          justify-content: flex-end
          .operation-num
            width: 180px
            height: 60px
            align-items: center
            border-radius: 10px
            justify-content: flex-end
            border: 1px solid $border-gray
            div
              width: 60px
              text-align: center
              &:nth-child(2)
                @include font-dpr(12px)
                border-left: 1px solid $border-gray
                border-right: 1px solid $border-gray
              i
                @include font-dpr(16px)
.operation-shop-cart
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 100px
  background: $bg-white
  border-top: 1px solid $border-gray
  align-items: center
  justify-content: space-between
.select-price-fee
  align-items: center
  height: 100px
  flex: 0 1 100%
  .check-box
    height: 100px
    flex: 0 0 80px
  .price-fee
    @include font-dpr(10px)
.balance
  width: 220px
  height: 100px
  text-align: center
  line-height: 100px
  @include font-dpr(14px)
  color: $font-white
  background: $color-sub-theme
</style>
