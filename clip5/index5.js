// Spread Operator

// Array
let fruit = ['mangoes', 'water melon']
console.log(fruit);
let newfruit = [...fruit,'Durian','Mungkud']
console.log(newfruit);

let food = [...fruit,'Tom yum','krapao']
console.log(food);
let allfood = [...fruit, ...food]
console.log(allfood);

let product={name:'Durian',price:200}
console.log(product);
let newproduct={...product,category:'Fruit'}
console.log(newproduct);

let newprice={...newproduct,price:500}
console.log(newprice);
