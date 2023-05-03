function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divEl = document.getElementById("boxes");

const arrEl = document.getElementById("controls");
const inputEl = arrEl.firstElementChild;
const destroy = arrEl.lastElementChild;
const create = destroy.previousElementSibling;

destroy.addEventListener('click', destroyBoxes);
create.addEventListener("click", createBoxes)

function createBoxes(amount) {
  let size = 30; 
  amount = inputEl.value;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1){
    
    let colorGen = getRandomHexColor();
    const divNew = document.createElement("div");
    divNew.style.width = `${size}px`;
    divNew.style.height = `${size}px`;
    divNew.style.backgroundColor = colorGen;
    fragment.appendChild(divNew);
    size += 10;
  };
  divEl.append(fragment);
};
function destroyBoxes() {
  divEl.innerHTML = '';  
};


