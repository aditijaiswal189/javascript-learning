'use strict';

/////////////////////////////////////////////
// DEFAULT PARAMETERS
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);

};
createBooking('LH430');
createBooking('LH430', 3);
createBooking('LH430', 8);
// createBooking('LH430',, 1000);// cant do this
createBooking('LH430', undefined, 1000);
////////////////////////////////////////////////////
//  how passing arguments work : value vs reference
const flight = 'LH390';
const aditi = {
  name: 'Aditi Jaiswal',
  passport: 2345699428391985,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'KH278';
  passenger.name = 'Miss ' + `${passenger.name}`;
  if (passenger.passport === 2345699428391985) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};
checkIn(flight, aditi);
// console.log(flight);
// console.log(aditi);

//same as writing
// const flightNum = flight;
// const passenger = aditi;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000000)
};
newPassport(aditi);
checkIn(flight, aditi);

////////////////////////////////////////////////////////
//functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`original string: ${fn(str)}`);
  console.log(`original string: ${fn.name}`);

};
transformer('Javascript is the best programming language !', upperFirstWord);
transformer('Javascript is the best programming language !', oneWord);

// JS use callbacks all the time
const high5 = function () {
  console.log('👋');
}

document.body.addEventListener('click', high5);
['jonas', 'Aditi', 'Rishabh'].forEach(high5);

///////////////////////////////////////////////////
// functions  returning functions

const greet = function (greeting) {
  return function (name) {
    console.log((`${greeting} ${name}`));
  }
};

const greeterKey = greet('Hello');
greeterKey('Aditi');
greeterKey('Jonas');

greet('Hey')('Adt');

const greetArr = greeting1 => name1 => console.log(`${greeting1} ${name1}`);

greetArr('Hey Hii')('Adt Jaiswal');

/////////////////////////////////////////////////////
// THE CALL AND APPLY METHOD
const luftansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

luftansa.book(28, 'Aditi Jaiswal')
luftansa.book(89, 'Vidushi Jaiswal')
luftansa.book(35, 'Siddhi Jaiswal')
console.log(luftansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luftansa.book;
// book(23, 'Sarah williams'); // doesnt work
book.call(eurowings, 24, 'Jonas schmedtmann');
console.log(eurowings);
book.call(luftansa, 124, 'Jonas Maann');
console.log(luftansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 14, 'Martha Cooper');
book.call(swiss, 314, 'Adama Cooper');

//Apply method
// not used now in modern js
const flightData = [289, 'George Chopra'];
book.apply(swiss, flightData);
console.log(swiss);
//we use this now
book.call(swiss, ...flightData)

////////////////////////////////////////////////////
// THE BIND METHOD

// book.call(eurowings, 24, 'Jonas schmedtmann');

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(luftansa);

bookEW(38, 'Siya Malhotra');
bookEW(38, 'Siddharth Malhotra');

const bookEW28 = book.bind(eurowings, 28);
bookEW28('Riya Malhotra');
bookEW28('Riyaaaaaaa Malra');
console.log(eurowings);

// With EVENT LISTENERs
luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', luftansa.buyPlane.bind(luftansa));

//partial applications ie.we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200);

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));

const addTax2 = function (value) {
  return function (rate = 0.23) {

    return `${value + (value * rate)} `;
  };


};

console.log(addTax2(100)());

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};
const registerNewAnswer = function () {
  const promtPoll = poll.methodClick = Number(prompt(`What is your favourite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`));

  if (promtPoll === 0) {
    poll.answers[0] = poll.answers[0] + 1;
  } else if (promtPoll === 1) {
    poll.answers[1] = poll.answers[1] + 1;

  } else if (promtPoll === 2) {
    poll.answers[2] = poll.answers[2] + 1;
  } else if (promtPoll === 3) {

    poll.answers[3] = poll.answers[3] + 1;
  } else if (promtPoll !== Number()) {
    console.log('Not a Number');
  } else {
    console.log('Wrong Input');
  };
  
  const displayResults = poll.answers;
  console.log(`Poll results are ${displayResults[0]}, ${displayResults[1]}, ${displayResults[2]} and ${displayResults[3]}`);
  
};
document.querySelector('.poll').addEventListener('click', registerNewAnswer);

const scooty = {
  name: "Activa",
  color: "red",
  engine: "120 cc",
  moving: function () {
    console.log(`${this.name} is moving with a speed of ${this.speed}km/hr`);
  },
  speed: "80",
};

const bike = {
  name: "Fz",
  color: "white",
  engine: "180 cc",
  speed: "150",
};

