(self.webpackChunkmeipieart_be=self.webpackChunkmeipieart_be||[]).push([[4593],{3108:(q,tt,m)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var w={655:(a,C,n)=>{"use strict";n.d(C,{Z:()=>x});var f=n(609),S=n.n(f)()(function(E){return E[1]});S.push([a.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const x=S},609:a=>{"use strict";a.exports=function(C){var n=[];return n.toString=function(){return this.map(function(f){var S=C(f);return f[2]?"@media ".concat(f[2]," {").concat(S,"}"):S}).join("")},n.i=function(f,S,x){typeof f=="string"&&(f=[[null,f,""]]);var E={};if(x)for(var H=0;H<this.length;H++){var O=this[H][0];O!=null&&(E[O]=!0)}for(var _=0;_<f.length;_++){var M=[].concat(f[_]);x&&E[M[0]]||(S&&(M[2]?M[2]="".concat(S," and ").concat(M[2]):M[2]=S),n.push(M))}},n}},62:(a,C,n)=>{"use strict";var f,S=function(){return f===void 0&&(f=Boolean(window&&document&&document.all&&!window.atob)),f},x=function(){var s={};return function(b){if(s[b]===void 0){var l=document.querySelector(b);if(window.HTMLIFrameElement&&l instanceof window.HTMLIFrameElement)try{l=l.contentDocument.head}catch{l=null}s[b]=l}return s[b]}}(),E=[];function H(s){for(var b=-1,l=0;l<E.length;l++)if(E[l].identifier===s){b=l;break}return b}function O(s,b){for(var l={},P=[],I=0;I<s.length;I++){var z=s[I],R=b.base?z[0]+b.base:z[0],ct=l[R]||0,Y="".concat(R," ").concat(ct);l[R]=ct+1;var Q=H(Y),G={css:z[1],media:z[2],sourceMap:z[3]};Q!==-1?(E[Q].references++,E[Q].updater(G)):E.push({identifier:Y,updater:ut(G,b),references:1}),P.push(Y)}return P}function _(s){var b=document.createElement("style"),l=s.attributes||{};if(l.nonce===void 0){var P=n.nc;P&&(l.nonce=P)}if(Object.keys(l).forEach(function(z){b.setAttribute(z,l[z])}),typeof s.insert=="function")s.insert(b);else{var I=x(s.insert||"head");if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(b)}return b}var M,mt=(M=[],function(s,b){return M[s]=b,M.filter(Boolean).join(`
`)});function ft(s,b,l,P){var I=l?"":P.media?"@media ".concat(P.media," {").concat(P.css,"}"):P.css;if(s.styleSheet)s.styleSheet.cssText=mt(b,I);else{var z=document.createTextNode(I),R=s.childNodes;R[b]&&s.removeChild(R[b]),R.length?s.insertBefore(z,R[b]):s.appendChild(z)}}function it(s,b,l){var P=l.css,I=l.media,z=l.sourceMap;if(I?s.setAttribute("media",I):s.removeAttribute("media"),z&&typeof btoa<"u"&&(P+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),s.styleSheet)s.styleSheet.cssText=P;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(P))}}var dt=null,et=0;function ut(s,b){var l,P,I;if(b.singleton){var z=et++;l=dt||(dt=_(b)),P=ft.bind(null,l,z,!1),I=ft.bind(null,l,z,!0)}else l=_(b),P=it.bind(null,l,b),I=function(){(function(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)})(l)};return P(s),function(R){if(R){if(R.css===s.css&&R.media===s.media&&R.sourceMap===s.sourceMap)return;P(s=R)}else I()}}a.exports=function(s,b){(b=b||{}).singleton||typeof b.singleton=="boolean"||(b.singleton=S());var l=O(s=s||[],b);return function(P){if(P=P||[],Object.prototype.toString.call(P)==="[object Array]"){for(var I=0;I<l.length;I++){var z=H(l[I]);E[z].references--}for(var R=O(P,b),ct=0;ct<l.length;ct++){var Y=H(l[ct]);E[Y].references===0&&(E[Y].updater(),E.splice(Y,1))}l=R}}}},704:(a,C,n)=>{a.exports=n(79)("./src/core.js")},492:(a,C,n)=>{a.exports=n(79)("./src/engine.js")},273:(a,C,n)=>{a.exports=n(79)("./src/ui.js")},209:(a,C,n)=>{a.exports=n(79)("./src/utils.js")},79:a=>{"use strict";a.exports=CKEditor5.dll}},vt={};function g(a){var C=vt[a];if(C!==void 0)return C.exports;var n=vt[a]={id:a,exports:{}};return w[a](n,n.exports,g),n.exports}g.n=a=>{var C=a&&a.__esModule?()=>a.default:()=>a;return g.d(C,{a:C}),C},g.d=(a,C)=>{for(var n in C)g.o(C,n)&&!g.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:C[n]})},g.o=(a,C)=>Object.prototype.hasOwnProperty.call(a,C),g.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},g.nc=void 0;var Z={};(()=>{"use strict";g.r(Z),g.d(Z,{ClassicEditor:()=>Gt});var a=g(273),C=g(492),n=g(209);class f extends a.EditorUI{constructor(d,T){super(d),this.view=T,this._toolbarConfig=(0,a.normalizeToolbarConfig)(d.config.get("toolbar")),this._elementReplacer=new n.ElementReplacer}get element(){return this.view.element}init(d){const T=this.editor,i=this.view,u=T.editing.view,j=i.editable,v=u.document.getRoot();j.name=v.rootName,i.render();const N=j.element;this.setEditableElement(j.name,N),i.editable.bind("isFocused").to(this.focusTracker),u.attachDomRoot(N),d&&this._elementReplacer.replace(d,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const d=this.view,T=this.editor.editing.view;this._elementReplacer.restore(),T.detachDomRoot(d.editable.name),d.destroy()}_initToolbar(){const d=this.view;d.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),d.stickyPanel.limiterElement=d.element,d.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:T})=>T||0),d.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(d.toolbar)}_initPlaceholder(){const d=this.editor,T=d.editing.view,i=T.document.getRoot(),u=d.sourceElement,j=d.config.get("placeholder")||u&&u.tagName.toLowerCase()==="textarea"&&u.getAttribute("placeholder");j&&(0,C.enablePlaceholder)({view:T,element:i,text:j,isDirectHost:!1,keepOnFocus:!0})}}var S=g(62),x=g.n(S),E=g(655),H={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};x()(E.Z,H),E.Z.locals;class O extends a.BoxedEditorUIView{constructor(d,T,i={}){super(d),this.stickyPanel=new a.StickyPanelView(d),this.toolbar=new a.ToolbarView(d,{shouldGroupWhenFull:i.shouldToolbarGroupWhenFull}),this.editable=new a.InlineEditableUIView(d,T)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var _=g(704);const M=function(y){return y!=null&&typeof y=="object"},mt=typeof m.g=="object"&&m.g&&m.g.Object===Object&&m.g;var ft=typeof self=="object"&&self&&self.Object===Object&&self;const it=(mt||ft||Function("return this")()).Symbol;var dt=Object.prototype,et=dt.hasOwnProperty,ut=dt.toString,s=it?it.toStringTag:void 0;const b=function(y){var d=et.call(y,s),T=y[s];try{y[s]=void 0;var i=!0}catch{}var u=ut.call(y);return i&&(d?y[s]=T:delete y[s]),u};var l=Object.prototype.toString;const P=function(y){return l.call(y)};var I="[object Null]",z="[object Undefined]",R=it?it.toStringTag:void 0;const ct=function(y){return y==null?y===void 0?z:I:R&&R in Object(y)?b(y):P(y)},Y=function(y,d){return function(T){return y(d(T))}}(Object.getPrototypeOf,Object);var Q="[object Object]",G=Function.prototype,Nt=Object.prototype,It=G.toString,At=Nt.hasOwnProperty,Bt=It.call(Object);const $t=function(y){if(!M(y)||ct(y)!=Q)return!1;var d=Y(y);if(d===null)return!0;var T=At.call(d,"constructor")&&d.constructor;return typeof T=="function"&&T instanceof T&&It.call(T)==Bt},Ht=function(y){return M(y)&&y.nodeType===1&&!$t(y)};class Gt extends(0,_.DataApiMixin)((0,_.ElementApiMixin)(_.Editor)){constructor(d,T={}){if(!bt(d)&&T.initialData!==void 0)throw new n.CKEditorError("editor-create-initial-data",null);super(T),this.config.get("initialData")===void 0&&this.config.set("initialData",function(j){return bt(j)?(0,n.getDataFromElement)(j):j}(d)),bt(d)&&(this.sourceElement=d),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),u=new O(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:i});this.ui=new f(this,u),(0,_.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(d,T={}){return new Promise(i=>{const u=new this(d,T);i(u.initPlugins().then(()=>u.ui.init(bt(d)?d:null)).then(()=>u.data.init(u.config.get("initialData"))).then(()=>u.fire("ready")).then(()=>u))})}}function bt(y){return Ht(y)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=Z})()},72757:(q,tt,m)=>{q=m.nmd(q);var w=m(25108);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(vt,g){q.exports=g(m(67294))})(self,vt=>(()=>{var g={703:(n,f,S)=>{"use strict";var x=S(414);function E(){}function H(){}H.resetWarningCache=E,n.exports=function(){function O(mt,ft,it,dt,et,ut){if(ut!==x){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function _(){return O}O.isRequired=O;var M={array:O,bigint:O,bool:O,func:O,number:O,object:O,string:O,symbol:O,any:O,arrayOf:_,element:O,elementType:O,instanceOf:_,node:O,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:H,resetWarningCache:E};return M.PropTypes=M,M}},697:(n,f,S)=>{n.exports=S(703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:n=>{"use strict";n.exports=vt}},Z={};function a(n){var f=Z[n];if(f!==void 0)return f.exports;var S=Z[n]={exports:{}};return g[n](S,S.exports,a),S.exports}a.n=n=>{var f=n&&n.__esModule?()=>n.default:()=>n;return a.d(f,{a:f}),f},a.d=(n,f)=>{for(var S in f)a.o(f,S)&&!a.o(n,S)&&Object.defineProperty(n,S,{enumerable:!0,get:f[S]})},a.o=(n,f)=>Object.prototype.hasOwnProperty.call(n,f),a.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var C={};return(()=>{"use strict";a.r(C),a.d(C,{CKEditor:()=>Ot,CKEditorContext:()=>be});var n=a(787),f=a.n(n),S=a(697),x=a.n(S);const E=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},H=typeof m.g=="object"&&m.g&&m.g.Object===Object&&m.g;var O=typeof self=="object"&&self&&self.Object===Object&&self;const _=H||O||Function("return this")(),M=function(){return _.Date.now()};var mt=/\s/;const ft=function(t){for(var e=t.length;e--&&mt.test(t.charAt(e)););return e};var it=/^\s+/;const dt=function(t){return t&&t.slice(0,ft(t)+1).replace(it,"")},et=_.Symbol;var ut=Object.prototype,s=ut.hasOwnProperty,b=ut.toString,l=et?et.toStringTag:void 0;const P=function(t){var e=s.call(t,l),o=t[l];try{t[l]=void 0;var r=!0}catch{}var c=b.call(t);return r&&(e?t[l]=o:delete t[l]),c};var I=Object.prototype.toString;const z=function(t){return I.call(t)};var R="[object Null]",ct="[object Undefined]",Y=et?et.toStringTag:void 0;const Q=function(t){return t==null?t===void 0?ct:R:Y&&Y in Object(t)?P(t):z(t)},G=function(t){return t!=null&&typeof t=="object"};var Nt="[object Symbol]";const It=function(t){return typeof t=="symbol"||G(t)&&Q(t)==Nt};var At=NaN,Bt=/^[-+]0x[0-9a-f]+$/i,$t=/^0b[01]+$/i,Ht=/^0o[0-7]+$/i,Gt=parseInt;const bt=function(t){if(typeof t=="number")return t;if(It(t))return At;if(E(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=E(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=dt(t);var o=$t.test(t);return o||Ht.test(t)?Gt(t.slice(2),o?2:8):Bt.test(t)?At:+t};var y="Expected a function",d=Math.max,T=Math.min;const i=function(t,e,o){var r,c,h,p,k,U,D=0,Xt=!1,Pt=!1,ht=!0;if(typeof t!="function")throw new TypeError(y);function Ut(ot){var kt=r,Tt=c;return r=c=void 0,D=ot,p=t.apply(Tt,kt)}function qt(ot){var kt=ot-U;return U===void 0||kt>=e||kt<0||Pt&&ot-D>=h}function St(){var ot=M();if(qt(ot))return lt(ot);k=setTimeout(St,function(kt){var Tt=e-(kt-U);return Pt?T(Tt,h-(kt-D)):Tt}(ot))}function lt(ot){return k=void 0,ht&&r?Ut(ot):(r=c=void 0,p)}function pt(){var ot=M(),kt=qt(ot);if(r=arguments,c=this,U=ot,kt){if(k===void 0)return function(Tt){return D=Tt,k=setTimeout(St,e),Xt?Ut(Tt):p}(U);if(Pt)return clearTimeout(k),k=setTimeout(St,e),Ut(U)}return k===void 0&&(k=setTimeout(St,e)),p}return e=bt(e)||0,E(o)&&(Xt=!!o.leading,h=(Pt="maxWait"in o)?d(bt(o.maxWait)||0,e):h,ht="trailing"in o?!!o.trailing:ht),pt.cancel=function(){k!==void 0&&clearTimeout(k),D=0,r=U=c=k=void 0},pt.flush=function(){return k===void 0?p:lt(M())},pt};var u="Expected a function";const j=function(t,e,o){var r=!0,c=!0;if(typeof t!="function")throw new TypeError(u);return E(o)&&(r="leading"in o?!!o.leading:r,c="trailing"in o?!!o.trailing:c),i(t,e,{leading:r,maxWait:e,trailing:c})},v=function(){this.__data__=[],this.size=0},N=function(t,e){return t===e||t!=t&&e!=e},A=function(t,e){for(var o=t.length;o--;)if(N(t[o][0],e))return o;return-1};var rt=Array.prototype.splice;const at=function(t){var e=this.__data__,o=A(e,t);return!(o<0)&&(o==e.length-1?e.pop():rt.call(e,o,1),--this.size,!0)},F=function(t){var e=this.__data__,o=A(e,t);return o<0?void 0:e[o][1]},st=function(t){return A(this.__data__,t)>-1},J=function(t,e){var o=this.__data__,r=A(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function B(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}B.prototype.clear=v,B.prototype.delete=at,B.prototype.get=F,B.prototype.has=st,B.prototype.set=J;const K=B,yt=function(){this.__data__=new K,this.size=0},wt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},xt=function(t){return this.__data__.get(t)},nt=function(t){return this.__data__.has(t)};var _t="[object AsyncFunction]",Rt="[object Function]",$="[object GeneratorFunction]",X="[object Proxy]";const gt=function(t){if(!E(t))return!1;var e=Q(t);return e==Rt||e==$||e==_t||e==X},Wt=_["__core-js_shared__"];var zt=function(){var t=/[^.]+$/.exec(Wt&&Wt.keys&&Wt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const lo=function(t){return!!zt&&zt in t};var uo=Function.prototype.toString;const jt=function(t){if(t!=null){try{return uo.call(t)}catch{}try{return t+""}catch{}}return""};var ho=/^\[object .+?Constructor\]$/,po=Function.prototype,fo=Object.prototype,bo=po.toString,go=fo.hasOwnProperty,ko=RegExp("^"+bo.call(go).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mo=function(t){return!(!E(t)||lo(t))&&(gt(t)?ko:ho).test(jt(t))},vo=function(t,e){return t?.[e]},Ct=function(t,e){var o=vo(t,e);return mo(o)?o:void 0},Kt=Ct(_,"Map"),Vt=Ct(Object,"create"),yo=function(){this.__data__=Vt?Vt(null):{},this.size=0},wo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var xo="__lodash_hash_undefined__",_o=Object.prototype.hasOwnProperty;const jo=function(t){var e=this.__data__;if(Vt){var o=e[t];return o===xo?void 0:o}return _o.call(e,t)?e[t]:void 0};var Co=Object.prototype.hasOwnProperty;const Eo=function(t){var e=this.__data__;return Vt?e[t]!==void 0:Co.call(e,t)};var Oo="__lodash_hash_undefined__";const Po=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Vt&&e===void 0?Oo:e,this};function Lt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=yo,Lt.prototype.delete=wo,Lt.prototype.get=jo,Lt.prototype.has=Eo,Lt.prototype.set=Po;const ke=Lt,So=function(){this.size=0,this.__data__={hash:new ke,map:new(Kt||K),string:new ke}},To=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Yt=function(t,e){var o=t.__data__;return To(e)?o[typeof e=="string"?"string":"hash"]:o.map},Io=function(t){var e=Yt(this,t).delete(t);return this.size-=e?1:0,e},Ao=function(t){return Yt(this,t).get(t)},Ro=function(t){return Yt(this,t).has(t)},Wo=function(t,e){var o=Yt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=So,Mt.prototype.delete=Io,Mt.prototype.get=Ao,Mt.prototype.has=Ro,Mt.prototype.set=Wo;const zo=Mt;var Lo=200;const Mo=function(t,e){var o=this.__data__;if(o instanceof K){var r=o.__data__;if(!Kt||r.length<Lo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new zo(r)}return o.set(t,e),this.size=o.size,this};function Ft(t){var e=this.__data__=new K(t);this.size=e.size}Ft.prototype.clear=yt,Ft.prototype.delete=wt,Ft.prototype.get=xt,Ft.prototype.has=nt,Ft.prototype.set=Mo;const Fo=Ft,Do=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=Ct(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ve=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Uo=Object.prototype.hasOwnProperty;const ye=function(t,e,o){var r=t[e];Uo.call(t,e)&&N(r,o)&&(o!==void 0||e in t)||ve(t,e,o)},Jt=function(t,e,o,r){var c=!o;o||(o={});for(var h=-1,p=e.length;++h<p;){var k=e[h],U=r?r(o[k],t[k],k,o,t):void 0;U===void 0&&(U=t[k]),c?ve(o,k,U):ye(o,k,U)}return o},No=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var Bo="[object Arguments]";const we=function(t){return G(t)&&Q(t)==Bo};var xe=Object.prototype,$o=xe.hasOwnProperty,Ho=xe.propertyIsEnumerable;const Go=we(function(){return arguments}())?we:function(t){return G(t)&&$o.call(t,"callee")&&!Ho.call(t,"callee")},te=Array.isArray,Ko=function(){return!1};var _e=tt&&!tt.nodeType&&tt,je=_e&&!0&&q&&!q.nodeType&&q,Ce=je&&je.exports===_e?_.Buffer:void 0;const Ee=(Ce?Ce.isBuffer:void 0)||Ko;var Vo=9007199254740991,Zo=/^(?:0|[1-9]\d*)$/;const Qo=function(t,e){var o=typeof t;return!!(e=e??Vo)&&(o=="number"||o!="symbol"&&Zo.test(t))&&t>-1&&t%1==0&&t<e};var qo=9007199254740991;const Oe=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=qo};var L={};L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L["[object Arguments]"]=L["[object Array]"]=L["[object ArrayBuffer]"]=L["[object Boolean]"]=L["[object DataView]"]=L["[object Date]"]=L["[object Error]"]=L["[object Function]"]=L["[object Map]"]=L["[object Number]"]=L["[object Object]"]=L["[object RegExp]"]=L["[object Set]"]=L["[object String]"]=L["[object WeakMap]"]=!1;const Yo=function(t){return G(t)&&Oe(t.length)&&!!L[Q(t)]},ee=function(t){return function(e){return t(e)}};var Pe=tt&&!tt.nodeType&&tt,Zt=Pe&&!0&&q&&!q.nodeType&&q,oe=Zt&&Zt.exports===Pe&&H.process;const Dt=function(){try{var t=Zt&&Zt.require&&Zt.require("util").types;return t||oe&&oe.binding&&oe.binding("util")}catch{}}();var Se=Dt&&Dt.isTypedArray;const Jo=Se?ee(Se):Yo;var Xo=Object.prototype.hasOwnProperty;const Te=function(t,e){var o=te(t),r=!o&&Go(t),c=!o&&!r&&Ee(t),h=!o&&!r&&!c&&Jo(t),p=o||r||c||h,k=p?No(t.length,String):[],U=k.length;for(var D in t)!e&&!Xo.call(t,D)||p&&(D=="length"||c&&(D=="offset"||D=="parent")||h&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||Qo(D,U))||k.push(D);return k};var tr=Object.prototype;const re=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||tr)},Ie=function(t,e){return function(o){return t(e(o))}},er=Ie(Object.keys,Object);var or=Object.prototype.hasOwnProperty;const rr=function(t){if(!re(t))return er(t);var e=[];for(var o in Object(t))or.call(t,o)&&o!="constructor"&&e.push(o);return e},Ae=function(t){return t!=null&&Oe(t.length)&&!gt(t)},ne=function(t){return Ae(t)?Te(t):rr(t)},nr=function(t,e){return t&&Jt(e,ne(e),t)},ir=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var cr=Object.prototype.hasOwnProperty;const ar=function(t){if(!E(t))return ir(t);var e=re(t),o=[];for(var r in t)(r!="constructor"||!e&&cr.call(t,r))&&o.push(r);return o},ie=function(t){return Ae(t)?Te(t,!0):ar(t)},sr=function(t,e){return t&&Jt(e,ie(e),t)};var Re=tt&&!tt.nodeType&&tt,We=Re&&!0&&q&&!q.nodeType&&q,ze=We&&We.exports===Re?_.Buffer:void 0,Le=ze?ze.allocUnsafe:void 0;const lr=function(t,e){if(e)return t.slice();var o=t.length,r=Le?Le(o):new t.constructor(o);return t.copy(r),r},dr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},ur=function(t,e){for(var o=-1,r=t==null?0:t.length,c=0,h=[];++o<r;){var p=t[o];e(p,o,t)&&(h[c++]=p)}return h},Me=function(){return[]};var hr=Object.prototype.propertyIsEnumerable,Fe=Object.getOwnPropertySymbols;const ce=Fe?function(t){return t==null?[]:(t=Object(t),ur(Fe(t),function(e){return hr.call(t,e)}))}:Me,pr=function(t,e){return Jt(t,ce(t),e)},De=function(t,e){for(var o=-1,r=e.length,c=t.length;++o<r;)t[c+o]=e[o];return t},ae=Ie(Object.getPrototypeOf,Object),Ue=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)De(e,ce(t)),t=ae(t);return e}:Me,fr=function(t,e){return Jt(t,Ue(t),e)},Ne=function(t,e,o){var r=e(t);return te(t)?r:De(r,o(t))},br=function(t){return Ne(t,ne,ce)},gr=function(t){return Ne(t,ie,Ue)},se=Ct(_,"DataView"),le=Ct(_,"Promise"),de=Ct(_,"Set"),ue=Ct(_,"WeakMap");var Be="[object Map]",$e="[object Promise]",He="[object Set]",Ge="[object WeakMap]",Ke="[object DataView]",kr=jt(se),mr=jt(Kt),vr=jt(le),yr=jt(de),wr=jt(ue),Et=Q;(se&&Et(new se(new ArrayBuffer(1)))!=Ke||Kt&&Et(new Kt)!=Be||le&&Et(le.resolve())!=$e||de&&Et(new de)!=He||ue&&Et(new ue)!=Ge)&&(Et=function(t){var e=Q(t),o=e=="[object Object]"?t.constructor:void 0,r=o?jt(o):"";if(r)switch(r){case kr:return Ke;case mr:return Be;case vr:return $e;case yr:return He;case wr:return Ge}return e});const he=Et;var xr=Object.prototype.hasOwnProperty;const _r=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&xr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ve=_.Uint8Array,pe=function(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e},jr=function(t,e){var o=e?pe(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var Cr=/\w*$/;const Er=function(t){var e=new t.constructor(t.source,Cr.exec(t));return e.lastIndex=t.lastIndex,e};var Ze=et?et.prototype:void 0,Qe=Ze?Ze.valueOf:void 0;const Or=function(t){return Qe?Object(Qe.call(t)):{}},Pr=function(t,e){var o=e?pe(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Sr="[object Boolean]",Tr="[object Date]",Ir="[object Map]",Ar="[object Number]",Rr="[object RegExp]",Wr="[object Set]",zr="[object String]",Lr="[object Symbol]",Mr="[object ArrayBuffer]",Fr="[object DataView]",Dr="[object Float32Array]",Ur="[object Float64Array]",Nr="[object Int8Array]",Br="[object Int16Array]",$r="[object Int32Array]",Hr="[object Uint8Array]",Gr="[object Uint8ClampedArray]",Kr="[object Uint16Array]",Vr="[object Uint32Array]";const Zr=function(t,e,o){var r=t.constructor;switch(e){case Mr:return pe(t);case Sr:case Tr:return new r(+t);case Fr:return jr(t,o);case Dr:case Ur:case Nr:case Br:case $r:case Hr:case Gr:case Kr:case Vr:return Pr(t,o);case Ir:return new r;case Ar:case zr:return new r(t);case Rr:return Er(t);case Wr:return new r;case Lr:return Or(t)}};var qe=Object.create;const Qr=function(){function t(){}return function(e){if(!E(e))return{};if(qe)return qe(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),qr=function(t){return typeof t.constructor!="function"||re(t)?{}:Qr(ae(t))};var Yr="[object Map]";const Jr=function(t){return G(t)&&he(t)==Yr};var Ye=Dt&&Dt.isMap;const Xr=Ye?ee(Ye):Jr;var tn="[object Set]";const en=function(t){return G(t)&&he(t)==tn};var Je=Dt&&Dt.isSet;const on=Je?ee(Je):en;var rn=1,nn=2,cn=4,Xe="[object Arguments]",to="[object Function]",an="[object GeneratorFunction]",eo="[object Object]",W={};W[Xe]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W[eo]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W[to]=W["[object WeakMap]"]=!1;const sn=function t(e,o,r,c,h,p){var k,U=o&rn,D=o&nn,Xt=o&cn;if(r&&(k=h?r(e,c,h,p):r(e)),k!==void 0)return k;if(!E(e))return e;var Pt=te(e);if(Pt){if(k=_r(e),!U)return dr(e,k)}else{var ht=he(e),Ut=ht==to||ht==an;if(Ee(e))return lr(e,U);if(ht==eo||ht==Xe||Ut&&!h){if(k=D||Ut?{}:qr(e),!U)return D?fr(e,sr(k,e)):pr(e,nr(k,e))}else{if(!W[ht])return h?e:{};k=Zr(e,ht,U)}}p||(p=new Fo);var qt=p.get(e);if(qt)return qt;p.set(e,k),on(e)?e.forEach(function(lt){k.add(t(lt,o,r,lt,e,p))}):Xr(e)&&e.forEach(function(lt,pt){k.set(pt,t(lt,o,r,pt,e,p))});var St=Pt?void 0:(Xt?D?gr:br:D?ie:ne)(e);return Do(St||e,function(lt,pt){St&&(lt=e[pt=lt]),ye(k,pt,t(lt,o,r,pt,e,p))}),k};var ln=1,dn=4;const un=function(t,e){return sn(t,ln|dn,e=typeof e=="function"?e:void 0)};var hn="[object Object]",pn=Function.prototype,fn=Object.prototype,oo=pn.toString,bn=fn.hasOwnProperty,gn=oo.call(Object);const kn=function(t){if(!G(t)||Q(t)!=hn)return!1;var e=ae(t);if(e===null)return!0;var o=bn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&oo.call(o)==gn},mn=function(t){return G(t)&&t.nodeType===1&&!kn(t)};function fe(t,e=new Set){const o=[t],r=new Set;let c=0;for(;o.length>c;){const h=o[c++];if(!(r.has(h)||vn(h)||e.has(h)))if(r.add(h),h[Symbol.iterator])try{for(const p of h)o.push(p)}catch{}else for(const p in h)p!=="defaultValue"&&o.push(h[p])}return r}function vn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function ro(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const c=fe(t,o),h=fe(e,o);for(const p of c)if(h.has(p))return!0;return!1}class no{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const c of r)c.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class io extends no{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=j(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,c)=>e.create(r,c),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{w.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(c=>{this._editor=c,c.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=c.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){w.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return ro(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return un(e,(o,r)=>mn(o)||r==="context"?o:void 0)}}const V=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Qt=Symbol("MainQueueId");class co extends no{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new yn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Qt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=ao(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let c;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return c=new io(this._watchdogConfig),c.setCreator(r.creator),c._setExcludedProperties(this._contextProps),r.destructor&&c.setDestructor(r.destructor),this._watchdogs.set(r.id,c),c.on("error",(h,{error:p,causesRestart:k})=>{this._fire("itemError",{itemId:r.id,error:p}),k&&this._actionQueues.enqueue(r.id,()=>new Promise(U=>{c.on("restart",function D(){c.off("restart",D),this._fire("itemRestart",{itemId:r.id}),U()}.bind(this))}))}),c.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=ao(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const c=this._getWatchdog(r);return this._watchdogs.delete(r),c.destroy()})))}destroy(){return this._actionQueues.enqueue(Qt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Qt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{w.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=fe(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return ro(this._context,e.context)}}class yn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Qt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const c=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Qt),this._queues.get(e)])).then(o),h=c.catch(()=>{});return this._queues.set(e,h),c.finally(()=>{this._activeActions--,this._queues.get(e)===h&&this._activeActions===0&&this._onEmptyCallbacks.forEach(p=>p())})}}function ao(t){return Array.isArray(t)?t:[t]}const so=f().createContext("contextWatchdog");class be extends f().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return f().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new co(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}be.defaultProps={isLayoutReady:!0,onError:(t,e)=>w.error(t,e)},be.propTypes={id:x().string,isLayoutReady:x().bool,context:x().func,watchdogConfig:x().object,config:x().object,onReady:x().func,onError:x().func};const ge="Lock from React integration (@ckeditor/ckeditor5-react)";class Ot extends f().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=f().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&w.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else w.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(ge):this.editor.disableReadOnlyMode(ge)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return f().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof co?this.watchdog=new wn(this.context):this.watchdog=new Ot._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(ge);const c=r.model.document,h=r.editing.view.document;return c.on("change:data",p=>{this.props.onChange&&this.props.onChange(p,r)}),h.on("focus",p=>{this.props.onFocus&&this.props.onFocus(p,r)}),h.on("blur",p=>{this.props.onBlur&&this.props.onBlur(p,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&w.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class wn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,c=4294967296*Math.random()>>>0,h=4294967296*Math.random()>>>0;return"e"+V[o>>0&255]+V[o>>8&255]+V[o>>16&255]+V[o>>24&255]+V[r>>0&255]+V[r>>8&255]+V[r>>16&255]+V[r>>24&255]+V[c>>0&255]+V[c>>8&255]+V[c>>16&255]+V[c>>24&255]+V[h>>0&255]+V[h>>8&255]+V[h>>16&255]+V[h>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:c,causesRestart:h,error:p})=>{c===this._id&&o(null,{error:p,causesRestart:h})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Ot.contextType=so,Ot.propTypes={editor:x().func.isRequired,data:x().string,config:x().object,watchdogConfig:x().object,onChange:x().func,onReady:x().func,onFocus:x().func,onBlur:x().func,onError:x().func,disabled:x().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Ot.defaultProps={config:{},onError:(t,e)=>w.error(t,e)},Ot._EditorWatchdog=io})(),C})())},92129:(q,tt,m)=>{"use strict";m.r(tt),m.d(tt,{default:()=>T});var w=m(67294),vt=m(45697),g=m.n(vt),Z=m(71893),a=m(72757),C=m(28702),n=m(68547),f=m(50361),S=m.n(f),x=m(57040),E=m(66923),H=m.n(E);const O=async(i,u)=>{if(!u)return;const{plugins:j=[]}=i,v=[...j.map(F=>F.pluginName)],N=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],A=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],rt=["FontBackgroundColor","FontColor","FontFamily","FontSize"],at=["List","DocumentList"];await Promise.all(N.filter(({name:F})=>v.includes(F)).map(async({module:F})=>await m(74060)(`./${F}/build/translations/${u}.js`).catch(()=>null))),v.some(F=>A.includes(F))&&await m(98996)(`./${u}.js`).catch(()=>null),v.some(F=>at.includes(F))&&await m(44042)(`./${u}.js`).catch(()=>null),v.some(F=>rt.includes(F))&&await m(42940)(`./${u}.js`).catch(()=>null)},_=async i=>{const u=new URLSearchParams(window.location.search),v=Object.fromEntries(u.entries())["plugins[i18n][locale]"],N=n.auth.getUserInfo().preferedLanguage,{ui:A=N||"en",content:rt,textPartLanguage:at,ignorei18n:F}=i.language||{};if(v){const st=v.split("-")[0];i.language={ui:typeof i.language=="string"?i.language:A,content:F?rt:st,textPartLanguage:at},await O(i,i.language.ui),await O(i,i.language.content)}else typeof i.language=="object"?(await O(i,i.language.ui),await O(i,i.language.content)):typeof i.language=="string"?await O(i,i.language):(i.language=N,await O(i,N))},M=i=>{const{configs:u,configsOverwrite:j}=globalThis.CKEditorConfig||{};let v;return j?v=u:(v=x.Z,u&&Object.keys(u).map(A=>{x.Z.hasOwnProperty(A)?(v[A].fields={...x.Z[A].field,...u[A].field},v[A].styles=u[A].styles||x.Z[A].styles,v[A].editorConfig={...x.Z[A].editorConfig,...u[A].editorConfig}):v[A]=u[A]})),S()(v[i])},mt=(i,{responsiveDimensions:u},j)=>{const v=i.editorConfig?.plugins?[...i.editorConfig.plugins.map(N=>N.pluginName)]:[];v.includes("StrapiMediaLib")&&(i.editorConfig.strapiMediaLib={toggle:j}),v.includes("StrapiUploadAdapter")&&(i.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+n.auth.getToken()},backendUrl:strapi.backendURL,responsive:u}),v.includes("WordCount")&&(i.editorConfig.WordCountPlugin=!0)},ft=i=>(0,n.request)(`/${H()}/config/${i}`,{method:"GET"}),it=async(i,u)=>{const j=M(i),v=await ft("upload");return mt(j,v,u),await _(j.editorConfig),{currentConfig:j,uploadPluginConfig:v}},dt=Z.css`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,et=Z.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,ut=Z.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,s=Z.css`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,l={common:dt,light:et,dark:ut,additional:s},P=()=>{const i=localStorage.getItem("STRAPI_THEME")||"light",{theme:u,themeOverwrite:j}=globalThis.CKEditorConfig||{},v=j?u:{...l,...u};return Z.createGlobalStyle`
       ${v.common}
       ${v[i]}
       ${v.additional}
   `},I=({isOpen:i,onChange:u,onToggle:j,editor:v,uploadConfig:{responsiveDimensions:N}})=>{const{components:A}=(0,n.useLibrary)(),rt=A["media-library"],at=st=>{let J="";st.map(({name:yt,url:wt,alt:xt,formats:nt,mime:_t})=>{if(_t.includes("image"))if(nt&&N){let Rt="",$=Object.keys(nt).sort((X,gt)=>nt[X].width-nt[gt].width);$.map(X=>Rt+=(0,n.prefixFileUrlWithBackendUrl)(nt[X].url)+` ${nt[X].width}w,`),J+=`<img src="${wt}" alt="${xt}" width="${nt[$[$.length-1]].width}px" srcset="${Rt}" />`}else J+=`<img src="${wt}" alt="${xt}" />`;else _t.includes("application/pdf")&&(J=`<a href="${(0,n.prefixFileUrlWithBackendUrl)(wt)}" download="${yt}">${yt||"Download PDF"}</a>`)});const B=v.data.processor.toView(J),K=v.data.toModel(B);v.model.insertContent(K),j()},F=st=>{const J=st.map(B=>({name:B.name,alt:B.alternativeText||B.name,url:(0,n.prefixFileUrlWithBackendUrl)(B.url),mime:B.mime,formats:B.formats}));at(J)};return i?w.createElement(rt,{onClose:j,onSelectAssets:F}):null};I.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},I.propTypes={isOpen:g().bool,onChange:g().func,onToggle:g().func};const z=I;var R=m(77868),ct=m(3108);const Y=P(),Q=(0,Z.default)("div")`${({editorStyles:i})=>i}`,G=({onChange:i,name:u,value:j,disabled:v,preset:N,maxLength:A})=>{const[rt,at]=(0,w.useState)(!1),[F,st]=(0,w.useState)(!1),[J,B]=(0,w.useState)(null),[K,yt]=(0,w.useState)(null),[wt,xt]=(0,w.useState)(!1),nt=(0,w.useRef)(null),_t=()=>st($=>!$),Rt=$=>$>A?xt(!0):xt(!1);return(0,w.useEffect)(()=>{(async()=>{const{currentConfig:$,uploadPluginConfig:X}=await it(N,_t);yt($),B(X)})()},[]),w.createElement(w.Fragment,null,K&&w.createElement(Y,null),w.createElement(Q,{editorStyles:K?.styles},!K&&w.createElement(It,{hasRadius:!0,background:"neutral100"},w.createElement(C.Loader,null,"Loading...")),K&&w.createElement(a.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:K?.editorConfig,disabled:v,data:j,onReady:$=>{if(K.editorConfig.WordCountPlugin){const X=$.plugins.get("WordCount");X.on("update",(Wt,zt)=>Rt(zt.characters)),nt.current?.appendChild(X.wordCountContainer)}$.plugins.has("ImageUploadEditing")&&$.plugins.get("ImageUploadEditing").on("uploadComplete",(X,{data:gt,imageElement:Wt})=>$.model.change(zt=>zt.setAttribute("alt",gt.alt,Wt))),at($)},onChange:($,X)=>{const gt=X.getData();i({target:{name:u,value:gt}})}}),K&&K.editorConfig.WordCountPlugin&&w.createElement(Nt,{color:wt?"danger500":"neutral400",ref:nt},!rt&&w.createElement(C.Loader,{small:!0},"Loading...")),J&&w.createElement(z,{isOpen:F,onToggle:_t,editor:rt,uploadConfig:J})))};G.defaultProps={value:"",disabled:!1},G.propTypes={onChange:g().func.isRequired,name:g().string.isRequired,value:g().string,disabled:g().bool};const Nt=(0,Z.default)(C.Box)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,It=(0,Z.default)(C.Box)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,At=G;var Bt=m(97132),$t=m(54574),Ht=m(64777),Gt=m(63428),bt=m(96404),y=m(7681);const d=({name:i,attribute:u,onChange:j,value:v,intlLabel:N,labelAction:A,disabled:rt,error:at,description:F,required:st})=>{const{formatMessage:J}=(0,Bt.useIntl)(),{preset:B,maxLengthCharacters:K,...yt}=u.options;return w.createElement($t.g,{name:i,id:i,error:at,hint:F&&J(F)},w.createElement(y.K,{spacing:1},w.createElement(Ht.Q,{action:A,required:st},J(N)),w.createElement(At,{disabled:rt,name:i,onChange:j,value:v,preset:B,maxLength:K}),w.createElement(Gt.J,null),w.createElement(bt.c,null)))};d.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},d.propTypes={intlLabel:g().object.isRequired,onChange:g().func.isRequired,attribute:g().object.isRequired,name:g().string.isRequired,description:g().object,disabled:g().bool,error:g().string,labelAction:g().object,required:g().bool,value:g().string};const T=d}}]);
