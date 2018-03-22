function reject(collection, predicate) {
  let i = -1;
  const len = collection.length;
  const result = [];

  while (++i < len) if (!predicate(collection[i])) result.push(collection[i]);

  return result;
}

export default reject;
