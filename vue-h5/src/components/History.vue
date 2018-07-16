<template>
    <div class="history" v-if="history && history.length">
        <p class="title">我的猜价历史</p>
        
        <div class="list" v-for="(item, index) in history" :key="index">
            <div class="item-img">
                <img :src="item.img">
            </div>
            <div class="item-detail">
                <p class="title">力士薰衣草沐浴乳1350mL，超大组合装</p>
                <p class="guess-result">猜 <span class="strong">{{item.price}}</span> 元<span class="result">{{item.status}}</span></p>
                <p class="time">{{item.time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'history',
        'minPrice',
        'maxPrice',
    ]
}
</script>


<style lang="less">
    @import "../assets/less/common.less";
    .history {
        padding: 40/@base 12/@base 100/@base 12/@base;
        text-align: center;
        box-sizing: border-box;
        .title {
            margin-top: 36/@b;
            margin-bottom: 36/@b;
            font-size: 40/@base;
            line-height: 1;
            color: #ff4c69;
        }
        .list {
            display: box;
            padding: 0 40/@base;
            margin-bottom: 20/@base;
            width: 100%;
            height: 158/@base;
            background: url('//h0.hucdn.com/open/201824/451a9442d49e2a5b_746x158.png') no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            .item-img {
                display: inline-block;
                flex: 1;
                width: 100/@base;
                height: 100/@base;
                border-radius: 600/@base;
                border: 6/@base solid #ff587b;
                overflow: hidden;
                img {
                    display: block;
                    width: 94/@base;
                    height: 94/@base;
                }
            }
            .item-detail {
                flex: 1;
                display: inline-block;
                padding: 30/@base 12/@base 0;
                width: 510/@base;
                height: 100%;
                text-align: left;
                box-sizing: border-box;
                .title {
                    margin: 0;
                    font-size: 26/@base;
                    line-height: 1;
                    color: #581522;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .guess-result {
                    margin: 16/@base 0;
                    font-size: 26/@base;
                    line-height: 1;
                    .strong {
                        margin: 0 2/@base;
                        font-weight: 700;
                        color: #ff2943;
                    }
                    .result {
                        margin-left: 40/@base;
                        color: #ff2943;
                    }
                }
                .time {
                    font-size: 20/@base;
                    line-height: 1;
                    color: #ccc;
                }
            }
        }
    }
</style>

