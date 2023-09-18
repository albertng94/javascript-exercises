const repeatString = function(string, num) {
    let finalString = "";
    
    if (num < 0) {
        finalString = "ERROR";
    }

    for (let count = 0; count < num; ++count){
        finalString += string;
    };
    
return finalString;
};

// Do not edit below this line
module.exports = repeatString;
