import curryr from "../function/curryr.mjs";

function findIndex(list, iteratee) {
  let i = -1;
  while (++i < list.length) {
    if (iteratee(list[i], i, list)) return i;
  }
  return -1;
}

export default curryr(findIndex);
