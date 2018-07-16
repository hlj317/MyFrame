<template>
    <div class="void-page-container" v-if="items && items.length">
        <!-- <itemTitle title="VIP最爱买"></itemTitle> -->
        <div class="item-container">
            <div class="goods-wrap" v-for="(item, index) in items" :key="index" @click="goDetail(item)">
                <img  class="goods-image" :src="item.img"/>
                
                <div class="goods-info">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <div class="price-group">
                        <p class="o-price">￥{{item.price}}</p>
                    </div>
                    <p class="get-btn">立即抢</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import itemTitle from './item-title.vue';
import {isBeibei} from '@fe-base/env';
import hybrid from '@fe-base/hybrid';
export default {
    props: ['items'],
    components: {
        // itemTitle,

    },
    methods: {
        goDetail(item) {
            let iid = item.iid;
            let url = 'https://m.beibei.com/n/group/detail.html?iid=' + iid;
            // if (isBeibei()) {
            //     hybrid('openURL').openURL({
            //         url,
            //     });
            // } else {
            //     window.location.href = url;
            // }
        }
    }
};
</script>
<style lang="less" scoped>
@import "~src/common/less/_variables.less";
@import "~src/common/less/mixin.less";
.icon{
    position: absolute;
    width: 60/@base;
    height: 60/@base;
    left: 0;
    top: 20/@base;
    background: url('http://h0.hucdn.com/open/201822/c7f40fd612b7c452_120x120.png') no-repeat center center / 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 16/@base;
        color: #C56435;
        line-height: 1;
        &:last-child{
            font-weight: bold;
            font-size: 24/@base;
        }
    }
}
.item-container{
    width: 750/@base;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    padding-left: 20/@base;
    box-sizing: border-box;
}
.goods-wrap{
    width: 730/@base;
    height: 272/@base;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    flex-direction: row;
    position: relative;
    .onepx();
    &:last-child{
        box-shadow: 0 none;
    }
}
.goods-image{
    display: block;
    width: 232/@base;
    height: 232/@base;
    margin: 20/@base 20/@base 20/@base 0;
    flex: 0 0 auto;
}
.goods-info{
    position: relative;
    width: 474/@base;
    box-sizing: border-box;
    padding-right: 24/@base;
    height: 272/@base;
}
.title{
    .line1();
    font-size: 28/@base;
    color: #333333;
    padding-top: 32/@base;
    font-weight: bold;
}
.desc{
    margin-top: 12/@base;
    font-size: 28/@base;
    color: #999999;
    .line1();
}
.price-group{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 40/@base;
    .o-price{
        display: inline-block;
        font-size: 36/@base;
        color: #CC815C;
        font-weight: bold;
    }
    .r-price{
        display: inline-block;
        font-size: 24/@base;
        color: #8F8F8F;
    }
}
.get-btn{
    width: 112/@base;
    height: 48/@base;
    background-image: linear-gradient(-45deg, #FF3333 0%, #FF5500 100%);
    border-radius: 100/@base;
    font-size: 24/@base;
    text-align: center;
    line-height: 48/@base;
    color: #FFFFFF;
    position: absolute;
    right: 24/@base;
    bottom: 32/@base;
}
</style>

