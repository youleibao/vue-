<template>
  <div class="leader-wrap">
	  <ul class="leader">
		  <li @click='maskingshow'><img src="../../static/img/1.png" alt=""></li>
		  <li><img src="../../static/img/15.png" alt=""></li>
		  <li><img src="../../static/img/6.png" alt=""></li>  	
	  </ul>
	  <masking v-show='$root.maskingxian'></masking>
  </div>

</template>

<script>
import masking from './masking'
export default {
  name: 'leader',
  data () {
    return {
    }
  },
  components:{
  	masking
  },
  methods:{
  	maskingshow(){
		this.$root.maskingxian=true;
  	},
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
.leader li:nth-child(1) img,.leader li:nth-child(3) img{
    height: 40%;
}
</style>
