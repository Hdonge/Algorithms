/**
 * @param {number[]} nums
 * @return {number[]}
 */
//O(n) & O(n)
/*var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let number = [];
    let set = new Set();
    
    for(let i = 0; i < length; i++){
        set.add(nums[i]);
    }
    
    for(let i = 1; i <= length ; i++ ){
        if(!set.has(i)){
            number.push(i);
        }
    }
    return number;
};
*/

//O(n) & O(1)
var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let number = [];
    
    for(i= 0; i < length; i++) {
        let num = Math.abs(nums[i]);
        let index = num - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }
        
    for(i=0; i < length; i++){
        if(nums[i] > 0){
           number.push(i+1); 
        }
    }
    
    return number;
}