/*
let js = "amazing";

console.log(28 + 34 - 10 + 23);
console.log("Aditi");
console.log("1999");

let firstName = "Twinkle";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//////////////////////////////////////////////////
//variable naming conventions//////////////////
////////////////////////////////////////////////

let jonasa_matilda = "JM";
let $function = 27;

let dew4finger = "gig";
console.log(dew4finger);

let person = "Riya";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "teacher";

////////////////////////////////////////////////////
//Boolean//////
///////////////////////////////////////////
true;
console.log(true);
//or
let javascrptIsFun = true;
console.log(javascrptIsFun);

// console.log(typeof true);
console.log(typeof javascrptIsFun);
// console.log(typeof 26);
// console.log(typeof "Aditi");

javascrptIsFun = "YES!";
console.log(javascrptIsFun);
console.log(typeof javascrptIsFun);

// Undefined///////////
let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 24;
age = 25;


////////////////////////////
//////let, const, var//////////////
/////////////////////////////

const birthYear = 1999;
// birthYear = 1998;
console.log(birthYear);

var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

// dontuse without a variable although it works
lastName = "Jaiswal";
console.log(lastName);


// /////////////////////
///basic operators/////////////////////
////////////////////////////////////
// const ageAditi = 2030 - 1999;
// console.log(ageAditi);
// const ageVidushi = 2030 - 2018;
// console.log(ageVidushi);
// console.log(ageAditi, ageVidushi);

//Maths Operator
const now = 2037;
const ageAditi = now - 1999;
console.log(ageAditi);
const ageVidushi = now - 2018;
console.log(ageVidushi);
console.log(ageAditi, ageVidushi);

console.log(ageAditi * 2, ageAditi / 10, 2 ** 4);
// 2 ** 4 means 2 to the power of 4 = 2*2*2*2  ///

const firstName = "Aditi";
const lastName = "Jaiswal";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 15; //25
console.log(x);
x += 10; // x = x + 10
console.log(x);
x *= 10; // x = x * 10
console.log(x);
x++; // x = x + 1
console.log(x);
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageAditi > ageVidushi); // > , < , >= , <=
console.log(now - 1999 > now - 2018);
console.log(ageVidushi > ageAditi);
console.log(ageVidushi >= 18);

const isFullAge = ageVidushi >= 18;
const now = 2037;
const ageAditi = now - 1999;
console.log(ageAditi);
const ageVidushi = now - 2018;
console.log(ageVidushi);
console.log(now - 1999 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageAditi + ageVidushi) / 2;
console.log(ageAditi, ageVidushi, averageAge);


////////////////////////////////
//coding challenge #1
////////////////////////////////
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/////////////////////////////////////////
//strings and template literals/////
///////////////////////////////////////

const firstName = "Aditi";
const job = "coder";
const birthYear = "1999";
const year = 2037;

//strings
const aditi =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
  console.log(aditi);

  console.log(
    "String with \n\
    multiple \n\
    lines"
    );
    
//template literals
const aditiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(aditiNew);
    
 console.log(`Just a regular string...`);
    
 console.log(`String with
    multiple
    lines.`);
    
    
    ////////////////////////////////
    // taking decisions :if/else statements//
    /////////////////////////////////////////
    
    // const age = 19;
    // const isOldEnough = age >= 18;
    // if (isOldEnough) {
      //   console.log("Sarah can start driving licence 🚗");
      // }
      //or this same
      const age = 11;
      
      if (age >= 18) {
        console.log("Sarah can start driving licence 🚗");
      } else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
}

//control structure
// if(){
  //} else{
    //}
    
    const birthYear = 1999;
    let century;
    if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////
//coding challenge #2
///////////////////////////
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
console.log(BMIJohn);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI is higher than Mark's!`);
} else {
  console.log(`Mark's BMI is higher than John's!`);
}

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
    );
  } else {
    console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
}
////////////////////////////////
//type conversion and coercion//
////////////////////////////////////

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Aditi")); //invalid number-NaN
console.log(typeof NaN);

console.log(String(25), 23);

//type coercion
console.log("I am " + 24 + " years old.");
console.log("I am " + "24" + " years old.");
console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("200" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

let m = 2 + 3 + 4 + "5";
console.log(m);

let d = "10" - "4" - "3" - 2 + "5";
console.log(d);

/////////////////////////////////////
////truthy and falsy values////
//////////////////////////////////////

// 5 FALSY VALUES: 0 , '' , undefined , null , NaN ////////
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log(Boolean("Aditi"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
let height;
if (height) {
  console.log("YAY! Height is defined :)");
} else {
  console.log("Height is UNDEFINED :(");
}
/////////////////////////////////////
////equality operators///////////////
//////////////////////////////////////
const age = 18;
if (age === 18) console.log(" You just became an adult :D(strict)");
if (age == 18) console.log(" You just became an adult :D(loose)");

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 28) {
  //28 ==28
  console.log("Cool! 28 is an amazing number!");
}

const favourit = Number(prompt("What's your favourit number?"));
console.log(favourit);
console.log(typeof favourit);

if (favourit === 23) {
  //23 ===23
  console.log("Cool! 23 is an strong number!");
} else if (favourit === 5) {
  console.log("5 is also a cool number!");
} else if (favourit === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9 :(");
}

if (favourit !== 23) console.log("Why not 23?");
/////////////////////////////////////
////logic operators///////////////
//////////////////////////////////////
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
  //   console.log("Sarah is able to drive!");
  // } else {
    //   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
////////////////////////////////////////////////
//////////////coding challenge #3/////////////
////////////////////////////////////////////////
const dolphin1 = 96;
const dolphin2 = 108;
const dolphin3 = 89;
const scoreDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
const koala1 = 88;
const koala2 = 91;
const koala3 = 110;
const scoreKoalas = (koala1 + koala2 + koala3) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins == scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}
///////////bonus 1
const dolphin1 = 97;
const dolphin2 = 112;
const dolphin3 = 101;
const scoreDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
const koala1 = 109;
const koala2 = 95;
const koala3 = 123;
const scoreKoalas = (koala1 + koala2 + koala3) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
}
////Bonus 2
const dolphin1 = 97;
const dolphin2 = 112;
const dolphin3 = 81;
const scoreDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
const koala1 = 109;
const koala2 = 95;
const koala3 = 86;
const scoreKoalas = (koala1 + koala2 + koala3) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
  ) {
    console.log("Both win the trophy 🏆");
  } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy 🏆");
  } else {
    console.log("No one wins the trophy 😖");
  }
  ///////////////////////////////////////////
  ///////Switch statemment//////////
  //////////////////////////////////////
  
  const day = "sunday";
  switch (day) {
    case "monday": //day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
    case "tuesday":
      console.log("Prepare theory videos");
      break;
      case "wednesday":
        case "thursday":
          console.log("Write code examples");
          break;
  case "friday":
    console.log("Record videos");
    break;
    case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
    default:
      console.log("Not a valid day !");
    }
    if (day === "monday") {
      console.log("Plan course structure");
      console.log("Go to coding meetup");
    } else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day !");
}

///////////////////////////////////////////
///////Statemment and expression//////////
//////////////////////////////////////
3 + 4;
1999;
true && false && !false;

if (27 > 10) {
  const str = "23 is bigger";
}
const me = "Aditi";
console.log(`I am ${2837 - 1999} years old ${me}`);

///////////////////////////////////////////
///////Conditional operator//////////
////////////////////////////////////

const age = 24;
 age >= 18
   ? console.log("I like to drink wine 🍷")
      : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷 " : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine 🍷 " : "water 💧"}`);
*/
////////////////////////////////////
// Coding challenge #4////
///////////////////////////////////
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
