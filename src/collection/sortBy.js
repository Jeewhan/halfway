function sortBy(collection, iteratee) {
  if (typeof iteratee === "function") {
    return collection.sort(
      (before, after) => iteratee(before) - iteratee(after)
    );
  } else if (typeof iteratee === "string") {
    return collection.sort((before, after) => {
      if (before[iteratee] > after[iteratee]) return 1;
      else if (before[iteratee] < after[iteratee]) return -1;
      return 0;
    });
  }
}

module.exports = sortBy;
