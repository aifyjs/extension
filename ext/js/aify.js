/*!
 * 
 *   @xprilion/aifyjs v0.1.2
 *   https://github.com/xprilion/aifyjs
 * 
 *   Copyright (c) Anubhav Singh (https://github.com/xprilion)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aify=t():e.aify=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);window.aifyjs=function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),o(this,"labels",(function(){var e=this;e.labelcounter=0,$.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/labels",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.labelchanges=n;for(var o=0;o<n.length;o++){var a=n[o].xpath,r=n[o].changes;for(var l in r){var c=document.evaluate(a,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{c.singleNodeValue.setAttribute(l,r[l]),c.singleNodeValue.setAttribute("change","label_"+e.labelcounter),e.labelchanges[o].element="label_"+e.labelcounter,e.labelcounter+=1}catch(e){console.log("Labels: "),console.log(a),console.log(e)}}}}})})),o(this,"captions",(function(){var e=this;e.captioncounter=0,$.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/captions",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.captionchanges=n;for(var o=0;o<n.length;o++){var a=n[o].xpath,r=n[o].changes;for(var l in r){var c=document.evaluate(a,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{c.singleNodeValue.setAttribute(l,r[l]),c.singleNodeValue.setAttribute("change","caption_"+e.captioncounter),e.captionchanges[o].element="caption_"+e.captioncounter,e.captioncounter+=1}catch(e){console.log("captions"),console.log(a),console.log(e)}}}}})})),o(this,"displayLabels",(function(){for(var e=this.labelchanges,t=0;t<e.length;t++){var n=e[t].element,o=e[t].changes;for(var a in o){var r=document.querySelector("[change="+n+"]");try{var l=document.createElement("span");r.parentNode.insertBefore(l,r),l.style.background="red",l.appendChild(r);var c=document.createElement("span");c.style.color="white",c.innerHTML=o[a],l.appendChild(c)}catch(e){console.log("labels"),console.log(r),console.log(e)}}}})),o(this,"displayCaptions",(function(){for(var e=this.captionchanges,t=0;t<e.length;t++){var n=e[t].element,o=e[t].changes;for(var a in o){var r=document.querySelector("[change="+n+"]");try{var l=document.createElement("div");r.parentNode.insertBefore(l,r),l.style.background="black",l.appendChild(r);var c=document.createElement("div");c.style.color="white",c.innerHTML=o[a],l.appendChild(c)}catch(e){console.log("captions"),console.log(r),console.log(e)}}}}));var t=window.$;this.html=t("html").html(),t.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/check",success:function(e){console.log(e)}})},t.default=aifyjs}])}));