# Tree Fizz-Buzz

In this challenge, I've implemented the Breadth First traversal method using a queue. I have recreated the Queue class with it is own Node class different than the tree class's node.

using the queue enqueue and dequeue methods, The implementation of Breadth First traversal was easily done using a simple while loop to check the front of the queue and since this is a k-ary tree, we simply loop over all the front node of the queue's children nodes and push the value to an array called result.

after that we check the value of the front node to see if its divisible by 3, 5 or 15 and change its value accordingly.
if non applies; we simply change its value to string using the toString() built in method.

Below, you can find the whiteboard for the method.
![fizz-buzz](./White%20Board.jpg)
