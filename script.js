'use strict';

let secretNum = Math.trunc(Math.random() * 50) + 1;

let currScore = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

/* Logic for the Actual Game */
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔ No Number!');
    } else if (guess === secretNum) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNum;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (currScore > highScore) {
            highScore = currScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNum) {
        if (currScore > 1) {
            displayMessage(guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
            currScore--;
            document.querySelector('.score').textContent = currScore;
        }
    } else {
        displayMessage('😭 You lost the Game!');
        document.querySelector('.score').textContent = 0;
    }
});

/* Again Button Logic Resets the Whole Game Again!!! */
document.querySelector('.again').addEventListener('click', function () {
    currScore = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = currScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
