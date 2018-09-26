<template>
    <div class="test-detail">
        <div class="title">
            <i class="icon-left" @click="$router.go(-1)"></i>
            <h1 v-if="!review">
                <i></i>倒计时 {{test.timeLimit | toMin}}
            </h1>
            <h1 v-if="review">
                查看错题
            </h1>
            <div class="rightBtn"><a @click="submit()"  v-if="!review">交卷</a> <a @click="$router.replace({name: 'testCover'})"  v-if="review">重新考试</a></div>
        </div>
        <div class="question" v-if="!review" v-for="(value, index) in test.data" :key="index" v-show="index == questionIndex">
            <i>填空</i>
            <p>{{index + 1}}、{{value.question}}</p>
            <div class="answer">
                <input type="text" placeholder="请输入填空题答案" v-show="value.type== 'fillin'" v-model="answer[index]">
                <p type="radio" :name="index" v-show="value.type== 'choose'" v-for="(item, key) in value.choice" :key="key" :class="{selected: key == answer[index]}" @click="answer[index] = key"><span>{{key}}</span>{{item}}</p>
            </div>
        </div>
        <div class="question right" v-if="review"  v-for="(value, index) in reightAnswer.data" :key="index" v-show="index == questionIndex">
          <i>填空</i>
            <p>{{index + 1}}、{{value.question}}</p>
            <div class="answer">
                <input type="text" placeholder="请输入填空题答案" v-show="value.type== 'fillin'" disabled v-model="value.answer">
                <p type="radio" :name="index" v-show="value.type== 'choose'" v-for="(item, key) in value.choice" :key="key" :class="{selected: key == value.answer}"><span>{{key == value.answer ? '&nbsp;': key}}</span>{{item}}</p>
            </div>
        </div>
        <div class="select">
            <span v-show="questionIndex != 0"  @click="questionIndex = (questionIndex +1) > 0? questionIndex -1 : 0;">  <  上一题</span>{{(questionIndex +1) + '/' + test.total}}<span v-show="(questionIndex +1) < test.total" @click="questionIndex = (questionIndex +1) < test.total? questionIndex + 1: test.total;"><i class="icon-reight"></i>下一题 ></span>
        </div>
    </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      test: {
        data: [
          {
            question: "我是问题题目，如何超过两行时候需要折",
            type: "choose",
            choice: {
              A: "正确",
              B: "错误"
            }
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
      questionIndex: 0,
      answer: [],
      reightAnswer: {
        data: [
          {
            question: "我是问题题目，如何超过两行时候需要折",
            type: "choose",
            choice: {
              A: "正确",
              B: "错误"
            },
            answer: "A"
          },
          {
            question: "我是问答题目，如何超过两行时候需要折行显示具体详细。",
            type: "fillin",
            answer: "我是正确答案"
          },
          {
            question: "我是问答题目，如何超过两行时候需要折行显示具体详细。",
            type: "fillin",
            answer: "我是正确答案"
          }
        ],
        total: 3
      },
      review: this.$route.query && this.$route.query.review
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
    submit() {
      const rest =
        this.test.total -
        this.answer.filter(value => {
          return value != "" && value != undefined;
        }).length;
      MessageBox({
        title: "确定提交考试？",
        message: `共 <span style="color: #3171f6"> ${
          this.test.total
        } </span>题，剩余未做 <span style="color: #3171f6">${rest}</span> 题`,
        showCancelButton: true,
        confirmButtonText: "现在交卷",
        cancelButtonText: "继续答题"
      }).then(action  => {
        if (action == 'cancel') return;
        this.$router.replace({ name: "testResult" });
      });
    }
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
    .rightBtn {
      width: 144px;
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
  .question.right {
    .answer {
      input {
        color: #31C401;
      }
      p.selected {
      color: #31C401;
      span {
        background: url('../../assets/right.png') center center/140% no-repeat;
      }
    }
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
    p {
      text-align: left;
      text-indent: 0;
      margin-top: 60px;
      span {
        display: inline-block;
        width: 60px;
        height: 60px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
        color: #5a5a5a;
        line-height: 56px;
        margin-right: 40px;
        border-radius: 50%;
        text-align: center;
        font-size: 32px;
      }
    }
    p.selected {
      color: #3171f6;
      span {
        color: #3171f6;
      }
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
      i {
        display: inline-block;
        color: #3171f6;
        width: 16px;
        height: 28px;
      }
    }
    span:last-child {
      left: auto;
      right: 42px;
    }
  }
}
</style>

