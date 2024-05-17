const choices = ['Rock', 'Paper', 'Scissors'];
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
const humanChoiceP = document.getElementById('human-choice');
const humanSpan = document.createElement('span');
const ComputerSelectionDiv = document.getElementById('computer-selection');
const computerChoiceP = document.getElementById('computer-choice');
const resultList = document.getElementById('results')
const resultItem = document.createElement('li');

const roundResults = document.getElementById('round-results')


rockBtn.innerText = choices[0];
paperBtn.innerText = choices[1];
scissorsBtn.innerText = choices[2];


if(roundResults.hasChildNodes()){
    resultItem.innerText = 'Make your move';
    roundResults.append(resultItem);
}

rockBtn.addEventListener('click', ()=>{
    //console.log(`${selectedHumanChoice} was selected`);
    humanChoice = rockBtn.innerText;
    humanChoiceP.innerText = `You chose: ${humanChoice}`
    getComputerChoice();
    computerChoiceP.innerText =`I chose: ${computerChoice}` ;
    playRound(humanChoice, computerChoice); 
    resultList.append(resultItem);


  
})
paperBtn.addEventListener('click', ()=>{
    humanChoice = paperBtn.innerText;
    humanChoiceP.innerText = `You chose: ${humanChoice}`
    getComputerChoice();
    computerChoiceP.innerText =`I chose: ${computerChoice}` ;
    playRound(humanChoice, computerChoice); 
    resultList.append(resultItem);

})
scissorsBtn.addEventListener('click', ()=>{
    humanChoice = scissorsBtn.innerText;
    humanChoiceP.innerText = `You chose: ${humanChoice}`
    getComputerChoice();
    computerChoiceP.innerText =`I chose: ${computerChoice}` ;
    playRound(humanChoice, computerChoice); 
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

    return computerChoice;
}


const playRound = (humanChoice, computerChoice) =>{
    //console.log(humanChoice, computerChoice)
    //human wins
    if(humanChoice === 'Rock' && computerChoice === 'Scissors'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        const message = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
    }
    if(humanChoice === 'Paper' && computerChoice === 'Rock'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        const message = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`;
        resultItem.innerText = `${message}`;
        return message;

    }
    if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
        console.log(`human wins`);
        humanScore = humanScore + 1;
        const message = `You win! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
    }
   
    //computer wins
    if(humanChoice === 'Rock' && computerChoice === 'Paper'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        
        const message = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
    }
    if(humanChoice === 'Paper' && computerChoice === 'Scissors'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        
        const message = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
    }
    if(humanChoice === 'Scissors' && computerChoice === 'Rock'){
        console.log(`computer wins`);
        computerScore = computerScore +1;
        
        const message = `You Lose! ${humanChoice} beats ${computerChoice}. Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
    }
    //tie
    if(humanChoice === computerChoice){
        console.log(`tie`);
        const message = `It's a tie! You both choosed ${computerChoice}! Score: You: ${humanScore} : Computer: ${computerScore}`
        resultItem.innerText = `${message}`;
        return message;
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
