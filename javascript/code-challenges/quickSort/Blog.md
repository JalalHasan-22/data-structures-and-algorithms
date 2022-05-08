# Quick Sort

QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.

The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

## Pseudo Code

> ALGORITHM QuickSort(arr, left, right)<br>
> if left < right<br>
> // Partition the array by setting the position of the pivot value<br>
> DEFINE position <-- Partition(arr, left, right)<br>
> // Sort the left<br>
> QuickSort(arr, left, position - 1)<br>
> // Sort the right<br>
> QuickSort(arr, position + 1, right)<br> ><br>
> ALGORITHM Partition(arr, left, right)<br>
> // set a pivot value as a point of reference<br>
> DEFINE pivot <-- arr[right]<br>
> // create a variable to track the largest index of numbers lower than the defined pivot<br> ><br>
> DEFINE low <-- left - 1<br>
> for i <- left to right do<br>
> if arr[i] <= pivot<br>
> low++<br>
> Swap(arr, i, low)<br> ><br>
> // place the value of the pivot location in the middle.<br>
> // all numbers smaller than the pivot are on the left, larger on the right.<br>
> Swap(arr, right, low + 1)<br>
>
> // return the pivot index point <br>
> return low + 1<br> ><br>
> ALGORITHM Swap(arr, i, low)<br>
> DEFINE temp;<br>
> temp <-- arr[i]<br>
> arr[i] <-- arr[low]<br>
> arr[low] <-- temp<br>

## Tracing

![Quicksort](./assets/Quicksort.png)

## Efficiency

-Time complexity:<br>
O( n log(n) ) // Multiple comparisons between two halfs of the array.<br>
-Space complexity:<br>
O(log(n)) In-place sorting means no additional storage space is used to perform sorting (except recursion stack)
