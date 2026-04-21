// console.log("Hello, JudaLabs 2!");
// let firstName = "John";
// let lastName = "Doe";
// console.log(firstName, lastName);

// let age = 11;

// console.log("1st age:", age);

// age = 54;

// console.log("New age: ", age);

// const pi = 3.14;

// // pi = 10;

// console.log("Pi = ", pi);

// op1 = (3 + 2) - 76 * (1 + 1);
// console.log("(3 + 2) - 76 * (1 + 1) = ", op1);

// console.log(23 + 97);

// console.log(32+75+29+78+4+9);

// console.log((4 + 6 + 9) / 77);

// let a = 10;

// console.log(a);

// a = 12;

// console.log(a);

// const max = 57;

// const actual = max - 13;

// const percentage = actual / max;

// console.log(percentage);

const btnSignup = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#btnSignup");
  if(name == null) {
    greeting.textContent = `Sign up`;
  }
  else{
    greeting.textContent = `Hello ${name}!`;
  }
}

btnSignup.addEventListener("click", greet);