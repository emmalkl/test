<template>
  <div class="kit">
    <div class="header">
      <van-nav-bar
      title="课堂"
      left-text="返回"
      left-arrow @click-left="onClickLeft"/>
    </div>

    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div class="recommend">
            <ul>
              <li class="recommend-item" v-for="(item,index) in recommendItem" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
                <span>{{item.price}}人观看</span>
                <span class="recommend-like"><van-icon name='like' color='#FF0000'></van-icon>收藏</span>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="小零食">小零食</van-tab>
        <van-tab title="饼干">饼干</van-tab>
        <van-tab title="法甜">法甜</van-tab>
        <van-tab title="饮品">饮品</van-tab>
        <van-tab title="糖和巧克力">糖和巧克力</van-tab>
      </van-tabs>
    </div>
  </div>
  
</template>

<script>
export default {
  
  data() {
    return {
      active:0,
      recommendItem:[
       {
          name: " 5种口味最容易挤的酥脆曲奇",
          img:
            'https://wx2.sinaimg.cn/mw690/0066fNULly1g2f1mxt02nj30u0190q5a.jpg',
          price: "254",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 5种健康美味的高颜值果昔碗",
          img:'https://wx3.sinaimg.cn/mw690/0066fNULly1g2f1my2lexj30u0190qax.jpg',
          price: "212",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 一次掌握4种口味网红曲奇课程",
          img:
            'https://wx4.sinaimg.cn/mw690/0066fNULly1g2f1myfq7aj30u0190ade.jpg',
          price: "187",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 八款无需冰淇凌机超顺滑无冰渣质感冰淇凌",
          img:
            'https://wx2.sinaimg.cn/mw690/0066fNULly1g2f1mys6okj30u0190q7z.jpg',
          price: "155",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "Q皮冰淇凌奶油流心雪媚娘",
          img:
            'https://wx3.sinaimg.cn/mw690/0066fNULly1g2f1mz0j9uj30u019075o.jpg',
          price: "102",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "手工夹心蛋卷",
          img:
            "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "280",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 十款意式奶茶",
          img:
            "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
          price: "238",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "多口味双层内陷酥皮泡芙",
          img:
            "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
          price: "238",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
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

<style lang="scss">
 .content{
   &-group{
     margin-bottom:0.3rem;
   }
 }

 .recommend{
  text-align: left;
  margin: 0.2rem 0.1rem;
  background-color: #fff;
  margin-bottom: 1rem;
  font-size: 14px;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 35%;
    margin-bottom: 0.5rem;
    p{
      margin:0.2rem 0;
    }
  }
  img{
    width: 8.5rem;
    height: 10rem;
  }
  &-like{
    float: right;
  }
}
</style>