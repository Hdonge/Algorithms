/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];
    
    if(numRows == 0){
        return triangle;
    }
    
    //first row
    triangle.push([1]);
    
    for(let i = 1; i < numRows; i++){
        let row = [];
        let prev_row = triangle[i - 1];
        //Initial 1
        row.push(1);
        //element boundry cells from insertion in this loop. boundry cells will only contain 1.
        for(let j = 1; j < i; j++){
            row.push(prev_row[j-1] + prev_row[j]);
        }
        
        //last 1
        row.push(1);
        
        triangle.push(row);
    }
    
    return triangle;
};