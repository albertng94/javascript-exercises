const reverseString = function(word) {
    var splitWord = word.split("");
    var reverseArray = [];
    for (let i = 0; (i <= splitWord.length - 1) || (i === ""); i++) {
       reverseArray.unshift(splitWord[i]);
            }
    return reverseArray.join("");
  }
// Do not edit below this line
module.exports = reverseString;


