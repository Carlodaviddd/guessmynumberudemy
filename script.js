'use strict';

const maxNumber = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const displayBody = function(body){
    document.querySelector('body').style.backgroundColor = body;
}
const displayWidth = function(width){
    document.querySelector('.number').style.width = width;
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}
const displaySNumber = function(secretNumber){
    document.querySelector('.number').textContent = secretNumber;
}

// displaySNumber(secretNumber);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //no input
    if(!guess){
        displayMessage('🚫 No number!');

    //when player wins
    } else if (guess === secretNumber){
        displaySNumber(secretNumber);
        displayMessage('✅ Correct!');
        document.querySelector('.glitch').backgroundColor = '#40E0D0';
        displayBody('#40E0D0');
        displayWidth('30rem');
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //when guess is wrong
    } else if(guess !== secretNumber){
        if(guess > 20 || guess < 0){
            displayMessage("No. must be between 1-20!");
        }
        else if(score > 1){
            displayMessage(guess > secretNumber ? '⬆ Too high...' : '⬇ Too low...');
            score--;
            displayScore(score);
            } else {
            displayMessage('🤦‍♂️ Try again!')
            displayScore(0);
            displayBody('#F90909');
            }
        }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    displayScore(score);
    displaySNumber(secretNumber);
    displaySNumber('?');
    document.querySelector('.guess').value = '';
    displayBody('#222');
    displayWidth('15rem');
});

