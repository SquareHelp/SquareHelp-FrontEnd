// Enable verbose mode for development.
const verbose = true;

// Verify js page loaded. 
(verbose) ? console.log("login.js loaded") : "";

// Define DOM elements
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Var to hold data from axios request info
let login;

// Event Listeners
submitBtn.addEventListener("click", function(e) {
  e.preventDefault;
  (verbose) ? console.log("submit button was clicked") : "";
  submitWasClicked();
});

resetBtn.addEventListener("click", function(e) {
  e.preventDefault;
  username.value = "";
  password.value = "";
})

const submitWasClicked = () => {
  (verbose) ? console.log("submitWasClicked function was ran") : "";
  // axios.get('/js/login/login-sampleResponse.json')
  axios.get('http://localhost:8080/api/login')
  .then((res) => login = res);
};

// pending completion of backend route to login controller.