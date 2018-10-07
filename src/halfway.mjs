// Respect Partial.js

import first from "./array/first.mjs";
import findIndex from "./array/findIndex.mjs";

import contains from "./collection/contains.mjs";
import each from "./collection/each.mjs";
import every from "./collection/every.mjs";
import filter from "./collection/filter";
import find from "./collection/find.mjs";
import map from "./collection/map.mjs";
import reduce from "./collection/reduce.mjs";
import reduceR from "./collection/reduceR.mjs";
import sortBy from "./collection/sortBy.mjs";

import callr from "./function/callr.mjs";
import curryr from "./function/curryr.mjs";

import isMatch from "./object/isMatch.mjs";
import matcher from "./object/matcher.mjs";
import select from "./object/select.mjs";

import _ from "./partial/partial.mjs";

import go from "./pipe/go.mjs";
import pipe from "./pipe/pipe.mjs";

import hi from "./utility/hi.mjs";

// const root = typeof global === "object" ? global : window;

export default {
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
