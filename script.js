function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'Player wins';
    } else {
        return 'Computer wins';
    }
}

const buttons = document.querySelectorAll('.choice')
let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener(`click`, () => {
        const playerChoice = button.getAttribute('data-choice')
        const computerChoice = getComputerChoice()
        const result = (playRound(playerChoice, computerChoice))
        updateScore(result)


            //turn off buttons 
            if (playerScore === 3 || computerScore === 3) {
                buttons.forEach(btn => {
                    btn.disabled = true;
            })
        }
    })
})



function updateScore(result) {
    const playerScoreDisplay = document.querySelector('.player-score')
    const computerScoreDisplay = document.querySelector('.computer-score')
    const resultDisplay = document.querySelector('.display')

    if (result === `Player wins`) {
        playerScore++;
    }   else if (result === `Computer wins`) {
        computerScore++;
    }



    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
}

//add reset button 
//add how many rounds player want to play
//css so it wont look like shit 