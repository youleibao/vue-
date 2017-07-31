import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
//import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Jifen from '@/components/Jifen'
import huo from '@/components/huo'
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
     
    },
    {
      path: '/jifen',
      name: 'Jifen',
      component: Jifen
    },
    { 
    	path: '/huo',
     component: huo
    }
  ]
})
