//Recursion

//what's Recursion?
function countDown(n) {
  if (n<0) return;
  console.log('Count down: ',n);
  countDown(n-1);
}
// Returning is the finishing function.

countDown(10);
//Why/when should we use Recursion?
////1. Short and more readable.
////2. A problem can be built off of sub-problems

//How to use Recursion?
////1. Base case
////2. Recursive case

function factorial(n) {
  if (n===1) return 1;
  return n * factorial(n - 1);
}

console.log('Factorial: ', factorial(4));

// abc => cba
// c => c
// bc => reverse(c) + b
// abc => reverse(bc) + a

function reverse(str) {
  if(str.length === 1) return str;
  const [firstCharacter] = str;
  const remainingCharater = str.substring(1);
  return reverse(remainingCharater) + firstCharacter;
}
console.log('Reverse: ', reverse('ABC'));
