
//browser Date().getTime();

const moment = require('moment');

/*
var date  = new Date ()
var months = ['jan', 'Feb'];
console.log(date.getHours());
*/
var date = moment();

console.log(date.format('MMMM Do, YYYY'));