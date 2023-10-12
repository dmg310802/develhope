// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

function sum(numbers) {
  let totalSum = 0;
  numbers.forEach(number => {
    totalSum = totalSum + number;
  })
  return totalSum
  };

const numbers = [1, 2, 3,];
console.log(sum(numbers));

