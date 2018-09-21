<template>
  <div class="sign">
    <div class="top">
      <span class="theme">选择表情</span>
      <div class="emjs">
        <div class="emj" v-for="(v,i) in emjList" :key='i' @click="sign(i)" :class="i==selected?'selected':''">
          <img :src="v.url" alt="">
          <span>{{v.content}}</span>
        </div>
      </div>
      <button :disabled="disabled" @click="qiandao" :class="{active:disabled}">
        {{content}}
      </button>
    </div>
    <div class="line"></div>
    <div class="bottom">
      <p>历史签到</p>
      <div class="item" v-for="(v,i) in signList" :key='i'>
        <div class="time" >{{v.time}}已签到</div>
        <div class="content">
          <img :src="v.emjUrl" alt="" srcset="">
          {{v.content}}
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
      content: "立即签到",
      emjList: [
        {
          content: "开心",
          url: require("../../assets/index/kx.png")
        },
        {
          content: "奋斗",
          url: require("../../assets/index/fd.png")
        },
        {
          content: "安静",
          url: require("../../assets/index/aj.png")
        },
        {
          content: "困",
          url: require("../../assets/index/k.png")
        },
        {
          content: "发呆",
          url: require("../../assets/index/d.png")
        },
        {
          content: "无聊",
          url: require("../../assets/index/wl.png")
        },
        {
          content: "难过",
          url: require("../../assets/index/ng.png")
        },
        {
          content: "生病",
          url: require("../../assets/index/sb.png")
        },
        {
          content: "调皮",
          url: require("../../assets/index/tp.png")
        },
        {
          content: "怒",
          url: require("../../assets/index/n.png")
        }
      ],
      selected: "",
      disabled: false,
      signList:[
        {
          emjUrl:require("../../assets/index/n.png"),
          time:"2018-08-05 12:16:23",
          content:"今天心情很不错"
        }
      ]
    };
  },
  created() {
    console.log(this.selected, "一开始");
  },
  computed:{
    // reverseMessage:function(){
    //     return this.message.split('').reverse().join('');
    //   }
    // 签到页逻辑 https://blog.csdn.net/chanlingmai5374/article/details/82343470
            }, 
  methods: {
    sign: function(i) {
      this.selected = i;
    },
    qiandao: function() {
      this.disabled = true;
      this.content = "今日已签到";
    }
  }
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
      margin: 0 auto 36px;
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
      .selected {
        background: linear-gradient(
          225deg,
          rgba(255, 253, 247, 1) 0%,
          rgba(240, 233, 213, 1) 100%
        );
        border-radius: 8px;
        border: 2px solid rgba(225, 204, 161, 1);
      }
    }
    button {
      width: 420px;
      height: 88px;
      margin: 0 auto;
      background: rgba(225, 204, 161, 1);
      border-radius: 44px;
      box-shadow: none;
      border: none;
      font-size: 36px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
    }
    .active {
      background: rgba(225, 204, 161, 1);
      opacity: 0.5;
      color: rgba(255, 255, 255, 1);
    }
  }
  .line {
    height: 20px;
    background: rgba(243, 247, 255, 1);
  }
  .bottom {
    p {
      width: 750px;
      height: 88px;
      padding-left: 36px;
      line-height: 88px;
      font-size: 32px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(90, 90, 90, 1);
      text-align: left;
    }
    .item {
      text-align: left;
      height: 144px;
      padding: 30px 0 32px 36px;
    }
    .time {
      height: 40px;
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .content {
      display: flex;
      align-items: center;
      line-height: 40px;
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
      margin-top: 8px;
      img {
        width: 40px;
        height: 40px;
        display: block;
        margin-right: 12px;
      }
    }
  }
}
</style>

