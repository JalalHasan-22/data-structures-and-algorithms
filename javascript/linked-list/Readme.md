# Singly Linked List

A single linked list is the simplest form of the linked list data structure. it stores data in a list which does not need to be stored in contiguous locations in the memory, inserting and retreiving data from the list is much easier and faster, and it can easly be scalled up or down holding as much data as needed.

## Challenge

In this challenge, I have implemented a linked list along with a set of tests for it.

## Approach & Efficiency

I have implemented the linked list in a Class approach, where each of the list method is a method of the class, creating a new linked list is simply creating a new instance of the class.

The sigle linked list approach, where the Big O for time complexity of the insertion and retreiving of the list is (O(1)).

## API

1. insert(value) : used to insert a new node to the beginning of the list with the value passed.

### Big O

- Time complexity: => O(1) as we only inert the element at the head of the list.
- Space complexity: => O(1) no space was used in this method but to create a new node.

2. append(value) : used to add a new node to the end of the list with the value passed to this method.

### Big O

- Time complexity: => O(n) adding a value to the end of the list means that we need to loop over the full list, so the size of the list matters.
- Space complexity: => O(1) we only created one variable which is the current node.

3. includes(value) : used to check if a list contains a value or not return a boolean, true if the value is in the list and false if the value was not found.

### Big O

- Time complexity: => O(n) in worst case scenario, our target node might be the last node in the list
- Space complexity: => O(1)

4. toString() : this method prints the elements or the data in the list. takes no argument and returns a strin with the correct order of the nodes and their next node.

### Big O

- Time complexity: => O(n) we are basicaly looping over the whole list nodes and getting their values.
- Space complexity: => O(1), one space in the memory for the output string.
