import isObject from "./isObject.mjs";

function keys(obj) {
  return isObject(obj) ? Object.keys(obj) : [];
}

export default keys;
