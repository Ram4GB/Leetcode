var TimeLimitedCache = function () {
  const map = new Map();
  const refs = new Map();

  this.map = map;
  this.refs = refs;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isExist = false;

  if (this.refs.has(key)) {
    clearTimeout(this.refs.get(key));
    isExist = true;
  }

  const ref = setTimeout(() => {
    this.map.delete(key);
    this.refs.delete(key);
  }, duration);

  this.refs.set(key, ref);
  this.map.set(key, value);

  return isExist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.map.get(key) ?? -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.map.size ?? 0;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
