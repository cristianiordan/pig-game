'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

btnCheck.addEventListener('click', function(){
    const inputNumber = Number(document.querySelector('.guess').value);
    console.log(inputNumber);
    if(!inputNumber) {
        document.querySelector('.message').textContent = 'No number!';
    } if (inputNumber === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'You won!';
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore) {
            document.querySelector('.highscore').textContent = score;
        }
    }else if (inputNumber > secretNumber ) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }
    }else if (inputNumber < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

btnAgain.addEventListener('click', function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})


