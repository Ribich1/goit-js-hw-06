function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const divEl = document.querySelector(".widget");


btnEl.addEventListener('click', onChangeColor);

console.log(getRandomHexColor());


function onChangeColor(event) {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  divEl.style.backgroundColor = color;
}
