class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    addtoBack(value){
        let newNode = new Node(value);
        
        if(this.head == null){
            this.head = newNode;
            return this;
        }

        //we need to go to the last node
        let currentNode= this.head
        while(currentNode.next !== null){
            currentNode = currentNode.next
        }
        currentNode.next = newNode

        return this;
    }

    printAllData(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        return this;
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
}

const firstSsl = new SinglyLinkedList();
firstSsl.addFront("A").addFront('B');
console.log(firstSsl);
// firstSsl.printAllData();
firstSsl.addtoBack('eee').printAllData();