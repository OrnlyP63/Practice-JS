// exports.Hello = function() {
//   console.log('Phiphat Chomcit');
// }
//
// exports.Say = function(n='World') {
//   console.log('Hello ' + n);
// }
//
// module.exports = function(){
//   console.log('Module Phiphat');
// }
const add = (n,m)=>{
  return m+n;
}
module.exports = {
  name : 'Phiphat',
  add : add,
}
