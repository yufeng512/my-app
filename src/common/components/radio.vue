<template id="">
  <div class="radio">
    <label>
        <input type="radio" v-model="rChecked" />
        <div class="option"></div>
        <span class="opt-text">{{text}}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'radio',
  data () {
    return {}
  },
  props:{
    rChecked: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  label {                 /*设置label的样式*/
    min-width: 120px;
    height: 60px;
    display: block;
    line-height: 20px;
    position: relative;
    font-weight: normal;
  }
  /*.radio {
    width: 120px;
    height: 60px;
    position: absolute;
  }*/
  /*把优化后的按钮图片设置为该div的背景图片，把该div定位到原生样式的上方，遮盖住原生样式。*/
  .option {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    border: 2px solid #333;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-size: cover;
    background-size: cover;
  }
  .radio span{
    display: block;
    min-width: 60px;
    position: absolute;
    left: 50px;
    line-height: 60px;
  }
  .radio input[type="radio"] {  /*为了保险起见，把原生样式隐藏掉*/
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    display: inline-block ;
    margin-right: 15px ;
    opacity: 0 ;
  }
  input[type="radio"]:checked+div {  /*当radiuo被选中时，把input下边的div标签的背景图片替换掉*/
    /*background: url(img/radio-checked.png) no-repeat;*/
    background-size: cover;
    width: 26px;
    height: 26px;
    border: 8px solid #2d8cf0;
    background: #ffffff;
    border-radius: 50%;
  }
</style>
