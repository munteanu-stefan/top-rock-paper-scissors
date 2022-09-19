let playerScore = 0;
let computerScore = 0;

function appendP(text) {
    let div = document.getElementById("div1"), 
        p = document.createElement('p');
    p.innerHTML = text;
    div.append(p);
}

function computerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            console.log('Computer picked rock');
            return 'rock';
            break;
        case 1:
            console.log('Computer picked paper');
            return 'paper';
            break;
        case 2:
            console.log('Computer picked scissors');
            return 'scissors';
            break;
        default:
            console.log('Something is wrong');
            break;
    }
}

function playerChoice() {
    const player = prompt('Choose rock, paper or scissors');
    return player;
}

function compareChoices(player, computer) {
    if (player === 'rock' || player === 'paper' || player === 'scissors') {
        if (player === computer) {
            return `Draw! You both chose ${player}!`;
        } else if ((player === 'rock' && computer === 'scissors') || 
                    (player === 'paper' && computer === 'rock') || 
                    (player === 'scissors' && computer === 'paper')) {
                    playerScore++;
                    return `You won! You chose ${player} and computer chose ${computer}.`;
        } else {
            computerScore++;
            return `You lost! You chose ${player} and computer chose ${computer}.`
        }
    } else {
        return `Your choice is invalid, ${player} is not an option.`
    }
}

function playRound() {
    let player = playerChoice();
    if (player === null || player === undefined || player === '') {
        appendP('You didn\'t choose anything, you lose this round.');
    } else {
        player = player.toLowerCase();
        let computer = computerChoice();
        let outcome = compareChoices(player, computer);
        appendP(outcome);
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        playRound();
    }
    if (playerScore === computerScore) {
        appendP(`Draw!`);
    } else if (playerScore < computerScore) {
        appendP(`Computer wins! Your score is ${playerScore} and computer score is ${computerScore}.`);
    } else {
        appendP(`Player wins! Your score is ${playerScore} and computer score is ${computerScore}.`)
    }
}

game();