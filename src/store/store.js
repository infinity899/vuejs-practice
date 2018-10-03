import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  schedule: [],
  hideProgress: false,
}
export default new Vuex.Store({
  state
})