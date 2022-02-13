//constant variable kelvin
const kelvin = 473;

//constant variable celsius = [kelvin-273]
const celsius = kelvin - 273;

// const variable fahrenheit = celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32

//round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

const Newton = Math.floor(celsius*(33/100))
console.log(`The temperature is  ${Newton} degrees Newton.`)