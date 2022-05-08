# Merge Sort

The merge sort is one of the more advanced sorting algorithms that’s quite efficient in sorting large amounts of data. The algorithm uses the recursive function concept with divide and conquer strategy to efficiently sort a given list of elements.

Pseudocode

> ALGORITHM Mergesort(arr)<br>
> DECLARE n <-- arr.length<br> > <br>
> if n > 1<br>
> DECLARE mid <-- n/2<br>
> DECLARE left <-- arr[0...mid]<br>
> DECLARE right <-- arr[mid...n]<br>
> // sort the left side<br>
> Mergesort(left)<br>
> // sort the right side<br>
> Mergesort(right)<br>
> // merge the sorted left and right sides together<br>
> Merge(left, right, arr)<br> ><br>
> ALGORITHM Merge(left, right, arr)<br>
> DECLARE i <-- 0<br>
> DECLARE j <-- 0<br>
> DECLARE k <-- 0<br> ><br>
> while i < left.length && j < right.length<br>
> if left[i] <= right[j]<br>
> arr[k] <-- left[i]<br>
> i <-- i + 1<br>
> else<br>
> arr[k] <-- right[j]<br>
> j <-- j + 1<br> ><br>
> k <-- k + 1<br> ><br>
> if i = left.length<br>
> set remaining entries in arr to remaining values in right<br>
> else<br>
> set remaining entries in arr to remaining values in left<br>

## trace

Sample Array : [8,23,4,42,16,15];

- phase 1:

first we split the array into two halves until there is only one element in each array
[8,23,4,42,16,15]<br>
[8,23,4] | [42,16,15]<br>
[8] [23,4] | [42] [16,15]<br>
[8] [23] [4] | [42] [16] [15]<br>

- phase 2:

we start merging two closest arrays. the smaller element is pushed to the new empty array thus sorting the array one step at a time.

[8] [23] [4] | [42] [16] [15]<br>
[8] [4,23] | [42] [15,16]<br>
[4,8,23] | [15,16,42]<br>
[4,8,15,16,23,42]<br>

## Efficency

Time: O(n log(n))<br>
we do multiple comparisons between two halfs of an array<br>
Space: O(n)<br>
an array of n number of inputs was added
