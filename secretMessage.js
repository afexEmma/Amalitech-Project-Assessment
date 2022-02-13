let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 
                     'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
                     '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
                     
//Romove Last element of the array 
secretMessage.pop()
console.log(secretMessage.length)

//Append new element to the end of the array
secretMessage.push('to', 'secretMessage')

const ind = secretMessage.indexOf('easily')
secretMessage[ind] = 'right'
console.log(secretMessage)

//Remove first element of the array
secretMessage.shift();

//Insert new Element at the start of the array.
secretMessage.unshift('Programming')

secretMessage.splice(6, 5, 'know')

console.log(secretMessage.join(' '))