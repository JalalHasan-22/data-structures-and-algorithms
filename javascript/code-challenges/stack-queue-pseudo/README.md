# Pseudo Queue

in this challenge, I've implemented the idea using a stack which in turn is implemented using a linked list as a storage for the pseudo queue.
my linkedlist data structure only have what it takes to implement the stack which will be the storage for the pseudo queue.
the linkedlist has only three methods, the Insert where we insert new nodes to the head of the linked list, this should represent the stack, where we keep retrieving the head of the list so it will always return the last element that was inserted using the list retrieve method along with the stack pop method

I have also added a length property which will increase with every insert or append to the list, and will decrease with each retreive.
the retreive always returns the head. the only difference is with the stack we always add or push elements using the list append method, meaning that the head will always be changed and the last node added as the head will be the first to pop.

## Pseudo Queue methods and Big O analysis

1. ### enqueue:

   when we enqueue, we check if the first stack is empty, if yes we simply use the stack push method to insert this new node.
   if it was not empty; we start pushing the elemnts from the first stack to the second stack until there is nothing left, then we push the new value to the first stack so now it is both the bottom of the stack and the rear of the queue, then we reverse the operation pushing elements from the second stack to the first stack again.
   lastly, we update the queue's front and rear node accordingly.
   <br>Big O: => time complexity => O(n) // we need to loop over the full stack length<br>
   space => O(1) // the space of the new node only was used in the memory.

   #### whiteboard

   ![enqueue](./Enqueue%20White%20Board.jpg)

2. ### dequeue:

   When we dequeue; and since all the values are already in the correct order in stack 1, we simply return stack1 top element which was the first to be added to the queue and the first to be dequeued.
   lastly, we update the queue's front and rear node accordingly.

   <br>Big O: => time complexity => O(1) // we only retrieve the top of the stack.<br>
   space => O(1) // the space of the new node only was used in the memory to create a temp variable.

   #### whiteboard

   ![Dequeue](./Dequeue%20White%20Board.jpg)

## for reference only

#### Stack methods and Big O analysis

## Nothing different than before

1. ### push:

   for the push method, I've used the linked list insert method, which will keep adding new nodes to the head of the list
   <br>Big O: => time complexity => O(1) // we only insert one node and reassign the list's head.<br>
   space => O(1) // the space of the new node only was used in the memory.

2. ### pop:

   for the pop method, I've used the linked list retreive method, which will get the value of the head of the list.
   <br>Big O: => time complexity => O(1) // we only retrieve the head of the list.<br>
   space => O(1) // the space of the new node only was used in the memory to create a temp variable.

3. ### peek:

   for the peek method, I just return the value of the head of the list.
   <br>Big O: => time complexity => O(1) // we only retrieve the head of the list.<br>
   space => O(1)

[Table of content](../../../README.md)
