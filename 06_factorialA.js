

function factorialOfNum(num) {
    if (num === null || num === undefined) {
        console.log("Factorial cannot be calculated for null or undefined value");
        return;
    }

    if (num < 0) {
        console.log("Factorial cannot be calculated for negative numbers");
        return;
    }

    if (num === 0) {
        console.log("Factorial of 0 is 1");
        return 1;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log("Factorial of", num, "is", factorial);
    return factorial;
}

// Calling the function with provided arguments
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);