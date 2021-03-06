//1. Pure Function
function addPure(a, b){
  return a+b;
}
console.log('Pure function: ', addPure(1, 6));

//2. Avoid side Effect
const b = 6;
function addSideEffect(a){
  return a+b;
}
console.log('Side Effect: ', addSideEffect(1));

//3. First class Function

////3.1 Assigning a function to a variable
const addAssigning = function(a, b){
  return a + b;
}
console.log('Assigning: ',addAssigning(7,1));

////3.2 Returning a function
function addReturning(a, b){
  return function(){
    return a+b;
  }
}

const addTwoNumber = addReturning(1, 6);
console.log('Retruning: ', addTwoNumber());

//// 3.3 Accepting a function as an argument

function addNumber(a,b){
  return a + b;
}

function addAccepting(add, a, b){
  return add(a,b);
}

console.log('Accepting: ', addAccepting(addNumber,1,6));
