const refs = {
    input: document.getElementById("name-input"),
    nameLabel: document.getElementById("name-output"),
};

refs.input.addEventListener('input',onInputChange);


function onInputChange(event) {
    if (event.currentTarget.value === "") {
      refs.nameLabel.textContent = "Anonymous";
    } else

       refs.nameLabel.textContent = event.currentTarget.value; 
};
