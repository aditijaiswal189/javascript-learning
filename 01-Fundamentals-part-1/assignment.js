// /VALUES AND VARIABLES/
let country = "INDIA";
let continent = "ASIA";
let population = 1435;

console.log(country);
console.log(continent);
console.log(population);

//  DATA TYPES
// let isIsland = "Lakshadweep and Andaman Islands";
// console.log(isIsland);

let isIsland = false;
console.log(isIsland);
console.log(typeof isIsland);

// let language;

isIsland = "Andaman and Nicobar Islands";
console.log(isIsland);
console.log(typeof isIsland);
// console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// //////////////////////////////////
// let , const and var////////////
///////////////////////////////////

let language = "Hindi";
console.log(language);
const nationalSong = "Jana Gana Mana";
console.log(nationalSong);
// //////////////////////////////
// nationalSong = "hum";/////wont work/////

///////////////////////////////////////////
//Basic Operators//////////////
///////////////////////////////////////////

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);
console.log(population <= 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

/////////////////////////////////
//strings and template literals//
///////////////////////////////////

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/////////////////////////////////////
////if/else statement taking decision//
//////////////////////////////////////

if (population >= 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      33 - portugalPopulation
    } million below average. `
  );
}

/////////////////////////////////////
////type conversion and coercion //
//////////////////////////////////////
let q = "9" - "5";
console.log(q);
let w = "19" - "13" + "17";
console.log(w);
let e = "19" - "13" + 17;
console.log(e);
let a = "123" < 57;
console.log(a);
let s = 5 + 6 + "4" + 9 - 4 - 2;
console.log(s);

/////////////////////////////////////
// equality operators/////
/////////////////////////////////////
/*const numNeighbours = Number(
  prompt("How many neighbour coutries does your country have?")
  );
  if (numNeighbours === 1) {
    console.log("Only 1 border.");
  } else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}
/////////////////////////////////////
////logical operators///////////////
//////////////////////////////////////
*/
if (language === "English" && population < 50 && isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
/*
//////////////////////////////////////
const language = prompt("Which language does people in your country speak?");
if (language === "English" || language === "english") {
  //     this prompt will run only when user enter english otherwise flow will go to * see below where this single * is.
  const population = prompt("What is your country's population in million");

  if (population <= 50) {
    //          this prompt will run only when user enter population less than 50 or equal to 50 otherwise flow will go to ** see below where this  ** is.
    const isIsland = prompt("Is your county a Island?write yes or no.");
    if (isIsland === "Yes" || isIsland === "yes") {
      //             now if user enter yes this below console otherwise ***

      console.log("You should live in India");
    } else {
      //           here ***
      console.log("you should not live in India");
    }
  } else {
    //         Here **
    console.log("you should not live in India");
  }
} else {
  //     Here *
  console.log("you should not live in India");
}
*/
/////////////////////////////////////////
// const language = prompt("Which language does people in your country speak?");
// if (language === "english") {
//   console.log("Check other criteria.");
// } else if (language === "English") {
//   console.log("Check other criteria.");
// } else {
//   console.log("India does not meet your criteria :(");
// }

// const population = prompt("What is your country's population?");
// if (population <= 50) {
//   console.log("Check other criteria.");
// } else {
//   console.log("India does not meet your criteria :(");
// }

// const island = prompt(
//   "Whether your country is an island or not(Type 'Yes' or 'No')?"
// );
// if (island === "Yes") {
//   console.log("You should live in India :)");
// } else if (island === "No") {
//   console.log("India does not meet your criteria :(");
// } else if (island === "yes") {
//   console.log("You should live in India :)");
// } else if (island === "no") {
//   console.log("India does not meet your criteria :(");
// } else {
//   console.log("India does not meet your criteria :(");
// }

///////////////////////////////////////////
///////Switch statemment//////////
//////////////////////////////////////
language = "arabic";
console.log(language);
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers ");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
///////////////////////////////////////////
///////Conditional operator//////////
//////////////////////////////////////
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
