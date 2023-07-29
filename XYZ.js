// const transactions = [
//     { product: 'Shoes', category: 'Fashion', price: 50 },
//     { product: 'T-shirt', category: 'Fashion', price: 20 },
//     { product: 'Headphones', category: 'Electronics', price: 100 },
//     { product: 'Laptop', category: 'Electronics', price: 800 },
//     { product: 'Book', category: 'Education', price: 15 },
//   ];

//   const result= transactions.reduce((acc,curr)=>{
//      const {category,price}=curr
    
//      acc[category]= (acc[category]??0) + price
//      return acc
//   },{})
// const categories = Object.keys(result)
// let max=categories[0]
// let highest={}
// for(const cata of categories){
//     if(result[cata]>result[max]){
//         max=cata

//     }
// }
// highest[max]=result[max]
// console.log(highest)

// const data=[
//   {
//     name:'name1',
//     mark:[{ m1:34,m2:45},
//            {l:287,ad:52} ]
// },
// {
//     name:'name2',
//     mark:[{ m:34,o:45},
//            {lp:287,d:52} ]
// }]

//  data.map((value) => {
//   let marks = value.mark;
//   console.log(marks);
//   let sum = marks.reduce((acc, curr) => {
//     let values = Object.values(curr);
// console.log(values);
//     return acc + values.reduce((subAcc, subCurr) => subAcc + subCurr, 0);
//   }, 0);
  
//   console.log('Sum for', value.name, ':', sum);
// });
// const data=[
//   {
//     name:'name1',
//     mark:[{ m1:34,m2:45},
//            {l:287,ad:52} ]
// },
// {
//     name:'name2',
//     mark:[{ m:34,o:45},
//            {lp:287,d:52} ]
// }]
// data.map((data)=>{
// let marks=data.mark
// let studentmark=marks.reduce((acc,curr)=>{
//    let values=Object.values(curr)
// return acc +
// values.reduce((acc,curr)=>{
//   return acc+curr
// },0)
// },0)
// console.log(studentmark);
// })

// foo(); // Output: "Hello from foo!"

// function foo() {
//   console.log("Hello from foo!");
// }
// function abc(x,y,z){
//   return x+y+z
// }
// function abc(x){
//   return function(y){
//     return function(z){
//       return x+y+z
//     }
//   }
// }

// let result=abc(1)
// let result1=result(2)(3)
// console.log(result1);

// let array=[100,1,45,67,89]
// let max=0;
// for(let i=0;i<array.length;i++){
//   if(array[i]>max){
//     max=array[i]
//   }
// }
// console.log(max);

// let obj={};
// let keys=Object.keys(obj)
// console.log(keys.length===0)
function recursivePrint(n) {
    if (n <10) {
      console.log(n);
      recursivePrint(n + 1);
    }
  }
  
  recursivePrint(1);
  