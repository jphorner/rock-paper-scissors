class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameType = gameType;
  }

  checkWinState() {
    if (this.player1.fighter === this.player2.fighter) {
      console.log('DRAW');
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'scissors') {
      console.log('Human (rock) beats CPU (scissors)');
      player1Wins +=1;
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'paper') {
      console.log('CPU (paper) beats Human (rock)');
      player2Wins +=1;
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'rock') {
      console.log ('Human (paper) beats CPU (rock)');
      player1Wins +=1;
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'scissors') {
      console.log('CPU (scissors) beats Human (paper)');
      player2Wins +=1;
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'paper') {
      console.log('Human (scissors) beats CPU (paper)');
      player1Wins +=1;
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'rock') {
      console.log('CPU (rock) beats Human (scissors)');
      player2Wins +=1;
    }
    this.countWins();
    this.displayResults();
    this.resetBoard();
  }

  countWins() {
    player1WinArea.innerText = `${player1Wins}`;
    player2WinArea.innerText = `${player2Wins}`;
  }

  displayResults() {
    player1Option.innerHTML = `
      ${currentFighter.innerHTML}
    `;
    player2Option.innerHTML = `
      ${enemyFighter.innerHTML}
    `
  }

  resetBoard() {
    setTimeout(playAgain, 4000);
  }
}

// module.exports = Game;
