const fibonacci = function(index) {
    let fibonacci = [1, 1];
    for (let i = 0; i < Number(index)-2; i++) {
        fibonacci.push(fibonacci[(fibonacci.length-1)]+fibonacci[(fibonacci.length-2)]);
    }
    if (Number(index) >= 0) {
        return fibonacci[fibonacci.length-1];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;

