<template>
    <section class="banner">
        <!-- todo -->
        <div class="btn-rule" @click="showrule"></div>
    </section>
</template>

<style lang="less">
    @import "../assets/less/common.less";
    .banner {
        position: relative;
        width: 16rem;
        height: 200/@base;
        background: url('//h0.hucdn.com/open/201825/39bab27e549a5e7c_750x200.png') no-repeat;
        background-size: 100% 100%;
        .btn-rule {
            position: absolute;
            width: 100/@base;
            height: 66/@base;
            top: 0;
            right: 10/@base;
        }
    }
</style>

<script>
export default {
    props: ['showrule']
}
</script>
