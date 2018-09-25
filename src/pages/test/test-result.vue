<template>
    <div class="test-result">
        <div class="detail" :class="{success: result.state}">
            <div class="expire">
                <p>{{result.time}}</p>
                <p>考试截止还有 {{result.expire}} 天</p>
            </div>
            <h1>{{result.score ? result.score + '分' : '批阅中'}}</h1>
            <p class="chance">{{result.score ? `抱歉，您的成绩不合格，剩余考试次数 ${result.chance} 次` : `剩余考试次数 ${result.chance} 次`}}</p>
        </div>
        <div class="score">
            <p>得分情况</p>
            <ul>
                <li>客观题得分<span>{{result.objective? result.objective :'批阅中'}} <a v-if="result.objective">分</a> </span></li>
                <li>主观题得分<span>{{result.subjective? result.subjective :'批阅中'}} <a v-if="result.subjective">分</a>  </span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      result: {
        name: "标准普通话考试",
        time: "用时：45分25秒",
        expire: 22,
        state: 0,
        chance: 6,
        objective: 10,
        subjective: NaN,
        score: 1
      }
    };
  }
};
</script>
<style lang="less">
.test-result {
  background-color: #f3f7ff;
  height: 100%;
  .detail {
    height: 360px;
    padding: 30px 36px;
    color: #ff8300;
    background: url("../../assets/fail.png") 0 0 / cover no-repeat;
    .expire {
      font-size: 28px;
      p {
        float: left;
      }
      p:last-child {
        float: right;
      }
    }
    h1 {
      font-size: 72px;
      margin-top: 70px;
      line-height: 128px;
    }
    .chance {
      font-size: 32px;
    }
  }
  .detail.success {
    background: url("../../assets/success.png") 0 0 / cover no-repeat;
  }
  .score {
    p {
      height: 86px;
      line-height: 86px;
      font-size: 26px;
      color: #919191;
      padding-left: 36px;
      text-align: left;
    }
    ul {
        padding: 0 34px;
        background: #ffffff;
    }
    li {
      width: 100%;
      height: 104px;
      line-height: 104px;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      color: #333333;
      span {
          float: right;
          color: #ff8300;
      }
      a {
          color: #333333;
      }
    }
  }
}
</style>

