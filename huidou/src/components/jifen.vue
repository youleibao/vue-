<template>
  <div class="jifen">
    <leader1></leader1>
    <lunbo1></lunbo1>
      <div class="s1">
      	<div class="div1">
      		<h3>热门推荐</h3>
	   	    <span>更多   ></span>
      	</div>
	   	   <div class="div1">
	   	   	   <h3>合作伙伴</h3>
	   	    <span>更多   ></span>
	   	   </div> 
	   	   <ul class="ul2">
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850061243360hzcard-pri-01_huaxialiangzi-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850315353774hzcard-pri-01_zongguan-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301852038094878hzcard-pri-01_shenmei-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850315353774hzcard-pri-01_zongguan-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301505225243332hzcard-pri-01_sinopec.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301609057704850hzcard-pri-01_v-01.png"/></a>
	   	   	</li>
	   	   
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850198793287hzcard-pri-01_jishengtang-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850198793287hzcard-pri-01_jishengtang-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850198793287hzcard-pri-01_jishengtang-1.png"/></a>
	   	   	</li>
	   	   	<li>
	   	   		<a href=""><img src="../../static/images/201706301850198793287hzcard-pri-01_jishengtang-1.png"/></a>
	   	   	</li>
	   	   		<li>
	   	   		<a href=""><img src="../../static/images/201706301852038094878hzcard-pri-01_shenmei-1.png"/></a>
	   	   	</li>
	   	   		<li>
	   	   		<a href=""><img src="../../static/images/201706301852038094878hzcard-pri-01_shenmei-1.png"/></a>
	   	   	</li>
	   	   </ul>
       </div>
  </div>
</template>

<script>
import leader1 from './leader1'
import lunbo1 from './lunbo1'
export default {
  name: 'jifen',
  data () {
    return {
       
     
    }
  },
  components:{
	     lunbo1,
        leader1
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.s1{
	width: 100%;
	background: #EEEEEE;
	/*overflow: hidden;*/
}
.div1{
	width: 100%;
	overflow: hidden;
	line-height: 40px;
}

.div1 h3{
	float: left;
	width:80px;
	/*background: white;*/
	margin-left: 40%;
	/*background: orangered;*/
}
.div1 span {
	float: right;
	/*background: blue;*/
}
.ul2{
	width: 95%;
	margin-left: 2.5%;
	padding-bottom: 20%;
	overflow: hidden;
	display: flex;

	flex-wrap: wrap;
}
.ul2 li{
	width: 32%;
	height: 100px;
	background: white;
	margin: 1px;
	/*border: 1px solid #EEEEEE;*/
	
}
.ul2 li img{
	width: 80%;
	/*display: inline-block;*/
	margin-top: 5%;
}
</style>
