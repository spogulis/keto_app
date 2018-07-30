// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Title from './Components/Title.vue'
import Navigation from './Components/Navigation.vue'
import AddProduct from './Components/AddProduct.vue'
import Database from './Components/Database.vue'

Vue.config.productionTip = false

Vue.component('app-title', Title)
Vue.component('nav-buttons', Navigation)
Vue.component('add-product', AddProduct)
Vue.component('db', Database)

/* eslint-disable no-new */
export default new Vue({
  title: 'App',
  el: '#app',
  components: { App },
  template: '<App/>'
})
