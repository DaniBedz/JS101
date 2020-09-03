//? Practice Problem 1
// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

//* Answer
// The return value [1, 2, 3] as .filter()performs selection
// based on truthiness. Therefore filter will return a new
// array containing all of the elements in the original array.


//? Practice Problem 2
// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

//* Answer
// The return value is "[undefined, undefined, undefined]" as .map() looks at
// the return value of the callback function.
// Each element in the original array is replaced by what the callback returns
// for that element. In this case, there's no explicit return statement in the
// callback function, which means that the callback returns undefined each time.


//? Practice Problem 3
// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

//* Answer
// The return value is [1, 4, 9] as there are no braces surrounding the arrow
// function, so JavaScript uses the computed value as the return value.


//? Practice Problem 4
// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

//* Answer
// The return value will be 11, as 'caterpillar' is destructively removed from
// the array and is the return value. 
// .length is then called on this return value.


//? Practice Problem 5
// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num *= 2;
});

//* Answer
// 2
// 4
// 6
// true

// 2, 4, 6 are the return values of the callback on each iteration.
// true is returned as every element returns a truthy value.


//? Practice Problem 6
// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

//* Answer
// .fill() is a desctrutive method as it modifies the original array.


//? Practice Problem 7
// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});


//* Answer
// [undefined, 'bear']
// undefined is returned as elem.length < 3 is false and is not returned.


//? Practice Problem 8
// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are
// the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//* Answer
let flinstonesObj = {};

flinstones.forEach((name, index) => {
  flinstonesObj[name] = index;
});


//? Practice Problem 9
// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//* Answer
Object.values(ages).reduce(agesSum, currentAge => agesSum + currentAge, 0); 

// or 

let totalAges = 0;
Object.vales(ages).forEach(age => totalAges += age);


//? Practice Problem 10
// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//* Answer
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10


//? Practice Problem 11
// Create an object that expresses the frequency with which each
// letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// * Answer
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

// or

let result = {};
for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}

console.log(result);