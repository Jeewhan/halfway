function each(collection, iteratee) {
  let i = -1;

  if (typeof collection.length === "number") {
    const len = collection.length;
    while (++i < len) iteratee(collection[i], i, collection);
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    while (++i < len) iteratee(collection[keys[i]], keys[i], collection);
  }

  return collection;
}

module.exports = each;
