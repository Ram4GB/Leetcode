/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // Create hash table from the nums2
    const map = new Map();
    for (let i = 0 ; i < nums2.length; i++) {
      let flag = false;
      for (let j = i + 1; j < nums2.length; j++) {
        if (nums2[i] < nums2[j]) {
          map.set(nums2[i], nums2[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        map.set(nums2[i], -1);
      }
    }

    const res = [];
    for (let i = 0 ; i < nums1.length; i++) {
      res.push(map.get(nums1[i]));
    }

    return res;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))