const repeatString = function(string, num) {
    let str = string;
    let repeatCount = num;
    let repeatedString = "";

    if (num < 0) {
        return "ERROR";
    } else {
        repeatedString = str.repeat(num);
    } 
    
    return repeatedString;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
