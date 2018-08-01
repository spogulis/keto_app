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
          <td> {{ carbs(product, weight) }} </td>
          <td> {{ sugar(product, weight) }} </td>
          <td> {{ fiber(product, weight) }} </td>
          <td> {{ fat(product, weight) }} </td>
          <td> {{ protein(product, weight) }} </td>
          <td> {{ unknwn(product, weight)}}</td>
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
      unknwn(cp, weight) {
        let unknwn_ingredients = (100 - cp.carbs
         - cp.fiber - cp.fat - cp.protein) / weight * 100
        return unknwn_ingredients.toFixed(2)
        },

      carbs(cp, weight) {
        let carbs = cp.carbs / weight * 100
        return carbs.toFixed(2)
      },

      sugar(cp, weight) {
        let sugar = cp.sugar / weight * 100
        return sugar.toFixed(2)
      },

      fiber(cp, weight) {
        let fiber = cp.fiber / weight * 100
        return fiber.toFixed(2)
      },

      fat(cp, weight) {
        let fat = cp.fat / weight * 100
        return fat.toFixed(2)
      },

      protein(cp, weight) {
        let protein = cp.protein / weight * 100
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
