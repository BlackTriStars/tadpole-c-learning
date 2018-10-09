<template>
    <div class="test-cover">
        <div class="avator"></div>
        <ul>
            <li><h3>考试对象</h3>{{info.name}}</li>
            <li><h3>有效时间</h3>{{info.time}}</li>
            <li><h3>评分标准</h3>满分<span>{{info.fullPoint}}</span>分, <span>{{info.passPoint}}</span>分及格</li>
            <li><h3>答题时间</h3>{{info.last}}</li>
            <li><h3>题型分布</h3>{{info.distribution}}</li>
            <li><h3>考试次数</h3><span>{{info.times}}</span>次</li>
            <li><h3>考试简介</h3>{{info.intro}}</li>
        </ul>
        <div class="buttons" v-if="info.begin">
            <button>答题详情</button>
            <button>开始答题</button>
        </div>
        <button v-if="!info.begin" @click="$router.replace({name: 'testDetail'})">开始答题</button>
    </div>
</template>
<script>
export default {
  //考试对象 有效时间 评分标准 答题时间 题型分布 考试次数 考试简介
  data() {
    return {
      info: {
        avator: "",
        name: "朱小丽",
        time: "2018.08.05～06.26",
        fullPoint: 100,
        passPoint: 90,
        last: "1小时",
        distribution: "题型分布",
        times: "1/3",
        intro: "按公安部规定比例随机抽取"
      }
    };
  }
};
</script>
<style lang="less">
.test-cover {
  height: 100%;
  .avator {
    width: 144px;
    height: 144px;
    border-radius: 50%;
    background-color: pink;
    margin: 80px auto 80px;
  }
  h3 {
    float: left;
    font-size: 32px;
    color: #333;
    margin-right: 40px;
    font-weight: 400;
  }
  ul {
    padding-left: 100px;
    li {
      width: 100%;
      overflow: hidden;
      color: #919191;
      font-size: 32px;
      margin-bottom: 60px;
      text-overflow: ellipsis;
      white-space:nowrap span {
        color: #3171f6;
      }
      text-align: left;
    }
  }
  button {
    width: 100%;
    height: 98px;
    background: linear-gradient(
      135deg,
      rgba(95, 170, 251, 1) 0%,
      rgba(49, 113, 246, 1) 100%
    );
    font-size: 32px;
    color: #fff;
    line-height: 98px;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 0;
    box-shadow:0px -4px 12px 0px rgba(0,0,0,0.04);
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-content: space-around;
    position: fixed;
    bottom: 0;
    width:  100%;
    left: 0;
    button {
        position: relative;
        flex: 1;
    }
    button:first-child {
        background: #fff;
        color: #5a5a5a;
    }
  }
}
</style>


