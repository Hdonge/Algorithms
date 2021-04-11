/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//2. Iterative solution
var subsets = function(nums) {
    if(nums===null || nums.length===0){
       return [];
    }
    
    let result = [];
    result.push([]);
    
    for(let x of nums){
        let n = result.length;
        
        for(let i = 0; i<n; i++){
            let r = result[i].slice();
            r.push(x);
            result.push(r);
        }
    }
    
    return result;
}



//1. Recursive solutipn.
/*var subsets = function(nums) {
    if(nums===null || nums.length===0){
        return [];
    }
    
    let result = [];
    
    subsets_recursion(nums,0,result);
    
    return result;
};

function subsets_recursion(nums, index, result){
    if(index === nums.length -1 ){
        result.push([]);
        result.push([nums[index]]);
    }else{
        subsets_recursion(nums, index+1, result);
        
        let n = result.length;
        
        for(let i = 0; i < n ; i++){
            let r = result[i].slice();
            r.push(nums[index]);
            result.push(r);
        }
    }
}*/