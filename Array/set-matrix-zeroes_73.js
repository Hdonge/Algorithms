/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix == null || matrix.length == 0){
       return matrix;
    }
    
    let m = matrix.length;
    let n = matrix[0].length;
    
    let firstRowZero = false;
    let firstColumnZero = false;
    //Check each element in first row if zero.
    for(let i = 0; i < n; i++){
        if(matrix[0][i] == 0){
            firstRowZero = true;
            break;
        }
    }
    //Check each element in first column if zero.
    for(let i = 0; i < m; i++){
        if(matrix[i][0] == 0){
            firstColumnZero = true;
            break;
        }
    }
    
    //Now Skip first row and first column to find other zeros and ones.
    //Based on zero present at that i,j position make correspoding first row and first column element zero
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[i][j] == 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    // now again iterate over matrix from 1x1 and check for any element if first row element or first column element is zero then make that element zero.
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(matrix[0][j] == 0 || matrix[i][0] == 0){
                matrix[i][j] = 0;
            }
        }
    }
    
    if(firstRowZero){
        for(let i = 0; i < n; i++){
            matrix[0][i] = 0;   
        }
    }
    
    if(firstColumnZero){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0;   
        }
    }
    
    return matrix;
};
