/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  
  
  let max1=Number.MIN_SAFE_INTEGER;
  let max2=Number.MIN_SAFE_INTEGER;
  let max3=Number.MIN_SAFE_INTEGER;
  
  // max1 > max2 > max3
  const assignMax = (n) => {
    if (max1 < n) {
      max3=max2;
      max2=max1;
      max1=n;
    } else if (n > max2 && n <= max1) {
      max3=max2;
      max2=n;
    } else if (n > max3 && n <= max2) {
      max3=n;
    }
  }

  let min1=Number.MAX_SAFE_INTEGER;
  let min2=Number.MAX_SAFE_INTEGER;
  let min3=Number.MAX_SAFE_INTEGER;

  // min1 < min2 < min3
  const assignMin = (n) => {
    if (min1 > n) {
      min3=min2;
      min2=min1;
      min1=n;
    } else if (n < min2 && n >= min1) {
      min3=min2;
      min2=n;
    } else if (n < min3 && n >= min2) {
      min3=n;
    }
  }

  for (let i = 0 ; i < nums.length; i++) {
    assignMax(nums[i])
    assignMin(nums[i])
  }
  
  console.log('max', max1, max2, max3)
  console.log('min', min1, min2, min3)

  const totalPos = max1*max2*max3;
  const totalNev = min1*min2*min3;
  const mixPositiveAndNegative = min1*min2*max1;

  if (mixPositiveAndNegative >= totalPos && mixPositiveAndNegative >= totalNev) {
    return mixPositiveAndNegative;
  } 

  if (totalNev >= mixPositiveAndNegative && totalNev >= totalPos) {
    return totalNev;
  }

  if (totalPos >= totalNev && totalPos >= mixPositiveAndNegative) {
    return totalPos;
  }
};

console.log(maximumProduct([1,2,3])) // 6
console.log(maximumProduct([1,2,3,4])) // 24
console.log(maximumProduct([-1,-2,-3])) // -6
console.log(maximumProduct([-1,-2,-3,1,2,3,4,5])); // 60
console.log(maximumProduct([-90,-2,1,2,3])) // 180
console.log(maximumProduct([1000,1000,1000])) // 1000000000
console.log(maximumProduct([-100,-98,-1,2,3,4])) // 39200