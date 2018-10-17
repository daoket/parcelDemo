import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
