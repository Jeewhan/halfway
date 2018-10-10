import findIndex from "../collection/findIndex.mjs";
import negate from "../utility/negate.mjs";
import identity from "../utility/identity.mjs";

function every(list, predicate) {
  return findIndex(list, negate(predicate || identity)) == -1;
}

export default every;
