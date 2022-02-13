let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let runnerAge = 22;

if(runnerAge > 18 && earlyRunner){
  raceNumber+=1000;
}

if(runnerAge > 18 && earlyRunner){
  console.log(`The race will start at 9:30 am and race number = ${raceNumber}`)
}else if(runnerAge > 18 && !earlyRunner){
  console.log(`The race will start at 11:00 am and race number = ${raceNumber}`)
}else if(runnerAge < 18){
  console.log(`The race will start at 12:30 pm and race number = ${raceNumber}`)
}else{
  console.log("See registration desk")
}