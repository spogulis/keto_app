<template>
  <div id="app">
    <app-title></app-title>
    <nav-buttons
      v-on:apemit="toggleAp()"
      v-on:dbemit="toggleDb()"
      v-on:planemit="togglePlan()">
    </nav-buttons>
    <video id="video-container" v-if="ds.videoshow" width="100%" loop autoplay>
      <source src="./assets/coffee.webm" type="video/webm" />
    </video>
    <add-product v-show="ds.apshow"></add-product>
    <plan v-show="ds.planshow"></plan>
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
import Navigation from './components/Navigation.vue'
import AddProduct from './components/AddProduct.vue'
import Database from './components/Database.vue'
import Plan from './components/plan.vue'
import ds from './data/datastore.js'


export default {
  name: 'App',
  components: { Plan, Title, Navigation, AddProduct, Database },
  data() {
    return {
      ds
    }
  },

  methods: {
    togglePlan() {
      ds.planshow = !ds.planshow
      if (ds.editshow == true || ds.apshow == true || ds.videoshow == true ||
          ds.dbshow == true) {
        ds.editshow = false,
        ds.apshow = false,
        ds.videoshow = false
        ds.dbshow = false
        ds.planshow = true
      } else {
        ds.videoshow = true
      }
    },

    toggleDb() {
      ds.dbshow = !ds.dbshow
      if (ds.editshow == true || ds.planshow == true || ds.apshow == true) {
        ds.editshow = false
        ds.planshow = false
        ds.apshow = false
        console.log('Plan show should close')
      }
      if (ds.dbshow == false) {
        ds.videoshow = true
      } else {
        ds.videoshow = false
      }

    },
    toggleAp() {
      ds.apshow = !ds.apshow
      if (ds.editshow == true || ds.planshow == true || ds.dbshow == true) {
        ds.editshow = false,
        ds.planshow = false,
        ds.dbshow = false
      }

      if (ds.apshow == false) {
        ds.videoshow = true
      } else {
        ds.videoshow = false
      }
    }
  }
}
</script>

<style>

  #video-container {
      background: #3A506B;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Adam;
    background: #3A506B;
  }
  #app > * {
    flex: 1 100%;
  }
  #app {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    height: 100vh;
    background: #3A506B;
  }
</style>
