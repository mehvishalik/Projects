let button = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#reset");
let player1 = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
let h1 = document.querySelector("h1");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    player1 ? (btn.innerText = "X") : (btn.innerText = "O");
    player1 = !player1;
    btn.disabled = true;
    count++;
    checkWinner();
     countOfChance();
  });
});

let checkWinner = () => {
  for (let patterns of winPatterns) {
    pos1 = patterns[0];
    pos2 = patterns[1];
    pos3 = patterns[2];
    if (
      button[pos1].innerText !== "" &&
      button[pos1].innerText === button[pos2].innerText &&
      button[pos2].innerText === button[pos3].innerText
    ) {
      h1.innerText = `Player ${button[pos1].innerText} wins!`;

      reset();
    }
  }
};
let reset = () => {
  button.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    resetBtn.innerText = "Play Again";
  });
};
resetBtn.addEventListener("click", () => {
  reset();
  resetBtn.innerText = "Reset";
  h1.innerText = "TIC TAC TOE";
});
let countOfChance = ()=>{
if (count===9) {
    h1.innerText = "It's a draw!";
    reset();
} else{
   return ;
    
}
}