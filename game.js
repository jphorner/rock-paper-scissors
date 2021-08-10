class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameType = gameType;
  }

  checkWinState() {
    if (this.player1.fighter === this.player2.fighter) {
      this.finishRound();
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'scissors') {
      player1Wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'paper') {
      player2Wins +=1;
      currentWinner = 'COMPUTER';
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'rock') {
      player1Wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'scissors') {
      player2Wins +=1;
      currentWinner = 'COMPUTER';
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'paper') {
      player1Wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'rock') {
      player2Wins +=1;
      currentWinner = 'COMPUTER';
    };
    if (this.player1.bonusFighter) {
      this.checkHardMode();
    };
    this.finishRound();
  }

  finishRound() {
    this.player1.isSafe = false;
    this.player2.isSafe = false;
    this.countWins();
    this.displayResults();
    this.resetBoard();
    this.player1.saveWinsToStorage();
  }

  checkHardMode() {
    console.log('P1 bonus fighter: ' + this.player1.bonusFighter);
    console.log ('CPU bonus fighter: ' + this.player2.bonusFighter);
    show(bonusInfo);
    if (this.player1.bonusFighter === 'cave' && this.player2.bonusFighter === 'cave') {
      bonusInfo.innerText = 'Both players hid in the cave!';
      return;
    } else if (this.player1.bonusFighter === 'cave') {
      this.player1.hideInCave();
      console.log(this.player1.isSafe);
    } else if (this.player2.bonusFighter === 'cave') {
      this.player2.hideInCave();
      console.log(this.player2.isSafe)
    };

    if (currentWinner === 'COMPUTER' && this.player2.bonusFighter === 'alien' && this.player1.isSafe) {
      player2Wins -= 2;
      bonusInfo.innerText = 'You hid from the CPU and its alien!';
    } else if (currentWinner === 'HUMAN' && this.player1.bonusFighter === 'alien' && this.player2.isSafe) {
      player1Wins -= 2;
      bonusInfo.innerText = 'The CPU avoided you and your alien!';
    } else if (currentWinner === 'COMPUTER' && this.player1.isSafe) {
      player2Wins -= 1;
      return;
    } else if (currentWinner === 'HUMAN' && this.player2.isSafe) {
      player1Wins -= 1;
      return;
    };

    if (currentWinner === 'HUMAN' && this.player1.bonusFighter === 'alien') {
      player1Wins += 1;
      bonusInfo.innerText = `You teamed up with the alien! You win double points!`;
    } else if (currentWinner === 'COMPUTER' && this.player2.bonusFighter === 'alien') {
      player2Wins += 1;
      bonusInfo.innerText = `Darn it! The alien gave the computer an extra point.`;
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
    `;
    show(winnerText);
    if (currentWinner) {
      winnerText.innerHTML = `${currentWinner} WINS!`;
    } else if (!currentWinner){
      winnerText.innerText = `IT'S A DRAW!`;
    }
  }

  resetBoard() {
    setTimeout(playAgain, 4000);
  }
}
