import findIndex from "../collection/findIndex.mjs";
import identity from "../utility/identity.mjs";

function some(list, predicate) {
  return findIndex(list, predicate || identity) != -1;
}

export default some;
