/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;
    
    while(left < right){
        let middle = left + Math.floor(((right-left)/2));
        
        if(nums[middle] < nums[middle+1]){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    
    return left;
};
