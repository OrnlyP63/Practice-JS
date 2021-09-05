//Old school
let user = {
  name: "phiphat",
  age:25,
  SayHi:function(){return "Hello "+this.name}
}

//console.log(user.SayHi())
function User(name,age){
  this.name = name;
  this.age = age;
}

User.prototype.sayHi=function(){
  console.log('Hello '+this.name)
}

var user1 = new User('OrnlyP',25);
//user1.sayHi()

//Modern

class UserModern {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHi(){
    console.log('Hello '+this.name)
  }
}

let user2 = new UserModern('OrnlyP',25);
user2.sayHi();
