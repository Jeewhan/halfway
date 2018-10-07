// Respect Partial.js

import first from "./array/first";
import findIndex from "./array/findIndex";

import contains from "./collection/contains";
import each from "./collection/each";
import every from "./collection/every";
import filter from "./collection/filter";
import find from "./collection/find";
import map from "./collection/map";
import reduce from "./collection/reduce";
import reduceR from "./collection/reduceR";
import sortBy from "./collection/sortBy";

import callr from "./function/callr";
import curryr from "./function/curryr";

import isMatch from "./object/isMatch";
import matcher from "./object/matcher";
import select from "./object/select";

import _ from "./partial/partial";

import go from "./pipe/go";
import pipe from "./pipe/pipe";

import hi from "./utility/hi";

// const root = typeof global === "object" ? global : window;

export {
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
