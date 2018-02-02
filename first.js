function first(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

module.exports = first;
