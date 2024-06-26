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
// console.log(accounts.username);

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
  containerMovements.innerHTML = ``;
  // good practice to pass data into the function instead of having the function work with a global variable
  // pass the data that a function needs into the function
  // create a copy using slice so we don't mutate the original array
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcPrintBalance(movements);

// console.log(containerMovements.innerHTML);
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

// <--- Simple Array Methods -->
// Why arrays have methods? Methods are simply functions that we can call on objects
// Arrays themselves are also objects
// Array methods are attached to all arrays that we create in JavaScript

// let arr = [`a`, `b`, `c`, `d`, `e`];
// Slice Method -->
// slice can extract part of array without changing the original array
// console.log(arr.slice(2)); // c d e.. did not set an end parameter
// console.log(arr.slice(2, 4)); // c d
// console.log(arr.slice(-2)); // d e .. last element of any array .. -1 is the last element of any array
// console.log(arr.slice(1, -2)); // b c
// console.log(arr.slice()); // creates a shallow copy of the array
// console.log([...arr]); // also a shallow copy

// Splice Method -->
// Splice DOES mutate the original array
// console.log(arr.splice(2)); // c d e
// arr.splice(-1);
// console.log(arr); // a b ... originall array loses the part that is extracted

// Reverse Method -->

// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());
// console.log(arr2); // mutates original array

// Concat -->
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2); //personal preference

// Join -->
// console.log(letters.join(` - `)); // - seperator that we specified

// <--- the new at Method --->

// const arr = [32, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// can replace bracket notation with the at method
// getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// at method makes it even easier
// console.log(arr.at(-1));

// console.log(`joshua`.at(0)); // j

// <---  Looping Arrays: forEach --->

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const moves of movements) {
// for (const [i, moves] of movements.entries()) {
//   if (moves > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${moves}`);
//   } else {
//     console.log(`Movement ${i + 1} ${Math.abs(moves)}`); //abs takes away the - sign
//   }
// }
// console.log(`For each --->`);
// movements.forEach(function (moves, i, array) {
//   if (moves > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${moves}`);
//   } else {
//     console.log(`Movement ${i + 1} ${Math.abs(moves)}`); //abs takes away the - sign
//   }
// });

//abs takes away the - sign
// 0: function(200)
// 1: function(450)
// 2: function(400)...

// you cannot break out of a forEach loop... continue and break do not work
// forEach will always loop out of an entire array

// <---  forEach with Maps and Sets --->

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// _  underscore is a throwaway in JavaScript

// Coding Challenge #1

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   // console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog ${i + 1} is still a puppy and is ${dog} years old`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// <--- Data Transformations: Map, Filter, Recude --->
// Map Method
const array1 = [1, 4, 9, 6];
const map1 = array1.map(x => x * 2);
// console.log(map1); // 2, 8, 18, 12
// builds us a brand new array

// Filter Method
const words = [`spray`, `elite`, `exuberant`, `destruction`];
const result = words.filter(word => word.length > 6);
// console.log(result); // exuberant destruction
// filter an array to satisfy a certain condition

// Reduce Method
// builds all array elements down to one single value (adding them all together)
const array2 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (array2, currentValue) => array2 + currentValue + initialValue
);
// console.log(sumWithInitial);

// <--- The Map Method --->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// in map method we write a function
// different philosophies or paradigms
// map is more functional programming
// modern js there is a push in the direction of functional programming
// map and callback functions is the new and modern way
const movementsUDSfor = [];
for (const mov of movements) movementsUDSfor.push(mov * eurToUsd);
// console.log(movementsUDSfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `Deposited` : `Withdrew`} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescription);

// <--- Computing Usernames --->

// each function should recieve the data it is going to be working with vs. using a global variable
// side effects in javascript

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join(``);
  });
};

createUsernames(accounts);
// console.log(accounts);

// <--- The Filter Method --->

// used to filter for elements that satisft a certain condition
// using a callback function

// const deposits = movements.filter(function (mov) {
//   return mov > 0; // boolean value
// });

// console.log(movements);
// console.log(deposits); // only positive values

// const deposits2 = [];

// for (const mov of movements) {
//   if (mov > 0) deposits2.push(mov);
// }

// for (const mov of movements) {
//   if (mov < 0) withdrawals.push(mov);
// }
// console.log(deposits2);
// console.log(withdrawals);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// <--- The Reduce Method --->

// data transformation methods
// map , filter , reduce
// use the reduce method to essentially boil down all the elements in an array

// acc = accumulator
// accumulator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i} ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
// Important question to ask... what is the purpose of the accumulator
// What is the purpose of the accumulator is important when using reduce
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// Coding Challenge #2

// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(dogAges);
// 1
// calculate the dog age in human years using the following formula
// if the dog is <= 2 years old, humanAge = 2 * dogAge
// if the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2
// exclude all dogs that are less than 18 human years old
// 3
// calculate the average human age of all adult dogs
// 4
// // run the function for both test data sets
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   // console.log(humanAges, adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge(testData1);
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg1, avg2);

// <--- The Magic of Chaining Methods --->

// can only chain a method if it returns a new array
// reduce returns a value so you cannot continue to change methods
// PIPELINE >>>
const totalDespositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDespositsUSD);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

// <--- Coding Challenge #3 --->
// rewrite the 'calcaveragehumanage' function from the previous challenge, but this time as an arrow function, and using chaining
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };

// const avg1 = calcAverageHumanAge(testData1);
// const avg2 = calcAverageHumanAge(testData2);
// console.log(avg1, avg2);

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(testData1);
const avg2 = calcAverageHumanAge(testData2);
// console.log(avg1, avg2);

