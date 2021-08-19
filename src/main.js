import Vue from 'vue'
import App from './App.vue'

import router from "./router.js"

Vue.config.productionTip = false

// const routes = [
//   { path: '/home', component: Home },
//   { path: '/about', component: About }
// ]

// const router = new VueRouter({
//   routes // routes: routes 的简写
// })


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
