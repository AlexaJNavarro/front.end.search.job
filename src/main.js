import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'boxicons'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
  
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuesax)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
