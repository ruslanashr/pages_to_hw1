!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=22)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[e].concat(i).concat([r]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),c=null,f=0,l=[],p=e(2);function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return x(t,n.attrs),h(n,t),t}function x(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function g(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=f++;e=c||(c=m(t)),o=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(t,n.attrs),h(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){b(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return u(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}n&&u(d(n,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,y=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o=e(4);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"html {\n  background-color: #F9FAFC; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\na {\n  text-decoration: none; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 137px 20px 141px;\n  font-family: 'Roboto', sans-serif; }\n\n.header__logo img {\n  height: 35px;\n  width: 138px; }\n\n.header__text {\n  margin-left: auto;\n  margin-right: 5px;\n  font-weight: 300; }\n\n.header__link {\n  font-weight: bold;\n  color: #2A74DB; }\n",""])},function(n,t,e){var o=e(6);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,".window {\n  background-color: #fff;\n  padding: 72px 115px 81px 115px;\n  width: 30%;\n  align-self: center;\n  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);\n  border-radius: 10px; }\n",""])},function(n,t,e){var o=e(8);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'.form {\n  display: flex;\n  flex-direction: column;\n  font-family: \'Exo 2\', sans-serif; }\n  .form__title {\n    font-weight: 600;\n    font-size: 28px;\n    color: #002396;\n    margin-bottom: 35px; }\n  .form__input {\n    font-family: Roboto, sans-serif;\n    font-size: 14px;\n    height: 40px;\n    width: 100%;\n    background: #FCFCFC;\n    border: 2px solid #F2F2F2;\n    border-radius: 2px;\n    padding-left: 15px;\n    box-sizing: border-box; }\n  .form__input::placeholder {\n    color: rgba(135, 144, 167, 0.57);\n    letter-spacing: 0.28px; }\n  .form__input::active {\n    background-color: red; }\n  .form__input + .form__input {\n    margin-top: 25px; }\n  .form__name {\n    width: 47%;\n    margin-top: 0 !important; }\n  .form__forgot {\n    font-size: 12px;\n    margin-top: 14px;\n    align-self: flex-end;\n    color: #222428; }\n  .form__button {\n    margin-top: 40px;\n    font-family: \'Exo 2\', sans-serif;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    height: 43px;\n    background-color: #0AD69C;\n    width: 44%;\n    align-self: flex-end;\n    color: #fff;\n    cursor: pointer; }\n\ninput[type="text"]:focus, input[type="password"]:focus {\n  outline: none;\n  background: #FFFFFF;\n  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);\n  border-left: 2px solid #2A74DB; }\n\ninput[type="submit"]:focus {\n  outline: none; }\n\n.name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 20px; }\n',""])},,,,,,,,,,,,,,function(n,t,e){"use strict";e.r(t);e(3),e(5),e(7),e(23)},function(n,t,e){var o=e(24);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"label {\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  color: #222428; }\n  label a {\n    color: #002396; }\n\n.form__checkboxes {\n  display: flex;\n  margin-top: 16px; }\n\n.checkboxes__first {\n  margin-top: 33px; }\n\n.checkboxes__second {\n  margin-bottom: 34px; }\n\n.form__check {\n  margin-right: 13px;\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n.form__check:checked ~ .checkmark {\n  background: rgba(245, 247, 250, 0.5); }\n\n.checkmark:after {\n  content: '';\n  position: absolute;\n  display: none; }\n\n.form__check:checked ~ .checkmark:after {\n  display: block; }\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 24px;\n  width: 24px;\n  background: #FFFFFF;\n  border: 2px solid #F2F2F2;\n  border-radius: 2px; }\n\n.checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid #0AD69C;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n\n.check__result {\n  display: none;\n  margin-top: 8px;\n  margin-bottom: 22px; }\n\n.checkboxes {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  font-size: 14px;\n  user-select: none;\n  line-height: 28px; }\n\n.form__password {\n  margin-bottom: 20px; }\n\n.result {\n  width: 140px;\n  height: 6px;\n  background: #EBEFF3;\n  border-radius: 2px;\n  margin-right: 5px; }\n\n.color-red {\n  background-color: #FF6359; }\n\n.color-orange {\n  background-color: #FFB966; }\n\n.color-green {\n  background-color: #38ECAC; }\n",""])}]);