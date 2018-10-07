function first(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

export default first;
