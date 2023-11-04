"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
// you can use reserved keyword like if ,const,nummber
// const interface = "Audio";
// const private = 534;

///////////////////////////////
// Functions /////////////
////////////////////////////////////
//also called function declarations
function logger() {
  console.log("My name is Aditi.");
}

// calling / running / invoking function //
logger();
logger();
logger();

function loger() {
  console.log("My name is Adt.");
}
loger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 3));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);

//function declaration
function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;  /// or simplified version
  return 2037 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age1, age2);

//////////////////////////////////////
//Arrow functions////////
//////////////////////////////////
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}; // funtion declaration
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1970);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years !`;
};
console.log(yearsUntilRetirement(1980, "Shweta"));
console.log(yearsUntilRetirement(1999, "Aditi"));
console.log(yearsUntilRetirement(1993, "Aditya"));


////////////////////////////////////////
///functions calling other functions//////
//////////////////////////////////////////
const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(5, 4));
console.log(fruitProcessor(2, 9));
console.log(fruitProcessor(6, 3));

////////////////////////////////////////////
///arrow function
///////////////////////////////////////////
const yearsUntilRetirement = (birthYear, firstName) 
=> {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years !`;
};
////////////////////////////////////////////
/// convert to  function
///////////////////////////////////////////
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years !`;
};
////////////////////////////////////////////
/// function calling function
///////////////////////////////////////////
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years !`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  // return retirement;
  return `${firstName} retires in ${retirement} years !`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
 
//////////////////////////////////////////////////
//// ARRAYS ////////////////////////////////////
////////////////////////////////////////////////
const friend1 = "Athistha";
const friend3 = "Anchal";
const friend2 = "Shreeja";

const friends = ["Athistha", "Shreeja", "Anchal"];
console.log(friends);

const y = [1991, 1993, 1994, 1997, 1998, 1999];
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(y.length);

console.log(friends[friends.length - 1]);
friends[2] = "Saloni";
console.log(friends);
// friends = ["Bob", "Jack"]; /// cant do this

const firstName = "Aditi";
const aditi = [firstName, "Jaiswal", 2024 - 1999, "learning coding", friends];
console.log(aditi);
console.log(aditi.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years); ////cant do this
// console.log(calcAge(years)); ///cant do this

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//////////////////////////////////////////////////
////Basic ARRAY operation [methods] ////////////////////////////////////
////////////////////////////////////////////////
// Add elements
const friends = ["Athistha", "Shreeja", "Anchal"];
const newLenth = friends.push("Siddhi");
console.log(friends);
console.log(friends.length);

friends.unshift("Himani");
console.log(friends);
friends.unshift("Kirti");
console.log(friends);

//remove elements
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);
console.log(friends.indexOf("Shreeja"));
console.log(friends.indexOf("Anchal"));

console.log(friends.includes("Himani"));
console.log(friends.includes("Anchal"));
friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Anchal")) {
  console.log("You have a friend called Anchal.");
} else if (friends.includes("Himani")) {
  console.log("You have a friend called Himani.");
}
//////////////////////////////////////////////////
//// OBJECTS ////////////////////////////////////
/////////////////////////////////////////////
const aditiArray = [
  "Aditi",
  "Jaiswal",
  2037 - 1999,
  "Learning coding",
  ["Athistha", "Shreeja", "Anchal"],
];

const aditi = {
  firstName: "Aditi",
  lastName: "Jaiswal",
  age: 2037 - 1999,
  learning: "learning coding",
  friends: ["Athistha", "Shreeja", "Anchal"],
};
console.log(aditi);

//////////////////////////////////////////////////
/// DOT AND BRACKET NOTATION/////////////////////////
/////////////////////////////////////////////
//dot notation
console.log(aditi.lastName);
console.log(aditi.learning);
//bracket notation
console.log(aditi["age"]);
console.log(aditi["firstName"]);
const nameKey = "Name";
console.log(aditi["first" + nameKey]);

//cant do
// console.log(jonas."first" + nameKey);
console.log(aditi["last" + nameKey]);

