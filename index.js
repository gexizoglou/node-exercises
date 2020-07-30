// Import stylesheets
import './style.css';
import {addNumbers} from './operations/sum.js';
import {subNumbers} from './operations/subtraction.js';
import {multiplyNumbers} from './operations/multiplication.js';
import {divNubers} from './operations/division.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var num1 = 3;
var num2 = 7;

var fun1 = addNumbers(num1, num2);
var fun2 = multiplyNumbers(num1, num2);

var moment = require('moment');
moment.locale('gr');
var dateFormat = 'LLLL';
var testDateUtc = moment.utc('2016-10-31 10:08:34');
var localDate = testDateUtc.local();

console.log('Today is ' + localDate.format(dateFormat));
console.log(' The sum of ' + num1 + ' & ' + num2 + ' is: ' + fun1);
console.log(' The multiplication of ' + num1 + ' & ' + num2 + ' is: ' + fun2);