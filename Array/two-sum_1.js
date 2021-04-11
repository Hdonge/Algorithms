/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length;
    let map = new Map();
    
    for(let i= 0; i<length; i++){
        //First get the index of the diffrenece of target and new value getting inserted . Then check if the difference is already present
        let difIndex = map.get(target - nums[i]);
        if(difIndex !== undefined){
            return [difIndex,i];
        }else{
            map.set(nums[i],i);    
        }
    }
    return [-1,-1];
};