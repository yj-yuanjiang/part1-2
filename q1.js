// Q1.1 Build an array with the given numbers and print it

// Declare an array named 'numbers' and initialize it with the given numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Output the contents of the 'numbers' array to the browser console
console.log(numbers);

// Q1.2 Sort the array created in Q1.1 above in ascending order (from smallest to largest)

// Use the built-in sort() method with a compare function
// The compare function (a, b) => a - b sorts numbers in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers);