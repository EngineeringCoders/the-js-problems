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
    //method to remove a node from our tree 
    remove(data){
        this.root = this.removeNode(this.root,data);
    }
    //method to decide which node to be removed
    removeNode(node,data){
        if(!node){
            return null;
        }
        if(data<node.data){
            node.left = this.removeNode(node.left,data);
            return node;
        }else if(data > node.data){
            node.right = this.removeNode(node.right,data);
        }else{
            if(!node.left && !node.right){
                node = null;
                return node;
            }
            if(!node.left){
                node = node.right;
                return node;
            }
            if(!node.right){
                node = node.left
                return left;
            }

            let min = this.findMinNode(node.right);
            node.data = min.data;
            node.right = this.removeNode(node.right,min.data)
            return node;
        }
    }

    //Travering a BST
    /**
     * We can traverse the given BST in three ways ie  Inorder, Preorder, Postorder.
     * 1. Inorder: 
     *  If we want to flatten the tree back into it's original sequence then we make use of Inorder traversing technique
     *  The order of nodes are 
     *  - Left subtree
     *  - Root node 
     *  - Right subtree.
     *  
     */
    //Inorder
    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    /**
     * The second way of traversing a give BST is PreOrder.
     * In preorder we go through the roots before going to their childs.
     * In this traversing we need to inspect roots before inspecting their leaves(childs).
     * Preorder follows the given below hierarchy to traverse a given bst:
     *  - Root node
     *  - Left node
     *  - Right node
     */
    //PreOrder
    preOrder(node){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    /**
     * PostOrder:
     * If we want to delete an entire tree, or simply want to inspect the leaves before inspecting the nodes.
     * If we delete the root node, then we won't be able to delte the node in the right hand side.
     */
    //Postorder
    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    //breath-first traversal of a tree
    traverseBFS(){
        //checking for first level of nodes
        if(!this.root) return ;
        //initilize a queue
        this.queue = [];
        //pushed first node ie root node into the queue
        this.queue.push(this.root);
        this.output = [];
        while(this.queue.length){
            //the last item in the given queue
            const node = this.queue.shift();
            //traversing one level of child starts
            if(node.left){
                this.queue.push(node.left);
            }
            if(node.right){
                this.queue.push(node.right);
            }
            //traversing one level of child stop
            this.output.push(node.data);

        }
        return this.output;
    }

    //Find the minimum and maximum 
    /**
     * Finding the max or min value of a bst is bit easier, as we already know
     * that the left subtree's values are lower the the current node, and the right subtree's 
     * values are higher than the current node.
     */
    getMin(){
        let node = this.root;
        while(node.left){
            node = node.left;
        }
        return node.data;
    }
    //find max value of a bst
    getMax(){
        let node = this.root;
        while(node.right){
            node = node.right;
        }
        return node.data;
    }
    /**
     * Time complexity of BST
     * Average: 0(log(n)) -> The number of items is split in half, & we are able to decide either we
     * need to go to left or right sub trees.
     * Worst: o(n) --> If the tree is very unbalanced, it resembles a linked list.
     * Worst space: The more items, the bigger the data list 
     */
}

//Lets test our bst implementation
const testNode = new Tree();
console.log(testNode.addNode(5));
console.log(testNode.addNode(12));
console.log(testNode.addNode(3));

// write a program to check if a given number is divisible by 5.
// if it is divisible by 5 then print 'chocolate'
// if it is not divisible by 5 then print 'poison'