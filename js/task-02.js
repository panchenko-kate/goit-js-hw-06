const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((element) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = element;
  console.log(ingredientsItem);

  const itemEl = document.querySelector('#ingredients');
  itemEl.appendChild(ingredientsItem);
});
