//? Practice Problem 1
// How would you order the following array of number strings by descending
// numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

//* Answer
arr.sort((a, b) => Number(b) - Number(a));


//? Practice Problem 2
// How would you order the following array of objects based on the year of
// publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

//* Answer
books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});


//? Practice Problem 3
// For each of these collection objects, demonstrate how you would access the
// letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

//* Answer
console.log(arr1[2][1][3]);

//?
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

//* Answer
console.log(arr2[1].third[0]);

//?
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

//* Answer
console.log(arr3[2].third[0][0]);

//?
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

//* Answer
console.log(obj1.b[1]);

//?
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

//* Answer
console.log(Object.keys(obj2.third)[0]);


//? Practice Problem 4
// For each of these collection objects, demonstrate how you would change the
//  value 3 to 4.

//?
let arr1 = [1, [2, 3], 4];

//* Answer
arr1[1][1] = 4;

//?
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

//* Answer
arr2[2] = 4;

//?
let obj1 = { first: [1, 2, [3]] };

//* Answer
obj1.first[2][0] = 4;

//?
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

//* Answer
obj2.a.a[2] = 4;


//? Practice Problem 5
// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

//* Answer
let munsterDetails = Object.values(munsters);
let totalMaleAge = 0;

munsterDetails.forEach(munster => {
  if (munster.gender === 'male') {
    totalMaleAge += munster.age;
  }
});

console.log(totalMaleAge);

// or

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444


//? Practice Problem 6
// One of the most frequently used real-world string operations is that of
// "string substitution," where we take a hard-coded string and modify it
// with various parameters from our program.

// Given this previously seen family object, print the name, age, and
// gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

//* Answer
let munsterNames = Object.keys(munsters);

munsterNames.forEach(munster => {
  console.log(
    `${munster} is a ${munsters[munster].age}-year-old ${munsters[munster].gender}.`);
});

// or

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});


//? Practice Problem 7
// Given the following code, what will the final values of a and b be?
// Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];
// arr = [2, [5, 8]];

console.log(arr[0] += 2);

//* Answer
// 4

//?
console.log(arr[1][0] -= a);

//* Answer
// 3


//? Practice Problem 8
// Using the forEach method, write some code to output all
// vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

//* Answer
let vowels = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});


//? Practice Problem 9
// Given the following data structure, return a new array with the
// same structure, but with the subarrays ordered -- alphabetically or
// numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

//* Answer
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(arr);


//? Practice Problem 10
// Perform the same transformation of sorting the subarrays we did in
// the previous exercise with one difference;
// sort the elements in descending order.

//* Answer
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArray = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().reverse().sort((a, b) => b - a);
  }
});

console.log(newArray);

// or

arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});


//? Practice Problem 11
// Given the following data structure, use the map method to return a new
// array identical in structure to the original but, with each the number
// incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//* Answer
arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

console.log(newArray);
console.log(arr);


//? Practice Problem 12
// Given the following data structure, use a combination of methods,
// including filter, to return a new array identical in structure to the
// original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

//* Answer
let multiplesOf3 = arr.map(obj => {
  return obj.filter(num => num % 3 === 0);
});

console.log(multiplesOf3);


//? Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays
// are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

//+ Problem:

// Input: Nested array.
// Output: Nested array.

// Rules:
//   Explicit Requirements:
//      Nested arrays should be sorted by the sum of the odd values.
//   Implicit Requirements:
//      Even numbers should not be summed.


//+ Examples:

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


//+ Data Structure:

// Nested Array

//+ Algorithm:

// Create a sort on the array with 'a', 'b' parameters.
// Initialise a variable to hold the odd sum of 'a'.
// filter 'a' so only odd numbers are returned.
// reduce sum of values in sub-array
// Initialise a variable to hold the odd sum of 'b'.
// filter 'b' so only odd numbers are returned.
// reduce sum of values in sub-array
// return 'a' - 'b'.

//+ Code:

//* Answer
arr.sort((a, b) => {
  let oddSumA =
     a.filter(num => num % 2 === 1)
       .reduce((sum, next) => sum + next);
  let oddSumB =
     b.filter(num => num % 2 === 1)
       .reduce((sum, next) => sum + next);
  return oddSumA - oddSumB;
});

console.log(arr);


//? Practice Problem 14
// Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//+ Problem:

// - Given the above data structure write some code to return an array
//   containing the colors of the fruits and the sizes of the vegetables.
//   The sizes should be uppercase, and the colors should be capitalized.

// Input:
//     - Object with nested array
// Output:
//     - An array with the colours of the fruits and sizes of the vetetables
//     - Colours capitalised
//     - Sizes to uppercase
// Rules:
//    Explicit Requirements:
//     - Return an array
//    Implicit Requirements:
//     - Ability to support multiple color values

//+ Examples:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//+ Data Structure:

// - Nested array

//+ Algorithm:

// - Create function to aid in capitalisation
// - Create output variable
// - Iterate over object elements (map)
//    - If value.type === fruit => return colors with elements capitalised
//    - If object.type === vegetable => return size toUpperCase

// - Return output variable

//+ Code:

//* Answer
function capitalise(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function fruitAndVeg(obj) {
  let output = Object.values(obj).map(value => {
    if (value.type === 'fruit') {
      return value['colors'].map(char => capitalise(char));
    } else {
      return value['size'].toUpperCase();
    }
  });
  return output;
}

console.log(fruitAndVeg(obj));


//? Practice Problem 15
// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even.

//* Answer
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});


//? Practice Problem 16
// Given the following data structure, write some code that returns an object
// where the key is the first item in each subarray,
// and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//* Answer
let object = {};
arr.forEach((subArray => {
  let key = subArray[0];
  let value = subArray[1];
  object[key] = value;
}));

console.log(object);


//? Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify items, even
// when some of those items were created on a different server or by a different
// application. That is, without any synchronization, two or more computer
// systems can create new items and label them with a UUID with no significant
// risk of stepping on each other's toes. It accomplishes this feat through
// massive randomization. The number of possible UUID values is approximately
// 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly
// small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
// letters a-f) represented as a string. The value is typically broken into 5
// sections in an 8-4-4-4-12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

//* Answer

function UUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let blank = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
  let uuid = blank.split('');
  for (let index = 0; index < uuid.length; index++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomIndex];
    uuid[index] = uuid[index].replace(/x/g, randomChar);
  }
  console.log(uuid.join(''));
}

UUID();

// or

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}