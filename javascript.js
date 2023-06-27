

let validEmail = false;
let emailWidget = document.querySelector("#emailInput");
let confirmEmailWidget = document.querySelector("#confirmEmailInput");
confirmEmailWidget.addEventListener("input", checkEmails);


function checkEmails() {
    let email = emailWidget.value;
    let confirmEmail = confirmEmailWidget.value;
    validEmail = email === confirmEmail;
}

let formWidget = document.querySelector("#infoForm");
formWidget.addEventListener("submit", checkForm);

function checkForm(event) {
    if (!validEmail) {
        event.preventDefault();
    }
}


