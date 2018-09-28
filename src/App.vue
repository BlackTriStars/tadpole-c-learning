<template>
  <div id="app">
    <defaultLayout :header="headerShowList" :footer="footerShowList">
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
      headerShowList: {
        exclude: ['index', 'login', 'online', 'lesson','productList','productInfo','addEdit','cart','cartManage','infoInfo']
      },
      footerShowList: {
        include: [ 'index', 'my', 'online','mianshou' ]
      },
    };
  },
  components: {
    defaultLayout
  },
  mounted() {

  },
  methods: {
  },
  watch: {

  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  transform: translate(0);
}

/* @import "./styles/fonts/style.css"; */
</style>
