<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    
    <!--<feet></feet>-->
    <!--<ul class="ul1">
    	<li>
    		<router-link to='/'>
    			<p class="sp1"></p>
    		       首页
    	  </router-link>
    	</li>
    	<li>
    		<router-link to='/jifen'>
    			<p class="sp1"></p>
    			集惠豆
    		</router-link>
    	</li>
    	<li>
    		<router-link to='/huiyuan'>
    			<p class="sp1"></p>
    			会员卡
    		</router-link>
    	</li>
    	<li>
    		
    		<router-link to='/duihuan'>
    			<p class="sp1"></p>
    			兑惠豆
    		</router-link></li>
    	<li>
    		<router-link to='/main'>
    			<p class="sp1"></p>
    			我的
    		</router-link>
    	</li>
    </ul>-->
  </div>
</template>

<script>
//	import feet from "@/components/feet"
export default {
  name: 'app',
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.ul1{
	width: 100%;
	display: flex;
	justify-content: space-around;
	position: fixed;
	bottom: 0;
	height: 60px;
	border-top:1px solid #CCCCCC;
}
*{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
	
}
.ul1 li a{
	text-decoration: none;
}
.sp1:nth-child(1){
	/*border: 1px solid red;*/
	width: 25px;
	height:25px;
	margin-left: 3px;
	text-align: center;
	background-image: url(../static/img/12.png);
	background-size: 100%;
}
.sp1:nth-child(2){
	/*border: 1px solid red;*/
	width: 25px;
	height:25px;
	margin-left: 3px;
	text-align: center;
	background-image: url(../static/img/8.png);
	background-size: 100%;
}
</style>
