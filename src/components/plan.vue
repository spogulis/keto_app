<template>
  <div id="plan-view-container">
    <h2>Plan your meal</h2>
    <div id="plan-view">
      <div id="added-products">
        <div id="ingredients">

          <div
          v-if="status == true"
          v-for="(status, i) in ds.plan.selected_products">
            <div class="selected-product">{{ ds.db.products[i].name }}</div>
            <br>
            <table>
              <thead>
                <th>Carbs</th>
                <th>Sugar</th>
                <th>Fiber</th>
                <th>Fat</th>
                <th>Protein</th>
              </thead>
              <tbody>
                <tr>
                  <td class="carb-class"> {{carbs(i)}} g</td>
                  <td class="sugar-class">{{sugar(i)}} g</td>
                  <td class="fiber-class">{{fiber(i)}} g</td>
                  <td class="fat-class">{{fat(i)}} g</td>
                  <td class="protein-class">{{protein(i)}} g</td>
                </tr>
                <tr>
                  <td class="weight-title" colspan="3">Weight: </td>
                  <td class="weight-display"
                  colspan="2"
                  >{{ ds.plan.weight_slider[i] }} g</td>
                </tr>
                <tr>
                  <td colspan="5">
                    <input class="slider"
                    @change="macroLists(i)"
                    type="range"
                    v-model="ds.plan.weight_slider[i]"
                    min="1"
                    max="1000">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <br>
        <h2>Macros</h2>
        <div id="macros">
          <h1 class="macro-title">FAT: <span id="fat">{{ macroFat()}}</span>%</h1>
          <h1 class="macro-title">FIBER: <span id="fiber">{{macroFiber()}}</span>%</h1>
          <h1 class="macro-title">PROTEIN: <span id="protein">{{macroProtein()}}</span>%</h1>
          <h1 class="macro-title">CARBS: <span id="carbs">{{macroCarbs()}}</span>%</h1>
          <h1 class="macro-title">SUGAR: <span id="sugar">{{macroSugar()}}</span>g</h1>
        </div>
      </div>

      <div id="product-list">
        <div class="product" v-for="(product, i) in ds.db.products">
          <input type="checkbox"
          v-model="ds.plan.selected_products[i]"
          :id="'checkbox' + i" />
          {{ product.name }}
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import ds from '../data/datastore.js'

  export default {
    name: 'Plan',
    data() {
      return {
        ds,
        products: [],
        initialweight: 100,
        weight_slider: []
      }
    },

    created() {
        ds.plan.products = ds.db.products,
        ds.plan.products2 = ds.plan.products
    },



    methods: {
      macroLists(current) {
        let fc = document.querySelectorAll(".fat-class")
        let cc = document.querySelectorAll(".carb-class")
        let sc = document.querySelectorAll(".sugar-class")
        let fic = document.querySelectorAll(".fiber-class")
        let pc = document.querySelectorAll(".protein-class")
        ds.plan.fatlist = []
        ds.plan.sugarlist = []
        ds.plan.carblist = []
        ds.plan.fiberlist = []
        ds.plan.proteinlist = []

        fc.forEach(function(current) {
          if (ds.plan.fatlist.length < ds.plan.selected_products.length){

            ds.plan.fatlist.push(current.innerText)
          } else if (ds.plan.fatlist.length > ds.plan.selected_products.length) {
            ds.plan.fatlist = []
          }

        }),

        cc.forEach(function(current) {
          if (ds.plan.carblist.length < ds.plan.selected_products.length){

            ds.plan.carblist.push(current.innerText)
          } else if (ds.plan.carblist.length > ds.plan.selected_products.length) {
            ds.plan.carblist = []
          }

        }),

        sc.forEach(function(current) {
          if (ds.plan.sugarlist.length < ds.plan.selected_products.length){

            ds.plan.sugarlist.push(current.innerText)
          } else if (ds.plan.sugarlist.length > ds.plan.selected_products.length) {
            ds.plan.sugarlist = []
          }

        }),

        fic.forEach(function(current) {
          if (ds.plan.fiberlist.length < ds.plan.selected_products.length){

            ds.plan.fiberlist.push(current.innerText)
          } else if (ds.plan.fiberlist.length > ds.plan.selected_products.length) {
            ds.plan.fiberlist = []
          }

        }),

        pc.forEach(function(current) {
          if (ds.plan.proteinlist.length < ds.plan.selected_products.length){

            ds.plan.proteinlist.push(current.innerText)
          } else if (ds.plan.proteinlist.length > ds.plan.selected_products.length) {
            ds.plan.proteinlist = []
          }

        })

      },

      macroFat() {
          let total = 0
          for (let i = 0; i < ds.plan.fatlist.length; i++) {
            ds.plan.fatlist[i] = parseFloat(ds.plan.fatlist[i])
            total += ds.plan.fatlist[i]
          }
          ds.plan.tot_fat = total.toFixed(1)
          let sum = parseFloat(ds.plan.tot_fat) + parseFloat(ds.plan.tot_protein)
          + parseFloat(ds.plan.tot_carbs) + parseFloat(ds.plan.tot_fiber)
          total = ds.plan.tot_fat / sum * 100
          // Fat coloring
          if (ds.planshow && total > 0) {
            let fat = document.getElementById("fat")
            if (total >= 80) {
              fat.classList.add('green')
              fat.classList.remove('orange')
            } else if (total > 60) {
              fat.classList.add('orange')
              fat.classList.remove('red')
              fat.classList.remove('green')
            } else if (total <=60) {
              fat.classList.add('red')
              fat.classList.remove('green')
              fat.classList.remove('orange')
            }
          }
          return total.toFixed(1)
      },

      macroCarbs() {
          let total = 0
          for (let i = 0; i < ds.plan.carblist.length; i++) {
            ds.plan.carblist[i] = parseFloat(ds.plan.carblist[i])
            total += ds.plan.carblist[i]
          }
          ds.plan.tot_carbs = total.toFixed(1)
          let sum = parseFloat(ds.plan.tot_fat) + parseFloat(ds.plan.tot_protein)
          + parseFloat(ds.plan.tot_carbs) + parseFloat(ds.plan.tot_fiber)
          total = ds.plan.tot_carbs / sum * 100
          // Carb coloring
          if (ds.planshow && total > 0) {
            let carbs = document.getElementById("carbs")
            if (total <= 5) {
              carbs.classList.add('green')
              carbs.classList.remove('red')
              carbs.classList.remove('orange')
            } else if (total < 20) {
              carbs.classList.add('orange')
              carbs.classList.remove('green')
              carbs.classList.remove('red')
            } else if (total >= 20) {
              carbs.classList.add('red')
              carbs.classList.remove('green')
              carbs.classList.remove('orange')
            }
          }
          return total.toFixed(1)
      },

      macroSugar() {
          let total = 0
          for (let i = 0; i < ds.plan.sugarlist.length; i++) {
            ds.plan.sugarlist[i] = parseFloat(ds.plan.sugarlist[i])
            total += ds.plan.sugarlist[i]
          }
          // Sugar coloring
          if (ds.planshow && total > 0) {
            let sugar = document.getElementById("sugar")
            if (total < 20) {
              sugar.classList.add('green')
              sugar.classList.remove('red')
              sugar.classList.remove('orange')
            } else if (total < 30) {
              sugar.classList.add('orange')
              sugar.classList.remove('green')
              sugar.classList.remove('red')
            } else if (total >= 30) {
              sugar.classList.add('red')
              sugar.classList.remove('green')
              sugar.classList.remove('orange')
            }
          }
          return total.toFixed(1)
      },

      macroFiber() {
          let total = 0
          for (let i = 0; i < ds.plan.fiberlist.length; i++) {
            ds.plan.fiberlist[i] = parseFloat(ds.plan.fiberlist[i])
            total += ds.plan.fiberlist[i]
          }
          ds.plan.tot_fiber = total
          let sum = parseFloat(ds.plan.tot_fat) + parseFloat(ds.plan.tot_protein)
          + parseFloat(ds.plan.tot_carbs) + parseFloat(ds.plan.tot_fiber)
          total = ds.plan.tot_fiber / sum * 100
          // Fiber coloring
          if (ds.planshow && total > 0) {
            let fiber = document.getElementById("fiber")
            let fiber_n = parseFloat(document.getElementById("fiber").innerText)
            if (total > 15) {
              fiber.classList.add('green')
              fiber.classList.remove('red')
              fiber.classList.remove('orange')
            } else if (total > 10) {
              fiber.classList.add('orange')
              fiber.classList.remove('green')
              fiber.classList.remove('red')
            } else if (total <= 10) {
                fiber.classList.remove('green')
                fiber.classList.remove('orange')
                fiber.classList.add('red')
              }


            // if (fiber_n > 10) {
            // }
          }
          return total.toFixed(1)
      },

      macroProtein() {
          let total = 0
          for (let i = 0; i < ds.plan.proteinlist.length; i++) {
            ds.plan.proteinlist[i] = parseFloat(ds.plan.proteinlist[i])
            total += ds.plan.proteinlist[i]
          }
          ds.plan.tot_protein = total.toFixed(1)
          let sum = parseFloat(ds.plan.tot_fat) + parseFloat(ds.plan.tot_protein)
          + parseFloat(ds.plan.tot_carbs) + parseFloat(ds.plan.tot_fiber)
          total = ds.plan.tot_protein / sum * 100
          // Protein coloring
          // Sugar coloring
          if (ds.planshow && total > 0) {
            let protein = document.getElementById("protein")
            if (total < 10) {
              protein.classList.add('green')
              protein.classList.remove('red')
              protein.classList.remove('orange')
            } else if (total < 15) {
              protein.classList.add('orange')
              protein.classList.remove('green')
              protein.classList.remove('red')
            } else if (total >= 20) {
              protein.classList.add('red')
              protein.classList.remove('green')
              protein.classList.remove('orange')
            }
          }
          return total.toFixed(1)
      },

      carbs(i) {
        let slider = ds.plan.weight_slider[i] / 100
        let carbs = ds.plan.products[i].carbs * slider
        return carbs.toFixed(1)
      },

      sugar(i) {
        let slider = ds.plan.weight_slider[i] / 100
        let sugar = ds.plan.products[i].sugar * slider
        return sugar.toFixed(1)
      },

      fiber(i) {
        let slider = ds.plan.weight_slider[i] / 100
        let fiber = ds.plan.products[i].fiber * slider
        return fiber.toFixed(1)
      },

      fat(i) {
        let slider = ds.plan.weight_slider[i] / 100
        let fat = ds.plan.products[i].fat * slider
        return fat.toFixed(1)
      },

      protein(i) {
        let slider = ds.plan.weight_slider[i] / 100
        let protein = ds.plan.products[i].protein * slider
        return protein.toFixed(1)
      }

    }
  }
