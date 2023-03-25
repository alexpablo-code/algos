class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
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

    contains(value){
        let currentNode = this.head
        
        while(currentNode){
            if(currentNode.data === value){
                return true;
            }
            currentNode = currentNode.next;
            // if(currentNode.data == value){
            //     containsVal = true;
            // }
        }
        return false;
        
    }
}

const newSLL = new SLL();
newSLL.addFront('a').addFront('b').addFront('z');
console.log(newSLL);

console.log(newSLL.contains('a'));
