console.log('Hello');

// Basics of JavaScript

/*
    MultiLine Comment in JavaScript
    -- Variable Declarations in JavaScript --
    Primitive Types: Strings, Numbers, Booleans, Undefined, Null
    Objects: Objects, Arrays, Functions
    Control Flow
*/


// String Declaration
var myName = 'Brian';
console.log(myName);
console.log(typeof (myName));


// Strings can be delimited by '', "", or ``. Tick marks (``) have a special behavior to format
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);


var age;
console.log(age);
console.log(typeof (age));

// Integer
age = 22
console.log(age);
console.log(typeof (age));

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof (pi));


// Booleans
var someBool = true;
var someOtherBool = false;

console.log(someBool, someOtherBool);
console.log(typeof (someBool));


// Undefined
var something;
console.log(something);
console.log(typeof (something));


// Null
var someNull = null;
console.log(someNull);
console.log(typeof (someNull));



// Object
var person = {
  first: "Brian",
  last: 'Stanton',
  hometown: 'Chicago'
}
console.log(person);
console.log(typeof (person));

// Bracket Notation
console.log(`My last name is ${person['last']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);


// Array
var myArray = ['Hello', 2, 3, 4, 5]
console.log(myArray);
console.log(typeof (myArray));

// Arrays are indexable
console.log(myArray[3]);

// Arrays have a length attribute/property
console.log(myArray.length)

var meisme = {
  first: 'i'
}

// Objects and Arrays
var person2 = {
  first: 'Robert',
  last: 'Smith',
  languages: ['Python', 'JavaScript']
}

console.log(`Today we are discussing ${person2.languages[1]}`);

var myPeople = [person, person2];

console.log(myPeople);
console.log(myPeople[0].first);


// SCOPING
// var vs let - var is global-scoped, let is block-scoped

let adult = true;
adult = false;

// let myCity = 'Chicago';
var color = 'Green';

if (adult) {
  var color = 'Blue';
  console.log(1, color);
}

console.log(2, color);


// const - similar to let (block-scoped) - needs a value when declared - cannot be reassigned
const myBirthday = true;
let ageOfPerson = 33;

if (myBirthday) {
  const myFavColor = 'Orange';
  ageOfPerson = ageOfPerson + 1;
  console.log(ageOfPerson);
  // myBirthday = false; // Error because myBirthday declared with const so cannot be reassigned
}

// console.log(myFavColor); // UncaughtReference - myFavColor is scoped to if block


// const with objects
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
console.log(cities);

cities[4] = 'Denver';

console.log(cities);

// cities = ['Austin', 'Portland']
// console.log(cities);

const someObj = {
  abc: '123'
}

someObj.abc = '321';
console.log(someObj);

// someObj = {cba: '123'};


console.clear();


///////////////////////////
// BASIC MATH OPERATIONS //
///////////////////////////


// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; //sum = sum + 5
console.log(sum);
sum++; // sum = sum + 1
console.log(sum);

// Subtraction
let diff = 5 - 5;
console.log(diff);
diff -= 5;
console.log(diff);
diff--; // diff = diff - 1
console.log(diff);

// Multiplication
let prod = 5 * 5;
console.log(prod);
prod *= 5;
console.log(prod);

// Division
let quotient = 25 / 5;
console.log(quotient);
quotient /= 5;
console.log(quotient);

// Exponents
let square = 5 ** 2;
console.log(square);
square **= 2;
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2;
console.log(remainder);


// Floor Division
let floor = Math.floor(19 / 4);
console.log(floor);


let myString = 'My age is ';
let myStringAge = 45;

let addedString = myString + myStringAge;
console.log(addedString);

let crazyStuff = square + '4';
console.log(crazyStuff); // undefined, 629, 6254, 625+4
console.log(typeof (crazyStuff));

let example = 123 + '456'
console.log(example);

let moreCrazyStuff = square - '4';
console.log(moreCrazyStuff); // undefined, 621, 6251, TypeError


////////////////////////////
// JavaScript Comparisons //
////////////////////////////
console.clear();

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');

console.log(1 == true);


console.log('10' > 5);

let x = '10';
let y = '9';

console.log(x > y); // WATCH OUT FOR COMPARISON OF 2 STRING NUMBERS -- WILL NOT CONVERT TYPES AND INSTEAD COMPARE ALPHABETICALLY


let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2); // false, object comparison is only reference!


let newArr = ['cat', 'dog', 'pig'];

let newerArr = newArr;

console.log(newArr === newerArr);
console.log(newArr == ['cat', 'dog', 'pig']);
console.log(newerArr == ['cat', 'dog', 'pig']);


// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===),
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)
console.clear();


// CONTROL FLOW
let newNumber = 12;

console.log('Begin');
if (newNumber > 65) {
  console.log('Senior')
} else if (newNumber > 30) {
  console.log('Adult')
} else {
  console.log('Child')
}
console.log('End');

// Ternary Operator - (condition) ? value if true : value if false
let ageGroup = (newNumber > 65) ? 'Senior' : 'Adult';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 18) ? 'Adult' : 'Child';
console.log(ageGroup2);

// && = and
// || = or
let personAge = 35
if (personAge > 18 && personAge < 40) {
  console.log('Young Adult')
}
console.clear()



/*
    JavaScript Loops
    for, for...of, for...in, while, do while
*/

// Standard for loop
// for (counter; expression/condition; incrementation/decrementation){ code to execute each loop};

console.log('Loop Started')

for (let i = 0; i >= -20; i--) {
  console.log(i)
};

console.log('Loop Ended')



// Looping through an Array
console.log(cities);

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i])
}

// for...of
let planets = ['Mars', 'Jupiter', 'Earth', 'Mercury', 'Saturn'];

for (let p of planets) {
  console.log(p);
}

// for...in
// Looping through an object
teams = {
  mlb: 'White Sox',
  nba: 'Bulls',
  nfl: 'Bears',
  nhl: 'Blackhawks'
}

for (let x in teams) {
  console.log(x);
  console.log(teams[x])
};


// While loop
// while (condition){code to execute while condition is true}
let num1 = 1

while (num1 < 25) {
  console.log(num1);
  num1 += 5
}

// Do While Loop ... Do the first portion AT LEASE ONCE
// If the while condition is still met, continue the while loop until condition is false
// do {code to execute} while (condition)
let k = 0;

do {
  console.log(k);
  k++
} while (k > 10);


// Loops with conditionals
for (let p of planets) {
  if (p == 'Earth') {
    console.log('Nice place to live...for now')
  } else {
    console.log('Uninhabitable')
  }
}

console.clear();

// JavaScript User Defined Functions

// Regular Named Function

function addNums() {
  let num1 = 4;
  let num2 = 5;

  return num1 + num2
}

console.log(addNums())

// Regular Named Function with Parameters
function addNums2(num1, num2) {
  return num1 + num2
}

console.log(addNums2(10, 5));


// Variable Named Function
let addNums3 = function () {
  let num1 = 100;
  let num2 = 200;
  return num1 + num2
}

console.log(addNums3());

// Variable Named Function with Parameters
let addNums4 = function (num1, num2) {
  return num1 + num2
}


console.log(addNums4(44, 33));


// Arrow Functions
// () => {} * return and {} are optional if one liner
let myFunc = (num1, num2) => num1 + num2

console.log(myFunc(10, 15));


// If you have 1 (and only 1) parameter, the () are not necessary

let greetPerson = person => `Hello ${person}`

// No parameters
let noParams = () => { return 5 + 10 }

console.log(noParams());


let findMaxNum = (arr) => {
  let max = arr[0]
  for (let num of arr) {
    if (num > max) {
      max = num
    }
  }
  return max
}


console.log(findMaxNum([5, 7, 2, 8, 9, 1, 2]))
