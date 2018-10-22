@<template>
  <div class="surveyDetail" :class="{not:unfinish}">
    <div class="content">
      <div class="question">
        <h4>{{notes.title}}</h4>
        <p class="time">有效期：{{notes.time}}</p>
        <p class="tip">{{notes.tip}}</p>
      </div>
      <div class="questionItem" v-for="(item,index) in questions" :key="index">
        <!-- //  单选 -->
        <div class="singleChoice" v-if="item.type === 0">
          <h4>{{index + 1}}、{{item.question}}</h4>
          <div class="selection">
            <div class="si" v-for="(s,i) in item.options" :key="i" @click="choose(s,index,item.type)">
              <p><i class="qIndex" :class="{active: s === item.current}"><span>{{i | order}}</span></i>{{s}}</p>
            </div>
          </div>
        </div>
        <!-- // 多选 -->
        <div class="mutipleChoice" v-if="item.type === 1">
          <h4>{{index + 1}}、{{item.question}}</h4>
          <div class="selection">
            <div class="si" v-for="(s,i) in item.options" :key="i" @click="choose(s,index,item.type)">
              <p><i class="qIndex" :class="{active: item.current.includes(s)}"><span>{{i | order}}</span></i>{{s}}</p>
            </div>
          </div>
        </div>
        <!-- // 填空 -->
        <div class="filling" v-if="item.type === 2">
          <h4>{{index + 1}}、{{item.question}}</h4>
          <div class="fillingContent">
            <input type="text" @input="fillTxt(index)" v-if="unfinish">
            <p v-text="item.current" v-else></p>
          </div>
        </div>
        <!-- // 问答 -->
        <div class="FAQ" v-if="item.type === 3">
          <h4>{{index + 1}}、{{item.question}}</h4>
          <div class="fillingContent">
            <textarea @input="fillTxt(index)" v-if="unfinish"></textarea>
            <p v-text="item.current" v-else></p>
          </div>
        </div>
      </div>
    </div>
    <div class="button" :class="{canSubmit: answers.length === questions.length && answers.filter(v=>Array.isArray(v).length )}" @click="submit(answers)" v-if="unfinish">
      提交问卷
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      notes: {
        title: '中国证劵法从业资格法律法规考试调研',
        time: '2018.08.05～06.26',
        tip: '简介：新闻是包含海量资讯的新闻服务平台,真实反映每时每刻的新闻热点。您可以搜索新闻事件、热点话题、人物动态、产品资讯等,快速了解它们的最新进展。'
      },
      questions: [
        {
          question: '我是问题题目，如何超过两行时候需要折行显示具体详细。',
          options: ['正确','错误'],
          current: null,
          type: 0 // 单选
        },
        {
          question: '我是最后一题，如何超过两行时候需要折行显示具体详细。',
          options: ['111','222','333','444'],
          current: [],
          type: 1 //  多选
        },
        {
          question: '我是最后一题，如何超过两行时候需要折行显示具体详细。',
          // options: ['正确','错误'],
          current: null,
          type: 2 //  填空
        },
        {
          question: '我是最后一题，如何超过两行时候需要折行显示具体详细。',
          options: ['正确','错误'],
          current: null,
          type: 3 //  问答
        },
      ],
      answers: [],
      unfinish: false
    }
  },
  filters:{
    order(value){
      switch (value) {
        case 0:
          return 'A'
          break;
        case 1:
          return 'B'
          break;
        case 2:
          return 'C'
          break;
        case 3:
          return 'D'
          break;
      
        default:
          break;
      }
    }
  },
  mounted(){
    let { status } = this.$route.query
    // let bol = unfinish === 'false'
    this.unfinish = Number(status)
    // console.log(this.unfinish)
  },
  methods: {
    choose(s,i,t){
      if(t){
        const currentAnswer = this.questions[i].current
        if(currentAnswer.includes(s)){
          currentAnswer.splice(currentAnswer.indexOf(s),1)
        }else{
          currentAnswer.push(s)
        }
      }else{
        console.log('ssss')
        this.questions[i].current = s
      }
    },
    submit(answers){
      if(answers.length !== this.questions.length) return
      this.$router.replace({name:'submitSuccess'})
    },
    fillTxt(index){
      this.questions[index].current = window.event.target.value
    }
  },
  watch:{
    questions:{
      deep: true,
      handler(nv){
        this.answers = nv.filter(v=>v.current).map(v=>v.current)
      }
    }
  }
}
</script>

<style lang="less">
.surveyDetail{
  height: 100%;
  background: rgba(243,247,255,1);
  &.not{
    padding-bottom: 100px;
  }
  .content{
    height: 100%;
    overflow: auto;
  }
  .question{
    text-align: left;
    background: #fff;
    padding: 30px 34px;
    h4{
      font-size:36px;
      color:rgba(51,51,51,1);
    }
    p{
      font-size: 28px;
      &.time{
        color: #999;
        margin: 20px 0;
      }
      &.tip{
        color: #5a5a5a;
      }
    }
  }
  .questionItem{
    padding: 30px 40px;
    background: #fff;
    text-align: left;
    margin-top: 20px;
    &>div{
      & > h4{
        font-size:36px;
        font-weight:400;
        color:rgba(90,90,90,1);
        line-height: 72px;
      }
      .selection{
        margin-top: 40px;
        .si{
          p{
            display: flex;
            align-items: center;
          }
          & + .si{
            margin-top: 60px;
          }
        }
        .qIndex{
          width: 56px;
          height: 56px;
          border-radius: 50%;
          box-shadow:0px 2px 8px 0px rgba(0,0,0,0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          color: #5A5A5A;
          margin-right: 40px;
          &.active{
            color: #fff;
            background:rgba(49,113,246,1);
          }
        }
      }
      .fillingContent{

      }
        textarea{
          width: 100%;
          height: 200px;
          resize: none;
        }
    }
  }
  .button{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:98px;
    box-shadow:0px -4px 12px 0px rgba(0,0,0,0.04);
    color: #fff;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(135deg,rgba(95,170,251,1) 0%,rgba(49,113,246,1) 100%);
    opacity: 0.5;
    &.canSubmit{
      opacity: 1;
    }
  }
}
</style>
