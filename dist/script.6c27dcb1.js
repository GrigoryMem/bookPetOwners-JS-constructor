parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MjSJ":[function(require,module,exports) {
"use strict";function t(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";return'<div class="row  '.concat(o,'" style="').concat(c,'">').concat(t,"</div>")}function c(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return'<div class="col-sm '.concat(o,'" style="').concat(c,'">').concat(t,"</div>")}function o(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<td class="col-sm" style='.concat(c,">").concat(t,"</td>")}function n(t,c){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return'<table class="table"><tr class="row '.concat(c,'" style="').concat(o,'">').concat(t,"</tr></table>")}function e(t){return' <div class="logo wrapper"><image  class="logo" src='.concat(t,"></div>")}function r(t){return'<img class="imgPet" src="'.concat(t,'">')}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).map(function(c){return"".concat(c,":").concat(t[c])}).join(";")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=t,exports.col=c,exports.td=o,exports.tr=n,exports.imgLogo=e,exports.imgPet=r,exports.css=s;
},{}],"iZDm":[function(require,module,exports) {
module.exports="/logo.0797479d.png";
},{}],"zaJg":[function(require,module,exports) {
module.exports="/dog1.95690be5.jpg";
},{}],"UpJw":[function(require,module,exports) {
module.exports="/dog2.a2573c52.jpg";
},{}],"Cftn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=require("./utils"),t=o(require("../images/logo.png")),r=o(require("../images/customers/dog1.jpg")),a=o(require("../images/customers/dog2.jpg"));function o(e){return e&&e.__esModule?e:{default:e}}var i=[{type:"title",value:"Данные о владельцах животных",options:{tag:"h1",styles:{background:"linear-gradient(90deg, #f598a8, #f6edb2)",color:"linear-gradient(85deg, #fb63f9, #c2e534)","text-transform":"uppercase","text-decoration":"underline",padding:"1.5rem"}}},{type:"intro",value:"Ввведние в таблицу. Инструкция JS",value1:"Изменение таблицы",options:{styles:{display:"flex","justify-content":"space-around","font-style":"italic",padding:"1.5rem",color:"linear-gradient(85deg, #fb63f9, #c2e534)"},styles1:{background:"linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)","margin-top":"15px"}}},{type:"header",value:["Владелец животного","Кличка животного","Возраст животного,лет","Адрес владельца","Порода/Окрас","Фотография"],options:{styles:{background:"linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)","font-style":"italic"}}},{type:"person",value:["Иванов И.И.","Лайка","6","г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17","Метис/Черный",(0,e.imgPet)(r.default)]},{type:"person",value:["Морозов Р.И.","Панда","9","г. Санкт-Петербург, улица Подольских Людей, дом 9, квартира 8","Пекинес/Светлый",(0,e.imgPet)(a.default)]},{type:"image",value:t.default}];exports.model=i,console.log(i);
},{"./utils":"MjSJ","../images/logo.png":"iZDm","../images/customers/dog1.jpg":"zaJg","../images/customers/dog2.jpg":"UpJw"}],"IdiG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templates=void 0;var e=require("./utils");function t(t){var n=t.options,o=n.tag,r=void 0===o?"h1":o,s=n.styles;return(0,e.row)((0,e.col)("<".concat(r,">").concat(t.value,"</").concat(r,">")),(0,e.css)(s))}function n(t){return(0,e.row)((0,e.col)("\n     <p>".concat(t.value,"</p>\n     <p>").concat(t.value1,"</p>"),(0,e.css)(t.options.styles)),(0,e.css)(t.options.styles1),"intro")}function o(t){var n=t.value.map(e.td).join("");return(0,e.tr)(n,"header",(0,e.css)(t.options.styles))}function r(t){t.options={styles:{background:"linear-gradient(90deg, #aea4e3, #d3ffe8)"},styles1:{background:"linear-gradient(85deg, #fb63f9, #c2e534)"}};var n=t.value.map(function(t){return(0,e.td)(t)});return(0,e.tr)(n.join(""),"person",(0,e.css)(t.options.styles))}function s(t){return(0,e.imgLogo)(t.value)}var a={title:t,intro:n,header:o,person:r,image:s};exports.templates=a;
},{"./utils":"MjSJ"}],"uDrZ":[function(require,module,exports) {

},{}],"cHtw":[function(require,module,exports) {
"use strict";var e=require("./model"),r=require("./templates");require("../scss/main.scss");var t=document.querySelector("#site");console.log(r.templates),e.model.forEach(function(e){var s=r.templates[e.type];s&&t.insertAdjacentHTML("beforeend",s(e))});
},{"./model":"Cftn","./templates":"IdiG","../scss/main.scss":"uDrZ"}]},{},["cHtw"], null)