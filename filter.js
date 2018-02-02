const curryr = require("./curryr");

function filter(collection, predicate) {
  let i = -1;
  const len = collection.length;
  const result = [];

  while (++i < len) if (predicate(collection[i])) result.push(collection[i]);

  return result;
}

module.exports = curryr(filter);
