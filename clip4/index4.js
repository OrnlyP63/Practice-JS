//Rest Operator

const addUser=(name,last,...city)=>{
  return name + " " + last + " " + city
}

console.log(addUser('jojo','jostar','cnx'));
console.log(addUser('jojo','jostar','cnx','bkk'));

const addMessage=(first,... message)=>{
  return message.map(m=>first+message)
}

console.log(addMessage('Hello','JS','Node'));

const addNumber = (... number)=>{
  return number.reduce((first,current)=>{
    return first+current
  })
}

console.log(addNumber(1,2,3,4,5));
