<template>
  <div id="db">
    <table>
      <thead>
        <tr>
          <th
            v-for="prAttr in gridColumns"
          >{{ prAttr }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td> {{ product.name }} </td>
          <td> {{ product.carbs }} </td>
          <td> {{ product.sugar}} </td>
          <td> {{ product.fiber }} </td>
          <td> {{ product.fat }} </td>
          <td> {{ product.protein }} </td>
          <td> {{ unknwn(product) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Database',
    data() {
      return {
        gridColumns: ['Product name', 'Carbs (%)', 'Sugar (%)', 'Fiber (%)',
        'Fat (%)', 'Protein (%)', 'Unknwn(%)'],
        products: [
          {name: 'Rimi piens pasterizets 2,5%', carbs: '4,8', sugar: '4,8',
        fiber: '0', fat: '2,5', protein: '3,2', unknwn: 'unknwn_ingredients'},
          {name: 'Santini Ksylitol', carbs: '99,8', sugar: '0,2',
        fiber: '0', fat: '0', protein: '0'}
        ]
      }
    },

    computed: {
      c_carbs(cp, weight) {
        let c_carbs = parseFloat(cp.carbs) / weight * 100
        return c_carbs
      }
    },

    methods: {
      unknwn(cp) {
        let unknwn_ingredients = 100 - parseFloat(cp.carbs)
         - parseFloat(cp.fiber) - parseFloat(cp.fat) - parseFloat(cp.protein)

        return unknwn_ingredients
        }
      }
    }

</script>

<style scoped>
  #db {
    flex: 1 1 70%;
    background: darkgrey;
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


</style>
