<template>
    <section class="ad">
        <div v-for="(item, index) in items" :key="index">
            <a :class="item.class" :href="item.target" :title="item.title">
                <img :src="item.img" />
            </a>
        </div>
    </section>
</template>

<style lang="less">
    @import "../assets/less/common.less";
    .ad {
        position: relative;
        width: 750/@b;
        height: 445/@b;
        .second-kill{
            position: absolute;
            left:0;
            top:0;
            width:324/@b;
            height: 410/@b;
        }
        .nine-mail{
            position: absolute;
            left:324/@b;
            top:0;
            width:213/@b;
            height:205/@b;
        }
        .hot-list{
            position: absolute;
            left:537/@b;
            top:0;
            width:213/@b;
            height:205/@b;
        }
        .new-pro{
            position: absolute;
            left:324/@b;
            top:205/@b;
            width:213/@b;
            height:205/@b;
        }
        .brand-clean{
            position: absolute;
            left:537/@b;
            top:205/@b;
            width:213/@b;
            height:205/@b;
        }
        img{
            display:block;
            width:100%;
            height:100%;
            border:none;
            margin:0;
            padding:0;
        }
    }
</style>

<script>
import axios from 'axios'
export default {
    data: () => ({

    }),
    props: [
        'items'
    ]
}
</script>