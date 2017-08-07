<template>
  <div class="home">
        <leader></leader>
	    <lunbo></lunbo>
        <div class="hot">
            <h3>热门推荐</h3>
            <ul v-for="a in list3">
                <li>
                    <div class="hot-title">
                        <img src="../../static/img/13.png" alt="">
                        <img src="../../static/img/22.png" alt="">
                    </div>
                    <div class="hot-text">
                        <p>{{a.txt1}}</p>
                        <p>{{a.txt2}}</p>
                    </div>
                    <div class="hot-name">{{a.txt3}}</div>
                </li>
            </ul>
        </div>
        


    </div>
</template>

<script>
import lunbo from './lunbo'
import leader from './leader'
export default {
    name: 'Home',
    data () {
	    return {
            list3:[
                {
                    txt1:"电子会员卡-充值200送100元优惠券",
                    txt2:'2017年05月25日至2017年06月18日 超市发会员使用惠豆APP充值200元送100元优惠券礼包',
                    txt3:'电子会员卡'
                },
                {
                    txt1:"福临门大米，扫码赢红包",
                    txt2:'2017年5月11日-7月31日 购买福临门大米5kg、10kg, 扫码赢红包！',
                    txt3:'福临门大米'
                },
                {
                    txt1:"端午粽飘香-消费满88元送粽子",
                    txt2:'2017年5月30日 端午节当日消费满88元送粽子一枚',
                    txt3:'端午粽飘香'
                },
                {
                    txt1:"儿童节消费满61元惊喜抽奖",
                    txt2:'2017年6月1日 购物买61元，惊喜抽奖。',
                    txt3:'儿童节抽奖'
                },
            ],

	    }
    },
    components:{
		lunbo,
        leader,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    margin-bottom: 70px;
    width: 100%;
    background-color: #f3f3f3;
}
.hot{
    clear: both;
    width: 100%;
    margin-top:110px;
    background: #fff;
}
.hot h3{
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid #ccc;
    color: #57575a;
}
.hot ul{
    width: 100%;
}
.hot ul li {
    width: 100%;
    height: 80px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
}
.hot ul li div{
    float: left;
}
.hot-title{
    width: 18%;
    height: 100%;
    background: #fff;
}
.hot-title img:nth-child(1){
    width: 35%;
    
}
.hot-title img:nth-child(2){
    width: 80%;
    margin-left: 10%;
}
.hot-text{
    width: 60%;
    font-size: 14px;
    color: red;
    margin-top:5px;
}
.hot-text p:nth-child(2){
    font-size:12px;
    color: #57575a;
}
.hot-name{
    width: 22%;
    font-size: 14px;
    color: #fff;
    background: #bf2640;
    font-weight: bold;
    line-height: 34px;
    text-align: center;
    height: 34px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-top:20px;
}
</style>
