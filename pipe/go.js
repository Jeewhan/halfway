import reduce from "../collection/reduce";
import callr from "../function/callr";

function go(...args) {
  return reduce(args, callr);
}

module.exports = go;
