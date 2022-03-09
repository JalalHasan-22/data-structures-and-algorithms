# linked-list-kth

A single linked list is the simplest form of the linked list data structure. it stores data in a list which does not need to be stored in contiguous locations in the memory, inserting and retreiving data from the list is much easier and faster, and it can easly be scalled up or down holding as much data as needed.

## Challenge

In this challenge, I have implemented a linked list along with a set of tests for it.

## Approach & Efficiency

I have implemented the linked list in a Class approach, where each of the list method is a method of the class, creating a new linked list is simply creating a new instance of the class.

## API

1. kthFromEnd(k) : to get the last element from the end of the list by counting the steps of k from the end.
   <br>Big O: => time complexity => O(n) // we might need to loop over all the list nodes if we want to insert before the last element.<br>
   space => O(1) // only one variable created

   ![append](../../assets/WhiteBoard.jpg)

2. append(value) : used to add a new node to the end of the list with the value passed to this method.
   <br>Big O: => time complexity => O(n) // we want to loop over all the list nodes.<br>
   space => O(1) // only one variable created

   ![append](../../assets/Append.jpg)
