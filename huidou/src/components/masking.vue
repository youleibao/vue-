<template>
	<div class="masking" @click='maskinghide' v-show='$root.maskingxian'>
        <ul class="masking-list">
            <li v-for='obj in arr'>
                <img :src="obj.src" alt="">
                <span>{{obj.text}}</span>
            </li>
        </ul>
	</div>
</template>

<script>

export default {
    name: 'masking',
    data () {
	    return {
            arr:[
                {
                    src:'/static/img/69.png',
                    text:'积累惠豆交易'
                },
                {
                    src:'/static/img/70.png',
                    text:'购物车'
                },
                {
                    src:'/static/img/71.png',
                    text:'梦想仓库'
                },
                {
                    src:'/static/img/72.png',
                    text:'会员帮助'
                },
            ],
            yincang:true

	    }
    },
    
    methods:{
        maskinghide(){
            this.$root.maskingxian=false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masking{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: fixed;
    left: 0;
    top:0;
    z-index: 300;
}
.masking-list{
    width: 150px;
    background: #fff;
    margin-top:44px;
    margin-left: 10px;
}
.masking-list li{
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    padding-left: 15px;
}
.masking-list li img{
    width: 12%;
    vertical-align: middle;
}
</style>
