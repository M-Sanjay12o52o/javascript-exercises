const sumAll = function(num1, num2) {
  let sum = 0;
  let greater = '';
  let lesser = '';

  if (num1 > num2) {
    greater = num1;
    lesser = num2;
  } else {
    greater = num2;
    lesser = num1;
  }

  if (greater > 0 && lesser >= 0) {
    for (let i = greater; i >= lesser; i--) {
      sum = sum + i;
    }
    return sum;
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  } else {
    return 'ERROR';
  }
  
};

console.log(sumAll(1, '90'));

// Do not edit below this line
module.exports = sumAll;
