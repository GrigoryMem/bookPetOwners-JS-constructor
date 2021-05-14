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
exports.inputPers = inputPers;
exports.css = css;
exports.formAddPers = formAddPers;
exports.formSB = formSB;
exports.formIntro = formIntro;
exports.formImg = formImg;
exports.addPicture = addPicture;

// название и введение
function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "title";
  return "<div class=\"row  ".concat(className, "\" style=\"").concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "<div class=\"col-sm ".concat(className, "\" style=\"").concat(styles, "\">").concat(content, "</div>");
} // утилиты для табличных функций 


function td(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<td class=\"col-sm\" style=".concat(styles, ">").concat(content, "</td>");
}

function tr(content, className) {
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "<table class=\"table\"><tr class=\"row ".concat(className, "\" style=\"").concat(styles, "\">").concat(content, "</tr></table>");
} // утилиты для картинок


function imgLogo(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return " <div class=\"logo wrapper\" style=\"".concat(styles, "\">").concat(content, "</div>");
}

function imgPet(photo) {
  return "<img class=\"imgPet\" src=\"".concat(photo, "\">");
}

function inputPers() {
  var content1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "text";
  var content2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var content3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return "<input class=\"table__input\" style=\"width:110px;\" type =\"".concat(content1, "\" value=\"").concat(content2, "\" placeholder=\"").concat(content3, "\">");
} // приведение объекта к строке


function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  //     const keys = Object.keys(styles)
  // console.log(keys)
  //    const array =  keys.map(key=>{
  //         return `${key}:${styles[key]}`
  //     })
  //     return array.join(";")
  if (typeof styles === "string") return styles;

  var toString = function toString(key) {
    return "".concat(key, ":").concat(styles[key]);
  };
  /*   
  Object.keys(styles) - берем ключи у объекта
  toString - приводим к строке каждый элемент
  join(";") - соединяем через ; 
  */


  return Object.keys(styles).map(toString).join(";");
} // Функция заполнения  формы для записи нового клиента клиники


function formAddPers(content) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<form class=\"form__note\" name = \"".concat(type, "\">\n    ").concat(content, "\n    </hr>\n    <button type=\"submit\" id=\"data-btn\" btn btn-primary btn-sm> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C</button>\n    </form>");
} // Формы для сидебара
// Функция создания формы для сидебара SB


function formSB(type) {
  return "\n    <form name =\"".concat(type, "\">\n        <h5>").concat(type, "</h5>\n        <div class=\"form-group\">\n            <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n        </div>\n        <div class =\"form-group\">\n            <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n        </div>\n        <button type=\"submit\"  class=\"btn btn-primary btn-sm\"> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    </hr>\n    ");
}

function formIntro(type) {
  return "<form name =\"".concat(type, "\">\n    <h5>").concat(type, "</h5>\n    <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n    </div>\n    <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value1\" placeholder=\"value1\">\n    </div>\n    <div class =\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n    </div>\n    <div class =\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles1\" placeholder=\"styles1\">\n    </div>\n    <button type=\"submit\"  class=\"btn btn-primary btn-sm\"> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n</form>\n</hr>\n    ");
}

function formImg(type, file) {
  return "\n    <form name =\"".concat(type, "\">\n        <h5>").concat(type, "</h5>\n        <div class=\"form-group\">\n            <input type=").concat(file, " class=\"form-control form-control-sm\"  id =\"input-file\" name=\"value\" placeholder=\"value\">\n        </div>\n        <div class =\"form-group\">\n            <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n        </div>\n        <button type=\"submit\"  class=\"btn btn-primary btn-sm\"> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    </hr>\n    ");
}

