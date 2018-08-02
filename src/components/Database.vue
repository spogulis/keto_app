<template>
  <div id="db">
    <edit-record v-if="ds.editshow" :editemit="closeEdit()"></edit-record>
    <table>
      <thead>
        <tr>
          <th colspan="8">Product name</th>
        </tr>
        <tr>
          <th
            v-for="(prAttr, i) in ds.db.gridColumns"
            v-bind:id="'col' + i"
          >{{ prAttr }}</th>
        </tr>
      </thead>
      <tbody>
        <template :weight="weight" v-for="(product, i) in ds.db.products">
          <tr >
            <td class="id-col" rowspan="2">{{ i + 1 }}</td>
            <td class="title-row" colspan="7">{{ product.name }}</td>
          </tr>

          <tr>
            <td> {{ carbs(product) }} </td>
            <td> {{ sugar(product) }} </td>
            <td> {{ fiber(product) }} </td>
            <td> {{ fat(product) }} </td>
            <td> {{ protein(product) }} </td>
            <td> {{ unknwn(product)}}</td>
            <td>
              <img @click="deleteRecord(i)"
              id="del-image"
              src="../assets/delete.png">
              </img>
              <img @click="editRecord(i + 1)"
              id="edit-image"
              src="../assets/edit.png">
              </img>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ds from '../data/datastore.js'
  import EditRecord from './EditRecord.vue'

  export default {
    name: 'Database',
    components: {
      'edit-record': EditRecord
    },

    data() {
      return {
        ds,
        weight: ds.weight
      }
    },

    methods: {
      unknwn(cp) {
        let unknwn_ingredients = (100 - cp.carbs
         - cp.fiber - cp.fat - cp.protein) / ds.weight * 100
        return unknwn_ingredients.toFixed(2)
        },

      carbs(cp) {
        let carbs = cp.carbs / ds.weight * 100
        return carbs.toFixed(2)
      },

      sugar(cp) {
        let sugar = cp.sugar / ds.weight * 100
        return sugar.toFixed(2)
      },

      fiber(cp) {
        let fiber = cp.fiber / ds.weight * 100
        return fiber.toFixed(2)
      },

      fat(cp) {
        let fat = cp.fat / ds.weight * 100
        return fat.toFixed(2)
      },

      protein(cp) {
        let protein = cp.protein / ds.weight * 100
        return protein.toFixed(2)
      },

      deleteRecord(record_id) {
        ds.db.products.splice(record_id, 1)
      },

      editRecord(current_record) {
        if (ds.apshow == true) {
          ds.apshow = false
          ds.editshow = true //show edit component
        } else {ds.editshow = true}
        ds.selected_edit = current_record
        ds.db.editObject[0].content = ds.db.products[current_record - 1].name
        ds.db.editObject[1].content = ds.db.products[current_record - 1].carbs
        ds.db.editObject[2].content = ds.db.products[current_record - 1].sugar
        ds.db.editObject[3].content = ds.db.products[current_record - 1].fiber
        ds.db.editObject[4].content = ds.db.products[current_record - 1].fat
        ds.db.editObject[5].content = ds.db.products[current_record - 1].protein
      },

      closeEdit() {
        this.editShow = false
      }
    }
  }
</script>

<style scoped>
  @import '../css/shared.css';

  #db {
    flex: 1 1 100%;
    background: lightgrey;
    padding: 0;
  }

  table {
    width: 100%;
  }

  #col0 {
    width: 5px;
    padding: 10px 10px;
  }
  .id-col {
    padding: 10px 10px;
  }

  .title-row {
    font-family: Adam;
    border-bottom: 1px solid white;
    font-size: 16px;
    text-align: center;
    color: #FFFF;
    background: #3A506B;
    padding: 6px 0 13px 0;
  }

  th {
    /* border-right: 1px solid white; */
    /* border-bottom: 2px solid white; */
    padding: 3px 3px;
    color: white;
    background: #1C2541;
  }

  th:last-of-type {
    border-right: none;
  }

  td {
    border-right: 1px solid white;
    border-bottom: 1px solid white;
  }

  td:last-of-type {
    border-right: none;
  }

  #del-image {
    width: 30px;
  }

  #edit-image {
    width: 30px;
  }
</style>
