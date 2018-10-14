import reduce from "../collection/reduce";
import isIterable from "../object/isIterable";

function pipe(...funcs) {
  return (...arg) =>
    reduce(funcs, (acc, f) => (isIterable(acc) ? f(...acc) : f(acc)), arg);
}

export default pipe;
