<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style scoped lang="less">
    @import "./assets/less/common.less";
    .to-link-img {
        width: 750/@b;
        height: 200/@b;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>

<script>
export default {
  name: 'App'
}
</script>
