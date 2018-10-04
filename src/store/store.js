import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  schedule: [],
  dashboardFlag: false,
}
export default new Vuex.Store({
  state
})