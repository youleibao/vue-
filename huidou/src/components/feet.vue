<template>
  <ul class="feet">
    <li v-for="(a,index) in list1" @click='imgchange(index,a)'>
      <router-link :class="a.cla" :to='a.to'>
        <img :src="a.src" alt="" ><span>{{a.title}}</span>      
      </router-link>
    </li>
    
  </ul>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'feet',
  data () {
    return {
      list1:[
        {
          title:'首页',
          cla:'home',
          to:'/',
          src:'../../static/img/7.png',          
          src1:'../../static/img/12.png',          
        },
        {
          title:'积惠豆',
          cla:'jifen',
          to:'/jifen',
          src:'../../static/img/8.png',          
          src1:'../../static/img/23.png',   

        },
        {
          title:'会员卡',
          cla:'memberCla',
          to:'/member',
          src:'../../static/img/17.png',          
          src1:'../../static/img/17.png',            
        },
        {
          title:'兑惠豆',
          cla:'convertCla',
          to:'/convert',
          src:'../../static/img/10.png',          
          src1:'../../static/img/24.png',            
        },
        {
          title:'我的',
          cla:'mineCla',
          to:'/mine',
          src:'../../static/img/11.png',          
          src1:'../../static/img/49.png',            
        },

      ],
      list:[
        '../../static/img/7.png',
        '../../static/img/8.png',   
        '../../static/img/17.png',   
        '../../static/img/10.png',   
        '../../static/img/11.png'  
      ]
    }
  },
  methods:{
    imgchange(index,a){
      for (var i = 0; i < this.list1.length; i++) {
        this.list1[i].src = this.list[i];
      }
      a.src =this.list1[index].src1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.router-link-active{
  color: red;
}
.feet{
  width: 100%;
  height: 49px;
  background: pink;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top:1px solid red;
}
.feet li{
  width: 20%;
}
.feet a{
  text-decoration: none;
  color:#57575a;
  font-size:14px;
  text-align: center;
  display: block;
  height: 100%;
}
.feet a img{
  height: 50%;
}

.feet .memberCla img{
  height: 95%;
  margin-top:-28%;
  border-top:1px solid red;
  box-sizing: border-box;
  border-radius: 50%;
}
.feet span{
  display: block;
}

</style>
