const sumAll = function(arg1, arg2) {
    let result = 0;
    if ((typeof(arg1) !== "number" || typeof(arg2) !== "number") || (arg1 < 0 || arg2 < 0)) {
        result = "ERROR";
    } else if (arg1 < arg2) {
        for (count = arg1; count <= arg2; count++) {
            result += count; 
        }
    } else if (arg1 > arg2) {
        for (count2 = arg2; count2 <= arg1; count2++) {
            result += count2;
        }
    }
    return result;
  };
  

// Do not edit below this line
module.exports = sumAll;
