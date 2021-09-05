//Synchronous
// var fs = require('fs')
// var data = fs.readFileSync('text.txt')
//
// console.log(data.toString())
// console.log('Do other things');

//Asynchronous

var fs = require('fs')
var data = fs.readFile('text.txt',function (err,data) {
console.log(data.toString())
})
console.log('Do other things')
