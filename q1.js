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

// Q1.3 Insert three numbers 19, 23, 30 into the sorted array above, and keep the new array in ascending order

// Numbers to insert into the Q1.2 array
let newNumbers = [19, 23, 30];

// Merge the new numbers into the Q1.2 array
numbers = numbers.concat(newNumbers);

// Sort the merged array again to keep it in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers);


// Q1.4 Remove two numbers 8 and 31 from the array generated in Q1.3
// and keep the new array in ascending order

// Remove both 8 and 31 using filter
numbers = numbers.filter(num => num !== 8 && num !== 31);

console.log(numbers);