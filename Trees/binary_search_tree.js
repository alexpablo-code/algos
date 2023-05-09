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
        } else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //go left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        }

        lookup(value){
            if(!this.root){
                return false;
            }
            let currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                } else if(value > currentNode.value){
                    currentNode = currentNode.right;
                } else if(value == currentNode.value){
                    return currentNode;
                }
            }
            return false;
        }
    }

const newTree = new BinarySearchTree();
newTree.insert(9);
newTree.insert(4);
newTree.insert(6);

console.log(newTree.lookup(4));
// console.log(JSON.stringify(traverse(newTree.root)));
//      9   
//   4     20  
//  1 6   15 170

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right ===null ? null:
    traverse(node.right);
    return tree;
}