const leapYears = function(year) {
    let leapYear;  
    if (((Number.isInteger(year/4) === true) && (Number.isInteger(year/100) === false)) || ((Number.isInteger(year/4) === true) && (Number.isInteger(year/100) === true) && (Number.isInteger(year/400) === true))) {
      leapYear = true;
    } else {
        leapYear = false;
    }
    return leapYear;
  };
  

// Do not edit below this line
module.exports = leapYears;
