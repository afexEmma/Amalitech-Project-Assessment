//Zodiac Message Object
let zodiacMessage = {
    latinName: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'],
    birthRange: ['March 21 to April 19', 'April 20 to May 20', 'May 21 to June 20', 'June 21 to July 22','July 23 to August 22', 'August 23 to September 22',
    'September 23 to October 22', 'October 23 to November 21', 'November 22 to December 21', 'December 22 to January 19', 'January 20 to February 18', 'February 19 to March 20'],
    todaysLuck: ['Perfect', 'Good', 'ok', 'bad', 'cursed']
    
}

//Generate random number from 0 to num - 1;
const generateRandomNumber = num => Math.floor(Math.random() * num)

    

//Stores message to be outputed.
let personalZodiacMessage = [];

//random numbers generated for latinName and todaysLuck is stored here.
let randomNum = []

//pushes apporiate message into the personalZodiacMessage.
for(let elem in zodiacMessage){
    //Generate two random numbers for latinName and todaysLuck.
    if(elem === 'latinName' || elem === 'todaysLuck'){
        randomNum.push(generateRandomNumber(zodiacMessage[elem].length));
    }

    switch(elem){
        case 'latinName':
            personalZodiacMessage.push(`The zodiac Sign "${zodiacMessage[elem][randomNum[0]]}".`)
            break;

        case 'birthRange':
            personalZodiacMessage.push(`Birthday ranges from ${zodiacMessage[elem][randomNum[0]]}.`)
            break;

        case 'todaysLuck':
            //tenary operator to add unfortunate string when todaysLuck is bad or cursed.
            personalZodiacMessage.push(`You will have a "${zodiacMessage[elem][randomNum[1]]}" day${randomNum[1] > 2 ? ' unfortunately.' : "."}`)
            break;
        
        default:
            personalZodiacMessage.push('There is not enough info');
    }
}

const formatMessage = message => {
    let formatted = message.join('\n');
    console.log(formatted)
}

formatMessage(personalZodiacMessage)
