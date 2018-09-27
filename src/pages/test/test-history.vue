<template>
    <div class="test-history">
        <ul>
            <li v-for="(value, index) in history" :key="index">
                <p>{{value.name}}<span>未通过</span></p>
                <p>{{value.date}}<span>作答时间：{{value.time}}</span></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      history: [
        {
          name: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26",
          time: "20分钟",
          pass: false
        },
        {
          name: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26",
          time: "20分钟",
          pass: false
        }
      ]
    };
  }
};
</script>
<style lang="less">
.test-history {
  background-color: #f3f7ff;
  height: 100%;
  ul {
    padding: 0 36px;
    background-color: #fff;
    li {
      height: 152px;
      border-bottom: 1px solid #e9e9e9;
      padding: 40px 0 30px;
      p:first-child {
        color: #333333;
        text-align: left;
        font-size: 28px;
        font-weight: 700;
        span {
          color: #ff8300;
          float: right;
        }
      }
      p:last-child {
        color: #999999;
        font-size: 24px;
        text-align: left;
        span {
          float: right;
        }
      }
    }
    li:last-child {
      border-bottom: 0;
    }
  }
}
</style>