function addPicture(type) {
  return "\n    \n            <input type=".concat(type, " value=\"\" class=\"form-control form-control-sm table__input\" id=\"pet__photo\"  name=\"value\" placeholder=\"value\">\n       \n        \n        ");
}
},{}],"assets/images/logo.png":[function(require,module,exports) {
module.exports = "/logo.3f4a1874.png";
},{}],"assets/images/customers/dog1.jpg":[function(require,module,exports) {
module.exports = "/dog1.854dad89.jpg";
},{}],"assets/images/customers/dog2.jpg":[function(require,module,exports) {
module.exports = "/dog2.a76efe0b.jpg";
},{}],"assets/script/classes/points.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputPers = exports.PersPoint = exports.HeadPoint = exports.PetPicture = exports.ImgPoint = exports.IntroPoint = exports.TitlePoint = exports.PointClassNew = exports.PointClass = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PointClass = /*#__PURE__*/function () {
  function PointClass(value, options) {
    _classCallCheck(this, PointClass);

    this.value = value;
    this.options = options;
  }

  _createClass(PointClass, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реазлизован'); // если в наследуемых классах его не будет, то будет выдаваться эта ошибка
    }
  }]);

  return PointClass;
}();

exports.PointClass = PointClass;

var PointClassNew = /*#__PURE__*/function () {
  function PointClassNew(value, value1, options) {
    _classCallCheck(this, PointClassNew);

    this.value = value;
    this.value1 = value1;
    this.options = options;
  }

  _createClass(PointClassNew, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реазлизован'); // если в наследуемых классах его не будет, то будет выдаваться эта ошибка
    }
  }]);

  return PointClassNew;
}();

exports.PointClassNew = PointClassNew;

var TitlePoint = /*#__PURE__*/function (_PointClass) {
  _inherits(TitlePoint, _PointClass);

  var _super = _createSuper(TitlePoint);

  function TitlePoint(value, options) {
    _classCallCheck(this, TitlePoint);

    return _super.call(this, value, options);
  }

  _createClass(TitlePoint, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? "h1" : _this$options$tag,
          styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(styles)); // деструктуризация
      // const tag = point.options.tag ?? 'h1'; значение по умолчанию
      // const styles = point.options.styles;
    }
  }]);

  return TitlePoint;
}(PointClass);

exports.TitlePoint = TitlePoint;

var IntroPoint = /*#__PURE__*/function (_PointClassNew) {
  _inherits(IntroPoint, _PointClassNew);

  var _super2 = _createSuper(IntroPoint);

  function IntroPoint(value, value1, options) {
    _classCallCheck(this, IntroPoint);

    return _super2.call(this, value, value1, options);
  }

  _createClass(IntroPoint, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)((0, _utils.col)("\n        <p>".concat(this.value, "</p>\n        <p>").concat(this.value1, "</p>"), (0, _utils.css)(this.options.styles)), (0, _utils.css)(this.options.styles1), "intro");
    }
  }]);

  return IntroPoint;
}(PointClassNew);

exports.IntroPoint = IntroPoint;

var ImgPoint = /*#__PURE__*/function (_PointClass2) {
  _inherits(ImgPoint, _PointClass2);

  var _super3 = _createSuper(ImgPoint);

  function ImgPoint(value, options) {
    _classCallCheck(this, ImgPoint);

    return _super3.call(this, value, options);
  }

  _createClass(ImgPoint, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          is = _this$options2.imageStyles,
          _this$options2$alt = _this$options2.alt,
          alt = _this$options2$alt === void 0 ? "" : _this$options2$alt,
          styles = _this$options2.styles;
      return (0, _utils.imgLogo)("<image class=\"logo\" src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat((0, _utils.css)(is), "\"/>"), (0, _utils.css)(styles));
    }
  }]);

  return ImgPoint;
}(PointClass);

exports.ImgPoint = ImgPoint;

var PetPicture = /*#__PURE__*/function () {
  function PetPicture(value) {
    _classCallCheck(this, PetPicture);

    this.value = value;
  }

  _createClass(PetPicture, [{
    key: "toHTML",
    value: function toHTML() {
      return "<image class=\"pet__picture imgPet\" src=\"".concat(this.value, "\"/>");
    }
  }]);

  return PetPicture;
}();

exports.PetPicture = PetPicture;

var HeadPoint = /*#__PURE__*/function (_PointClass3) {
  _inherits(HeadPoint, _PointClass3);

  var _super4 = _createSuper(HeadPoint);

  function HeadPoint(value, options) {
    _classCallCheck(this, HeadPoint);

    return _super4.call(this, value, options);
  }

  _createClass(HeadPoint, [{
    key: "toHTML",
    value: function toHTML() {
      var content = this.value.map(_utils.td).join("");
      return (0, _utils.tr)(content, "header", (0, _utils.css)(this.options.styles));
    }
  }]);

  return HeadPoint;
}(PointClass);

