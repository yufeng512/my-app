<template>
  <div id="app">
    <loading v-show="showLoading"></loading>
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
      showLoading () {
        return this.$store.getters.showLoading
      }
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
#app
  width: 100%
  height: 100%
</style>
