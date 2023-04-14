
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    // Last one In, is first one Out
    constructor(){
        this.top = null
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        // see the top element/node
        return this.top;
    }

    push(value){
        // add node to Top of stack
        const newNode = new Node(value);
        if(this.bottom == null){
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
            return this;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop(){
        //remove from top of stack
        if(!this.top){
            return null;
        }
        if(this.top == this.bottom){
            //this is for when, there is only one node in the list, it will remove the bottom ref too
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;

    }
}

const myStack = new Stack();

console.log(myStack.push('Discord').push('Udemy'));
console.log(myStack.pop())
//Discord, Udemy, Google