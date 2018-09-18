<template>
  <div class="loginRegister">
    <div class="topTool" v-show="$route.name === 'login'">
      <i class="icon-close"></i>
      <span>注册</span>
    </div>
    <hello :type="loginType"></hello>
    <router-view></router-view>
  </div>
</template>
<script>
//import { mapState , mapMutations , mapActions } from 'vuex';
import hello from "./components/hello";
export default {
  data() {
    return {
      loginType: 0
    }
  },
  computed: {
    
  },
  components: {
    hello
  },
  mounted() {
    
  },
  methods: {
    
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(nv){
        let { name } = nv
        switch (name) {
          case 'firstLogin':
            this.loginType = 0
            break;
          case 'login':
            this.loginType = 1
            break;
          case 'resetPassword':
            this.loginType = 2
            break;
          case 'changePassword':
            this.loginType = 3
            break;
          default:
            break;
        }
      }
    }
  }
}
</script>
<style lang='less' rel='stylesheet/less'>
  .loginRegister{
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    padding: 188px 60px 0;
    .topTool{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 120px;
      display: flex;
      padding: 0 36px;
      justify-content: space-between;
      align-items: center;
      font-size: 34px;
      color: #333;
    }
    input {
      width: 100%;
      height: 96px;
      background: #fff;
      line-height: 96px;
      font-size: 32px;
      border: none;
      border-bottom: 1px solid #D3DFEF; /*no*/
      &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder, &:-ms-input-placeholder {
        color:#BFBFBF;
      }
    }
  }
</style>