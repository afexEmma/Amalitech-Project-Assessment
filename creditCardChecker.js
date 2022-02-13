// All valid credit card numbers
const valid1 = "4539677908016808";
const valid2 = "5535766768751439";
const valid3 = "371612019985236";
const valid4 = "6011144340682905";
const valid5 = "4539404967869666";

// All invalid credit card numbers
const invalid1 = "5795593392134643";
const invalid2 = "4532778771091795";
const invalid3 = "375796084459914";
const invalid4 = "6011127961777935";
const invalid5 = "5382019772883854";

// Can be either valid or invalid
const mystery1 = "344801968305414";
const mystery2 = "5466100861620239";
const mystery3 = "6011377020962656203";
const mystery4 = "4929877169217093";
const mystery5 = "1913540463072523";

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//funtion converts string to an Array of numbers.
const strToArr = str => {
    let strArr = str.split('');
    for(elem in strArr){
        strArr[elem] = parseInt(strArr[elem]);
    }
    return strArr;
}

//check validity of credit card using the Luhn algorithm.
const validateCred = str => {
    let array = strToArr(str);
    let checker = array[array.length-1];
    //make a copy of array so as to not mutate the original array.
    let newArr = array.slice(0, array.length-1);
    
    //reverse Array
    let reversedArr = newArr.reverse()

    for(i=0; i<reversedArr.length; i++){
      if((i+1)%2 === 1){
        let doubleVal = 2 * newArr[i];
       if(doubleVal > 9){
         newArr[i] = doubleVal - 9;
       }else{
         newArr[i] = doubleVal;
       }
      }
    }

    let sum = checker;

    for(let elem in newArr){
      sum+=newArr[elem];
    }

    if(sum%10 == 0){
      return true;
    }else{
      return false
    }
}


//check through the nested array for which numbers are invalid, and return another nested array of invalid cards. 
const findInvalidCards = array => {
  let invalidCards = array.filter(elem => !validateCred(elem));
  return invalidCards;
}

//function checks if company name already exist for issuing invalid card to prevent duplicate.
const found = (array, str) => {
    return array.find(elem => elem === str)
}

//identify the credit card companies that have possibly issued these faulty numbers. 
//Function has one parameter for a nested array of invalid numbers and returns an array of companies. 
const idInvalidCardCompanies = array => {

    //stores companies that issued invalid credit card
    let invalidCompanies = [];
    let check = 0;

    for(elem in array){
        let checker = array[elem][0];

        switch(checker){
            case '3': 
                //if company name that not exit (ie) check = undefined.
                if(!found(invalidCompanies, "Amen (American Express)")){
                    invalidCompanies.push("Amen (American Express)");
                    break;
                }else{
                    break;
                }
                
            case '4': 
                if(!found(invalidCompanies, "Visa")){
                    invalidCompanies.push("Visa");
                    break;
                }else{
                    break;
                }

            case '5': 
                if(!found(invalidCompanies, "MasterCard")){
                    invalidCompanies.push("MasterCard");
                    break;
                }

            case '6': 
                if(!found(invalidCompanies, "Discover")){
                    invalidCompanies.push("Discover");
                    break;
                }

            default:
                if(!found(invalidCompanies, "Company not found")){
                    invalidCompanies.push("Company not found");
                    break;
                }
        }
        
    }
    console.log(invalidCompanies)
    return invalidCompanies;
}

idInvalidCardCompanies(findInvalidCards(batch))
// console.log(findInvalidCards(invalid1))

// console.log(validateCred(invalid2))

