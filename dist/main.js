(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(557),t.b),d=new URL(t(471),t.b),p=new URL(t(794),t.b),u=i()(o()),f=s()(l),m=s()(d),g=s()(p);u.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f1eded;\r\n  font-family: sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.main {\r\n  width: 80%;\r\n  margin: 5rem auto;\r\n  box-shadow: 5px 5px 5px gray, 5px -5px 5px gray;\r\n  background-color: #fff;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.top {\r\n  align-items: center;\r\n}\r\n\r\n.top span {\r\n  display: inline-block;\r\n  padding: 20px 10px;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n\r\n.reset {\r\n  background: url("+f+") center no-repeat;\r\n}\r\n\r\n.input-text {\r\n  display: grid;\r\n  grid-template-columns: 80% 20%;\r\n}\r\n\r\ninput {\r\n  padding: 20px 10px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-size: 18px;\r\n  display: inline;\r\n}\r\n\r\ninput:focus {\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n}\r\n\r\n.add {\r\n  background: url("+m+") center no-repeat;\r\n  float: none;\r\n  margin-right: 10px;\r\n}\r\n\r\n.wrapper {\r\n  padding: 0;\r\n  margin-left: 10px;\r\n}\r\n\r\n.list-item {\r\n  list-style-type: none;\r\n}\r\n\r\n.list-item span {\r\n  display: inline-block;\r\n  padding: 20px 0;\r\n}\r\n\r\n.title {\r\n  margin: 0 10px;\r\n}\r\n\r\ni {\r\n  float: right;\r\n  align-items: center;\r\n  display: block;\r\n  width: 50px;\r\n  height: 20px;\r\n  margin: 20px auto;\r\n  opacity: 0.4;\r\n}\r\n\r\ni:hover {\r\n  cursor: move;\r\n}\r\n\r\n.option {\r\n  background: url("+g+") center no-repeat;\r\n}\r\n\r\n.foot {\r\n  background-color: #e0dddd;\r\n  padding: 10px 0;\r\n}\r\n\r\n.foot a {\r\n  display: inline-block;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #000;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  opacity: 0.6;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .main {\r\n    width: 60%;\r\n  }\r\n\r\n  .input-text {\r\n    display: grid;\r\n    grid-template-columns: 92% 8%;\r\n  }\r\n}\r\n",""]);const h=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},557:(n,e,t)=>{n.exports=t.p+"93caead91431fc86da0e.svg"},471:(n,e,t)=>{n.exports=t.p+"0b0809bb8717dccae975.svg"},794:(n,e,t)=>{n.exports=t.p+"4da6efdae2708ae1b361.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let g=JSON.parse(localStorage.getItem("tasks"))||[];function h(){document.querySelectorAll(".option").forEach((n=>{const e=document.querySelector(".container");n.addEventListener("click",(n=>{const t=n.target.parentNode.parentNode;e.removeChild(t);const r=n.target.previousElementSibling.textContent;g=g.filter((n=>n.description!==r)),localStorage.setItem("tasks",JSON.stringify(g))}))}))}function y(){document.querySelectorAll(".checkbox").forEach((n=>{n.addEventListener("change",(e=>{const t=e.target.nextElementSibling;if(n.checked){t.style.textDecoration="line-through",t.style.color="gray";for(let n=0;n<g.length;n+=1)g[n].description===t.textContent&&(g[n].completed=!0,localStorage.setItem("tasks",JSON.stringify(g)))}else{t.style.color="black",t.style.textDecoration="none";for(let n=0;n<g.length;n+=1)g[n].description===t.textContent&&(g[n].completed=!1,localStorage.setItem("tasks",JSON.stringify(g)))}}))}))}function v(){document.querySelector(".clear").addEventListener("click",(()=>{g=g.filter((n=>!0!==n.completed)),localStorage.setItem("tasks",JSON.stringify(g)),window.location.reload(!0)}))}y(),v();const x=document.querySelector(".container");class b{constructor(n,e,t){this.description=n,this.completed=e,this.index=t}}const S=n=>{const e=document.createElement("div");e.classList.add("wrapper");const t=document.createElement("p");t.classList.add("list-item");const r=document.createElement("hr");t.appendChild(r);const o=document.createElement("input");o.setAttribute("type","checkbox"),o.classList.add("checkbox");const a=document.createElement("span");a.classList.add("title"),a.innerHTML=n.description;const i=document.createElement("i");i.classList.add("option"),e.appendChild(t),t.append(o,a,i),x.append(e)};document.querySelector(".add").addEventListener("click",(()=>{const n=document.querySelector(".task-to-add").value;if(""===n)return!1;const e=new b(n,!1,g.length+1);return S(e),document.querySelector(".task-to-add").value="",g.push(e),h(),y(),v(),localStorage.setItem("tasks",JSON.stringify(g))})),g.forEach((n=>{S(n)})),h(),y()})()})();