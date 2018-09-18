<template>
  <div class="loginRegister">
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
    padding: 0 36px;
  }
</style>