<template>
  <div class="lunbo">
    <swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="a in list2">
		    <img :src="a.src">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>

    </swiper>  
    
  </div>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'
export default {
  name: 'lunbo1',
  data () {
    return {
    	swiperOption: {
            autoplay: 3000,
            pagination : '.swiper-pagination',
            loop : true//环路 
       },
       list2:[
	        {
                src:'/static/img/18.jpg',
	        	    src1:'/static/img/2.png',
                text:'最新活动'
	        },
	        {
                src:'/static/img/19.jpg',
	        	src1:'/static/img/3.png',
                text:'附近活动'
	        },
	        {
                src:'/static/img/20.jpg',
	        	src1:'/static/img/4.png',
                text:'兑换商品'
	        },
	        {
                src:'/static/img/21.jpg',
	        	src1:'/static/img/5.png',
                text:'我的惠豆'
	        },
        ]
      
    }
  },
    components:{
    	swiper
    },
    methods:{
    	
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lunbo{
	width: 100%;
	/*margin-top:44px;*/
    position: relative;
}

.lunbo img{
	width: 100%;
}
.swiper-pagination{
    position: absolute;
    left: 0;
    top:100px;
    z-index: 200;
}
.support{
    width: 100%;
    height: 130px;
    position: absolute;
    left: 0;
    top:140px;
    z-index: 1;
    background-image: url(../../static/img/16.png);
    background-position: 0 0 ;
    background-size: 100% 200%;
    background-repeat: no-repeat;
}

.support ul{
    margin-top:30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
    color: #57575a;

}
.support ul li{
    width: 70%;

}
.support ul li img{
    width: 60%;
}
</style>



