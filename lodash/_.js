let _ = {
    //Clamp Method
    clamp(number, lowerBound, upperBound){
        // if(number < lowerBound){
        //     return lowerBound;
        // }else if(number>upperBound){
        //     return upperBound;
        // }else{
        //     return number;
        // }
        let lowerClampedValue = Math.max(number, lowerBound);
        let clampedValue = Math.min(lowerClampedValue, upperBound);
        return clampedValue;
    },

    //InRange Method
    inRange(number, start, end){
        //if end is !set
        if(end == undefined){
            end = start;
            start = 0;
        }
        //swap if start is greater than end
        if(start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        
        //return true if number is in range else false.
        let isInRange = ((number >= start) && (number < end))
        return isInRange;
    },

    //words method
    words(str){
        let strArr = str.split(' ');
        return strArr;
    },

    //pad method
    pad(string, length){
        if(string.length >= length){
            return string;
        }
        let diff = length - string.length;
            let startPaddingLength = Math.floor(diff / 2);
            let endPaddingLength = diff - startPaddingLength;
            let paddedString = ' ';
            let result = paddedString.repeat(startPaddingLength) + string.concat(paddedString.repeat(endPaddingLength));
            return result;
    },

    //has method
    has(obj, key){
        if(obj[key] !== undefined){
            let hasValue = obj.key;
            return Boolean(hasValue);
        }else{
            return false

        }
    },

    //invert method
    invert(object){
        let invertedObject = {};
        for (let elem in object){
            const orignalValue = object[elem];
            invertedObject[orignalValue] = elem
            // console.log(elem)

        }
        return invertedObject;
    },

    //Find Key Method
    findKey(obj, func){
        for(let key in obj){
            let value = obj[key];
            let result = func(value);
            if(result){
                return key;
            }
            else {
                return undefined;
            }
        } 
    },

    //Drop Method
    drop(array, dropVal=1){
        if(dropVal == 0){
            return array;
        }else if(dropVal >= array.length){
            return [];
        }
        else{
            for(let i = 0; i<dropVal; i++){
                array.shift();
            }
            return array;
        }
    },

    //dropWhile Method
    dropWhile(arr, func){
        const cb = (elem, index) => !func(elem, index, arr)
        let dropNumber = arr.findIndex(cb);
        let droppedArray = this.drop(arr, dropNumber)

        return droppedArray;
    },

    // Chunk Method
    chunk(arr, size=1){
        let arrayChunks = [];
        for(let i = 0;i<arr.length; i+=size){
            let arrayChunk = arr.slice(i, i+size)
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;

    }
    


}


// console.log(_.clamp(-4, -5, 5))
// console.log(_.inRange(3, 9, 2))
// console.log(_.pad("Emma", 8))
// console.log(_.invert({name: "emma", age: 23, religion: "christian"}))
// Do not write or modify code below this line.
console.log(_.chunk([1,2,3,4]))
module.exports = _;