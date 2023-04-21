let modal = document.getElementById("formModal");
let formCallerButton = document.getElementById("callerButton");
let showButton = document.getElementById("showButton");
let inputPassword = document.getElementById("inputPassword");
let inputEmail = document.getElementById("inputMail");
let emailError = document.getElementById("error")
let errorText = document.getElementById("errorText");
let mainDiv = document.getElementById("mainDiv");
const sendButtton = document.getElementById("loginButton");


formCallerButton.addEventListener("click", (event) => {
  clean();
  mainDiv.style.display = "block";
});

mainDiv.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.body.addEventListener("click", (event) => {
  if (
    event.target.nodeName != "BUTTON" &&
    event.target.id != "formModal"
  ) {
    mainDiv.style.display = "none";
  }
});

showButton.addEventListener("pointerdown", event => {
  inputPassword.type = "text";
});

showButton.addEventListener("pointerup", event => {
  inputPassword.type = "password";
});


inputEmail.addEventListener("input", (event) => {
  customValidityEmail()
});

inputPassword.addEventListener("blur", (event) => {
  customValidityPassword()
})

function customValidityEmail() {
  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity("Entered value needs to be an email address.");
  } else if (inputEmail.validity.valueMissing) {
    inputEmail.setCustomValidity("You need to enter an email address.");
  } else {
    inputEmail.setCustomValidity("");
  }
  inputEmail.reportValidity();
}

function customValidityPassword() {
  if (inputPassword.value.length < 6) {
    inputPassword.setCustomValidity("The entered password length must be more or equal than 6 characters");
  } else if (inputPassword.validity.valueMissing) {
    inputPassword.setCustomValidity("You need to enter an password.");
  } else {
    inputPassword.setCustomValidity("");
  }
  inputPassword.reportValidity();
}



sendButtton.addEventListener('click', (e) => {

  customValidityEmail()
  const formData = new FormData(form);
  console.log(`email: ${formData.get("mail")}`);
  console.log(`password: ${formData.get('Password')}`);
  e.preventDefault();
});

inputEmail.addEventListener("input", (event) => {
  if (inputEmail.validity.valid) {
    emailError.className = "errorNormal";
    errorText.textContent = "Let's start";
    emailError.style.width = "95px";
  } else {
    emailError.className = "errorDiv";
    showError();
  }
});


function showError() {
  if (inputEmail.validity.valueMissing) {
    emailError.style.width = "220px";
    errorText.textContent = "You need to enter an email address.";
  } else if (inputEmail.validity.typeMismatch) {
    emailError.style.width = "260px";
    errorText.textContent = "Entered value needs to be an email address.";
  }
}

function clean() {
  inputEmail.value = "";
  inputPassword.value = "";
  emailError.className = "errorNormal";
}