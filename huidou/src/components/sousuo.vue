<template>
  <div class="sousuo">
        
    <el-input placeholder="搜索商品" icon="search" v-model="input2" :on-icon-click="handleIconClick" class="ww" >
    </el-input>
    <!--<p>hahahahahahhaha</p>-->
   <div class="c123">
      <div v-for="c in arr " v-show="isH" v-on:click="changes">
      	<p @click="show">{{myfilter(c.name)}}</p>
        
      </div>
      
    </div>
        <div class="leibiao" v-show="chu">
      	<dl v-for="g in arr">
      		<dt><img :src="g.pic"/></dt>
      		<dd>
      			<p>{{g.name}}</p>
      			<p>{{g.type}}</p>
      			<p>{{g.brand}}</p>
      		</dd>
      	</dl>
      </div>
  </div>
</template>

<script>
 import axios from"axios"
  export default {
    name: 'sousuo',
    data() {
      return {
        input2:'',
        arr:true,
        isH:false,
        chu:false,
      }
    },
    created(){
      var that=this;
      axios.get("../../static/data/3.json").then(function (res) {
      	console.log(res.data.data)
        that.arr=res.data.data
        console.log(that.arr)
      }).catch(function (err) {
//      console.log(err)
      })
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      myfilter(value){
        if(value.indexOf(this.input2)>-1){
          return value
        }
        this.isH=true;
      },
      changes(e){
      	 
         if(e.target){
         
            var ww=document.querySelector(".ww");
            var inp=ww.getElementsByTagName("input");
            console.log(inp.value);
            inp.value=e.target.innerHTML;
            this.input2=inp.value;
//          console.log(this.input2)
          	
         }
         this.isH=false;
         this.chu = true;
      }
      
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sousuo{
  /*margin-top: 10px;*/
 background: #D9344C;
 width: 100%;
}
.ww{
	width: 80%;
	margin-left: 5%;
	line-height: 50px;
}
.c123 div{
  padding-left: 5%;
  font-size: 14px;
  color: #333333;
  background-color: white;
}
.leibiao{
	width:100%;
	background: #EEEEEE;
	
	display: flex;
		flex-wrap: wrap;
}
.leibiao dl{
	width: 50%;
	background: white;
	
	
}
.leibiao dl dd{
	width: 80%;
}
.leibiao dl dt img{
	width: 80%;
}
.leibiao dl dt{
	width: 80%;
}
.leibiao dl dd p{
	width: 100%;
	font-size: 12px;
	overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>
