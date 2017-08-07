import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
//import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Jifen from '@/components/Jifen'
import huo from '@/components/huo'
import Huiyuan from '@/components/huiyuan'
import duihuan from '@/components/duihuan'
import load from "@/components/load"
import enroll from "@/components/enroll"
import mine from "@/components/mine"
//import searchBox from "@/components/searchBox"
import sousuo from "@/components/sousuo"
import feet from "@/components/feet"
//import mashing from "@/components/mashing"
import leader3 from "@/components/leader3"
Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
 
  	//默认
  	{
	    	path:'/',
	    	redirect:'/Home'
	   },
 
    {
    	path:'/feet',
    	name:'feet',
    	component:feet,
    	children:[
    	       {
					      path: '/Home',
					      name: 'Home',
					      component: Home,
					//    redirect:"/home"
					    },
					    {
					      path: '/jifen',
					      name: 'Jifen',
					      component: Jifen
					    },
					    { 
					    	path: '/huo',
					    	 name: 'huo',
					     component: huo
					    },
					    { 
					    	path: '/huiyuan',
					    	 name: 'Huiyuan',
					     component: Huiyuan,
					     
					    },
					     { 
					    	path: '/duihuan',
					    	 name: 'duihuan',
					     component: duihuan,
					     children:[
					          { 
								    	path: '/leader3',
								    	 name: 'leader3',
								     component: leader3
								    }
					     
					     ]
					
					    },
					    { 
					    	path: '/mine',
					    	 name: 'mine',
					     component: mine
					    }
					    
    	       
    	]
    },
	 { 
	    	path:'/load',
	     component: load
			},
	 { 
	    	path:'/enroll',
	     component: enroll
	  },
// { 
//  	path:'/searchBox',
//  	name:'searchBox',
//   component: searchBox
//  }
     { 
    	path:'/sousuo',
    	name:'sousuo',
     component: sousuo
    }
			  
  ]
})
