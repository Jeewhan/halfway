import curryr from "../function/curryr";

function get(obj, key) {
  return obj == null ? undefined : obj[key];
  // if (obj && obj.hasOwnProperty(key)) { return obj[key]; }
}

export default curryr(get);
