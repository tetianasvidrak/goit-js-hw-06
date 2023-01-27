const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.getElementById('ingredients')
const listItems = []


ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient
  newEl.classList.add('item')
  listItems.push(newEl)
})

ulRef.append(...listItems)


