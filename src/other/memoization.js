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

function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time();
console.log(fibonacci(20));
console.timeEnd();

const f = memoize(fibonacci);
console.time();
console.log(f(20));
console.timeEnd();
