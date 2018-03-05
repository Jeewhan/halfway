const reduce = require("../collection/reduce");
const callr = require("../function/callr");

function pipe(...funcs) {
  return arg => reduce(funcs, callr, arg);
}

module.exports = pipe;
