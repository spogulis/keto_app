<template>
  <div id="nav-div">
    <button> {{ planBtn }}</button>
    <button> {{ addBtn }}</button>
    <button> {{ editBtn }}</button>
    <button> {{ dbBtn }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        dbBtn: 'Open database',
        addBtn: 'Add product',
        planBtn: 'Plan meal',
        editBtn: 'Edit product'
      }
    }
  }
</script>

<style scoped>
  #nav-div {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-around;

  }
  button {
    color: white;
    background: darkgrey;
    font-weight: bold;
    font-size: 20px;
    padding: 20px 15px;
    margin: 5px 0;
  }
</style>
