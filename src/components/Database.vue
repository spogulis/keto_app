<template>
  <div id="db">
    <table>
      <thead>
        <tr>
          <th
            v-for="prAttr in ds.db.gridColumns"
          >{{ prAttr }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :weight="weight"
          v-for="product in ds.db.products">
          <td> {{ product.name }}  </td>
          <td> {{ carbs(product) }} </td>
          <td> {{ sugar(product) }} </td>
          <td> {{ fiber(product) }} </td>
          <td> {{ fat(product) }} </td>
          <td> {{ protein(product) }} </td>
          <td> {{ unknwn(product)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ds from '../data/datastore.js'

  export default {
    name: 'Database',
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
      }
    }
  }
</script>

<style scoped>
  #db {
    flex: 1 1 70%;
    background: lightgrey;
    padding: 5px 5px;
  }

  table {
    padding: 10px 0;
    font-size: 18px;
  }

  th {
    border-right: 1px solid white;
    border-bottom: 2px solid white;
    padding: 3px 3px;
    width: 10%;
    min-width: 10%;
  }

  th:last-of-type {
    border-right: none;
  }

  td {
    border-right: 1px solid white;
    width: 10%;
    border-bottom: 1px solid white;
  }

  td:last-of-type {
    border-right: none;
  }

  .db-hidden {
    display: none !important;
  }

</style>
