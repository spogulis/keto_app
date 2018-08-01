export default {
  dbshow: false,
  apshow: false,
  epshow: false,
  pmshow: false,
  weight: 100,
  form_keys: ['Product name', 'Carbs (g)', 'of which sugar(g)', 'Fiber (g)',
              'Fat (g)', 'Protein (g)'],
  form_values: [],
  db: {
    gridColumns: ['Product name', 'Carbs (%)', 'Sugar (%)', 'Fiber (%)',
    'Fat (%)', 'Protein (%)', 'Unknwn(%)'],
    products: [
      {name: 'Rimi piens pasterizets 2,5%', carbs: 4.8, sugar: 4.8,
    fiber: 0, fat: 2.5, protein: 3.2, unknwn: 'unknwn_ingredients'},
      {name: 'Santini Ksylitol', carbs: 99.8, sugar: 0.2,
    fiber: 0, fat: 0, protein: 0}
  ]}
}
