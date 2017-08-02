<template>
  <div class="huo">
  	<div class="header">
  		<img @click="fan" src="../../static/img/29.png"/>
        <span>附近</span>
  	</div>
    <div class="kuang">
    	   <gaode></gaode>
    	   <div class="didian">
    	   	     <div class="xiang" v-for="aa in arr">
    	   	     	   <div class="left">
    	   	     	   	   <p>{{aa.name}}</p>
    	   	     	   	   <p class="p2">{{aa.address}}</p>
    	   	     	   	   <p class="p1">{{aa.time}}</p>
    	   	     	   </div>
    	   	     	   <div class="right">
    	   	     	   	   <img :src="aa.img"/>
    	   	     	   </div>
    	   	     </div>
    	   </div>
    </div>
    
  </div>
</template>

<script>
	import gaode from "@/components/gaode"
	import axios from 'axios'
//import qs from 'qs'

export default {
  name: 'huo',
  data () {
    return {

       arr:[] 
    }
  },
  created(){
   	this.huo()

  },
  methods:{
  	fan(){
  		this.$router.go(-1)
  	},
  	huo(){
  		let _this = this
//		console.log(this)
  		   axios.get('../../static/data/1.json').then(function(res){
         console.log(res.data)
         let arr = res.data;
         _this.arr = arr;
       }).catch(function (err) {
         console.log(err);
       })
 
  	}
  	
  },
  components:{
  	gaode,
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.huo{
	
	width: 100%;
	height: 100%;
}
.header{
	width: 100%;
	background: #BF2640;
	height: 49px;
}
.header img{
	
	height: 60%;
	display: inline-block;
	margin-top: 3%;
	margin-left: -240px;
	/*margin-right: 200px;*/
}
.header span{
	font-size: 16px;
	color: white;
	display: inline-block;
	margin-left: 40px;
}
.kuang{
	width: 100%;
	/*height: 300px;*/
	
}
.didian{
	width: 100%;
	/*height:500px;*/
  background: #CCCCCC;
}
.xiang{
	width: 100%;
	height: 80px;
	background: white;
	overflow: hidden;
	margin-top: 3%;
	/*justify-content: space-around;*/
}
.left{
	float: left;
	margin-top: 10px;
	width: 58%;
	margin-left: 2%;
	/*background: red;*/
}
.left p{
	width: 100%;
	text-align: left;
}
.right{
	width: 40%;
	float: left;
	/*background: palegoldenrod;*/
}
.right img{
	width: 60%;
	margin-top: 10px;
}
.p1{
	color: #DDDDDD;
}
.p2{
	color: orangered;
}
</style>
