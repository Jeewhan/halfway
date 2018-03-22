/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function reduce(collection, iteratee, memo) {
  let i = -1;
  let result;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.shift() : memo;
    const len = collection.length;

    while (++i < len) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    result = memo === undefined ? collection[keys[++i]] : memo;

    while (++i < len) {
      result = iteratee(result, collection[keys[i]], keys[i], collection);
    }
  }

  return result;
}

module.exports = reduce;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function callr(arg, f) {
  return f(arg);
}

module.exports = callr;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function matcher(attributes) {
  let i = -1;
  const keys = Object.keys(attributes);
  const len = keys.length;

  return obj => {
    while (++i < len) if (obj[keys[i]] !== attributes[keys[i]]) return false;
    return true;
  };
}

module.exports = matcher;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_first__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__array_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_findIndex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__array_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_contains__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__collection_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_each__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__collection_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_every__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__collection_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_filter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collection_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__collection_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collection_find__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collection_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collection_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__collection_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection_reduce__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__collection_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_reduceR__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_reduceR___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__collection_reduceR__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collection_sortBy__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collection_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__collection_sortBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__function_callr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__function_callr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__function_callr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__function_curryr__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__function_curryr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__function_curryr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__object_isMatch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__object_isMatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__object_isMatch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__object_matcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__object_matcher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__object_matcher__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__object_select__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__object_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__object_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__partial_partial__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__partial_partial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__partial_partial__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipe_go__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipe_pipe__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utility_hi__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utility_hi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__utility_hi__);
// Respect Partial.js




























const root = typeof global === "object" ? global : window;

root.H = {
  first: __WEBPACK_IMPORTED_MODULE_0__array_first___default.a,
  findIndex: __WEBPACK_IMPORTED_MODULE_1__array_findIndex___default.a,

  contains: __WEBPACK_IMPORTED_MODULE_2__collection_contains___default.a,
  each: __WEBPACK_IMPORTED_MODULE_3__collection_each___default.a,
  every: __WEBPACK_IMPORTED_MODULE_4__collection_every___default.a,
  filter: __WEBPACK_IMPORTED_MODULE_5__collection_filter___default.a,
  find: __WEBPACK_IMPORTED_MODULE_6__collection_find__["default"],
  map: __WEBPACK_IMPORTED_MODULE_7__collection_map___default.a,
  reduce: __WEBPACK_IMPORTED_MODULE_8__collection_reduce___default.a,
  reduceR: __WEBPACK_IMPORTED_MODULE_9__collection_reduceR___default.a,
  sortBy: __WEBPACK_IMPORTED_MODULE_10__collection_sortBy___default.a,

  callr: __WEBPACK_IMPORTED_MODULE_11__function_callr___default.a,
  curryr: __WEBPACK_IMPORTED_MODULE_12__function_curryr___default.a,

  isMatch: __WEBPACK_IMPORTED_MODULE_13__object_isMatch___default.a,
  matcher: __WEBPACK_IMPORTED_MODULE_14__object_matcher___default.a,
  select: __WEBPACK_IMPORTED_MODULE_15__object_select___default.a,

  _: __WEBPACK_IMPORTED_MODULE_16__partial_partial___default.a,

  go: __WEBPACK_IMPORTED_MODULE_17__pipe_go__["default"],
  pipe: __WEBPACK_IMPORTED_MODULE_18__pipe_pipe__["default"],

  hi: __WEBPACK_IMPORTED_MODULE_19__utility_hi___default.a
};

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function first(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

module.exports = first;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function findIndex(array, iteratee) {
  let i = -1;

  while (++i < array.length) {
    if (iteratee(array[i], i, array)) return i;
  }

  return -1;
}

module.exports = findIndex;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function contains(collection, value, fromIndex) {
  const len = collection.length;
  let i = fromIndex ? fromIndex - 1 : -1;

  while (i++ < len) if (collection[i] === value) return true;
  return false;
}

module.exports = contains;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function each(collection, iteratee) {
  let i = -1;

  if (typeof collection.length === "number") {
    const len = collection.length;
    while (++i < len) iteratee(collection[i], i, collection);
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    while (++i < len) iteratee(collection[keys[i]], keys[i], collection);
  }

  return collection;
}

module.exports = each;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function every(collection, predicate) {
  const len = collection.length;
  let i = -1;

  if (predicate === undefined) {
    while (++i < len) if (collection[i] === false) return false;
  } else {
    while (++i < len) if (predicate(collection[i]) === false) return false;
  }

  return true;
}

module.exports = every;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

function filter(collection, predicate) {
  let i = -1;
  const len = collection.length;
  const result = [];

  while (++i < len) if (predicate(collection[i])) result.push(collection[i]);

  return result;
}

module.exports = filter;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_matcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_matcher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__object_matcher__);


