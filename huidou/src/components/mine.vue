<template>
    <div class="mine">
		<leader2></leader2>
		<div class="mine-leader-wrap">
			<div class="mine-leader">
				<img src="../../static/img/57.png" alt="">
				<div>
					<p>{{$root.tell}}</p>
					<p>{{$root.tellnum}}</p>
				</div>
				<img src="../../static/img/47.png" alt="">
				<img src="../../static/img/58.png" alt="">
			</div>	
			<div class="mine-leader-support">
				<a v-for='a in arr1' href="#">
					<p>{{a.text}}</p>
					<p>{{a.text1}}</p>
				</a>
			</div>		
		</div>
		<ul class="mine-list" v-for="b in arr1">
			<li>
				<img :src="b.src1" alt="">
				<span>{{b.text2}}</span>
				<img src="../../static/img/48.png" alt="">
			</li>
			<li>
				<img :src="b.src2" alt="">
				<span>{{b.text3}}</span>
				<img src="../../static/img/48.png" alt="">
			</li>
		</ul>
        <out></out>
        <load v-if="$root.isLoginOrRegist"></load>
        <enroll v-else></enroll>
    </div>
</template>

<script>
import leader2 from './leader2'
import out from './out'
import load from './load'
import enroll from './enroll'



export default {
    name: 'mine',
    data () {
	    return {
	    	arr1:[
		    	{
		    		text:'我的惠豆',
		    		text1:'0',
					src1:'/static/img/52.png',
		    		text2:'积累惠豆交易',
		    		src2:'/static/img/53.png',
		    		text3:'兑换惠豆订单',
		    	},
		    	{
		    		text:'总积累惠豆',
		    		text1:'0',
		    		src1:'/static/img/54.png',
		    		text2:'收货地址',
		    		src2:'/static/img/55.png',
		    		text3:'购物车',

		    	},
		    	{
		    		text:'已兑换惠豆',
		    		text1:'0',
		    		src1:'/static/img/50.png',
		    		text2:'梦想仓库',
		    		src2:'/static/img/51.png',
		    		text3:'服务消息',
		    	},
	    	],


	    }
    },
    components:{
    	leader2,
    	out,
    	load,
    	enroll
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	color: #666;
	text-decoration: none;
}
.mine{
	margin-top:44px;
	padding-bottom: 100px;
	background: #eee;
	width: 100%;
}
.mine-leader-wrap{
	width: 100%;
	background: #bf2640;
	margin-bottom: 10px;
}
.mine-leader{
	overflow: hidden;
	padding-top:10px;
}
.mine-leader div{
	width: 50%;
	height: 50px;
	float: left;
}
.mine-leader img{
	width: 12%;
	float: left;
	vertical-align: middle;
}
.mine-leader img:nth-child(1){
	margin:0 10px;
	width: 15%;
}
.mine-leader img:nth-child(3){
	margin-top: 5px;
}
.mine-leader img:nth-child(4){
	width: 5%;
	float: right;
	margin-right: 10px;
	vertical-align: middle;
	margin-top:15px;
}
.mine-leader-support{
	margin-top:8px;
	width: 100%;
	height: 100px;
	background-image: url(../../static/img/16.png);
	background-repeat: no-repeat;
	background-size: 100% 300%;
	background-position: 0 0;
	display: flex;
	text-align: center;
	padding-top: 30px;
	box-sizing: border-box;
}
.mine-leader-support a{
	display: block;
	width: 33%;
	height: 50px;
	border-right: 1px solid #ddd;
	line-height: 30px;
	font-size: 14px;
}
.mine-leader-support a:nth-child(3){
	border-right: none;
}
.mine-leader-support a p:nth-child(2){
	color: #bf2640;
}
.mine-list{
	width: 100%;
	margin-bottom:5px;
	background: #fff;
}
.mine-list li{
	width: 100%;
	height: 50px;
	border-bottom: 1px solid #ddd;
	line-height: 50px;
}
.mine-list li img:nth-child(1){
	height: 60%;
	vertical-align: middle;
	margin:0 10px;
}
.mine-list li img:nth-child(3){
	height: 35%;
	vertical-align: middle;
}
.mine-list li span:nth-child(2){
	width: 75%;
	display: inline-block;
}

</style>
