@
<template>
  <div class="lesson-card">
    <h3>{{lesson.title}} <span :class="{'blue': lesson.status == 1}">{{lesson.status ? (lesson.status == 1 ? '进行中' : '已结束') : '未开始' }}</span></h3>
    <ul class="info">
      <li class="time">培训时间: {{lesson.time}}</li>
      <li class="location">培训地点: {{lesson.location}}</li>
      <li class="teacher">课程讲师: {{lesson.teacher}}</li>
      <li class="introduce">课程简介: {{lesson.introduce}}</li>
    </ul>
    <div class="comment">
      <button v-show="lesson.status==2">立即评分</button>
      <button class="sign" v-show="lesson.status==1">扫码签到</button>
      <button v-show="lesson.status==1 || lesson.status==0">请假</button>
    </div>
  </div>
</template>
<script>
  //培训时间：2018.08.05～06.26 培训地点：上海市长宁区中山公园龙之梦211室 课程讲师：景静蓝 课程简介：当你初识这世间，你带着两眼的清澈，迫不 及待的，遥望着远方的五彩缤纷！
  export default {
    props: {
      lesson: {
        type: Object,
        default() {
          return {
            title: '小节课名称-课程一',
            status: 1, //0: 未开始; 1: 进行中; 2: 已结束;
            time: '2018.08.05～06.26',
            location: '上海市长宁区中山公园龙之梦211室',
            introduce: '当你初识这世间，你带着两眼的清澈，迫不 及待的，遥望着远方的五彩缤纷！'
          }
        }
      }
    }
  }
</script>
<style lang="less">
  .lesson-card {
    height: 420px;
    width: 100%;
    padding: 32px 36px 0 36px;
    background-color: #fff;
    text-align: left;
    h3 {
      font-size: 32px;
      color: #222;
      line-height: 32px;
      font-weight: 600;
      span {
        float: right;
        font-size: 28px;
        color: #919191;
        font-weight: 400;
      }
      .blue {
        color: #3171F6;
      }
    }
    .info {
      margin-top: 16px;
      border-bottom: 1px solid #d7d7d7;
      li {
        font-size: 28px;
        color: #5a5a5a;
        line-height: 44px;
      }
      .introduce {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 20px;
      }
    }
    .comment {
      height: 88px;
      padding: 12px 0;
      button {
        width: 152px;
        height: 64px;
        line-height: 64px;
        color: #919191;
        font-size: 28px;
        border: 1px solid #919191;
        float: right;
        background: transparent;
        border-radius: 2px;
        margin-left: 20px;
      }
      .sign {
        color: #3171F6;
        border: 1px solid #3171F6;
      }
    }
  }
</style>
