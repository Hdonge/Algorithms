/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length
    let indexToBeFilled = 0;
    
    for(let i = 0; i < length; i++){
        if(nums[i]!==0){
            //below swap pulls non zero elements to left.
            //if non zero element is found at zero index then nothing will be swapped until zero is found.
            swap(nums, i, indexToBeFilled);
            indexToBeFilled++;
        }
    }
    return nums;
};

var swap = function(nums, i, indexToBeFilled){
    let temp = nums[indexToBeFilled];
    nums[indexToBeFilled] = nums[i];
    nums[i] = temp;
}

//Follow to fill empty spaces(0s) from start so it will push empty spaces(0s) at the end.