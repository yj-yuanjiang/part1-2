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

console.log(numbers);// Q2.1 Build an object called “myMovie” with the following properties and data: Title: The longest day, Year: 1964
// Create a movie object to store movie details

let myMovie = {
  title: "The longest day", // Movie title
  year: 1964 // Movie release year
};

//Print the object to the console to verify the properties and values
console.log(myMovie);

// Q2.2 Add the following properties and data to the “myMovie” object: rating: 5, Summary: World War II movie about the Normandy landings
myMovie.rating = 5; //Movie rating

// Add a summary property to the movie object
myMovie.summary = "World War II movie about the Normandy landings"; //Movie summary

console.log(myMovie);

// Q2.3 Change the data of the properties listed below: Rating: 4, Year: 1962
// Update rating to 4
myMovie.rating = 4; 

// Update year to 1962
myMovie.year =1962;

console.log(myMovie);

// Note: Although the task mentions "Year: 1964", it refers to the original state.
// We do NOT need to change the year back to 1964 — just remove the Summary.
// Delete the summary property as it's no longer needed
delete myMovie.summary;

console.log(myMovie);
