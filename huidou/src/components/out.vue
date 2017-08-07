<template>
    <div class="out" v-show='$root.outhide'>
	    <ul class="leader" v-for="obj in leaderArr">
			<li @click='outshow'><img :src="obj.src" alt=""></li>
			<li>{{obj.text}}</li>
			<li></li>
		</ul>
	    <div class="kong"></div>
	    <ul class="out-list" v-for="b in arr3">
			<li>
				<img :src="b.src1" alt="">
				<span>{{b.text1}}</span>
				<img src="../../static/img/63.png" alt="">
			</li>
			<li>
				<img :src="b.src2" alt="">
				<span>{{b.text2}}</span>
				<img src="../../static/img/63.png" alt="">
			</li>
		</ul>
        <div class="out-out">退出登录</div>
    </div>
</template>

<script>
export default {
    name: 'out',
    data () {
	    return {
	    	arr3:[
		    	{
		    		src1:'/static/img/59.png',
		    		src2:'/static/img/60.png',
		    		text1:'个人信息',
		    		text2:'账户与安全'
		    	},
		    	{
		    		src1:'/static/img/61.png',
		    		src2:'/static/img/62.png',
		    		text1:'会员帮助',
		    		text2:'关于惠豆'
		    	},
	    	],
	    	leaderArr:[
		    	{
		    		src:'../../static/img/29.png',
		    		text:'设置',
		    	},

	    	],

	    }
    },
    components:{
    },
    methods:{
    	outshow(){
    		this.$root.outhide=false;
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.out{
	width: 100%;
	height: 100%;
	background: #eee;
	position: fixed;
	left: 0;
	top:0;
	z-index: 200;
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
	color: #fff;
	font-size:18px;
	z-index:100;
}
.leader li{
	line-height: 44px;
	height: 100%;
}
.leader li img{
	height: 60%;
	vertical-align: middle;
}
.leader li:nth-child(1) img,.leader li:nth-child(3) img{
    height: 40%;
}
.kong{
	width: 100%;
	height: 58px;
}
.out-list{
	width: 100%;
	margin-bottom:5px;
	background: #fff;
}

.out-list li{
	width: 100%;
	height: 50px;
	border-bottom: 1px solid #ddd;
	line-height: 50px;
}
.out-list li img:nth-child(1){
	height: 60%;
	vertical-align: middle;
	margin:0 10px;
}
.out-list li img:nth-child(3){
	height: 35%;
	vertical-align: middle;
}
.out-list li span:nth-child(2){
	width: 75%;
	display: inline-block;
}
.out-out{
	width: 100%;
	height: 50px;
	background:#d9344c;
	line-height: 50px;
	text-align: center;
	color: #fff;
	position: absolute;
	left: 0;
	bottom: 0;
}
</style>
