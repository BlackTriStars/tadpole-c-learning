<template>
  <div class="login">
    <div class="inputItem">
      <input type="text" v-model="username" placeholder="请输入您的用户名">
    </div>
    <div class="inputItem">
      <input type="password" v-model="password" placeholder="请输入您的密码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="pin" placeholder="请输入验证码">
      <div class="pinImg">
        
      </div>
    </div>
    <tadButton class="button" :height="'1.28rem'">登 录</tadButton>
  </div>
</template>
<script>
//import { mapState , mapMutations , mapActions } from 'vuex';
import tadButton from "@/components/common/button";
export default {
  data() {
    return {
      username: '',
      password: '',
      pin: ''
    }
  },
  computed: {
    
  },
  components: {
    tadButton
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='less' rel='stylesheet/less'>
  .login{
    .inputItem{
      position: relative;
      & +.inputItem{
        margin-top: 42px;
      }
      .pinImg{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 216px;
        height: 72px;
        background:rgba(214,233,255,1);
        border-radius: 8px;/*no*/
      }
    }
    .button{
      margin-top: 60px;
    }
  }
</style>