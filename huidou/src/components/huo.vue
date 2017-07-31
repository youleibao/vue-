<template>
  <div class="huo">
  	<div class="header">
  		<img @click="fan" src="../../static/img/29.png"/>
        <span>最新活动</span>
  	</div>
    
    
  </div>
</template>

<script>
export default {
  name: 'huo',
  data () {
    return {
//    msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	fan(){
  		this.$router.go(-1)
  	}
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
</style>
