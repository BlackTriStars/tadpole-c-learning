<template>
  <div class="title">
    <i class="icon-left" @click="$router.go(-1)">
    </i>
    <h1>
      {{title}}
    </h1>
    <div class="rightBtn" @click="handleClick"><slot></slot></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    handleClick(){
      this.$root.$emit('handleClick')
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(nv){
        let { title } = nv.meta
        this.title = this.$route.meta.title
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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
  i {
    font-size: 36px;
    width: 100px;
    margin-right: auto;
    transform: translateX(-20px);
  }
  h1{
    font-weight: bold;
    font-family: PingFangSC-Medium;
    font-size: 36px;
  }
  .rightBtn{
    width: 100px;
    margin-left: auto;
    font-size: 32px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(34,34,34,1);
  }
}
</style>