//use of bracket notation
// const interestedIn = prompt(
//   "What do you want to know about Aditi ? \n\
// Choose between firstName , lastName , age , learning and friends..."
// );
// console.log(aditi.interestedIn); // this wont
// console.log(aditi[interestedIn]);// this will work

// if (aditi[interestedIn]) {
  //   console.log(aditi[interestedIn]);
  // } else {
    //   console.log(
//     "Wrong request! Choose between firstName , lastName , age , learning and friends..."
//   );
// }

///dot and bracket notation to add new property to objects
aditi.location = "Kolkata, West Bengal , India ";
aditi["twitter"] = "@jaiswal_adt";
console.log(aditi);

///challenge ///
console.log(
  `${aditi.firstName} has ${aditi.friends.length} friends and her best friend is ${aditi.friends[1]}`
  );

  //////////////////////////////////////////////
  ///object methods/////////////////////////
  //////////////////////////////////////////
  const aditi = {
    firstName: "Aditi",
    lastName: "Jaiswal",
    birthYear: 1999,
    learning: "student learning coding",
    friends: ["Athistha", "Shreeja", "Anchal"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.learning
    } and She has ${this.hasDriversLicense ? "a" : "no"} driver's licence. `;
  },
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },  // OR
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },   /// OR
};
console.log(aditi.calcAge());
// console.log(aditi["calcAge"](1991));
console.log(aditi.age);

// chalenge
console.log(aditi.getSummary());
///////////////////////////////////////
// ITERATION _ THE FOR LOOP ///////////////////
////////////////////////////////////////////////
// console.log("lifting weights repetition 1 🏋️‍♀️");
// console.log("lifting weights repetition 2 🏋️‍♀️");
// console.log("lifting weights repetition 3 🏋️‍♀️");
// console.log("lifting weights repetition 4 🏋️‍♀️");
// console.log("lifting weights repetition 5 🏋️‍♀️");
// console.log("lifting weights repetition 6 🏋️‍♀️");
// console.log("lifting weights repetition 7 🏋️‍♀️");
// console.log("lifting weights repetition 8 🏋️‍♀️");
// console.log("lifting weights repetition 9 🏋️‍♀️");
// console.log("lifting weights repetition 10 🏋️‍♀️");
// console.log("lifting weights repetition 11 🏋️‍♀️");

for (let rep = 1; rep <= 10; rep++) {
  // console.log("lifting weights repetition 1 🏋️‍♀️");
  console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////////////
// looping arrays ,breaking and continuing //////////
////////////////////////////////////////////////
const aditi = [
  "Aditi",
  "Jaiswal",
  2037 - 1999,
  "Learning coding",
  ["Athistha", "Shreeja", "Anchal"],
  true,
];

const types = [];

// console.log(aditi[0])
// console.log(aditi[1])
// console.log(aditi[2])
// ...
// console.log(aditi[4])
// aditi[5 does not exist]

for (let i = 0; i < aditi.length; i++) {
  //reading from jonas array
  console.log(aditi[i], typeof aditi[i]);

  //filling type arrays
  // types[i] = typeof aditi[i];
  types.push(typeof aditi[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break
console.log("---- ONLY STRINGS ----");
for (let i = 0; i < aditi.length; i++) {
  if (typeof aditi[i] !== "string") continue;
  console.log(aditi[i], typeof aditi[i]);
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < aditi.length; i++) {
  if (typeof aditi[i] === "number") break;
  console.log(aditi[i], typeof aditi[i]);
}
///////////////////////////////////////////
///LOOPING BACKWARDS AND LOOPS IN LOOPS
///////////////////////////////////////////

// 0, 1, 2, 3, .......4
// 4, 3, ............0
for (let i = aditi.length; i >= 0; i--) {
  console.log(i, aditi[i], typeof aditi[i]);
}

///loop imside of a loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-- Starting exercise ${exercise} --`);
  
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

///////////////////////////////////////////////
/// THE WHILE LOOP ////////////////////////
///////////////////////////////////////////////

for (let rep = 1; rep <= 10; rep++) {
  // console.log("lifting weights repetition 1 🏋️‍♀️");
  console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end ...`);
  }
}
*/
