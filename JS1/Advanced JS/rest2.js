// The sum function has a high numbers of parameters. 
// How can we improve the code in order to make it accept any amount of numbers to sum as its argument?

function sum(...nums) {
   let totalSum = 0;
   for (const num of nums) {
        totalSum += num;
   }
   return totalSum;
}

console.log(sum(1, 2, 3, 4,5,6));
