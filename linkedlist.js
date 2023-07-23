class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
isEmpty(){
    return this.size===0
}
getsize(){
    return this.size
}
//prepend
 prepend(value){
    const node= new Node(value);
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
 }
//append
append(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head=node;
    }else{
        let prev=this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next=node
    }

}
//print
print(){
    if(this.isEmpty()){
        console.log("list is empty");
    }else{
        let curr= this.head
        let  listvalues =[]
        while(curr){
            listvalues.push(curr.value)
            curr=curr.next
        }
        console.log(listvalues);
    }
}
}
const list = new Linkedlist()
list.prepend(77)
list.prepend(8)
list.prepend(88)
list.prepend(11)
list.append(22)
list.print()
