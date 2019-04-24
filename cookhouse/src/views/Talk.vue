<template>
    <div class="talk">
        <van-nav-bar title="热门评论" left-text="返回" left-arrow @click-left="onClickLeft">
           
           <van-icon name="search" slot="right" />
        </van-nav-bar>
        <div v-for="(item,index) in list" :key="index" class="talk-sign">
            <div class="talk-top">
            <div class="talk-left">
               <img :src="item.imgsrc" alt="" class="talk-img">
               <p>{{item.name}}</p>
            </div>
            <span>评论：</span>
            <div class="talk-right">{{item.content}}</div>
            </div>
            <div class="talk-icon">
                <ul>
                    <li><van-icon name="share" class="talk-icon-i"/><span>转发</span></li>
                    <li><van-icon name="chat-o" class="talk-icon-i" /><span>评论</span></li>
                    <li><van-icon name="thumb-circle-o" class="talk-icon-i" /><span> 点赞</span></li>
                </ul>
            </div>
            <van-icon name="add-o" class="talk-send" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    imgsrc:'http://i1.chuimg.com/47e74fcfba274f698d52d89def115228_534w_534h.jpg@2o_50sh_1pr_1l_60w_60h_1c_1e_90q_1wh',
                    name:'魏氏黄小芽',
                    content:'#晚餐•2019年4月23日#我本来说只吃豆腐和蘑菇的，结果没忍住多吃了五花肉和培根还有鸡翅，只怪实在太好吃了！'
                },
                {
                    imgsrc:'http://i2.chuimg.com/7a1b49395ed34b70a5afbcc985abec79_1080w_1080h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                    name:'夏花',
                    content:'深更半夜做的 黑米糕里加了很多红枣 这是明天给朋友的礼物 #晚餐•2019年4月23日#'
                },
                {
                    imgsrc:'http://i1.chuimg.com/d27ba836d2164328aee118966f151278_1080w_1080h.jpg@2o_50sh_1pr_1l_60w_60h_1c_1e_90q_1wh',
                    name:'花语食堂',
                    content:'#午餐•2019年4月24日#大头下午在本院有个手术，赶紧做俩菜，吃完让他睡会，补充好体力养足精神下午去工作。 午餐做了西葫芦鸡...'
                },
                {
                    imgsrc:'http://i2.chuimg.com/bf8100ffbe3341938c3704b5c1018602_160w_160h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                    name:'小啦m',
                    content:'#晚餐•2019年4月24日#家里刚添了两个拼接床，太满意了，再也不腰酸背痛的当汉堡包了🍔，我睡的这几夜都特别安稳！一个木制...'
                },
                {
                    imgsrc:'http://i2.chuimg.com/a7287dc4faea4a999560637f049642ac_1080w_1080h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                    name:'cyberpunk',
                    content:'#早餐•2019年4月24日#早安！皂角米银耳汤，煮得太厚了[捂脸]，巧克力皇冠👑包，猜猜是蛋糕还是面包？😁'
                }
            ]
        }
    },
    methods:{
        onClickLeft() {
         this.$router.go(-1);
      },
    }
}
</script>
<style lang="scss" scoped>
.talk{
    margin-bottom: 55px;
    &-send{
        z-index: 1000;
        position: fixed;
        bottom: 60px;
        right: 10px;
        font-size: 50px;
        color: #1989fa;
        background: white;
    }
    &-top{
        height: 84%;
        margin-bottom: 2px;
        overflow: hidden;
    }
    &-sign{
        border: 1px solid gainsboro;
        height: 160px;
        margin-bottom: 2px;
    }
    &-left{
        float: left;
        width: 30%;
        margin-left: 2px;
    }
    &-right{
        width: 65%;
        margin-left: 30%;
        
    }
    &-img{
        border-radius: 50%;
    }
    &-icon{
            font-size: 10px;
            margin-bottom: 5px;
            height: 16%;
            background: seashell;
        &-i{
            font-size: 20px!important;
            display: inline-block;
            margin: 0 10%;
        }
        ul li{
           width: 32%;
           margin: 0 2px;
           float: left;
           text-align: center;
           line-height: 23px;
           justify-content: middle;
        }
        span{
            display: inline-block;
        }
    }
    
}
</style>
