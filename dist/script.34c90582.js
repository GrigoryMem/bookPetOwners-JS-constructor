// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/script/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;
exports.td = td;
exports.tr = tr;
exports.imgLogo = imgLogo;
exports.imgPet = imgPet;
exports.css = css;

// название и введение
function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row title\" style=\"".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  return "<div class=\"col-sm\">".concat(content, "</div>");
} // утилиты для табличных функций 


function td(content) {
  return "<td class=\"col-sm\">".concat(content, "</td>");
}

function tr(content, className) {
  return "<table class=\"table\"><tr class=\"row ".concat(className, " \">").concat(content, "</tr></table>");
} // утилиты для картинок


function imgLogo(content) {
  return " <div class=\"logo wrapper\"><image  class=\"logo\" src=".concat(content, "></div>");
}

function imgPet(photo) {
  return "<img class=\"imgPet\" src=\"".concat(photo, "\">");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = Object.keys(styles);
  console.log(keys);
  var array = keys.map(function (key) {
    console.log("".concat(key, ":").concat(styles[key]));
    return "".concat(key, ":").concat(styles[key]);
  });
  return array.join(";");
}
},{}],"assets/images/logo.png":[function(require,module,exports) {
module.exports = "/logo.3f4a1874.png";
},{}],"assets/images/customers/dog1.jpg":[function(require,module,exports) {
module.exports = "/dog1.854dad89.jpg";
},{}],"assets/images/customers/dog2.jpg":[function(require,module,exports) {
module.exports = "/dog2.a76efe0b.jpg";
},{}],"assets/script/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _utils = require("./utils");

var _logo = _interopRequireDefault(require("../images/logo.png"));

var _dog = _interopRequireDefault(require("../images/customers/dog1.jpg"));

var _dog2 = _interopRequireDefault(require("../images/customers/dog2.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = [{
  type: "title",
  value: "Данные о владельцах животных",
  options: {
    tag: "h1",
    // styles:`background:linear-gradient(90deg, #f598a8, #f6edb2); color:linear-gradient(85deg, #fb63f9, #c2e534);
    // text-transform:uppercase; text-decoration:underline; padding:1.5rem` 
    styles: {
      background: "linear-gradient(90deg, #f598a8, #f6edb2)",
      color: "linear-gradient(85deg, #fb63f9, #c2e534)",
      "text-transform": "uppercase",
      "text-decoration": "underline",
      padding: "1.5rem"
    }
  }
}, {
  type: "intro",
  value: "Ввведние в таблицу. Инструкция JS"
}, {
  type: "header",
  value: ["Владелец животного", "Кличка животного", "Возраст животного,лет", "Адрес владельца", "Порода/Окрас", "Фотография"]
}, {
  type: "person",
  value: ["Иванов И.И.", "Лайка", "6", "г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17", "Метис/Черный", (0, _utils.imgPet)(_dog.default)]
}, {
  type: "person",
  value: ["Морозов Р.И.", "Панда", "9", "г. Санкт-Петербург, улица Подольских Людей, дом 9, квартира 8", "Пекинес/Светлый", (0, _utils.imgPet)(_dog2.default)]
}, {
  type: "image",
  value: _logo.default
}];
exports.model = model;
},{"./utils":"assets/script/utils.js","../images/logo.png":"assets/images/logo.png","../images/customers/dog1.jpg":"assets/images/customers/dog1.jpg","../images/customers/dog2.jpg":"assets/images/customers/dog2.jpg"}],"assets/script/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = void 0;

var _utils = require("./utils");

// functions titles
function title(point) {
  var _point$options = point.options,
      _point$options$tag = _point$options.tag,
      tag = _point$options$tag === void 0 ? "h1" : _point$options$tag,
      styles = _point$options.styles; // деструктуризация
  // const tag = point.options.tag ?? 'h1'; значение по умолчанию
  // const styles = point.options.styles;

  return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(point.value, "</").concat(tag, ">")), (0, _utils.css)(styles));
}

function intro(point) {
  return (0, _utils.row)((0, _utils.col)("<p>".concat(point.value, "</p>")));
} // header


function header(point) {
  var content = point.value.map(_utils.td).join(""); // item=>td(item) можно записать как просто td референс > point.value.map(td)

  return (0, _utils.tr)(content, "header");
} // persons


function person(point) {
  var content = point.value.map(function (item) {
    return (0, _utils.td)(item);
  }); // создание массива

  return (0, _utils.tr)(content.join(""), "person"); // вставили  массив в таблицу
}

function image(point) {
  return (0, _utils.imgLogo)(point.value);
}

var templates = {
  title: title,
  intro: intro,
  header: header,
  person: person,
  image: image
};
exports.templates = templates;
},{"./utils":"assets/script/utils.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/css/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/script/index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

var _templates = require("./templates");

require("../css/main.css");

var $site = document.querySelector("#site");
console.log(_templates.templates);

_model.model.forEach(function (point) {
  var addContent = _templates.templates[point.type];

  if (addContent) {
    $site.insertAdjacentHTML("beforeend", addContent(point));
  } // if(point.type === "title"){
  //     content = title(point);
  // } else if(point.type==="intro"){
  //     content = intro(point);
  // } else if(point.type === "header" || point.type ==="person") {
  //     content = header(point)
  // } else if(point.type ==="person") {
  //     content = person(point)
  // } else if(point.type === "image") {
  //     content = image(point)
  // }

});
},{"./model":"assets/script/model.js","./templates":"assets/script/templates.js","../css/main.css":"assets/css/main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59317" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
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
        parents.push(k);
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/script/index.js"], null)
//# sourceMappingURL=/script.34c90582.js.map