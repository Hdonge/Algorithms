/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let length = prices.length
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    //Below indexes can be set incase required to return indexes.
    
    for(let i = 0; i < length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};