exports.HeadPoint = HeadPoint;

var PersPoint = /*#__PURE__*/function (_PointClass4) {
  _inherits(PersPoint, _PointClass4);

  var _super5 = _createSuper(PersPoint);

  function PersPoint(value, options) {
    _classCallCheck(this, PersPoint);

    return _super5.call(this, value, options);
  }

  _createClass(PersPoint, [{
    key: "toHTML",
    value: function toHTML() {
      this.options = {
        styles: {
          "background": "linear-gradient(90deg, #aea4e3, #d3ffe8)"
        },
        styles1: {
          "background": "linear-gradient(85deg, #fb63f9, #c2e534)"
        }
      };
      var content = this.value.map(function (item) {
        return (0, _utils.td)(item);
      }); // создание массива
      // my editions to person

      return (0, _utils.tr)(content.join(""), "person", (0, _utils.css)(this.options.styles)); // вставили  массив в таблицу
    }
  }]);

  return PersPoint;
}(PointClass);

exports.PersPoint = PersPoint;

var InputPers = /*#__PURE__*/function (_PointClass5) {
  _inherits(InputPers, _PointClass5);

  var _super6 = _createSuper(InputPers);

  function InputPers(value, options) {
    _classCallCheck(this, InputPers);

    return _super6.call(this, value, options);
  }

  _createClass(InputPers, [{
    key: "toHTML",
    value: function toHTML() {
      this.options = {
        styles: {
          "background": "linear-gradient(90deg, #aea4e3, #d3ffe8)",
          display: "flex",
          "flex-wrap": "no-wrap"
        },
        styles1: {
          "background": "linear-gradient(85deg, #fb63f9, #c2e534)"
        }
      };
      var content = this.value.map(_utils.td).join("");
      return (0, _utils.tr)((0, _utils.formAddPers)(content, "person"), (0, _utils.css)(this.options.styles));
    }
  }]);

  return InputPers;
}(PointClass); // создай утилиту формы для класса InputPers   formAddPers и переделай метод     toHTML


exports.InputPers = InputPers;
},{"../utils":"assets/script/utils.js"}],"assets/script/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = exports.img1 = void 0;

var _utils = require("./utils");

var _logo = _interopRequireDefault(require("../images/logo.png"));

var _dog = _interopRequireDefault(require("../images/customers/dog1.jpg"));

var _dog2 = _interopRequireDefault(require("../images/customers/dog2.jpg"));

