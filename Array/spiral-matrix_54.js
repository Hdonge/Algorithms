/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//With using direction flag
var spiralOrder = function(matrix) {
    let output = [];
    
    if(matrix === null || matrix.length === 0){
       return output;
    }
    
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length -1;
    let dir = 0; //dir (direction can be 0,1,2,3)
    
    while(left <= right && top <= bottom){
        if(dir === 0){
            //Print column elements
            for(let i = left; i <= right; i++){
                output.push(matrix[top][i]);
            }
            top++;
            dir = 1;
        }else if(dir === 1){
            //Print row elements
            for(let i = top; i <= bottom; i++ ){
                output.push(matrix[i][right]);
            }
            right--;
            dir = 2;
        }else if(dir === 2){
            //Print column elements
            for(let i = right; i >= left; i--){
                output.push(matrix[bottom][i]);
            }
            bottom--;
            dir = 3;
        }else if(dir === 3){
            //Print row elements
            for(let i = bottom; i >= top; i--){
                output.push(matrix[i][left]);
            }
            left++;
            dir = 0;
        }
    }
    
    return output;
};

//Without using direction flag
/*var spiralOrder = function(matrix) {
    let output = [];
    
    if(matrix === null || matrix.length === 0){
       return output;
    }
    
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length -1;
    
    let matrixLength = matrix.length * matrix[0].length;
    
    while(output.length < matrixLength){
        //Print column elements
        for(let i = left; i <= right && output.length < matrixLength; i++){
            output.push(matrix[top][i]);
        }
        
        top++;
        //Print row elements
        for(let i = top; i <= bottom && output.length < matrixLength; i++ ){
            output.push(matrix[i][right]);
        }
        
        right--;
        
        //Print column elements
        for(let i = right; i >= left && output.length < matrixLength; i--){
            output.push(matrix[bottom][i]);
        }
        
        bottom--;
        
        //Print row elements
        for(let i = bottom; i >= top && output.length < matrixLength; i--){
            output.push(matrix[i][left]);
        }
        
        left++;
    }
    
    return output;
};*/