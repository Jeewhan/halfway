import map from "../collection/map.mjs";
import get from "../utility/get";

function pluck(data, key) {
  return map(data, get(key));
}

export default pluck;
