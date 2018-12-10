import Vue from 'vue'
import App from './App.vue'
import router from './router'

import coms from "./components";

Vue.config.productionTip = false

Vue.use(coms);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
