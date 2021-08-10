class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins;
    this.fighter = fighter;
  }

  saveWinsToStorage() {
    console.log('true')
  }

  retrieveWinsFromStorage() {
    console.log('true')
  }

  takeTurn() {
    this.fighter = currentFighter.id;
  }

  selectEnemyFighter() {
    // enemyFighter = this.fighter;
    this.fighter = fighters[getRandomIndex(fighters)];
    console.log(this.fighter);
    enemyFighter = this.fighter;
    this.fighter = this.fighter.id;
  }
}

// module.exports = Player;
