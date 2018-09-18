<template>
  <div class="firstLogin">
    <div class="inputItem">
      <input type="text" v-model="name" placeholder="请输入姓名">
    </div>
    <div class="inputItem">
      <input type="text" v-model="idCard" placeholder="请输入身份证号码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="tel" placeholder="请输入手机号码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="eMail" placeholder="请输入邮箱">
    </div>
    <div class="inputItem">
      <input type="text" v-model="password" placeholder="请输入密码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="repeatPassword" placeholder="请输入确认密码">
    </div>
    <tadButton class="button" :height="'1.28rem'">立即绑定</tadButton>
  </div>
</template>
<script>
//import { mapState , mapMutations , mapActions } from 'vuex';
import tadButton from "@/components/common/button";
export default {
  data() {
    return {
      name: '',
      idCard: '',
      tel: '',
      eMail: '',
      password: '',
      repeatPassword: ''
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
  .firstLogin{
    .inputItem{
      &+.inputItem{
        margin-top: 2px;
      }
    }
    .button{
      margin-top: 60px;
    }
  }
</style>
