<template>
    <div class="enroll" v-show="enrollwrap == 'hahaha'">
	    <ul class="leader" v-for="obj in leaderArr">
			<li @click='close1'><img :src="obj.src" alt=""></li>
			<li>{{obj.text}}</li>
			<li @click='close1'>{{obj.text1}}</li>
		</ul>
	    <div class="kong"></div>
	    <div class="enroll-leader">
	    	<img src="../../static/img/68.png" alt="">
	    	<div>
	    		<input @click="change1" v-bind:class="{ active: isActive }" type="button" value="手机动态注册">
	    		<input @click="change2" v-bind:class="{ active: !isActive }" type="button" value="标准注册">
	    	</div>
	    </div>
	    <div class="phone" v-show="phone1 == 'haha'">
	    	<input type="text" placeholder="手机号码" id="zhanghao">
	    	<input type="text" placeholder="验证码"  id="mima">
	    	<input type="button" value="获取验证码" >
	    </div>
	    <div class="enroll-norm" v-show="phone1 == 'hehe'">
	    	<input type="text" placeholder="手机号码" v-model='tell'>
	    	<input type="text" placeholder="用户名" v-model='tellnum'>
	    	<input type="text" placeholder="密码" >
	    	<input type="text" placeholder="确定密码">
	    	<input type="text" placeholder="验证码">
	    	<input type="button" value="获取验证码">
	    </div>
	    <div class='agree'>
	    	<input type="checkbox">
	    	我已阅读且遵守<span>《惠豆条款》</span>
	    </div>
        <div class="out-out" @click='getshuju'>提交</div>
    </div>
</template>

<script>
	import axios from 'axios'
	
export default {
    name: 'enroll',
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
		    		text:'会员注册',
		    		text1:'登录'
		    	},
	    	],
	    	phone1:"haha",
	    	enrollwrap :'hahaha',
	    	isActive:true,
	    	tell:'',
	    	tellnum:''
	    	
	    }

    },
    components:{
    },
    methods:{
    	change1(){
    		this.phone1 = "haha";
    		this.isActive=true;
    		
    	},
    	change2(){
    		this.phone1 = "hehe";
    		this.isActive=false;
    	},
    	close1(){
    		this.$root.isLoginOrRegist = true;
    	},
    	// 注册
    	getshuju(){
//		    this.$http.post('http://localhost/May/huidou/hdw/static/login.php',{tell:this.tell,tellnum:this.tellnum},{emulateJSON:true}).then((res)=>{
//		        console.log(res);
//		  	},(err)=>{
//				console.log(err);
//		  	});    
                
            var zhanghao = document.getElementById("zhanghao");
    		var mima = document.getElementById("mima");
//  		var that= this;
    		if(zhanghao.value == ''||mima.value == ""){
    			alert('账号密码不能为空')
    		}else{
    			localStorage.setItem('zhanghao',zhanghao.value)
    			localStorage.setItem('mima',mima.value)
    			alert('注册成功');
    			 this.$router.push({path:'/load'});
    		}
    		
    		
    	}

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enroll{
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
.leader li:nth-child(3){
	font-size: 12px;
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
.enroll-leader{
	width: 100%;
    text-align: center;
}
.enroll-leader div{
	width: 100%;
}
.enroll-leader img{
	width: 20%;
    margin:20px 0;
}
.enroll-leader div input{
	width: 46%;
	height: 50px;
	border:none;
	background: #ccc;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
}


.phone,.enroll-norm{
	width: 100%;
	padding:0 10px;
	box-sizing: border-box;
	margin:15px 0;
}

.phone input,.enroll-norm input{
	height: 50px;
	background-repeat: no-repeat;
	background-position:10px center;
	box-sizing: border-box;
	background-size: 20px 20px;
	border:none;
	outline: medium;
	background-color: #fff;
	width: 100%;
	margin-bottom: 5px;
	padding-left: 40px;
}
.phone input:nth-child(1),.enroll-norm input:nth-child(1){
	width: 100%;
	background-image:url(../../static/img/65.png);
	padding-left: 40px;
	margin-bottom: 5px;
}
.enroll-norm input:nth-child(1){
	background-image:url(../../static/img/65.png);
}
.phone input:nth-child(2),.enroll-norm input:nth-child(5){
	width: 60%;
	background-image:url(../../static/img/66.png);
	padding-left: 40px;
}
.enroll-norm input:nth-child(2){
	width: 100%;
	background-image:url(../../static/img/60.png);
	padding-left: 40px;
}
.phone input:nth-child(3),.enroll-norm input:nth-child(6){
	width: 38%;
	border-radius: 5px;
	background-color: #d9344c;
	color: #fff;
	padding: 0;
}
.enroll-norm input:nth-child(2){
	background-image:url(../../static/img/59.png);
}
.enroll-norm input:nth-child(3){
	background-image:url(../../static/img/60.png);
}
.enroll-norm input:nth-child(4){
	background-image:url(../../static/img/60.png);
}

.out-out{
	width: 94%;
	height: 50px;
	background:#d9344c;
	line-height: 50px;
	text-align: center;
	border-radius: 10px;
	color: #fff;
	margin:0 3%;
	box-sizing: border-box;
}
.agree{
	padding: 10px;
	color:#57575a;
}
.agree input{
	width: 20px;
	height: 20px;
	vertical-align: middle;
}
.agree span{
	color:#008cd6;
}
.enroll-leader div .active{
	background-color: #d9344c;
}
</style>
