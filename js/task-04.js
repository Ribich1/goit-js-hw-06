const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');



const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

function onDecrementBtn() {
    counter.decrement();
    counterValue.textContent = counter.value;
};
function onIncrementBtn() {
    counter.increment();
    counterValue.textContent = counter.value;
};

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);




