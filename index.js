const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let finalScore = [humanScore, computerScore];
let humanChoice = 'N/A';
console.log(`Default Choice ${humanChoice}`);

//create elemetnst
const rockBtn = document.createElement("BUTTON");
const paperBtn = document.createElement("BUTTON");
const scissorsBtn = document.createElement("BUTTON");
const mainDiv = document.getElementById('main-container');
const humanSelectionDiv = document.getElementById('human-selection');
const humanSpan = document.createElement('span');
const ComputerSelectionDiv = document.getElementById('computer-selection');
const ComputerSpan = document.createElement('span');
const resultList = document.getElementById('results')
const resultItem = document.createElement('li');

rockBtn.innerText = choices[0];
paperBtn.innerText = choices[1];
scissorsBtn.innerText = choices[2];



rockBtn.addEventListener('click', ()=>{
    //console.log(`${selectedHumanChoice} was selected`);
    humanChoice = rockBtn.innerText;
    
    getComputerChoice();
    //console.log(`human entered ${humanChoice}, computed entered ${computerChoice}`)
    playRound(humanChoice, computerChoice);
    
    resultItem.innerText = results;
 
    resultList.append(resultItem);
  
})
paperBtn.addEventListener('click', ()=>{
    humanChoice = paperBtn.innerText;
    resultItem.innerText = humanChoice;
    getComputerChoice();
    console.log(`human entered ${humanChoice}, computed entered ${computerChoice}`)

    resultList.append(resultItem);

})
scissorsBtn.addEventListener('click', ()=>{
    humanChoice = scissorsBtn.innerText;
    resultItem.innerText = humanChoice;
    getComputerChoice();
    console.log(`human entered ${humanChoice}, computed entered ${computerChoice}`)
    resultList.append(resultItem);
})

humanSelectionDiv.append(rockBtn);
humanSelectionDiv.append(paperBtn);
humanSelectionDiv.append(scissorsBtn);




/* No longer needed because of controlled input
const getHumanChoice =(selection)=>{
    let humanChoice = selection;
    for(let i = 0; i < choices.length; i++){
        const possibleChoices = choices[i];
        if(humanChoice.toLowerCase() === possibleChoices){
            humanChoice = possibleChoices.toLowerCase();
            console.log(humanChoice);
            return humanChoice;
        } 
    }
        return 
}
*/
const getComputerChoice = ()=>{
    let randomChoice = Math.floor(Math.random()* 3);
    let finalComputerChoice = choices[randomChoice];
    computerChoice = finalComputerChoice;

    return computerChoice
}


const playRound = (humanChoice, computerChoice) =>{
    console.log(humanChoice, computerChoice)
    //human wins
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        let results = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        
        
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        let results = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        let results = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        

    }
   
    //computer wins
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        let results = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        
       
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        let results = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        
    }
    if(humanChoice === 'scissor' && computerChoice === 'rock'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        let results = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
        
    }
    //tie
    if(humanChoice ===  computerChoice){
        console.log(`tie`);
        let results = `It's a tie! You both choosed ${computerChoice}! Score: You: ${humanScore} : Computer: ${computerScore}`
                        return results;
    }

}

/*
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();


//playRound(humanSelection, computerSelection);

// refreshes page to play again
const replay =()=>{
    let confirm = window.confirm(`Play Again?
        \n Final Score: You: ${humanScore} : Computer: ${computerScore}`)
    if (confirm){
        window.location.reload();
    } else {
        window.alert(`Thanks for Playing!`)
    }
}

replay();

*/
