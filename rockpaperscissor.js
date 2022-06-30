const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const playerSelection = playerInput.value;
const resetButton = document.querySelector('.resetButton');
const result = document.querySelector('.result');
const playerResult = document.querySelector('.playerResult');
const computerResult = document.querySelector('#computerResult');

let gamePlay = playerSubmit.addEventListener("click", playRound => {
  const playerSelection = playerInput.value[0].toUpperCase() + playerInput.value.slice(1).toLowerCase()
  const option = ['Rock', 'Paper', 'Scissors']
  winnerPick;

  let computerPlay = option[Math.floor(Math.random() * option.length)];

  if(!option.includes(playerSelection)) {
    result.textContent = "Please enter a valid option"
} else if(playerSelection === computerPlay) {
    result.textContent = "It's a tie!";
} else if(playerSelection === winnerPick[computerPlay]) {
    result.textContent = `You win! ${playerSelection} beats ${computerPlay}`;
} else {
    result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`;
}

  computerResult.textContent = `The computer played: ${computerPlay}`;
    // playerResult.textContent =`You played: ${playerSelection}`;
});

resetButton.addEventListener("click", resetGame => {
  playerInput.value = '';
  result.textContent = '';
  computerResult.textContent = '';
  // playerResult.textContent = '';
});
