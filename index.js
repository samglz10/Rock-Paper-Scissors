console.log("hello world");

const getComputerChoice = ()=>{
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random()* 3);
    let finalComputerChoice = choices[randomChoice];

    return console.log(finalComputerChoice)

}

getComputerChoice();

const getHumanChoice = ()=>{
    let humanChoice = window.prompt(`What's your choice?`);
    return   console.log(humanChoice)

}