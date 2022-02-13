//function to validate userInput
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return true;
}else{
  return false;
}
}

//function to get computer choice by random.
const getComputerChoice = () => {
  let randChoice = Math.floor(Math.random() * 3)
  switch(randChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
}

//Funtion to determine winner by taking userChoice and computerChoice as argument.
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    console.log("Game was a tie")
  }else{
    if(userChoice === 'bomb'){
      console.log("User Wins Automatically with bomb")
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        console.log("Computer Won");
      }else{
        console.log("User won");
        }
    }

    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        console.log("Computer Won");
      }else{
        console.log("User won")
        }
    }

    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        console.log("User won")
      }else{
        console.log("Computer Won");
      }
    }

  }

}
// determineWinner('paper', 'scissors')

const playGame = () => {
  let userVal = 'rock'
  let userChoice = getUserChoice(userVal);
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  userChoice ? determineWinner(userVal, computerChoice) : console.log("invalid user input")
}


playGame()