</script>

<style scoped>
  @import '../css/shared.css';
  #plan-view-container {
    font-family: adam;
    color: #FFFFFF;
  }

  #plan-view {
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: center;
  }

  #added-products {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px 10px;
  }

  #ingredients {
    width: 65%;
    margin: 0 auto;
  }
  #product-list {
    /* width: 40%; */
    color: white;
    height: 85%;
  }

  .product {
    margin: 10px auto;
    padding-bottom: 3px;
    width: 70%;
  }

  .selected-product {
    margin-top: 15px;
    color: #AF714F;
    font-size: 20px;
  }

  .weight-title {
      font-size: 20px;
      padding: 10px 0 10px 0;
      color: #AF714F;
  }

  .weight-display {
    font-size: 30px;
  }

  .slider {
    width: 100%;

  }
  thead > th {
    border-top: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    padding: 10px 10px;
  }

  thead > th:last-of-type {
    border-right: 0;
  }

  tr > td {
    color: #C69989;
    text-align: center;
  }

  #macros {
    border-top: 1px solid #FFFFFF;
    margin: 0 50px 50px 50px;
    display: flex;
    flex-wrap: wrap;
  }

  .macro-title {
    margin: 10px 30px 0 0;
  }

  .red {
    color: red;
  }

  .green {
    color: green;
  }

  .orange {
    color: orange;
  }


</style>
