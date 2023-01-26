'use strict';

let myNumber = Math.ceil(Math.random() * 20)
const guess = document.querySelector('.guess')
let score = 20
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

// Check Function
document.querySelector('.check').addEventListener('click', ()=>{ 
    let guessValue = Number(guess.value)
    console.log(myNumber,guess)

    if(!guessValue){
        displayMessage('Not a Number')
    // When the Guessed number is equal to myNumber
    }else if(myNumber===guessValue){
        displayMessage('Correct number!')
        document.querySelector('.number').textContent = myNumber
        document.querySelector('.highscore').textContent = score
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('body').style.backgroundColor = '#60b347'
    // When the Guessed number is not equal to myNumber
    }else if(myNumber!==guessValue){
        if(score>1){
            score--
            displayMessage( myNumber > guessValue? 'Too low!': 'Too High!' )
            document.querySelector('.score').textContent = score
        }else{
            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0
        }
    }
})

// Restart Game
document.querySelector('.again').addEventListener('click',()=>{
    myNumber = Math.ceil(Math.random() * 20)
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = '?'
    document.querySelector('.highscore').textContent = 0
    document.querySelector('.score').textContent = 20
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    score = 20
    guess.value = ''
})