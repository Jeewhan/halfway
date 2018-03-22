function every(collection, predicate) {
  const len = collection.length;
  let i = -1;

  if (predicate === undefined) {
    while (++i < len) if (collection[i] === false) return false;
  } else {
    while (++i < len) if (predicate(collection[i]) === false) return false;
  }

  return true;
}

module.exports = every;
