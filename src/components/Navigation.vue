<template>
  <div id="nav-div">
    <button class="button"> {{ planBtn }}</button>
    <button class="button" @click="toggleAdd()"> {{ addBtn }}</button>
    <button class="button"> {{ editBtn }}</button>
    <button class="button" @click="toggleDb()"> {{ dbBtn }}</button>
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
    },

    methods: {

      toggleDb() {
        this.$emit('dbemit')
      },

      toggleAdd() {
        this.$emit('apemit')
      }

      }
    }

</script>

<style scoped>
  @import '../css/shared.css';
  #nav-div {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-around;
    background: #1C2541;
  }

</style>
