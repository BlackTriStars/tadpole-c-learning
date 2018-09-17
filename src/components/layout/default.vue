@<template>
  <div class="container" :class="{paddingTop:header,paddingBottom:footer}">
    <BocHeader v-show="header"></BocHeader>
    <div class="appContent">
      <slot></slot>
    </div>
    <BocFooter v-show="footer"></BocFooter>
  </div>
</template>

<script>
import BocHeader from "@/components/common/header.vue";
import BocFooter from "@/components/common/footerNav.vue";
export default {
  data() {
    return {};
  },
  props: {
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  components: {
    BocHeader,
    BocFooter
  },
  updated() {
    document.querySelector(".appContent").scrollTop = 0;
  }
};
</script>

<style lang="less">
.paddingBottom {
  padding-bottom: 1.306667rem;
}
.paddingTop {
  padding-top: 1.173333rem;
}
</style>
