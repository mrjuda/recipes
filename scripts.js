
const btnSignup = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#btnSignup");
  if(name == null) {
    greeting.textContent = `Sign up`;
  } else{
    greeting.textContent = `Hello ${name}!`;
  }
}

btnSignup.addEventListener("click", greet);