<template>
  <div class="hello">
    <div class="content">字体</div>
    <div class="img-box"></div>
    <img src="../assets/image/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" rel="stylesheet/sass">
@import '../assets/styles/mixin'

.content
  height: 60px
  line-height: 60px
  width: 100%
  color: #ffffff
  @include font-dpr(16px)
.img-box
  width: 80px
  height: 80px
  background-size: 100% 100%
  @include bg-image('./logo')
h1, h2
  font-weight: normal
  @include font-dpr(18px)
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
</style>
