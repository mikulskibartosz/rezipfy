import Vue from 'vue'
import App from './App.vue'
import About from './About.vue'
import Privacy from './Privacy.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter, BootstrapVue)

library.add(faTwitter, faInstagram, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
  { path: '', component: App },
  { path: '/', component: App },
  { path: '/about', component: About },
  { path: '/privacy', component: Privacy },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

new Vue({
  router,
  template: `
  <div>
    <router-view class="view"></router-view>
  </div>
`
}).$mount('#app')
