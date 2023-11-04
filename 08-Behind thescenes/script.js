'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      const firstName = ' Jonas';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = ` Oh! you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {

        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));// will work when strict mode is off

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Aditi';
calcAge(1991);
// console.log(age);
// printAge();

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const myName = 'Twinkle';

if (myName === 'Twinkle') {
  console.log(`${myName} is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'Teacher';
  console.log(x);
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Variables
console.log(me); // undefined
// console.log(job);//Reference error not before initialization
// console.log(year);//Reference error not before initialization

var me = 'Aditi';
let job = 'teacher';
const year = 1999;

//functions

console.log(addDec(2, 4));
// console.log(addExpr(2.4)); //Reference error not before initialization
console.log(addArrow); // undefined 
// console.log(addArrow(2, 4)); //Reference error not before initialization

function addDec(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
}
var addArrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);;
console.log(y === window.y);;
console.log(z === window.z);;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
// var firstName = 'Adt';

const jonas = {
  firstName: 'Aditi',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 4, 6, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}
addArrow(2, 5, 8);
*/

//Primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);
//marriedJessica = {};

//Copying objects

const jessica2 = {
  firstName: 'Aditi',
  lastName: 'Jaiswal',
  age: 25,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = ' a';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);