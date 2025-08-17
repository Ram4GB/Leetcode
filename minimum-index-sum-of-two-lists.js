/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    for (let i = 0 ; i < list1.length; i++) {
      map.set(list1[i], i)
    }

    const words = [];
    const wordCount = [];
    for (let i = 0 ; i < list2.length; i++) {
      if (map.has(list2[i])) {
        words.push(list2[i]);
        wordCount.push(map.get(list2[i]) + i)
      }
    }

    // Find min
    let min = wordCount[0];
    for (let i = 1; i < wordCount.length; i++) {
      if (min > wordCount[i]) {
        min = wordCount[i]
      }
    }

    const res = [];
    for (let i = 0 ; i < words.length; i++) {
      if (min === wordCount[i]) {
        res.push(words[i])
      }
    }

    return res;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]))