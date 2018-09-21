<template>
  <div class="sign">
    <div class="top">
      <span class="theme">选择表情</span>
      <div class="emjs">
        <div class="emj" v-for="(v,i) in emjList"  :key='i'>
          <img :src="v.url" alt="">
          <span>{{v.content}}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "",
  data() {
    return {
      emjList:[
        {
          content:"开心",
          url:require("../../assets/index/kx.png")
        },
         {
          content:"奋斗",
          url:require("../../assets/index/fd.png")
        },
        {
          content:"安静",
          url:require("../../assets/index/aj.png")
        },
        {
          content:"困",
          url:require("../../assets/index/k.png")
        },
        {
          content:"发呆",
          url:require("../../assets/index/d.png")
        },
        {
          content:"无聊",
          url:require("../../assets/index/wl.png")
        },
        {
          content:"难过",
          url:require("../../assets/index/ng.png")
        },
        {
          content:"生病",
          url:require("../../assets/index/sb.png")
        },
        {
          content:"调皮",
          url:require("../../assets/index/tp.png")
        },
        {
          content:"怒",
          url:require("../../assets/index/n.png")
        }
      ]
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.sign {
  .top {
    height: 552px;
    width: 100%;
    overflow: hidden;
    .theme {
      display: inline-block;
      margin-top: 40px;
      width: 144px;
      height: 50px;
      font-size: 36px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(179, 160, 120, 1);
      line-height: 50px;
    }
    .emjs {
      display: flex;
      flex-wrap: wrap;
      width: 680px;
      margin: 0 auto;
      justify-content: space-between;

      .emj {
        margin-top: 20px;
        width: 136px;
        height: 136px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        img {
          width: 52px;
          height: 52px;
        }
        span {
          display: inline-block;
          width: 56px;
          height: 40px;
          font-size: 28px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(90, 90, 90, 1);
          line-height: 40px;
          margin-top: 8px;
        }
      }
    }
  }
}
</style>

