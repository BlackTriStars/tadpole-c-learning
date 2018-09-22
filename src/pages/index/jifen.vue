<template>
  <div class="jifen">
    <div class="top">
      <span class="ranking">{{userInfo.ranking}}
      </span>
      <img :src="userInfo.imgUrL" alt="">
      <div class="info">
        <div class="name">{{userInfo.name}}</div>
        <div class="job">{{userInfo.job}}</div>
      </div>
      <div class="score">{{userInfo.score}}</div>
    </div>
    <div class="line"></div>
    <div class="bottom">
      <div class="item" v-for="(value,index) in rankingList" :key="index">
        <img src="../../assets/index/ranking1.png" alt="" v-if="value.ranking ==1" class="rankingImg">
        <img src="../../assets/index/ranking2.png" alt="" v-if="value.ranking ==2" class="rankingImg">
        <img src="../../assets/index/ranking3.png" alt="" v-if="value.ranking ==3" class="rankingImg">
        <span class="ranking" v-if="value.ranking !=1 && value.ranking !=2 && value.ranking !=3 ">{{value.ranking}}
        </span>
        <img :src="value.imgUrL" alt="">
        <div class="info">
          <div class="name">{{value.name}}</div>
          <div class="job">{{value.job}}</div>
        </div>
        <div class="score">{{value.score}}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "",
  data() {
    return {
      userInfo: {
        imgUrL: require("../../assets/index/1.png"),
        ranking: "12",
        name: "胡帅",
        job: "信用卡中心/人力资源部/HR",
        score: "103"
      },
      rankingList: [
        {
          imgUrL: require("../../assets/index/1.jpg"),
          ranking: "1",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        },
        {
          imgUrL: require("../../assets/index/2.jpg"),
          ranking: "2",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        },
        {
          imgUrL: require("../../assets/index/3.jpg"),
          ranking: "3",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        },
        {
          imgUrL: require("../../assets/index/4.jpg"),
          ranking: "4",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        },
        {
          imgUrL: require("../../assets/index/5.jpg"),
          ranking: "5",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        },
        {
          imgUrL: require("../../assets/index/6.jpg"),
          ranking: "6",
          name: "胡帅",
          job: "信用卡中心/人力资源部/HR",
          score: "103"
        }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.top {
  height: 164px;
  display: flex;
  align-items: center;
  padding: 0 36px 0 46px;
  position: relative;
  .ranking {
    font-size: 36px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(49, 113, 246, 1);
  }
  img {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    margin-left: 25px;
  }
  .info {
    text-align: left;
    margin-left: 20px;
    .name {
      font-size: 32px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 44px;
    }
    .job {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
      line-height: 40px;
    }
  }
  .score {
    position: absolute;
    right: 46px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(245, 166, 35, 1);
    line-height: 40px;
  }
}
.line {
  height: 20px;
  background: rgba(243, 247, 255, 1);
}
.bottom {
  .item {
    display: flex;
    align-items: center;
    margin: 0 0 0 46px;
    position: relative;
    height: 164px;
    border-bottom: 2px solid rgb(233, 233, 233);
  }

  .ranking {
    font-size: 36px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 64px;
    width: 58px;
    height: 64px;
  }
  img {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .rankingImg{
    width: 58px;
    height: 64px;
    margin: 0;
  }
  .info {
    text-align: left;
    margin-left: 20px;
    .name {
      font-size: 32px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 44px;
    }
    .job {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(145, 145, 145, 1);
      line-height: 40px;
    }
  }
  .score {
    position: absolute;
    right: 46px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(245, 166, 35, 1);
    line-height: 40px;
  }
}
</style>

