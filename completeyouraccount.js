!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=25)}({25:function(e,t){var r=document.getElementById("password"),o=document.querySelector(".check__result"),n=document.getElementsByClassName("result");r.onkeydown=function(e){var t=r.value;t.length>=0&&t.length<=4?(o.setAttribute("style","display: flex"),r.setAttribute("style","box-shadow: none"),n[0].classList.add("color-red"),n[0].classList.remove("color-orange"),n[1].classList.remove("color-orange")):t.length>4&&t.length<=7?(n[0].classList.remove("color-red"),n[0].classList.add("color-orange"),n[1].classList.add("color-orange"),n[0].classList.remove("color-green"),n[1].classList.remove("color-green"),n[2].classList.remove("color-green")):t.length>7&&(n[0].classList.remove("color-orange"),n[1].classList.remove("color-orange"),n[0].classList.add("color-green"),n[1].classList.add("color-green"),n[2].classList.add("color-green"));t.length<1&&o.setAttribute("style","display: none")}}});