const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  let ages=input.map(ages=>{
    return ages.age
  })
  // .sort((a,b)=>{
  //   return a-b
  // }).reduce((acc,curr)=>{
  //   return acc+curr
  // })
console.log([Math.min(...ages),Math.max(...ages),Math.max(...ages) - Math.min(...ages)])

 