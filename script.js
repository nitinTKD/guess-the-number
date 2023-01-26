'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number🥳';
document.querySelector('.number').textContent=13;
document.querySelector('.score') .textContent=18;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/
let number = Math.trunc(Math.random() * 20) + 1;
let highscore =0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🥲No Number';
    }
    else if (number === guess) {
        document.querySelector('.message').textContent = 'correct number🥳';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'; 
        if (score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else if (guess > number) {
        if (score >= 1) {
            document.querySelector('.message').textContent = 'guess is too high❌';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score == 0) { document.querySelector('.message').textContent = 'you lost the game😥' 
        document.querySelector('.score').textContent = 0;
        
    }
    
    }
    else if (guess < number) {
        if (score>=1) {
            document.querySelector('.message').textContent = 'guess is too low❌';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (score == 0) {
            document.querySelector('.message').textContent = 'you lost the game😥' 
            document.querySelector('.score').textContent = 0;
        }
            
        }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'start guessing...' ;
    document.querySelector('.score').textContent =score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'; 
        

})