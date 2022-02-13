// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    // console.log(newStrand)
    return newStrand
    

  }
  
  //Factory Function
  
  function pAequorFactory(id, dna){
    let obj = {}
      obj.specimenNum = id,
      obj.dna = dna,
      obj.mutate = function(){
        // console.log("hello")
        let randDnaBase = dna[Math.floor(Math.random() * this.dna.length)]
        let randBase = returnRandBase()
        // console.log(randDnaBase)
        if(randBase !== randDnaBase){
            let index = dna.indexOf(randDnaBase)
            dna[index] = randBase
        }else{
            this.mutate();
        }
        // console.log(dna)
        this.dna = dna;
        // console.log(randBase)

      },

      //compareDNA method
      obj.compareDNA = function(passedObj){
          let dnaLength = this.dna.length
          let counter = 0;
        for(let i = 0; i<dnaLength; i++){
            for(let j=0; j<passedObj.dna.length; j++){
                if((i === j) && (this.dna[i] === passedObj.dna[j])){
                    counter+=1;
                }
            }
        }
        let percentage = Math.floor(counter/dnaLength * 100)
        console.log(`specimen ${this.specimenNum} and specimen ${passedObj.specimenNum} have ${percentage}% DNA in common.`)
      },

      //willLikelySurvive Method
      obj.willLikelySurvive = function(){
        let dnaLength = this.dna.length;
        let passedVal = Math.ceil(60/100 * dnaLength)
        let counter = 0
        for(let i =0; i<dnaLength; i++){
            if(dna[i] === 'C' || dna[i] === 'G'){
                counter+=1;
            }
        }
        if(counter >= passedVal){
            return true;
        }else{
            return false
        }
      }
  
      return obj
  }
  
//   const newSpecimen = pAequorFactory(1, mockUpStrand())
// console.log(newSpecimen)
// newSpecimen.mutate()

const ex1 = pAequorFactory("ex1", ['A', 'C', 'G', 'C'])
const ex2 = pAequorFactory("ex2", ['A', 'C', 'G', 'C'])

ex1.compareDNA(ex2)
console.log(ex1.willLikelySurvive())