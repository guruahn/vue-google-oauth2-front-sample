import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
//import GAuth from './plugins/gAuth'
import installElement from './plugins/element/installElement.js'

Vue.config.productionTip = false
Vue.use(installElement)

Vue.use(GAuth, {
  clientId: '768834812579-007e5802er7gj3c93p8qa9568h8bj3na.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
