// var Player = require('./Player.js');
// var Game = require('./Game.js');

//////  QUERY SELECTORS //////

var sidebar1 = document.querySelector('.player-one-sidebar');
var sidebar2 = document.querySelector('.player-two-sidebar');
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
var gamePlayArea = document.querySelector('.gameplay-area');
var fight = document.querySelector('.fight');

//////  GLOBAL VARIABLES  //////

var fighters = [ rock, paper, scissors ];
var bonusFighters = [ cave, alien ];
var currentFighter;
var enemyFighter;

//////  EVENT LISTENERS  //////

fighterSelection.addEventListener('click', selectFighter);
bonusSelection.addEventListener('click', selectFighter);
fight.addEventListener('click', startFight);

//////  MAIN FUNCTIONS  //////


function selectFighter(event) {
  if (event.target.id) {
    if (event.target.id === 'rock') {
      appear(rock);
      disappear(paper);
      disappear(scissors);
      currentFighter = rock.id;
    } else if (event.target.id === 'paper') {
      appear(paper);
      disappear(rock);
      disappear(scissors);
      currentFighter = paper.id;
    } else if (event.target.id === 'scissors') {
      appear(scissors);
      disappear(paper);
      disappear(rock);
      currentFighter = scissors.id;
    } else if (event.target.id === 'cave') {
      appear(cave);
      disappear(alien);
    } else if (event.target.id === 'alien') {
      appear(alien);
      disappear(cave);
    };
    selectEnemyFighter();
  }
}

function selectEnemyFighter() {
  enemyFighter = fighters[getRandomIndex(fighters)].id;
  console.log(enemyFighter);
}

function startFight() {
  if (currentFighter === enemyFighter) {
    console.log('DRAW');
  } else if (currentFighter === 'rock' && enemyFighter === 'scissors') {
    console.log('Human (rock) beats CPU (scissors)');
  } else if (currentFighter === 'rock' && enemyFighter === 'paper') {
    console.log('CPU (paper) beats Human (rock)');
  } else if (currentFighter === 'paper' && enemyFighter === 'rock') {
    console.log ('Human (paper) beats CPU (rock)');
  } else if (currentFighter === 'paper' && enemyFighter === 'scissors') {
    console.log('CPU (scissors) beats Human (paper)');
  } else if (currentFighter === 'scissors' && enemyFighter === 'paper') {
    console.log('Human (scissors) beats CPU (paper)');
  } else if (currentFighter === 'scissors' && enemyFighter === 'rock') {
    console.log('CPU (rock) beats Human (scissors)');
  }
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
