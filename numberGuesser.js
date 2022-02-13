let humanScore = 0;
let computerScore = 0;
  let currentRoundNumber = 1;

// Write your code below:
const getAbsoluteDiff = (input1, input2) => Math.abs(input1 - input2);

// console.log(getAbsoluteDiff(2, 5))
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  if(humanGuess < 0 && humanGuess > 9){
    alert('User input is out of range')
  }
  let humanDiff = getAbsoluteDiff( humanGuess, secretTarget);
  let computerDiff = getAbsoluteDiff( computerGuess, secretTarget);

if(humanDiff <= computerDiff){
  return true;
}else{
  return false;
}
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1 ;
  }else if(winner === 'computer'){
    computerScore +=1;
  }
}

const advanceRound = () => currentRoundNumber += 1;


