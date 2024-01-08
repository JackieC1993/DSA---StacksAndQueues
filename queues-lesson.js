const { link } = require("fs");
const { inspect } = require("util");
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

/* 
    QUEUES
        - first in first out (FIFO) 
        - 3 starting properties in queues
            first
            last
            size

*/

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    isEmpty() {
        return this.first === null;
      }

      // add node to the end of the list
    enqueue(data){
        let newNode = new Node(data)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        else {
            // this.last (queue prop) = node {data:", next:null} -> this.last {data: "dec" , next: {data:"mon", next: null}
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    // remove the first node in queue
    dequeue() {
        if (this.first == null) {
            throw new Error("The queue is empty");
          }
      const firstNode = this.first
      if(this.first === this.last){
        this.last = null
      }
      this.first = this.first.next
      this.size--
      return firstNode.data
    }

    peek() {
        if (this.first == null) {
          throw new Error("The queue is empty");
        }
        return this.first;
      }
}

// let value = 1
// let value2 = ++value

// console.log(value, value2)

let monthQueue = new Queue();

// console.log(monthQueue.isEmpty());

for (let i = 0; i < months.length; i++) {
  monthQueue.enqueue(months[i]);
}

console.log(monthQueue.dequeue())
console.log(inspect(monthQueue, { colors: true, depth: 12 }));
// console.log(monthQueue.first);
// console.log(monthQueue.last);
// console.log(monthQueue.isEmpty());
    