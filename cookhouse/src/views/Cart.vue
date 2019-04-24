<template>
    <div class="cart">
        <!-- 上导航 -->
        <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft">
           
           <van-icon name="search" slot="right" />
        </van-nav-bar>
       <!-- picture -->
       <img src="http://i2.chuimg.com/4cf46b1066a843f6b8ddd05c78db529b_1920w_1080h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" alt="" width="100%" height="200px">
       <p>名称：菠萝包</p>
       <span style="line-height:44px">用料：</span>  <van-button plain type="primary" class="cart-add">加入购物车</van-button>
       <div>
           <van-list
            finished-text="没有更多了"
            >
            <van-cell
                v-for="item in list"
                :key="item"
                :title="item"
            />
            </van-list>
       </div>
       <!-- video -->

       <p style="color:#ff976a">vip专享视频展示</p>
       <video src="" controls="controls" class="cart-video">
        
       </video>
       <!-- <my-video :sources="video.sources" :options="video.options" class="cart-video"/> -->
      <!-- 下导航 -->
      <van-goods-action class="cart-bar">
        <van-goods-action-mini-btn
            icon="chat-o"
            text="客服"
        />
        <van-goods-action-mini-btn
            info="5"
            icon="cart-o"
            text="购物车"
        />
        <van-goods-action-mini-btn
            icon="shop-o"
            text="店铺"
        />
        <van-goods-action-big-btn text="加入购物车" />
        <van-goods-action-big-btn
            primary
            text="立即购买"
        />
    </van-goods-action>
    </div>
</template>
<script>
// import myVideo from 'vue-video'
export default {
    data(){
        return{
            list:[
                '高筋面粉	160克',
                '低筋面粉	40克',
                '食用盐	2克',
                '细砂糖	35克',
                '奶粉	6克',
                '全蛋液	20克',
                '食用水	110克',
                '干酵母	3克',
                '无盐黄油	25克',
                '菠萝皮',
                '无盐黄油	40克',
                '无盐黄油	40克',
                '全蛋液	15克',
                '奶粉	8克',
                '低筋面粉	65克'
            ]
//             video:{
//                 sources:[
//                     {
//                         src:'../../../static/video/1.mp4',
//                         type:'video/mp4'
//                     }
//                 ],
//                 options:[{
//                autoplay:true,
//                volume:0.6,
//                poster:'http://covteam.u.qiniudn.com/poster.png',
//               }]
//             }
        }
    },
    methods:{
        onClickLeft() {
         this.$router.go(-1);
      },
    }
    //  components:{
    //         myVideo
    // }
}
</script>
<style lang="scss" scoped>
.cart{
    position: fixed;
   top: 0;
   left:0;
   right:0;
   height: 100%;
   overflow: scroll;
    &-bar{
        z-index: 100!important;
        position: fixed;
        bottom: 0;
    }
    &-add{
        float: right;

    }
    &-video{
        margin-bottom: 55px;
        width: 100%;
        
    }
}
</style>
