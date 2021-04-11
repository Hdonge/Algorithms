/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(grid == null || grid.length ==0){
        return 0;
    }
    
    let maxAreaOfIsland = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            maxAreaOfIsland = Math.max(maxAreaOfIsland, dfs(grid, i, j));
        }
    }
    
    return maxAreaOfIsland;
};

var dfs = function(grid, i, j){
    
    //If land not found at given indices then return 0
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] != 1){
        return 0;
    }
    
    //Before returning 1 mark all the connected neibours to 2 using dfs so during next iteration those will not get considered.
    grid[i][j] = 2;
    let noOfConnectedIsland = 1 + dfs(grid, i-1, j) + dfs(grid, i+1, j) + dfs(grid, i, j-1) + dfs(grid, i, j+1);

    return noOfConnectedIsland;
};