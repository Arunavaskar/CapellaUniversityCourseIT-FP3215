function validate(){

  var userName = document.getElementById("userName");
  var password = document.getElementById("password");
  var passwordVerify = document.getElementById("passwordVerify");
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var phoneNumber = document.getElementById('phoneNumber')

  //checking for blank or space inputTYPE
  var count = 0;

  //userName//
  var regex = /^[A-Za-z0-9]+$/
  //Validate TextBox value against the Regex.
  var isValid = regex.test(userName.value);
  if (userName.value.trim() == "") {
    userName.style.border = "solid 2px red";
    document.getElementById("userNameLabel").style.visibility = "visible";
    count++;
  }
  else if (!isValid) {
    userName.style.border = "solid 2px red";
    document.getElementById("userNameLabel").style.visibility = "visible";
    document.getElementById("userNameLabel").innerHTML = "must only contain letters and numbers";
    count++;
  }
  else {
    userName.style.border = "none";
    document.getElementById("userNameLabel").style.visibility = "hidden";
  }

  //password
  if (password.value.trim() == "") {
    // alert("No blank values allowed");
    password.style.border = "solid 2px red";
    document.getElementById("passwordLabel").style.visibility = "visible";
    count++;
  }
  else if (password.value.length < 8) {
    password.style.border = "solid 2px red";
    document.getElementById("passwordLabel").style.visibility = "visible";
    document.getElementById("passwordLabel").innerHTML= "minimum of 8 characters";
    count++;
  }
  else {
    password.style.border = "none";
    document.getElementById("passwordLabel").style.visibility = "hidden";
  }

  //passwordVerify
  if (passwordVerify.value.trim() == "") {
    // alert("No blank values allowed");
    passwordVerify.style.border = "solid 2px red";
    document.getElementById("passwordVerifyLabel").style.visibility = "visible";
    count++;
  }
  else if (passwordVerify.value.length < 8 || passwordVerify.value != password.value) {
    passwordVerify.style.border = "solid 2px red";
    document.getElementById("passwordVerifyLabel").style.visibility = "visible";
    document.getElementById("passwordVerifyLabel").innerHTML = "minimum of 8 characters, must match password"
    count++;
  }
  else {
    passwordVerify.style.border = "none";
    document.getElementById("passwordVerifyLabel").style.visibility = "hidden";
  }

  //firstName
  var regex2 = /^[A-Za-z]+$/
  //Validate TextBox value against the Regex.
  var isValid2 = regex2.test(firstName.value.trim());
  if (firstName.value.trim() == "") {
    // alert("No blank values allowed");
    firstName.style.border = "solid 2px red";
    document.getElementById("firstNameLabel").style.visibility = "visible";
    count++;
  }
  else if (!isValid2) {
    firstName.style.border = "solid 2px red";
    document.getElementById("firstNameLabel").style.visibility = "visible";
    document.getElementById("firstNameLabel").innerHTML = "must be letters only"
    count++;
  }
  else {
    firstName.style.border = "none";
    document.getElementById("firstNameLabel").style.visibility = "hidden";
  }

  //lastName
  var regex3 = /^[A-Za-z]+$/
  //Validate TextBox value against the Regex.
  var isValid3 = regex3.test(lastName.value.trim());
  if (lastName.value.trim() == "") {
    // alert("No blank values allowed");
    lastName.style.border = "solid 2px red";
    document.getElementById("lastNameLabel").style.visibility = "visible";
    count++;
  }
  else if (!isValid3) {
    lastName.style.border = "solid 2px red";
    document.getElementById("lastNameLabel").style.visibility = "visible";
    document.getElementById("lastNameLabel").innerHTML = "must be letters only"
    count++;
  }
  else {
    lastName.style.border = "none";
    document.getElementById("lastNameLabel").style.visibility = "hidden";
  }

  //email
  var regex4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //Validate TextBox value against the Regex.
  var isValid4 = regex4.test(email.value);
  if (email.value.trim() == "") {
    // alert("No blank values allowed");
    email.style.border = "solid 2px red";
    document.getElementById("emailLabel").style.visibility = "visible";
    count++;
  }
  else if (!isValid4) {
    email.style.border = "solid 2px red";
    document.getElementById("emailLabel").style.visibility = "visible";
    document.getElementById("emailLabel").innerHTML = "xxx@xxx.xxx format must be followed for valid email";
    count++;
  }
  else {
    email.style.border = "none";
    document.getElementById("emailLabel").style.visibility = "hidden";
  }

  //phoneNumber
  var regex5 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  //Validate TextBox value against the Regex.
  var isValid5 = regex5.test(phoneNumber.value);
  if (phoneNumber.value.trim() == "") {
    // alert("No blank values allowed");
    phoneNumber.style.border = "solid 2px red";
    document.getElementById("phoneNumberLabel").style.visibility = "visible";
    count++;
  }
  else if (!isValid5) {
    phoneNumber.style.border = "solid 2px red";
    document.getElementById("phoneNumberLabel").style.visibility = "visible";
    document.getElementById("phoneNumberLabel").innerHTML = "must use (xxx) xxx-xxxx format for phone number"
    count++;
  }
  else {
    phoneNumber.style.border = "none";
    document.getElementById("phoneNumberLabel").style.visibility = "hidden";
  }

  //focusing based on error in fields
//////////////////////////
  if (userName.value.trim() == "") {
    userName.focus();
  }
  else if (!isValid) {
    userName.focus();
  }
  else if (password.value.trim() == "") {
    password.focus();
  }
  else if (password.value.length < 8) {
    password.focus();
  }
  else if (passwordVerify.value.trim() == "") {
    passwordVerify.focus();
  }
  else if (passwordVerify.value.length < 8 || passwordVerify.value != password.value) {
    passwordVerify.focus();
  }
  else if (firstName.value.trim() == "") {
firstName.focus();
  }
  else if (!isValid2) {
firstName.focus();
  }
  else if (lastName.value.trim() == "") {
lastName.focus();
  }
  else if (!isValid3) {
lastName.focus();
  }
  else if (email.value.trim() == "") {
    email.focus();
  }
  else if (!isValid4) {
    email.focus();
  }
  else if (phoneNumber.value.trim() == "") {
    phoneNumber.focus();
  }
  else if (!isValid5) {
    phoneNumber.focus();
  }
//////////////////////////
  if (count > 0) {
    return false;
  }
  else {
    return true;
  }
}
