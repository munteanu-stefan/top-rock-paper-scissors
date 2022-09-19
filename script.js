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
    const player = prompt('Choose rock, paper or scissors').toLowerCase();
    return player;
}

function compareChoices(player, computer) {
    if (player === 'rock' || player === 'paper' || player === 'scissors') {
        if (player === computer) {
            return `Draw! You both chose ${player}!`;
        } else if ((player === 'rock' && computer === 'scissors') || 
                    (player === 'paper' && computer === 'rock') || 
                    (player === 'scissors' && computer === 'paper')) {
            return `You won! You chose ${player} and computer chose ${computer}`;
        } else {
            return `You lost! You chose ${player} and computer chose ${computer}`
        }
    } else {
        return `Your choice is invalid, ${player} is not an option.`
    }
}


function playRound() {
    let player = playerChoice();
    let computer = computerChoice();
    let outcome = compareChoices(player, computer);
    
    document.getElementById("p1").innerText = outcome;
}

playRound();