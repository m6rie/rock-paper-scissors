const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const computerSelection = computerPlay();
const playerSelection = playerInput.value;
const resetButton = document.querySelector('.resetButton');
const result = document.querySelector('.result');
const playerResult = document.querySelector('.playerResult');
const computerResult = document.querySelector('.computerResult');

let gamePlay = playerSubmit.addEventListener("click", playRound => {
  const playerSelection = playerInput.value[0].toUpperCase() + playerInput.value.slice(1).toLowerCase()
  const option = ['Rock', 'Paper', 'Scissors']
  const computerR = computerSelection.reset;
  winnerPick;

  if(!option.includes(playerSelection)) {
    result.textContent = "Please enter a valid option"
} else if(playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
} else if(playerSelection === winnerPick[computerSelection]) {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
} else {
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
}
    // playerResult.textContent =`You played: ${playerSelection}`;
    computerResult.textContent = `The computer played: ${computerSelection}`;
});

function computerPlay() {
  // TRY ADDING A LOOP OF (let i = 0; i = 1; i++)
  for (let i = 0; i = 1; i++){
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}}

resetButton.addEventListener("click", resetGame => {
  playerInput.value = '';
  console.log(playerInput.value);
  result.textContent = '';
  playerResult.textContent = '';
  computerResult.textContent = '';

  // computerSelection.disabled = true;
  // console.log(computerSelection);

  // computerSelection.value = '';
  // const computerSelection = computerPlay();
  // const cumputerR = computerPlay.reset;
  // console.log(cumputerR);
  // console.log(computerSelection);
});
// CREATE A resetButton button and a resetGame function
// the resetB will trigger an eventListener w/ function resetG

// function game() {
  // gameRound = playRound += 1
//   for (gameRound = 1; gameRound < 5; gameRound++){
//     playRound(playerSelection, computerSelection) += 1;
//   }
// }
// console.log(game())
