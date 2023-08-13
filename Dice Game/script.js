'use strict'

const btnHold = document.querySelector('.btn-hold')
const btnNewGame = document.querySelector('.btn-newGame')
const btnRollDice = document.querySelector('.btn-RollDice')
const dicePic = document.querySelector('.dice-img')
const currentScoreP1 = document.querySelector('.p0-current')
const currentScoreP2 = document.querySelector('.p1-current')
const boxP1 = document.querySelector('.box0')
const boxP2 = document.querySelector('.box1')
const winner1 = document.querySelector('.winner1')
const winner2 = document.querySelector('.winner2')
const btnInstructions = document.querySelector('.btn-instructions')
const btnModalClose = document.querySelector('.modal-close')

let score1 = document.querySelector('.score-p0')
let score2 = document.querySelector('.score-p1')
score1.textContent = 0
score2.textContent = 0

dicePic.classList.add('hidden')

let scoresArr = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function switchPlayer()
{
    document.querySelector(`.p${activePlayer}-current`).textContent = 0
    if(activePlayer === 0)
    {
        activePlayer = 1
    }
    else{
        activePlayer = 0
    }
    currentScore = 0;
    boxP1.classList.toggle('active')
    boxP2.classList.toggle('active')
}


btnRollDice.addEventListener('click', function()
{
    if(playing=== true)
    {
        const diceNumber = Math.trunc(Math.random() * 6) + 1


        dicePic.classList.remove('hidden')
        dicePic.src = `dice-${diceNumber}.png`;
    
    
        if(diceNumber !== 1)
        {
            currentScore += diceNumber
            document.querySelector(`.p${activePlayer}-current`).textContent = currentScore
            
        }
        else{
          switchPlayer();
        }
    }
 
})

btnHold.addEventListener('click', function()
{
    if(playing === true)
    {
        scoresArr[activePlayer] += currentScore
        document.querySelector(`.score-p${activePlayer}`).textContent = scoresArr[activePlayer]
        
        if(scoresArr[activePlayer] >=50)
        {
            playing = false;
            document.querySelector(`.box${activePlayer}`).classList.add('player-winner')
            document.querySelector(`.box${activePlayer}`).classList.remove('active')
            dicePic.classList.add('hidden')
            document.querySelector(`.winner${activePlayer}`).style.display = 'block'
        }
        else{
            switchPlayer()
        }
    }
 

})

btnNewGame.addEventListener('click', function()
{
    activePlayer = 0
    boxP1.classList.add('active')
    boxP2.classList.remove('active')
    playing = true;
    document.querySelector(`.box0`).classList.remove('player-winner')
    document.querySelector(`.box1`).classList.remove('player-winner')
    document.querySelector(`.box0`).classList.add('active')
    score1.textContent = 0
    score2.textContent = 0
    currentScoreP1.textContent = 0
    currentScoreP2.textContent = 0
    currentScore = 0
    scoresArr = [0, 0]
    document.querySelector(`.winner0`).style.display = 'none'
    document.querySelector(`.winner1`).style.display = 'none'
    dicePic.classList.add('hidden')

})

//Game Instructions
btnInstructions.addEventListener('click',function()
{
    document.querySelector('.modal').classList.toggle('hiddenModal')
})

btnModalClose.addEventListener('click', function()
{
    document.querySelector('.modal').classList.toggle('hiddenModal')

})