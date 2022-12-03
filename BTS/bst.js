/**
 * module: bst
 * author: Praveen Kumar
 * date: 03-12-2022
 * description: Implementation of Binary Search Tree with JS
 */
//Lets create a constructor function for each node.
function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
 * Every node has a node on its left side -> the node smaller than the current node's value
 * apart from that a node on its right side -> the node bigger than the current node's value
 */
//Lets create a Tree class containing a root node which is null as of now,
//As of now our tree has no nodes, untill we add some nodes to it;
class Tree{
    //the constructor contains the value of the root node which is null
    constructor(){
        this.root = null;
    }
    //method to add node in our BST
    addNode(data){
        const newNode = new Node(data);
        //if no root node
        if(!this.root){
            //if no root node create a root node
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    //method to add node to our root node
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(!node.left){
                //if no left child node -> assing new node as left child node
                node.left = newNode;
            }else{
                //if left node is already available -> call insertNode() with left node value and the newNode value
                this.insertNode(node.left,newNode)
            }
        }else{
            if(!node.right){
                //if no right node-> assign newNode as right child node.
                node.right = newNode;
            }else{
                //If right child node is already available -> call insertNode with current right child node value & new node.
                this.insertNode(node.right,newNode);
            }
        }
    }
}

//Lets test our bst implementation
const testNode = new Tree();
console.log(testNode.addNode(5));
console.log(testNode.addNode(12));
console.log(testNode.addNode(3));
