import curryr from "../function/curryr";
import isNull from "../object/isNull.mjs";

function get(obj, key) {
  return isNull(obj) ? undefined : obj[key];
  // if (obj && obj.hasOwnProperty(key)) { return obj[key]; }
}

export default curryr(get);
