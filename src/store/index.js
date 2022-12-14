import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
const state ={
  isAuthenticated: false,  // 是否授权认证
  suer: {},   // 用户信息存储,
  token:'',
  list_id:'',
  sickNess1:{},
  index: 0,
  idx: 0,
  input_name: '', // 详情页搜索
  hot_name:'',  // 气泡图name
  stateurl:'',  //  保存路径
  cdssInfo:'', // cdss问诊数据
  is_pom:false,
  headerNavItems:[], // 头部导航
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
  }
})
