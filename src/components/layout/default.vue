@<template>
  <div class="container" :class="{paddingTop:headerShow,paddingBottom:footerShow}">
    <BocHeader v-show="headerShow">{{$route.meta.btn?$route.meta.btn : ''}}</BocHeader>
    <div class="appContent">
      <slot></slot>
    </div>
    <BocFooter v-show="footerShow"></BocFooter>
  </div>
</template>

<script>
import BocHeader from "@/components/common/header.vue";
import BocFooter from "@/components/common/footerNav.vue";
export default {
  data() {
    return {
      headerShow: false,
      footerShow: false,
    };
  },
  props: {
    header: {
      type: Object,
      default: {
        include: [],
        exclude: []
      }
    },
    footer: {
      type: Object,
      default: {
        include: [],
        exclude: []
      }
    },
  },
  components: {
    BocHeader,
    BocFooter
  },
  mounted(){
    const { header, footer} = this
    const { include: headerInclude, exclude: headerExclude } = header
    const { include: footerInclude, exclude: footerExclude } = footer
    if(headerInclude && headerInclude.length && headerInclude && headerExclude.length){
      console.error('headerExclude will not effect')
    }
    if(footerInclude && footerInclude.length && footerExclude && footerExclude.length){
      console.error('headerExclude will not effect')
    }

  },
  updated() {
    document.querySelector(".appContent").scrollTop = 0;
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(nv){
        const  { name } = nv
        const { header, footer } = this
        const { include: headerInclude, exclude: headerExclude } = header
        const { include: footerInclude, exclude: footerExclude } = footer
        // debugger
        if(headerInclude && headerInclude.length){
          if(headerInclude.includes(name)){
            this.headerShow = true
          }else{
            this.headerShow = false
          }
        }else{
          if(headerExclude && !headerExclude.includes(name)){
            this.headerShow = true
          }else{
            this.headerShow = false
          }
        }

        if(footerInclude && footerInclude.length){
          if(footerInclude.includes(name)){
            this.footerShow = true
          }else{
            this.footerShow = false
          }
        }else{
          if(footerExclude && !footerExclude.includes(name)){
            this.footerShow = true
          }else{
            this.footerShow = false
          }
        }

      }
    }
  }
};
</script>

<style lang="less">
.container, .appContent{
  height: 100%;
  overflow: auto;
}
.paddingBottom {
  padding-bottom: 1.306667rem;
}
.paddingTop {
  padding-top: 1.173333rem;
}

</style>
