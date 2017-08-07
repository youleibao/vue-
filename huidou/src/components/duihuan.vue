<template>
  <div class="duihuan">
     <leader3></leader3>
     <lunbo1 style="margin-top: 40px;"></lunbo1>
     <div class="kuang">
     	  <ul>
     	  	<li @click="sh">
     	  		惠豆
     	  	</li>
     	  	
     	  	<li @click="xianshi">
     	  		分类
     	  	</li>
     	  </ul>
     	  
     </div>
     <mas v-show='aa'></mas>
     <div class="fenlei" v-show="bb">
     	   <ul>
     	   	<li>不限</li>
     	   	<li>手机</li>
     	   	<li>耳机</li>
     	   	<li>家用电器</li>
     	   	<li>数码</li>
     	   	<li>家具</li>
     	   	<li>化妆用品</li>
     	   	<li>汽车用品</li>
     	   	<li>钟表</li>
     	   	<li>厨具</li>
     	   	<li>医药保健</li>
     	   	<li>家具</li>
     	   </ul>
     </div>
     <div class="nei">
     	  <h3>特别推荐</h3>
     	  <div class="leibiao">
     	  	<dl @click="tiao" v-for="bb in arr">
	     	  	<!--<dt><img src="../../static/img/36.jpg"/></dt>
	     	  	<dd>
	     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
	     	  		<p class="jiage">7,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
	     	  		
	     	  	</dd>
	     	  </dl>
	     	  	<dl>
	     	  	<dt><img src="../../static/img/37.jpg"/></dt>
	     	  	<dd>
	     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
	     	  		<p class="jiage">8,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
	     	  		
	     	  	</dd>
	     	  	</dl>
	     	  	<dl>
	     	  	<dt><img src="../../static/img/38.jpg"/></dt>
	     	  	<dd>
	     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
	     	  		<p class="jiage">4,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
	     	  		
	     	  	</dd>
	     	  	</dl>
	     	  	<dl>
	     	  	<dt><img src="../../static/img/39.jpg"/></dt>
	     	  	<dd>
	     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
	     	  		<p class="jiage">9,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
	     	  		
	     	  	</dd>-->
	     	  	
	     	  	<dt><img :src="bb.img"/></dt>
	     	  	<dd>
	     	  		<p class="name">{{bb.name}}</p>
	     	  		<p class="jiage">{{bb.jiage}}<span class="tu"><img :src="bb.xiao_img"/></span></p>
	     	  		
	     	  	</dd>
     	    </dl>
     	    <h3>商品兑换</h3>
     	    <div class="kuang">
     	    	    	<dl>
					     	  	<dt><img src="../../static/img/33.jpg"/></dt>
					     	  	<dd>
					     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
					     	  		<p class="jiage">4,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
					     	  		
					     	  	</dd>
				     	  	</dl>
				     	  		<dl>
					     	  	<dt><img src="../../static/img/34.jpg"/></dt>
					     	  	<dd>
					     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
					     	  		<p class="jiage">4,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
					     	  		
					     	  	</dd>
					     	  </dl>
					     	  	<dl>
					     	  	<dt><img src="../../static/img/35.jpg"/></dt>
					     	  	<dd>
					     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
					     	  		<p class="jiage">4,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
					     	  		
					     	  	</dd>
					     	  	</dl>
					     	  		<dl>
							     	  	<dt><img src="../../static/img/36.jpg"/></dt>
							     	  	<dd>
							     	  		<p class="name">乐扣470ML搅拌杯HPL931N</p>
							     	  		<p class="jiage">4,444<span class="tu"><img src="../../static/img/45.png"/></span></p>
							     	  		
							     	  	</dd>
						     	  	</dl>
     	    </div>
     	  </div>
     	  
     </div>
  </div>
</template>

<script>
import lunbo1 from "./lunbo1"
import leader3 from "./leader3"
import mas from './mas'
import axios from 'axios'
export default {
  name: 'duihuan',
  data () {
    return {
//    msg: 'Welcome to Your Vue.js App'
      aa :false,
      bb:false,
     
      arr:[]
    }
  },
  components:{
  	leader3,
  	lunbo1,
  	mas,
  },
created(){
   	this.huoqu()
    
},
  methods:{
  	sh(){
  		
  	 this.aa=this.aa?false:true;
  		
  	},
  	xianshi(){
  		this.bb = this.bb?false:true;
  	},
	huoqu(){
		let _this = this
//		console.log(this)
		   axios.get('../../static/data/2.json').then(function(res){
         console.log(res.data)
         let arr = res.data;
         _this.arr = arr;
       }).catch(function (err) {
         console.log(err);
       })
	},
	tiao(){
		this.$router.push('huo')
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
*{
	margin: 0;
	padding: 0;
}

.duihuan{
	width: 100%;
	background: #EEEEEE;
}
.kuang{
	width: 100%;
	background: white;
	line-height: 40px;
}
.kuang ul{
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.kuang ul li a{
	text-decoration: none;
	color: black;
}
.fenlei{
	width: 100%;
	background: white;
	z-index: 40;
}
.fenlei ul{
	width: 100%;
	
}
.fenlei ul li{
	width: 100%;
	text-align: left;
	line-height: 30px;
	margin-left: 15px;
}
.nei{
	width: 100%;
}
.nei h3{
	width: 100%;
	line-height: 40px;
}
.leibiao{
	width: 95%;
	margin-left: 2.5%;
	overflow: hidden;
	/*border: 1px solid red;*/
}
.leibiao dl{
	background: white;
	width: 48%;
	float: left;
	margin-right: 2%;
	margin-top: 2%;
}
.leibiao dl dt{
	width: 80%;
	margin-left: 10%;
}
.leibiao dl dt img{
	width: 80%;
}
.leibiao dl dd{
	width: 100%;
   /*margin-left: 10%;*/
}
.name{
	font-size:13px;
}
.jiage{
	color: #BF2640;
}
.tu{
	width: 14px;
	height: 14px;
	/*border: 1px solid red;*/
}
.tu img{
	width: 14px;
	/*float: left;*/
}
</style>
