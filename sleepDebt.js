//function that returns any given night’s number of hours of rest. 
const getSleepHours = day => {
    switch(day.toLowerCase()){
      case 'monday':
        return 4;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 5;
        break;
      default:
        return 4;
        break;
    }
  }
    
  
  // {
  //   let total = getSleepHours('monday') + 
  //   getSleepHours('tuesday') + 
  //   getSleepHours('wednesday') + 
  //   getSleepHours('thursday') + 
  //   getSleepHours('friday') + 
  //   getSleepHours('monday') + 
  //   getSleepHours('sunday');
  //   return total;
  // }

  const getActualSleepHours = () => 6 + 7 + 8 + 5 + 4 + 6 + 8;
    
  const getIdealSleepHours = (idealHours) => {
    return idealHours *= 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    let dept = 0;
    if (actualSleepHours === idealSleepHours){
      console.log("User got perfect amount of sleep")
    }else if(actualSleepHours > idealSleepHours){
      dept = actualSleepHours - idealSleepHours 
      console.log(`User got ${dept} hours more sleep than needed`)
    }else{
      dept = idealSleepHours - actualSleepHours;
      console.log(`User should get ${dept} hours more of rest`)
    }
  }
  
  calculateSleepDebt()