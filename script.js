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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const arr = [32, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// can replace bracket notation with the at method
// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// at method makes it even easier
console.log(arr.at(-1));

console.log(`joshua`.at(0)); // j

// <---  Looping Arrays: forEach --->
