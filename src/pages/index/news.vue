<template>
  <div class="news">
    <div class="line"></div>
    <div class="item" v-for="(v,i) in newsList" :key="i">
      <div class="info">
        <div class="theme">{{v.title}}</div>
        <div class="date">{{v.date}}</div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "news",
  data() {
    return {
      newsList: [
        {
          title: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26"
        },
        {
          title: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26"
        },
        {
          title: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26"
        },
        {
          title: "中国证劵法从业资格法律法规考试",
          date: "2018.08.05～06.26"
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
<style lang="less" scoped>
.line {
  height: 2px;
  background: rgba(233, 233, 233, 1);
}
.item {
  height: 152px;
  display: flex;
  align-items: center;
  margin: 0 36px;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  .theme {
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
  }
  .date {
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 34px;
    text-align: left;
    margin-top: 8px;
  }
}
</style>

