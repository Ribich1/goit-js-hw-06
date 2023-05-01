const listCatWithId = document.getElementById("categories");
const listWithClass = document.querySelectorAll(".item");
  console.log(`Number of categories: ${listWithClass.length}`);


listWithClass.forEach(function (num) {
    console.log(`Category: ${num.firstElementChild.textContent}`);
    console.log(`Elements: ${num.lastElementChild.children.length}`);
});

// const firstLiEl = listWithClass.firstElementChild;
// console.dir(listWithClass[0].textContent);



