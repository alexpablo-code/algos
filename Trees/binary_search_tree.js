class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
        }
        currentNode = this.root;
        while(currentNode !== null){
            if(newNode.value > currentNode.value){
                currentNode = currentNode.right;
            } else{
                currentNode = currentNode.left
            }
        
        }

    }

    lookup(){

    }
}

const newTree = new BinarySearchTree();

//      9   
//   4     20  
//  1 6   15 170
