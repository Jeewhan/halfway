// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
"use strict";

function first(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

module.exports = first;
},{}],3:[function(require,module,exports) {
"use strict";

function findIndex(array, iteratee) {
  var i = -1;

  while (++i < array.length) {
    if (iteratee(array[i], i, array)) return i;
  }

  return -1;
}

module.exports = findIndex;
},{}],5:[function(require,module,exports) {
"use strict";

function contains(collection, value, fromIndex) {
  var len = collection.length;
  var i = fromIndex ? fromIndex - 1 : -1;

  while (i++ < len) {
    if (collection[i] === value) return true;
  }return false;
}

module.exports = contains;
},{}],6:[function(require,module,exports) {
"use strict";

function each(collection, iteratee) {
  var i = -1;

  if (typeof collection.length === "number") {
    var len = collection.length;
    while (++i < len) {
      iteratee(collection[i], i, collection);
    }
  } else {
    var keys = Object.keys(collection);
    var _len = keys.length;
    while (++i < _len) {
      iteratee(collection[keys[i]], keys[i], collection);
    }
  }

  return collection;
}

module.exports = each;
},{}],7:[function(require,module,exports) {
"use strict";

function every(collection, predicate) {
  var len = collection.length;
  var i = -1;

  if (predicate === undefined) {
    while (++i < len) {
      if (collection[i] === false) return false;
    }
  } else {
    while (++i < len) {
      if (predicate(collection[i]) === false) return false;
    }
  }

  return true;
}

module.exports = every;
},{}],8:[function(require,module,exports) {
"use strict";

function filter(collection, predicate) {
  var i = -1;
  var len = collection.length;
  var result = [];

  while (++i < len) {
    if (predicate(collection[i])) result.push(collection[i]);
  }return result;
}

module.exports = filter;
},{}],17:[function(require,module,exports) {
"use strict";

function matcher(attributes) {
  var i = -1;
  var keys = Object.keys(attributes);
  var len = keys.length;

  return function (obj) {
    while (++i < len) {
      if (obj[keys[i]] !== attributes[keys[i]]) return false;
    }return true;
  };
}

module.exports = matcher;
},{}],9:[function(require,module,exports) {
"use strict";

var _matcher = require("../object/matcher");

var _matcher2 = _interopRequireDefault(_matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function find(collection, predicate, fromIndex) {
  var i = fromIndex - 1 || -1;
  var len = collection.length;

  if (typeof predicate === "function") {
    while (++i < len) {
      if (predicate(collection[i], i, collection)) return collection[i];
    }
  } else if (predicate instanceof Object) {
    var match = (0, _matcher2.default)(predicate);
    while (++i < len) {
      if (match(collection[i])) return collection[i];
    }
  }
}

module.exports = find;
},{"../object/matcher":17}],11:[function(require,module,exports) {
"use strict";

function map(collection, mapper) {
  var i = -1;
  var result = [];

  if (typeof collection.length === "number") {
    var len = collection.length;
    while (++i < len) {
      result.push(mapper(collection[i], i, collection));
    }
  } else {
    var keys = Object.keys(collection);
    var _len = keys.length;
    while (++i < _len) {
      result.push(mapper(collection[keys[i]], keys[i], collection));
    }
  }

  return result;
}

module.exports = map;
},{}],10:[function(require,module,exports) {
"use strict";

function reduce(collection, iteratee, memo) {
  var i = -1;
  var result = void 0;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.shift() : memo;
    var len = collection.length;

    while (++i < len) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else {
    var keys = Object.keys(collection);
    var _len = keys.length;
    result = memo === undefined ? collection[keys[++i]] : memo;

    while (++i < _len) {
      result = iteratee(result, collection[keys[i]], keys[i], collection);
    }
  }

  return result;
}

module.exports = reduce;
},{}],12:[function(require,module,exports) {
"use strict";

function reduceR(collection, iteratee, memo) {
  var result = void 0;

  if (typeof collection.length === "number") {
    result = memo === undefined ? collection.pop() : memo;
    var i = collection.length;

    while (--i >= 0) {
      result = iteratee(result, collection[i], i, collection);
    }
  } else {
    var keys = Object.keys(collection);
    var _i = keys.length;
    if (memo === undefined) {
      result = collection[keys[--_i]];
      delete collection[keys[_i--]];
    } else {
      result = memo;
    }

    while (_i-- >= 0) {
      result = iteratee(result, collection[keys[_i]], keys[_i], collection);
    }
  }

  return result;
}

module.exports = reduceR;
},{}],13:[function(require,module,exports) {
"use strict";

function sortBy(collection, iteratee) {
  if (typeof iteratee === "function") {
    return collection.sort(function (before, after) {
      return iteratee(before) - iteratee(after);
    });
  } else if (typeof iteratee === "string") {
    return collection.sort(function (before, after) {
      if (before[iteratee] > after[iteratee]) return 1;else if (before[iteratee] < after[iteratee]) return -1;
      return 0;
    });
  }
}

module.exports = sortBy;
},{}],14:[function(require,module,exports) {
"use strict";

function callr(arg, f) {
  return f(arg);
}

module.exports = callr;
},{}],15:[function(require,module,exports) {
"use strict";

function curryr(f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length === 2 ? f.apply(undefined, args) : function (arg) {
      return f.apply(undefined, [arg].concat(args));
    };
  };
}

module.exports = curryr;
},{}],16:[function(require,module,exports) {
"use strict";

function isMatch(obj, condition) {
  var key = Object.keys(condition)[0];
  return obj[key] === condition[key];
}

module.exports = isMatch;
},{}],18:[function(require,module,exports) {
"use strict";

function select(object, propertyName) {
  if (Array.isArray(propertyName)) {
    var i = -1;
    var len = propertyName.length;
    var result = [];

    while (++i < len) {
      result.push(object[propertyName[i]]);
    }return result;
  }

  return object[propertyName];
}

module.exports = select;
},{}],19:[function(require,module,exports) {
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _(func) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var parts = [].concat(args);

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var rest = [].concat(args);
    var len = parts.length;
    var i = -1;

    while (++i < len) {
      if (parts[i] === _) parts[i] = rest.shift();
    }return func.apply(undefined, _toConsumableArray(parts));
  };
}

