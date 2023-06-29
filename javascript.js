

let validEmail = false;
let emailWidget = document.querySelector("#emailInput");
let confirmEmailWidget = document.querySelector("#confirmEmailInput");
let confirmEmailLabel = document.querySelector("#confirmEmailLabel");
confirmEmailWidget.addEventListener("input", checkEmails);


function checkEmails() {
    let email = emailWidget.value;
    let confirmEmail = confirmEmailWidget.value;
    validEmail = email.includes(confirmEmail);
    if (!validEmail) {
        confirmEmailLabel.innerHTML = "confirm email <span id='emailMatchMessage'>***emails must match!***</span>";
    }
    else {
        confirmEmailLabel.innerHTML = "confirm email"
    }
}

let formWidget = document.querySelector("#infoForm");
formWidget.addEventListener("submit", checkForm);

function checkForm(event) {
    if (!validEmail) {
        event.preventDefault();
    }
}


