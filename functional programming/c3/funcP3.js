const persons = [
  {name:"John", age: 17},
  {name:"Jane", age: 15},
  {name:"Jim", age: 10},
];

// foreach
// for (let i = 0; i<persons.length; i++){
//   const person = persons[i];
//   console.log(`Name ${person.name}, age ${person.age}`);
// }

persons.forEach(person => {
  console.log(`Name ${person.name}, age ${person.age}`);
});

// find, findIndex
// let jane;
// for(let i = 0; i<persons.length; i++){
//   const person = persons[i];
//   if (person.name === 'Jane'){
//     jane = person;
//     break;
//   }
// }
// console.log('Jane: ',jane);

// const jane = persons.find((person) => {
//   return person.name === 'Jane';
// });
const jane = persons.find(person => person.name === 'Jane');
const janeIndex = persons.findIndex(person => person.name === 'Jane');
console.log('Jane : ', jane);
console.log('Jane index : ', janeIndex);

// every, some
// let isKid = true;
// for (let i = 0; i<persons.length; i++){
//   const person = persons[i];
//   if (person.age>15){
//     isKid = false;
//     break;
//   }
// }
// console.log('Is kid :',isKid);

// const isKid = persons.every((person)=>{
//   return person.age <= 15;
// });
const isKid = persons.every((person)=> person.age <= 15);
console.log('Is kid :',isKid);

const haveKid = persons.some((person)=> person.age <= 15);
console.log('have kid :',haveKid);
