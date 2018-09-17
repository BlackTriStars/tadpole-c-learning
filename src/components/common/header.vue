<template>
  <div class="title">
    <i>
      <img src="../../assets/common/back.png" alt="" srcset="" @click="$router.go(-1)">
    </i>
    {{header.title}}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["header"])
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.title {
  width: 100%;
  height: 1.173333rem;
  font-size: 0.48rem;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  z-index: 999;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.173333rem;
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.48rem;
  }
}
</style>
