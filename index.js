  let userScore = 0;
  let computerScore = 0;
  let rounds;

  function startGame() {
    rounds = parseInt(document.getElementById('rounds').value);
    userScore = 0;
    computerScore = 0;

    document.getElementById('score').innerHTML = 'Score: You ' + userScore + ' - ' + computerScore + ' Computer';
    document.getElementById('game-container').style.display = 'block';
  }

  function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result = '';

    if (userChoice === computerChoice) {
      result = 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
      userScore++;
    } else {
      result = 'You lose!';
      computerScore++;
    }

    document.getElementById('result').innerHTML = 'Your choice: ' + userChoice + '<br>Computer\'s choice: ' + computerChoice + '<br>Result: ' + result;

    if (userScore === rounds || computerScore === rounds) {
      endGame();
    } else {
      document.getElementById('score').innerHTML = 'Score: You ' + userScore + ' - ' + computerScore + ' Computer';
    }
  }

  function endGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('result').innerHTML += '<br>Game Over!';
  }