function map(collection, mapper) {
  let i = -1;
  const result = [];

  if (typeof collection.length === "number") {
    const len = collection.length;
    while (++i < len) result.push(mapper(collection[i], i, collection));
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    while (++i < len)
      result.push(mapper(collection[keys[i]], keys[i], collection));
  }

  return result;
}

export default map;
