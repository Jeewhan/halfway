import findIndex from "../array/findIndex.mjs";
import negate from "../utility/negate.mjs";
import identity from "../utility/identity.mjs";

function every(collection, predicate) {
  return findIndex(collection, negate(predicate || identity)) == -1;
}

export default every;
