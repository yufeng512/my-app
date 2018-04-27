<style scoped lang="sass" rel="stylesheet">
@import '../../assets/styles/mixin'
@import '../../assets/styles/variable'

.ul-box
  width: 100%
  position: absolute
  top: 80px
  left: 0
  height: calc(100% - 80px)
  overflow: auto
  -webkit-overflow-scrolling: touch
  ul
    li
      height: 80px
      line-height: 80px
      padding: 0 20px
      border-bottom: 1px solid $border-gray
      font-size: font-dpr(16px)
      color: $font-gray
</style>
<template id="">
  <div @scroll="scrollTop()">
    <vHeader :headTitle="pTitle" :backUrl='pUrl'></vHeader>
    <div class="ul-box">
      <ul v-infinite-scroll="getList" infinite-scroll-disabled="loading" infinite-scroll-distance="80">
        <li v-for="item in listdata">{{ item.name }}</li>
        <li v-for="item in downdata">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import vHeader from '@/common/p-header/p-header'
import API from '@/api/index'

export default {
  name: 'testPull',
  data () {
    return {
      pTitle:'数据列表',
      pUrl:'/',
      loading: false,
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 14,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: []  // 上拉更多的数据存放数组
    }
  },
  components:{
    vHeader
  },
  mounted : function(){
    this.getList();
  },
  methods:{
    scrollTop(){
        console.log(11111);
    },
    getList(){
      let vm = this
      API.getList().then( (rs) =>{
        if (vm.listdata.length == 0) {
          vm.listdata = rs.data.slice(0,14);
        }else{
          if (vm.loading) return
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;

          let arr = rs.data;
          let end = vm.pageEnd;

          for(let i = vm.pageStart; i<end; i++){
            let obj ={};
            obj["name"] = arr[i].name;
            vm.downdata.push(obj)
            if((i + 1) >= rs.data.length) {
              vm.loading = true
              return
            }
          }
        }
      })
    }
  }
}

</script>
