//learning node from the start.

//node uses common js instead of ES6
// so it uses require() instead import.
const os = require('os');
const path = require("path");
const {add, subtract, multiply, divide, remainder} = require("./math");


//console.log(add(11,2));

// to use the exports.method one, we do the same thing.
//console.log(remainder(12,4));


//NOTE: We EITHER use the module.exports ={} or the exports.methodName . 
//if we use both exclusively, the exports.method one wont work 
//unless its also mentioned in the module.exports = {} as well.


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());


// // some important globals
// console.log(__dirname);
// console.log(__filename);
