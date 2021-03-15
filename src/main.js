import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'md5'
import qs from 'qs'
import axios from 'axios'
Vue.prototype.md5 = md5
Vue.prototype.$qs = qs

Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

// 路由跳转前
router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.prototype.$scrollToTop = function() {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
}

const cubic = value => Math.pow(value, 3)
const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2
// 滚动至页面顶部，使用 Element-ui 回到顶部 组件中的算法
Vue.prototype.scrollToTop = function() {
  const el = document.documentElement
  const beginTime = Date.now()
  const beginValue = el.scrollTop
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      rAF(frameFunc)
    } else {
      el.scrollTop = 0
    }
  }
  rAF(frameFunc)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
