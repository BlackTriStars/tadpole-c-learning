<template>
  <footer>
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="{active: currentIndex === index}" @click="changeCurrentActive(index)">
        <img :src="currentIndex === index?item.url1:item.url" alt="">
        <span>{{item.content}}</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          content: "首页",
          url: require("../../assets/common/home.png"),
          url1: require("../../assets/common/homeA.png")
        },
        {
          content: "在线",
          url: require("../../assets/common/online.png"),
          url1: require("../../assets/common/onlineA.png")
        },
        {
          content: "面授",
          url: require("../../assets/common/task.png"),
          url1: require("../../assets/common/taskA.png")
        },
        {
          content: "直播",
          url: require("../../assets/common/zhibo.png"),
          url1: require("../../assets/common/zhiboA.png")
        },
        {
          content: "我的",
          url: require("../../assets/common/my.png"),
          url1: require("../../assets/common/myA.png")
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    changeCurrentActive(index) {
      let url;
      switch (index) {
        case 0:
          url = "index";
          break;
        case 1:
          url = "online";
          break;
        case 2:
          url = "mianshou";
          break;
        case 3:
          url = "zhibo";
          break;
        case 4:
          url = "my";
          break;

        default:
          break;
      }
      this.$router.push({ name: url });
      this.currentIndex = index;
    }
  },
  watch: {
    $route:{
      immediate: true,
      deep: true,
      handler(v) {
        if (v.name === "index") {
          this.currentIndex = 0;
        }
        if (v.name === "online") {
          this.currentIndex = 1;
        }
        if (v.name === "mianshou") {
          this.currentIndex = 2;
        }
        if (v.name === "zhibo") {
          this.currentIndex = 3;
        }
        if (v.name === "my") {
          this.currentIndex = 4;
        }
      }
    }
  }
};
</script>

<style lang="less">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.30666667rem;
  background-color: #fff;
  box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.04);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    li {
      flex: 1;
      height: 100%;
      text-align: center;
      color: #999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.32rem;
      img {
        width: 0.53333333rem;
        height: 0.53333333rem;
      }
      &.active {
        color: #0082d8;
      }
    }
  }
}
</style>
