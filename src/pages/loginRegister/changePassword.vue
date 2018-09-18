<template>
  <div class="changePassword">
    <div class="inputItem">
      <input type="text" v-model="oldPwd" placeholder="请输入旧密码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="newPwd" placeholder="请输入新密码">
    </div>
    <div class="inputItem">
      <input type="text" v-model="rePwd" placeholder="请再次输入您的新密码">
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
      oldPwd: '',
      newPwd: '',
      rePwd: ''
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
  .changePassword{
    .inputItem{
      &+.inputItem{
        margin-top: 42px;
      }
    }
    .button{
      margin-top: 60px;
    }
  }
</style>