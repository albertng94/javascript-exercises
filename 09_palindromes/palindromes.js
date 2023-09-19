const palindromes = function (str) {
    let reg = new RegExp(/[a-z]|[\d]/, "i");
    let arr = str.split(`${""}`)
    let cleanArr = [];
    arr.forEach(element => {
        if (reg.test(element) === true) {
            cleanArr.push(element); 
        }
    });
    
    let halfArr1 = [];
    if ((cleanArr.length) % 2 === 0) {
        for (let i = 0; i < (cleanArr.length)/2; i++) {
            halfArr1.push(cleanArr[i]);
        } 
    } else if ((cleanArr.length) % 2 !== 0) {
        for (let i = 0; i <= ((cleanArr.length)/2); i++) {
            halfArr1.push(cleanArr[i]);
        } 
    }

    let halfArr2 = [];
    if ((cleanArr.length) % 2 === 0) {
        for (let i = cleanArr.length-1; i >= ((cleanArr.length))/2; i--) {
            halfArr2.push(cleanArr[i]);
        } 
    } else if ((cleanArr.length) % 2 !== 0) {
        for (let i = cleanArr.length-1; i >= ((cleanArr.length)-1)/2; i--) {
            halfArr2.push(cleanArr[i]);
        } 
    }

    let halfStr1 = halfArr1.join("").toLowerCase();
    let halfStr2 = halfArr2.join("").toLowerCase(); 

    if (halfStr1 === halfStr2) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;