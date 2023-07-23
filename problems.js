// to get all the students whose grades are greater than or equal to 90.
// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
// let markofstudents=students
// .map(student=>student.grade)
// .filter(grade=>grade>=90
// )
// console.log(markofstudents);

// let employees = [
//   {
//       "id": 11,
//       "name":"Abhinav",
//       "salary":75000
//   },
//   {
//       "id": 2131,
//       "name":"Gaurav",
//       "salary":62000
//   },
//   {
//       "id": 3012,
//       "name":"Raj",
//       "salary":32000
//   }]

// let highsalary=employees.map(employees=>employees.salary)
// .reduce((acc,curr)=>{
// return acc>curr ? acc :curr
//  })

// console.log(highsalary);

// call bind apply

// let name ={
// firstname:"suhara",
// lastname:"beevi"
// }
// function fullname(hometown){
//   console.log(this.firstname + " " +this.lastname + hometown)
// }

// fullname.call(name,ekm)
function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function calculate() {
  const result1 = addNumbers(2, 3);
  const result2 = multiplyNumbers(result1, 4);
  return result2;
}

console.log(calculate()); // Output: 20
console.log('This will be printed after the calculations.');
