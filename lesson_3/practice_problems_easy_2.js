//? Question 1
// Given a string, return a new string that replaces every occurrence of the
// word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

//* Answer
advice.replace('important', 'urgent');

// To replace all occurances, use String.prototype.replaceAll()


//? Question 2
// The Array.prototype.reverse method reverses the order of elements in an
// array, and Array.prototype.sort can rearrange the elements in a variety
// of ways, including descending. 

// Both of these methods mutate the original array as shown below. 
// Write two distinct ways of reversing the array without mutating the
// original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//* Answer 1
let reversedArray = numbers.slice().reverse();

//* Answer 2
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

//? Bonus Question: Can you do it using the Array.prototype.forEach() method?

//* Answer
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers);


//? Question 3
// Given a number and an array, determine whether the number is
// included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

//* Answer
numbers.includes(number1);
numbers.includes(number2);


//? Question 4
// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and "
// in front of it.

//* Answer
'Four score and' + famousWords;
'Four score and'.concat(famouswords);


//? Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the
// number at index 2, so that the array becomes [1, 2, 4, 5].

//* Answer
numbers = [1, 2, 3, 4, 5];
numbers.splice[2,1];


//? Question 6
// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an
// un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//* Answer
flintstones = [].concat(...flintstones);

//* Solution with reduce

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

//* Solution with forEach

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});


//? Question 7
// Consider the following object:

let flintstones = 
  { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's
// name and Barney's number:

// [ 'Barney', 2 ]

//* Answer
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();


//? Question 8
// How would you check whether the objects assigned to variables numbers and
// table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

//* Answer
Array.isArray(numbers); // => true
Array.isArray(table);   // => false


//? Question 9
// Back in the stone age (before CSS), we used spaces to align things on the
// screen. If we have a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

//* Answer
let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);


//? Question 10
// Write two one-line expressions to count the number of lower-case t characters
// in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//* Answer
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;