# Stack and Queue

in this challenge, I've implemented the idea using a linked list as a storage for the stack & the queue.
my linkedlist data structure only have what it takes to implement the stack nad the queue.
the linkedlist has only three methods, the Insert where we insert new nodes to the head of the linked list, this should represent the stack, where we keep retrieving the head of the list so it will always return the last element that was inserted using the list retrieve method along with the stack pop method

I have also added a length property which will increase with every insert or append to the list, and will decrease with each retreive.
the retreive always returns the head. the only difference is with the stack we always add or push elements using the list append method, meaning that the head will always be changed and the last node added as the head will be the first to pop.

However in the queue; we use the list append method to enqueue elements to the list, meaning that new nodes added will not affect the head, and using the retrieve method we will get the first node that was added.

## Stack methods and Big O analysis

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

4. ### isEmpty:
   for the isEmpty method, I simply compare the length of the linked list with the number 0 to return true or false.
   <br>Big O: => time complexity => O(1)<br>
   space => O(1)

## Queue methods and Big O analysis

1. ### enqueue:

   for the enqueue method, I've used the linked list append method, which will keep adding new nodes to the end of the list
   <br>Big O: => time complexity => O(n) // we only insert one node at the end of the list, but we might need to traverse to the end of the list if it was not empty.<br>
   space => O(1) // the space of the new node only was used in the memory.

2. ### dequeue:

   for the dequeue method, I've used the linked list retreive method, which will get the value of the head of the list.
   <br>Big O: => time complexity => O(1) // we only retrieve the head of the list.<br>
   space => O(1) // the space of the new node only was used in the memory to create a temp variable.

3. ### peek:

   for the peek method, I just return the value of the head of the list, or the fron of the queue.
   <br>Big O: => time complexity => O(1) // we only retrieve the head of the list.<br>
   space => O(1)

4. ### isEmpty:
   for the isEmpty method, I simply compare the length of the linked list with the number 0 to return true or false.
   <br>Big O: => time complexity => O(1)<br>
   space => O(1)

[Table of content](../../../README.md)