function find(collection, predicate, fromIndex) {
  let i = fromIndex - 1 || -1;
  const len = collection.length;

  if (typeof predicate === "function") {
    while (++i < len)
      if (predicate(collection[i], i, collection)) return collection[i];
  } else if (predicate instanceof Object) {
    const match = __WEBPACK_IMPORTED_MODULE_0__object_matcher___default()(predicate);
    while (++i < len) if (match(collection[i])) return collection[i];
  }
}

module.exports = find;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function map(collection, mapper) {
  let i = -1;
  const result = [];

  if (typeof collection.length === "number") {
    const len = collection.length;
    while (++i < len) result.push(mapper(collection[i], i, collection));
  } else {
    const keys = Object.keys(collection);
    const len = keys.length;
    while (++i < len)
      result.push(mapper(collection[keys[i]], keys[i], collection));
  }

  return result;
}

module.exports = map;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function reduceR(collection, iteratee, memo) {
  let result;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.pop() : memo;
    let i = collection.length;

    while (--i >= 0) result = iteratee(result, collection[i], i, collection);
  } else {
    const keys = Object.keys(collection);
    let i = keys.length;
    if (memo === undefined) {
      result = collection[keys[--i]];
      delete collection[keys[i--]];
    } else {
      result = memo;
    }

    while (i-- >= 0)
      result = iteratee(result, collection[keys[i]], keys[i], collection);
  }

  return result;
}

module.exports = reduceR;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

function sortBy(collection, iteratee) {
  if (typeof iteratee === "function") {
    return collection.sort(
      (before, after) => iteratee(before) - iteratee(after)
    );
  } else if (typeof iteratee === "string") {
    return collection.sort((before, after) => {
      if (before[iteratee] > after[iteratee]) return 1;
      else if (before[iteratee] < after[iteratee]) return -1;
      return 0;
    });
  }
}

module.exports = sortBy;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

function curryr(f) {
  return (...args) => (args.length === 2 ? f(...args) : arg => f(arg, ...args));
}

module.exports = curryr;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

function isMatch(obj, condition) {
  const key = Object.keys(condition)[0];
  return obj[key] === condition[key];
}

module.exports = isMatch;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

function select(object, propertyName) {
  if (Array.isArray(propertyName)) {
    let i = -1;
    const len = propertyName.length;
    const result = [];

    while (++i < len) result.push(object[propertyName[i]]);
    return result;
  }

  return object[propertyName];
}

module.exports = select;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _(func, ...args) {
  const parts = [...args];

  return (...args) => {
    const rest = [...args];
    const len = parts.length;
    let i = -1;

    while (++i < len) if (parts[i] === _) parts[i] = rest.shift();

    return func(...parts);
  };
}

module.exports = _;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection_reduce__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__collection_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__function_callr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__function_callr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__function_callr__);



function go(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__collection_reduce___default()(args, __WEBPACK_IMPORTED_MODULE_1__function_callr___default.a);
}

module.exports = go;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection_reduce__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__collection_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__function_callr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__function_callr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__function_callr__);



function pipe(...funcs) {
  return arg => __WEBPACK_IMPORTED_MODULE_0__collection_reduce___default()(funcs, __WEBPACK_IMPORTED_MODULE_1__function_callr___default.a, arg);
}

module.exports = pipe;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function hi(value) {
  return console.log(value), value;
}

module.exports = hi;


/***/ })
/******/ ]);