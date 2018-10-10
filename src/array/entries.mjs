import reduce from "../collection/reduce.mjs";

function entries(list) {
  return reduce(list, (acc, v, i) => acc.concat([[i, v]]), []);
}

export default entries;
