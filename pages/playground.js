
const btnPlay = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#btnPlay");
  const playInfo = document.querySelector("#playInfo");
  if(name == null) {
    greeting.textContent = `Play me`;
    playInfo.textContent = `Time To Play Around`;
  } else{
    alert(`Hello, ${name}! Welcome to Odin's Playground!`);
    playInfo.textContent = `Current player: ${name}`;
  }
}

btnPlay.addEventListener("click", greet);