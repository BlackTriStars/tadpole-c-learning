@
<template>
  <div class="card">
    <img :src="card.img" alt="">
    <div class="text">
      <h3>{{card.title}}</h3>
      <p>{{card.intro}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['card'],
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .card {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #e9e9e9;
    img {
      height: 136px;
      width: 35%;
      border-radius: 5px;
      display: inline-block;
      float: left;
      margin: 40px 20px 40px 0;
    }
    .text {
      float: left;
      text-align: left;
      width: 61%;
      margin: 40px 0;
      h3 {
        font-size: 32px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      p {
        font-size: 24px;
        color: #919191;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 16px;
      }
    }
  }
</style>

