import filter from "./filter.mjs";
import negate from "../utility/negate.mjs";

function reject(collection, predicate) {
  return filter(collection, negate(predicate));
}

export default reject;
