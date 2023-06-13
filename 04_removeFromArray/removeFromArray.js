function removeFromArray(arr, ...args) {
  const secondArgElements = args.flat();
  return arr.filter((element) => !secondArgElements.includes(element));
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// let arr = [1, 2, 3, 4, 5];
// const indexToRemove = 2;

// arr.splice(indexToRemove, 1);

// console.log(arr);


// function sum(...theArgs) {
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 2, 2));

// Do not edit below this line
module.exports = removeFromArray;
