//Shorthand Property
let name = "Phiphat"
let last = 'C'

// let user ={
//   name:name,
//   last:last
// }

let user={
  name, last
}
//console.log(user)

const users=(name, last, age)=>{
  return {name, last,age}
}

console.log(users('Phiphat','C',25))
