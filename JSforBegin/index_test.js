const myName = 'Phiphat';
let height = 175;
let isMale = true;
let city = null;
let bigNumber = 10n;
console.log(myName, height, isMale, city, bigNumber);

const person = {
  name: 'Phiphat',
  height: 175,
  city: 'CNX'
};
console.log(person.name);
person.height = 173;
console.log(person.height);

person.weight = 55;
console.log(person.weight);

const number = [5,10,15,20];
console.log(number[0]);
number.push(25);
console.log(number);
number.pop();
console.log(number);
number.unshift(1);
console.log(number);
number.shift();
console.log(number);

let password = ''
if(password==='') {
  console.log('password is require');
}else if (password.length>= 8 && password.length<=12) {
  console.log('password is valid');
}else {
  console.log('password is invalid');
}

function calculateVat(money, vat){
  return money * vat / 100;
}

const totalVat = calculateVat(123,7);
console.log(totalVat);

// for (let i = 0; i<10; i++){
//   if (i % 2 === 0){
//     console.log(i);
//   }
// }

for (let i = 0; i<10; i++){
  if (i % 2 !== 0){
    continue;
  }
  console.log(i);
}
