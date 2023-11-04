'use strict';

// Data needed for a later exercise


// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[weekdays.length - 2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ,${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
////////////////////////////////////////////////
// String method practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  // console.log(flight.split('_'));
  const [type, from, to, time] = flight.split(';')
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} ${time.replace(':', 'h')}`.padStart(45);
  console.log(output);
}


/////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);

  }

});






///////////////////////////////////
// Working with strings part:1

const airlines = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[0]);
console.log('B737'[2]);

console.log(airlines.length);
console.log(plane.length);
console.log('B737'.length);

console.log(airlines.indexOf('r'));
console.log(airlines.lastIndexOf('r'));
console.log(airlines.lastIndexOf('Portugal'));

console.log(airlines.slice(8));
console.log(airlines.slice(4));
console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(airlines.lastIndexOf(' ')));

console.log(airlines.slice(-5));
console.log(airlines.slice(0, -1));

const checkMiddleSeat = function (seat) {
  //B And E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky.');
};
checkMiddleSeat('11B');
checkMiddleSeat('1A');
checkMiddleSeat('32E');

console.log(new String('Aditi'));
console.log(typeof new String('Aditi'));
console.log(typeof new String('Aditi').slice(1));

////////////////////////////////////////////
// WOrking with Strings Part:2

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// Fix Capitalize in names
const passenger = 'aDItI'; // Jonas
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//PRACTICE
const passengerNameFunc = function (namePassenger) {
  const namePassengerLower = namePassenger.toLowerCase();
  const correctPassengerName = namePassengerLower[0].toUpperCase() + namePassengerLower.slice(1);
  return correctPassengerName;
}

console.log(passengerNameFunc('adiTIJAiswaL'));
console.log(passengerNameFunc('SUNITaJAiswaL'));
console.log(passengerNameFunc('viduSHIJAiSwaL'));

// Comparing email
const email = 'jaiswaladiti166@gmail.com';
const loginEmail = '        JaiswalAditi166@Gmail.com\n  ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//PRACTICE
const emailFunc = function (emailId) {
  const compare = 'aditijaiswal@gmail.com'
  const correctEmailId = emailId.toLowerCase().trim();

  return (compare === correctEmailId);
}

console.log(emailFunc('aDITIJAISWAL@gMAIL.COM'));
console.log(emailFunc('    aDitIJAISsWAL@gMAIL.COM'));
console.log(emailFunc('aDiTIJAISWaL@gMAIL.COM'));

// to replace parts of string
const priceGB = '288,97 €';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// regular expression
console.log(announcement.replace(/door/, 'gate'));

// BOoleans
const planes = 'Airbus A320 neo';
console.log(planes.includes('A'));
console.log(planes.includes('neo'));
console.log(planes.includes('Neo'));
console.log(planes.includes('Airbus'));
if (planes.startsWith('Airbus') && planes.endsWith('neo')) console.log('Part of the Airbus family');

// Practice examples
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board!');
  } else {
    console.log('Welcome Aboard.');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife.');
checkBaggage('Got some socks, camera and laptop.');
checkBaggage('I have a laptop, some food and a gun for protection.');
//////////////////////////////////////
// Working with Strings Part :3

//most powerful string method - split
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Aditi Jaiswal'.split(' '));
const [firstName, lastName] = 'Aditi Jaiswal'.split(' ');
const newName = (['Miss', firstName, lastName.toUpperCase()].join(' '));
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));

};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');


///Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '$'));
console.log('Jonas'.padStart(30, '*'));

// example
const maskCreditCard = function (number) {
  //const str = String();
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4335788266370651));
console.log(maskCreditCard(788937001));
console.log(maskCreditCard('28778993389056370057971'));


//Repeat
const message2 = 'Bad weather.. All departures Delayed ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${ n } planes in line ${ '✈'.repeat(n) } `);
};
planesInLine(2);
planesInLine(6);
planesInLine(12);

*/

///////////////////////////////////////////////////////
// CODING CHALLENGE #3
//////////////////////////////////////////////////////////
/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = ([...gameEvents.values()]);
console.log(new Set(events));

//2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const average = (90 / (gameEvents.size));
console.log(`An event happenend on average ${ average } minutes`);

// 4.
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${ key } : ${ value } `);
  } else {
    console.log(`[SECOND HALF] ${ key } : ${ value } `);
  }
}


*/

///////////////////////////////////////
// Maps : Iteration
/*

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, ' Correct 🎉'],
  [false, 'Try again! 😔 '],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${ key } : ${ value } `);
};

const answer = Number(prompt('Your answer?'));
console.log(answer);
if (answer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
};
//////////////////////////////////////
// Maps : Fundamental
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon , Portugal'));

console.log(rest);

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', '23').set(true, 'We are open :D').set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(false));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));
rest.get(document.querySelector('h1'), 'Heading');
console.log(rest);

