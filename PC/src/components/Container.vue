<template>

</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #666666;
    line-height: 60px;
  }

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content a{
    margin-left:5px;
    color:#333;
    text-decoration:none;
  }
  .grid-content a:hover{
    text-decoration:underline;
  }
  .grid-content.selected{
    color:#409EFF;
    font-size: 18px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        
      }
    }
  };
</script>