<template>
	<div class="mas" v-show='aa'>
        <ul class="masking-list">
            <li @click="pai">
                <!--<img :src="obj.src" alt="">-->
                <!--<span class="sp2">{{obj.text}}</span>-->
                0-5000
            </li>
            <li>5000-1000</li>
            <li>10000-20000</li>
            <li>20000-30000</li>
        </ul>
	</div>
</template>

<script>

export default {
    name: 'mas',
    data () {
	    return {
	    	aa:false,
//          arr:[
//              {
//                
//                  text:'0-5000'
//              },
//              {
//                
//                  text:'5000-10000'
//              },
//              {
//               
//                  text:'10000-15000'
//              },
//              {
//              
//                  text:'50000-80000'
//              },
//          ],
            yincang:true

	    }
    },
    
    methods:{
    	
    	
       pai(){
       	var sp2 = document.getElementsByClassName('.sp2');
       	   if(bb.jiage  ){}
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mas{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    
    z-index: 300;
}
.masking-list{
    width: 100%;
    background: #fff;
    
    /*margin-left: 15px;*/
}
.masking-list li{
    width: 100%;
    line-height: 40px;
    /*border-bottom: 1px solid #eee;*/
   margin-left: 15px;
   text-align: left;
}

</style>
