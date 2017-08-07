<template>
	<div class="car" >
		<ul v-for='obj in $root.arr'>
            <li><img :src="obj.src" alt=""></li>      
            <li>{{$root.mainobj.txt}}</li>      
            <li>{{$root.mainobj.txt1}}</li>      
        </ul>

        <div class="qing" @click='qk'>清空购物车</div>
	</div>
</template>

<script>
import load from './load'
export default {
    name: 'car',
    data () {
	    return {

	    }
    },
    components:{

    },
    methods:{
        qk(){
            this.$root.arr=[];
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:0;
    z-index: 410;
    background: pink;
}
.car ul{
    width: 100%;
    overflow: hidden;
}
.car ul img{
    width: 100%;
}
.car ul li{
    width: 33.33%;
    float: left;
    font-size:10px;
}
.qing{
    width: 100%;
    font-size:30px;
}
</style>
