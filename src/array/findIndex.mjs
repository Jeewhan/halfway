import keys from "../utility/keys.mjs";
import entries from "../array/entries.mjs";

function findIndex(list, iteratee) {
  for (const [k, i] of entries(keys(list))) {
    if (iteratee(list[k], k, list)) return i;
  }
  return -1;
}

export default findIndex;
