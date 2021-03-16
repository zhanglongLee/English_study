import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userInfo: {},
    remember: false
  },
  mutations: {
    // set
    // 设置token信息
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    // 删除token信息
    removeToken(state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    // 修改记住密码状态值
    changeRememberStatus(state, status) {
      state.remember = status
    }
  },
  actions: {
  },
  getters: {
    // get
  },
  modules: {
  }
})
