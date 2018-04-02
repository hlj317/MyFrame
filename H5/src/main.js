import Vue from 'vue'
import App from './App';
import VueRouter from 'vue-router'
import routes from './router/router'    
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,   //默认hash模式，设置成history模式，url改变时会重新加载页面
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {    //影响路由跳转，滚动的位置
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})

/* eslint-disable no-new */
window.myapp = new Vue({
  el: '#app',
  store,
  router,
  components: { App }
})







