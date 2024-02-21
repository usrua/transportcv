(function(){var n;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function ba(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(null,arguments)}
function t(a,b){function c(){}c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.U=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};var u;var ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};
function ha(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function w(){var a=p.navigator;return a&&(a=a.userAgent)?a:""};function x(a){x[" "](a);return a}x[" "]=function(){};var ia=-1!=w().indexOf("Gecko")&&!(-1!=w().toLowerCase().indexOf("webkit")&&-1==w().indexOf("Edge"))&&!(-1!=w().indexOf("Trident")||-1!=w().indexOf("MSIE"))&&-1==w().indexOf("Edge");function ja(a,b,c){for(var d in a)b.call(c,a[d],d,a)}var ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ka.length;f++)c=ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function ma(a,b){ja(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:na.hasOwnProperty(d)?a.setAttribute(na[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}var na={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function oa(a){return a.parentWindow||a.defaultView}function pa(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!ba(f)||q(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(q(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}fa(g?ha(f):f,d)}}}function y(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function z(a){return a.contentDocument||a.contentWindow.document}function A(a){this.h=a||p.document||document}A.prototype.g=function(a,b,c){var d=this.h,e=arguments,f=e[1];var g=String(e[0]);g=String(g);"application/xhtml+xml"===d.contentType&&(g=g.toLowerCase());g=d.createElement(g);f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):ma(g,f));2<e.length&&pa(d,g,e);return g};function qa(a,b){a.appendChild(b)};function B(){this.B=this.B;this.h=this.h}B.prototype.B=!1;B.prototype.s=function(){if(this.h)for(;this.h.length;)this.h.shift()()};function C(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var ra=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{var c=function(){};p.addEventListener("test",c,b);p.removeEventListener("test",c,b)}catch(d){}return a}();function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.I=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(ia){a:{try{x(b.nodeName);var e=!0;break a}catch(f){}e=
!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;
this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:sa[a.pointerType]||"";this.state=a.state;this.I=a;a.defaultPrevented&&D.v.h.call(this)}}t(D,C);var sa={2:"touch",3:"pen",4:"mouse"};D.prototype.h=function(){D.v.h.call(this);var a=this.I;a.preventDefault?a.preventDefault():a.returnValue=!1};var E="closure_listenable_"+(1E6*Math.random()|0);var ta=0;function ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.C=e;this.key=++ta;this.u=this.A=!1}function F(a){a.u=!0;a.listener=null;a.proxy=null;a.src=null;a.C=null};function G(a){this.src=a;this.g={};this.h=0}G.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=H(a,b,d,e);-1<g?(b=a[g],c||(b.A=!1)):(b=new ua(b,this.src,f,!!d,e),b.A=c,a.push(b));return b};function I(a,b){var c=b.type;if(c in a.g){var d=a.g[c],e=ea(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(F(b),0==a.g[c].length&&(delete a.g[c],a.h--))}}
function H(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.u&&f.listener==b&&f.capture==!!c&&f.C==d)return e}return-1};var J="closure_lm_"+(1E6*Math.random()|0),K={},va=0;function L(a,b,c,d,e){if(d&&d.once)return M(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)L(a,b[f],c,d,e);return null}c=N(c);return a&&a[E]?a.g.add(String(b),c,!1,q(d)?!!d.capture:!!d,e):wa(a,b,c,!1,d,e)}
function wa(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,h=O(a);h||(a[J]=h=new G(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=xa();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ra||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ya(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");va++;return c}
function xa(){function a(c){return b.call(a.src,a.listener,c)}var b=za;return a}function M(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)M(a,b[f],c,d,e);return null}c=N(c);return a&&a[E]?a.g.add(String(b),c,!0,q(d)?!!d.capture:!!d,e):wa(a,b,c,!0,d,e)}
function Aa(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Aa(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=N(c),a&&a[E])?(a=a.g,b=String(b).toString(),b in a.g&&(f=a.g[b],c=H(f,c,d,e),-1<c&&(F(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=O(a))&&(b=a.g[b.toString()],a=-1,b&&(a=H(b,c,d,e)),(c=-1<a?b[a]:null)&&P(c))}
function P(a){if("number"!==typeof a&&a&&!a.u){var b=a.src;if(b&&b[E])I(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ya(c),d):b.addListener&&b.removeListener&&b.removeListener(d);va--;(c=O(b))?(I(c,a),0==c.h&&(c.src=null,b[J]=null)):F(a)}}}function ya(a){return a in K?K[a]:K[a]="on"+a}function za(a,b){if(a.u)a=!0;else{b=new D(b,this);var c=a.listener,d=a.C||a.src;a.A&&P(a);a=c.call(d,b)}return a}
function O(a){a=a[J];return a instanceof G?a:null}var Q="__closure_events_fn_"+(1E9*Math.random()>>>0);function N(a){if("function"===typeof a)return a;a[Q]||(a[Q]=function(b){return a.handleEvent(b)});return a[Q]};function R(a){B.call(this);this.i=a;this.g={}}t(R,B);var Ba=[];function S(a,b,c,d){Array.isArray(c)||(c&&(Ba[0]=c.toString()),c=Ba);for(var e=0;e<c.length;e++){var f=L(b,c[e],d||a.handleEvent,!1,a.i||a);if(!f)break;a.g[f.key]=f}return a}function Ca(a){ja(a.g,function(b,c){this.g.hasOwnProperty(c)&&P(b)},a);a.g={}}R.prototype.s=function(){R.v.s.call(this);Ca(this)};R.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Da(a,b,c){this.G=c;this.N=this.l=null;this.g=1;this.F=a?new A(9==a.nodeType?a:a.ownerDocument||a.document):u||(u=new A);this.J=new R(this);a=this.F;c=a.g("DIV",{className:"switcherOuter",style:"left:0px;top:0px;width:100%;height:100%;"});b.appendChild(c);this.O=c;b=c.offsetWidth-13-2;this.m=a.g("DIV",{className:"switcherContent",style:"left:0px;top:0;width:"+(b-7)+"px;height:80%;"},a.g("TABLE","switcherTable",a.g("TBODY",null,this.K=a.g("TR"))));c.appendChild(this.m);this.i=a.g("DIV",{className:"switcherArrows",
style:"left:"+b+"px;top:0;width:13px;height:50%;"},a.g("B",null,">"));c.appendChild(this.i);this.h=a.g("DIV",{className:"switcherArrows",style:"left:"+b+"px;top:"+c.offsetHeight/2+"px;width:13px;height:50%;"},a.g("B",null,"<"));c.appendChild(this.h);S(S(S(S(S(S(this.J,this.h,"mouseover",this.S),this.i,"mouseover",this.T),this.h,"mouseout",this.P),this.i,"mouseout",this.R),this.h,"mousedown",this.L),this.i,"mousedown",this.L);this.j=0;this.o=null}
function Ea(a,b){var c=a.K.cells.length,d=a.K;d.insertCell(c);var e=d.cells[c];y(e);e.appendChild(a.F.h.createTextNode(String(b.name)));e.item=b;e=d.cells[c];e.className="switcherItem";b.initialSheet&&a.H(b,e,!1);S(a.J,e,"click",r(a.H,a,b,e,!0));return e}n=Da.prototype;n.H=function(a,b,c){a!=this.l&&(null!=this.l&&(this.N.className="switcherItem"),this.l=a,this.N=b,b.className="switcherItemActive",b=this.G,null!=b&&b(a,c))};n.M=function(){this.m.scrollLeft+=1*this.g*this.j};
n.S=function(){this.g=1;this.j=-1;this.o=window.setInterval(r(this.M,this),10)};n.T=function(){this.j=this.g=1;this.o=window.setInterval(r(this.M,this),10)};n.P=function(){window.clearInterval(this.o);this.j=0};n.R=function(){window.clearInterval(this.o);this.j=0};n.L=function(){4>this.g?this.g++:this.g=1};n.cleanup=function(){this.G=null};function T(){B.call(this);this.g=new G(this);this.F=this;this.l=null}t(T,B);T.prototype[E]=!0;T.prototype.removeEventListener=function(a,b,c,d){Aa(this,a,b,c,d)};T.prototype.s=function(){T.v.s.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,F(d[e]);delete a.g[c];a.h--}}this.l=null};
function U(a,b,c,d){b=a.g.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.u&&g.capture==c){var h=g.listener,m=g.C||g.src;g.A&&I(a.g,g);e=!1!==h.call(m,d)&&e}}return e&&!d.defaultPrevented};function V(a,b){T.call(this);this.D=a;this.G=!!b;this.o=Fa(this);this.o||(this.i=L(this.D,"load",this.m,!1,this),this.j=window.setInterval(r(this.m,this),100))}t(V,T);V.prototype.i=null;function Ga(a){a.j&&(window.clearInterval(a.j),a.j=null)}V.prototype.s=function(){delete this.D;Ga(this);P(this.i);V.v.s.call(this)};function Fa(a){var b=!1;try{var c=z(a.D).body;b=a.G?!!c&&!!c.firstChild:!!c}catch(d){}return b}
V.prototype.m=function(){if(Fa(this)){Ga(this);P(this.i);this.i=null;this.o=!0;var a=this.l;if(a){var b=[];for(var c=1;a;a=a.l)b.push(a),++c}a=this.F;c="ifload";var d=c.type||c;if("string"===typeof c)c=new C(c,a);else if(c instanceof C)c.target=c.target||a;else{var e=c;c=new C(d,a);la(c,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=c.g=b[f];e=U(g,d,!0,c)&&e}g=c.g=a;e=U(g,d,!0,c)&&e;e=U(g,d,!1,c)&&e;if(b)for(f=0;f<b.length;f++)g=c.g=b[f],e=U(g,d,!1,c)&&e}};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ha="function"===typeof URL;function Ia(){if(!Ha){a:{var a=document.createElement("a");try{a.href="http://www.google.com/webelements/"}catch(b){a=void 0;break a}a=a.protocol;a=":"===a||""===a?"https:":a}return a}try{a=new URL("http://www.google.com/webelements/")}catch(b){return"https:"}return a.protocol};function W(a,b,c,d,e,f,g,h){var m=this;this.h=a?new A(9==a.nodeType?a:a.ownerDocument||a.document):u||(u=new A);this.o=h;this.g=this.j=null;var l=this.h;f=l.g("TABLE",{style:"position:relative;left:"+c+"px;top:"+d+"px;width:"+e+";height:"+f+";",cellpadding:0,cellspacing:0},c=l.g("TBODY",null,l.g("TR",null,l.g("TD",null,e=l.g("DIV",{style:"left:0px;top:0px;width:100%;height:100%;overflow:auto"}))),l.g("TR",null,d=l.g("TD",{style:"height:26px;background-color:#eee"}))));b.appendChild(f);this.i=e;this.l=
a=new Da(a,d,function(k,v){k=r(m.m,m,k,v);if("function"!==typeof k)if(k&&"function"==typeof k.handleEvent)k=r(k.handleEvent,k);else throw Error("Invalid listener argument");2147483647<Number(20)||p.setTimeout(k,20)});h&&(h=l.g("DIV","element-link","\u00a0"),qa(c,l.g("TR",null,l.g("TD","element-link-container",h))),L(h,"click",function(){var k=window;var v="javascript:"!==Ia()?"http://www.google.com/webelements/":void 0;void 0!==v&&k.open(v,void 0,void 0)}));if(g.length){l=null;for(h=0;h<g.length;h++)b=
Ea(a,g[h]),0==h&&(l=b);null==a.l&&a.H(g[0],l,!1)}L(oa(this.h.h),"message",function(k){k=k.I;var v=k.origin,aa=v.length-11;0<=aa&&v.indexOf(".google.com",aa)==aa&&"SendKeyboardEvents"==k.data&&(m.j=k.origin,Ja(m,m.h.h),m.g&&Ja(m,z(m.g)))})}
W.prototype.m=function(a,b){var c=this,d=a.pageUrl,e=this.i;y(e);this.g=null;d=this.h.g("IFRAME",{id:"pageswitcher-content",style:"display: block; width: 100%; height:100%;",frameBorder:"0",marginHeight:"0",marginWidth:"0",src:d});var f=new V(d,!0);M(f,"ifload",function(g){g=g.target;c.g=g.D;g.B||(g.B=!0,g.s());c.j&&c.g&&Ja(c,z(c.g))});e.appendChild(d);b&&void 0!==a.gid&&(window.location.hash="#gid="+a.gid)};
function Ja(a,b){L(b,["keydown","keyup","keypress"],function(c){if(a.j){var d=oa(a.h.h).parent;d&&d.postMessage&&d.postMessage(JSON.stringify({type:c.type,ctrlKey:c.ctrlKey,altKey:c.altKey,shiftKey:c.shiftKey,metaKey:c.metaKey,keyCode:c.keyCode}),a.j)}})}W.prototype.resize=function(a,b){var c=this.i.style;c.width=a+"px";c.height=b-26-(this.o?24:0)+"px";a=this.l;b=a.O.offsetWidth-13-2;a.m.style.width=b-7+"px";a.i.style.left=b+"px";a.h.style.left=b+"px"};
W.prototype.cleanup=function(){this.l.cleanup();this.l=null;y(this.i);this.i=null};function Ka(a,b,c,d,e,f,g,h,m){return new W(b,c,d,e,f,g,h,m)}var X=["_getWGTPageSwitcher"],Y=p;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ka?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ka;}).call(this);
