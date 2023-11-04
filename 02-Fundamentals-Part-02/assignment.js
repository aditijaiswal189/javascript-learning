"use strict";

///////////////////
///functions///////////
///////////////////////
/*
function describeCountry(country, population, capitalCity) {
  const outputCountry = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return outputCountry;
}
describeCountry("Finland", 6, "Helsinki");
console.log(describeCountry("Finland", 6, "Helsinki"));

const indiaOutput = describeCountry("India", 1340, "New Delhi");
console.log(indiaOutput);

const nepalOutput = describeCountry("Nepal", 13, "Kathmandu");
console.log(nepalOutput);

const chinaOutput = describeCountry("China", 1256, "Beijing");
console.log(chinaOutput);

/////////////////////////////////
///function declaration /////////
/////////////////////////////////////
function percentageOfWorld1(country, population) {
  const country1 = `${country} has ${population} million people, so its about ${
    population / 79
  }% of the world population`;
  return country1;
}

const chinaPopulation = percentageOfWorld1("China", 1441);
console.log(chinaPopulation);
const finlandPopulation = percentageOfWorld1("Finland", 6);
console.log(finlandPopulation);
const indiaPopulation = percentageOfWorld1("India", 1340);
console.log(indiaPopulation);

////function expression
const percentageOfWorld2 = function (country, population) {
  const country1 = `${country} has ${population} million people, so its about ${
    population / 79
  }% of the world population`;
  return country1;
};

const chinaPopulation2 = percentageOfWorld2("China", 1256);
console.log(chinaPopulation2);
const finlandPopulation2 = percentageOfWorld2("Finland", 8);
console.log(finlandPopulation2);
const indiaPopulation2 = percentageOfWorld2("India", 1346);
console.log(indiaPopulation2);

/////////////////////////////////////
///arrow  functions/////////////////
//////////////////////////////////
const percentageOfWorld3 = (country3, population3) => {
  return `${country3} has ${population3} million people, so its about ${
    population3 / 79
  }
% of the world population`;
};
console.log(percentageOfWorld3("India", 1385));
console.log(percentageOfWorld3("China", 1100));
console.log(percentageOfWorld3("Russia", 800));

////////////////////////////////////////
///functions calling other functions//////
//////////////////////////////////////////
const percentageOfWorld4 = function (population) {
  return population / 79;
};

const describePopulation = function (country, population) {
  const populationPercentage = percentageOfWorld4(population);
  return ` ${country} has ${population} million people , which is about ${populationPercentage} of the world`;
};
console.log(describePopulation("India", 1340));
console.log(describePopulation("Greece", 125));
console.log(describePopulation("Portugal", 11));
//////////////////////////////////////
///Arrays intro //////////////////////
/////////////////////////////////////
const populations = [1234, 115, 1890, 1040];
console.log(populations);
console.log(populations.length);

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}
function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const percent1 = percentageOfWorld1(populations[0]);
console.log(percent1);

const percent2 = percentageOfWorld1(populations[1]);
console.log(percent2);

const percent3 = percentageOfWorld1(populations[populations.length - 2]);
console.log(percent3);

const percent4 = percentageOfWorld1(populations[populations.length - 1]);
console.log(percent4);

const percentages = [percent1, percent2, percent3, percent4];
console.log(percentages);

/////////////////////////////////////////
//basic array operations/////////////
///////////////////////////////////////
const neighbours = ["Pakistan", "Nepal", "Bhutan", "Bangladesh"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Probably  a central European Country :D");
} else {
  console.log("Probably not a central European Country :D");
}

console.log(neighbours.indexOf("Nepal"));
neighbours[1] = "Republic of Nepal";
console.log(neighbours);

////////////////////////////////////////
////OBJECTS/////////////////////
///////////////////////////////////
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1346,
  neighbours: [
    "Pakistan",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Myanmar",
    "Srilanka",
    "China",
  ],
  isIsland: false,
  describe: function () {
    return `${this.country} has ${this.population} million ${
      this.language
    }-speaking people, ${
      myCountry.neighbours.length
    } neighbouring countries, a capital ${myCountry["capital"]} and ${
      this.isIsland ? "is" : "is not"
    } an island nation.`;
  },
};
console.log(myCountry);
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital ${myCountry["capital"]}.`
  );
  myCountry.population = myCountry.population + 2;
  console.log(myCountry.population);
  
  myCountry["population"] = myCountry.population - 4;
  console.log(myCountry.population);
  console.log(myCountry.describe());
  */
/////////////////////////////////////////////
/// ITERATION : the for loop ///////////////////
///////////////////////////////////////////
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

/////////////////////////////////////////////
/// LOOPING ARRAYS< BREAKING AND CONTINUING //
///////////////////////////////////////////
const populations = [1234, 115, 1890, 1040];
// console.log(populations);

// if (populations.length === 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// function percentageOfWorld1(population) {
//   return (population * 100) / 7900;
// }
// const percent1 = percentageOfWorld1(populations[0]);
// console.log(percent1);
// const percent2 = percentageOfWorld1(populations[1]);
// console.log(percent2);
// const percent3 = percentageOfWorld1(populations[populations.length - 2]);
// console.log(percent3);
// const percent4 = percentageOfWorld1(populations[populations.length - 1]);
// console.log(percent4);

// const percentages = [percent1, percent2, percent3, percent4];
// console.log(percentages);

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  console.log(populations[i]);
  percentages2[i] = (populations[i] * 100) / 7900;
}
console.log(percentages2);

////looping backwards and loops in loop

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
console.log(listOfNeighbours[0]);

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const percentages3 = [];
let rep = 0;
while (rep < populations.length) {
  percentages3[rep] = (populations[rep] * 100) / 7900;
  rep++;
}
console.log(percentages3);
