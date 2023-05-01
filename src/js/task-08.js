const form = document.querySelector(".login-form");


form.addEventListener('submit',onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        
        if (value === '') {
            const alert = console.log("заполни все поля!");
            return alert;
        } else
            console.log(`${name}: ${value}`);
    })
    

}
