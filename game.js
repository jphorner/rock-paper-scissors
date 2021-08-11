class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameType = gameType;
  }

  checkWinState() {
    if (this.player1.fighter === this.player2.fighter) {
      hide(bonusInfo);
      this.finishRound();
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'scissors') {
      this.player1.wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'rock' && this.player2.fighter === 'paper') {
      this.player2.wins +=1;
      currentWinner = 'COMPUTER';
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'rock') {
      this.player1.wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'paper' && this.player2.fighter === 'scissors') {
      this.player2.wins +=1;
      currentWinner = 'COMPUTER';
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'paper') {
      this.player1.wins +=1;
      currentWinner = 'HUMAN';
    } else if (this.player1.fighter === 'scissors' && this.player2.fighter === 'rock') {
      this.player2.wins +=1;
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
    this.player1.saveWinsToStorage();
    this.displayResults();
    this.resetBoard();
  }

  checkHardMode() {
    show(bonusInfo);
    this.displayResults();
    console.log('P1 BF: ' + player1.bonusFighter);
    console.log('P2 BF: ' + player2.bonusFighter);
    if (this.player1.bonusFighter === 'cave' && this.player2.bonusFighter === 'cave') {
      bonusInfo.innerText = 'Both players hid in the cave! FIGHT!';
      return;
    } else if (this.player1.bonusFighter === 'cave') {
      this.player1.hideInCave();
    } else if (this.player2.bonusFighter === 'cave') {
      this.player2.hideInCave();
    };
    if (currentWinner === 'COMPUTER' && this.player2.bonusFighter === 'alien' && this.player1.isSafe) {
      this.player2.wins -=2;
      bonusInfo.innerText = 'You hid from the CPU and its alien!';
      winnerText.innerHTML = ``;
      return;
    } else if (currentWinner === 'HUMAN' && this.player1.bonusFighter === 'alien' && this.player2.isSafe) {
      this.player1.wins -=2;
      bonusInfo.innerText = 'The CPU avoided you and your alien!';
      return;
    } else if (currentWinner === 'COMPUTER' && this.player1.isSafe) {
      this.player2.wins -=1;
      bonusInfo.innerText = 'You hid from the CPU!';
      return;
    } else if (currentWinner === 'HUMAN' && this.player2.isSafe) {
      bonusInfo.innerText = 'The CPU hid from you!'
      return;
    } else if (currentWinner === 'HUMAN' && this.player1.bonusFighter === 'cave') {
      bonusInfo.innerText = 'You won by sneak attack!';
      return;
    }
    if (currentWinner === 'HUMAN' && this.player1.bonusFighter === 'alien') {
      this.player1.wins += 1;
      bonusInfo.innerText = `You teamed up with the alien! You win double points!`;
    } else if (currentWinner === 'COMPUTER' && this.player2.bonusFighter === 'alien') {
      this.player2.wins += 1;
      bonusInfo.innerText = `The alien gave the computer an extra point.`;
    }
    this.countWins();
    this.resetBoard();
  }

  countWins() {
    player1WinArea.innerText = `${this.player1.wins}`;
    player2WinArea.innerText = `${this.player2.wins}`;
  }

  displayResults() {
    player1Option.innerHTML = `${currentFighter.innerHTML}`;
    player2Option.innerHTML = `${enemyFighter.innerHTML}`;
    show(winnerText);
    if (currentWinner) {
      winnerText.innerHTML = `${currentWinner} WINS!`;
    } else if (!currentWinner) {
      hide(bonusInfo);
      winnerText.innerText = `IT'S A DRAW!`;
    }
  }

  resetBoard() {
    setTimeout(playAgain, 3700);
  }
}
