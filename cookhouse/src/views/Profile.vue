<template>
  <div>
    <div class="header">
      <van-nav-bar title="我的" left-text="返回" left-arrow>
        <van-icon name='setting-o' slot='right'></van-icon>
      </van-nav-bar>
    </div>
    <div class="content">
      <van-cell-group title="分组1" class="content-group">
        <van-cell  icon="manager" is-link size='large'>
          <template slot="title">
            <span class="custom-text">个人资料</span>
          </template>
        </van-cell>
        <van-cell title="加盟分享" size='large' icon="friends-o" is-link />
        <van-cell  is-link size='large'>
          <template slot="title">
            <van-icon name='service-o' color='#FFA500'></van-icon>
            <span class="custom-text"> &nbsp;客服中心</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group title="分组2" class="content-group">
        <van-cell  is-link size='large'>
          <template slot="title">
            <van-icon name='clock-o'></van-icon>
            <span class="custom-text">浏览历史</span>
          </template>
        </van-cell>
        <van-cell is-link size='large'>
          <template slot="title">
            <van-icon name='star-o'></van-icon>
            <span class="custom-text">我的收藏</span>
          </template>
        </van-cell>
        <van-cell  is-link size='large'>
          <template slot="title">
            <van-icon name='gold-coin-o'></van-icon>
            <span class="custom-text">我的订单</span>
          </template>
        </van-cell>
        <van-cell  is-link size='large'>
          <template slot="title">
            <van-icon name='chat-o'></van-icon>
            <span class="custom-text">互助问答</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="content-group">
        <van-cell is-link size='large'>
          <template slot="title">
            <van-icon name='gem' color='#FFD700'></van-icon>
            <span class="custom-text">会员中心</span>
            <van-tag plain round type="danger" style="margin:0px 0.2rem">new</van-tag>
          </template>
        </van-cell>
        <van-cell is-link size='large'>
          <template slot="title">
            <van-icon name='setting-o'></van-icon>
            <span class="custom-text">设置</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      active: 0
    }
  }

}
</script>

<style lang="scss">
 .content{
   &-group{
     margin-bottom:0.3rem;
   }

 }
</style>