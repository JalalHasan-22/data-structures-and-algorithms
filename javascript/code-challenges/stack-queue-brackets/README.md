# Stack-Queue-Brackets

in this challenge, I've defined a function that takes a string as an argument, it removes all letters and numbers from the string and keeps the brackets only with the help of regex & replaceAll method, then with the help of the split method, I stored them in an array.

after that I check if the length of the array is either 1 or 0 to return false.

if not, I loop over this array and push each bracket into a stack.

then I create a loop to check for the peek of this stack and increase the value of its corresponding variable keeping a count of all matching brackets, and with the help of the remaining operator, I check to see if the number of brackets is even or odd, if its even then return true, if not it will return false.

### Big O

<br>Big O: => time complexity => O(n) // we need to loop over all the stack nodes<br>
space => O(n) // Creating a new stack same as the size of the array.

You can check the white board drawing below:

![WhiteBoard](White%20Board.jpg)
