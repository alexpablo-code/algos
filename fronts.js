class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        // this.tail = null
        // this.length = 0
    }
    
    addFront(value){
        let newNode = new Node(value);
    
        //if the list is empty
        if(!this.head){
            this.head = newNode;
            return this;
        }
    
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront(){

        if(!this.head){
            return null
        }
        else{
            this.head = this.head.next;
            return this;
        }
    }

    frontData(){
        if(!this.head){
            return null;
        }
        console.log(this.head.data);
        return this;
    }

    display(){
        let currentNode = this.head
        let displayList = []
        if(!this.head){
            return null;
        }
        while(currentNode){
            displayList.push(currentNode.data)
            currentNode = currentNode.next;
        }
        return console.log(displayList);
    }


}

const SLL = new SinglyLinkedList();
SLL.addFront('A').addFront('b').addFront('c');
console.log(SLL);
SLL.removeFront();
console.log(SLL)
SLL.frontData()
SLL.display()

