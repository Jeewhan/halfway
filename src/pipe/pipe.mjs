import reduce from "../collection/reduce";
import callr from "../function/callr";

function pipe(...funcs) {
  return arg => reduce(funcs, callr, arg);
}

export default pipe;
