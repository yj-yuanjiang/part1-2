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
// Q1.5 Implement the function “sequentialSearch” as per part 5 of the task description

/**
 * Performs a sequential search to find the index of a target value in an array.
 * @param {number[]} array - The array to search.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function sequentialSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // return the index the target is found
    }
  }
  return -1; // return -1 if the target is not found
}

// Test 1: Target is found
let target1 = 16;
let result1 = sequentialSearch(numbers, target1);

console.log("Search result for", target1, "is index:", result1);

// Test 2: Target is NOT found
let target2 = 99;
let result2 = sequentialSearch(numbers, target2);

console.log("Search result for", target2, "is index:", result2);

// Q1.6 Implement the function “binarySearch” as per part 6 of the task description

/**
 * Performs a binary search to find the index of a target value in a sorted array.
 * @param {number[]} array - A sorted array to search.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function binarySearch(array, target) {
  let left = 0; // Left boundary of the search range
  let right = array.length - 1; // Right boundary of the search range

  // Repeat until the search range is valid
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle index

    if (array[mid] === target) {
      return mid; // Target found, return the index
    } else if (array[mid] < target) {
      left = mid + 1; // Move to the right half
    } else {
      right = mid - 1; // Move to the left half
    }
  }
  return -1; // Target not found, return -1
}

// Reuse the final sorted array 'numbers' from Q1.4
// Call the binarySearch function with two test cases:
// 1. Target value 16, which exists in the array
// 2. Target value 99, which does not exist in the array

console.log("Index of 16:", binarySearch(numbers, 16)); // Expected output: index of 16
console.log("Index of 99:", binarySearch(numbers, 99)); // Expected output: -1
