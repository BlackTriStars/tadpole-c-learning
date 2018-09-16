<template>
  <div id="app">
    <defaultLayout :header="headerShow" :footer="footerShow">
      <router-view></router-view>
    </defaultLayout>
  </div>
</template>

<script>
import defaultLayout from "@/components/layout/default.vue";
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      headerShow: false,
      footerShow: false
    };
  },
  components: {
    defaultLayout
  },
  mounted() {
    this.checkoutPath(this.$route.name);
  },
  methods: {
    ...mapMutations(["changeHeader"]),
    checkoutPath(name) {
      if (name === "index") {
        this.headerShow = false;
        this.footerShow = true;
      } else {
        this.headerShow = true;
        this.footerShow = true;
      }
      console.log(name);
      switch (name) {
        case "saomiao":
          this.changeHeader({ title: "扫描二维码" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* @import "./styles/fonts/style.css"; */
</style>
