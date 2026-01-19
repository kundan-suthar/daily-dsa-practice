// Input: prices = [7,1,5,3,6,4]
// Output: 5

function highestProfit(prices){
    let maxProfit = 0
    let min = prices[0]
    for(let i=0; i<prices.length;i++){
        if(min>prices[i]){
            min = prices[i]
        }
        if(prices[i]-min>maxProfit){
            maxProfit= prices[i]-min;
        }
    }
    return maxProfit;
}
let prices = [7,1,5,3,6,4]
console.log(highestProfit(prices));
