// Respect Partial.js

const first = require("./array/first");
const findIndex = require("./array/findIndex");

const contains = require("./collection/contains");
const each = require("./collection/each");
const every = require("./collection/every");
const filter = require("./collection/filter");
const find = require("./collection/find");
const map = require("./collection/map");
const reduce = require("./collection/reduce");
const reduceR = require("./collection/reduceR");
const sortBy = require("./collection/sortBy");

const callr = require("./function/callr");
const curryr = require("./function/curryr");

const isMatch = require("./object/isMatch");
const matcher = require("./object/matcher");
const select = require("./object/select");

const _ = require("./partial/partial");

const go = require("./pipe/go");
const pipe = require("./pipe/pipe");

const hi = require("./utility/hi");

const H = {
  first,
  findIndex,

  contains,
  each,
  every,
  filter,
  find,
  map,
  reduce,
  reduceR,
  sortBy,

  callr,
  curryr,

  isMatch,
  matcher,
  select,

  _,

  go,
  pipe,

  hi
};

module.exports = H;
