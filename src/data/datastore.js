export default {
  dbshow: false,
  editshow: false,
  apshow: false,
  epshow: false,
  pmshow: false,
  weight: 100,
  form_keys: ['Product name', 'Carbs (g)', 'of which sugar(g)', 'Fiber (g)',
              'Fat (g)', 'Protein (g)'],
  form_values: ['', 0, 0, 0, 0, 0],
  selected_edit: '',
  edit_form_values: [],
  edit_instance: '',
  db_id_list: [],
  db: {
    gridColumns: ['ID', 'Carbs (%)', 'Sugar (%)', 'Fiber (%)',
    'Fat (%)', 'Protein (%)', 'Unknwn(%)', 'Actions'],
    products: [
      {name: 'Rimi piens pasterizets 2,5%', carbs: 4.8, sugar: 4.8,
    fiber: 0, fat: 2.5, protein: 3.2, unknwn: 'unknwn_ingredients'},
      {name: '"Santini" Ksylitol', carbs: 99.8, sugar: 0.2,
    fiber: 0, fat: 0, protein: 0}
    ],
    editObject: [
      {content: '', list_name: 'Product name'},
      {content: '', list_name: 'Carbs (g)'},
      {content: '', list_name: 'Sugar (g)'},
      {content: '', list_name: 'Fiber (g)'},
      {content: '', list_name: 'Fat (g)'},
      {content: '', list_name: 'Protein (g)'}
    ]}}
