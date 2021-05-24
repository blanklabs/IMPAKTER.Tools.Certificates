import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import VueFormulate from '@braid/vue-formulate'
import VueRouter from 'vue-router'
import store from "./store";
import VueSimpleAlert from "vue-simple-alert";
import VueCompositionAPI from '@vue/composition-api'
//import ScrollView from 'vue-scrollview'

import GoogleAuth from '@/services/external//google_oAuth.js'
const gauthOption = {
  clientId: '1034424481051-2068pl88n61ofbmnocqbdgk9fk8i9o20.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

import 'uicomponents/dist/impakter-ui-components.css'
import './assets/custom-vars.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-search-select/dist/VueSearchSelect.css'
import './assets/formulate.css'
import router from './router'

Vue.use(VueSimpleAlert);
//Vue.use(ScrollView)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueFormulate)
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
