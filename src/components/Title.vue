<template>
  <div id="title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      title: 'Keto app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #title {
    flex: 0 1 auto;
  }
  h2 {
    background-color: darkgrey;
    padding: 5px 10px;
    text-align: center;
    margin: 0;
  }
</style>
