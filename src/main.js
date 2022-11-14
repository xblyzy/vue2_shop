import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router/index'
import TypeNav from './components/TypeNav'
// 仓库
import store from './store/index'
// 引入mock
import './mock/mockServe'

Vue.config.productionTip = false;

// 注册全局组件
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  router, // 注册路由器
  store,
}).$mount('#app')
