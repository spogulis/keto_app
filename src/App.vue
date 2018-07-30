<template>
  <div id="app">
    <app-title></app-title>
    <nav-buttons></nav-buttons>
    <db></db>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Helvetica Neue, Arial, sans-serif;
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
