<template>
    <div class="test-result">
        <div class="detail" :class="{success: result.pass}">
            <div class="expire">
                <p>{{result.time}}</p>
                <p v-if="!result.pass">考试截止还有 {{result.expire}} 天</p>
            </div>
            <h1>{{result.score ? result.score + '分' : '批阅中'}}</h1>
            <p class="chance" v-if="!result.pass">{{result.score ? `抱歉，您的成绩不合格，剩余考试次数 ${result.chance} 次` : `剩余考试次数 ${result.chance} 次`}}</p>
            <p class="chance" v-if="result.pass">恭喜，您的成绩合格</p>
        </div>
        <div class="score" v-if="!result.score">
            <p>得分情况</p>
            <ul>
                <li> <i></i> 客观题得分<span>{{result.objective? result.objective :'批阅中'}} <a v-if="result.objective">分</a> </span></li>
                <li> <i></i> 主观题得分<span>{{result.subjective? result.subjective :'批阅中'}} <a v-if="result.subjective">分</a>  </span></li>
            </ul>
        </div>
        <div class="mistake" v-if="result.score">
            <ul>
                <li @click="$router.push({name:'testDetail',query:{review:true}})"> <p>查看错题</p> <p>未做<span> 13 </span>题</p> <i class="icon-right"></i> </li>
                <li @click="$router.push({name:'testCover'})"> <p>主观题得分</p> <p>成绩不满意？再考一次呗</p> <i class="icon-right"></i> </li>
            </ul>
        </div>
        <div class="history score" v-if="!result.pass">
          <ul>
            <li @click="$router.push({name:'testHistory'})"><i></i>历史考试 <span class="icon-right"></span></li>
          </ul>
        </div>
        <div class="buttons" v-if="!result.pass">
          <button @click="$router.push({name:'testDetail',query:{review:true}})">答题详情</button>
          <button @click="$router.push({name:'testCover'})">重新答题</button>
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
        expire: 22, //考试剩余天数
        chance: 6,
        objective: 10, //客观题得分
        subjective: 10, //主观题得分,审批中为NaN
        score: 60,  //审批中为NaN
        pass: false //考试是否通过, 审批中为false
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
    color: #31c401;
    .expire {
      p:last-child {
        float: left;
      }
    }
    h1 {
      color: #31c401;
    }
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
      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url("../../assets/objective.png") 0 0 / contain no-repeat;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
    li:last-child {
      i {
        background: url("../../assets/subjective.png") 0 0 / contain no-repeat;
      }
      border-bottom: 0;
    }
  }
  .mistake {
    ul {
      padding: 0 34px;
      background: #ffffff;
    }
    li {
      position: relative;
      height: 133px;
      border-bottom: 1px solid #e9e9e9;
      p {
        position: absolute;
        top: 30px;
        color: #222222;
        font-size: 32px;
        left: 0;
      }
      p:nth-child(2) {
        font-size: 28px;
        color: #919191;
        bottom: 28px;
        border-bottom: 0;
        top: auto;
        span {
          color: #3171f6;
        }
      }
      i {
        color: #d5d5d5;
        height: 100%;
        float: right;
      }
      i:before {
        line-height: 133px;
      }
    }
  }
  .history.score {
    margin-top: 20px;
    li {
      i {
        background: url("../../assets/history.png") 0 0 / contain no-repeat;
      }
      span {
        color: #d5d5d5;
        vertical-align: middle;
        height: 100%;
      }
      span:before {
        line-height: 104px;
      }
    }
  }
  .buttons {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 98px;
    display: flex;
    justify-content: center;
    align-content: center;
    button {
      flex: 1;
      border: 0 none;
      height: 100%;
      font-size: 32px;
      line-height: 98px;
      background: #fff;
      color: #5a5a5a;
      box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    }
    button:last-child {
      background: #000;
      background: linear-gradient(
        135deg,
        rgba(95, 170, 251, 1) 0%,
        rgba(49, 113, 246, 1) 100%
      );
      color: #fff;
    }
  }
}
</style>

