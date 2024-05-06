const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let finalScore = [humanScore, computerScore]

const getHumanChoice =()=>{
    let humanChoice = window.prompt(`What's your choice? Rock, Paper or Scissors`);
    for(let i = 0; i < choices.length; i++){
        const possibleChoices = choices[i];
        if(humanChoice.toLowerCase() === possibleChoices){
            humanChoice = possibleChoices.toLowerCase();
            return humanChoice;
        } 
    }
        return getHumanChoice()
}

const getComputerChoice = ()=>{
    let randomChoice = Math.floor(Math.random()* 3);
    let finalComputerChoice = choices[randomChoice];

    return computerChoice = finalComputerChoice;
}

let i = 0;
while (i<5) {
const playRound = (humanChoice, computerChoice) =>{
    console.log(`human entered ${humanChoice}, computed entered ${computerChoice}`)
    //human wins
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        window.alert(`You win! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        
        
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        window.alert(`You win! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        window.alert(`You win! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        

    }
   
    //computer wins
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        window.alert(`You Lose! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        
       
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        window.alert(`You Lose! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        
    }
    if(humanChoice === 'scissor' && computerChoice === 'rock'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        window.alert(`You Lose! ${humanChoice} beats ${computerChoice}. 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
        
    }
    //tie
    if(humanChoice ===  computerChoice){
        console.log(`tie`);
        window.alert(`It's a tie! You both choosed ${computerChoice}! 
                        \nScore: You: ${humanScore} : Computer: ${computerScore}`)
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

i++;

}
// refreshes page to play again
const replay =()=>{
    let confirm = window.confirm('play again?')
    if (confirm){
        window.location.reload();
    } else {
        window.alert(`Thanks for Playing!`)
    }
}

replay()
