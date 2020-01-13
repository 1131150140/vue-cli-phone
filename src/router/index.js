import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component:resolve => require(['@/pages/login/Login'],resolve)
    // },
    // {
    //   path: '/manage',
    //   component:resolve => require(['@/common/leftNav'],resolve),
    //   children: [{
    //     path: '',
    //     component: resolve => require(['@/common/Home'],resolve),
    //     meta: [],
    //   },
    //   {
    //     path: '/orderList',
    //     component:resolve => require(['@/pages/order/OrderList'],resolve)
    //   }
    // ]
    // }
     {
      path: '/',
      component:resolve => require(['@/common/leftNav'],resolve),
      children: [{
        path: '',
        component: resolve => require(['@/common/Home'],resolve),
        meta: [],
      }]
    }

  ]
})
