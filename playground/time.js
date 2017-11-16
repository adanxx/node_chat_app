
//browser Date().getTime();

const moment = require('moment');

/*
var date  = new Date ()
var months = ['jan', 'Feb'];
console.log(date.getHours());
*/
var date = moment();
console.log(date.format('MMMM Do, YYYY'));


var createAt = 2133;
date = moment(createAt);
console.log(date.format('h:m a'));

var someTimeStamp= moment().valueOf();
console.log(someTimeStamp);