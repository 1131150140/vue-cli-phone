// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
Vue.use(ElementUI)
import VueBus from './vue-bus/vue-bus'
Vue.use(VueBus)
Vue.config.productionTip = false
import store from './store'
import 'lib-flexible/flexible'
import 'babel-polyfill'
import FastClick from 'fastclick'

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
