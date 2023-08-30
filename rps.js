//Primary function created - Computer playing functioning
const strings = ['Choice1', 'Choice2', 'Choice3'];

function getComputerChoice (strings) {
    const randomNumber = Math.floor(Math.random() *  strings.length); 
    return strings[randomNumber];
}

const myArray = ['Rock', 'Paper', 'Scissors'];
const randomItem = getComputerChoice(myArray);


//Function that plays single round of Rock Paper Scissor

/*function singleRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    }  else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        return "Winner!";
    } else {
        return "Loser!";
    }
} 

const playerSelection = 'Rock'; console.log(playerSelection);
const computerSelection = getComputerChoice (myArray); console.log(computerSelection);

console.log(singleRound (playerSelection, computerSelection))*/

/*
Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.
*/

function game () {
    
    let playerScore = 0;
    let computerScore = 0;   
    
    for (let i = 1; i <= 5 ; i++) {
        function singleRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Tie!";
            }  else if (
                (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Rock')
            ) {
                return "Player";
            } else {
                return "Computer";
            }
        } 
        
        let playerSelection = prompt(`Round ${i}: What's your choice?`); console.log(playerSelection);
        let computerSelection = getComputerChoice (myArray); console.log(computerSelection);
        
        console.log(singleRound (playerSelection, computerSelection))

        //Defining a variable in order to keep a scoresheet

        let roundResult = singleRound(playerSelection, computerSelection);

        if (roundResult === "Player") {
            playerScore++
        } else if (roundResult === "Computer") {
            computerScore++
        };

        console.log(`Round ${i}: ${roundResult} wins.`);
    }

    if (playerScore > computerScore) {
        alert(`Player wins the entire game`)
    } else if (playerScore < computerScore) { 
        alert(`Computer wins the entire game`)
    }
    
}

console.log(game())







