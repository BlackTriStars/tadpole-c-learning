@<template>
  <div class="star" :class="{light: light}"></div>
</template>
<script>
  export default {
    computed: {
      light(){
        return this.lighted
      }
    },
    props: {
      lighted: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style>
  .star {
    width: 40px;
    height: 40px;
    background: url('../../assets/star-trans.png') 100% 100% / 100% no-repeat;
  }
  .star.light {
    background: url('../../assets/star.png') 100% 100% / 100% no-repeat;
  }
</style>
