<template>
  <div class="resetPassword">
    <div class="inputItem">
      <input type="text" v-model="number" placeholder="请输入您的登录工号/员工号/手机号码">
    </div>
    <tadButton class="button" :height="'1.28rem'">立即重置</tadButton>
  </div>
</template>
<script>
//import { mapState , mapMutations , mapActions } from 'vuex';
import tadButton from "@/components/common/button";
export default {
  data() {
    return {
      number: ''
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
  .resetPassword{
    .button{
      margin-top: 56px;
    }
  }
</style>