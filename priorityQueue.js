const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

MinPriorityQueue.enqueue(2);
MinPriorityQueue.enqueue(4);
MinPriorityQueue.enqueue(5);
MinPriorityQueue.enqueue(1);

console.log(MinPriorityQueue);
