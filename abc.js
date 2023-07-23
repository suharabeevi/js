

    const a = [
        { a: 89, m2: 67 },
        { m1: 5, m2: 0 },
        { p: 4 },
        { y: 9, e: -1 },
      ];
      
      let values1 = a.map((obj) => {
        const keys = Object.keys(obj);
        const values = Object.values(obj);
      
        if (values.length === 2 && 'a' in obj && 'm2' in obj) {
          for (let i = values[0]; i >= values[1]; i--) {
            console.log(i);
          }
        }
      });
      
      console.log(values1);
      
    
//     for(let i=0;i<a.length;i++){
//      let values=a[i]
//      let result=Object.values(a[i])
//     console.log(values,result);
//    if(result.length===2 && 'a' in values && 'm2' in values){
//     for(let i=values.a;i>=values.m2;i--){
//         console.log(i);
//     }
//    }else if (result.length ===2 && 'm1' in values && 'm2' in values)  {
//     for(let i=values.m1;i>=values.m2;i--){
//     console.log(i)
//     }
//    }else if(result.length===1 && 'p' in values){
//     for(let i=values.p;i>=-values.p;i--){
//         console.log(i);
//     }
//    }else
//    for(let i=values.y;i>=values.e;i--){
//     console.log(i);
//    }
// }