var _points = require("./classes/points");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var img1 = "../images/";
exports.img1 = img1;
var model = [new _points.TitlePoint("Данные о владельцах животных", {
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
}), new _points.IntroPoint("Введние в таблицу. Инструкция JS", "Изменение таблицы", {
  styles: {
    display: "flex",
    "justify-content": "space-around",
    "font-style": "italic",
    padding: "1.5rem",
    color: "linear-gradient(85deg, #fb63f9, #c2e534)"
  },
  styles1: {
    background: "linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
    "margin-top": "15px"
  }
}), new _points.ImgPoint(_logo.default, {
  styles: {
    padding: '2rem 0',
    display: "flex",
    "justify-content": "left",
    position: "absolute",
    top: 0,
    left: 0,
    "z-index": 1000
  },
  imageStyles: {
    width: "190px",
    height: "auto",
    position: "static",
    "justify-content": "center"
  },
  alt: "Эта картинка"
}), new _points.HeadPoint(["Владелец животного", "Кличка животного", "Возраст животного,лет", "Адрес владельца", "Порода/Окрас", "Фотография"], {
  styles: {
    background: "linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
    "font-style": "italic"
  }
}), new _points.PersPoint(["Иванов И.И.", "Лайка", "6", "г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17", "Метис/Черный", (0, _utils.imgPet)(_dog.default)], "empty"), new _points.PersPoint(["Морозов Р.И.", "Панда", "9", "г. Санкт-Петербург, улица Подольских Людей, дом 9, квартира 8", "Пекинес/Светлый", (0, _utils.imgPet)(_dog2.default)], "empty"), new _points.InputPers([(0, _utils.inputPers)(), (0, _utils.inputPers)(), (0, _utils.inputPers)(), (0, _utils.inputPers)(), (0, _utils.inputPers)(), (0, _utils.addPicture)("file")])];
exports.model = model;
},{"./utils":"assets/script/utils.js","../images/logo.png":"assets/images/logo.png","../images/customers/dog1.jpg":"assets/images/customers/dog1.jpg","../images/customers/dog2.jpg":"assets/images/customers/dog2.jpg","./classes/points":"assets/script/classes/points.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/script/classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _utils = require("../utils");

var _points = require("./points");

var _model = require("../model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, updateCallBack) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.update = updateCallBack;
    this.paste(); // вставка в админ функций инпутов
  }

  _createClass(Sidebar, [{
    key: "paste",
    value: function paste() {
      this.$el.insertAdjacentHTML('afterbegin', this.admin); // getter

      this.$el.insertAdjacentHTML('afterbegin', this.myanswer = "I am administrator"); //setter

      this.$el.addEventListener("submit", this.add.bind(this)); // обработка формы, bind какпривязывание конекста
    }
  }, {
    key: "admin",
    get: function get() {
      return [(0, _utils.formSB)("title"), (0, _utils.formIntro)("intro"), // разберись со стилями
      (0, _utils.formImg)("img", "file"), // ошибка при загрузке файла
      (0, _utils.formSB)("head"), // ошибка
      (0, _utils.formSB)("person"), // ошибка
      (0, _utils.formSB)("InputPerson") // ошибка
      ].join("");
    }
  }, {
    key: "myanswer",
    set: function set(value) {
      return "<p>".concat(value, "</p>");
    }
  }, {
    key: "add",
    value: function add(event) {
      // доступ к event
      event.preventDefault();
      var type = event.target.name; // console.log(event.target) - сама форма
      // получение значений инпутов через атрибут "name"

      var value = event.target.value.value;
      var styles = event.target.styles.value;
      console.log(styles); // console.log( styles1)
      // мое дополнение
      // const value1 =event.target.value1.value
      // const styles1 =event.target.styles1.value
      // !!!!!!!!!   ОШИБКА 1 - идет из функции formSB файла utils не учтены что в классе IntroPoint  есть доп поля value1 и styles1
      // console.log(type,value,style)
      //сбор значений инпутов   
      // !! заметка:у класса IntroPoint 2 значения value!!
      //Тернарное выражение:
      //    let newPoint =type === "title"
      //     ? newPoint = new TitlePoint(value,{styles})
      //     : newPoint =  new IntroPoint(value,{styles})

      var newPoint;

      if (type === "title") {
        newPoint = new _points.TitlePoint(value, {
          styles: styles
        });
      } else if (type === "intro") {
        var value1 = event.target.value1.value;
        var styles1 = event.target.styles1.value;
        newPoint = new _points.IntroPoint(value, value1, {
          styles: styles,
          styles1: styles1
        });
      } else if (type === "img") {
        var file = document.getElementById('input-file').files[0]; // const type = document.getElementById('input-file').files[0].type

        var objectURL = window.URL.createObjectURL(file);
        /* важно !!!!
            Использование файлов в веб приложениях
        https://developer.mozilla.org/ru/docs/Web/API/File/Using_files_from_web_applications
          */

        console.log(objectURL);
        console.log(file);
        console.log(window);
        newPoint = new _points.ImgPoint(objectURL, {
          styles: styles
        });
      } else if (type === "head") {
        newPoint = new _points.HeadPoint(value, {
          styles: styles
        }); // ошибка привязки контекста
      } else if (type === "person") {
        newPoint = new _points.PersPoint(value, {
          styles: styles
        });
      } // ошибка привязки контекста
      else if (type === "InputPerson") {
          newPoint = new _points.InputPers(value, {
            styles: styles
          }); // ошибка привязки контекста
        } // console.log(newPoint);


      this.update(newPoint); // updateCallback  для выполение обновления модели данных 
      // очистка форм

      event.target.value.value = "";
      event.target.styles.value = "";
    }
  }]);

  return Sidebar;
}(); // // mine
// export class Test {
//     constructor(selector){
//         this.elem = document.querySelector(selector)
//         this.elem.insertAdjacentHTML("afterbegin",'<p>Привет лунатикам</p>')
//     }
//     toStyle(){
//         this.elem.style.color = "white"
//     }
// }
// export class FontStyle extends Test{
//     constructor(selector){
//         super(selector)
//     }
//     toFont(){
//         this.elem.style.fontSize = "20px"
//     }
// }


