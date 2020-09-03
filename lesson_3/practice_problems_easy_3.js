//? Question 1
// Write three different ways to remove all of the elements from
//  the following array:

let numbers = [1, 2, 3, 4];

//* Answer 1
numbers.length = 0;


//* Answer 2
numbers.splice(0, numbers.length);


//* Answer 3
while (numbers.length) {
  numbers.pop();
}


//? Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// Try to answer without running the code.

//* Answer
"1, 2, 34, 5";


//? Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Try to answer without running the code.

//* Answer
"Hello There"; // Strings are immutible, so a value is passed.


//? Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Try to answer without running the code.

//* Answer
// [{ first: 42 }, { second: "value2"}, 3, 4, 5];
// The slice method creates a shallow copy so arr1 and arr2 point to the
// same memory location.


//? Question 5
// The following function unnecessarily uses two return statements to
// return boolean values.
// How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

//* Answer 1
function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

//* Answer 2
const isColorValid = color =>  color === 'blue' || color === 'green';

//* Answer 3
const isColorValid = color => ["blue", "green"].includes(color);