module.exports = _;
},{}],20:[function(require,module,exports) {
"use strict";

var _reduce = require("../collection/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _callr = require("../function/callr");

var _callr2 = _interopRequireDefault(_callr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function go() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _reduce2.default)(args, _callr2.default);
}

module.exports = go;
},{"../collection/reduce":10,"../function/callr":14}],21:[function(require,module,exports) {
"use strict";

var _reduce = require("../collection/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _callr = require("../function/callr");

var _callr2 = _interopRequireDefault(_callr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pipe() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (arg) {
    return (0, _reduce2.default)(funcs, _callr2.default, arg);
  };
}

module.exports = pipe;
},{"../collection/reduce":10,"../function/callr":14}],22:[function(require,module,exports) {
"use strict";

function hi(value) {
  return console.log(value), value;
}

module.exports = hi;
},{}],1:[function(require,module,exports) {
var global = (1,eval)("this");
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Respect Partial.js

var _first = require("./array/first");

var _first2 = _interopRequireDefault(_first);

var _findIndex = require("./array/findIndex");

var _findIndex2 = _interopRequireDefault(_findIndex);

var _contains = require("./collection/contains");

var _contains2 = _interopRequireDefault(_contains);

var _each = require("./collection/each");

var _each2 = _interopRequireDefault(_each);

var _every = require("./collection/every");

var _every2 = _interopRequireDefault(_every);

var _filter = require("./collection/filter");

var _filter2 = _interopRequireDefault(_filter);

var _find = require("./collection/find");

var _find2 = _interopRequireDefault(_find);

var _map = require("./collection/map");

var _map2 = _interopRequireDefault(_map);

var _reduce = require("./collection/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _reduceR = require("./collection/reduceR");

var _reduceR2 = _interopRequireDefault(_reduceR);

var _sortBy = require("./collection/sortBy");

var _sortBy2 = _interopRequireDefault(_sortBy);

var _callr = require("./function/callr");

var _callr2 = _interopRequireDefault(_callr);

var _curryr = require("./function/curryr");

var _curryr2 = _interopRequireDefault(_curryr);

var _isMatch = require("./object/isMatch");

var _isMatch2 = _interopRequireDefault(_isMatch);

var _matcher = require("./object/matcher");

var _matcher2 = _interopRequireDefault(_matcher);

var _select = require("./object/select");

var _select2 = _interopRequireDefault(_select);

var _partial = require("./partial/partial");

var _partial2 = _interopRequireDefault(_partial);

var _go = require("./pipe/go");

var _go2 = _interopRequireDefault(_go);

var _pipe = require("./pipe/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

var _hi = require("./utility/hi");

var _hi2 = _interopRequireDefault(_hi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" ? global : window;

root.H = {
  first: _first2.default,
  findIndex: _findIndex2.default,

  contains: _contains2.default,
  each: _each2.default,
  every: _every2.default,
  filter: _filter2.default,
  find: _find2.default,
  map: _map2.default,
  reduce: _reduce2.default,
  reduceR: _reduceR2.default,
  sortBy: _sortBy2.default,

  callr: _callr2.default,
  curryr: _curryr2.default,

  isMatch: _isMatch2.default,
  matcher: _matcher2.default,
  select: _select2.default,

  _: _partial2.default,

  go: _go2.default,
  pipe: _pipe2.default,

  hi: _hi2.default
};
},{"./array/first":4,"./array/findIndex":3,"./collection/contains":5,"./collection/each":6,"./collection/every":7,"./collection/filter":8,"./collection/find":9,"./collection/map":11,"./collection/reduce":10,"./collection/reduceR":12,"./collection/sortBy":13,"./function/callr":14,"./function/curryr":15,"./object/isMatch":16,"./object/matcher":17,"./object/select":18,"./partial/partial":19,"./pipe/go":20,"./pipe/pipe":21,"./utility/hi":22}],43:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '63887' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[43,1])
//# sourceMappingURL=/dist/halfway.map