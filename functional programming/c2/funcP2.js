//4. Higher order functions
////4.1 Returning a fucntion
////4.2 Accepting a fucntion as an argument

const persons = [
  {name: 'John', age: 17},
  {name: 'Jane', age: 10},
  {name: 'Jim', age: 15}
];

// filter
// const kids = [];
//
// for (let i=0; i<persons.length; i++){
//   const person = persons[i];
//   if (person.age<=15){
//     kids.push(person)
//   }
// }
//
// console.log('kids: ',kids);

// const kids = persons.filter((person)=> {
//   return person.age<=15;
// });
const kids = persons.filter(person=> person.age <= 15);
console.log('Kids : ',kids);

// map
// const olderPersons = [];
// for(let i=0; i<persons.length; i++){
//   const person = persons[i];
//   olderPersons.push({
//     ...person,
//     age: person.age*2
//   });
// }
// console.log('older persons :',olderPersons);

// const olderPersons = persons.map((person)=> {
//   return{
//     ...person,
//     age: person.age * 2
//   }
// });
const olderPersons = persons.map(person=> ({
    ...person,
    age: person.age * 2
}));
console.log('older persons :',olderPersons);

// reduce
// let totalAge = 0;
// for (let i=0; i<persons.length; i++){
//   const person = persons[i];
//   totalAge += person.age;
// }
// console.log('Total age: ', totalAge);

// const totalAge = persons.reduce((age, person)=> {
//   return age + person.age;
// }, 0);
const totalAge = persons.reduce((age, person)=> age + person.age, 0);
console.log('Total Age; ', totalAge);
