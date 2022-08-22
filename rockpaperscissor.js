document.addEventListener('DOMContentLoaded', () => {
  const playerSubmit = document.querySelector('.playerSubmit');
  const playerInput = document.querySelector("#playerInput");
  const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
  const playerSelection = playerInput.value;
  const resetButton = document.querySelector(".resetButton");
  const result = document.querySelector('.result');
  const computerResult = document.querySelector('#computerResult');
  const option = ['Rock', 'Paper', 'Scissors'];
  let scores = document.getElementById('scores');
  let userCount = 0;
  let computerCount = 0;

  // PLAY A GAME
  function gamePlay() {
    const playerSelection = playerInput.value[0].toUpperCase() + playerInput.value.slice(1).toLowerCase();
    winnerPick;
    userCount === 0;
    computerCount === 0;
    let computerPlay = option[Math.floor(Math.random() * option.length)];

    if(userCount != 5 && computerCount != 5) {
      if(!option.includes(playerSelection)) {
        result.textContent = "Please enter a valid option"
        computerResult.textContent = ``;
      } else if(playerSelection === computerPlay) {
        scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
        result.textContent = "It's a tie!";
        computerResult.textContent = `The computer played: ${computerPlay}`;
      } else if(playerSelection === winnerPick[computerPlay]) {
        userCount++
        scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
        result.textContent = `You win! ${playerSelection} beats ${computerPlay}`;
        computerResult.textContent = `The computer played: ${computerPlay}`;
      } else {
        computerCount++
        scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
        result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`;
        computerResult.textContent = `The computer played: ${computerPlay}`;
      }

    } else if(userCount >= 5 && computerCount < 5) {
      console.log("you won")
      result.textContent = "Congratulations, you won! :-)"
      computerResult.textContent = ""
    } else if(userCount < 5 && computerCount >= 5) {
      console.log("computer won")
      result.textContent = "Sorry, looks like you couldn't beat the machine :-("
      computerResult.textContent = ""
    }
  }

  // START A NEW GAME
  function resetGame() {
    playerInput.value = ``;
    result.textContent = ``;
    computerResult.textContent = ``;
    userCount = 0;
    computerCount = 0;
    scores.innerHTML = ``;
    gamePlay();
  }

  // EVENT LISTENERS
  resetButton.addEventListener("click", resetGame)
  playerSubmit.addEventListener("click", gamePlay)
})
