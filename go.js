const reduce = require("./reduce");
const callr = require("./callr");

function go(...args) {
  return reduce(args, callr);
}

module.exports = go;
