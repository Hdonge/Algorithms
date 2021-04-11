/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var sortColors = function(nums) {
    if(nums === null || nums.length === 0){
       return [];
    }
    
    let middle = 0;
    let lower = 0;
    let higher = nums.length - 1;
    
    while(middle <= higher){
        
        if(nums[middle] == 0){
            swap(nums, middle, lower);
            middle++;
            lower++;
        }else if(nums[middle] == 1){
            middle++;
        }else if(nums[middle] == 2){
           swap(nums, middle, higher);
           higher--;
        }
    }
};