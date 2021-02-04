import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 路由跳转前
router.beforeEach((to, from, next) => {
  // 设置标题
  if(to.meta&&to.meta.title){
    document.title = to.meta.title;
  }
  console.log(from);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
