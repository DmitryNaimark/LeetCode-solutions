// https://leetcode.com/problems/valid-mountain-array/
// ---------------------------------------------------
// Given an array A of integers, return true if and only if it is a valid mountain array.
//
// Recall that A is a mountain array if and only if:
//     A.length >= 3
//     There exists some i with 0 < i < A.length - 1 such that:
//         A[0] < A[1] < ... A[i-1] < A[i]
//         A[i] > A[i+1] > ... > A[B.length - 1]
// ---------------------------------------------------
/**
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
    if (arr.length < 3) {
        return false;
    }
    
    let i = 0,
        iLast = arr.length - 1;
    
    // Go up
    while (i < iLast && arr[i] < arr[i + 1]) {
        i++;
    }
    
    // It's not a mountain if peak is the very start/end.
    if (i === 0 || i === iLast) {
        return false;
    }
    
    // Go down
    while (i < iLast && arr[i] > arr[i+1]) {
        i++;
    }
    
    return i === iLast;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// false
console.log(validMountainArray([2,1]));
// false
console.log(validMountainArray([3,5,5]));
// true
console.log(validMountainArray([0,3,2,1]));
// false
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));