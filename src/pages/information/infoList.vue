<template>
  <div class="infoList">

    <div class="item" v-for="(v,i) in itemList" :key="i">
      <img :src="v.imgUrl" alt="">
      <div class="info">
        <h1>{{v.title}}</h1>
        <span class="ellipsis">{{v.info}}</span>
      </div>
    </div>
  </div>
</template>  

<script>
export default {
  data () {
    return {
      itemList:[
        {
          title:"我是标题",
          imgUrl:require("../../assets/index/1.jpg"),
          info:"我是内容"
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.infoList {
  border-top: 2px solid rgba(233, 233, 233, 1);
  .item {
    height: 240px;
    margin: 0 36px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgba(233, 233, 233, 1);
    img {
      width: 240px;
      height: 160px;
    }
    .info {
      height: 160px;
      margin-left: 30px;
      text-align: left;
      h1 {
        font-size: 32px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
      }
      span {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(145, 145, 145, 1);
        width: 400px;
        display: block;
        margin-top: 16px;
      }
    }
  }
}
</style>


