

const arrayNumber = [20,31,40,45,23,11,29,9,60,2,11]
console.log(`==============step 1 ==============`);
console.log(`Find the total element available or length `);
console.log("Total element available:",arrayNumber);
console.log("Length of element:",[arrayNumber.length]);

console.log(`==============step 2 ==============`);
console.log(`Log the first and last element on console`);
console.log("First element:", arrayNumber[0]);
console.log("Last element:", arrayNumber[arrayNumber.length - 1]);

console.log(`==============step 3 ==============`);
console.log(`Log the last third element:`,arrayNumber[arrayNumber.length - 3]) ;

console.log(`==============step 4 ==============`);
console.log("Even numbers:");
for (const num of arrayNumber) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
console.log(`==============step 5 ==============`);
console.log("odd numbers:");
for (const num of arrayNumber) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

console.log(`==============step 6 ==============`);
console.log(`Sum of even positioned elements:`);
let evenPositionSum = 0;
for (let i = 1; i < arrayNumbers.length; i += 2) {
  evenPositionSum += arrayNumbers[i];
}
console.log("Sum of even positioned elements:", evenPositionSum);

