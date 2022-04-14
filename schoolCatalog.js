class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._level;
    }
  
    get numberOfStudent(){
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === Number){
        this._numberOfStudents=newNumberOfStudents;
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
  
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  
  static pickSubstituteTeacher(substituteTeachers){
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[randomIndex];
  }
  }
  
  //Class PrimarySchool
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  //Class Middle School
  class MiddleSchool extends School{
      constructor(name, numberOfStudents){
        super(name, 'middle', numberOfStudents);
    }
  }
  
  //Class High School
  class HighSchool extends School{
      constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  //Instance of PrimarySchool
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()