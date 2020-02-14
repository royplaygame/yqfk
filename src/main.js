// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/'
import routerMap from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
require('./http')
import 'element-ui/lib/theme-chalk/index.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'bootstrap/dist/css/bootstrap.css'
import echarts from "echarts";
import 'echarts/map/js/province/shanxi.js'; //引入广东地图

//开启debug模式
Vue.config.debug = true
Vue.use(echarts)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.component(CollapseTransition.name, CollapseTransition)

// 并且配置路由规则
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerMap
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
