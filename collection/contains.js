function contains(collection, value, fromIndex) {
  const len = collection.length;
  let i = fromIndex ? fromIndex - 1 : -1;

  while (i++ < len) if (collection[i] === value) return true;
  return false;
}

module.exports = contains;
