parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIJD":[function(require,module,exports) {

},{}],"fx60":[function(require,module,exports) {

},{"../node_modules/normalize.css/normalize.css":"KIJD","/Users/shehzad/Documents/izza-pizza/assets/svg/phone.svg":[["phone.0102a160.svg","Hx45"],"Hx45"],"/Users/shehzad/Documents/izza-pizza/assets/svg/whiteswirl.svg":[["whiteswirl.d0c871c5.svg","dl9q"],"dl9q"],"/Users/shehzad/Documents/izza-pizza/assets/svg/un.svg":[["un.8ff57881.svg","BRiD"],"BRiD"],"/Users/shehzad/Documents/izza-pizza/assets/img/hero.jpg":[["hero.655edbb3.jpg","fsPM"],"fsPM"],"/Users/shehzad/Documents/izza-pizza/assets/img/bsignpostimage.jpg":[["bsignpostimage.0c94aa9d.jpg","kHdA"],"kHdA"]}],"Axxy":[function(require,module,exports) {
var e=document.getElementById("js-menu"),t=document.getElementById("js-navbar-toggle");t.addEventListener("click",function(){e.classList.toggle("d-block")});var n=window.scrollY,s=document.getElementById("js-header"),c=s.offsetHeight,o=function(){return s.classList.add("sticky")},d=function(){return s.classList.remove("sticky")};window.addEventListener("scroll",function(){(n=window.scrollY)>=c?o():d()});
},{}],"NcgF":[function(require,module,exports) {
var e=document.getElementById("js-map-modal"),n=document.getElementById("js-map-modal-trigger"),t=document.getElementsByClassName("c-popup__close")[0];n.onclick=function(){e.style.display="block"},t.onclick=function(){e.style.display="none"},window.onclick=function(n){n.target===e&&(e.style.display="none")};
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.scss"),require("./js/nav.js"),require("./js/popup.js");
},{"./scss/main.scss":"fx60","./js/nav.js":"Axxy","./js/popup.js":"NcgF"}]},{},["Focm"], null)
//# sourceMappingURL=izza-pizza.788f57e1.js.map