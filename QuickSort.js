// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let leftarray=[]
//     let rightarray=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             rightarray.push(arr[i])
//         }else{
//             leftarray.push(arr[i])
//         }
//     }
//     return [...quicksort(leftarray),pivot,...quicksort(rightarray)]
// }
// let arr=[3,7,12,1,-9,111,9]
// console.log(quicksort(arr))


//stack 

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//       return  this.items.push(element)
//     }
//     pop(){
//        return this.items.pop()
//     }
//     peek(){
//         return this.items(this.items.length-1)
//     }

//     isempty(){
//         return this.items.length===0
//     }
//     print(){
//    return this.items
//     }
// }
// let stack =new Stack
// console.log(stack.isempty());
// stack.push(77)
// stack.push(2)
// stack.push(3)
// stack.push(23)
// stack.push(7)
// console.log(stack.print());
// console.log(stack.isempty());

//Queue

class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isempty(){
        return this.items.length===0
    }
    peek(){
        if(!this.isempty()){
            return this.items[0]
        }else{
            return null
        }
    }
    print(){
        console.log(this.items);
    }
}
let queue = new Queue
console.log(queue.isempty())
queue.enqueue(55)
queue.enqueue(23)
queue.enqueue(2)
queue.enqueue(53)
queue.enqueue(32)
queue.print()
queue.dequeue()

console.log(queue.peek());