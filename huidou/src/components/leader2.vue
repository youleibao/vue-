<template>
  <div class="leader-wrap">
	  <ul class="leader">
		  <li @click="fan"><img src="../../static/img/29.png" alt=""></li>
		  <li>会员登录</li>
		  <li>注册</li>  	
	  </ul>
	  
	   
  </div>
  
</template>

<script>
	
//import home from '/'
export default {
  name: 'leader2',
  data () {
    return {
    	
    }
  },
  components:{
//	home
  },
  methods:{
  	fan(){
  		this.$router.push('/')
  	}
  }
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin:0;
	padding: 0;
	list-style: none;
}
.leader-wrap{
	width: 100%;
	margin-top: 40px;
}
.leader{
	width: 100%;
	height: 44px;
	background: #bf2640;
	position: fixed;
	left: 0;
	top:0;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	box-sizing: border-box;
}
.leader li{
	line-height: 44px;
	height: 100%;
}
.leader li img{
	height: 60%;
	vertical-align: middle;
}
.leader li{
	color: white;
}
.leader li:nth-child(1) img, .leader li:nth-child(3) img{
    height: 40%;
}


</style>
