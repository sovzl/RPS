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
        updateScore(result, playerChoice, computerChoice)


            //turn off buttons 
            if (playerScore === 3 || computerScore === 3) {
                buttons.forEach(btn => {
                    btn.disabled = true;
            })
        }
    })
})

const startAgainButton = document.querySelector('.reset-button');
startAgainButton.addEventListener('click', () => {
    // Enable buttons again
    buttons.forEach(button => {
        button.disabled = false;
    });

    // Reset player and computer scores
    playerScore = 0;
    computerScore = 0;

    // Clear result display
    // but not sure if this is correct way to do this
    const resultDisplay = document.querySelector('.display');
    resultDisplay.textContent = '';
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
});



function updateScore(result, playerChoice, computerChoice) {
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');
    const resultDisplay = document.querySelector('.display');

    if (result === 'Player wins') {
        playerScore++;
    } else if (result === 'Computer wins') {
        computerScore++;
    }

    let roundResult = '';
    if (result === 'Player wins') {
        roundResult = 'Player wins this round!';
    } else if (result === 'Computer wins') {
        roundResult = 'Computer wins this round!';
    } else {
        roundResult = 'It\'s a draw this round.';
    }

    if (playerScore === 3) {
        resultDisplay.textContent = `Player wins the game! Final score: Player ${playerScore} - Computer ${computerScore}`;
    } else if (computerScore === 3) {
        resultDisplay.textContent = `Computer wins the game! Final score: Computer ${computerScore} - Player ${playerScore}`;
    } else {
        resultDisplay.textContent = `${roundResult}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore} Computer chose: ${computerChoice}`;
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
}

//add reset button done
//css so it wont look like shit well kind of done xd
//add how many rounds player want to play 


