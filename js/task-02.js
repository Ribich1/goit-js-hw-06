const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrLi = [];
ingredients.forEach(function (num) {
  let li = "";
  li = document.createElement("li");
li.textContent = num;
li.className = "item";
  arrLi.push(li)
});
console.log(arrLi);

const element = document.querySelector("#ingredients")
element.append(...arrLi);
