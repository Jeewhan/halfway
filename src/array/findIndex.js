function findIndex(array, iteratee) {
  let i = -1;

  while (++i < array.length) {
    if (iteratee(array[i], i, array)) return i;
  }

  return -1;
}

module.exports = findIndex;