exports.Sidebar = Sidebar;
},{"../utils":"assets/script/utils.js","./points":"assets/script/classes/points.js","../model":"assets/script/model.js"}],"assets/script/classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// добавление на сайт в дом дерево  
var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      this.$el.innerHTML = ""; // очистка шаблона

      model.forEach(function (point) {
        _this.$el.insertAdjacentHTML("beforeend", point.toHTML());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{"./sidebar":"assets/script/classes/sidebar.js"}],"assets/script/classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site("#site"); // создаем сайт

      site.render(this.model); // рендеринг - перенос html в само dom дерево (forech modeljs через класс)
      //добавляем рендер
      // после #admin добавление изменений в сайт через call back

      var updateCallback = function updateCallback(newPoint) {
        _this.model.push(newPoint); // положить блок из сидебара в конец модели


        site.render(_this.model); // обновление данных в дом дереве
      }; // определяем  функцию которая следит за обновлением


      new _sidebar.Sidebar("#admin", updateCallback);
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"assets/script/classes/site.js","./sidebar":"assets/script/classes/sidebar.js"}],"assets/script/classes/info.js":[function(require,module,exports) {
"use strict";

var _points = require("./points");

var location = document.getElementById("site");
var parcel = [];
var btn = document.getElementById("data-btn"); // Работа с асинхронностью JS
//   Асинхронность. https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// Window https://developer.mozilla.org/ru/docs/Web/API/Window
//  Promise https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// setTimeout(function(){
//     const btnSubmit = document.getElementById("data-btn")
//     const inputNotes = document.querySelectorAll(".table__input")
//     // console.log(btnSubmit)
//     const array = [btnSubmit,inputNotes]
//    console.log(array)
//    return array
// },0)

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Preparing data");
    var btnSubmit = document.getElementById("data-btn"); //  console.log(array) 
    //    return array

    resolve(btnSubmit);
  }, 0);
});
var box;
p.then(function (data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      box = data;
      resolve(box);
    }, 0);
  }); // promise2.then(note=>{
  //     console.log("Got",note)
  // })
}).then(function (getBox) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      location.append(getBox);
      var inputs = document.querySelectorAll(".table__input");
      getBox.addEventListener("click", function (event) {
        event.preventDefault();
        var box = [];
        inputs.forEach(function (item) {
          if (item.type) {
            box.push(item.value);

            if (item.type === "file" && item.files[0]) {
              var fileImg = item.files[0];
              var objURLImg = window.URL.createObjectURL(fileImg);
              var addPhoto = new _points.PetPicture(objURLImg).toHTML();
              box[box.length - 1] = addPhoto;
            }
          }
        });
        var person = new _points.PersPoint(box).toHTML(); // location.insertAdjacentElement('afterbegin',person)
        //    location.innerHTML = person

        if (person) {
          location.insertAdjacentHTML('beforeend', person);
        }
      });
      resolve(person);
    }, 0);
  });
}).then(function (container) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {// getPhoto.addEventListener
    }, 0);
  });
});
},{"./points":"assets/script/classes/points.js"}],"assets/script/index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

require("../scss/main.scss");

var _app = require("./classes/app");

require("./classes/info");

// new App(model).init()   если конструктор не запущен
new _app.App(_model.model);
console.log("efefe"); // const container = new GetInfo("table__input").catchVal()
// console.log(container)
//      
// sidebar.myanswer  setter
// // mine
// const test =new Test(".test")
// test.toStyle()
// const test2 = new FontStyle(".test2")
// test2.toStyle()
// test2.toFont()
// model.forEach(point =>{
//     if(point){
//         site.insertAdjacentHTML("beforeend",point.toHTML());
//     }
// })
// if(point.type === "title"){
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
// })
},{"./model":"assets/script/model.js","../scss/main.scss":"assets/scss/main.scss","./classes/app":"assets/script/classes/app.js","./classes/info":"assets/script/classes/info.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61409" + '/');

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