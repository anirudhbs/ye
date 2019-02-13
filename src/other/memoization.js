function memoize(func) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (key in cache) {
      return cache[key];
    } else {
      const result = func.apply(this, arguments);
      cache[key] = result;
      return result;
    }
  };
}

module.exports = { memoize };
