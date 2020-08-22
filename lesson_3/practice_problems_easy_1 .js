// Question 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Answer
// No, it'll create a new index (at [6]) and assign it a value.

// Bonus

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// Answer
// It'll return 'undefined', but the slot is empty.


// Question 2
// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// Answer

str1.endsWith("!"); // true
str2.endsWith("!"); // false


// Question 3
// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Answer

ages.hasOwnProperty('Spot');


// Question 4
// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();


// Question 5
// What will the following code output?

console.log(false == '0');
console.log(false === '0');

// Answer
// true
// false


// Question 6
// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

// Answer

Object.assign(ages, additionalAges);


// Question 7
// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// Answer

str1.includes('Dino');
str2.includes('Dino');


// Question 8
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Answer

flintstones.push('Dino');


// Question 9
// In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.push("Dino", "Hoppy");


// Question 10
// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the 
// beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// Answer

advice.slice(0, advice.indexOf('house'));