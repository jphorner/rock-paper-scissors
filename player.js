class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.fighter = fighter;
    this.bonusFighter = bonusFighter;
    this.isSafe = isSafe;
  }

  saveWinsToStorage() {
    var winsToStore = { p1Wins: player1Wins, p2Wins: player2Wins };
    var stringifiedWins = JSON.stringify(winsToStore);
    localStorage.setItem('storedWins', stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('storedWins');
    var parsedWins = JSON.parse(retrievedWins);
    savedWins = parsedWins;
  }

  takeTurn() {
    this.fighter = currentFighter.id;
  }

  hideInCave() {
    show(bonusInfo);
    this.isSafe = safetyStates[getRandomIndex(safetyStates)];
    if (this.isSafe) {
      bonusInfo.innerText = `The cave protected the ${this.name}!`
    } else if (this.isSafe === false) {
      bonusInfo.innerText = `The cave was too obvious to protect the ${this.name}!`
    }
  }

  selectEnemyFighter() {
    // enemyFighter = this.fighter;
    this.fighter = fighters[getRandomIndex(fighters)];
    enemyFighter = this.fighter;
    this.fighter = this.fighter.id;
    if (bonusFighterSelected) {
      this.bonusFighter = bonusFighters[getRandomIndex(bonusFighters)].id;
    }
  }
}

// module.exports = Player;
