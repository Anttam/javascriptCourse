'use strict';

// variable declaration

let secretNum = genRandomNum();
let score = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
document.querySelector('.score').textContent = score;

//function declaration

function genRandomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

function printMessage(message) {
  document.querySelector('.message').textContent = message;
}
function updateScore(updatedScore) {
  document.querySelector('.score').textContent = updatedScore;
}
function printNumber(secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
}
function changeBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
function changeNumberWidth(change) {
  document.querySelector('.number').style.width = change;
}
function changeHighScore(newScore) {
  document.querySelector('.highscore').textContent = highScore;
}

// code for game

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (guess == 0) {
      printMessage('no number!');
    } else if (guess > secretNum) {
      printMessage('number is lower!');
      score--;
      updateScore(score);
    } else if (guess < secretNum) {
      printMessage('number is higher!');
      score--;
      updateScore(score);
    } else if (guess === secretNum) {
      printMessage('correct Number!');
      printNumber(secretNum);
      changeBackgroundColor('#60b347');
      changeNumberWidth('30rem');
      if (score > highScore) {
        highScore = score;
        changeHighScore(score);
      }
    }
  } else {
    printMessage('You lost the game!');
    score = 0;

    updateScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = genRandomNum();
  score = 20;
  printMessage('Start guessing...');
  printNumber('?');
  updateScore(score);
  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
  document.querySelector('.guess').value = null;
});
