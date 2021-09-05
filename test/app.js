// console.log('Hello NodeJs');
// console.log('wow');
const cumulative=(n)=>{
  let cum = 0;
  for (let n = 0; n<10+1; n++){
    cum+=n;
  //  console.log(cummulative);
  }
  console.log(cum);
  //return cum;
}
function is_even(n){
  if (n%2 === 0){
    console.log('This number is even.')
    return true;
  }else {
    console.log('This number is not even.')
    return false;
  }
}

// cumulative(10)

// let d = is_even(10);
// if(d){
//   console.log('EVEN')
// }


// let ls = [];
// let myArray = new Array();
// ls[0] = 10;
// ls[1] = 20;
// ls[2] = 30;
//
// console.log(ls);

// let myArray = new Array(4);
// myArray[0] = 20;
// myArray[2] = 30;
// console.log(myArray);

// console.log('5'+7)
// console.log(Number('5')+7)
//
// console.log(Math.ceil(10.6))
// console.log(Math.floor(10.6))
// console.log(Math.round(10.6))

const myFibo=(n)=>{
  let fibo = new Array(n);
  fibo[0] = 0;
  fibo[1] = 1;
  for (let i = 2; i < n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return fibo;
}

// console.log(myFibo(10))
// const L = {name:'pp',last:'liverpool'};
// console.log(L.name);
//
// let O = new Object();
// O.a = 'a'
// O.b = 'b'
// console.log(O)

// var subject = '{"course":"javascript","code":"JS001M", "num":570510571}';
// // let obj = eval(subject)
// let obj = JSON.parse(subject)
// console.log(obj.num, obj.code)
