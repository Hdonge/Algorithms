/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//1. Basic alogrithm
/*var merge = function(intervals) {
    if(intervals === null || intervals.length === 0){
        return intervals;
    }
    //Sort intervals
    intervals.sort((a, b) => a[0] - b[0]);  //O(nlog(n))
    
    let output = [];
    
    let current_interval = intervals[0];
    output.push(current_interval);
    
    for(let interval = 1; interval < intervals.length; interval++){
        let current_begin = current_interval[0];
        let current_end = current_interval[1];
        
        let next_begin = intervals[interval][0];
        let next_end = intervals[interval][1];
        
        if(next_begin <= current_end){
           current_interval[1] = Math.max(current_end, next_end);
        }else{
            current_interval = intervals[interval];
            output.push(current_interval);
        }
    }
    
    return output;
};*/

//2. Improved solution. inplace

var merge = function(intervals) {
    if(intervals === null || intervals.length === 0){
        return intervals;
    }
    //Sort intervals
    intervals.sort((a, b) => a[0] - b[0]);  //O(nlog(n))
    
    for(let interval = 0; interval < intervals.length -1; interval++){
        let [current_begin, current_end] = intervals[interval];
        let [next_begin, next_end] = intervals[interval + 1];
        
        if(next_begin <= current_end){
            intervals[interval][0] = Math.min(current_begin, next_begin); 
            intervals[interval][1] = Math.max(current_end, next_end);
            
            //Splice next interval since next interval information got merged into current.
            intervals.splice(interval+1,1);
            //To check if current interval is again matching to next to next interval will have to keep pointer to first element in for loop for next loop
            interval--;
        }
    }
    
    return intervals;
};
