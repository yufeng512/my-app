<template>
  <div id="app">
    <loading v-show="$store.getters.showLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import loading from './components/loading'

export default {
  name: 'App',
  components:{
    loading
  },
  computed: {
  },
  created(){
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
#app
  width: 100%
  height: 100%
</style>
