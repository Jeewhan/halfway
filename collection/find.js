const matcher = require("../object/matcher");

function find(collection, predicate, fromIndex) {
  let i = fromIndex - 1 || -1;
  const len = collection.length;

  if (typeof predicate === "function") {
    while (++i < len)
      if (predicate(collection[i], i, collection)) return collection[i];
  } else if (predicate instanceof Object) {
    const match = matcher(predicate);
    while (++i < len) if (match(collection[i])) return collection[i];
  }
}

module.exports = find;
