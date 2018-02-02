function reduce(collection, iteratee, memo) {
  let i = -1;
  let result;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.shift() : memo;
    const len = collection.length;

    while (++i < len) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    result = memo === undefined ? collection[keys[++i]] : memo;

    while (++i < len) {
      result = iteratee(result, collection[keys[i]], keys[i], collection);
    }
  }

  return result;
}

module.exports = reduce;
