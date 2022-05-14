# Hash Table: New implementation

A hash table is a data structure that implements a set abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.

Each bucket or slot can be implemented as a linked list and to keep the collision as least as possible, it is recommended to increase the size of the table or map associated with the table, which is simply an array, a desired size for this array is 1024.

The main advantage of hash tables over other data structures is speed . The access time of an element is on average O(1).

There are many ways to calculate the hash code or hashed index, one of the ways is to calculate and sum the ascii codes for all characters of the key, then multiply the outcome by 599, and then calculate the modulus of the outcome over the map size.

## Challenge

This is a new implementation of the hash table data structure, in this challenge, we try to implement a hashtable with some of its associated methods such as Set, Get, Keys, Hash, and contains methods.

## Approach & Efficiency

The main advantage of hash tables over other data structures is speed . The access time of an element is on average O(1).
I have implemented a linked list as the storage for each bucket.

### Methods

#### 1- hash():

The hash method is used to create a hashed index whithin a range of the table size.
Arguments:

- key
- Returns: Index in the collection for that key

The algorithm used is by converting all of the of the characters into ascii code, multiplying the summation of the ascii codes by 599 and calculating the modulus over the size of the table.

#### Approach & Efficiency

- Time complexity: O(1), a constant calculating the hashed index.
- Space Complexity: O(1), constant space allocated in the memory regardless of the size of the input.

#### 2- Set():

This method hashes the key, and set the key and value pair in the table.

- Arguments: key, value
- Returns: nothing

#### Approach & Efficiency

- Time complexity:
  - Worst case scenario: O(n),where n is the length of the linked list in a bucket. But this can be easily changed to have a time complexity of O(1) by adding a "tale" feature to the linked list implementation, which is simply a pointer pointing at the last node in the list.
  - Best case scenario: O(1), when we need to apped a value at a bucket with an empty linked list
- Space Complexity: O(1), constant space allocated in the memory regardless of the size of the input.

#### 3- Get():

This method is where the hashtable really shines, it has the speed over other datastructures, making it to have a time complexity of O(1) when retrieving an item from the table.

- Arguments: key
- Returns: Value associated with that key in the table

#### Approach & Efficiency

- Time complexity: O(1), a constant calculating the hashed indexand reading the value from the table.
- Space Complexity: O(1), No extra space is allocated in the memory.

#### 4- Contains():

This method takes in a key as an argument and returns a boolean whether this key is stored in the table or not.

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

#### Approach & Efficiency

- Time complexity: O(1), a constant calculating the hashed indexand cecking the value in the table at that position.
- Space Complexity: O(1), No extra space is allocated in the memory.

#### 5- Keys():

This method returns the collection of keys stored in the table, it takes no arguments and returns all keys stored in a table as an array of keys.

#### Approach & Efficiency

- Time complexity: O(n), Where n is the size of the table, we have to check for each bucket or slot in the table.
- Space Complexity: O(n), Where n represents the size of the key's array.
