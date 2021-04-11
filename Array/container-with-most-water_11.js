/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height == null || height.length == 0) return 0;
    
    let i = 0;
    let j = height.length - 1;
    let max = -1;
    while(i < j){
        let min = Math.min(height[i], height[j]);
        max = Math.max(max, min * (j - i));
        console.log(i,j);
        if(height[i] < height[j]){
            i++;
        }else{
            j--;
        }        
    }
    return max;
};