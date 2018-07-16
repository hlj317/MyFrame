<template>
    <section class="" v-if="items && items.length">
        <div class="award-list-title">实物中奖名单</div>
        <div class="award-list-container">
            <div class="award-list J_award-list slide-up">
                <div class="award-item" v-for="(item, index) in items" :key="index">
                    <img :src="item.avatar" alt="">
                    <p class="name">{{item.nick_name}}</p>
                    <p class="desc"><em>免费领取</em> {{item.desc}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="less">
   @import "../assets/less/common.less";

    @keyframes slideUp {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-3320/@b);
        }
    }
    .slide-up {
        animation: slideUp 100s 0s linear infinite;
    }

    .award-list-container {
        width: 650/@b;
        margin: 0 auto;
        padding: 8/@b 0;
        margin-bottom: 48/@b;
        height: 250/@b;
        overflow: hidden;
    }
    .award-list-title {
        font-size: 40/@b;
        color: #ff4c69;
        text-align: center;
        padding: 32/@b 0;
    }
    .award-list {
        width: 100%;
    }
    .award-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 30/@b;
        width: 100%;
        height: 60/@b;
        border-radius: 30/@b;
        background: #f3e3fd;
        color: #333;

        img {
            width: 60/@b;
            height: 60/@b;
            border-radius: 50%;
        }
        .name {
            margin: 0 18/@b;
            width: 158/@b;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .desc {

            em {
                color : #ff4c69;
                font-weight: normal;
            }
        }

    }
</style>

<script>

export default {
    data: () => ({
        price: '',
        isani: false,
        aitems: [],
    }),
    props: [
        'items'
    ],
}
</script>
