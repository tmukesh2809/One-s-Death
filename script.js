'use strict';
//selecting different elements in advance
let score = 0;
let scorepl2 = 0;
let scorePlayer0 = document.getElementById('score0');
let scorePlayer1 = document.getElementById('score1');
let newButton = document.querySelector('.btn--new');
let rollButton = document.querySelector('.btn--roll');
let holdButton = document.querySelector('.btn--hold');
let currentScore0 = document.querySelector('#current0');
let currentScore1 = document.querySelector('#current1');
let diceImg = document.querySelector('.dice');
let currentPlayer = 0;

// functionality of the newGame button
function NewGame() {
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    diceImg.classList.add('hidden');
}

// when the newGame button is pressed
newButton.addEventListener('click', function() {
    NewGame();
})

// when the rollDice button is pressed
rollButton.addEventListener('click', function () {
    // generating a random number
    let diceNum = Math.trunc(Math.random() * 6) + 1;

    // Displaying the appropriate Dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceNum}.png`;

    // Adjusting the scores Accordingly
    if(diceNum != 1) {
        score += diceNum;
        document.querySelector(`#current${currentPlayer}`).textContent = score;
    }
    else {
        document.querySelector(`.player${currentPlayer}`).classList.remove('active-player');
        SwitchPlayer();
    }
});

// functionality of the hold button
holdButton.addEventListener('click', function () {
    let tempScore = Number(document.getElementById(`score${currentPlayer}`).textContent);
    tempScore += score;
    document.getElementById(`score${currentPlayer}`).textContent = tempScore;
    if(tempScore >= 50) {
        alert(`Player ${currentPlayer + 1} wins!`);
        NewGame();
    }
    SwitchPlayer();
});

//function to switch players
function SwitchPlayer () {
    document.querySelector(`.player${currentPlayer}`).classList.remove('active-player');
    document.querySelector(`#current${currentPlayer}`).textContent = 0;
    score = 0;
    currentPlayer = currentPlayer == 0 ? 1: 0;
    document.querySelector(`.player${currentPlayer}`).classList.add('active-player');
}