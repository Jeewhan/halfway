function reduceR(collection, iteratee, memo) {
  let result;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.pop() : memo;
    let i = collection.length;

    while (--i >= 0) result = iteratee(result, collection[i], i, collection);
  } else {
    const keys = Object.keys(collection);
    let i = keys.length;
    if (memo === undefined) {
      result = collection[keys[--i]];
      delete collection[keys[i--]];
    } else {
      result = memo;
    }

    while (i-- >= 0)
      result = iteratee(result, collection[keys[i]], keys[i], collection);
  }

  return result;
}

module.exports = reduceR;
