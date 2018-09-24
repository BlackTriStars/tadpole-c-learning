// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //vuex的
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'
import VueMyarea from 'vue-myarea'
import MintUI from 'mint-ui';
import 'lib-flexible';
import 'whatwg-fetch';
import './styles/mint.css'
import './styles/fonts/style.css'
import './styles/components.css'
// import {} from 'vue-myarea';

Vue.use(MintUI);
Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper);
Vue.use(VueMyarea);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
