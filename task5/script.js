let form = document.getElementById("form");
let firstName = document.getElementById("f-name");
let surname = document.getElementById("surname");
let email = document.getElementById("m-e");
let gender = document.getElementById("gender");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("c-pass");

let message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let firstNameVal = firstName.value;
  let surnameVal = surname.value;
  let emailVal = email.value;
  let genderVal = gender.value;
  let passwordVal = password.value;
  let confirmPassVal = confirmPassword.value;

  if (passwordVal !== confirmPassVal) {
    message.innerHTML = 
      `<div id="card-error">
        <h2>Password validation failed</h2>
        </div>`;
      return;}

    message.innerHTML = 
      `<div id="card">
       <h2>Welcome, ${firstNameVal} ${surnameVal}!</h2>
       <p>Email: ${emailVal}</p>
       <p>Gender: ${genderVal}</p>
       </div>`;
});
