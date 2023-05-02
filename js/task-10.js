function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divEl = document.getElementById("boxes");


function createBoxes(amount) {
  let q = 30; 
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1){
    
    let colorGen = getRandomHexColor();
    const divNew = document.createElement("div");
    divNew.style.width = `${q}px`;
    divNew.style.height = `${q}px`;
    divNew.style.backgroundColor = colorGen;
    fragment.appendChild(divNew);
    q += 10;
  };
  console.log(fragment);
};
function destroyBoxes() {
  
};

createBoxes(3);
