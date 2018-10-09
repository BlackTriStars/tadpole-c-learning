<template>
  <div class="lesson">
    <i class="back" @click="$router.go(-1)"></i>
    <div class="media">
      <div class="tools">
        <div class="caption">
          <h3>{{lesson.title}}</h3>
          <p><span>人气: {{lesson.hot}}</span><span>学分: {{lesson.point}}分</span></p>
        </div>
        <div class="buttons">
          <button class="share"></button>
          <button class="love"></button>
          <button class="download"></button>
        </div>
      </div>
    </div>
    <div class="grade">
      评分:<stars :score="lesson.score"></stars>
      <button>提交</button>
    </div>
    <div class="tabs">
      <mt-navbar v-model="selected">
        <mt-tab-item id="lesson-1">简介</mt-tab-item>
        <mt-tab-item id="lesson-2">课程</mt-tab-item>
        <mt-tab-item id="lesson-3">聊天</mt-tab-item>
      </mt-navbar>
      <div class="line"></div>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="lesson-1">
          <div class="information">
            <h3>{{lesson.title}}</h3>
            <p class="teacher">讲师: {{lesson.teacher}}</p>
            <p class="time">学时: {{lesson.time}}</p>
          </div>
          <div class="detail">
            {{lesson.detail}}
          </div>
          <button class="signup" v-if="lesson.type == 'offline'">立即报名</button>
        </mt-tab-container-item>
        <mt-tab-container-item id="lesson-2">
          <ul class="course" v-if="$route.params.online">
            <li v-for="(list, index) in lesson.course" :key=index >{{list}} <button></button></li>
          </ul>
          <ul v-if="!$route.params.online">
            <lesson-card v-for="(list, index) in lesson.course" :key=index ></lesson-card>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="lesson-3">
          <lesson-card></lesson-card>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import stars from "@/components/common/stars";
import lessonCard from "@/components/common/lesson-card.vue";

export default {
  data() {
    return {
      selected: "lesson-1",
      lesson: {
        title: "跟大神学时间管理第一管理",
        hot: 10,
        point: 5,
        score: 2,
        teacher: "snake",
        time: "1",
        detail:
          "这里是详细内容图文编辑区域！！！ 当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！ 你曾年少轻狂，不懂时光，不信岁月无常！以为自己坚定一切，就坚守一切！却不知，在往后的岁月里，你当初所有的壮志豪言都成了无能为力。 你曾以为自己天下无敌，可是后来却在变幻莫测的岁月里败给了自己；你曾以为自己万里挑一，可是后来却在现实的残酷中沦为了倒数第一！或许我们都一样，都曾在看轻岁月的日子里看重了自己，在看重时间的日子里才认清了自己。",
        course: [
          "跟大神学时间管理课程1",
          "跟大神学时间管理课程2",
          "跟大神学时间管理课程3",
          "跟大神学时间管理课程4"
        ],
        type: "offline"
      }
    };
  },
  components: {
    stars,
    lessonCard
  }
};
</script>

<style lang="less" scoped>
.lesson {
  background: #f3f7ff;
  position: relative;
  padding-bottom: 98px;
  .line {
    width: 748px;
    height: 2px;
    background: rgba(233, 233, 233, 1);
  }
  .back {
    position: absolute;
    width: 24px;
    height: 40px;
    left: 36px;
    top: 36px;
    background: url("../../assets/lesson/icon-back.png") 100% 100% / cover
      no-repeat;
    z-index: 100;
  }
  .media {
    height: 500px;
    width: 100%;
    background: url("../../assets/lesson/lesson-bg.png") 100% 100% / cover
      no-repeat;
    position: relative;
    .tools {
      background: rgba(0, 0, 0, 0.4);
      height: 100px;
      width: 100%;
      position: absolute;
      bottom: 0;
      .caption {
        width: 68%;
        position: absolute;
        left: 0;
        height: 100%;
        background-color: transparent;
        padding-left: 36px;
        text-align: left;
        h3 {
          font-size: 32px;
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
        }
        p {
          color: rgba(255, 255, 255, 0.8);
          span:last-child {
            margin-left: 40px;
          }
        }
      }
      .buttons {
        position: absolute;
        right: 0;
        width: 32%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
          width: 40px;
          height: 40px;
          border: 0 none;
        }
        .share {
          background: url("../../assets/lesson/share.png") 0 0 / contain
            no-repeat;
        }
        .love {
          background: url("../../assets/lesson/love.png") 0 0 / contain
            no-repeat;
        }
      }
    }
  }
  .grade {
    height: 96px;
    width: 100%;
    background: #fff;
    font-size: 32px;
    color: #5a5a5a;
    padding: 26px 36px;
    text-align: left;
    .stars {
      vertical-align: middle;
      margin-left: 20px;
    }
    button {
      width: 114px;
      height: 52px;
      background: linear-gradient(
        90deg,
        rgba(95, 170, 251, 1) 0%,
        rgba(49, 113, 246, 1) 100%
      );
      border-radius: 4px;
      float: right;
      color: #fff;
      border: 0 none;
      font-size: 28px;
      line-height: 52px;
    }
  }
  .tabs {
    margin-top: 20px;
    .mint-navbar {
      height: 88px;
      .mint-tab-item {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .mint-tab-item-label {
        color: #5a5a5a;
        height: 100%;
        line-height: 88px;
        font-size: 32px;
        display: inline-block;
      }
    }
    .mint-tab-item.is-selected {
      border: 0 none;
      margin: 0;
      .mint-tab-item-label {
        border-bottom: 4px solid #2e8af1;
        color: #2e8af1;
      }
    }
  }
  .mint-tab-container {
    .information {
      background: #fff;
      height: 220px;
      padding-top: 32px;
      padding-left: 36px;
      text-align: left;
      h3 {
        font-size: 32px;
        color: #222;
        font-weight: 400;
        margin-bottom: 16px;
      }
      p {
        font-size: 28px;
        color: #5a5a5a;
        margin-top: 10px;
      }
    }
    .detail {
      padding: 36px;
      font-size: 28px;
      color: #222222;
      text-align: left;
      background-color: #fff;
      margin-top: 20px;
    }
    .signup {
      display: block;
      width: 100%;
      height: 98px;
      background: linear-gradient(
        90deg,
        rgba(95, 170, 251, 1) 0%,
        rgba(49, 113, 246, 1) 100%
      );
      position: fixed;
      bottom: 0;
      line-height: 98px;
      font-size: 32px;
      text-align: center;
      color: #fff;
      border: 0 none;
    }
    .course {
      padding: 0 36px;
      background-color: #fff;
      li {
        height: 108px;
        border-bottom: 1px solid #eeee;
        padding-top: 32px;
        font-size: 32px;
        text-align: left;
        color: #222222;
        button {
          width: 48px;
          height: 48px;
          background: url("../../assets/lesson/play.png") 100% 100% / contain
            no-repeat;
          border: 0 none;
          float: right;
        }
      }
    }
    .lesson-card:first-child {
      margin-top: 0;
    }
    .lesson-card {
      margin-top: 20px;
    }
  }
}
</style>
