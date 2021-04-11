/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length;
    let indexToBeFilled = 0;
    
    for(let i = 0; i< length; i++){
        //below pulls the non equal , unique elements to front of the array
        if(nums[i] !== nums[indexToBeFilled]){
            indexToBeFilled++;
            swap(nums, i, indexToBeFilled);   
        }
    }
    
    let uniqueCount = indexToBeFilled +1;
    return uniqueCount;
};

var swap = function(nums, i, indexToBeFilled){
    let temp = nums[i];
    nums[i] = nums[indexToBeFilled];
    nums[indexToBeFilled] = temp;
}
