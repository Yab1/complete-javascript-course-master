'use strict';

// Function for querySelector
const qs = sel=>document.querySelector(sel);
// Function for testContent
const qst = sel=>document.querySelector(sel);

// Select-Buttons
const newButton = qs('.btn--new');
const rollButton = qs('.btn--roll');
const holdButton = qs('.btn--hold');

// Select-Player-One
let current0 = qs('#current--0');
let scorePlayerOne = qs('#score--0');
let currentScorePlayerOne = 0;

// Select-Player-Two
let current1 = qs('#current--1');
let scorePlayerTwo = qs('#current--1');
let currentScorePlayerTwo = 0;


// RollDice Function
const rollDice = function (){
    const randomDie = Math.ceil(Math.random()*6);

    if(randomDie === 1){
        currentScorePlayerOne = 0
        current0.textContent = 0
    }else{
        currentScorePlayerOne += randomDie
        current0.textContent = currentScorePlayerOne + randomDie
    }
};

// SwitchPlayer()
const switchPlayer = function(){

}


// Hold Function
const holdDice = function (){
    Number(scorePlayerOne.textContent) += current0.textContent
    current0.textContent = 0
}

// EventListeners
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', holdDice);
