/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length;
    //We will be using kadane's algorithm to solve this problem. Time complexity of solution will be O(n) (Linear progression)
    let local_max= nums[0];
    let global_max  = nums[0];
    
    for(let i = 1; i<length; i++){
        local_max = Math.max(nums[i], local_max+ nums[i]);
        
        global_max = Math.max(global_max, local_max);
    }
    
    return global_max;
};