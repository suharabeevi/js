//call bind apply
// let name={
//   first:'heloo',
//   last:'world'
// }
// let name1={
//     first:'yes',
//     last:'world'
//   }
  
// let printfullname= function(place,x){
//   return this.first + " " + this.last +" " + place +" "+ x
// }
// console.log(printfullname.call(name1,"aluva","uuuu"));
// console.log(printfullname.apply(name1,["ekm","tttt"]));
  
  
  
const obj = {
  name: 'John',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello, my name is ${this.name}`); // 'this' inside arrow function is not the object context
  },
};

obj.greet();       // Output: "Hello, my name is John"
obj.greetArrow();  // Output: "Hello, my name is undefined" or some other value depending on the surrounding context
 