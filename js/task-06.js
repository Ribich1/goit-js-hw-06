const inputEl = document.getElementById("validation-input");

const lengthInput = Number(inputEl.dataset.length);




inputEl.addEventListener('blur', isInputRight);

function isInputRight(event) {
    inputEl.classList.remove("valid", "invalid");
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === lengthInput) {
        inputEl.classList.add("valid");
       
    } else
       inputEl.classList.add("invalid");  
};


