'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // textContent = 0
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;


  movs.forEach(function (mov, i) {

    const type = (mov > 0) ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};
// displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

//PRINT BALANCE WITH REDUCE METHOD
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} € `;
};
// calcDisplayBalance(account1.movements);

//display summary 
const calcDisplaySummary = function (acc) {

  const incomes = acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;

}
// calcDisplaySummary(account1.movements);

// COMPUTING USERNAMES WITH MAP METHOD
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0])
      .join('');
  })
};
createUsernames(accounts);

/// implementing login

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);

};

//event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submission
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';

    //to clear blinking active login pin and user field
    inputLoginPin.blur();

    //UPDATE UI
    updateUI(currentAccount);

  };
});

// Implementing transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {

    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  };
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    //add movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);

  };
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // .indexOf(23)

    // Delete
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;

  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// simple array methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD : original array not changed
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
// shallow  can use any 1
console.log(arr.slice());
console.log([...arr]);

//SPLICE METHOD : it mutates the original array
// console.log(arr.splice(2));
console.log(arr.splice(-1));

console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE METHOD- does mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT method-doesnt mutate original array
const letters = arr.concat(arr2);
//to join 2 arrays
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN METHOD
console.log(letters.join('-'));

//////////////////////////////////////////////
//the NEW AT METHOD

console.log(arr[2]);
console.log(arr.at(2));

//GETTING LAST ARRAY element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

//also works on strings
console.log('jonas'.at(0));
console.log('jonas'.at(2));

///////////////////////////////////////////////
// LOOPING ARRAYS : forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`MOVEMENT ${i + 1} :You deposited ${movement} amount`);
  } else {
    console.log(`MOVEMENT ${i + 1} : You withdrew ${Math.abs(movement)} amount`);
  };
};

console.log('---- FOREACH ----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`MOVEMENT ${index + 1} : You deposited ${movement} amount`);
  } else {
    console.log(`MOVEMENT ${index + 1} : You withdrew ${Math.abs(movement)} amount`);
  }
});

///////////////////////////////////////////////////
// forEach with MAPS AND SETS
//maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});

//sets
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  console.log(dogsJuliaCopy.splice(-1));
  console.log(dogsJuliaCopy.splice(0, 1));
  const dogsJuliaCorrected = (dogsJuliaCopy);
  const bothJuliaKate = [...dogsJuliaCorrected, ...dogsKate];



  bothJuliaKate.forEach(function (value, index, array) {
    if (value < 3) {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${index + 1} is an adult, and is ${value} years old`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//////////////////////////////////////////////////////
// map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movementsUSD);


const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
};
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
  `MOVEMENT ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

);
console.log(movementsDescriptions);



////////////////////////////////////////////////////
// filter method

const deposits = movements.filter(function (mov) {
  return mov > 0
});
console.log(deposits);

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

const depositsFor = [];
for (const mov of movements)
  if (mov > 0) {
    depositsFor.push(mov);
  }

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

///////////////////////////////////////////
// reduce method

// const balance = movements.reduce(function (acc, cur, i, array) {
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur ,0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// MAXIMUM VALUE OF MOVEMENTS THROUGH REDUCE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;

}, movements[0]);
console.log(max);
*/

//////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const dogAge = [5, 2, 4, 1, 15, 8, 3];
// const dogAge = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = dogAge.map(function (mov) {
  if (mov <= 2) {
    return 2 * mov;
  } else {
    return 16 + mov * 4;
  };
});
console.log(calcAverageHumanAge);

const lessThan18 = calcAverageHumanAge.filter(mov => mov >= 18);
console.log(lessThan18);

const calcAverage = lessThan18.reduce((acc, mov, i, arr) => {
  return acc + mov / arr.length;
}, 0);
console.log(calcAverage);

///////////////////////////////////////////////////
// the magic of chaining methods

const eurToUsd = 1.1;

const totalDepositsUSD =
movements.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
// .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd
  // })
  .reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositsUSD);
  */

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const output = ages.map(mov => mov <= 2 ? mov * 2 : 16 + mov * 4).filter(mov => mov >= 18).reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
  return output;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////////////////////////////////////////////////
// the find method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(account2);
  }
};

/////////////////////////////////////////////
// SOME and EVERY
console.log(movements);
console.log(movements.includes(-130));

// some
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//////////////////////////////////////////////////
// Flat and Flatmap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// Flat
const overalBalance2 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//Flat map

const overalBalance3 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance3);

////////////////////////////////////////////////////
// Sorting arrays

//strings
const owners = ['jonas', 'david', 'aditi', 'zach', 'martha', 'Adam'];
console.log(owners.sort());

// numbers
console.log(movements);
console.log(movements.sort());

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
  //   if (a > b) return -1;
  //   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);

console.log(movements);
/////////////////////////////////////////////
// More ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(28);
x.fill(28, 3, 5)
console.log(x);

arr.fill(23, 3, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', ''))
  );
  
  console.log(movementsUI);
  
  // here we would have to do mapping seperately
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/
/*

// Him R practice assignment
const numberAt = [1, 2, 3, 4, 5];
const oddFunc = numberAt.filter((_, i) => {
  return i % 2 === 0;
}).map(val => val * val * val).reduce((acc, val) => acc + val, 0);
console.log(oddFunc);
// jonas practice q
const randomDice = Array.from({ length: 100 }, (_, i) => (Math.trunc(Math.random() * 6 + 1)));
console.log(randomDice);

/////////////////////////////////////////////
// Array methods practice

// 1.  
const deposits2 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

console.log(deposits2);

// 2.
const depositAbove = accounts.flatMap(acc => acc.movements).filter(dep => dep >= 1000).reduce((acc, mov, i, arr) => arr.length);
console.log(depositAbove);

// prefix ++ operator
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

// 3.
const { deposits, withdrawls } = accounts.flatMap(acc => acc.movements).reduce((sum, cur) => {
  // cur > 0 ? (sum.deposits += cur) : (sum.withdrawls += cur);
  sum[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
  return sum;
}, { deposits: 0, withdrawls: 0 }
);
console.log(deposits, withdrawls);

// 4.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'and', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
  return capitalize(titleCase);

};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
console.log(convertTitleCase('I AM A GIRL'));
*/

//////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
console.log(dogs);

//2.
const findSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(findSarah);
console.log(`Sarah's dog is eating too ${findSarah.curFood > findSarah.recFood ? 'much' : 'little'}`);

// 3. 
const ownersEatTooMuch = dogs.filter(val => val.curFood > val.recFood).flatMap(val => val.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(val => val.curFood < val.recFood).flatMap(val => val.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);

//5.
console.log(dogs.some(dog => dog.recFood === dog.curFood));

//6.
const checkOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkOkay));

//7.
console.log(dogs.filter(checkOkay));

//8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);