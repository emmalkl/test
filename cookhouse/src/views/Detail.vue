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
            <ul class="list">
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
      recommendItem:[
       {
          name: " 5种口味最容易挤的酥脆曲奇",
          img:
            require('@/assets/img/1.jpg'),
          price: "254",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 5种健康美味的高颜值果昔碗",
          img:
            require('@/assets/img/2.jpg'),
          price: "212",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 一次掌握4种口味网红曲奇课程",
          img:
            require('@/assets/img/3.jpg'),
          price: "187",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: " 八款无需冰淇凌机超顺滑无冰渣质感冰淇凌",
          img:
            require('@/assets/img/4.jpg'),
          price: "155",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "Q皮冰淇凌奶油流心雪媚娘",
          img:
            require('@/assets/img/5.jpg'),
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
  margin: 0.2rem 0.1rem;
  background-color: #fff;
  margin-bottom: 1rem;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 45%;
  }
  img{
    width: 2.8rem;
    height: 3.5rem;
  }
  &-like{
    float: right;
  }
}
</style>