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
    var winsToStore = { p1Wins: this.wins, p2Wins: player2.wins };
    var stringifiedWins = JSON.stringify(winsToStore);
    localStorage.setItem('storedWins', stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem('storedWins');
    var parsedWins = JSON.parse(retrievedWins);
    player1.wins = parsedWins.p1Wins;
    player2.wins = parsedWins.p2Wins;
    player1WinArea.innerText = parsedWins.p1Wins;
    player2WinArea.innerText = parsedWins.p2Wins;
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
      bonusInfo.innerText = `The ${this.name} failed to hide in the cave!`
    }
  }

  selectEnemyFighter() {
    this.fighter = fighters[getRandomIndex(fighters)];
    enemyFighter = this.fighter;
    this.fighter = this.fighter.id;
    if (bonusFighterSelected) {
      this.bonusFighter = bonusFighters[getRandomIndex(bonusFighters)].id;
    }
  }
}
