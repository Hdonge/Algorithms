/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n) & O(n)
var majorityElement = function(nums) {
    let length = nums.length;
    let majorityLength = length/2;
    let map = new Map();
    let majorityElement;
    
    for(let i = 0; i< length; i++){
        let count = map.get(nums[i]) || 0;
        count = count + 1; 
        map.set(nums[i], count);
    }
        
    for(let [key, value] of map){
     if(value > majorityLength){
         majorityElement = key
     }
    }
    return majorityElement;
};



//To solve this is O(1) it can be done with sorting but there it will affect the time complexity which will go O(nlogn).

//O(nlogn) & O(1)
/*var majorityElement = function(nums) {
    return nums.sort()[Math.floor(nums.length/2)];
}*/