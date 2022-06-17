# Reverse A string code challenge

In this challenge, we want to reverse a string in three ways without using the Strig.Reverse() built in method.

### The first Aprroach:

was to use an array containing all the characters from the string, looping until the array is empty, and on each loop, we take the last character from the array and concatunate it to a new string I called reversed.

once the array is empty, meaning we have taken all of the characters out, the loop shall break and would have taken all of the characters and the input string is now reversed.

### The second Approach:

Was to split the input string to an array containing all of the characters, then use the built in method array.reverse() and join the array once again to end up with a reversed string from the original input string.

### The third Approach:

In this approach I've used a recursive helper function that keeps checking on the array length, if the length is greater than zero, we call the function again to get the last element of the array at each itteration.

Below; You can find the whiteBoard for all three methods.

![Reverse String](../../assets/White%20Board.jpg)

![Reverse String](<../../assets/White%20Board%20(2).jpg>)

![Reverse String](<../../assets/White%20Board%20(3).jpg>)