////////////////////////////////////
// Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Aditi'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread')
ordersSet.add('Bread')
console.log(ordersSet);
ordersSet.delete('Garlic Bread')
console.log(ordersSet);
// console.log(ordersSet[0]); // can't do
// ordersSet.clear(); // it will clear the set
console.log(ordersSet);

for (const order of ordersSet) console.log(order);


/// Example
const staff = (['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Waiter']);
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Waiter']).size);
console.log(new Set('aditijaiswal').size);

///////////////////////////////////////
// Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
      Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

      BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

      GOOD LUCK 😀
      */
/*
const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
],
[
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};

///// 1.
const values = Object.values(game.scored);
for (const str of game.scored.entries()) {
console.log(`Goal ${ str[0] + 1 } : ${ values[str[0]] } `);
};
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${ i + 1 }: ${ player } `);

//// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
average += odd;

average /= odds.length;
console.log(average);

// 3.

for (const [team, odd] of Object.entries(game.odds)) {
const teamStr = team === 'x' ? 'draw' : `victory ${ game[team] } `;
console.log(`Odd of ${ teamStr } : ${ odd } `);
};



////////////////////////////////////////////
// Looping objects : object keys,values and entries

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${ properties.length } days: `;

for (const day of properties) {
openStr += `${ day }, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

//[key, values]
for (const [key, { open, close }] of entries) {
console.log(` On ${ key } we open at ${ open } and close at ${ close } `);
}



////////////////////////////////////////////
// OPTIONAL CHAINING (?)
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
console.log(day);
const open = restaurant.openingHours[day]?.open ?? 'closed';
console.log(`On ${ day }, we open at ${ open } `);
};

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesn\'t exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesn\'t exist');

// Arrays
const users = [{
name: 'Jonas',
email: 'hello@jonas.io',
}];
// const user = [];

console.log(users[0]?.name ?? 'user array empty');

//otherwise we would have to  write
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

////////////////////////////////////////////
// looping arrays : the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${ item[0] + 1 } : ${ item[1] } `);
// }

for (const [i, el] of menu.entries()) {
console.log(`${ i + 1 } : ${ el } `);
}

console.log([menu.entries()]);



///////////////////////////////////////
// Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
],
[
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},





const players1 = [game.players[0]];
const players2 = [game.players[1]];
console.log(...players1);
console.log(...players2);

const [goalkeeper1, ...fieldPlayers1] = [...game.players[0]];
const gk1 = goalkeeper1;
console.log(gk1, fieldPlayers1);

const [goalkeeper2, ...fieldPlayers2] = [...game.players[1]];
const gk2 = goalkeeper2;
console.log(gk2, fieldPlayers2);

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const player1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Peristic'];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
console.log(`${ players.length } goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

/////////////////////////////////////////////////
// logical assignment operator
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR  logical operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish  logical operator ( null and undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// rest1.owner = rest1.owner && '<ANONYMOUS>'; //if  doesst exist then undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // if truthy then next value will show

// AND logical operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';



console.log(rest1);
console.log(rest2);


////////////////////////////////////////////
// NUllish coalescing operator(??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

//Nullish values : null and undefined (NOT  0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

////////////////////////////////////////////
// Short circuting (&& and ||)

console.log('----- OR ----');
//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Aditi');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


////////////////////////////////////////////
// Rest pattern  and operators

// 1. Destructuring
// SPREAD because on RIGHT side of =
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 2, 8, 3, 2, 1, 4);

restaurant.orderPizza ('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza ('mushrooms');


////////////////////////////////////
//The spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnucci'];
console.log(newMenu);

//create shallow copies // copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, set. NOT Objects
const str = 'Aditi';
const letters = [...str, '', 'J.']
console.log(letters);

console.log(...str);
console.log('A', 'd', 'i', 't', 'i');
// console.log(`${...str } jaiswal`); /// cant do this

// Real world
// const ingredients = [prompt('Let\'s make pasta! Ingredients 1?'),
// prompt('Ingredients 2?'),
// prompt('Ingredients 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);







/////////////////////////////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole , 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'California street ,45 lane',
  starterIndex: 1,
})


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Variable name to be different from property names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values while destructuring objects
let a = 111;
let b = 93;
const obj = { a: 28, b: 40, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri } = openingHours;
console.log(fri);
// const {fri:{open, close},} = openingHours;
const { fri: { open: o, close: c }, } = openingHours;
console.log(o, c);
///////////////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 5, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main =  secondary;
// secondary= temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from a function
console.log(restaurant.order(3, 1));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 3, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [d, , [e, f]] = nested;
console.log(d, e, f);

///Default values
const [p, q, r] = [8, 9];// result : 8 9 undefined
console.log(p, q, r);
const [s = 1, t = 1, u = 1] = [6, 7];
console.log(s, t, u);
*/


