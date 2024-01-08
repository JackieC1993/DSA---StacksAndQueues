const { link } = require("fs");
const { inspect } = require("util");

/* 
    - STACKS
    - follows last in first out policy (stack of pancakes) 
    methods:
    insert(push) -> add to to top of stack
    delete (pop) -> remove from top of stack



*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  isEmpty() {
    return this.top === null;
  }
  // add node to the top of the stack. (new head)
  push(data) {
    // take in a (value not a node)
    //  add a node to the top of the stack
    const newNode = new Node(data);
    // .next = null
    //  .next of newNode point to current top of stack
    newNode.next = this.top;
    // reassign top of this stack to point to our newNode
    this.top = newNode;
  }
  // peek -> returns node at the top of the stack (if exists)
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  // pop -> remove node at top of the stack -> reassigns next node as the new top -> returns removed node
  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let currentTop = this.top
    if(currentTop){
        const newTop = currentTop.next
        this.top = newTop
        return currentTop
    }

  }
}

const monthStack = new Stack();

//   console.log(monthStack.peek())

for (let i = 0; i < months.length; i++) {
  monthStack.push(months[i]);
}

  console.log(monthStack.peek())
  console.log(monthStack.pop())
  console.log(monthStack.peek())

  console.log(inspect(monthStack, {showHidden: true, colors:true, depth:12}))