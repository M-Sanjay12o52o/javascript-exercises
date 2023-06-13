const convertToCelsius = function(deg) {
  // subtract 32 and multiply by .5556 (or 5/9)
  let ans = 0;
  ans = (deg - 32) * (5/9);
  return Math.round(ans * 10) / 10; 
};

const convertToFahrenheit = function(deg) {
  // multiply by 1.8 (or 9/5) and add 32
  let ans = 0;
  ans = (deg * 1.8) + 32;
  return Math.round(ans * 10) / 10;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(-1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
