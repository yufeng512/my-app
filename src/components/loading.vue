<template id="">
  <div class="loading-box">
    <div class='loader-ring'>
      <div class='loader-ring-light'></div>
      <div class='loader-ring-track'></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {

    }
  }
}

</script>
<style lang="sass" rel="stylesheet/sass">
.loading-box
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9999
  .loader-ring
    position: absolute
    top: 50%
    left: 50%
    margin: -65px 0 0 -65px
    width: 130px
    height: 130px
    border-radius: 50%
    background: rgba(0,0,0,1)
    .loader-ring-light
      width: 120px
      height: 120px
      position: absolute
      top: 5px
      left: 5px
      // -moz-border-radius: 120px
      // -webkit-border-radius: 120px
      border-radius: 120px
      // -moz-box-shadow: 0 4px 0 #00abf2 inset
      // -webkit-box-shadow: 0 4px 0 #00abf2 inset
      box-shadow: 0 4px 0 #00abf2 inset
      animation: rotate-360 .8s linear infinite
    .loader-ring-track
      position: absolute
      top: 5px
      left: 5px
      width: 120px
      height: 120px
      z-index: 100000
      // -moz-border-radius: 120px
      // -webkit-border-radius: 120px
      border-radius: 120px
      // -moz-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset
      // -webkit-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset
      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset


@keyframes rotate-360
  from
    // -moz-transform: rotate(0)
    // -ms-transform: rotate(0)
    // -webkit-transform: rotate(0)
    transform: rotate(0)

  to
    // -moz-transform: rotate(360deg)
    // -ms-transform: rotate(360deg)
    // -webkit-transform: rotate(360deg)
    transform: rotate(360deg)


</style>
