/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    let length = nums.length;

    for(let i = 0; i < length; i++){
        if(map.has(nums[i])){
           return true; 
        }else{
            map.set(nums[i],i);
        }
    }
    return false;
};