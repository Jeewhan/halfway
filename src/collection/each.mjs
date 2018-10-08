import keys from "../utility/keys.mjs";

function each(collection, iteratee) {
  const list = keys(collection);
  const len = list.length;
  for (let i = 0; i < len; i++) {
    const idx = list[i];
    iteratee(collection[idx], idx, collection);
  }
  return collection;
}

export default each;

// function each(collection, iteratee) {
//   let i = -1;

//   if (typeof collection.length === "number") {
//     const len = collection.length;
//     while (++i < len) iteratee(collection[i], i, collection);
//   } else {
//     const keys = Object.keys(collection);
//     const len = keys.length;
//     while (++i < len) iteratee(collection[keys[i]], keys[i], collection);
//   }

//   return collection;
// }
