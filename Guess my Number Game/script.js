'use strict'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number 👌'

// console.log(document.querySelector('.message').textContent)


// document.querySelector('#question').textContent = 13

// document.querySelector('.score').textContent = 29

// document.querySelector('.inputGuess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)

let highScore = 0

let score = 20;

document.querySelector('.btn-check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.inputGuess').value) 
    
    if(!guess)
    {
        document.querySelector('.message').textContent = 'No Number'
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = "Congrats, Correct Number 👌"

        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('#question').textContent = secretNumber

        if(score > highScore)
        {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
    else if (guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Entered Number is higher"
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = "You lost the game 😥"
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red'

        }
        
    }
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Entered Number is Lower"
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = "You lost the game 😥"
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red'

        }
    }
})

document.querySelector('.btn-again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = 20
    score = 20
    document.querySelector('.inputGuess').value = ''
    document.querySelector('#question').textContent = '?'
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.highscore').textContent = highScore


})