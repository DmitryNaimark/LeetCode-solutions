// https://leetcode.com/problems/binary-search/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Invariants (See another solution, which uses clearer invariants).
    // Binary search has 3 "ranges":
    //     - iLeft and elements to the left - Less than target OR target itself
    //     - iRight and elements to the right - Higher than target OR target itself
    //     - Elements between iLeft and iRight - remain to be seen and moved to the right or left range.
    let iLeft = 0,
        iRight = nums.length - 1;
    
    // Since our invariants state that iLeft can be target or iRight can be target, that means,
    // that at the end, when iLeft === iRight, we should check if it is target, therefore "<=" is used. 
    while (iLeft <= iRight) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] < target) {
            iLeft = iMid + 1;
        } else if (nums[iMid] > target) {
            iRight = iMid - 1;
        } else {
            return iMid;
        }
    }
    
    return -1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(search([-1,0,3,5,9,12], 9));
// -1
console.log(search([-1,0,3,5,9,12], 2));
