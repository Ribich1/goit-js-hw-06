const form = document.querySelector(".login-form");


form.addEventListener('submit',onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = {};
    formData.forEach((value, name) => {
        
        if (value === '' || name ==='') {
            alert("заполни все поля!");
            return;
        } else
            formObject[name] = value;
    })
    console.log(formObject);
    
    event.currentTarget.reset();
}
