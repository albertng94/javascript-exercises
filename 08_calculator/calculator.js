const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(...args) {
  return args.reduce((mult, current) => mult * current, 1); 
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let array = [];

  if (a === 0 || a === 1) {
      array.push(1);
    } else {
      for (i = a; i > 0; i--) {
        array.push(i);   
      };
    }
  
  return array.reduce((mult, current) => mult * current, 1);
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
