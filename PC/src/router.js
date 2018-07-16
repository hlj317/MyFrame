import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";   
import First from './component/firstcomponent.vue'
import Second from './component/secondcomponent.vue'
import Third from './component/thirdcomponent.vue'
import Fourth from './component/fourthcomponent.vue'
import Modal from './component/modal.vue'
import Markdown from './component/markdown.vue'
import Table from './component/table.vue'

//开启debug模式(开启错误提示)
Vue.config.debug = true;
Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: Second
    },
    {
      path: '/third',
      component: Third
    },
    {
      path: '/fourth',
      component: Fourth
    },
    {
      path: '/modal',
      component: Modal
    },
    {
      path: '/markdown',
      component: Markdown
    },
    {
      path: '/table',
      component: Table
    }

  ]
})












