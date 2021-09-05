//What's Closures?
function outer(){
  const name = 'Outer';
  return function inner(){
    console.log('Outer name: ', name);
  }
}

const innerFunciton = outer();
innerFunciton();

//Data privacy
function createTimes(){
  let counter = 0;
  return function times() {

    counter += 1;
    console.log('Counter: ', counter)
  }
}

const times = createTimes();
times();
times();

//Stateful functions
// function addFive(a){
//   return a + 5;
// }
// 
// function addTen(a) {
//   return a + 10;
// }



function createAdd(a) {
  return function (b) {
    return a + b;
  }
}

const addFive = createAdd(5);
const addTen = createAdd(10);
console.log('Add Five: ', addFive(10));
console.log('Add Ten: ', addTen(10));
