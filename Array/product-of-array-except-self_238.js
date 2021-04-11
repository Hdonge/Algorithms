/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(nums === null || nums.length === 0){
        return [];
    }
    
    let length = nums.length;
    let output = [];
    
    
    //left to right traversal and cummulative product of array
    //output[i] contains the product of all elements to the left without including self from nums array
    //Note: for the element at index 0  there are no elements in the left.
    //So the output[0] = 1;
    output[0] = 1;
    for(let i = 1; i < length ; i++){
        //output[i] contains proudct of all the elements to the left from nums array
        output[i] = nums[i - 1] * output[i - 1];
    }
    
    //right to left traversal
    product = 1; //Product variable maintain product of right hand side elements.
    for(let i = length - 1 ; i >= 0; i--){
        output[i] = output[i] * product;
        product *= nums[i];
    }
    
    return output;
};