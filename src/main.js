// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
var sidebar =require("./components/sidebar.vue");
var topHeader =require("./components/main-header.vue");

//import VeeValidate from 'vee-validate';
//Vue.use(VeeValidate);
var main_sidebar = new Vue({
    el: '#main-sidebar',
    components:{sidebar}
});
var main_header = new Vue({
    el: '#main-header',
    components:{topHeader}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
