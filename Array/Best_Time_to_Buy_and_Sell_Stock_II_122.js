/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    //Valley peak approach
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
           profit += prices[i] - prices[i-1]
        }
    }
    
    return profit;
};

// Buy at valley and sell it at peak that means do operation only when element is going from valley to peak.
//i.e. when i is greater than i-1.