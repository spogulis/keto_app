<template>
  <div id="app">
    <app-title></app-title>
    <nav-buttons
      v-on:apemit="toggleAp()"
      v-on:dbemit="toggleDb()">
    </nav-buttons>
    <add-product v-show="ds.apshow"></add-product>
    <db v-if="ds.dbshow"></db>
  </div>
</template>

<script>
Vue.component('app-title', Title)
Vue.component('nav-buttons', Navigation)
Vue.component('add-product', AddProduct)
Vue.component('db', Database)

import Vue from 'vue'
import Title from './Components/Title.vue'
import Navigation from './Components/Navigation.vue'
import AddProduct from './Components/AddProduct.vue'
import Database from './Components/Database.vue'
import ds from './data/datastore.js'

export default {
  name: 'App',
  components: { Title, Navigation, AddProduct, Database },
  data() {
    return {
      ds
    }
  },

  methods: {
    toggleDb() {
      ds.dbshow = !ds.dbshow
      if (ds.editshow == true) {
        ds.editshow = false
      }
    },
    toggleAp() {
      ds.apshow = !ds.apshow
      if (ds.editshow == true) {
        ds.editshow = false
      }
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue, Arial, sans-serif;
    background: #5BC0BE;
  }
  #app > * {
    flex: 1 100%;
  }
  #app {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    height: 100vh;
  }
</style>
