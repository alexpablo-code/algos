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
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
}

const firstSsl = new SinglyLinkedList();
firstSsl.addFront("A").addFront('B');
console.log(firstSsl);
firstSsl.printAllData();
