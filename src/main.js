import Vue from 'vue'
import App from './App.vue'

import vb from 'vue-babylonjs';
Vue.use(vb);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
