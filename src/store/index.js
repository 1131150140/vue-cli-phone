import Vue from 'vue'  //引入vue
import Vuex from 'vuex' //引入vuex
//引入你的module模块
import cart from './modules/cart'
import products from './modules/products'


Vue.use(Vuex)
export default new Vuex.Store({
//这里可以存放和处理一些公共的信息,例如token,用户信息,初始化信息等.
  state: {
    token: '123',
    userInfo: {
      userId: 0,
      userName: '',
      roleId: 0,
      roleName: ''
  	},
    initialInfo: {
      menuList: [],
      functionList: [],
      projectNodeList: []
    } 
  },
  mutations: {
    setToken (state, token) {
      state.token = token
  	},
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
  	} 
  },
 //这里填写我们引入的module模块
  modules: {
	// cart,
    // products
  }
})

