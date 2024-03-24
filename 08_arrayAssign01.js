
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`==============step 1 ==============`);
console.log(`Log the first and last element on console`);
console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);

console.log(`==============step 2 ==============`);
console.log(`Add element → Papaya before the element 'Banana' and then log array on console`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`==============step 3 ==============`);
console.log(`Remove 'Mango' from the array`);
fruits_seasonal.splice(fruits_seasonal.indexOf("Mango"), 1);
console.log(fruits_seasonal);

console.log(`==============step 4 ==============`);
console.log(`Add element or insert an element 'Pineapple' at the last position`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`==============step 5 ==============`);
console.log(`Insert an element - 'Dragon Fruit' before "Water Melon"`);
fruits_seasonal.splice(fruits_seasonal.indexOf("Water Melon"), 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`==============step 6 ==============`);
console.log(`Replace an element 'Orange' with 'Kiwi'`);
fruits_seasonal[fruits_seasonal.indexOf("Orange")] = "Kiwi";
console.log(fruits_seasonal);

console.log(`==============step 7 ==============`);
console.log(`Log the elements starting from index 1 to 4`);
console.log(fruits_seasonal.slice(1, 5));

console.log(`==============step 8 ==============`);
console.log(`Only select last 3 element and log on console: Use the length property`);
console.log(fruits_seasonal.slice(-3));
