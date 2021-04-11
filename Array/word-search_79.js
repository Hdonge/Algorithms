/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let columns = board[0].length;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(board[i][j] === word.charAt(0) && searchWordDfs(i, j, 0, board, word, rows, columns)){
               return true;
            }
        }
    }
    return false;
};

function searchWordDfs(i, j, countIndex, board, word, rows, columns){
    if(countIndex === word.length){ //Break backtracking
       return true;
    }else{
        //Continue backtracking
        if(i < 0 || i >= rows || j < 0 || j >= columns || board[i][j] !== word.charAt(countIndex)){
            //Boundry conditions and non satisfying condition
            return false;
        }
        let temp = board[i][j];
        board[i][j] = ''; // Make visted/used elements blank
        
        let found = searchWordDfs(i+1, j, countIndex+1, board, word, rows, columns)
        || searchWordDfs(i-1, j, countIndex+1, board, word, rows, columns)
        || searchWordDfs(i, j+1, countIndex+1, board, word, rows, columns)
        || searchWordDfs(i, j-1, countIndex+1, board, word, rows, columns);
        board[i][j] = temp;
        
        return found;
    }
}