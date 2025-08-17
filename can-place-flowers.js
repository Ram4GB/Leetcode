/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let i = 0;

  if (n === 0) return true;

  while (i < flowerbed.length) {
    const prevSlot = flowerbed[i-1];
    const nextSlot = flowerbed[i+1];
    const curSlot = flowerbed[i];
    if ((!prevSlot || prevSlot === 0) && curSlot === 0 && (nextSlot === 0 || !nextSlot)) {
      flowerbed[i] =1 ;
      n--;
      i+=2;
      if (n===0) return true;
    } else {
      if (curSlot === 1) i+=2
      else i++;
    }
  }

  return false
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,0], 2)); // true
console.log(canPlaceFlowers([0], 1)); // true
console.log(canPlaceFlowers([0,0,1,0,0], 1)) // true
console.log(canPlaceFlowers([1,0,1,0,1,0,1],0)) // true
console.log(canPlaceFlowers([0,0,0,0,0,1,0,0], 0)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1], 1)); // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false

// start with index 1
// if the previous is 0 then we can plant the current flower
// otherwise prev = cur_pot and continue to the next slot;