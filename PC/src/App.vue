<template>
  <el-container id="app" class="el-container">
    <el-aside class="el-aside">
      <el-menu :default-openeds="['1']" :default-active="1-1" unique-opened=true >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Basic</template>
            <el-menu-item :index="1-1">Layout布局</el-menu-item>
            <el-menu-item index="1-2">Container布局容器</el-menu-item>
            <el-menu-item index="1-3">Icon图标</el-menu-item>
            <el-menu-item index="1-4">Button按钮</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Form</template>
            <el-menu-item index="2-1">Radio单选框</el-menu-item>
            <el-menu-item index="2-2">Checkbox多选框</el-menu-item>
            <el-menu-item index="2-3">Input输入框</el-menu-item>
            <el-menu-item index="2-4">Slider滑块</el-menu-item>
            <el-menu-item index="2-5">Rate评分</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Data</template>
            <el-menu-item index="3-1">Table表格</el-menu-item>
            <el-menu-item index="3-2">Tree树形控件</el-menu-item>
            <el-menu-item index="3-3">Pagination分页</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-tickets"></i>Notice</template>
            <el-menu-item index="4-1">Alert警告</el-menu-item>
            <el-menu-item index="4-2">Loading加载</el-menu-item>
            <el-menu-item index="4-3">Message消息提示</el-menu-item>
            <el-menu-item index="4-4">Notification通知</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-date"></i>Navigation</template>
            <el-menu-item index="5-1">NavMenu导航菜单</el-menu-item>
            <el-menu-item index="5-2">Tabs标签页</el-menu-item>
            <el-menu-item index="5-3">Breadcrumb面包屑</el-menu-item>
            <el-menu-item index="5-4">Steps步骤条</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-view"></i>Others</template>
            <el-menu-item index="6-1">Dialog对话框</el-menu-item>
            <el-menu-item index="6-2">Popover弹出框</el-menu-item>
            <el-menu-item index="6-3">Card卡片</el-menu-item>
            <el-menu-item index="6-4">Carousel走马灯</el-menu-item>
            <el-menu-item index="6-5">Collapse折叠面板</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-row>
          <el-col :span="6"><div class="grid-content" v-bind:class="{selected:selectedNav === 'effect'}" ><i class="el-icon-info"></i><a href="#" v-on:click="navSwitch('effect')">效果</a></div></el-col>
          <el-col :span="6"><div class="grid-content" v-bind:class="{selected:selectedNav === 'code'}" ><i class="el-icon-info"></i><a href="#" v-on:click="navSwitch('code')">代码</a></div></el-col>
          <el-col :span="6"><div class="grid-content" v-bind:class="{selected:selectedNav === 'api'}" ><i class="el-icon-info"></i><a href="#" v-on:click="navSwitch('api')">文档</a></div></el-col>
          <el-col :span="6"><div class="grid-content" v-bind:class="{selected:selectedNav === 'remark'}" ><i class="el-icon-info"></i><a href="#" v-on:click="navSwitch('remark')">备注</a></div></el-col>
        </el-row>
      </el-header>
      
      <el-main>

          <el-row v-if="type === 'effect'">
            <layoutComponent></layoutComponent>
          </el-row>
          <el-row v-else-if="type === 'code'">
            {{html}}
          </el-row>
          <el-row v-else-if="type === 'api'">
            暂无
          </el-row>
          <el-row v-else>
            暂无
          </el-row>
        
      </el-main>

    </el-container>
    
  </el-container>

</template>

<script>
import layoutComponent from './components/layout-component.vue'
export default {
    data() {
      return {
        type:'effect',
        html:'<el-row :gutter="20"><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col><el-col :span="6"><div class="grid-content bg-purple"></div></el-col></el-row>',
        selectedNav : 'effect'
      }
    },
    methods:{
        navSwitch:function(nav){
           this.type = nav;
           this.selected = nav;
           this.selectedNav = nav;
        }
    },
    components: {layoutComponent}
}
</script>

<style>
  .el-container{
     height: 550px; 
     border: 1px solid #eee;
  }
  .el-aside{
     width:200px;
     background:#ffffff;
  }
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
