<template>
  <div id="nav-div">
    <button class="button" @click="togglePlan()"> {{ planBtn }}</button>
    <button class="button"> {{ recipesBtn }}</button>
    <button class="button" @click="toggleAdd()"> {{ addBtn }}</button>
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
        recipesBtn: 'Recipes'
      }
    },

    methods: {
      togglePlan() {
          this.$emit('planemit')
      },

      toggleDb() {
        this.$emit('dbemit'),
        this.$emit('editemit')
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
    background: #3A506B;
  }

  .button {
    font-family: Adam;
  }

</style>
