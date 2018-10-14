import keys from "../utility/keys.mjs";
import isNull from "../object/isNull.mjs";

function reduce(collection, iteratee, memo) {
  let i = -1;
  let result;

  if (typeof collection.length === "number") {
    result = isNull(memo) ? collection.shift() : memo;
    const len = collection.length;

    while (++i < len) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else {
    const ks = keys(collection);
    const len = ks.length;
    result = isNull(memo) ? collection[ks[++i]] : memo;

    while (++i < len) {
      const index = ks[i];
      result = iteratee(result, collection[index], index, collection);
    }
  }

  return result;
}

export default reduce;
