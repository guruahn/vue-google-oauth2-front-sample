import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
//import GAuth from './plugins/gAuth'
import installElement from './plugins/element/installElement.js'

Vue.config.productionTip = false
Vue.use(installElement)
Vue.use(GAuth, {
  clientId: process.env.VUE_APP_GAUTH_CLIENT_ID, scope: 'email', prompt: 'consent', fetch_basic_profile: false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
