/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [];

    dp[cost.length] = 0;
    dp[cost.length-1] = cost[cost.length-1]

    for (let i = cost.length - 2; i >=0; i--) {
      dp[i] = cost[i] + Math.min(dp[i+1], dp[i+2]);
    }

    return Math.min(dp[0], dp[1])
};

console.log(minCostClimbingStairs([10,15,20]))