let gameSequence = [];
let userSequence = [];

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let starting = false;
let level = 0;
const buttons = ["btn1", "btn2", "btn3", "btn4"];
console.log(buttons);
document.addEventListener("keypress", () => {
  if (!starting) {
    h1.innerText = "Game Started";
    h2.innerText = `Leavel:${level + 1}`;
    starting = true;
   nextSequence();
  }
});

function nextSequence() {
  userSequence = []; 
  level++;
  h2.textContent = `Level: ${level}`;
  
  const randomIndex = Math.floor(Math.random() * 4);
  const randomButton = buttons[randomIndex];
  gameSequence.push(randomButton);
  
  flashButton(randomButton); 
}

function flashButton( buttonId) {
  let button = document.getElementById(buttonId) 
 button.classList.add("active")
  setTimeout(() => {
    button.classList.remove("active")
  }, 300);
}