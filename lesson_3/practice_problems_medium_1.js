// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in
// the days before computers had video screens.
// For this practice problem, write a program that creates the following
//  output 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

// Answer

for (let padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + 'The Flintstones Rock');
}


// Question 2
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// Answer

munstersDescription.split('').map(function char() {
  if (char === char.toUpperCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}).join('');


// Question 3

// Alan wrote the following function, which was intended to return all of the factors of number:

// Answer
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}

// Bonus: What is the purpose of number % divisor === 0 in that code?

// Answer
// If a number modulus a diviser === 0 then it is a factor.


// Question 4
// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer. However,
//once the buffer becomes full, any new elements will displace the
// oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick.
// Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations,
//other than the method she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Answer

// .push will mutate the buffer arugment, whereas .concat will return a new string.


// Question 5
// What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.999999
console.log(0.3 + 0.6 === 0.9); // false

// Don't look at the solution before you answer.

// Answer
// The answers are not as you'd expect due to JavaScript using floating point numbers.


// Question 6
// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

// Answer

// NaN cannot be used with a comparator.


// Bonus:

// How can you reliably test if a value is NaN?

// Answer

Number.isNan(number);


// Question 7
// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// Answer
34; //


// Question 8
// One day, Spot was playing with the Munster family's home computer,
// and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail.
// Did the family's data get ransacked? Why or why not?

// The data is gone as the argument was passed by reference.

//Spot's demoObject starts off pointing to the munsters object.
// His program could replace that with some other object,
// and the family's data would be safe.

// However, in this case, the program doesn't reassign demoObject; it just uses it, as-is.
// Thus, the object that gets changed by the function is the munsters object.


// Question 9

// Method calls can take expressions as arguments. Suppose we define a function called
// rps as follows, which follows the classic rules of the rock-paper-scissors game,
// but with a slight twist: in the event of a tie,
// it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What is the result of the following call?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Answer
"Paper"; // Evaluated from outside-in.


// Question 10
// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());

// Answer
"no";
// The value returned from the foo function will always be "yes" ,
// and "yes" === "no" will be false.