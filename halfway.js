// Respect Partial.js

const each = require("./each");
const map = require("./map");
const reduce = require("./reduce");
const select = require("./select");
const contains = require("./contains");
const every = require("./every");
const callr = require("./callr");
const filter = require("./filter");
const curryr = require("./curryr");
const first = require("./first");
const go = require("./go");
const _ = require("./partial");

const H = {
  each,
  map,
  reduce,
  select,
  contains,
  every,
  callr,
  filter,
  curryr,
  first,
  go,
  _
};

module.exports = H;
