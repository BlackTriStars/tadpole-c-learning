<template>
  <div class="infoInfo">
    <div class="title">
      <i class="icon-left" @click="$router.go(-1)">
      </i>
      <h1>
        {{title}}
      </h1>
      <div class="rightBtn">
        <div class="jifen">
          <i class="icon-love"></i>
        </div>
      </div>
    </div>
    <div class="main">
      <img :src="img" alt="">
      <p>{{content}}</p>
    </div>
   
  </div>
</template>  

<script>
export default {
  data () {
    return {
      title:"资讯",
      img:require("../../assets/index/1.png"),
      content:"这里是详细内容图文编辑区域！！！ 当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！ 你曾年少轻狂，不懂时光，不信岁月无常！以为自己坚定一切，就坚守一切！却不知，在往后的岁月里，你当初所有的壮志豪言都成了无能为力。 你曾以为自己天下无敌，可是后来却在变幻莫测的岁月里败给了自己；你曾以为自己万里挑一，可是后来却在现实的残酷中沦为了倒数第一！或许我们都一样，都曾在看轻岁月的日子里看重了自己，在看重时间的日子里才认清了自己。"
    }
  }
}
</script>


<style lang="less" scoped>
.title {
  background: #fff;
  width: 100%;
  height: 1.173333rem;
  color: rgba(34, 34, 34, 1);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(233, 233, 233, 1);
  i {
    font-size: 36px;
    width: 100px;
  }
  h1 {
    font-weight: bold;
    font-family: PingFangSC-Medium;
    font-size: 36px;
  }
  .rightBtn {
    width: 178px;
    display: flex;
    justify-content: center;
  }
}
.infoInfo {
  // border-top: 2px solid rgba(233, 233, 233, 1);
  padding-top: 1.173333rem !important;
  height: 100%;
  width: 100%;
}

.main {
  width: 678px;
  margin: 39px auto 0;
  p {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 44px;
    text-align: left;
    margin-top: 40;
  }
}
</style>


