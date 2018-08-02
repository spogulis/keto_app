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
      title: 'Ketomac'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/shared.css';
  #title {
    flex: 0 1 auto;
  }
  h2 {
    font-family: Adam-bold;
    color: #FFFFFF;
    background-color: #AB8476;
    padding: 5px 10px;
    text-align: center;
    margin: 0;
  }
</style>
