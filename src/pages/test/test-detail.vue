<template>
    <div class="test-detail">
        <div class="title">
            <i class="icon-left" @click="$router.go(-1)"></i>
            <h1>
                <i></i>倒计时 {{test.timeLimit | toMin}}
            </h1>
            <div class="rightBtn"><a>交卷</a></div>
        </div>
        <div class="question" v-for="(value, index) in test.data" :key="index" v-show="index == questionIndex">
            <i>填空</i>
            <p>{{index + 1}}、{{value.question}}</p>
            <div class="answer">
                <input type="text" placeholder="请输入填空题答案" v-show="value.type== 'fillin'">
            </div>
        </div>
        <div class="select">
            <span v-show="questionIndex != 0"  @click="questionIndex = (questionIndex +1) > 0? questionIndex -1 : 0;">上一题</span>{{(questionIndex +1) + '/' + test.total}}<span v-show="(questionIndex +1) < test.total" @click="questionIndex = (questionIndex +1) < test.total? questionIndex + 1: test.total;">下一题</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      test: {
        data: [
          {
            question: "我是问题题目，如何超过两行时候需要折",
            type: "choose",
            a: "正确",
            b: "错误"
          },
          {
            question: "我是问答题目，如何超过两行时候需要折行显示具体详细。",
            type: "fillin"
          },
          {
            question: "我是问答题目，如何超过两行时候需要折行显示具体详细。",
            type: "fillin"
          }
        ],
        timeLimit: 3600,
        total: 3
      },
      timer: null,
      questionIndex: 0
    };
  },
  methods: {
    countdown() {
      const _this = this;
      if (_this.test.timeLimit <= 0) {
        _this.test.timeLimit = 0;
        clearInterval(_this.timer);
      } else {
        _this.test.timeLimit--;
      }
    },
    next() {}
  },
  mounted() {
    const _this = this;
    this.timer = setInterval(_this.countdown, 1000);
  },
  filters: {
    toMin(sec) {
      if (!sec) return "";
      let m = Math.floor(sec / 60);
      let s = sec % 60;
      m = m < 10 ? "0" + m.toString() : m.toString();
      s = s < 10 ? "0" + s.toString() : s.toString();
      return m + ":" + s;
    }
  }
};
</script>
<style lang='less'>
.test-detail {
  height: 100%;
  .title {
    h1 {
      i {
        display: inline-block;
        background: url("../../assets/clock.png") 100% 100% / contain no-repeat;
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        transform: translate(-120%, -50%);
      }
      font-size: 32px;
      position: relative;
      font-weight: 400;
    }
    a {
      color: #3171f6;
    }
  }
  .question {
    padding: 0 36px;
    position: relative;
    margin-top: 48px;
    i {
      position: absolute;
      left: 0;
      top: 7px;
      width: 88px;
      height: 32px;
      background: url("../../assets/question-bg.png") 100% 100% / contain
        no-repeat;
      font-style: normal;
      color: #fff;
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-size: 36px;
      color: #5a5a5a;
      text-align: left;
      text-indent: 2em;
      left: 72px;
    }
  }
  .answer {
    margin-top: 46px;
    input {
      border: 0;
      border-bottom: 1px solid #bfbfbf;
      width: 100%;
      font-size: 36px;
      line-height: 50px;
      padding: 23px 0;
    }
    input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
  }
  .select {
    height: 98px;
    box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
    width: 100%;
    padding: 0 42px;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 44px;
    line-height: 98px;
    color: #919191;
    font-weight: 400;
    span {
      position: absolute;
      left: 42px;
      color: #3171f6;
    }
    span:last-child {
      left: auto;
      right: 42px;
    }
  }
}
</style>

