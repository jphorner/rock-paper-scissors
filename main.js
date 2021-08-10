//////  QUERY SELECTORS //////

var sidebar1 = document.querySelector('.player-one-sidebar');
var sidebar2 = document.querySelector('.player-two-sidebar');
var player1WinArea = document.querySelector('.player-one-wins');
var player2WinArea = document.querySelector('.player-two-wins');
var titleContainer = document.querySelector('.title-container');
var gameTitle = document.querySelector('.title');
var fighterSelection = document.querySelector('.fighter-selection');
var bonusSelection = document.querySelector('.bonus-fighters');
var fighter = document.querySelector('.fighter');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var cave = document.querySelector('.cave');
var alien = document.querySelector('.alien');
var fight = document.querySelector('.fight');
var hardMode = document.querySelector('.hard-mode');
var normalMode = document.querySelector('.normal-mode');
var gameplayButtons = document.querySelector('.gameplay-buttons');
var gameplayOptions = document.querySelector('.gameplay-options');
var gameResults = document.querySelector('.game-results');
var replayButton = document.querySelector('.play-again');
var rockImage = document.querySelector('#rockImage');
var player1Option = document.querySelector('.p1-option');
var player2Option = document.querySelector('.p2-option');
var winnerText = document.querySelector('.winner-text');
var bonusInfo = document.querySelector('.bonus-information');

//////  GLOBAL VARIABLES  //////

var fighters = [ rock, paper, scissors ];
var bonusFighters = [ cave, alien ];
var currentFighter;
var bonusFighter;
var enemyFighter;
var newGame;
var currentWinner;
var player1Wins = 0;
var player2Wins = 0;
var savedWins;
var fighterSelected = false;
var bonusFighterSelected = false;
var isSafe = false;
var safetyStates = [ true, false ];

//////  EVENT LISTENERS  //////

document.addEventListener('load', populateWins);
fighterSelection.addEventListener('click', selectFighter);
bonusSelection.addEventListener('click', selectBonusFighter);
fight.addEventListener('click', startFight);
hardMode.addEventListener('click', displayBonusFighters);
normalMode.addEventListener('click', removeBonusSelection);
replayButton.addEventListener('click', playAgain);

//////  MAIN FUNCTIONS  //////


function selectFighter(event) {
  console.log(event.target.id)
  if (event.target.id) {
    fighterSelected = true;
    if (event.target.id === 'rockImage') {
      appear(rock);
      disappear(paper);
      disappear(scissors);
      currentFighter = rock;
    } else if (event.target.id === 'paperImage') {
      appear(paper);
      disappear(rock);
      disappear(scissors);
      currentFighter = paper;
    } else if (event.target.id === 'scissorsImage') {
      appear(scissors);
      disappear(paper);
      disappear(rock);
      currentFighter = scissors;
    }
  }
}

function displayBonusFighters() {
  bonusSelection.classList.toggle('hidden');
  hardMode.classList.toggle('hidden');
  normalMode.classList.toggle('hidden');
}

function selectBonusFighter(event) {
  bonusFighterSelected = true;
  if (event.target.id === 'caveImage') {
    appear(cave);
    disappear(alien);
    bonusFighter = cave.id;
  } else if (event.target.id === 'alienImage') {
    appear(alien);
    disappear(cave);
    bonusFighter = alien.id;
  };
}

function removeBonusSelection() {
  bonusFighterSelected = false;
  displayBonusFighters();
}

function startFight() {
  if (fighterSelected && bonusFighterSelected) {
    playHardModeRound();
  } else if (fighterSelected && bonusFighterSelected === false) {
    playNormalRound();
  }
}

function playNormalRound() {
  hide(gameplayOptions);
  show(gameResults);
  var player1 = new Player('Human', 'Human', 0);
  var player2 = new Player('CPU', 'CPU', 0);
  newGame = new Game(player1, player2, 'Standard');
  player1.takeTurn();
  player2.selectEnemyFighter();
  newGame.checkWinState();
}

function playHardModeRound() {
  hide(gameplayOptions);
  show(gameResults);
  var player1 = new Player('Human', 'Human', 0);
  var player2 = new Player('CPU', 'CPU', 0);
  newGame = new Game(player1, player2, 'Hard Mode');
  player1.takeTurn();
  player2.selectEnemyFighter();
  newGame.checkWinState();
  // newGame.checkHardMode();
}

function playAgain() {
  hide(gameResults);
  hide(replayButton);
  show(gameplayOptions);
  hide(bonusInfo);
  fighterSelected = false;
  for (var i = 0; i < fighters.length; i++) {
    fighters[i].classList.remove('vanish');
  };
  currentFighter = null;
  enemyFighter = null;
  currentWinner = null;
  bonusFighter = null;
  bonusInfo.innerText = null;
  hide(winnerText);
}

function populateWins() {
  var retrievedWins = localStorage.getItem('storedWins');
  var parsedWins = JSON.parse(retrievedWins);
  savedWins = parsedWins;
}

//////  RANDOM NUMBER SELECTOR  //////

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//////  HIDE & SHOW FUNCTIONS  //////

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function disappear(element) {
  element.classList.add('vanish');
}

function appear(element) {
  element.classList.remove('vanish');
}
