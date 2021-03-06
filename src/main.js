// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vTap from "v-tap"
import store from "./store"
import "./common/style/index.scss"
import "swiper/dist/css/swiper.min.css"
import "./common/js/initRem.js"

Vue.use(vTap);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
