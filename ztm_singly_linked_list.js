
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(idx, value){
        const newNode = new Node(value);
        let currentNode = this.head;
        let nextIdx = 0
        while(currentNode !== null){
            nextIdx++;
            if(idx === 0){
                this.prepend(value);
                return this;
            }
            else if(nextIdx == idx){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return this;
            }
            currentNode = currentNode.next;
        }
        return this;
    }

    remove(idx){
        if(this.head == null){
            return "empty list"
        }
        const prevNode = this.traverse(idx -1);
        const idxToRemove = prevNode.next;
        prevNode.next = idxToRemove.next;
        this.length--;
        return this;

    }

    traverse(idx){
        let currentNode = this.head;
        let counter = 0;
        while(counter !== idx){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new Linkedlist();
myLinkedList.append(5);
myLinkedList.prepend(1)
console.log(myLinkedList.printList());
myLinkedList.insert(1,8);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());