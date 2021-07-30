
function computerPlay() { 
    output = ['Rock','Paper','Scissors'] 
    randNum = Math.floor(Math.random() * 3)
    return output[randNum] 
} 

function rockPaperScissors(playerSelection, computerSelection) { 
    if (playerSelection.toLowerCase() === 'rock' && (computerSelection.toLowerCase() === 'paper' || computerSelection.toLowerCase() === 'scissors')) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Tie' 
    }
    else {
            return `You lose!, ${computerSelection} beats ${playerSelection}`
    }

}


// function rockPaperScissors(playerSelection, computerSelection) {
//     // your code here!
//   }
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));

 
let counter = 0;

  function game() {
    while (counter <=5) {
    counter++;
     let playerSelection = window.prompt("Enter Rock, Paper or Scissors", 'Rock') 
     let computerSelection = computerPlay();
     result = rockPaperScissors(playerSelection, computerSelection) 
    if (result.includes('win')) {
        console.log('Win') 
    }
    else {
        console.log('Lose') 
        }
    console.log(counter)
    }    
}  

game() 