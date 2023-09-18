const removeFromArray = function(initialArray, ...args) {
    let finalArray = initialArray;
    for (let i = args.length - 1; i >= 0; i--) {
      if (initialArray.includes(args[i]) === true) {
        initialArray.splice(initialArray.indexOf(args[i]), 1);
        finalArray = initialArray;
      } else {
      continue;
      }
    }
    return finalArray;
  }

console.log(removeFromArray([1, 2, 3, 4], 1, 3));

// Do not edit below this line
module.exports = removeFromArray;
