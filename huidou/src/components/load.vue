<template>
    <div class="load" v-show='loadhide'>
	    <ul class="leader" v-for="obj in leaderArr">
			<li @click='fanhui'><img :src="obj.src" alt=""></li>
			<li>{{obj.text}}</li>
			<li @click='hhh'>{{obj.text1}}</li>
		</ul>
	    <div class="kong"></div>
	    <div class="load-leader">
	    	<img src="../../static/img/68.png" alt="">
	    	<div>
	    		<input @click='change1($event)'  type="button" value="手机动态登录" v-bind:class="{ active: isActive }">
	    		<input @click='change2($event)' type="button" value="密码登录" v-bind:class="{ active: !isActive }">
	    	</div>
	    </div>
	    <div class="phone" v-show="phone1 == 'nihao'">
	    	<input type="text" placeholder="手机号码" v-model='$root.tell' id="in1">
	    	<input type="text" placeholder="验证码"  v-model='$root.tellnum' id="in2">
	    	<input type="button" value="获取验证码">
	    </div>
	    <div class="password" v-show="phone1 == 'nibuhao'">
	    	<input type="text" placeholder="手机号码">
	    	<input type="text" placeholder="验证码">
	    </div>
	  
        <div class="out-out" @click="getshu">登录</div>
    </div>
</template>

<script>

export default {
    name: 'load',
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
		    		text:'会员登录',
		    		text1:'注册'
		    	},

	    	],
	    	phone1:'nihao',
	    	isActive:true,
	    	loadhide:true,
	    }
    },
    components:{
    },
    methods:{
    	change1(ev){
    		this.phone1='nihao';
    		this.isActive = true;
    	},
    	change2(ev){
    		this.phone1='nibuhao';
    		this.isActive = false;
    	},
    	hhh() {
    		this.$root.isLoginOrRegist = false;
    	},
    	fanhui(){
    		this.$router.back(-1);
    	},
    	// 登录
    	getshu(){ 	
//		 
          var in1 = document.getElementById('in1');
          var in2 = document.getElementById('in2');
      if ((in1.value == localStorage.zhanghao) && (in2.value ==localStorage.mima)) {
      	   alert("登录成功")
      	   this.$router.push('/')
      } else{
      	alert("账户或密码错误");
      	return false;
      }
        
       
    	}
    },
    created(){
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load{
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
.load-leader{
	width: 100%;
    text-align: center;
}
.load-leader div{
	width: 100%;
}
.load-leader img{
	width: 20%;
    margin:20px 0;
}
.load-leader div input{
	width: 46%;
	height: 50px;
	border:none;
	background: #ccc;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
}

.phone,.password{
	width: 100%;
	padding:0 10px;
	box-sizing: border-box;
	margin:15px 0;
}

.phone input,.password input{
	height: 50px;
	background-repeat: no-repeat;
	background-position:10px center;
	box-sizing: border-box;
	background-size: 20px 20px;
	border:none;
	outline: medium;
	background-color: #fff;
}
.phone input:nth-child(1),.password input:nth-child(1){
	width: 100%;
	background-image:url(../../static/img/65.png);
	padding-left: 40px;
	margin-bottom: 5px;
}
.password input:nth-child(1){
	background-image:url(../../static/img/59.png);
}
.phone input:nth-child(2),.password input:nth-child(2){
	width: 60%;
	background-image:url(../../static/img/66.png);
	padding-left: 40px;
}
.password input:nth-child(2){
	width: 100%;
	background-image:url(../../static/img/60.png);
}
.phone input:nth-child(3){
	width: 38%;
	border-radius: 5px;
	background-color: #d9344c;
	color: #fff;
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
.load-leader div .active{
	background-color: #d9344c;
}
</style>
