@
<template>
  <div class="stars">
    <span class="star-container" v-for="(light, index) in lightingStar" :key="index"  @click="scores = index +1;">
      <star :lighted="light"></star>
    </span>
  </div>
</template>
<script>
  import star from '../../components/common/star.vue'

  export default {
    components: {
      star
    },
    props: {
      score: {
        type: Number,
        default: 0,
      }
    },
    computed: {
      lightingStar() {
        return new Array(5).fill(false).map((value, index) => {
          return (index + 1) <= this.scores
        })
      }
    },
    data() {
      return {
        scores: this.score
      }
    }
  }
</script>
<style lang="less">
  .stars {
    display: inline-block;
  }
  .star-container {
    display: inline-block;
    margin-right: 20px;
  }
  .star-container:last-child {
    margin-right: 0;
  }
</style>
