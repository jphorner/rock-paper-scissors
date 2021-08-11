# Rock, Paper, Scissors

_Rock, Paper, Scissors_ is a simple web app that lets you play the classic game of the same name! (But this time, there's a small twist.)

## Installation

_Rock, Paper, Scissors_ requires no installation. All features are contained within the web app, which leverages local storage to keep track of wins across multiple visits.

[Click here to access Rock, Paper, Scissors.](https://jphorner.github.io/rock-paper-scissors/)
[Click here to access the repo.](https://github.com/jphorner/rock-paper-scissors)

## Usage and Demonstration

**How to play Rock, Paper, Scissors:**

_Standard Mode:_

- To play this app, first select a fighter by clicking on any of the three basic icons.
- Press 'Fight!' to play a round against the computer.
  - The main section of the page will change to display your choice and the computer's choice.
  - The app will keep track of wins and losses across multiple visits. This number will found beneath each player icon.

_Hard Mode:_

- Click the 'Hard Mode' button to enter Hard Mode.
- This mode adds two bonus fighters, Cave and Alien.
  - _Cave_ will give you a 50% chance of remaining safe in the next round. You can still win while in the cave.
  - _Alien_ will leave you vulnerable to attacks, but it will double your points for the round if you win.

_Other:_

- You can reset each player's points by clicking 'reset wins' in the bottom-right of the page.
- You can read a summary of the information above by clicking 'Help'.

**App Demo**

![recording (8)](https://user-images.githubusercontent.com/82003147/128954359-f3b50438-a185-4fc8-8422-eb41132d4658.gif)

**Error Handling:**

If the user does not select a fighter, the 'Fight!' button will do nothing when clicked.

_NOTE:_
The current version of this application contains a bug which may occasionally result in player one's fighter being undefined. If this occurs, please refresh the page as the game will not reset. (Your wins will still persist after refresh.)

## Programming Languages and Dependencies

**This app was developed using:**

- HTML
- CSS
- JavaScript
  - Local Storage

## Contributions

**Developers:**

_This app was developed by:_

- [Joshua Horner](https://github.com/jphorner)

_Joshua is a student of front-end engineering at the Turing School of Software & Design._

Project spec and assets provided by the [Turing School of Software & Design](https://turing.edu/).