scooty.moving(); // here we are simply calling method of scooty and on object scooty itself ... so remember when we call method on object this belongs to object on which we are calling the method.
// therefore here this = scooty and so inside moving function(method) : console.log(`${this.name} is moving with a speed of ${this.speed}km/hr`) => this will be equals to scooty.

///////////////////
///////////////////
///////////////////

scooty.moving.call(bike); // see here we are not calling like we call method usually like scooty.moving() instead we are taking the method from scooty object by scooty.moving ...note here no parenthesis if parenthesis will be there then method will be called immediately but it is not called as we didnt put parenthesis.
// now scenario is we have method moving(by scooty.moving ... it can also be stored in another variable like const move = scooty.moving) which is inside scooty and we are now going to call it manually(using call or apply or bind here we are looking at call)  on whatever the object we want ... suppose that we want to call this method on bike... usually how should we do bike.moving() but cant do this why ? because there is no moving method inside bike object see above.
// therefore we take the method moving from scooty and called upon bike => scooty.moving.call(bike);=> what happened here scooty.moving gives us method and .call(bike)  will call the method with setting this keyword to bike.. why so ? because this will always be equal to object on which method is called .. right ? here method is from scooty but is called on object bike .
//  thats why : console.log(`${this.name} is moving with a speed of ${this.speed}km/hr`)  in this this.name="Fz" and this.speed = 150
// but above where we called scooty.moving() => this.name= activa and this.speed =80

scooty.moving.apply(bike); // this is similar to call ...only difference is that when we pass arguments (yo know how we pass arguments in call like 2nd or 3rd or so on will be arguments like .call(bike,arg1,arg2,arg3)) => bike= this here and other will be now arguments if we want to pass.
//  the diff between call and bind is that in bind we pass arguments in an array like .apply(bike,[arg1,arg2,arg3])

// So more or less call and apply is same.

//  now lets understand bind

const movingBike = scooty.moving.bind(bike); // see here this is not going to call method moving with object bike rather it is going just bind the method moving taken from scooty with object bike. and is stored in variable movingBike ... this movingBike is simply now a function with this keyword associated to bike and we can call it later now as we simply call a function like functionName().. see below.

movingBike(); // see we call it later right but in .call and .apply we didnt need to call later rather method is called right away.

////////////////////////////////////////////////////
// CLOSURES = this is not a practical concept .. this is theortical and can be asked in interview . This is so simple lets try to understand by keeping in mind how javascript works behind the scene.
//  we know scoping ? that is variable can be accessed in its own scope and variable from parent scope can be accesed right ?
//  lets understand with example
const makingCoffee = function () {
  const sugarSpoon = 2; // this sugarSpoon variable should not be accessible outside makingcoffee function .. u know why ? because variable declared using const keyword is block scope. if cant remember then please revise how javascript works behind the scene more specifically scoping.
  console.log(` Coffee is ready with ${sugarSpoon} spoon`);
  return function readyCoffee() {    // here we are returning this function so wherever makingCoffee will be called and stored in a variable there it will have a function readyCoffee. wait u will understand go outside the function makingCoffee    console.log(` Coffee is ready with ${sugarSpoon} spoon`);  };};
  const iAmHere = makingCoffee(); // here this function call will return a function readyCofee.. see below in consoleconsole.log(iAmHere);// now if we call this function then this function is accessing sugarSpoon variable but it should not be accessible why ? because of scoping as we are trying to acess sugarSpoon outside makingCoffee ... but because of closure it will be accessed ... what closure says that i am going to give access to all those variable which are in the scope of birthplace of function readyCoffee and readycoffee is taken birth inside makingCoffee and thats why it has access to the variable declared in makingCoffee .// see call it nowiAmHere();

  iAmHere();
};
};

///////////////////////////////////////////////////////
// immediately invoked function expressions

const runOnce = function () {
  console.log(' This will never run again.');
};
runOnce();

/// IIFE
(function () {
  
  console.log(' This will never run again.');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log(' This will ALSO never run again.'))
();


{
  const isPrivate = 23;
  var isNotPrivate = 28;
};
// console.log(isPrivate);
console.log(isNotPrivate);


/////////////////////////////////////////////
// CLOSURES

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//////////////////////////////////////////////
/// more closure examples

// EXAMPLE 1.
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
  
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// reassigning f function
h();
f();
console.dir(f);

// Example 2.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`We will start boarding in ${wait} seconds`);
};
const perGroup = 1000;

boardPassengers(300, 6);
boardPassengers(600, 3);

*/
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';

  })

})();
