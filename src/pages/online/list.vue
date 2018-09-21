<template>
  <div class="lesson-list">
    <search></search>
    <div class="nav-bar">
      <div class="nav" v-for="(category,index) in categories" :class="{selected: currentIndex == index}" @click="currentIndex = index; filter(index)"><span>{{category}}</span></div>
    </div>
    <div class="tab-item">
      <card v-for="lesson in lessons" :keys="lesson.id" :card="lesson" @click.native="go(lesson.id)"></card>
    </div>
  </div>
</template>
<script>
  import card from '../../components/common/card.vue'
  import search from '../../components/common/search.vue'
  export default {
    components: {
      card,
      search,
    },
    data () {
      const arr = ['标准普通话培训', '标准普通话培训有第 二行字标准普通话培训有第 二行字二行字标准普通话培训有第 二行字', '标准列表信息'];
      const lessons = arr.map((v, i) => {
        return {
          title: v,
          img: require("../../assets/index/1.png"),
          intro: '我们的文案辅助解释，该课我们的文案辅助解释，该课我们的文案辅助解释，该课我们的文案辅助解释，该课',
          id: i
        }
      });
      const categories = ['全部分类', '分类一', '分类二', '我是分类 需要换行'];
      return {
        allLessons: [...lessons],
        lessons,
        categories,
        currentIndex: 0
      };
    },
    methods: {
      filter (i) {
        this.lessons = i == 0 ? this.allLessons : [];
      },
      go (id) {
        this.$router.push({name: 'lesson', params: {id: id}});
      }
    }
  }
</script>
<style lang="less">
  .nav-bar {
    width: 24vw;
    float: left;
    height: 100vh;
    background:rgba(245,245,245,1);
    .nav {
      width: 100%;
      color: #919191;
      font-size: 26px;
      min-height: 100px;
      position: relative;
      span{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        transform: translate(-50%, -50%);
      }
    }
    .nav.selected {
      border-left: #2E8AF1 6px solid;
      background-color: #fff;
    }
  }
  .tab-item {
    width: 76vw;
    float: right;
    padding: 20px;
  }
</style>
