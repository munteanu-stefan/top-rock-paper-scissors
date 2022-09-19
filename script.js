function computerChoice() {
    choice = Math.floor(Math.random() * 3);
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
    player = prompt('Choose rock, paper or scissors').toLowerCase();
    return player;
}

playerChoice();