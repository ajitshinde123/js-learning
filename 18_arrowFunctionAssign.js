
//1. Arrow function with no argument and no return value
console.log(`======== step 1: ===========`);
let show = () =>{
    console.log("Good Morning,Today Is Monday");
}
show();
console.log(`======== step 2: ===========`);
//2. Arrow function with  3 argument and no return value
const multiply = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(` Multiplication is : ${result}`);
   
};

// Values to be passed
const values1 = [5, 5, 2];
const values2 = [10, 4];

// Invoke the same arrow function for values
multiply(...values1);
multiply(...values2);


//3. Arrow function with  5 argument and  return value
console.log(`======== step 3: ===========`);

const add = (a, b, c, d, e) => {
    const result = a + b + c + d + e;
    return result;
};

// Values to be passed
const values3 = [100, 100, 200, 349, 756];

// Log the returned result on console with meaningful message
console.log("The result of addition is 100, 100, 200, 349, 756:", add(...values3));

// Invoke the same arrow function for values
const values4 = ["I am", " learning", "ES6", `features`, " in depth"];
console.log("The result of addition is:", add(...values4));

