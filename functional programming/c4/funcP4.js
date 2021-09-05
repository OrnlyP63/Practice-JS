const persons=[
  {name: "John", age:17},
  {name: "Jane", age:15},
  {name: "Jim", age:10}
];

// myFilter

Array.prototype.myFilter = function myFilter(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++){
    const element = this[i];
    if (callback(element)){
      result.push(element);
    }
  }
  return result;
}

const kids = persons.myFilter(person=> person.age<=15);
console.log('Kid : ', kids);


// myMap
Array.prototype.myMap = function myMap(callback){
  const result = [];
  for (let i = 0; i < this.length; i++){
    const element = this[i];
    result.push(callback(element));
  }
  return result;
}


const olderPersons = persons.myMap(person => ({
  ...person,
  age: person.age * 2
}));

console.log('Older Persons : ', olderPersons);
