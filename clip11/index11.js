class Admin{
  constructor(){
    console.log('Call constructor')
  }
  isPermission(){
    console.log('Read and Write Data From Database')
  }
}

class User extends Admin{
  constructor(name, age){
    super()
    this.name = name;
    this.age = age;
  }

  SayHi(){
    console.log('Hello '+this.name)
  }
}

let user = new User('OrnlyP',25)
user.SayHi()
