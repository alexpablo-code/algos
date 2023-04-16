class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;

    }

    peek(){
        return this.first.value;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.first == null){
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    dequeue(){
        if(this.length= 0){
            return null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();

console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Matt').enqueue('Pavel').enqueue('Samir'));
console.log(myQueue.dequeue());