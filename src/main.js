import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
import installElement from './plugins/element/installElement.js'

Vue.config.productionTip = false
Vue.use(installElement)
Vue.use(GAuth, {clientId: '768834812579-rq7d2r3ne7am7imjnajenu670ounoi01.apps.googleusercontent.com', scope: 'profile email'})

new Vue({
  render: h => h(App),
}).$mount('#app')
