// // Isn't it Odd?
// // Write a function that takes one integer argument, which may be positive, negative, or zero.
// // This method returns true if the number's absolute value is odd.
// // You may assume that the argument is a valid integer value

// // Answer

// function isOdd (num) {
//   return Math.abs(num) % 2 === 1;
// }

// console.log(isOdd(2));
// console.log(isOdd(5));
// console.log(isOdd(-17));
// console.log(isOdd(-8));
// console.log(isOdd(0));
// console.log(isOdd(7));


// // Odd Numbers
// // Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// // Answer

// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }

// // Even Numbers
// // Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// // Answer

// for (let number = 2; number < 100; number += 2) {
//   console.log(number);
// }


// // How big is the room?
// // Build a program that asks the user to enter the length and width of a room in meters,
// // and then logs the area of the room to the console in both square meters and square feet.

// // Note: 1 square meter == 10.7639 square feet
// // Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// // Example:
// // Enter the length of the room in meters:
// // 10
// // Enter the width of the room in meters:
// // 7
// // The area of the room is 70.00 square meters (753.47 square feet).

const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

function calculateArea (length, width) {
  return (length * width);
}

console.log(
  'Will you be using metres for feet?\n1). Square Metres\n2). Square Feet');
let units = readline.question();

console.log('Length:');
let length = readline.question();
length = parseInt(length, 10);

console.log('Width:');
let width = readline.question();
width = parseInt(length, 10);

if (units === '1') {
  let areaSM = (calculateArea(length, width));
  let areaFeet = (areaSM * SQMETERS_TO_SQFEET);
  answer;
} else {
  let areaFeet = (calculateArea(length, width));
}

console.log(
  `The area of the room is ${areaSM.toFixed(2)} (${areaFeet.toFixed(2)} square feet})`);
