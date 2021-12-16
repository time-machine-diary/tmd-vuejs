import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import bootstrap from './bootstrap'
import routerOptions from './router-options'
import store from './store'

bootstrap()

export const router: VueRouter = new VueRouter(routerOptions)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  render: (h) => h(App),
  router,
  store: store(),
}).$mount('#app')
