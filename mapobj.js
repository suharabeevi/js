let map= new Map([['a',1],['b',2]])
map.set('c',9)
for (const[keys,value] of  map){
    console.log(`${keys}:${value}`);
}
