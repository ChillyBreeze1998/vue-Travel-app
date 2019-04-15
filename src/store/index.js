import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '石家庄'
  },
  // 要改变公用数据要传入actions里，然后 actions 调用mutations来改变
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  // 公用的 city 等于你点击的city
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
