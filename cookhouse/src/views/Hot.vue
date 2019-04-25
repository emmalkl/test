<template>
    <div class="container">
        <van-list class="container-list" v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync='error' error-text='请求失败，请重新将加载' @load="onLoad">
            <van-cell v-for="(item,index) in List" :key="index" class="container-cell">
                <img :src="item.src" alt="" class="container-cell-img">
                <span class="container-cell-span">{{item.name}}</span>
                <van-button plain hairline type="danger" class="container-cell-button">
                        +关注
                </van-button>
                <video width="100%" height="200px" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                </video>
                <div class="container-cell-icon">
                    <ul>
                        <li><van-icon name="share" class="container-cell-icon-i"/>转发</li>
                        <li><van-icon name="chat-o" class="container-cell-icon-i" />评论</li>
                        <li><van-icon name="thumb-circle-o" class="container-cell-icon-i" />点赞</li>
                    </ul>
            </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                loading:false,
                finished:false,
                error:false,
                List:[
                    {
                        src:'http://i1.chuimg.com/47e74fcfba274f698d52d89def115228_534w_534h.jpg@2o_50sh_1pr_1l_60w_60h_1c_1e_90q_1wh',
                        name: '明夕何夕',
                        video:'http://www.iqiyi.com/v_19rrgxkgfo.html',
                    },
                    {
                        src:'http://i2.chuimg.com/7a1b49395ed34b70a5afbcc985abec79_1080w_1080h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                        name:'泡.沫.',
                        video:'http://www.iqiyi.com/w_19s8ey0n01.html',
                    },
                    {
                        src:'http://i1.chuimg.com/d27ba836d2164328aee118966f151278_1080w_1080h.jpg@2o_50sh_1pr_1l_60w_60h_1c_1e_90q_1wh',
                        name:'我有一瞬间会发光',
                        video:'http://www.iqiyi.com/w_19s5v4w0j9.html',
                    },
                    {
                        src:'http://i2.chuimg.com/bf8100ffbe3341938c3704b5c1018602_160w_160h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                        name:'申小宝儿 ',
                        video:'http://www.iqiyi.com/v_19rrifwhox.html',
                    },
                    {
                        src:'http://i2.chuimg.com/a7287dc4faea4a999560637f049642ac_1080w_1080h.jpg?imageView2/1/w/60/h/60/interlace/1/q/90',
                        name:'亲爱的果宝宝 ',
                        video:'http://www.iqiyi.com/v_19rrf9on7k.html',
                    },
                ]
            }
        },
        methods:{
            onLoad(){
                //异步数据更新
                new Promise((resolve,reject)=>{
                     setTimeout(()=>{
                    //加载状态结束
                    this.loading=false;
                    //数据全部加载完成
                    if(this.list.length>=40){
                        this.finished = true;
                    }
                },500);
                }).then(()=>{
                    
                }).catch(()=>{
                    this.error = true;
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.container{
    background-color: rgb(224, 223, 223);
    &-cell{
        position: relative;
        margin-bottom: 0.5rem;
        &-span{
            margin-left: 0.5rem;
            position:absolute;
            top:1rem;

        }
        &-img{
        border-radius: 50%;
        width:3rem;
        height: 3rem;
        }
        &-button{
        position: absolute;
        width: 4rem;
        height:2rem;
        right:0.5rem;
        top:0.3rem;
        text-align: center;
        line-height: 2rem;
        font-size: 10px;
        }
        &-icon{
        font-size: 10px;
        height: 16%;
        &-i{
            font-size: 20px!important;
            display: inline-block;
        }
        ul{
            display: flex;
            flex: 1;
            justify-content: space-between;
        }
        ul li{
            width: 22%;
            margin: 0 2px;
            float: left;
            text-align: center;
            line-height: 23px;
            justify-content: middle;
        }
    }
    }
    
}
</style>