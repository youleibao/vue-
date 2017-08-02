// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap';
Vue.use(AMap);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'fe9c3e2845e76c726536fe2b9acbdfb6',
  // 插件集合
  plugin: ['']
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
   data:{
  	isLoginOrRegist:true,
  	maskingxian:false,
  	tell:'',
	  tellnum:'',
	  outhide:false,
    mainobj:'',
    arr:[],
  },
  components: { App }
})
