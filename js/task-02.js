const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(function (ingredient) {

  const li = document.createElement("li");
li.textContent = ingredient;
li.className = "item";
  return li;
});

const element = document.querySelector("#ingredients")
element.append(...elements);

