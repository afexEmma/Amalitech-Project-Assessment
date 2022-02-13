//constant variable myAge store my age
const myAge = 22;

//variable earlyYears
let earlyYears = 2;
earlyYears *= 10.5;

//variable laterYear = myAge - 2
let laterYears = myAge - 2

//calcuate remaining dog years using the laterYears
laterYears *= 4;

console.log(earlyYears )
console.log(laterYears )

//my age in dog years
const myAgeInDogYears = earlyYears + laterYears

//converts name to lowercase and store in myName
const myName = "Emmanuel".toLowerCase()

console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)