@<template>
  <div class="hello">
    <h4>您好, </h4>
    <p class="tip">{{tip}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tip: '请绑定相关信息'
    }
  },
  props: {
    type: {
      type: Number,
      default: 0 // 0 首次登陸 1 登陸 2 重置密码 3 修改密码
    },
  },
  methods: {
  },
  watch: {
    type: {
      immediate: true,
      handler(nv){
        switch (nv) {
          case 0:
            this.tip = '请绑定相关信息'
            break;
          case 1:
            this.tip = '欢迎来到蝌蚪云, 立即登录'
            break;
          case 2:
            this.tip = '请重置您的密码'
            break;
          case 3:
            this.tip = '请修改你的密码'
            break;
          default:
            break;
        }
      }
    }
  }

}
</script>

<style lang="less">
.hello{
  &>h4{
    font-size: 48px;
    color: #333;
    text-align: left;
    margin-bottom: 12px;
  }
  &>p{
    font-size: 28px;
    color: #919191;
    text-align: left;
  }
}

</style>
