// //call bind apply
// let name={
//   first:'heloo',
//   last:'world'
// }

// let printfullname= function(){
//   return this.first + " " + this.last
// }


// name.full=printfullname;
// console.log(name.full());

//currying
// let multiply = function(x,y){
//   console.log(x*y);

// }

// let res = multiply.bind(this,5)
// res(5)

//use closure in currying

function multiply(y){
  return function(x){
    return function(t){
      console.log(x*y*t);
    }
  }
}
let multiplyBYtwo = multiply(2)
multiplyBYtwo(6)(5)
// Original multiply function
// function multiply(y) {
//   return function(x) {
//     console.log(x * y);
//   };
// }

// // Extending the behavior using currying
// function multiplyByTwo(x) {
//   const multiplyBYtwo = multiply(2);
//   multiplyBYtwo(x);
// }

// multiplyByTwo(5); // Output: 10


