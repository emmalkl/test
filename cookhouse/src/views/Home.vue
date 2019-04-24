<template>
  <div class="home">
    <!-- title -->
    <p class="home-title">厨 汇</p>
    <!-- search -->
    <van-search placeholder="今日厨房"  show-action>
    <div slot="action">搜索</div>
    </van-search>
    <!-- lunbo -->
    <van-swipe :autoplay="3000">
     <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" class="home-img"/>
     </van-swipe-item>
    </van-swipe>
    <!-- iconfont -->
    <div class="home-icon">
      <ul class="home-icon-ul">
        <li>
          <i class="iconfont icon-shoutao"></i>
          <span>烘焙入门</span>
        </li>
        <li>
          <i class="iconfont icon-foodandappliances-2" style="color:hotpink"></i>
          <span>甜点</span>
        </li>
        <li>
          <i class="iconfont icon-noodles" ></i>
          <span>面食</span>
        </li>
        <li>
          <i class="iconfont icon-cai" style="color:rgb(28, 182, 131)"></i>
          <span>家常菜</span>
        </li>
        <li>
          <i class="iconfont icon-dianxin" style="color:hotpink"></i>
          <span>中式点心</span>
        </li>
        <li>
          <i class="iconfont icon-Food-Icons-4"></i>
          <span>面包</span>
        </li>
        <li>
          <i class="iconfont icon-cupcake" style="color:hotpink"></i>
          <span>蛋糕</span>
        </li>
        <li>
          <i class="iconfont icon-foodandappliances-1"></i>
          <span>健康减脂</span>
        </li>
      </ul>  
    </div>
    <!-- remen -->
    <div class="home-hot">
      <p class="home-hot-title">热门产品</p>
      <ul class="home-hot-ul">
        <li v-for="(item,index) in products" :key="index" class="home-hot-ul-li">
           <img :src="item.imgsrc" alt="">
           <span>{{item.name}}</span>
           <span>￥{{item.price}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      images:[
        'http://i2.chuimg.com/9b43432a38b54a429287c5f81516f15a_3024w_3024h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        'http://i2.chuimg.com/c24e69c6d39c4fe0a102b977eb36413b_4096w_2730h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90',
        'http://i1.chuimg.com/2088b96dfff0418182ae232d9abc7fd0_1920w_1080h.jpg@2o_50sh_1pr_1l_490w_260h_1c_1e_90q_1wh'
      ],
      products:[
        {
          imgsrc:'http://i2.chuimg.com/75c659d3935b462f950be85a518ab27b_5184w_3456h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
          name:'茄汁虾球',
          price:38
        },
        {
          imgsrc:'http://i2.chuimg.com/d968852a87e911e6a9a10242ac110002_4608w_3456h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
          name:'葡萄干蛋糕卷',
          price:16
        },
        {
          imgsrc:'http://i2.chuimg.com/4cf46b1066a843f6b8ddd05c78db529b_1920w_1080h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
          name:'菠萝包',
          price:40
        },
        {
          imgsrc:'http://i2.chuimg.com/2da31c80bb5c466f96863e49409cd74d_1242w_1207h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
          name:'紫薯蛋糕卷',
          price:12
        },
        {
          imgsrc:'http://i2.chuimg.com/daf670cc73a911e6aae8cd5a4774d612.jpg?imageView2/2/w/660/interlace/1/q/90',
          name:'安东鸡',
          price:48
        },
        {
          imgsrc:'http://i2.chuimg.com/482e09527e1c4e0b901c8e27e57eaa2f_1080w_864h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
          name:'糖醋里脊',
          price:38
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
 .home{
   position: fixed;
   top: 0;
   left:0;
   right:0;
   height: 100%;
   overflow: scroll;
   &-title{
     text-align: center;
     font-size: 2rem;
     color: darkgoldenrod;
     margin: auto;
   }
   &-img{
     width: 100%;
     height: 200px;
   }
   &-icon{
     width: 100%;
     height: 160px;
     &-ul{
       margin-top: 10px;
     }
     &-ul>li{
       float: left;
       width: 25%;
       height: 80px;
       text-align: center;
     }
     &-ul>li>span{
       display: block;
     }
     &-ul>li>i{
       font-size: 30px;
       color: darkgoldenrod;
     }
   }
   &-hot{
     width: 100%;
     &-title{
       text-align: center;
     }
     &-ul{
       margin-top: 10px;
       margin-bottom: 55px;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       &-li{
        flex-basis: 47%;
        margin-bottom: 5px;
        height: 100%;
        text-align: center;
       }
       &-li>img{
         width: 100%;
         height: 100px;
       }
       &-li>span{
         display: block;
       }
     }
   }
 }
</style>

