//Primary function created - Computer playing functioning
const strings = ['Choice1', 'Choice2', 'Choice3'];

function getComputerChoice (strings) {
    const randomNumber = Math.floor(Math.random() *  strings.length); 
    return strings[randomNumber];
}

const myArray = ['rock', 'paper', 'scissors'];

//Function that plays Rock Paper Scissor

function game () {
    
    let playerScore = 0; 
    let computerScore = 0;   
    let tieScore = 0;
    
    for (let i = 1; i <= 5 ; i++) {
        
        let playerSelection = prompt(`Round ${i}: What's your choice?`).toLowerCase(); console.log(playerSelection);
        let computerSelection = getComputerChoice(myArray).toLowerCase(); console.log(computerSelection);
                
        function singleRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Tie";
            } else if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'rock')
            ) {
                return "Player";
            } else {
                return "Computer";
            }
        }
                
        
        console.log(singleRound (playerSelection, computerSelection)) //Runs the function

        //Defining a variable in order to keep a scoresheet

        let roundResult = singleRound (playerSelection, computerSelection);

        if (roundResult === "Player") {
            playerScore++;
        } else if (roundResult === "Computer") {
            computerScore++;
        } else {
            tieScore++;
        }

        console.log(`Round ${i}: ${roundResult} wins.`);
    }

    if (playerScore > computerScore) {
        alert(`Player wins the entire game`);
    } else if (playerScore < computerScore) { 
        alert(`Computer wins the entire game`);
    } else {
        alert(`It's a tie game`);
    }

}

console.log(game())