// <--- The Find Method --->
// we can use the find method to retrieve a unit of an array based on a condition
const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// can find an object in the array based off properties in the object
const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);
const accountNone = accounts.find(acc => acc.owner === `Joshua Alvarado`); // undefined
// console.log(accountNone);
const accountPractice = accounts.find(acc => acc.owner === `Sarah Smith`);
// console.log(accountPractice);

// goal of the find method is to just find

// <--- Implementing Login Functionality --->

// originally when you click the login button on event listener the page reloads because it is in a form
// default behavior
// we stop this from happening
// add an event to a callback funtion
// add prevent default method

let currentAccount;

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

btnLogin.addEventListener(`click`, function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(` `)[0]
    }`;

    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

// <--- Implementing Transfers --->
btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // Doing the trasnfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

// <--- The findIndex Method --->

// works almost the same way of find
// but returns the index of the found element and not the element itself
// to delete an element from an array we use the splice method
// but we need to know the index to splice
// that's where this comes in handy

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();
  // console.log(`delete`);
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});

// index of can only search for a value if it is in the array
// with findindex we can create a condition

// Some and Every
// console.log(movements);
// equality
// console.log(movements.includes(-130)); // can check for equality
// where can we check for a condition
// condition
const anyDesposits = movements.some(mov => mov > 0); // callback function
const biggerDeposits = movements.some(mov => mov > 5000);
// console.log(anyDesposits);
// console.log(biggerDeposits);

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

// every
// console.log(movements.every(mov => mov > 0)); // false // bc all the movements are not positive
// console.log(account4.movements.every(mov => mov > 0)); // true // all of the values are above 0

// seperate callback
const deposit = mov => mov > 0; // don't have to rewrite mov => mov > ... every time
// console.log(movements.some(deposit));

// <--- flat and flatmap --->

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // removed the arrays and flattened the array
// // output: [1, 2, 3, 4, 5, 6, 7, 8 ];
// const arrDeep = [[[[1, 2], 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// // flat only goes one level deep when flattening an array
// console.log(arrDeep.flat(2));
// // goes two levels deep with the 2
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// make it prettier
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// flatMap can only go one level and you cannot change it

// <--- Sorting Arrays --->

// strings
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort()); // sorts alphabetically
// sort() mutates original array

// numbers
// console.log(movements);
// console.log(movements.sort());
// return < 0, A before B (keep order)
// > 0 B before A (switch order)
// ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );
// we can simplify them by working with numbers
// descending & simplified
movements.sort((a, b) => b - a);
// console.log(movements);
let sorted = false;

btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// <--- More Ways of Creating and Filling Arrays --->

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array([1, 2, 3, 4, 5, 6, 7]));
// Empty Arrays + Fill Method
// we can generate arrays programatically
const x = new Array(7);
// console.log(x); // [empty × 7] // creates 7 empty elements
// x.fill(1);
// x.fill(1, 3); // only starts at index 3 so 3 empty the rest 1
// fills all empty slots with '1' // mutates the actual array

// Array.from
// On Array object we call the from() method
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// _ means not using the parameter
const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// create an array of 100 w/ random dice roll
const diceRoll = Array.from(
  { length: 100 },
  i => Math.floor(Math.random() * 6) + 1
);
// console.log(diceRoll);

labelBalance.addEventListener(`click`, function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace(`€`, ``))
  );
  // console.log(movementsUI);
  // but would have to do the mapping seperately
  const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
  // console.log(movementsUI2);
});

// <--- Summary: Which Array Method to Use? --->

// 23 different methods
// Which array method to use?
// I want... to mutate original array? a new array? an array indedx? know if array includes... to transform a value.
// to mutate original array ------>
// add to original: .push(end) .unshift(start)
// remove from original: .pop, .shift, .slice
// others: .reverse, .sort, .fill
// a new array ------>
//.map, .filter, .slice, .concat, .flat, .flatMap
// an array index ------>
// .indexOf, .findIndex
// an array element ------>
// .find
// know if array includes ------>
// .includes, .some, .every
// a new string ------>
// .join
// to transform a value ------>
// .reduce
// to just loop array ------>
// .forEach

// <--- Array Methods Practice --->

// .1
// const bankDepositSum = accounts.map(acc => acc.movements).flat();
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// .2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .filter(mov => mov > 1000).length;
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// ++ operator still returns the old value
// let a = 10;
// console.log(a++);
// console.log(a);
// prefix ++ operator before the a

// .3
// reduce is like the swiss army knife of array methods
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? `deposits` : `withdrawals`] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(sums); // {deposits: 25180, withdrawals: -7340}

// .4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  // common pattern to make an array of exceptions
  const exceptions = [`a`, `an`, `the`, `but`, `or`, `on`, `in`, `with`];
  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);
  return capitalize(titleCase);
};

// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`and here is a nother title with an example`));
// console.log(convertTitleCase(`this is a LONG title but not too long`));

// <--- Coding Challenge #4 --->
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. 
Eating too much means the dog's current food portion is larger than recommended portion, and eating too little is the opposite. 
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion.
*/

// Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/*
loop over dogs array containg dog objects 
for each dog calculate the recommended food portion and add it to the object as a new property 

recommendedFood = weight ** 0.75 * 28
*/

/*
1
loop over array
do not create new array
.forEach
2
find sarahs dog and log to the console whether its eating too much or too little
*/

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
const dogSarah = dogs.find(dog => dog.owners.includes(`Sarah`));
// console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? `too much` : `too little`
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.

/*
"Matilda, Alice, and Bob's dogs eat too much!"
"Sarah, John, and Michaels dogs eat too little!"
*/

console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(` and `)}'s eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
// console.log(
//   dogs.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay)); // Michaels dog

// 8.
// sort it by recommended food portion in an ascending order
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
