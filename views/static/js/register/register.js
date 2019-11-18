// Enable verbose mode for development. 
const verbose = true;

// Verify js is loaded. 
(verbose) ? console.log("register.js loaded") : "";

// Define DOM elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const phone = document.getElementById("phone");
const gender = document.getElementById("genderRadioWrapper");
const dateQuitSmoking = document.getElementById("dateQuitSmoking");
const costOfCigs= document.getElementById("costOfCigs");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

// variable to hold data from axios request info
let register;

// Event Listeners
submitBtn.addEventListener("click", function(e) {
  e.preventDefault;
  (verbose) ? console.log("submit button was clicked") : "";
  registerWasClicked();
})

resetBtn.addEventListener("click", function(e) {
  e.preventDefault;
  username.value = "";
  password.value = "";
  email.value = "";
  dob.value = "";
  phone.value = "";
  gender.value = "";
  dateQuitSmoking.value = "";
  costOfCigs.value = "";
  submitBtn.value = "";
  resetBtn.value = "";
});

const registerWasClicked = () => {
  (verbose) ? console.log("registerWasClicked function was ran") : "";
  axios.post('http://localhost:8080/api/register')
    .then((res) => register = res);
}


// Pending completion of backend route to register controller