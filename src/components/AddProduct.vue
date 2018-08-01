<template>
  <div id="add-product">
    <form
      id="form1"
      @submit.prevent>
      <div


        id="add-product-container"
        v-for="(item, i) in ds.form_keys">
        <div class="list-block">
          <p>{{ item }}:</p>
          <input
            :type="form_product(i)"
            v-model.lazy="ds.form_values[i]"
            class="input-field" />
        </div>
        <br>
      </div>
      <div id="btn-container">
        <button class="button button-center" @click="submit_form()">Submit</button>
        <button class="button button-center" @click="resetForm()">Reset Form</button>
      </div>
    </form>
    <div>

    </div>
  </div>
</template>

<script>
  import ds from '../data/datastore.js'
  export default {
    name: 'AddProduct',
    data() {
      return {
        ds
      }
    },
    methods: {
      form_product(i) {
        if (i > 0) {
          return 'number'
        } else {
          return 'text'
        }
      },

      submit_form() {
        ds.db.products.push({name: ds.form_values[0], carbs: ds.form_values[1],
          sugar: ds.form_values[2], fiber: ds.form_values[3],
          fat: ds.form_values[4], protein: ds.form_values[5],
          unknwn: 'unknwn_ingredients'})
          this.resetForm()
      },

      resetForm() {
        ds.form_values = []
      }
    }
  }
</script>


<style scoped>
  @import '../css/shared.css';

  #add-product {
    flex: 1;
    background: #3A506B;
    color: #FFFFFF;
    padding: 15px 10px;
  }

  #btn-container {
      display: flex !important;
      justify-content: space-between;
      width: 40%;
      margin: 0 auto;

  }
  .input-field {
    background: lightgray;
    height: 25px;
    font-size: 16px;
  }

  .list-block {
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    max-width: 60%;
    margin: 0 auto;
  }

  p {
    min-width: 140px;
  }
</style>
