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
axios.jsonp = (url, data) => {
  if (!url) { throw new Error('url is necessary') }
  const callback = 'CALLBACK' + Math.random().toString().substr(9, 18)
  const JSONP = document.createElement('script')
  JSONP.setAttribute('type', 'text/javascript')

  const headEle = document.getElementsByTagName('head')[0]

  let ret = ''
  if (data) {
    if (typeof data === 'string') { ret = '&' + data } else if (typeof data === 'object') {
      for (const key in data) { ret += '&' + key + '=' + encodeURIComponent(data[key]) }
    }
    ret += '&_time=' + Date.now()
  }
  JSONP.src = `${url}?callback=${callback}${ret}`
  return new Promise((resolve, reject) => {
    window[callback] = r => {
      resolve(r)
      headEle.removeChild(JSONP)
      delete window[callback]
    }
    headEle.appendChild(JSONP)
  })
}

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
