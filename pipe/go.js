const reduce = require("../collection/reduce");
const callr = require("../function/callr");

function go(...args) {
  return reduce(args, callr);
}

module.exports = go;
