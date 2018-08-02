<template>
  <div id="edit-product">
    <form
      id="form1"
      @submit.prevent>
      <div
        id="edit-product-container"
        v-for="(item, i) in ds.db.editObject">
        <div class="list-block">
          <p>{{ item.list_name }}:</p>
          <input
            :type="form_product(i)"
            step="0.1"
            min="0"
            v-model.lazy="ds.db.editObject[i].content"
            class="input-field" />
        </div>
        <br>
      </div>
      <div id="serving">
        Serving size:
        <input v-model.number="ds.weight" type="number" min="0" class="input-field"></input>
      </div>
      <div id="btn-container">
        <button class="button button-center" @click="edit_product()">Edit record</button>
        <button class="button button-center" @click="resetForm()">Reset Form</button>
        <button class="button button-center" @click="ds.editshow=false">Cancel</button>
      </div>
    </form>
    <div>

    </div>
  </div>
</template>

<script>
  import ds from '../data/datastore.js'
  export default {
    name: 'EditProduct',
    data() {
      return {
        ds,
        weight: ds.weight,
        servingValue: ''
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

      edit_product() {
        let i = ds.selected_edit - 1
        let name = ds.db.editObject[0].content
        let carbs = ds.db.editObject[1].content
        let sugar = ds.db.editObject[2].content
        let fiber = ds.db.editObject[3].content
        let fat = ds.db.editObject[4].content
        let protein = ds.db.editObject[5].content

        ds.db.products[i].name = name
        ds.db.products[i].carbs = carbs
        ds.db.products[i].sugar = sugar
        ds.db.products[i].fiber = fiber
        ds.db.products[i].fat = fat
        ds.db.products[i].protein = protein

        ds.editshow = false
      },

      calculateGrams(foodstuff) {
        var coef = parseFloat(ds.weight / 100)
        return foodstuff * coef
      },

      resetForm() {
        ds.weight = 100
        ds.db.editObject[0].content = 0
        ds.db.editObject[1].content = 0
        ds.db.editObject[2].content = 0
        ds.db.editObject[3].content = 0
        ds.db.editObject[4].content = 0
        ds.db.editObject[5].content = 0
      }
    }
  }
</script>


<style scoped>
  @import '../css/shared.css';

  #edit-product {
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

  #serving {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
