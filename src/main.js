// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import router from './router'
import { store } from './store'

// Components
import components from '@/helpers/components.config.js'
components.forEach(register)
function register (component) {
  Vue.component(component.name, component)
}

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>'
})
