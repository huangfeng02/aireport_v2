// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
var sidebar =require("./components/sidebar.vue");
var topHeader =require("./components/main-header.vue");


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

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

router.beforeEach((to, from, next) => {

    if(to.meta.requiresAuth){
        next()
       /* $.ajax({
            type: "POST",
            dataType: "json",
            data:{
                ykfci_csrf_token:csrf_hash
            },
            url: "/apply/is_login",
            success: function (res) {
                if(res.error==1){
                    next()
                }else {

                }
            },
            error: function () {alert("失败，请稍后再试！")},
        });*/
    }else {
        next()
    }
})