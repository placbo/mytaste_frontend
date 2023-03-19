function wy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hs={},_y={get exports(){return hs},set exports(e){hs=e}},na={},I={},Ey={get exports(){return I},set exports(e){I=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),Iy=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),Cy=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),xy=Symbol.for("react.suspense"),Oy=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),Dd=Symbol.iterator;function Ly(e){return e===null||typeof e!="object"?null:(e=Dd&&e[Dd]||e["@@iterator"],typeof e=="function"?e:null)}var dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,hp={};function ei(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||dp}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=ei.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=hp,this.updater=n||dp}var uc=lc.prototype=new pp;uc.constructor=lc;fp(uc,ei.prototype);uc.isPureReactComponent=!0;var bd=Array.isArray,mp=Object.prototype.hasOwnProperty,cc={current:null},gp={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)mp.call(t,r)&&!gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ao,type:e,key:o,ref:s,props:i,_owner:cc.current}}function Dy(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function by(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function Za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?by(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ao:case Iy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Za(s,0):r,bd(i)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(dc(i)&&(i=Dy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",bd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Za(o,a);s+=Wo(o,t,n,l,i)}else if(l=Ly(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Za(o,a++),s+=Wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Eo(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function My(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ko={transition:null},$y={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:cc};B.Children={map:Eo,forEach:function(e,t,n){Eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Eo(e,function(){t++}),t},toArray:function(e){return Eo(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=ei;B.Fragment=ky;B.Profiler=Cy;B.PureComponent=lc;B.StrictMode=Ty;B.Suspense=xy;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=cc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)mp.call(t,l)&&!gp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ao,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:Py,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ay,_context:e},e.Consumer=e};B.createElement=vp;B.createFactory=function(e){var t=vp.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Ry,render:e}};B.isValidElement=dc;B.lazy=function(e){return{$$typeof:Ny,_payload:{_status:-1,_result:e},_init:My}};B.memo=function(e,t){return{$$typeof:Oy,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ko.transition;Ko.transition={};try{e()}finally{Ko.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Ge.current.useCallback(e,t)};B.useContext=function(e){return Ge.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ge.current.useEffect(e,t)};B.useId=function(){return Ge.current.useId()};B.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ge.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};B.useRef=function(e){return Ge.current.useRef(e)};B.useState=function(e){return Ge.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ge.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(Ey);const q=Sy(I),Bl=wy({__proto__:null,default:q},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=I,Uy=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,Vy=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)jy.call(t,r)&&!By.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Uy,type:e,key:o,ref:s,props:i,_owner:Vy.current}}na.Fragment=zy;na.jsx=yp;na.jsxs=yp;(function(e){e.exports=na})(_y);const Ie=hs.jsx,Wn=hs.jsxs;var Hl={},Wl={},Hy={get exports(){return Wl},set exports(e){Wl=e}},lt={},Kl={},Wy={get exports(){return Kl},set exports(e){Kl=e}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,b){var M=C.length;C.push(b);e:for(;0<M;){var re=M-1>>>1,x=C[re];if(0<i(x,b))C[re]=b,C[M]=x,M=re;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var b=C[0],M=C.pop();if(M!==b){C[0]=M;e:for(var re=0,x=C.length,O=x>>>1;re<O;){var N=2*(re+1)-1,$=C[N],S=N+1,H=C[S];if(0>i($,M))S<x&&0>i(H,$)?(C[re]=H,C[S]=M,re=S):(C[re]=$,C[N]=M,re=N);else if(S<x&&0>i(H,M))C[re]=H,C[S]=M,re=S;else break e}}return b}function i(C,b){var M=C.sortIndex-b.sortIndex;return M!==0?M:C.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,m=3,g=!1,w=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=C)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function y(C){if(v=!1,p(C),!w)if(n(l)!==null)w=!0,pe(E);else{var b=n(u);b!==null&&ue(y,b.startTime-C)}}function E(C,b){w=!1,v&&(v=!1,d(T),T=-1),g=!0;var M=m;try{for(p(b),h=n(l);h!==null&&(!(h.expirationTime>b)||C&&!oe());){var re=h.callback;if(typeof re=="function"){h.callback=null,m=h.priorityLevel;var x=re(h.expirationTime<=b);b=e.unstable_now(),typeof x=="function"?h.callback=x:h===n(l)&&r(l),p(b)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var N=n(u);N!==null&&ue(y,N.startTime-b),O=!1}return O}finally{h=null,m=M,g=!1}}var A=!1,P=null,T=-1,U=5,D=-1;function oe(){return!(e.unstable_now()-D<U)}function Q(){if(P!==null){var C=e.unstable_now();D=C;var b=!0;try{b=P(!0,C)}finally{b?se():(A=!1,P=null)}}else A=!1}var se;if(typeof c=="function")se=function(){c(Q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=Q,se=function(){fe.postMessage(null)}}else se=function(){_(Q,0)};function pe(C){P=C,A||(A=!0,se())}function ue(C,b){T=_(function(){C(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,pe(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var M=m;m=b;try{return C()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,b){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=m;m=C;try{return b()}finally{m=M}},e.unstable_scheduleCallback=function(C,b,M){var re=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,C){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=M+x,C={id:f++,callback:b,priorityLevel:C,startTime:M,expirationTime:x,sortIndex:-1},M>re?(C.sortIndex=M,t(u,C),n(l)===null&&C===n(u)&&(v?(d(T),T=-1):v=!0,ue(y,M-re))):(C.sortIndex=x,t(l,C),w||g||(w=!0,pe(E))),C},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(C){var b=m;return function(){var M=m;m=b;try{return C.apply(this,arguments)}finally{m=M}}}})(wp);(function(e){e.exports=wp})(Wy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=I,at=Kl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _p=new Set,bi={};function fr(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(bi[e]=t,e=0;e<t.length;e++)_p.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Fd={};function Gy(e){return Gl.call(Fd,e)?!0:Gl.call($d,e)?!1:Ky.test(e)?Fd[e]=!0:($d[e]=!0,!1)}function qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qy(e,t,n,r){if(t===null||typeof t>"u"||qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,hc);$e[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,hc);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,hc);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qy(t,n,i,r)&&(n=null),r||i===null?Gy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),kp=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function li(e){return e===null||typeof e!="object"?null:(e=Ud&&e[Ud]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,el;function gi(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gi(e):""}function Yy(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Sr:return"Portal";case ql:return"Profiler";case mc:return"StrictMode";case Ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ip:return(e.displayName||"Context")+".Consumer";case Ep:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jy(e){var t=Tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=Jy(e))}function Cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ap(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function Zl(e,t){Ap(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vi=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(vi(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function Pp(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zy=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(e){Zy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Si[t]=Si[e]})});function Op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Si.hasOwnProperty(e)&&Si[e]?(""+t).trim():t+"px"}function Np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Op(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function iu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,Dr=null,br=null;function Hd(e){if(e=co(e)){if(typeof su!="function")throw Error(k(280));var t=e.stateNode;t&&(t=aa(t),su(e.stateNode,e.type,t))}}function Lp(e){Dr?br?br.push(e):br=[e]:Dr=e}function Dp(){if(Dr){var e=Dr,t=br;if(br=Dr=null,Hd(e),t)for(e=0;e<t.length;e++)Hd(t[e])}}function bp(e,t){return e(t)}function Mp(){}var rl=!1;function $p(e,t,n){if(rl)return e(t,n);rl=!0;try{return bp(e,t,n)}finally{rl=!1,(Dr!==null||br!==null)&&(Mp(),Dp())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var au=!1;if(tn)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){au=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{au=!1}function t0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var _i=!1,ms=null,gs=!1,lu=null,n0={onError:function(e){_i=!0,ms=e}};function r0(e,t,n,r,i,o,s,a,l){_i=!1,ms=null,t0.apply(n0,arguments)}function i0(e,t,n,r,i,o,s,a,l){if(r0.apply(this,arguments),_i){if(_i){var u=ms;_i=!1,ms=null}else throw Error(k(198));gs||(gs=!0,lu=u)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wd(e){if(hr(e)!==e)throw Error(k(188))}function o0(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wd(i),e;if(o===r)return Wd(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Up(e){return e=o0(e),e!==null?zp(e):null}function zp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zp(e);if(t!==null)return t;e=e.sibling}return null}var jp=at.unstable_scheduleCallback,Kd=at.unstable_cancelCallback,s0=at.unstable_shouldYield,a0=at.unstable_requestPaint,_e=at.unstable_now,l0=at.unstable_getCurrentPriorityLevel,wc=at.unstable_ImmediatePriority,Vp=at.unstable_UserBlockingPriority,vs=at.unstable_NormalPriority,u0=at.unstable_LowPriority,Bp=at.unstable_IdlePriority,ra=null,$t=null;function c0(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:h0,d0=Math.log,f0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(d0(e)/f0|0)|0}var Co=64,Ao=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=yi(a):(o&=s,o!==0&&(r=yi(o)))}else s=n&~i,s!==0?r=yi(s):o!==0&&(r=yi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),i=1<<n,r|=e[n],t&=~i;return r}function p0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-At(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=p0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hp(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function g0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kp,_c,Gp,qp,Qp,cu=!1,Po=[],kn=null,Tn=null,Cn=null,Fi=new Map,Ui=new Map,mn=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function ci(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=co(t),t!==null&&_c(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y0(e,t,n,r,i){switch(t){case"focusin":return kn=ci(kn,e,t,n,r,i),!0;case"dragenter":return Tn=ci(Tn,e,t,n,r,i),!0;case"mouseover":return Cn=ci(Cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fi.set(o,ci(Fi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ui.set(o,ci(Ui.get(o)||null,e,t,n,r,i)),!0}return!1}function Yp(e){var t=Kn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=Fp(n),t!==null){e.blockedOn=t,Qp(e.priority,function(){Gp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return t=co(n),t!==null&&_c(t),e.blockedOn=n,!1;t.shift()}return!0}function qd(e,t,n){Go(e)&&n.delete(t)}function w0(){cu=!1,kn!==null&&Go(kn)&&(kn=null),Tn!==null&&Go(Tn)&&(Tn=null),Cn!==null&&Go(Cn)&&(Cn=null),Fi.forEach(qd),Ui.forEach(qd)}function di(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,w0)))}function zi(e){function t(i){return di(i,e)}if(0<Po.length){di(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&di(kn,e),Tn!==null&&di(Tn,e),Cn!==null&&di(Cn,e),Fi.forEach(t),Ui.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&mn.shift()}var Mr=un.ReactCurrentBatchConfig,ws=!0;function S0(e,t,n,r){var i=ee,o=Mr.transition;Mr.transition=null;try{ee=1,Ec(e,t,n,r)}finally{ee=i,Mr.transition=o}}function _0(e,t,n,r){var i=ee,o=Mr.transition;Mr.transition=null;try{ee=4,Ec(e,t,n,r)}finally{ee=i,Mr.transition=o}}function Ec(e,t,n,r){if(ws){var i=du(e,t,n,r);if(i===null)pl(e,t,r,Ss,n),Gd(e,r);else if(y0(i,e,t,n,r))r.stopPropagation();else if(Gd(e,r),t&4&&-1<v0.indexOf(e)){for(;i!==null;){var o=co(i);if(o!==null&&Kp(o),o=du(e,t,n,r),o===null&&pl(e,t,r,Ss,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var Ss=null;function du(e,t,n,r){if(Ss=null,e=yc(r),e=Kn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function Xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case wc:return 1;case Vp:return 4;case vs:case u0:return 16;case Bp:return 536870912;default:return 16}default:return 16}}var Sn=null,Ic=null,qo=null;function Jp(){if(qo)return qo;var e,t=Ic,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return qo=i.slice(e,1<r?1-r:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Qd(){return!1}function ut(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ro:Qd,this.isPropagationStopped=Qd,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=ut(ti),uo=ve({},ti,{view:0,detail:0}),E0=ut(uo),ol,sl,fi,ia=ve({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(ol=e.screenX-fi.screenX,sl=e.screenY-fi.screenY):sl=ol=0,fi=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Yd=ut(ia),I0=ve({},ia,{dataTransfer:0}),k0=ut(I0),T0=ve({},uo,{relatedTarget:0}),al=ut(T0),C0=ve({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=ut(C0),P0=ve({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=ut(P0),x0=ve({},ti,{data:0}),Xd=ut(x0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L0[e])?!!t[e]:!1}function Tc(){return D0}var b0=ve({},uo,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=ut(b0),$0=ve({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=ut($0),F0=ve({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),U0=ut(F0),z0=ve({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=ut(z0),V0=ve({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=ut(V0),H0=[9,13,27,32],Cc=tn&&"CompositionEvent"in window,Ei=null;tn&&"documentMode"in document&&(Ei=document.documentMode);var W0=tn&&"TextEvent"in window&&!Ei,Zp=tn&&(!Cc||Ei&&8<Ei&&11>=Ei),Zd=String.fromCharCode(32),ef=!1;function em(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function K0(e,t){switch(e){case"compositionend":return tm(t);case"keypress":return t.which!==32?null:(ef=!0,Zd);case"textInput":return e=t.data,e===Zd&&ef?null:e;default:return null}}function G0(e,t){if(Er)return e==="compositionend"||!Cc&&em(e,t)?(e=Jp(),qo=Ic=Sn=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zp&&t.locale!=="ko"?null:t.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q0[e.type]:t==="textarea"}function nm(e,t,n,r){Lp(r),t=_s(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ii=null,ji=null;function Q0(e){hm(e,0)}function oa(e){var t=Tr(e);if(Cp(t))return e}function Y0(e,t){if(e==="change")return t}var rm=!1;if(tn){var ll;if(tn){var ul="oninput"in document;if(!ul){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),ul=typeof nf.oninput=="function"}ll=ul}else ll=!1;rm=ll&&(!document.documentMode||9<document.documentMode)}function rf(){Ii&&(Ii.detachEvent("onpropertychange",im),ji=Ii=null)}function im(e){if(e.propertyName==="value"&&oa(ji)){var t=[];nm(t,ji,e,yc(e)),$p(Q0,t)}}function X0(e,t,n){e==="focusin"?(rf(),Ii=t,ji=n,Ii.attachEvent("onpropertychange",im)):e==="focusout"&&rf()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(ji)}function Z0(e,t){if(e==="click")return oa(t)}function e1(e,t){if(e==="input"||e==="change")return oa(t)}function t1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:t1;function Vi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sf(e,t){var n=of(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=of(n)}}function om(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?om(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sm(){for(var e=window,t=ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ps(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n1(e){var t=sm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&om(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=sf(n,o);var s=sf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r1=tn&&"documentMode"in document&&11>=document.documentMode,Ir=null,fu=null,ki=null,hu=!1;function af(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Ir==null||Ir!==ps(r)||(r=Ir,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Vi(ki,r)||(ki=r,r=_s(fu,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},cl={},am={};tn&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function sa(e){if(cl[e])return cl[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in am)return cl[e]=t[n];return e}var lm=sa("animationend"),um=sa("animationiteration"),cm=sa("animationstart"),dm=sa("transitionend"),fm=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){fm.set(e,t),fr(t,[e])}for(var dl=0;dl<lf.length;dl++){var fl=lf[dl],i1=fl.toLowerCase(),o1=fl[0].toUpperCase()+fl.slice(1);Fn(i1,"on"+o1)}Fn(lm,"onAnimationEnd");Fn(um,"onAnimationIteration");Fn(cm,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(dm,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function uf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i0(r,t,void 0,e),e.currentTarget=null}function hm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;uf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;uf(i,a,u),o=l}}}if(gs)throw e=lu,gs=!1,lu=null,e}function ce(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var r=e+"__bubble";n.has(r)||(pm(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),pm(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Oo]){e[Oo]=!0,_p.forEach(function(n){n!=="selectionchange"&&(s1.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,hl("selectionchange",!1,t))}}function pm(e,t,n,r){switch(Xp(t)){case 1:var i=S0;break;case 4:i=_0;break;default:i=Ec}n=i.bind(null,t,n,e),i=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}$p(function(){var u=o,f=yc(n),h=[];e:{var m=fm.get(e);if(m!==void 0){var g=kc,w=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":g=M0;break;case"focusin":w="focus",g=al;break;case"focusout":w="blur",g=al;break;case"beforeblur":case"afterblur":g=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=U0;break;case lm:case um:case cm:g=A0;break;case dm:g=j0;break;case"scroll":g=E0;break;case"wheel":g=B0;break;case"copy":case"cut":case"paste":g=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jd}var v=(t&4)!==0,_=!v&&e==="scroll",d=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=$i(c,d),y!=null&&v.push(Hi(c,y,p)))),_)break;c=c.return}0<v.length&&(m=new g(m,w,null,n,f),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==ou&&(w=n.relatedTarget||n.fromElement)&&(Kn(w)||w[nn]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Kn(w):null,w!==null&&(_=hr(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=Yd,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Jd,y="onPointerLeave",d="onPointerEnter",c="pointer"),_=g==null?m:Tr(g),p=w==null?m:Tr(w),m=new v(y,c+"leave",g,n,f),m.target=_,m.relatedTarget=p,y=null,Kn(f)===u&&(v=new v(d,c+"enter",w,n,f),v.target=p,v.relatedTarget=_,y=v),_=y,g&&w)t:{for(v=g,d=w,c=0,p=v;p;p=vr(p))c++;for(p=0,y=d;y;y=vr(y))p++;for(;0<c-p;)v=vr(v),c--;for(;0<p-c;)d=vr(d),p--;for(;c--;){if(v===d||d!==null&&v===d.alternate)break t;v=vr(v),d=vr(d)}v=null}else v=null;g!==null&&cf(h,m,g,v,!1),w!==null&&_!==null&&cf(h,_,w,v,!0)}}e:{if(m=u?Tr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=Y0;else if(tf(m))if(rm)E=e1;else{E=J0;var A=X0}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Z0);if(E&&(E=E(e,u))){nm(h,E,n,f);break e}A&&A(e,m,u),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&eu(m,"number",m.value)}switch(A=u?Tr(u):window,e){case"focusin":(tf(A)||A.contentEditable==="true")&&(Ir=A,fu=u,ki=null);break;case"focusout":ki=fu=Ir=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,af(h,n,f);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":af(h,n,f)}var P;if(Cc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Er?em(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zp&&n.locale!=="ko"&&(Er||T!=="onCompositionStart"?T==="onCompositionEnd"&&Er&&(P=Jp()):(Sn=f,Ic="value"in Sn?Sn.value:Sn.textContent,Er=!0)),A=_s(u,T),0<A.length&&(T=new Xd(T,e,null,n,f),h.push({event:T,listeners:A}),P?T.data=P:(P=tm(n),P!==null&&(T.data=P)))),(P=W0?K0(e,n):G0(e,n))&&(u=_s(u,"onBeforeInput"),0<u.length&&(f=new Xd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=P))}hm(h,t)})}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Hi(e,o,i)),o=$i(e,t),o!=null&&r.push(Hi(e,o,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cf(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$i(n,o),l!=null&&s.unshift(Hi(n,l,a))):i||(l=$i(n,o),l!=null&&s.push(Hi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var a1=/\r\n?/g,l1=/\u0000|\uFFFD/g;function df(e){return(typeof e=="string"?e:""+e).replace(a1,`
`).replace(l1,"")}function No(e,t,n){if(t=df(t),df(e)!==t&&n)throw Error(k(425))}function Es(){}var pu=null,mu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,c1=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(d1)}:vu;function d1(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),Dt="__reactFiber$"+ni,Wi="__reactProps$"+ni,nn="__reactContainer$"+ni,yu="__reactEvents$"+ni,f1="__reactListeners$"+ni,h1="__reactHandles$"+ni;function Kn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hf(e);e!==null;){if(n=e[Dt])return n;e=hf(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[Dt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function aa(e){return e[Wi]||null}var wu=[],Cr=-1;function Un(e){return{current:e}}function de(e){0>Cr||(e.current=wu[Cr],wu[Cr]=null,Cr--)}function ae(e,t){Cr++,wu[Cr]=e.current,e.current=t}var $n={},Ve=Un($n),Ze=Un(!1),tr=$n;function Br(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function Is(){de(Ze),de(Ve)}function pf(e,t,n){if(Ve.current!==$n)throw Error(k(168));ae(Ve,t),ae(Ze,n)}function mm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Xy(e)||"Unknown",i));return ve({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,tr=Ve.current,ae(Ve,e),ae(Ze,Ze.current),!0}function mf(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=mm(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,de(Ze),de(Ve),ae(Ve,e)):de(Ze),ae(Ze,n)}var Gt=null,la=!1,gl=!1;function gm(e){Gt===null?Gt=[e]:Gt.push(e)}function p1(e){la=!0,gm(e)}function zn(){if(!gl&&Gt!==null){gl=!0;var e=0,t=ee;try{var n=Gt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,la=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),jp(wc,zn),i}finally{ee=t,gl=!1}}return null}var Ar=[],Pr=0,Ts=null,Cs=0,ft=[],ht=0,nr=null,qt=1,Qt="";function jn(e,t){Ar[Pr++]=Cs,Ar[Pr++]=Ts,Ts=e,Cs=t}function vm(e,t,n){ft[ht++]=qt,ft[ht++]=Qt,ft[ht++]=nr,nr=e;var r=qt;e=Qt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var o=32-At(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qt=1<<32-At(t)+i|n<<i|r,Qt=o+e}else qt=1<<o|n<<i|r,Qt=e}function Pc(e){e.return!==null&&(jn(e,1),vm(e,1,0))}function Rc(e){for(;e===Ts;)Ts=Ar[--Pr],Ar[Pr]=null,Cs=Ar[--Pr],Ar[Pr]=null;for(;e===nr;)nr=ft[--ht],ft[ht]=null,Qt=ft[--ht],ft[ht]=null,qt=ft[--ht],ft[ht]=null}var ot=null,rt=null,he=!1,Ct=null;function ym(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:qt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(he){var t=rt;if(t){var n=t;if(!gf(e,t)){if(Su(e))throw Error(k(418));t=An(n.nextSibling);var r=ot;t&&gf(e,t)?ym(r,n):(e.flags=e.flags&-4097|2,he=!1,ot=e)}}else{if(Su(e))throw Error(k(418));e.flags=e.flags&-4097|2,he=!1,ot=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Lo(e){if(e!==ot)return!1;if(!he)return vf(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=rt)){if(Su(e))throw wm(),Error(k(418));for(;t;)ym(e,t),t=An(t.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?An(e.stateNode.nextSibling):null;return!0}function wm(){for(var e=rt;e;)e=An(e.nextSibling)}function Hr(){rt=ot=null,he=!1}function xc(e){Ct===null?Ct=[e]:Ct.push(e)}var m1=un.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var As=Un(null),Ps=null,Rr=null,Oc=null;function Nc(){Oc=Rr=Ps=null}function Lc(e){var t=As.current;de(As),e._currentValue=t}function Eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){Ps=e,Oc=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Ps===null)throw Error(k(308));Rr=e,Ps.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var Gn=null;function Dc(e){Gn===null?Gn=[e]:Gn.push(e)}function Sm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sc(e,n)}}function yf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rs(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=ve({},h,m);break e;case 2:pn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=s,e.lanes=s,e.memoizedState=h}}function wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Em=new Sp.Component().refs;function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=xn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Pt(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=xn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Pt(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=xn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(Pt(t,e,r,n),Yo(t,e,r))}};function Sf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function Im(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=et(t)?tr:Ve.current,r=t.contextTypes,o=(r=r!=null)?Br(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function ku(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Em,bc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=et(t)?tr:Ve.current,i.context=Br(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Iu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),Rs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Em&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ef(e){var t=e._init;return t(e._payload)}function km(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=On(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=Il(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,y){var E=p.type;return E===_r?f(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hn&&Ef(E)===c.type)?(y=i(c,p.props),y.ref=hi(d,c,p),y.return=d,y):(y=ns(p.type,p.key,p.props,null,d.mode,y),y.ref=hi(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=kl(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function f(d,c,p,y,E){return c===null||c.tag!==7?(c=Zn(p,d.mode,y,E),c.return=d,c):(c=i(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Il(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Io:return p=ns(c.type,c.key,c.props,null,d.mode,p),p.ref=hi(d,null,c),p.return=d,p;case Sr:return c=kl(c,d.mode,p),c.return=d,c;case hn:var y=c._init;return h(d,y(c._payload),p)}if(vi(c)||li(c))return c=Zn(c,d.mode,p,null),c.return=d,c;Do(d,c)}return null}function m(d,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:return p.key===E?l(d,c,p,y):null;case Sr:return p.key===E?u(d,c,p,y):null;case hn:return E=p._init,m(d,c,E(p._payload),y)}if(vi(p)||li(p))return E!==null?null:f(d,c,p,y,null);Do(d,p)}return null}function g(d,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,E);case Sr:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,E);case hn:var A=y._init;return g(d,c,p,A(y._payload),E)}if(vi(y)||li(y))return d=d.get(p)||null,f(c,d,y,E,null);Do(c,y)}return null}function w(d,c,p,y){for(var E=null,A=null,P=c,T=c=0,U=null;P!==null&&T<p.length;T++){P.index>T?(U=P,P=null):U=P.sibling;var D=m(d,P,p[T],y);if(D===null){P===null&&(P=U);break}e&&P&&D.alternate===null&&t(d,P),c=o(D,c,T),A===null?E=D:A.sibling=D,A=D,P=U}if(T===p.length)return n(d,P),he&&jn(d,T),E;if(P===null){for(;T<p.length;T++)P=h(d,p[T],y),P!==null&&(c=o(P,c,T),A===null?E=P:A.sibling=P,A=P);return he&&jn(d,T),E}for(P=r(d,P);T<p.length;T++)U=g(P,d,T,p[T],y),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?T:U.key),c=o(U,c,T),A===null?E=U:A.sibling=U,A=U);return e&&P.forEach(function(oe){return t(d,oe)}),he&&jn(d,T),E}function v(d,c,p,y){var E=li(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var A=E=null,P=c,T=c=0,U=null,D=p.next();P!==null&&!D.done;T++,D=p.next()){P.index>T?(U=P,P=null):U=P.sibling;var oe=m(d,P,D.value,y);if(oe===null){P===null&&(P=U);break}e&&P&&oe.alternate===null&&t(d,P),c=o(oe,c,T),A===null?E=oe:A.sibling=oe,A=oe,P=U}if(D.done)return n(d,P),he&&jn(d,T),E;if(P===null){for(;!D.done;T++,D=p.next())D=h(d,D.value,y),D!==null&&(c=o(D,c,T),A===null?E=D:A.sibling=D,A=D);return he&&jn(d,T),E}for(P=r(d,P);!D.done;T++,D=p.next())D=g(P,d,T,D.value,y),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?T:D.key),c=o(D,c,T),A===null?E=D:A.sibling=D,A=D);return e&&P.forEach(function(Q){return t(d,Q)}),he&&jn(d,T),E}function _(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===_r&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:e:{for(var E=p.key,A=c;A!==null;){if(A.key===E){if(E=p.type,E===_r){if(A.tag===7){n(d,A.sibling),c=i(A,p.props.children),c.return=d,d=c;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hn&&Ef(E)===A.type){n(d,A.sibling),c=i(A,p.props),c.ref=hi(d,A,p),c.return=d,d=c;break e}n(d,A);break}else t(d,A);A=A.sibling}p.type===_r?(c=Zn(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=ns(p.type,p.key,p.props,null,d.mode,y),y.ref=hi(d,c,p),y.return=d,d=y)}return s(d);case Sr:e:{for(A=p.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=kl(p,d.mode,y),c.return=d,d=c}return s(d);case hn:return A=p._init,_(d,c,A(p._payload),y)}if(vi(p))return w(d,c,p,y);if(li(p))return v(d,c,p,y);Do(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Il(p,d.mode,y),c.return=d,d=c),s(d)):n(d,c)}return _}var Wr=km(!0),Tm=km(!1),fo={},Ft=Un(fo),Ki=Un(fo),Gi=Un(fo);function qn(e){if(e===fo)throw Error(k(174));return e}function Mc(e,t){switch(ae(Gi,t),ae(Ki,e),ae(Ft,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}de(Ft),ae(Ft,t)}function Kr(){de(Ft),de(Ki),de(Gi)}function Cm(e){qn(Gi.current);var t=qn(Ft.current),n=nu(t,e.type);t!==n&&(ae(Ki,e),ae(Ft,n))}function $c(e){Ki.current===e&&(de(Ft),de(Ki))}var me=Un(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Fc(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Xo=un.ReactCurrentDispatcher,yl=un.ReactCurrentBatchConfig,rr=0,ge=null,ke=null,Re=null,Os=!1,Ti=!1,qi=0,g1=0;function Ue(){throw Error(k(321))}function Uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function zc(e,t,n,r,i,o){if(rr=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?S1:_1,e=n(r,i),Ti){o=0;do{if(Ti=!1,qi=0,25<=o)throw Error(k(301));o+=1,Re=ke=null,t.updateQueue=null,Xo.current=E1,e=n(r,i)}while(Ti)}if(Xo.current=Ns,t=ke!==null&&ke.next!==null,rr=0,Re=ke=ge=null,Os=!1,t)throw Error(k(300));return e}function jc(){var e=qi!==0;return qi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=e:Re=Re.next=e,Re}function St(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Re===null?ge.memoizedState:Re.next;if(t!==null)Re=t,ke=e;else{if(e===null)throw Error(k(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Re===null?ge.memoizedState=Re=e:Re=Re.next=e}return Re}function Qi(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=St(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((rr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,ge.lanes|=f,ir|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Rt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=St(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Rt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Am(){}function Pm(e,t){var n=ge,r=St(),i=t(),o=!Rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Vc(Om.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Yi(9,xm.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(k(349));rr&30||Rm(n,t,i)}return i}function Rm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xm(e,t,n,r){t.value=n,t.getSnapshot=r,Nm(t)&&Lm(e)}function Om(e,t,n){return n(function(){Nm(t)&&Lm(e)})}function Nm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Lm(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function If(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=w1.bind(null,ge,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dm(){return St().memoizedState}function Jo(e,t,n,r){var i=Lt();ge.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function ca(e,t,n,r){var i=St();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&Uc(r,s.deps)){i.memoizedState=Yi(t,n,o,r);return}}ge.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function kf(e,t){return Jo(8390656,8,e,t)}function Vc(e,t){return ca(2048,8,e,t)}function bm(e,t){return ca(4,2,e,t)}function Mm(e,t){return ca(4,4,e,t)}function $m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fm(e,t,n){return n=n!=null?n.concat([e]):null,ca(4,4,$m.bind(null,t,e),n)}function Bc(){}function Um(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zm(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jm(e,t,n){return rr&21?(Rt(n,t)||(n=Hp(),ge.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function v1(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{ee=n,yl.transition=r}}function Vm(){return St().memoizedState}function y1(e,t,n){var r=xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bm(e))Hm(t,n);else if(n=Sm(e,t,n,r),n!==null){var i=Ke();Pt(n,e,r,i),Wm(n,t,r)}}function w1(e,t,n){var r=xn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bm(e))Hm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,s)){var l=t.interleaved;l===null?(i.next=i,Dc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Sm(e,t,i,r),n!==null&&(i=Ke(),Pt(n,e,r,i),Wm(n,t,r))}}function Bm(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Hm(e,t){Ti=Os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sc(e,n)}}var Ns={readContext:wt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},S1={readContext:wt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:kf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,$m.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:If,useDebugValue:Bc,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=If(!1),t=e[0];return e=v1.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Lt();if(he){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),xe===null)throw Error(k(349));rr&30||Rm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kf(Om.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,xm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=xe.identifierPrefix;if(he){var n=Qt,r=qt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_1={readContext:wt,useCallback:Um,useContext:wt,useEffect:Vc,useImperativeHandle:Fm,useInsertionEffect:bm,useLayoutEffect:Mm,useMemo:zm,useReducer:wl,useRef:Dm,useState:function(){return wl(Qi)},useDebugValue:Bc,useDeferredValue:function(e){var t=St();return jm(t,ke.memoizedState,e)},useTransition:function(){var e=wl(Qi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Am,useSyncExternalStore:Pm,useId:Vm,unstable_isNewReconciler:!1},E1={readContext:wt,useCallback:Um,useContext:wt,useEffect:Vc,useImperativeHandle:Fm,useInsertionEffect:bm,useLayoutEffect:Mm,useMemo:zm,useReducer:Sl,useRef:Dm,useState:function(){return Sl(Qi)},useDebugValue:Bc,useDeferredValue:function(e){var t=St();return ke===null?t.memoizedState=e:jm(t,ke.memoizedState,e)},useTransition:function(){var e=Sl(Qi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Am,useSyncExternalStore:Pm,useId:Vm,unstable_isNewReconciler:!1};function Gr(e,t){try{var n="",r=t;do n+=Yy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var I1=typeof WeakMap=="function"?WeakMap:Map;function Km(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ds||(Ds=!0,bu=r),Tu(e,t)},n}function Gm(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tu(e,t),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Tf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new I1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$1.bind(null,e,t,n),t.then(e,e))}function Cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Af(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var k1=un.ReactCurrentOwner,Je=!1;function He(e,t,n,r){t.child=e===null?Tm(t,null,n,r):Wr(t,e.child,n,r)}function Pf(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=zc(e,t,n,r,o,i),n=jc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(he&&n&&Pc(t),t.flags|=1,He(e,t,r,i),t.child)}function Rf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qm(e,t,o,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(s,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=On(o,r),e.ref=t.ref,e.return=t,t.child=e}function qm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,on(e,t,i)}return Cu(e,t,n,r,i)}function Qm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Or,nt),nt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Or,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ae(Or,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ae(Or,nt),nt|=r;return He(e,t,i,n),t.child}function Ym(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cu(e,t,n,r,i){var o=et(n)?tr:Ve.current;return o=Br(t,o),$r(t,i),n=zc(e,t,n,r,o,i),r=jc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(he&&r&&Pc(t),t.flags|=1,He(e,t,n,i),t.child)}function xf(e,t,n,r,i){if(et(n)){var o=!0;ks(t)}else o=!1;if($r(t,i),t.stateNode===null)Zo(e,t),Im(t,n,r),ku(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?tr:Ve.current,u=Br(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_f(t,s,r,u),pn=!1;var m=t.memoizedState;s.state=m,Rs(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ze.current||pn?(typeof f=="function"&&(Iu(t,n,f,r),l=t.memoizedState),(a=pn||Sf(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,_m(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:kt(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=et(n)?tr:Ve.current,l=Br(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&_f(t,s,r,l),pn=!1,m=t.memoizedState,s.state=m,Rs(t,r,s,i);var w=t.memoizedState;a!==h||m!==w||Ze.current||pn?(typeof g=="function"&&(Iu(t,n,g,r),w=t.memoizedState),(u=pn||Sf(t,n,u,r,m,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Au(e,t,n,r,o,i)}function Au(e,t,n,r,i,o){Ym(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&mf(t,n,!1),on(e,t,o);r=t.stateNode,k1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wr(t,e.child,null,o),t.child=Wr(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&mf(t,n,!0),t.child}function Xm(e){var t=e.stateNode;t.pendingContext?pf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pf(e,t.context,!1),Mc(e,t.containerInfo)}function Of(e,t,n,r,i){return Hr(),xc(i),t.flags|=256,He(e,t,n,r),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jm(e,t,n){var r=t.pendingProps,i=me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(me,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ha(s,r,0,null),e=Zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ru(n),t.memoizedState=Pu,e):Hc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return T1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=On(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=On(a,o):(o=Zn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ru(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Pu,r}return o=e.child,e=o.sibling,r=On(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hc(e,t){return t=ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&xc(r),Wr(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=_l(Error(k(422))),bo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ha({mode:"visible",children:r.children},i,0,null),o=Zn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wr(t,e.child,null,s),t.child.memoizedState=Ru(s),t.memoizedState=Pu,o);if(!(t.mode&1))return bo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=_l(o,r,void 0),bo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Je||a){if(r=xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return Yc(),r=_l(Error(k(421))),bo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=F1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=An(i.nextSibling),ot=t,he=!0,Ct=null,e!==null&&(ft[ht++]=qt,ft[ht++]=Qt,ft[ht++]=nr,qt=e.id,Qt=e.overflow,nr=t),t=Hc(t,r.children),t.flags|=4096,t)}function Nf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eu(e.return,t,n)}function El(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,n,t);else if(e.tag===19)Nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),El(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}El(t,!0,n,null,o);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function C1(e,t,n){switch(t.tag){case 3:Xm(t),Hr();break;case 5:Cm(t);break;case 1:et(t.type)&&ks(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(As,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?Jm(e,t,n):(ae(me,me.current&1),e=on(e,t,n),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Qm(e,t,n)}return on(e,t,n)}var eg,xu,tg,ng;eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};tg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qn(Ft.current);var o=null;switch(n){case"input":i=Jl(e,i),r=Jl(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=tu(e,i),r=tu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Es)}ru(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ng=function(e,t,n,r){n!==r&&(t.flags|=4)};function pi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A1(e,t,n){var r=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return et(t.type)&&Is(),ze(t),null;case 3:return r=t.stateNode,Kr(),de(Ze),de(Ve),Fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(Fu(Ct),Ct=null))),xu(e,t),ze(t),null;case 5:$c(t);var i=qn(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)tg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ze(t),null}if(e=qn(Ft.current),Lo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[Wi]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)ce(wi[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":zd(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":Vd(r,o),ce("invalid",r)}ru(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",""+a]):bi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ce("scroll",r)}switch(n){case"input":ko(r),jd(r,o,!0);break;case"textarea":ko(r),Bd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Es)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dt]=t,e[Wi]=r,eg(e,t,!1,!1),t.stateNode=e;e:{switch(s=iu(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)ce(wi[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":zd(e,r),i=Jl(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Vd(e,r),i=tu(e,r),ce("invalid",e);break;default:i=r}ru(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Np(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mi(e,l):typeof l=="number"&&Mi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ce("scroll",e):l!=null&&pc(e,o,l,s))}switch(n){case"input":ko(e),jd(e,r,!1);break;case"textarea":ko(e),Bd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)ng(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=qn(Gi.current),qn(Ft.current),Lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return ze(t),null;case 13:if(de(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&rt!==null&&t.mode&1&&!(t.flags&128))wm(),Hr(),t.flags|=98560,o=!1;else if(o=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Dt]=t}else Hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else Ct!==null&&(Fu(Ct),Ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ce===0&&(Ce=3):Yc())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Kr(),xu(e,t),e===null&&Bi(t.stateNode.containerInfo),ze(t),null;case 10:return Lc(t.type._context),ze(t),null;case 17:return et(t.type)&&Is(),ze(t),null;case 19:if(de(me),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)pi(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xs(e),s!==null){for(t.flags|=128,pi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&_e()>qr&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304)}else{if(!r)if(e=xs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return ze(t),null}else 2*_e()-o.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_e(),t.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function P1(e,t){switch(Rc(t),t.tag){case 1:return et(t.type)&&Is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),de(Ze),de(Ve),Fc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(de(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(me),null;case 4:return Kr(),null;case 10:return Lc(t.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var Mo=!1,je=!1,R1=typeof WeakSet=="function"?WeakSet:Set,L=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Ou(e,t,n){try{n()}catch(r){we(e,t,r)}}var Lf=!1;function x1(e,t){if(pu=ws,e=sm(),Ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},ws=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,_=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:kt(t.type,v),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){we(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Lf,Lf=!1,w}function Ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ou(t,n,o)}i=i.next}while(i!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rg(e){var t=e.alternate;t!==null&&(e.alternate=null,rg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Wi],delete t[yu],delete t[f1],delete t[h1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ig(e){return e.tag===5||e.tag===3||e.tag===4}function Df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var be=null,Tt=!1;function dn(e,t,n){for(n=n.child;n!==null;)og(e,t,n),n=n.sibling}function og(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:je||xr(n,t);case 6:var r=be,i=Tt;be=null,dn(e,t,n),be=r,Tt=i,be!==null&&(Tt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Tt?(e=be,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),zi(e)):ml(be,n.stateNode));break;case 4:r=be,i=Tt,be=n.stateNode.containerInfo,Tt=!0,dn(e,t,n),be=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ou(n,t,s),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!je&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,dn(e,t,n),je=r):dn(e,t,n);break;default:dn(e,t,n)}}function bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R1),t.forEach(function(r){var i=U1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,Tt=!1;break e;case 3:be=a.stateNode.containerInfo,Tt=!0;break e;case 4:be=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(be===null)throw Error(k(160));og(o,s,i),be=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}function sg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Nt(e),r&4){try{Ci(3,e,e.return),da(3,e)}catch(v){we(e,e.return,v)}try{Ci(5,e,e.return)}catch(v){we(e,e.return,v)}}break;case 1:It(t,e),Nt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(It(t,e),Nt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{Mi(i,"")}catch(v){we(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ap(i,o),iu(a,s);var u=iu(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?Np(i,h):f==="dangerouslySetInnerHTML"?xp(i,h):f==="children"?Mi(i,h):pc(i,f,h,u)}switch(a){case"input":Zl(i,o);break;case"textarea":Pp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Lr(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wi]=o}catch(v){we(e,e.return,v)}}break;case 6:if(It(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){we(e,e.return,v)}}break;case 3:if(It(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(v){we(e,e.return,v)}break;case 4:It(t,e),Nt(e);break;case 13:It(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gc=_e())),r&4&&bf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,It(t,e),je=u):It(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(h=L=f;L!==null;){switch(m=L,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ci(4,m,m.return);break;case 1:xr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:xr(m,m.return);break;case 22:if(m.memoizedState!==null){$f(h);continue}}g!==null?(g.return=m,L=g):$f(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Op("display",s))}catch(v){we(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){we(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:It(t,e),Nt(e),r&4&&bf(e);break;case 21:break;default:It(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ig(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var o=Df(e);Du(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Df(e);Lu(e,a,s);break;default:throw Error(k(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O1(e,t,n){L=e,ag(e)}function ag(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Mo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=Mo;var u=je;if(Mo=s,(je=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Ff(i):l!==null?(l.return=s,L=l):Ff(i);for(;o!==null;)L=o,ag(o),o=o.sibling;L=i,Mo=a,je=u}Mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Mf(e)}}function Mf(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&zi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}je||t.flags&512&&Nu(t)}catch(m){we(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function $f(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ff(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){we(t,i,l)}}var o=t.return;try{Nu(t)}catch(l){we(t,o,l)}break;case 5:var s=t.return;try{Nu(t)}catch(l){we(t,s,l)}}}catch(l){we(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var N1=Math.ceil,Ls=un.ReactCurrentDispatcher,Wc=un.ReactCurrentOwner,gt=un.ReactCurrentBatchConfig,K=0,xe=null,Ee=null,Me=0,nt=0,Or=Un(0),Ce=0,Xi=null,ir=0,fa=0,Kc=0,Ai=null,Xe=null,Gc=0,qr=1/0,Kt=null,Ds=!1,bu=null,Rn=null,$o=!1,_n=null,bs=0,Pi=0,Mu=null,es=-1,ts=0;function Ke(){return K&6?_e():es!==-1?es:es=_e()}function xn(e){return e.mode&1?K&2&&Me!==0?Me&-Me:m1.transition!==null?(ts===0&&(ts=Hp()),ts):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Xp(e.type)),e):1}function Pt(e,t,n,r){if(50<Pi)throw Pi=0,Mu=null,Error(k(185));lo(e,n,r),(!(K&2)||e!==xe)&&(e===xe&&(!(K&2)&&(fa|=n),Ce===4&&gn(e,Me)),tt(e,r),n===1&&K===0&&!(t.mode&1)&&(qr=_e()+500,la&&zn()))}function tt(e,t){var n=e.callbackNode;m0(e,t);var r=ys(e,e===xe?Me:0);if(r===0)n!==null&&Kd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kd(n),t===1)e.tag===0?p1(Uf.bind(null,e)):gm(Uf.bind(null,e)),c1(function(){!(K&6)&&zn()}),n=null;else{switch(Wp(r)){case 1:n=wc;break;case 4:n=Vp;break;case 16:n=vs;break;case 536870912:n=Bp;break;default:n=vs}n=mg(n,lg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lg(e,t){if(es=-1,ts=0,K&6)throw Error(k(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=ys(e,e===xe?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var i=K;K|=2;var o=cg();(xe!==e||Me!==t)&&(Kt=null,qr=_e()+500,Jn(e,t));do try{b1();break}catch(a){ug(e,a)}while(1);Nc(),Ls.current=o,K=i,Ee!==null?t=0:(xe=null,Me=0,t=Ce)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=$u(e,i))),t===1)throw n=Xi,Jn(e,0),gn(e,r),tt(e,_e()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!L1(i)&&(t=Ms(e,r),t===2&&(o=uu(e),o!==0&&(r=o,t=$u(e,o))),t===1))throw n=Xi,Jn(e,0),gn(e,r),tt(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Vn(e,Xe,Kt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Gc+500-_e(),10<t)){if(ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu(Vn.bind(null,e,Xe,Kt),t);break}Vn(e,Xe,Kt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-At(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N1(r/1960))-r,10<r){e.timeoutHandle=vu(Vn.bind(null,e,Xe,Kt),r);break}Vn(e,Xe,Kt);break;case 5:Vn(e,Xe,Kt);break;default:throw Error(k(329))}}}return tt(e,_e()),e.callbackNode===n?lg.bind(null,e):null}function $u(e,t){var n=Ai;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Fu(t)),e}function Fu(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function L1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Kc,t&=~fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function Uf(e){if(K&6)throw Error(k(327));Fr();var t=ys(e,0);if(!(t&1))return tt(e,_e()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=$u(e,r))}if(n===1)throw n=Xi,Jn(e,0),gn(e,t),tt(e,_e()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,Xe,Kt),tt(e,_e()),null}function qc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(qr=_e()+500,la&&zn())}}function or(e){_n!==null&&_n.tag===0&&!(K&6)&&Fr();var t=K;K|=1;var n=gt.transition,r=ee;try{if(gt.transition=null,ee=1,e)return e()}finally{ee=r,gt.transition=n,K=t,!(K&6)&&zn()}}function Qc(){nt=Or.current,de(Or)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u1(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Is();break;case 3:Kr(),de(Ze),de(Ve),Fc();break;case 5:$c(r);break;case 4:Kr();break;case 13:de(me);break;case 19:de(me);break;case 10:Lc(r.type._context);break;case 22:case 23:Qc()}n=n.return}if(xe=e,Ee=e=On(e.current,null),Me=nt=t,Ce=0,Xi=null,Kc=fa=ir=0,Xe=Ai=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Gn=null}return e}function ug(e,t){do{var n=Ee;try{if(Nc(),Xo.current=Ns,Os){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(rr=0,Re=ke=ge=null,Ti=!1,qi=0,Wc.current=null,n===null||n.return===null){Ce=1,Xi=t,Ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Cf(s);if(g!==null){g.flags&=-257,Af(g,s,a,o,t),g.mode&1&&Tf(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){Tf(o,u,t),Yc();break e}l=Error(k(426))}}else if(he&&a.mode&1){var _=Cf(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Af(_,s,a,o,t),xc(Gr(l,a));break e}}o=l=Gr(l,a),Ce!==4&&(Ce=2),Ai===null?Ai=[o]:Ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Km(o,l,t);yf(o,d);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rn===null||!Rn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Gm(o,a,t);yf(o,y);break e}}o=o.return}while(o!==null)}fg(n)}catch(E){t=E,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function cg(){var e=Ls.current;return Ls.current=Ns,e===null?Ns:e}function Yc(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),xe===null||!(ir&268435455)&&!(fa&268435455)||gn(xe,Me)}function Ms(e,t){var n=K;K|=2;var r=cg();(xe!==e||Me!==t)&&(Kt=null,Jn(e,t));do try{D1();break}catch(i){ug(e,i)}while(1);if(Nc(),K=n,Ls.current=r,Ee!==null)throw Error(k(261));return xe=null,Me=0,Ce}function D1(){for(;Ee!==null;)dg(Ee)}function b1(){for(;Ee!==null&&!s0();)dg(Ee)}function dg(e){var t=pg(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?fg(e):Ee=t,Wc.current=null}function fg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=P1(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Ee=null;return}}else if(n=A1(n,t,nt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ce===0&&(Ce=5)}function Vn(e,t,n){var r=ee,i=gt.transition;try{gt.transition=null,ee=1,M1(e,t,n,r)}finally{gt.transition=i,ee=r}return null}function M1(e,t,n,r){do Fr();while(_n!==null);if(K&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(g0(e,o),e===xe&&(Ee=xe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,mg(vs,function(){return Fr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=gt.transition,gt.transition=null;var s=ee;ee=1;var a=K;K|=4,Wc.current=null,x1(e,n),sg(n,e),n1(mu),ws=!!pu,mu=pu=null,e.current=n,O1(n),a0(),K=a,ee=s,gt.transition=o}else e.current=n;if($o&&($o=!1,_n=e,bs=i),o=e.pendingLanes,o===0&&(Rn=null),c0(n.stateNode),tt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ds)throw Ds=!1,e=bu,bu=null,e;return bs&1&&e.tag!==0&&Fr(),o=e.pendingLanes,o&1?e===Mu?Pi++:(Pi=0,Mu=e):Pi=0,zn(),null}function Fr(){if(_n!==null){var e=Wp(bs),t=gt.transition,n=ee;try{if(gt.transition=null,ee=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,bs=0,K&6)throw Error(k(331));var i=K;for(K|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:Ci(8,f,o)}var h=f.child;if(h!==null)h.return=f,L=h;else for(;L!==null;){f=L;var m=f.sibling,g=f.return;if(rg(f),f===u){L=null;break}if(m!==null){m.return=g,L=m;break}L=g}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ci(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,L=d;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){s=L;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,L=p;else e:for(s=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:da(9,a)}}catch(E){we(a,a.return,E)}if(a===s){L=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,L=y;break e}L=a.return}}if(K=i,zn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{ee=n,gt.transition=t}}return!1}function zf(e,t,n){t=Gr(n,t),t=Km(e,t,1),e=Pn(e,t,1),t=Ke(),e!==null&&(lo(e,1,t),tt(e,t))}function we(e,t,n){if(e.tag===3)zf(e,e,n);else for(;t!==null;){if(t.tag===3){zf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Gr(n,e),e=Gm(t,e,1),t=Pn(t,e,1),e=Ke(),t!==null&&(lo(t,1,e),tt(t,e));break}}t=t.return}}function $1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Me&n)===n&&(Ce===4||Ce===3&&(Me&130023424)===Me&&500>_e()-Gc?Jn(e,0):Kc|=n),tt(e,t)}function hg(e,t){t===0&&(e.mode&1?(t=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):t=1);var n=Ke();e=rn(e,t),e!==null&&(lo(e,t,n),tt(e,n))}function F1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hg(e,n)}function U1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),hg(e,n)}var pg;pg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,C1(e,t,n);Je=!!(e.flags&131072)}else Je=!1,he&&t.flags&1048576&&vm(t,Cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var i=Br(t,Ve.current);$r(t,n),i=zc(null,t,r,e,i,n);var o=jc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,ks(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bc(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,ku(t,r,e,n),t=Au(null,t,r,!0,o,n)):(t.tag=0,he&&o&&Pc(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=j1(r),e=kt(r,e),i){case 0:t=Cu(null,t,r,e,n);break e;case 1:t=xf(null,t,r,e,n);break e;case 11:t=Pf(null,t,r,e,n);break e;case 14:t=Rf(null,t,r,kt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),xf(e,t,r,i,n);case 3:e:{if(Xm(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_m(e,t),Rs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gr(Error(k(423)),t),t=Of(e,t,r,n,i);break e}else if(r!==i){i=Gr(Error(k(424)),t),t=Of(e,t,r,n,i);break e}else for(rt=An(t.stateNode.containerInfo.firstChild),ot=t,he=!0,Ct=null,n=Tm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){t=on(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Cm(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,gu(r,i)?s=null:o!==null&&gu(r,o)&&(t.flags|=32),Ym(e,t),He(e,t,s,n),t.child;case 6:return e===null&&_u(t),null;case 13:return Jm(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Pf(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ae(As,r._currentValue),r._currentValue=s,o!==null)if(Rt(o.value,s)){if(o.children===i.children&&!Ze.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Eu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=wt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Rf(e,t,r,i,n);case 15:return qm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Zo(e,t),t.tag=1,et(r)?(e=!0,ks(t)):e=!1,$r(t,n),Im(t,r,i),ku(t,r,i,n),Au(null,t,r,!0,e,n);case 19:return Zm(e,t,n);case 22:return Qm(e,t,n)}throw Error(k(156,t.tag))};function mg(e,t){return jp(e,t)}function z1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new z1(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j1(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===vc)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Xc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _r:return Zn(n.children,i,o,t);case mc:s=8,i|=8;break;case ql:return e=pt(12,n,t,i|2),e.elementType=ql,e.lanes=o,e;case Ql:return e=pt(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Yl:return e=pt(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case kp:return ha(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ep:s=10;break e;case Ip:s=9;break e;case gc:s=11;break e;case vc:s=14;break e;case hn:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=pt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function ha(e,t,n,r){return e=pt(22,e,r,t),e.elementType=kp,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function V1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jc(e,t,n,r,i,o,s,a,l){return e=new V1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(o),e}function B1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gg(e){if(!e)return $n;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(et(n))return mm(e,n,t)}return t}function vg(e,t,n,r,i,o,s,a,l){return e=Jc(n,r,!0,e,i,o,s,a,l),e.context=gg(null),n=e.current,r=Ke(),i=xn(n),o=Zt(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,lo(e,i,r),tt(e,r),e}function pa(e,t,n,r){var i=t.current,o=Ke(),s=xn(i);return n=gg(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,s),e!==null&&(Pt(e,i,s,o),Yo(e,i,s)),s}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){jf(e,t),(e=e.alternate)&&jf(e,t)}function H1(){return null}var yg=typeof reportError=="function"?reportError:function(e){console.error(e)};function ed(e){this._internalRoot=e}ma.prototype.render=ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));pa(e,t,null,null)};ma.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){pa(null,e,null,null)}),t[nn]=null}};function ma(e){this._internalRoot=e}ma.prototype.unstable_scheduleHydration=function(e){if(e){var t=qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Yp(e)}};function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function W1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$s(s);o.call(u)}}var s=vg(t,r,e,0,null,!1,!1,"",Vf);return e._reactRootContainer=s,e[nn]=s.current,Bi(e.nodeType===8?e.parentNode:e),or(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$s(l);a.call(u)}}var l=Jc(e,0,!1,null,null,!1,!1,"",Vf);return e._reactRootContainer=l,e[nn]=l.current,Bi(e.nodeType===8?e.parentNode:e),or(function(){pa(t,l,n,r)}),l}function va(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=$s(s);a.call(l)}}pa(t,s,e,i)}else s=W1(n,t,e,i,r);return $s(s)}Kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(Sc(t,n|1),tt(t,_e()),!(K&6)&&(qr=_e()+500,zn()))}break;case 13:or(function(){var r=rn(e,1);if(r!==null){var i=Ke();Pt(r,e,1,i)}}),Zc(e,1)}};_c=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ke();Pt(t,e,134217728,n)}Zc(e,134217728)}};Gp=function(e){if(e.tag===13){var t=xn(e),n=rn(e,t);if(n!==null){var r=Ke();Pt(n,e,t,r)}Zc(e,t)}};qp=function(){return ee};Qp=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};su=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(k(90));Cp(r),Zl(r,i)}}}break;case"textarea":Pp(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};bp=qc;Mp=or;var K1={usingClientEntryPoint:!1,Events:[co,Tr,aa,Lp,Dp,qc]},mi={findFiberByHostInstance:Kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},G1={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Up(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{ra=Fo.inject(G1),$t=Fo}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(t))throw Error(k(200));return B1(e,t,null,n)};lt.createRoot=function(e,t){if(!td(e))throw Error(k(299));var n=!1,r="",i=yg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jc(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,Bi(e.nodeType===8?e.parentNode:e),new ed(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Up(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return or(e)};lt.hydrate=function(e,t,n){if(!ga(t))throw Error(k(200));return va(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!td(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=yg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vg(t,null,e,1,n??null,i,!1,o,s),e[nn]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ma(t)};lt.render=function(e,t,n){if(!ga(t))throw Error(k(200));return va(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!ga(e))throw Error(k(40));return e._reactRootContainer?(or(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};lt.unstable_batchedUpdates=qc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return va(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=lt})(Hy);var Bf=Wl;Hl.createRoot=Bf.createRoot,Hl.hydrateRoot=Bf.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const Hf="popstate";function q1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Uu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fs(i)}return Y1(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q1(){return Math.random().toString(36).substr(2,8)}function Wf(e,t){return{usr:e.state,key:e.key,idx:t}}function Uu(e,t,n,r){return n===void 0&&(n=null),Ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ri(t):t,{state:n,key:t&&t.key||r||Q1()})}function Fs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ri(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Y1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=En.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Ji({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=En.Pop;let _=f(),d=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:d})}function m(_,d){a=En.Push;let c=Uu(v.location,_,d);n&&n(c,_),u=f()+1;let p=Wf(c,u),y=v.createHref(c);try{s.pushState(p,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:v.location,delta:1})}function g(_,d){a=En.Replace;let c=Uu(v.location,_,d);n&&n(c,_),u=f();let p=Wf(c,u),y=v.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:v.location,delta:0})}function w(_){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof _=="string"?_:Fs(_);return Ae(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let v={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hf,h),l=_,()=>{i.removeEventListener(Hf,h),l=null}},createHref(_){return t(i,_)},createURL:w,encodeLocation(_){let d=w(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(_){return s.go(_)}};return v}var Kf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kf||(Kf={}));function X1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ri(t):t,i=rd(r.pathname||"/",n);if(i==null)return null;let o=wg(e);J1(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=aw(o[a],cw(i));return s}function wg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Nn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ow(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Sg(o.path))i(o,s,l)}),t}function Sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Sg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function J1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Z1=/^:\w+$/,ew=3,tw=2,nw=1,rw=10,iw=-2,Gf=e=>e==="*";function ow(e,t){let n=e.split("/"),r=n.length;return n.some(Gf)&&(r+=iw),t&&(r+=tw),n.filter(i=>!Gf(i)).reduce((i,o)=>i+(Z1.test(o)?ew:o===""?nw:rw),r)}function sw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function aw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=lw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:Nn([i,f.pathname]),pathnameBase:pw(Nn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Nn([i,f.pathnameBase]))}return o}function lw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[f]=dw(a[h]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function uw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cw(e){try{return decodeURI(e)}catch(t){return nd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dw(e,t){try{return decodeURIComponent(e)}catch(n){return nd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function rd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ri(e):e;return{pathname:n?n.startsWith("/")?n:hw(n,t):t,search:mw(r),hash:gw(i)}}function hw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _g(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Eg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ri(e):(i=Ji({},e),Ae(!i.pathname||!i.pathname.includes("?"),Tl("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Tl("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Tl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=fw(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),pw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ww=typeof Object.is=="function"?Object.is:yw,{useState:Sw,useEffect:_w,useLayoutEffect:Ew,useDebugValue:Iw}=Bl;function kw(e,t,n){const r=t(),[{inst:i},o]=Sw({inst:{value:r,getSnapshot:t}});return Ew(()=>{i.value=r,i.getSnapshot=t,Cl(i)&&o({inst:i})},[e,r,t]),_w(()=>(Cl(i)&&o({inst:i}),e(()=>{Cl(i)&&o({inst:i})})),[e]),Iw(r),r}function Cl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!ww(n,r)}catch{return!0}}function Tw(e,t,n){return t()}const Cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Aw=!Cw,Pw=Aw?Tw:kw;"useSyncExternalStore"in Bl&&(e=>e.useSyncExternalStore)(Bl);const Ig=I.createContext(null),kg=I.createContext(null),ho=I.createContext(null),ya=I.createContext(null),pr=I.createContext({outlet:null,matches:[]}),Tg=I.createContext(null);function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function Rw(e,t){let{relative:n}=t===void 0?{}:t;po()||Ae(!1);let{basename:r,navigator:i}=I.useContext(ho),{hash:o,pathname:s,search:a}=Ag(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Nn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function po(){return I.useContext(ya)!=null}function wa(){return po()||Ae(!1),I.useContext(ya).location}function Cg(){po()||Ae(!1);let{basename:e,navigator:t}=I.useContext(ho),{matches:n}=I.useContext(pr),{pathname:r}=wa(),i=JSON.stringify(_g(n).map(a=>a.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Eg(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Nn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function xw(){let{matches:e}=I.useContext(pr),t=e[e.length-1];return t?t.params:{}}function Ag(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(pr),{pathname:i}=wa(),o=JSON.stringify(_g(r).map(s=>s.pathnameBase));return I.useMemo(()=>Eg(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Ow(e,t){po()||Ae(!1);let{navigator:n}=I.useContext(ho),r=I.useContext(kg),{matches:i}=I.useContext(pr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=wa(),u;if(t){var f;let v=typeof t=="string"?ri(t):t;a==="/"||(f=v.pathname)!=null&&f.startsWith(a)||Ae(!1),u=v}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=X1(e,{pathname:m}),w=bw(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Nn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Nn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?I.createElement(ya.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:En.Pop}},w):w}function Nw(){let e=Uw(),t=vw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}class Lw extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(pr.Provider,{value:this.props.routeContext},I.createElement(Tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Ig);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(pr.Provider,{value:t},r)}function bw(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ae(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=I.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=I.createElement(Nw,null));let f=t.concat(r.slice(0,a+1)),h=()=>{let m=o;return l?m=u:s.route.Component?m=I.createElement(s.route.Component,null):s.route.element&&(m=s.route.element),I.createElement(Dw,{match:s,routeContext:{outlet:o,matches:f},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?I.createElement(Lw,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var qf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(qf||(qf={}));var Us;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Us||(Us={}));function Mw(e){let t=I.useContext(kg);return t||Ae(!1),t}function $w(e){let t=I.useContext(pr);return t||Ae(!1),t}function Fw(e){let t=$w(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function Uw(){var e;let t=I.useContext(Tg),n=Mw(Us.UseRouteError),r=Fw(Us.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function rs(e){Ae(!1)}function zw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=En.Pop,navigator:o,static:s=!1}=e;po()&&Ae(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ri(r));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:g="default"}=r,w=I.useMemo(()=>{let v=rd(u,a);return v==null?null:{location:{pathname:v,search:f,hash:h,state:m,key:g},navigationType:i}},[a,u,f,h,m,g,i]);return w==null?null:I.createElement(ho.Provider,{value:l},I.createElement(ya.Provider,{children:n,value:w}))}function jw(e){let{children:t,location:n}=e,r=I.useContext(Ig),i=r&&!t?r.router.routes:ju(t);return Ow(i,n)}var Qf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Qf||(Qf={}));new Promise(()=>{});function ju(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,ju(r.props.children,t));return}r.type!==rs&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ju(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vu.apply(this,arguments)}function Vw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hw(e,t){return e.button===0&&(!t||t==="_self")&&!Bw(e)}const Ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Kw(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=q1({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(a),[o]),I.createElement(zw,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Gw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yf=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f}=t,h=Vw(t,Ww),{basename:m}=I.useContext(ho),g,w=!1;if(typeof u=="string"&&qw.test(u)&&(g=u,Gw)){let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=rd(p.pathname,m);p.origin===c.origin&&y!=null?u=y+p.search+p.hash:w=!0}let v=Rw(u,{relative:i}),_=Qw(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function d(c){r&&r(c),c.defaultPrevented||_(c)}return I.createElement("a",Vu({},h,{href:g||v,onClick:w||o?r:d,ref:n,target:l}))});var Xf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Xf||(Xf={}));var Jf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jf||(Jf={}));function Qw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Cg(),l=wa(),u=Ag(e,{relative:s});return I.useCallback(f=>{if(Hw(f,n)){f.preventDefault();let h=r!==void 0?r:Fs(l)===Fs(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Yw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[f],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Yw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new Xw;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jw=function(e){const t=Pg(e);return Rg.encodeByteArray(t,!0)},zs=function(e){return Jw(e).replace(/\./g,"")},xg=function(e){try{return Rg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=()=>Zw().__FIREBASE_DEFAULTS__,tS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xg(e[1]);return t&&JSON.parse(t)},id=()=>{try{return eS()||tS()||nS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Og=e=>{var t,n;return(n=(t=id())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rS=e=>{const t=Og(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},iS=()=>{var e;return(e=id())===null||e===void 0?void 0:e.config},Ng=e=>{var t;return(t=id())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[zs(JSON.stringify(n)),zs(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Lg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function lS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const e=Be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Dg(){try{return typeof indexedDB=="object"}catch{return!1}}function bg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function cS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=dS,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?fS(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ot(i,a,r)}}function fS(e,t){return e.replace(hS,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;function pS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Zf(o)&&Zf(s)){if(!Zi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mS(e,t){const n=new gS(e,t);return n.subscribe.bind(n)}class gS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Al),i.error===void 0&&(i.error=Al),i.complete===void 0&&(i.complete=Al);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Al(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=1e3,wS=2,SS=4*60*60*1e3,_S=.5;function eh(e,t=yS,n=wS){const r=t*Math.pow(n,e),i=Math.round(_S*r*(Math.random()-.5)*2);return Math.min(SS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return e&&e._delegate?e._delegate:e}class xt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new oS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kS(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IS(e){return e===Bn?void 0:e}function kS(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ES(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Z||(Z={}));const CS={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},AS=Z.INFO,PS={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},RS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=PS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sa{constructor(t){this.name=t,this._logLevel=AS,this._logHandler=RS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?CS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const xS=(e,t)=>t.some(n=>e instanceof n);let th,nh;function OS(){return th||(th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return nh||(nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,Bu=new WeakMap,$g=new WeakMap,Pl=new WeakMap,od=new WeakMap;function LS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ln(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Mg.set(n,e)}).catch(()=>{}),od.set(t,e),t}function DS(e){if(Bu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Bu.set(e,t)}let Hu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$g.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bS(e){Hu=e(Hu)}function MS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rl(this),t,...n);return $g.set(r,t.sort?t.sort():[t]),Ln(r)}:NS().includes(e)?function(...t){return e.apply(Rl(this),t),Ln(Mg.get(this))}:function(...t){return Ln(e.apply(Rl(this),t))}}function $S(e){return typeof e=="function"?MS(e):(e instanceof IDBTransaction&&DS(e),xS(e,OS())?new Proxy(e,Hu):e)}function Ln(e){if(e instanceof IDBRequest)return LS(e);if(Pl.has(e))return Pl.get(e);const t=$S(e);return t!==e&&(Pl.set(e,t),od.set(t,e)),t}const Rl=e=>od.get(e);function Fg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ln(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ln(s.result),l.oldVersion,l.newVersion,Ln(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FS=["get","getKey","getAll","getAllKeys","count"],US=["put","add","delete","clear"],xl=new Map;function rh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xl.get(t))return xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=US.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xl.set(t,o),o}bS(e=>({...e,get:(t,n,r)=>rh(t,n)||e.get(t,n,r),has:(t,n)=>!!rh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wu="@firebase/app",ih="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Sa("@firebase/app"),VS="@firebase/app-compat",BS="@firebase/analytics-compat",HS="@firebase/analytics",WS="@firebase/app-check-compat",KS="@firebase/app-check",GS="@firebase/auth",qS="@firebase/auth-compat",QS="@firebase/database",YS="@firebase/database-compat",XS="@firebase/functions",JS="@firebase/functions-compat",ZS="@firebase/installations",e_="@firebase/installations-compat",t_="@firebase/messaging",n_="@firebase/messaging-compat",r_="@firebase/performance",i_="@firebase/performance-compat",o_="@firebase/remote-config",s_="@firebase/remote-config-compat",a_="@firebase/storage",l_="@firebase/storage-compat",u_="@firebase/firestore",c_="@firebase/firestore-compat",d_="firebase",f_="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="[DEFAULT]",h_={[Wu]:"fire-core",[VS]:"fire-core-compat",[HS]:"fire-analytics",[BS]:"fire-analytics-compat",[KS]:"fire-app-check",[WS]:"fire-app-check-compat",[GS]:"fire-auth",[qS]:"fire-auth-compat",[QS]:"fire-rtdb",[YS]:"fire-rtdb-compat",[XS]:"fire-fn",[JS]:"fire-fn-compat",[ZS]:"fire-iid",[e_]:"fire-iid-compat",[t_]:"fire-fcm",[n_]:"fire-fcm-compat",[r_]:"fire-perf",[i_]:"fire-perf-compat",[o_]:"fire-rc",[s_]:"fire-rc-compat",[a_]:"fire-gcs",[l_]:"fire-gcs-compat",[u_]:"fire-fst",[c_]:"fire-fst-compat","fire-js":"fire-js",[d_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map,Gu=new Map;function p_(e,t){try{e.container.addComponent(t)}catch(n){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jt(e){const t=e.name;if(Gu.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;Gu.set(t,e);for(const n of js.values())p_(n,e);return!0}function gr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new mr("app","Firebase",m_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=f_;function Ug(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ku,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=iS()),!n)throw Dn.create("no-options");const o=js.get(i);if(o){if(Zi(n,o.options)&&Zi(r,o.config))return o;throw Dn.create("duplicate-app",{appName:i})}const s=new TS(i);for(const l of Gu.values())s.addComponent(l);const a=new g_(n,r,s);return js.set(i,a),a}function sd(e=Ku){const t=js.get(e);if(!t&&e===Ku)return Ug();if(!t)throw Dn.create("no-app",{appName:e});return t}function vt(e,t,n){var r;let i=(r=h_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}jt(new xt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebase-heartbeat-database",y_=1,eo="firebase-heartbeat-store";let Ol=null;function zg(){return Ol||(Ol=Fg(v_,y_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(eo)}}}).catch(e=>{throw Dn.create("idb-open",{originalErrorMessage:e.message})})),Ol}async function w_(e){try{return(await zg()).transaction(eo).objectStore(eo).get(jg(e))}catch(t){if(t instanceof Ot)sr.warn(t.message);else{const n=Dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sr.warn(n.message)}}}async function oh(e,t){try{const r=(await zg()).transaction(eo,"readwrite");return await r.objectStore(eo).put(t,jg(e)),r.done}catch(n){if(n instanceof Ot)sr.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function jg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=1024,__=30*24*60*60*1e3;class E_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=__}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sh(),{heartbeatsToSend:n,unsentEntries:r}=I_(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sh(){return new Date().toISOString().substring(0,10)}function I_(e,t=S_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ah(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ah(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dg()?bg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await w_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ah(e){return zs(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(e){jt(new xt("platform-logger",t=>new zS(t),"PRIVATE")),jt(new xt("heartbeat",t=>new E_(t),"PRIVATE")),vt(Wu,ih,e),vt(Wu,ih,"esm2017"),vt("fire-js","")}T_("");var C_="firebase",A_="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(C_,A_,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Sa("@firebase/firestore");function Vs(e,...t){if(Qr.logLevel<=Z.DEBUG){const n=t.map(ld);Qr.debug(`Firestore (${ii}): ${e}`,...n)}}function ad(e,...t){if(Qr.logLevel<=Z.ERROR){const n=t.map(ld);Qr.error(`Firestore (${ii}): ${e}`,...n)}}function Vg(e,...t){if(Qr.logLevel<=Z.WARN){const n=t.map(ld);Qr.warn(`Firestore (${ii}): ${e}`,...n)}}function ld(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e="Unexpected state"){const t=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+e;throw ad(t),new Error(t)}function sn(e,t){e||Vt()}function ud(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="ok",P_="cancelled",Ri="unknown",ie="invalid-argument",R_="deadline-exceeded",x_="not-found",O_="permission-denied",qu="unauthenticated",N_="resource-exhausted",Yr="failed-precondition",L_="aborted",D_="out-of-range",Bg="unimplemented",b_="internal",M_="unavailable";let V=class extends Ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},$_=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}},F_=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},U_=class{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(sn(typeof t.accessToken=="string"),new Hg(t.accessToken,new Ye(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}},z_=class{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(sn(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}},j_=class{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new z_(this.t,this.i,this.o,this.u))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}},V_=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},B_=class{constructor(t){this.m=t,this.appCheck=null,t.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(sn(typeof t.token=="string"),new V_(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H_=class{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}},Wg=class Qu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Qu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Qu&&t.projectId===this.projectId&&t.database===this.database}},Kg=class Yu{constructor(t,n,r){n===void 0?n=0:n>t.length&&Vt(),r===void 0?r=t.length-n:r>t.length-n&&Vt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Yu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Yu?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}};class We extends Kg{construct(t,n,r){return new We(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(ie,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const W_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Kg{construct(t,n,r){return new bt(t,n,r)}static isValidIdentifier(t){return W_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(ie,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new V(ie,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(ie,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new V(ie,"Unterminated ` in path: "+t);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.path=t}static fromPath(t){return new mt(We.fromString(t))}static fromName(t){return new mt(We.fromString(t).popFirst(5))}static empty(){return new mt(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&We.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return We.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mt(new We(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e,t,n){if(!n)throw new V(ie,`Function ${e}() cannot be called with an empty ${t}.`)}function uh(e){if(mt.isDocumentKey(e))throw new V(ie,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function G_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Vt()}function Gg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new V(ie,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=G_(e);throw new V(ie,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function q_(){return Uo===null?Uo=268435456+Math.round(2147483648*Math.random()):Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(e){return e==null}function ch(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dh,W;function fh(e){if(e===void 0)return ad("RPC_ERROR","HTTP error has no status"),Ri;switch(e){case 200:return lh;case 400:return Yr;case 401:return qu;case 403:return O_;case 404:return x_;case 409:return L_;case 416:return D_;case 429:return N_;case 499:return P_;case 500:return Ri;case 501:return Bg;case 503:return M_;case 504:return R_;default:return e>=200&&e<300?lh:e>=400&&e<500?Yr:e>=500&&e<600?b_:Ri}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(W=dh||(dh={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";class X_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.p=n+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}A(t,n,r,i,o){const s=q_(),a=this.I(t,n);Vs("RestConnection",`Sending RPC '${t}' ${s}:`,a,r);const l={};return this.T(l,i,o),this.R(t,a,l,r).then(u=>(Vs("RestConnection",`Received RPC '${t}' ${s}: `,u),u),u=>{throw Vg("RestConnection",`RPC '${t}' ${s} failed with error: `,u,"url: ",a,"request:",r),u})}P(t,n,r,i,o,s){return this.A(t,n,r,i,o)}T(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+ii,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}I(t,n){const r=Y_[t];return`${this.p}/v1/${n}:${r}`}}{constructor(t,n){super(t),this.V=n}$(t,n){throw new Error("Not supported by FetchConnection")}async R(t,n,r,i){var o;const s=JSON.stringify(i);let a;try{a=await this.V(n,{method:"POST",headers:r,body:s})}catch(l){const u=l;throw new V(fh(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(o=l==null?void 0:l.error)===null||o===void 0?void 0:o.message;throw new V(fh(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}function Pe(e,t){return e<t?-1:e>t?1:0}function J_(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cd(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new Z_("Invalid base64 string: "+i):i}}(t);return new an(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new an(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}an.EMPTY_BYTE_STRING=new an("");const eE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(e){if(sn(!!e),typeof e=="string"){let t=0;const n=eE.exec(e);if(sn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Te(e.seconds),nanos:Te(e.nanos)}}function Te(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function to(e){return typeof e=="string"?an.fromBase64String(e):an.fromUint8Array(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new V(ie,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(ie,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new V(ie,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(ie,"Timestamp seconds out of range: "+t)}static now(){return en.fromMillis(Date.now())}static fromDate(t){return en.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new en(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pe(this.nanoseconds,t.nanoseconds):Pe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qg(e){const t=e.mapValue.fields.__previous_value__;return qg(t)?Qg(t):t}function no(e){const t=ar(e.mapValue.fields.__local_write_time__.timestampValue);return new en(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo={fields:{__type__:{stringValue:"__max__"}}};function lr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qg(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:Vt()}function Bs(e,t){if(e===t)return!0;const n=lr(e);if(n!==lr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return no(e).isEqual(no(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ar(r.timestampValue),s=ar(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return to(r.bytesValue).isEqual(to(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Te(r.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(r.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Te(r.integerValue)===Te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Te(r.doubleValue),s=Te(i.doubleValue);return o===s?ch(o)===ch(s):isNaN(o)&&isNaN(s)}return!1}(e,t);case 9:return J_(e.arrayValue.values||[],t.arrayValue.values||[],Bs);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(hh(o)!==hh(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!Bs(o[a],s[a])))return!1;return!0}(e,t);default:return Vt()}}function ro(e,t){return(e.values||[]).find(n=>Bs(n,t))!==void 0}function Hs(e,t){if(e===t)return 0;const n=lr(e),r=lr(t);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(e.booleanValue,t.booleanValue);case 2:return function(i,o){const s=Te(i.integerValue||i.doubleValue),a=Te(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(e,t);case 3:return ph(e.timestampValue,t.timestampValue);case 4:return ph(no(e),no(t));case 5:return Pe(e.stringValue,t.stringValue);case 6:return function(i,o){const s=to(i),a=to(o);return s.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=Pe(s[l],a[l]);if(u!==0)return u}return Pe(s.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const s=Pe(Te(i.latitude),Te(o.latitude));return s!==0?s:Pe(Te(i.longitude),Te(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=Hs(s[l],a[l]);if(u)return u}return Pe(s.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===zo&&o===zo)return 0;if(i===zo)return 1;if(o===zo)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let f=0;f<a.length&&f<u.length;++f){const h=Pe(a[f],u[f]);if(h!==0)return h;const m=Hs(s[a[f]],l[u[f]]);if(m!==0)return m}return Pe(a.length,u.length)}(e.mapValue,t.mapValue);default:throw Vt()}}function ph(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Pe(e,t);const n=ar(e),r=ar(t),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function Yg(e){return!!e&&"arrayValue"in e}function mh(e){return!!e&&"nullValue"in e}function gh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nl(e){return!!e&&"mapValue"in e}function xi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cd(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xi(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xi(e.arrayValue.values[n]);return t}return Object.assign({},e)}class vh{constructor(t,n){this.position=t,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{}class Wt extends Xg{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new tE(t,n,r):n==="array-contains"?new iE(t,r):n==="in"?new oE(t,r):n==="not-in"?new sE(t,r):n==="array-contains-any"?new aE(t,r):new Wt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new nE(t,r):new rE(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Vt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}let Jg=class Zg extends Xg{constructor(t,n){super(),this.filters=t,this.op=n,this.S=null}static create(t,n){return new Zg(t,n)}matches(t){return this.op==="and"?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.q(n=>n.isInequality());return t!==null?t.field:null}q(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}},tE=class extends Wt{constructor(t,n,r){super(t,n,r),this.key=mt.fromName(r.referenceValue)}matches(t){const n=mt.comparator(t.key,this.key);return this.matchesComparison(n)}},nE=class extends Wt{constructor(t,n){super(t,"in",n),this.keys=ev("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}},rE=class extends Wt{constructor(t,n){super(t,"not-in",n),this.keys=ev("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}};function ev(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>mt.fromName(r.referenceValue))}let iE=class extends Wt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Yg(n)&&ro(n.arrayValue,this.value)}},oE=class extends Wt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}},sE=class extends Wt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}},aE=class extends Wt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is=class{constructor(t,n="asc"){this.field=t,this.dir=n}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt=class os{constructor(t){this.timestamp=t}static fromTimestamp(t){return new os(t)}static min(){return new os(new en(0,0))}static max(){return new os(new en(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=class Xu{constructor(t){this.value=t}static empty(){return new Xu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xi(n)}setAll(t){let n=bt.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=xi(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Bs(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){cd(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Xu(xi(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lE=class Hn{constructor(t,n,r,i,o,s,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(t){return new Hn(t,0,dt.min(),dt.min(),dt.min(),yr.empty(),0)}static newFoundDocument(t,n,r,i){return new Hn(t,1,n,dt.min(),r,i,0)}static newNoDocument(t,n){return new Hn(t,2,n,dt.min(),dt.min(),yr.empty(),0)}static newUnknownDocument(t,n){return new Hn(t,3,n,dt.min(),dt.min(),yr.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(dt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Hn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uE=class{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.O=null}};function yh(e,t=null,n=[],r=[],i=null,o=null,s=null){return new uE(e,t,n,r,i,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cE=class{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.k=null,this.C=null,this.startAt,this.endAt}};function dE(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fE(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function wh(e){const t=ud(e);if(t.k===null){t.k=[];const n=fE(t),r=dE(t);if(n!==null&&r===null)n.isKeyField()||t.k.push(new is(n)),t.k.push(new is(bt.keyField(),"asc"));else{let i=!1;for(const o of t.explicitOrderBy)t.k.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.k.push(new is(bt.keyField(),o))}}}return t.k}function hE(e){const t=ud(e);if(!t.C)if(t.limitType==="F")t.C=yh(t.path,t.collectionGroup,wh(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const o of wh(t)){const s=o.dir==="desc"?"asc":"desc";n.push(new is(o.field,s))}const r=t.endAt?new vh(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new vh(t.startAt.position,t.startAt.inclusive):null;t.C=yh(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.C}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gE=(()=>({and:"AND",or:"OR"}))();let vE=class{constructor(t,n){this.databaseId=t,this.L=n}};function Sh(e){return sn(!!e),dt.fromTimestamp(function(t){const n=ar(t);return new en(n.seconds,n.nanos)}(e))}function yE(e,t){return function(n){return new We(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function wE(e,t){const n=function(i){const o=We.fromString(i);return sn(nv(o)),o}(t);if(n.get(1)!==e.databaseId.projectId)throw new V(ie,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new V(ie,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new mt((sn((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function _h(e,t){return yE(e.databaseId,t)}function SE(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=_h(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=_h(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return tv(Jg.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:wr(f.field),direction:_E(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.L||Q_(u)?u:{value:u}}(e,t.limit);var a;return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function _E(e){return pE[e]}function EE(e){return mE[e]}function IE(e){return gE[e]}function wr(e){return{fieldPath:e.canonicalString()}}function tv(e){return e instanceof Wt?function(t){if(t.op==="=="){if(gh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(mh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(mh(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:EE(t.op),value:t.value}}}(e):e instanceof Jg?function(t){const n=t.getFilters().map(r=>tv(r));return n.length===1?n[0]:{compositeFilter:{op:IE(t.op),filters:n}}}(e):Vt()}function nv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(e){return new vE(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.M=i,this.et=!1}nt(){if(this.et)throw new V(Yr,"The client has already been terminated.")}A(t,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.A(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===qu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(Ri,i.toString())})}P(t,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.P(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===qu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(Ri,o.toString())})}terminate(){this.et=!0}}async function CE(e,t){const n=ud(e),r=SE(n.M,hE(t));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,s,a){const l=wE(o,s.name),u=Sh(s.updateTime),f=s.createTime?Sh(s.createTime):dt.min(),h=new yr({mapValue:{fields:s.fields}}),m=lE.newFoundDocument(l,u,f,h);return a&&m.setHasCommittedMutations(),a?m.setHasCommittedMutations():m}(n.M,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Map;function AE(e){if(e._terminated)throw new V(Yr,"The client has already been terminated.");if(!Oi.has(e)){Vs("ComponentProvider","Initializing Datastore");const o=function(l){return new X_(l,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new H_(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=kE(e._databaseId),a=function(l,u,f,h){return new TE(l,u,f,h)}(e._authCredentials,e._appCheckCredentials,o,s);Oi.set(e,a)}var t,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Oi.get(e)}class Eh{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new V(ie,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new V(ie,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,i,o,s){if(i===!0&&s===!0)throw new V(ie,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(Yr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new V(Yr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $_;switch(n.type){case"gapi":const r=n.client;return new j_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(ie,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Oi.get(t);n&&(Vs("ComponentProvider","Removing Datastore"),Oi.delete(t),n.terminate())}(this),Promise.resolve()}}function PE(e,t){const n=typeof e=="object"?e:sd(),r=typeof e=="string"?e:t||"(default)",i=gr(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=rS("firestore");o&&RE(i,...o)}return i}function RE(e,t,n,r={}){var i;const o=(e=Gg(e,dd))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&Vg("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Ye.MOCK_USER;else{s=sS(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(ie,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(l)}e._authCredentials=new F_(new Hg(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oi(this.firestore,t,this._key)}}class _a{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _a(this.firestore,t,this._query)}}class Ur extends _a{constructor(t,n,r){super(t,n,new cE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oi(this.firestore,null,new mt(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function xE(e,t,...n){if(e=Ht(e),K_("collection","path",t),e instanceof dd){const r=We.fromString(t,...n);return uh(r),new Ur(e,null,r)}{if(!(e instanceof oi||e instanceof Ur))throw new V(ie,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(We.fromString(t,...n));return uh(r),new Ur(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ws(an.fromBase64String(t))}catch(n){throw new V(ie,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ws(an.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new V(ie,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new V(ie,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new V(ie,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pe(this._lat,t._lat)||Pe(this._long,t._long)}}const NE=new RegExp("[~\\*/\\[\\]]");function LE(e,t,n){if(t.search(NE)>=0)throw Ih(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rv(...t.split("."))._internalPath}catch{throw Ih(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ih(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new V(ie,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new oi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ME("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iv extends DE{data(){return super.data()}}class bE{constructor(t,n){this._docs=n,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,n){this._docs.forEach(t,n)}}function ME(e,t){return typeof t=="string"?LE(e,t):t instanceof rv?t._internalPath:t._delegate._internalPath}class $E extends class{convertValue(t,n="none"){switch(lr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Te(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(to(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Vt()}}convertObject(t,n){const r={};return cd(t.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new OE(Te(t.latitude),Te(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Qg(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const n=ar(t);return new en(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=We.fromString(t);sn(nv(r));const i=new Wg(r.get(1),r.get(3)),o=new mt(r.popFirst(5));return i.isEqual(n)||ad(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ws(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new oi(this.firestore,null,n)}}function FE(e){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(Bg,"limitToLast() queries require specifying at least one orderBy() clause")})((e=Gg(e,_a))._query);const t=AE(e.firestore),n=new $E(e.firestore);return CE(t,e._query).then(r=>{const i=r.map(o=>new iv(e.firestore,n,o.key,o,e.converter));return e._query.limitType==="L"&&i.reverse(),new bE(e,i)})}(function(e){ii=e})(`${go}_lite`),jt(new xt("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new dd(new U_(e.getProvider("auth-internal")),new B_(e.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new V(ie,'"projectId" not provided in firebase.initializeApp.');return new Wg(o.options.projectId,s)}(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),vt("firestore-lite","3.9.0",""),vt("firestore-lite","3.9.0","esm2017");const ov="@firebase/installations",fd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=1e4,av=`w:${fd}`,lv="FIS_v2",UE="https://firebaseinstallations.googleapis.com/v1",zE=60*60*1e3,jE="installations",VE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ur=new mr(jE,VE,BE);function uv(e){return e instanceof Ot&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv({projectId:e}){return`${UE}/projects/${e}/installations`}function dv(e){return{token:e.token,requestStatus:2,expiresIn:WE(e.expiresIn),creationTime:Date.now()}}async function fv(e,t){const r=(await t.json()).error;return ur.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function HE(e,{refreshToken:t}){const n=hv(e);return n.append("Authorization",KE(t)),n}async function pv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function WE(e){return Number(e.replace("s","000"))}function KE(e){return`${lv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=cv(e),i=hv(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:lv,appId:e.appId,sdkVersion:av},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await pv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:dv(u.authToken)}}else throw await fv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^[cdef][\w-]{21}$/,Ju="";function YE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=XE(e);return QE.test(n)?n:Ju}catch{return Ju}}function XE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;function vv(e,t){const n=Ea(e);yv(n,t),JE(n,t)}function yv(e,t){const n=gv.get(e);if(n)for(const r of n)r(t)}function JE(e,t){const n=ZE();n&&n.postMessage({key:e,fid:t}),eI()}let Qn=null;function ZE(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=e=>{yv(e.data.key,e.data.fid)}),Qn}function eI(){gv.size===0&&Qn&&(Qn.close(),Qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-installations-database",nI=1,cr="firebase-installations-store";let Ll=null;function hd(){return Ll||(Ll=Fg(tI,nI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}})),Ll}async function Ks(e,t){const n=Ea(e),i=(await hd()).transaction(cr,"readwrite"),o=i.objectStore(cr),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&vv(e,t.fid),t}async function wv(e){const t=Ea(e),r=(await hd()).transaction(cr,"readwrite");await r.objectStore(cr).delete(t),await r.done}async function Ia(e,t){const n=Ea(e),i=(await hd()).transaction(cr,"readwrite"),o=i.objectStore(cr),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&vv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(e){let t;const n=await Ia(e.appConfig,r=>{const i=rI(r),o=iI(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ju?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function rI(e){const t=e||{fid:YE(),registrationStatus:0};return Sv(t)}function iI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=oI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:sI(e)}:{installationEntry:t}}async function oI(e,t){try{const n=await GE(e,t);return Ks(e.appConfig,n)}catch(n){throw uv(n)&&n.customData.serverCode===409?await wv(e.appConfig):await Ks(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function sI(e){let t=await kh(e.appConfig);for(;t.registrationStatus===1;)await mv(100),t=await kh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pd(e);return r||n}return t}function kh(e){return Ia(e,t=>{if(!t)throw ur.create("installation-not-found");return Sv(t)})}function Sv(e){return aI(e)?{fid:e.fid,registrationStatus:0}:e}function aI(e){return e.registrationStatus===1&&e.registrationTime+sv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI({appConfig:e,heartbeatServiceProvider:t},n){const r=uI(e,n),i=HE(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:av,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await pv(()=>fetch(r,a));if(l.ok){const u=await l.json();return dv(u)}else throw await fv("Generate Auth Token",l)}function uI(e,{fid:t}){return`${cv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(e,t=!1){let n;const r=await Ia(e.appConfig,o=>{if(!_v(o))throw ur.create("not-registered");const s=o.authToken;if(!t&&fI(s))return o;if(s.requestStatus===1)return n=cI(e,t),o;{if(!navigator.onLine)throw ur.create("app-offline");const a=pI(o);return n=dI(e,a),a}});return n?await n:r.authToken}async function cI(e,t){let n=await Th(e.appConfig);for(;n.authToken.requestStatus===1;)await mv(100),n=await Th(e.appConfig);const r=n.authToken;return r.requestStatus===0?md(e,t):r}function Th(e){return Ia(e,t=>{if(!_v(t))throw ur.create("not-registered");const n=t.authToken;return mI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function dI(e,t){try{const n=await lI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ks(e.appConfig,r),n}catch(n){if(uv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ks(e.appConfig,r)}throw n}}function _v(e){return e!==void 0&&e.registrationStatus===2}function fI(e){return e.requestStatus===2&&!hI(e)}function hI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zE}function pI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mI(e){return e.requestStatus===1&&e.requestTime+sv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(e){const t=e,{installationEntry:n,registrationPromise:r}=await pd(t);return r?r.catch(console.error):md(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(e,t=!1){const n=e;return await yI(n),(await md(n,t)).token}async function yI(e){const{registrationPromise:t}=await pd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(e){if(!e||!e.options)throw Dl("App Configuration");if(!e.name)throw Dl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Dl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Dl(e){return ur.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="installations",SI="installations-internal",_I=e=>{const t=e.getProvider("app").getImmediate(),n=wI(t),r=gr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EI=e=>{const t=e.getProvider("app").getImmediate(),n=gr(t,Ev).getImmediate();return{getId:()=>gI(n),getToken:i=>vI(n,i)}};function II(){jt(new xt(Ev,_I,"PUBLIC")),jt(new xt(SI,EI,"PRIVATE"))}II();vt(ov,fd);vt(ov,fd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="analytics",kI="firebase_id",TI="origin",CI=60*1e3,AI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Iv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Sa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function PI(e,t){const n=document.createElement("script");n.src=`${Iv}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function RI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xI(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await kv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){st.error(a)}e("config",i,o)}async function OI(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await kv(n);for(const l of s){const u=a.find(h=>h.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){st.error(o)}}function NI(e,t,n,r){async function i(o,s,a){try{o==="event"?await OI(e,t,n,s,a):o==="config"?await xI(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){st.error(l)}}return i}function LI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=NI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function DI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Iv)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},yt=new mr("analytics","Analytics",bI);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=30,$I=1e3;class FI{constructor(t={},n=$I){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Tv=new FI;function UI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function zI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:UI(r)},o=AI.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw yt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function jI(e,t=Tv,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw yt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw yt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new HI;return setTimeout(async()=>{a.abort()},n!==void 0?n:CI),Cv({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Cv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Tv){var o;const{appId:s,measurementId:a}=e;try{await VI(r,t)}catch(l){if(a)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await zI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!BI(u)){if(i.deleteThrottleMetadata(s),a)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?eh(n,i.intervalMillis,MI):eh(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,h),st.debug(`Calling attemptFetch again in ${f} millis`),Cv(e,h,r,i)}}function VI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(yt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function BI(e){if(!(e instanceof Ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class HI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function WI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(){if(Dg())try{await bg()}catch(e){return st.warn(yt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return st.warn(yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GI(e,t,n,r,i,o,s){var a;const l=jI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>st.error(g)),t.push(l);const u=KI().then(g=>{if(g)return r.getId()}),[f,h]=await Promise.all([l,u]);DI(o)||PI(o,f.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[TI]="firebase",m.update=!0,h!=null&&(m[kI]=h),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t){this.app=t}_delete(){return delete Ni[this.app.options.appId],Promise.resolve()}}let Ni={},Ch=[];const Ah={};let bl="dataLayer",QI="gtag",Ph,Av,Rh=!1;function YI(){const e=[];if(Lg()&&e.push("This is a browser extension environment."),cS()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=yt.create("invalid-analytics-context",{errorInfo:t});st.warn(n.message)}}function XI(e,t,n){YI();const r=e.options.appId;if(!r)throw yt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yt.create("no-api-key");if(Ni[r]!=null)throw yt.create("already-exists",{id:r});if(!Rh){RI(bl);const{wrappedGtag:o,gtagCore:s}=LI(Ni,Ch,Ah,bl,QI);Av=o,Ph=s,Rh=!0}return Ni[r]=GI(e,Ch,Ah,t,Ph,bl,n),new qI(e)}function JI(e=sd()){e=Ht(e);const t=gr(e,Gs);return t.isInitialized()?t.getImmediate():ZI(e)}function ZI(e,t={}){const n=gr(e,Gs);if(n.isInitialized()){const i=n.getImmediate();if(Zi(t,n.getOptions()))return i;throw yt.create("already-initialized")}return n.initialize({options:t})}function ek(e,t,n,r){e=Ht(e),WI(Av,Ni[e.app.options.appId],t,n,r).catch(i=>st.error(i))}const xh="@firebase/analytics",Oh="0.9.4";function tk(){jt(new xt(Gs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return XI(r,i,n)},"PUBLIC")),jt(new xt("analytics-internal",e,"PRIVATE")),vt(xh,Oh),vt(xh,Oh,"esm2017");function e(t){try{const n=t.getProvider(Gs).getImmediate();return{logEvent:(r,i,o)=>ek(n,r,i,o)}}catch(n){throw yt.create("interop-component-reg-failed",{reason:n})}}}tk();function gd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Pv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nk=Pv,Rv=new mr("auth","Firebase",Pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new Sa("@firebase/auth");function ss(e,...t){Nh.logLevel<=Z.ERROR&&Nh.error(`Auth (${go}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,...t){throw vd(e,...t)}function Ut(e,...t){return vd(e,...t)}function xv(e,t,n){const r=Object.assign(Object.assign({},nk()),{[t]:n});return new mr("auth","Firebase",r).create(t,{appName:e.name})}function rk(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Bt(e,"argument-error"),xv(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Rv.create(e,...t)}function F(e,t,...n){if(!e)throw vd(t,...n)}function Yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ss(t),new Error(t)}function ln(e,t){e||Yt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map;function Xt(e){ln(e instanceof Function,"Expected a class definition");let t=Lh.get(e);return t?(ln(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lh.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(e,t){const n=gr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Zi(o,t??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:t})}function ok(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function sk(){return Dh()==="http:"||Dh()==="https:"}function Dh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sk()||Lg()||"connection"in navigator)?navigator.onLine:!0}function lk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n){this.shortDelay=t,this.longDelay=n,ln(n>t,"Short delay should be less than long delay!"),this.isMobile=aS()||lS()}get(){return ak()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e,t){ln(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new vo(3e4,6e4);function dk(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ka(e,t,n,r,i={}){return Nv(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=mo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ov.fetch()(Lv(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Nv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uk),t);try{const i=new hk(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw jo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw jo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw jo(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xv(e,f,u);Bt(e,f)}}catch(i){if(i instanceof Ot)throw i;Bt(e,"internal-error",{message:String(i)})}}async function fk(e,t,n,r,i={}){const o=await ka(e,t,n,r,i);return"mfaPendingCredential"in o&&Bt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Lv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?yd(e.config,i):`${e.config.apiScheme}://${i}`}class hk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(e,t){return ka(e,"POST","/v1/accounts:delete",t)}async function mk(e,t){return ka(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gk(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=wd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Li(Ml(i.auth_time)),issuedAtTime:Li(Ml(i.iat)),expirationTime:Li(Ml(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ml(e){return Number(e)*1e3}function wd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=xg(n);return i?JSON.parse(i):(ss("Failed to decode base64 JWT payload"),null)}catch(i){return ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vk(e){const t=wd(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&yk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function yk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await io(e,mk(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ek(o.providerUserInfo):[],a=_k(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Dv(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function Sk(e){const t=Ht(e);await qs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _k(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ek(e){return e.map(t=>{var{providerId:n}=t,r=gd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(e,t){const n=await Nv(e,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Lv(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ik(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new oo;return r&&(F(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class er{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=gd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await io(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gk(this,t)}reload(){return Sk(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new er(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await io(this,pk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:y,isAnonymous:E,providerData:A,stsTokenManager:P}=n;F(p&&P,t,"internal-error");const T=oo.fromJSON(this.name,P);F(typeof p=="string",t,"internal-error"),fn(h,t.name),fn(m,t.name),F(typeof y=="boolean",t,"internal-error"),F(typeof E=="boolean",t,"internal-error"),fn(g,t.name),fn(w,t.name),fn(v,t.name),fn(_,t.name),fn(d,t.name),fn(c,t.name);const U=new er({uid:p,auth:t,email:m,emailVerified:y,displayName:h,isAnonymous:E,photoURL:w,phoneNumber:g,tenantId:v,stsTokenManager:T,createdAt:d,lastLoginAt:c});return A&&Array.isArray(A)&&(U.providerData=A.map(D=>Object.assign({},D))),_&&(U._redirectEventId=_),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new oo;i.updateFromServerResponse(n);const o=new er({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await qs(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}bv.type="NONE";const bh=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e,t,n){return`firebase:${e}:${t}:${n}`}class zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,o),this.fullPersistenceKey=as("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?er._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zr(Xt(bh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Xt(bh);const s=as(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=er._fromJSON(t,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new zr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new zr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zv(t))return"Blackberry";if(jv(t))return"Webos";if(Sd(t))return"Safari";if((t.includes("chrome/")||$v(t))&&!t.includes("edge/"))return"Chrome";if(Uv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mv(e=Be()){return/firefox\//i.test(e)}function Sd(e=Be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $v(e=Be()){return/crios\//i.test(e)}function Fv(e=Be()){return/iemobile/i.test(e)}function Uv(e=Be()){return/android/i.test(e)}function zv(e=Be()){return/blackberry/i.test(e)}function jv(e=Be()){return/webos/i.test(e)}function Ta(e=Be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kk(e=Be()){var t;return Ta(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Tk(){return uS()&&document.documentMode===10}function Vv(e=Be()){return Ta(e)||Uv(e)||jv(e)||zv(e)||/windows phone/i.test(e)||Fv(e)}function Ck(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(e,t=[]){let n;switch(e){case"Browser":n=Mh(Be());break;case"Worker":n=`${Mh(Be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${go}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $h(this),this.idTokenSubscription=new $h(this),this.beforeStateQueue=new Ak(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ht(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Xt(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return F(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ca(e){return Ht(e)}class $h{constructor(t){this.auth=t,this.observer=null,this.addObserver=mS(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rk(e,t,n){const r=Ca(e);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Hv(t),{host:s,port:a}=xk(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ok()}function Hv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xk(e){const t=Hv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Fh(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Fh(s)}}}function Fh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ok(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(t){return Yt("not implemented")}_linkToIdToken(t,n){return Yt("not implemented")}_getReauthenticationResolver(t){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t){return fk(e,"POST","/v1/accounts:signInWithIdp",dk(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="http://localhost";class dr extends Wv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new dr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return jr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jr(t,n)}buildRequest(){const t={requestUri:Nk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=mo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends _d{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yo{constructor(){super("facebook.com")}static credential(t){return dr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dr._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends yo{constructor(){super("github.com")}static credential(t){return dr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yn.credential(t.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends yo{constructor(){super("twitter.com")}static credential(t,n){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await er._fromIdTokenResponse(t,r,i),s=Uh(r);return new Xr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Uh(r);return new Xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Uh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Ot{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Qs(t,n,r,i)}}function Kv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(e,o,t,r):o})}async function Lk(e,t,n=!1){const r=await io(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await io(e,Kv(r,i,t,e),n);F(o.idToken,r,"internal-error");const s=wd(o.idToken);F(s,r,"internal-error");const{sub:a}=s;return F(e.uid===a,r,"user-mismatch"),Xr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(e,t,n=!1){const r="signIn",i=await Kv(e,r,t),o=await Xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function Mk(e,t,n,r){return Ht(e).onIdTokenChanged(t,n,r)}function $k(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}function Fk(e,t,n,r){return Ht(e).onAuthStateChanged(t,n,r)}const Ys="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(){const e=Be();return Sd(e)||Ta(e)}const zk=1e3,jk=10;class qv extends Gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uk()&&Ck(),this.fallbackToPolling=Vv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Tk()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,jk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qv.type="LOCAL";const Vk=qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qv.type="SESSION";const Yv=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Aa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Bk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Ed("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function Wk(e){zt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function Kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function qk(){return Xv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",Qk=1,Xs="firebaseLocalStorage",Zv="fbase_key";class wo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(e,t){return e.transaction([Xs],t?"readwrite":"readonly").objectStore(Xs)}function Yk(){const e=indexedDB.deleteDatabase(Jv);return new wo(e).toPromise()}function ec(){const e=indexedDB.open(Jv,Qk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Xs,{keyPath:Zv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Xs)?t(r):(r.close(),await Yk(),t(await ec()))})})}async function zh(e,t,n){const r=Pa(e,!0).put({[Zv]:t,value:n});return new wo(r).toPromise()}async function Xk(e,t){const n=Pa(e,!1).get(t),r=await new wo(n).toPromise();return r===void 0?null:r.value}function jh(e,t){const n=Pa(e,!0).delete(t);return new wo(n).toPromise()}const Jk=800,Zk=3;class ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Zk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(qk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Kk(),!this.activeServiceWorker)return;this.sender=new Hk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Gk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ec();return await zh(t,Ys,"1"),await jh(t,Ys),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Xk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Pa(i,!1).getAll();return new wo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ey.type="LOCAL";const eT=ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function nT(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ut("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",tT().appendChild(r)})}function rT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e,t){return t?Xt(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Wv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iT(e){return bk(e.auth,new Id(e),e.bypassAuthState)}function oT(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Dk(n,new Id(e),e.bypassAuthState)}async function sT(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Lk(n,new Id(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iT;case"linkViaPopup":case"linkViaRedirect":return sT;case"reauthViaPopup":case"reauthViaRedirect":return oT;default:Bt(this.auth,"internal-error")}}resolve(t){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new vo(2e3,1e4);async function lT(e,t,n){const r=Ca(e);rk(e,t,_d);const i=ty(r,n);return new Yn(r,"signInViaPopup",t,i).executeNotNull()}class Yn extends ny{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const t=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,aT.get())};t()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="pendingRedirect",ls=new Map;class cT extends ny{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ls.get(this.auth._key());if(!t){try{const r=await dT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ls.set(this.auth._key(),t)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dT(e,t){const n=pT(t),r=hT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fT(e,t){ls.set(e._key(),t)}function hT(e){return Xt(e._redirectPersistence)}function pT(e){return as(uT,e.config.apiKey,e.name)}async function mT(e,t,n=!1){const r=Ca(e),i=ty(r,t),s=await new cT(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=10*60*1e3;class vT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ry(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(t))}saveEventToCache(t){this.cachedEventUids.add(Vh(t)),this.lastProcessedEventTime=Date.now()}}function Vh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ry({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ry(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(e,t={}){return ka(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_T=/^https?/;async function ET(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wT(e);for(const n of t)try{if(IT(n))return}catch{}Bt(e,"unauthorized-domain")}function IT(e){const t=Zu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!_T.test(n))return!1;if(ST.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new vo(3e4,6e4);function Bh(){const e=zt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function TT(e){return new Promise((t,n)=>{var r,i,o;function s(){Bh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bh(),n(Ut(e,"network-request-failed"))},timeout:kT.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=zt().gapi)===null||o===void 0)&&o.load)s();else{const a=rT("iframefcb");return zt()[a]=()=>{gapi.load?s():n(Ut(e,"network-request-failed"))},nT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw us=null,t})}let us=null;function CT(e){return us=us||TT(e),us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new vo(5e3,15e3),PT="__/auth/iframe",RT="emulator/auth/iframe",xT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NT(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yd(t,RT):`https://${e.config.authDomain}/${PT}`,r={apiKey:t.apiKey,appName:e.name,v:go},i=OT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${mo(r).slice(1)}`}async function LT(e){const t=await CT(e),n=zt().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:NT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ut(e,"network-request-failed"),a=zt().setTimeout(()=>{o(s)},AT.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bT=500,MT=600,$T="_blank",FT="http://localhost";class Hh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UT(e,t,n,r=bT,i=MT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},DT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Be().toLowerCase();n&&(a=$v(u)?$T:n),Mv(u)&&(t=t||FT,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(kk(u)&&a!=="_self")return zT(t||"",a),new Hh(null);const h=window.open(t||"",a,f);F(h,e,"popup-blocked");try{h.focus()}catch{}return new Hh(h)}function zT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="__/auth/handler",VT="emulator/auth/handler";function Wh(e,t,n,r,i,o){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:go,eventId:i};if(t instanceof _d){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",pS(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof yo){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${BT(e)}?${mo(a).slice(1)}`}function BT({config:e}){return e.emulator?yd(e,VT):`https://${e.authDomain}/${jT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="webStorageSupport";class HT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=mT,this._overrideRedirectResult=fT}async _openPopup(t,n,r,i){var o;ln((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Wh(t,n,r,Zu(),i);return UT(t,s,Ed())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Wk(Wh(t,n,r,Zu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ln(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await LT(t),r=new vT(t);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($l,{type:$l},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[$l];s!==void 0&&n(!!s),Bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ET(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vv()||Sd()||Ta()}}const WT=HT;var Kh="@firebase/auth",Gh="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qT(e){jt(new xt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{F(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),F(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(e)},f=new Pk(a,l,u);return ok(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),jt(new xt("auth-internal",t=>{const n=Ca(t.getProvider("auth").getImmediate());return(r=>new KT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Kh,Gh,GT(e)),vt(Kh,Gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=5*60,YT=Ng("authIdTokenMaxAge")||QT;let qh=null;const XT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YT)return;const i=n==null?void 0:n.token;qh!==i&&(qh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JT(e=sd()){const t=gr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ik(e,{popupRedirectResolver:WT,persistence:[eT,Vk,Yv]}),r=Ng("authTokenSyncURL");if(r){const o=XT(r);$k(n,o,()=>o(n.currentUser)),Mk(n,s=>o(s))}const i=Og("auth");return i&&Rk(n,`http://${i}`),n}qT("Browser");const ZT={apiKey:"AIzaSyDLJMQU6rx2L5bOszJ6ZgT2SwGEsDxK7rQ",authDomain:"mytaste-app.firebaseapp.com",databaseURL:"https://mytaste-app.firebaseio.com",projectId:"mytaste-app",storageBucket:"mytaste-app.appspot.com",messagingSenderId:"414485531416",appId:"1:414485531416:web:a537fe3c24c3938758ec6d"},kd=Ug(ZT);JI(kd);const eC=new Mt,iy=JT(kd),tC=PE(kd),nC="items",rC=async()=>{const e=xE(tC,nC);return(await FE(e)).docs.map(n=>n.data())};function iC(){const[e,t]=I.useState([]);return I.useEffect(()=>{rC().then(n=>{t(n)}).catch(n=>console.error(n.message))},[]),I.useEffect(()=>{Fk(iy,n=>{n?n.uid:console.log("user is logged out")})},[]),Wn("div",{children:[Ie("h1",{children:"Homepage"}),Ie(Yf,{to:"/login",children:"Login page"}),e.map(n=>Ie(Yf,{to:"/item/"+n.id,children:Wn("div",{children:[Ie("div",{children:n.image&&Ie("img",{src:n.image,className:"card-img-top",alt:"image",height:"100px"})}),Wn("div",{children:[Ie("h4",{children:n.title}),Wn("div",{children:[n.averageRatingCount||"0"," ",n.averageRatingCount===1?"vote":"votes"]})]})]})},n.id))]})}function oC(){const{id:e}=xw();return Wn("h1",{children:["Item: ",e]})}const sC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAuCAYAAAB50MjgAAAAAXNSR0IArs4c6QAAD0lJREFUeAHtXQt0VNW5/mbmzCOTCUQSQoJBQ0NijAHUAEJraAERWUixLNcS7L2XdhWsVWutfVBN24VrVS3UltZKl66mVaxU6b2ktyK9lEa4baQqLwuFVAIRkTSYGCE0k3memdNvnzOPM5MJTCaJhPT8a53M2Xv/Zz++/e3///eeMwAYYiBgIGAgYCDw74WAKWm4Ih29koqMpIHAJY2Awt5HL3UgevKbZn3r6G327MINZrOl6JIeptF5A4EkBMLh0Olgd/t9u9eV/5ZFYhFA0ulY7M5xP/v+MmfhDZP02TqNi3T75nEZD//Gf5FaN5odCQgIg251FWzgWF7mJYsxmcWfiEhmizTsiC/6NtwWYxQw4/PSQkDwmz2OWXY9+fUh0KU1KqO3BgLpIxDjuZ786T9uaBoIjAAEDPKPgEk0hpAZAgb5M8PNeGoEIGCQfwRMojGEzBAwyJ8ZbsZTIwABg/wjYBKNIWSGgEH+zHAznhoBCMQO/AdjLMGjTfBtrYd84jhCba1QggFY8sbCOvla2D81H7ZpMwejGaMOA4FBQWBQyB9qfx/d6x5B8OD+Xp0K/eMUxOXbvhVS1VSMWr0GlqLLe+kZGQYCHzUCAw57gk1/w9l7P5eS+MmDkQ8fRPf6x5OzjbSBwEVBYECWP9TZgXMPPwDF3Z3QeUvxFZBKy6GEw5BbmhFmCCREKqvAqO88lqA7lImi8RYsrbQgl6PsORdGw34ZhwNai6UVVjww3Yx9r/qxsW2Qe2Ezo/YzVjg7ZNTuCg1y5YnVLZ1jx5wxYTyzJYjDiUVqqqjKhuc+bUXXUT/u2KK+z5VCK0VWrhmrpkkoIHZBfxgH3pLR0JVCb6iysiVs/ooduR8Gcc8zAbQMQTsDIn/3ujUJxDePLYDr/tWwz6pJ6Kq/cRfDnpeR861HYM4ZlVA2VInlS7Kw8ppEx7Z4jg1/2OzFuhYFN063oXICUD4vhI2/6gcp0uhw0cesmFtKaEtNqCL5U5EyjWrSUDHh5lkSyqj5yVySv8uEVUtsqM5WsOl/AmjkQndaTeqbXA57GtVFVKbPsuN7c6T4G2DMX8C8ZQd8WLl9aBezvpcOJqQcE7L0mYN4nzH5lbOvwVpYj6ClGAiZYc7LR+4Pn4FlfO943l4zB+L6qCSn1BYhvoKmAwH87hhw42wbaopMWHC7Db9f68cOWvyJtPx7/zK4xBdjPP12AC8dUJDdTk8zpIMmyf8YwLzRCrZHrHJlGReDTcHHrBr5Y82ny9mxVqyJEL/z3SCefzOEsmutWHyVBROvt2PFGx5s/Ig8gDoz7Lc3NojBvcmY/OH3X4B96hlYCr3oqZ+I7C/cm5L4g9vd9GpzWSN63hAe3i5DBGUNtPabVjtQaDGjOhd4p9SCq680I9hiwrYPxG8bTKj9TwdmTzBDCilo7VDgyjXBfcyPFbuAui/YcZk/hLdpXafxWVDn1JEAvvqKVn9Cz7LZBi1/zhgFRW+FgQobnloowdcVQrfNgrI8E+RAGK9u92HdYfV3FfHHx0rY+B82ONqDWPnroKr/07vtKOiMp59musgj48G6IGZXSJg8SsHUgwoeWm7HBJuoyoQ7v+TExO1e/CpSsyNfwtNftGlte8P4v5d9+DExSZalH5cgLK7cEcAdbF+VlhBsK7OxoMCEWVebsPF1Da9Vt9pxa4UFLrbpc4fwxx1+/PjteJ1V19nwjRoJhS6+SEm8mg8GYvMh6l3EkO2uGRJchLPzlIyzTguKQmJcqcOcqiorvjHXisIsrb6D+/345gDCyozJr5zbo+IijfMiZ1U7rPNuUdP6P4+/fP4foNxYbkENJ2+w5fQ/FfXXClKWhOc+T9LvDKL+ZAifXdsTa2rFBAvyOSmFEZ/6wEon5hZoxe6ACcX0EkIco7TPsdR1uSTMzAPcNEUuTsDEKXZ87e8y1rRoz8X/mlA0mvpZZlAdXrruXDFh7E8hSUCekDBmLFhEL3TYn+gdzimQqJtfYsENCOLNcgmVgjxsezbT29jvMpEmtB2sOz/fzLoV5BFGK0kURVPifdQGiH5Jo/kc2/axbQf7tfh2O/av9aFRFOokL1sbb/PBRI+4rq4H63R6K+7IwjKGdULcXhoKMnjxUidy6z1YwwVQxAX/k4VaD3wsF2OqpOd4YTSwZLOMqul2PMiQTYgoz58gIV8kiH2qMEd48x9y7yKekAOsz2ZC9SwHnvZ5cffrNDAZSGJQ3J8KfO/FtM15V8FkIdpJ0nCYm6TzXH8lIYdE2oJ4co9Wd26RFfd+1olXVzux/iYLciINBvRNc3NVoxJfQf2mHixZ34O6IxqgUQponwq2Rsq3CuZR8sZoBNBS8b8JLjtaiVvGV9Z6sISkaxXtE7NZ9EIJwo4d/FDkWFA1Fph/TRRXMz5ZAUy/Qpuy1mbN40RsMwL0civWe7FfjREUPP+UB7V6rxJpe1GsbTMqkttmq5c5E3oDYW3X3GpD7S029XPFlRwv8VqqEj+KhyeGV808KzE24b6bNeK3cp+waL0Ht28KwM2qXSTxci6w5RHiv39IK7+tPqj9vIq4pApz7r9JI/6JPV4seMIDoS+kbKYVpepd//9kTv7+t9XriUCUFL1KBp6xrcGHeT/z4Q9HQ+gSJzwWE6bMcOCFO6O2Md5GTj6ttEiSQPUntfz/b0lhTVi+OVJ+1h937/Gazn/nbo9ufsNoj5w6RT4SHnydYYaQiiouyvHxxVV6jRWfKBZTpuCtoyn6x5KotbdFb0RFlPTaNmG0U2tPjsxNNUOXmincwF9vVT9njQdyCs1qaIQPZfwigseLDUGV3KCFv5LtCS8k+rmzURtL90kZ70QGO47WP1q+IxK2dJ8Ka8+Lx3oJPWFkUU6Y7MDm+7NQF/EqtBEpPUWvKlJk9GZCCqWUWY4JPD88ohb5PCeQFQ7BYo5aKe2J4iSrGCQO7XTrUcmNuNhoerA+qxhK3cSw5djhINZt0cCv4WnFt7mRc5XYsCJbRirSCSCjhs+ZRJ5o36LlgZQVRLX6+EyEpw8loLEpBN8Mhinss5DWPX6cKLWj5iobFoqMUAi7+ziejXoCoZYgabWt4HC7gpkMq8aME4sshB1bPWgiFp+4JQuLJ5gQ5KIoYCiYijh6WybmWuw9XAKweLSp5mUzromV94GzeDqlcBwS65W4sDrP8Z5GKJWnSPlsUmaqMSSppE6Gc6bBTPI3y6Pw0JlK3HWyEYsmfipBeePdUapo2f+7L4if7oiz5oq8oXE81dfbsLiEm8oSYNuzGh0aD4XgJvmFpxdWMd4LoLuTsTDzXfQODFXRwsLx3OxeNGkL4RT7UKZuXoG3GH/v5nTX5FlU0rm5Odx7gc65PRdQ6KO4tYMehRv6YmK4/A0vXuxScJq6lZoNUZ9qaSaW3MC7+F3ADcxp4FUlvk8RpYzHRdSmWXbgymLiKA4UuMcZoy5ABR1UKIssxkllLN/LcnocsdHuS6KLunm3F19WN9wMAa8jfY/IGX8HkDn5xy3H79/diR+4p5BIFjx1aBOmjr0axa5xKft/zqNgy97oELR/HGiGODUZAql/U8adJYwRi3iuf78FzZ0kMzeK2uSE8HoXMFnfbg/DEQakM7lpe5Au9ZY2BZUlur5xsWQEFKsQm7fzWaYIv/W94X0Y+9mHMi5gMDbc/QH5EfEGgiDvHYszMWo4o/VoaROWrXJg3HY/tibVrE9Gn9HnNe7yY/+1TlRzU7zyHifmvcu2cnjMyROqmBCvPSTwXC7Gh76ehUU6vJo4x6dplf97XwjVNRZUL3SirlxGjtjQEg+5I4iXuKCu/RvL6d2mzHdiY5kMB8tV8utgV9tTMYzXVznHiU2TZJyxW1DJ0yfUmHHbkwH1RC/WvzRvMja9jvy5aMj+nEp80Van7yzu3vldNLbt69X00bMn8MDmd9F2Nh7yzKuyxOLLXg8MMKObpvue+gBayTqJhBZEziWI7nMyNtQlnq5orlpB7S98OEQ3KiyU0Ne7cHDhcr0kyD97tLEk6CVoMEHrnUD8OGdFRKGK3gPpH98ZIXjXqZBm5dtkNKuVKdjXFMdRCx/Upvi4gm0klRAXT3cqxqi32p+021bwzQ1evHFa7Cl4olUiacTnSdGxQ348Jqw023n0WerwOFjgNYV4CeNw7IA/ZpX3Nvqw4UBIxXEij33zudLcJP73nufxLXUbuSd7KbJvKWYb6kkP8wUuCac9EQxFfT/aI6seupALRRBf5rFZ3YuZEV80pVvOyJr7qNvz6sPZIj8t6fB8iGXbH0R3MCGowxWuIpRfNpF7TDNOdrfh7bPvwBR28Oz6Llg91chmKPvzlVkYNzr9tTfvscQ20uoglXK4rygQ5jCooOU8VRTxdYf7ShT8slFGR48J/3VnFpbS8nYe8eGO3+mZk27LF1GPYy7lmFtoYQckPE4sFZErHXZLZLEn1yfwFYcFbpYLUvcSUQc3uMKAJODPRbNmsYTX/szjXO4DK6byW+X5/FaZnu6uJ/znCWVYH124h/N5+jzz2asfkYydteouRDUjGXnzaMUFzjz8ZHYtvv7aWpzxC7OpyXvu0xCXXhSzD96iJzHKfxsemb28X8TX19Pf++6+JiWhIh7NLbRhJk3OtKttcDP2z1VjAgUNf7rEiC/GxTG3JIwvwwTjd7H/OZ9cEF9RB8O2ZLnpZrGBN/OS0MWQM1d8d0E5sT94gb6zvmQ3nFx5mun0TW8fFU7OL8fG+d9HdcE1fWjEs0tyLscTiz+O6/TxdLz4It4x7HmWX/gwvvWR+C4Lwxwe4z3/nAc/HySgL+LghmXTDa/4UHdARidtsPjC0Mdvnd9gaLNyV+oj3KEYxIDCnuQONZ05ji3Hd+D4uffQ6n4f/lAAeY5cVOWVY27xDZjDy8xQKBPJNOzJpC3jmZGLwKCFPckQVY6ZhMoZk5KzjbSBwLBEIDMzPCyHYnTKQKB/CBjk7x9ehvYIQsAg/wiaTGMo/UPAIH//8DK0RxACBvlH0GQaQ+kfAgb5+4eXoT2CEDDIP4Im0xhK/xAwyN8/vAztEYSAnvxKSPZ9IP7zt+Emw7FPww0joz8XRkDwm1qxt/30L7aFO5u2PrZ60621FmtW7A3TC1dpaBgIDH8EQkFvZ8ffX3mUPY29PKR/t0d4AfGPDVzOS/x+Tl/GpCEGApcsAsLai39K5B+8xA/N1AWQTHCxAMRvaZLzmWWIgcAljYBYAOL99Jjlv6RHY3TeQGAgCPwLjsfs3HaOnC0AAAAASUVORK5CYII=";var Js={},aC={get exports(){return Js},set exports(e){Js=e}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=Symbol.for("react.element"),Cd=Symbol.for("react.portal"),Ra=Symbol.for("react.fragment"),xa=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),Na=Symbol.for("react.provider"),La=Symbol.for("react.context"),lC=Symbol.for("react.server_context"),Da=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),Fa=Symbol.for("react.lazy"),uC=Symbol.for("react.offscreen"),oy;oy=Symbol.for("react.module.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Td:switch(e=e.type,e){case Ra:case Oa:case xa:case ba:case Ma:return e;default:switch(e=e&&e.$$typeof,e){case lC:case La:case Da:case Fa:case $a:case Na:return e;default:return t}}case Cd:return t}}}te.ContextConsumer=La;te.ContextProvider=Na;te.Element=Td;te.ForwardRef=Da;te.Fragment=Ra;te.Lazy=Fa;te.Memo=$a;te.Portal=Cd;te.Profiler=Oa;te.StrictMode=xa;te.Suspense=ba;te.SuspenseList=Ma;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return _t(e)===La};te.isContextProvider=function(e){return _t(e)===Na};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Td};te.isForwardRef=function(e){return _t(e)===Da};te.isFragment=function(e){return _t(e)===Ra};te.isLazy=function(e){return _t(e)===Fa};te.isMemo=function(e){return _t(e)===$a};te.isPortal=function(e){return _t(e)===Cd};te.isProfiler=function(e){return _t(e)===Oa};te.isStrictMode=function(e){return _t(e)===xa};te.isSuspense=function(e){return _t(e)===ba};te.isSuspenseList=function(e){return _t(e)===Ma};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ra||e===Oa||e===xa||e===ba||e===Ma||e===uC||typeof e=="object"&&e!==null&&(e.$$typeof===Fa||e.$$typeof===$a||e.$$typeof===Na||e.$$typeof===La||e.$$typeof===Da||e.$$typeof===oy||e.getModuleId!==void 0)};te.typeOf=_t;(function(e){e.exports=te})(aC);function cC(e){function t(x,O,N,$,S){for(var H=0,R=0,ye=0,Y=0,J,j,Ne=0,Qe=0,G,Fe=G=J=0,X=0,Le=0,si=0,De=0,_o=N.length,ai=_o-1,Et,z="",Se="",Xa="",Ja="",cn;X<_o;){if(j=N.charCodeAt(X),X===ai&&R+Y+ye+H!==0&&(R!==0&&(j=R===47?10:47),Y=ye=H=0,_o++,ai++),R+Y+ye+H===0){if(X===ai&&(0<Le&&(z=z.replace(m,"")),0<z.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:z+=N.charAt(X)}j=59}switch(j){case 123:for(z=z.trim(),J=z.charCodeAt(0),G=1,De=++X;X<_o;){switch(j=N.charCodeAt(X)){case 123:G++;break;case 125:G--;break;case 47:switch(j=N.charCodeAt(X+1)){case 42:case 47:e:{for(Fe=X+1;Fe<ai;++Fe)switch(N.charCodeAt(Fe)){case 47:if(j===42&&N.charCodeAt(Fe-1)===42&&X+2!==Fe){X=Fe+1;break e}break;case 10:if(j===47){X=Fe+1;break e}}X=Fe}}break;case 91:j++;case 40:j++;case 34:case 39:for(;X++<ai&&N.charCodeAt(X)!==j;);}if(G===0)break;X++}switch(G=N.substring(De,X),J===0&&(J=(z=z.replace(h,"").trim()).charCodeAt(0)),J){case 64:switch(0<Le&&(z=z.replace(m,"")),j=z.charCodeAt(1),j){case 100:case 109:case 115:case 45:Le=O;break;default:Le=pe}if(G=t(O,Le,G,j,S+1),De=G.length,0<C&&(Le=n(pe,z,si),cn=a(3,G,Le,O,se,Q,De,j,S,$),z=Le.join(""),cn!==void 0&&(De=(G=cn.trim()).length)===0&&(j=0,G="")),0<De)switch(j){case 115:z=z.replace(A,s);case 100:case 109:case 45:G=z+"{"+G+"}";break;case 107:z=z.replace(c,"$1 $2"),G=z+"{"+G+"}",G=fe===1||fe===2&&o("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=z+G,$===112&&(G=(Se+=G,""))}else G="";break;default:G=t(O,n(O,z,si),G,$,S+1)}Xa+=G,G=si=Le=Fe=J=0,z="",j=N.charCodeAt(++X);break;case 125:case 59:if(z=(0<Le?z.replace(m,""):z).trim(),1<(De=z.length))switch(Fe===0&&(J=z.charCodeAt(0),J===45||96<J&&123>J)&&(De=(z=z.replace(" ",":")).length),0<C&&(cn=a(1,z,O,x,se,Q,Se.length,$,S,$))!==void 0&&(De=(z=cn.trim()).length)===0&&(z="\0\0"),J=z.charCodeAt(0),j=z.charCodeAt(1),J){case 0:break;case 64:if(j===105||j===99){Ja+=z+N.charAt(X);break}default:z.charCodeAt(De-1)!==58&&(Se+=i(z,J,j,z.charCodeAt(2)))}si=Le=Fe=J=0,z="",j=N.charCodeAt(++X)}}switch(j){case 13:case 10:R===47?R=0:1+J===0&&$!==107&&0<z.length&&(Le=1,z+="\0"),0<C*M&&a(0,z,O,x,se,Q,Se.length,$,S,$),Q=1,se++;break;case 59:case 125:if(R+Y+ye+H===0){Q++;break}default:switch(Q++,Et=N.charAt(X),j){case 9:case 32:if(Y+H+R===0)switch(Ne){case 44:case 58:case 9:case 32:Et="";break;default:j!==32&&(Et=" ")}break;case 0:Et="\\0";break;case 12:Et="\\f";break;case 11:Et="\\v";break;case 38:Y+R+H===0&&(Le=si=1,Et="\f"+Et);break;case 108:if(Y+R+H+le===0&&0<Fe)switch(X-Fe){case 2:Ne===112&&N.charCodeAt(X-3)===58&&(le=Ne);case 8:Qe===111&&(le=Qe)}break;case 58:Y+R+H===0&&(Fe=X);break;case 44:R+ye+Y+H===0&&(Le=1,Et+="\r");break;case 34:case 39:R===0&&(Y=Y===j?0:Y===0?j:Y);break;case 91:Y+R+ye===0&&H++;break;case 93:Y+R+ye===0&&H--;break;case 41:Y+R+H===0&&ye--;break;case 40:if(Y+R+H===0){if(J===0)switch(2*Ne+3*Qe){case 533:break;default:J=1}ye++}break;case 64:R+ye+Y+H+Fe+G===0&&(G=1);break;case 42:case 47:if(!(0<Y+H+ye))switch(R){case 0:switch(2*j+3*N.charCodeAt(X+1)){case 235:R=47;break;case 220:De=X,R=42}break;case 42:j===47&&Ne===42&&De+2!==X&&(N.charCodeAt(De+2)===33&&(Se+=N.substring(De,X+1)),Et="",R=0)}}R===0&&(z+=Et)}Qe=Ne,Ne=j,X++}if(De=Se.length,0<De){if(Le=O,0<C&&(cn=a(2,Se,Le,x,se,Q,De,$,S,$),cn!==void 0&&(Se=cn).length===0))return Ja+Se+Xa;if(Se=Le.join(",")+"{"+Se+"}",fe*le!==0){switch(fe!==2||o(Se,2)||(le=0),le){case 111:Se=Se.replace(y,":-moz-$1")+Se;break;case 112:Se=Se.replace(p,"::-webkit-input-$1")+Se.replace(p,"::-moz-$1")+Se.replace(p,":-ms-input-$1")+Se}le=0}}return Ja+Se+Xa}function n(x,O,N){var $=O.trim().split(_);O=$;var S=$.length,H=x.length;switch(H){case 0:case 1:var R=0;for(x=H===0?"":x[0]+" ";R<S;++R)O[R]=r(x,O[R],N).trim();break;default:var ye=R=0;for(O=[];R<S;++R)for(var Y=0;Y<H;++Y)O[ye++]=r(x[Y]+" ",$[R],N).trim()}return O}function r(x,O,N){var $=O.charCodeAt(0);switch(33>$&&($=(O=O.trim()).charCodeAt(0)),$){case 38:return O.replace(d,"$1"+x.trim());case 58:return x.trim()+O.replace(d,"$1"+x.trim());default:if(0<1*N&&0<O.indexOf("\f"))return O.replace(d,(x.charCodeAt(0)===58?"":"$1")+x.trim())}return x+O}function i(x,O,N,$){var S=x+";",H=2*O+3*N+4*$;if(H===944){x=S.indexOf(":",9)+1;var R=S.substring(x,S.length-1).trim();return R=S.substring(0,x).trim()+R+";",fe===1||fe===2&&o(R,1)?"-webkit-"+R+R:R}if(fe===0||fe===2&&!o(S,1))return S;switch(H){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(oe,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return R=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+S+"-ms-flex-pack"+R+S;case 1005:return w.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(R=S.substring(13).trim(),O=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(O)){case 226:R=S.replace(E,"tb");break;case 232:R=S.replace(E,"tb-rl");break;case 220:R=S.replace(E,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+R+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(O=(S=x).length-10,R=(S.charCodeAt(O)===33?S.substring(0,O):S).substring(x.indexOf(":",7)+1).trim(),H=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:S=S.replace(R,"-webkit-"+R)+";"+S;break;case 207:case 102:S=S.replace(R,"-webkit-"+(102<H?"inline-":"")+"box")+";"+S.replace(R,"-webkit-"+R)+";"+S.replace(R,"-ms-"+R+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return R=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+R+"-ms-flex-"+R+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(T,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(T,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(D.test(x)===!0)return(R=x.substring(x.indexOf(":")+1)).charCodeAt(0)===115?i(x.replace("stretch","fill-available"),O,N,$).replace(":fill-available",":stretch"):S.replace(R,"-webkit-"+R)+S.replace(R,"-moz-"+R.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,N+$===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function o(x,O){var N=x.indexOf(O===1?":":"{"),$=x.substring(0,O!==3?N:10);return N=x.substring(N+1,x.length-1),b(O!==2?$:$.replace(U,"$1"),N,O)}function s(x,O){var N=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return N!==O+";"?N.replace(P," or ($1)").substring(4):"("+O+")"}function a(x,O,N,$,S,H,R,ye,Y,J){for(var j=0,Ne=O,Qe;j<C;++j)switch(Qe=ue[j].call(f,x,Ne,N,$,S,H,R,ye,Y,J)){case void 0:case!1:case!0:case null:break;default:Ne=Qe}if(Ne!==O)return Ne}function l(x){switch(x){case void 0:case null:C=ue.length=0;break;default:if(typeof x=="function")ue[C++]=x;else if(typeof x=="object")for(var O=0,N=x.length;O<N;++O)l(x[O]);else M=!!x|0}return l}function u(x){return x=x.prefix,x!==void 0&&(b=null,x?typeof x!="function"?fe=1:(fe=2,b=x):fe=0),u}function f(x,O){var N=x;if(33>N.charCodeAt(0)&&(N=N.trim()),re=N,N=[re],0<C){var $=a(-1,O,N,N,se,Q,0,0,0,0);$!==void 0&&typeof $=="string"&&(O=$)}var S=t(pe,N,O,0,0);return 0<C&&($=a(-2,S,N,N,se,Q,S.length,0,0,0),$!==void 0&&(S=$)),re="",le=0,Q=se=1,S}var h=/^\0+/g,m=/[\0\r\f]/g,g=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,_=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,T=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,Q=1,se=1,le=0,fe=1,pe=[],ue=[],C=0,b=null,M=0,re="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var dC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fC(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Qh=fC(function(e){return hC.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),tc={},pC={get exports(){return tc},set exports(e){tc=e}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,Ad=Oe?Symbol.for("react.element"):60103,Pd=Oe?Symbol.for("react.portal"):60106,Ua=Oe?Symbol.for("react.fragment"):60107,za=Oe?Symbol.for("react.strict_mode"):60108,ja=Oe?Symbol.for("react.profiler"):60114,Va=Oe?Symbol.for("react.provider"):60109,Ba=Oe?Symbol.for("react.context"):60110,Rd=Oe?Symbol.for("react.async_mode"):60111,Ha=Oe?Symbol.for("react.concurrent_mode"):60111,Wa=Oe?Symbol.for("react.forward_ref"):60112,Ka=Oe?Symbol.for("react.suspense"):60113,mC=Oe?Symbol.for("react.suspense_list"):60120,Ga=Oe?Symbol.for("react.memo"):60115,qa=Oe?Symbol.for("react.lazy"):60116,gC=Oe?Symbol.for("react.block"):60121,vC=Oe?Symbol.for("react.fundamental"):60117,yC=Oe?Symbol.for("react.responder"):60118,wC=Oe?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ad:switch(e=e.type,e){case Rd:case Ha:case Ua:case ja:case za:case Ka:return e;default:switch(e=e&&e.$$typeof,e){case Ba:case Wa:case qa:case Ga:case Va:return e;default:return t}}case Pd:return t}}}function sy(e){return ct(e)===Ha}ne.AsyncMode=Rd;ne.ConcurrentMode=Ha;ne.ContextConsumer=Ba;ne.ContextProvider=Va;ne.Element=Ad;ne.ForwardRef=Wa;ne.Fragment=Ua;ne.Lazy=qa;ne.Memo=Ga;ne.Portal=Pd;ne.Profiler=ja;ne.StrictMode=za;ne.Suspense=Ka;ne.isAsyncMode=function(e){return sy(e)||ct(e)===Rd};ne.isConcurrentMode=sy;ne.isContextConsumer=function(e){return ct(e)===Ba};ne.isContextProvider=function(e){return ct(e)===Va};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ad};ne.isForwardRef=function(e){return ct(e)===Wa};ne.isFragment=function(e){return ct(e)===Ua};ne.isLazy=function(e){return ct(e)===qa};ne.isMemo=function(e){return ct(e)===Ga};ne.isPortal=function(e){return ct(e)===Pd};ne.isProfiler=function(e){return ct(e)===ja};ne.isStrictMode=function(e){return ct(e)===za};ne.isSuspense=function(e){return ct(e)===Ka};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ua||e===Ha||e===ja||e===za||e===Ka||e===mC||typeof e=="object"&&e!==null&&(e.$$typeof===qa||e.$$typeof===Ga||e.$$typeof===Va||e.$$typeof===Ba||e.$$typeof===Wa||e.$$typeof===vC||e.$$typeof===yC||e.$$typeof===wC||e.$$typeof===gC)};ne.typeOf=ct;(function(e){e.exports=ne})(pC);var xd=tc,SC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_C={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ay={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Od={};Od[xd.ForwardRef]=EC;Od[xd.Memo]=ay;function Yh(e){return xd.isMemo(e)?ay:Od[e.$$typeof]||SC}var IC=Object.defineProperty,kC=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,TC=Object.getOwnPropertyDescriptor,CC=Object.getPrototypeOf,Jh=Object.prototype;function ly(e,t,n){if(typeof t!="string"){if(Jh){var r=CC(t);r&&r!==Jh&&ly(e,r,n)}var i=kC(t);Xh&&(i=i.concat(Xh(t)));for(var o=Yh(e),s=Yh(t),a=0;a<i.length;++a){var l=i[a];if(!_C[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=TC(t,l);try{IC(e,l,u)}catch{}}}}return e}var AC=ly;function Jt(){return(Jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zh=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},nc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Js.typeOf(e)},Zs=Object.freeze([]),bn=Object.freeze({});function so(e){return typeof e=="function"}function ep(e){return e.displayName||e.name||"Component"}function Nd(e){return e&&typeof e.styledComponentId=="string"}var Jr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ld=typeof window<"u"&&"HTMLElement"in window,PC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function So(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var RC=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&So(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),cs=new Map,ea=new Map,Di=1,Vo=function(e){if(cs.has(e))return cs.get(e);for(;ea.has(Di);)Di++;var t=Di++;return cs.set(e,t),ea.set(t,e),t},xC=function(e){return ea.get(e)},OC=function(e,t){t>=Di&&(Di=t+1),cs.set(e,t),ea.set(t,e)},NC="style["+Jr+'][data-styled-version="5.3.9"]',LC=new RegExp("^"+Jr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),DC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},bC=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(LC);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(OC(u,l),DC(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},MC=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},uy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Jr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Jr,"active"),r.setAttribute("data-styled-version","5.3.9");var s=MC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},$C=function(){function e(n){var r=this.element=uy(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}So(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),FC=function(){function e(n){var r=this.element=uy(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),UC=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tp=Ld,zC={isServer:!Ld,useCSSOMInjection:!PC},cy=function(){function e(n,r,i){n===void 0&&(n=bn),r===void 0&&(r={}),this.options=Jt({},zC,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ld&&tp&&(tp=!1,function(o){for(var s=document.querySelectorAll(NC),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Jr)!=="active"&&(bC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Vo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Jt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new UC(s):o?new $C(s):new FC(s),new RC(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Vo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Vo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Vo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=xC(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var f=Jr+".g"+s+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(m){m.length>0&&(h+=m+",")}),o+=""+u+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),jC=/(a)(d)/gi,np=function(e){return String.fromCharCode(e+(e>25?39:97))};function rc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=np(t%52)+n;return(np(t%52)+n).replace(jC,"$1-$2")}var Nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dy=function(e){return Nr(5381,e)};function VC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!Nd(n))return!1}return!0}var BC=dy("5.3.9"),HC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&VC(t),this.componentId=n,this.baseHash=Nr(BC,n),this.baseStyle=r,cy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Zr(this.rules,t,n,r).join(""),a=rc(Nr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=Nr(this.baseHash,r.hash),h="",m=0;m<u;m++){var g=this.rules[m];if(typeof g=="string")h+=g;else if(g){var w=Zr(g,t,n,r),v=Array.isArray(w)?w.join(""):w;f=Nr(f,v+m),h+=v}}if(h){var _=rc(f>>>0);if(!n.hasNameForId(i,_)){var d=r(h,"."+_,void 0,i);n.insertRules(i,_,d)}o.push(_)}}return o.join(" ")},e}(),WC=/^\s*\/\/.*$/gm,KC=[":","[",".","#"];function GC(e){var t,n,r,i,o=e===void 0?bn:e,s=o.options,a=s===void 0?bn:s,l=o.plugins,u=l===void 0?Zs:l,f=new cC(a),h=[],m=function(v){function _(d){if(d)try{v(d+"}")}catch{}}return function(d,c,p,y,E,A,P,T,U,D){switch(d){case 1:if(U===0&&c.charCodeAt(0)===64)return v(c+";"),"";break;case 2:if(T===0)return c+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(p[0]+c),"";default:return c+(D===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(_)}}}(function(v){h.push(v)}),g=function(v,_,d){return _===0&&KC.indexOf(d[n.length])!==-1||d.match(i)?v:"."+t};function w(v,_,d,c){c===void 0&&(c="&");var p=v.replace(WC,""),y=_&&d?d+" "+_+" { "+p+" }":p;return t=c,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(d||!_?"":_,y)}return f.use([].concat(u,[function(v,_,d){v===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,g))},m,function(v){if(v===-2){var _=h;return h=[],_}}])),w.hash=u.length?u.reduce(function(v,_){return _.name||So(15),Nr(v,_.name)},5381).toString():"",w}var fy=q.createContext();fy.Consumer;var hy=q.createContext(),qC=(hy.Consumer,new cy),ic=GC();function QC(){return I.useContext(fy)||qC}function YC(){return I.useContext(hy)||ic}var XC=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ic);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return So(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ic),this.name+t.hash},e}(),JC=/([A-Z])/,ZC=/([A-Z])/g,eA=/^ms-/,tA=function(e){return"-"+e.toLowerCase()};function rp(e){return JC.test(e)?e.replace(ZC,tA).replace(eA,"-ms-"):e}var ip=function(e){return e==null||e===!1||e===""};function Zr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=Zr(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ip(e))return"";if(Nd(e))return"."+e.styledComponentId;if(so(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Zr(l,t,n,r)}var u;return e instanceof XC?n?(e.inject(n,r),e.getName(r)):e:nc(e)?function f(h,m){var g,w,v=[];for(var _ in h)h.hasOwnProperty(_)&&!ip(h[_])&&(Array.isArray(h[_])&&h[_].isCss||so(h[_])?v.push(rp(_)+":",h[_],";"):nc(h[_])?v.push.apply(v,f(h[_],_)):v.push(rp(_)+": "+(g=_,(w=h[_])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||g in dC?String(w).trim():w+"px")+";"));return m?[m+" {"].concat(v,["}"]):v}(e):e.toString()}var op=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function nA(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return so(e)||nc(e)?op(Zr(Zh(Zs,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:op(Zr(Zh(e,n)))}var rA=function(e,t,n){return n===void 0&&(n=bn),e.theme!==n.theme&&e.theme||t||n.theme},iA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oA=/(^-|-$)/g;function Fl(e){return e.replace(iA,"-").replace(oA,"")}var sA=function(e){return rc(dy(e)>>>0)};function Bo(e){return typeof e=="string"&&!0}var oc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},aA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function lA(e,t,n){var r=e[n];oc(t)&&oc(r)?py(r,t):e[n]=t}function py(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(oc(s))for(var a in s)aA(a)&&lA(e,s[a],a)}return e}var my=q.createContext();my.Consumer;var Ul={};function gy(e,t,n){var r=Nd(e),i=!Bo(e),o=t.attrs,s=o===void 0?Zs:o,a=t.componentId,l=a===void 0?function(c,p){var y=typeof c!="string"?"sc":Fl(c);Ul[y]=(Ul[y]||0)+1;var E=y+"-"+sA("5.3.9"+y+Ul[y]);return p?p+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,f=u===void 0?function(c){return Bo(c)?"styled."+c:"Styled("+ep(c)+")"}(e):u,h=t.displayName&&t.componentId?Fl(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var w,v=new HC(n,h,r?e.componentStyle:void 0),_=v.isStatic&&s.length===0,d=function(c,p){return function(y,E,A,P){var T=y.attrs,U=y.componentStyle,D=y.defaultProps,oe=y.foldedComponentIds,Q=y.shouldForwardProp,se=y.styledComponentId,le=y.target,fe=function($,S,H){$===void 0&&($=bn);var R=Jt({},S,{theme:$}),ye={};return H.forEach(function(Y){var J,j,Ne,Qe=Y;for(J in so(Qe)&&(Qe=Qe(R)),Qe)R[J]=ye[J]=J==="className"?(j=ye[J],Ne=Qe[J],j&&Ne?j+" "+Ne:j||Ne):Qe[J]}),[R,ye]}(rA(E,I.useContext(my),D)||bn,E,T),pe=fe[0],ue=fe[1],C=function($,S,H,R){var ye=QC(),Y=YC(),J=S?$.generateAndInjectStyles(bn,ye,Y):$.generateAndInjectStyles(H,ye,Y);return J}(U,P,pe),b=A,M=ue.$as||E.$as||ue.as||E.as||le,re=Bo(M),x=ue!==E?Jt({},E,{},ue):E,O={};for(var N in x)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?O.as=x[N]:(Q?Q(N,Qh,M):!re||Qh(N))&&(O[N]=x[N]));return E.style&&ue.style!==E.style&&(O.style=Jt({},E.style,{},ue.style)),O.className=Array.prototype.concat(oe,se,C!==se?C:null,E.className,ue.className).filter(Boolean).join(" "),O.ref=b,I.createElement(M,O)}(w,c,p,_)};return d.displayName=f,(w=q.forwardRef(d)).attrs=m,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zs,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(c){var p=t.componentId,y=function(A,P){if(A==null)return{};var T,U,D={},oe=Object.keys(A);for(U=0;U<oe.length;U++)T=oe[U],P.indexOf(T)>=0||(D[T]=A[T]);return D}(t,["componentId"]),E=p&&p+"-"+(Bo(c)?c:Fl(ep(c)));return gy(c,Jt({},y,{attrs:m,componentId:E}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?py({},e.defaultProps,c):c}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&AC(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var sc=function(e){return function t(n,r,i){if(i===void 0&&(i=bn),!Js.isValidElementType(r))return So(1,String(r));var o=function(){return n(r,i,nA.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Jt({},i,{},s))},o.attrs=function(s){return t(n,r,Jt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(gy,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){sc[e]=sc(e)});const uA=sc,cA=uA.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  color: red;
`,dA=()=>{const e=Cg(),t=()=>{lT(iy,eC).then(n=>{const r=n.user;console.log(r.email),e("/")}).catch(n=>{n.code;const r=n.message;n.customData.email,Mt.credentialFromError(n),console.log(r)})};return Ie(cA,{children:Ie("button",{children:Ie("img",{src:sC,alt:"google-login-button",onClick:()=>{t()}})})})};function vy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=vy(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function In(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=vy(e))&&(r&&(r+=" "),r+=t);return r}const ds=e=>typeof e=="number"&&!isNaN(e),ta=e=>typeof e=="string",it=e=>typeof e=="function",fs=e=>ta(e)||it(e)?e:null,zl=e=>I.isValidElement(e)||ta(e)||it(e)||ds(e);function fA(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Qa(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:l,preventExitTransition:u,done:f,nodeRef:h,isIn:m}=s;const g=r?`${t}--${l}`:t,w=r?`${n}--${l}`:n,v=I.useRef(0);return I.useLayoutEffect(()=>{const _=h.current,d=g.split(" "),c=p=>{p.target===h.current&&(_.dispatchEvent(new Event("d")),_.removeEventListener("animationend",c),_.removeEventListener("animationcancel",c),v.current===0&&p.type!=="animationcancel"&&_.classList.remove(...d))};_.classList.add(...d),_.addEventListener("animationend",c),_.addEventListener("animationcancel",c)},[]),I.useEffect(()=>{const _=h.current,d=()=>{_.removeEventListener("animationend",d),i?fA(_,f,o):f()};m||(u?d():(v.current=1,_.className+=` ${w}`,_.addEventListener("animationend",d)))},[m]),q.createElement(q.Fragment,null,a)}}function sp(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const Xn={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Ho=e=>{let{theme:t,type:n,...r}=e;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},jl={info:function(e){return q.createElement(Ho,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return q.createElement(Ho,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return q.createElement(Ho,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return q.createElement(Ho,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}};function hA(e){const[,t]=I.useReducer(g=>g+1,0),[n,r]=I.useState([]),i=I.useRef(null),o=I.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=I.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;function l(g){let{containerId:w}=g;const{limit:v}=a.props;!v||w&&a.containerId!==w||(a.count-=a.queue.length,a.queue=[])}function u(g){r(w=>g==null?[]:w.filter(v=>v!==g))}function f(){const{toastContent:g,toastProps:w,staleId:v}=a.queue.shift();m(g,w,v)}function h(g,w){let{delay:v,staleId:_,...d}=w;if(!zl(g)||function(Q){return!i.current||a.props.enableMultiContainer&&Q.containerId!==a.props.containerId||o.has(Q.toastId)&&Q.updateId==null}(d))return;const{toastId:c,updateId:p,data:y}=d,{props:E}=a,A=()=>u(c),P=p==null;P&&a.count++;const T={...E,style:E.toastStyle,key:a.toastKey++,...d,toastId:c,updateId:p,data:y,closeToast:A,isIn:!1,className:fs(d.className||E.toastClassName),bodyClassName:fs(d.bodyClassName||E.bodyClassName),progressClassName:fs(d.progressClassName||E.progressClassName),autoClose:!d.isLoading&&(U=d.autoClose,D=E.autoClose,U===!1||ds(U)&&U>0?U:D),deleteToast(){const Q=sp(o.get(c),"removed");o.delete(c),Xn.emit(4,Q);const se=a.queue.length;if(a.count=c==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),se>0){const le=c==null?a.props.limit:1;if(se===1||le===1)a.displayedToast++,f();else{const fe=le>se?se:le;a.displayedToast=fe;for(let pe=0;pe<fe;pe++)f()}}else t()}};var U,D;T.iconOut=function(Q){let{theme:se,type:le,isLoading:fe,icon:pe}=Q,ue=null;const C={theme:se,type:le};return pe===!1||(it(pe)?ue=pe(C):I.isValidElement(pe)?ue=I.cloneElement(pe,C):ta(pe)||ds(pe)?ue=pe:fe?ue=jl.spinner():(b=>b in jl)(le)&&(ue=jl[le](C))),ue}(T),it(d.onOpen)&&(T.onOpen=d.onOpen),it(d.onClose)&&(T.onClose=d.onClose),T.closeButton=E.closeButton,d.closeButton===!1||zl(d.closeButton)?T.closeButton=d.closeButton:d.closeButton===!0&&(T.closeButton=!zl(E.closeButton)||E.closeButton);let oe=g;I.isValidElement(g)&&!ta(g.type)?oe=I.cloneElement(g,{closeToast:A,toastProps:T,data:y}):it(g)&&(oe=g({closeToast:A,toastProps:T,data:y})),E.limit&&E.limit>0&&a.count>E.limit&&P?a.queue.push({toastContent:oe,toastProps:T,staleId:_}):ds(v)?setTimeout(()=>{m(oe,T,_)},v):m(oe,T,_)}function m(g,w,v){const{toastId:_}=w;v&&o.delete(v);const d={content:g,props:w};o.set(_,d),r(c=>[...c,_].filter(p=>p!==v)),Xn.emit(4,sp(d,d.props.updateId==null?"added":"updated"))}return I.useEffect(()=>(a.containerId=e.containerId,Xn.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),Xn.emit(3,a)}),[]),I.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(g){const w=new Map,v=Array.from(o.values());return e.newestOnTop&&v.reverse(),v.forEach(_=>{const{position:d}=_.props;w.has(d)||w.set(d,[]),w.get(d).push(_)}),Array.from(w,_=>g(_[0],_[1]))},containerRef:i,isToastActive:s}}function ap(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function lp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function pA(e){const[t,n]=I.useState(!1),[r,i]=I.useState(!1),o=I.useRef(null),s=I.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=I.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:f,onClick:h,closeOnClick:m}=e;function g(y){if(e.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),document.addEventListener("touchmove",d),document.addEventListener("touchend",c);const E=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=E.getBoundingClientRect(),E.style.transition="",s.x=ap(y.nativeEvent),s.y=lp(y.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function w(y){if(s.boundingRect){const{top:E,bottom:A,left:P,right:T}=s.boundingRect;y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=P&&s.x<=T&&s.y>=E&&s.y<=A?_():v()}}function v(){n(!0)}function _(){n(!1)}function d(y){const E=o.current;s.canDrag&&E&&(s.didMove=!0,t&&_(),s.x=ap(y),s.y=lp(y),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),E.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,E.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function c(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c);const y=o.current;if(s.canDrag&&s.didMove&&y){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${e.draggableDirection}(0)`,y.style.opacity="1"}}I.useEffect(()=>{a.current=e}),I.useEffect(()=>(o.current&&o.current.addEventListener("d",v,{once:!0}),it(e.onOpen)&&e.onOpen(I.isValidElement(e.children)&&e.children.props),()=>{const y=a.current;it(y.onClose)&&y.onClose(I.isValidElement(y.children)&&y.children.props)}),[]),I.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",v),window.addEventListener("blur",_)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",_))}),[e.pauseOnFocusLoss]);const p={onMouseDown:g,onTouchStart:g,onMouseUp:w,onTouchEnd:w};return l&&u&&(p.onMouseEnter=_,p.onMouseLeave=v),m&&(p.onClick=y=>{h&&h(y),s.canCloseOnClick&&f()}),{playToast:v,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:p}}function yy(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function mA(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:f,isIn:h,theme:m}=e;const g=o||l&&u===0,w={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(w.transform=`scaleX(${u})`);const v=In("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),_=it(s)?s({rtl:f,type:i,defaultClassName:v}):In(v,s);return q.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:_,style:w,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const gA=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=pA(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:f,closeToast:h,transition:m,position:g,className:w,style:v,bodyClassName:_,bodyStyle:d,progressClassName:c,progressStyle:p,updateId:y,role:E,progress:A,rtl:P,toastId:T,deleteToast:U,isIn:D,isLoading:oe,iconOut:Q,closeOnClick:se,theme:le}=e,fe=In("Toastify__toast",`Toastify__toast-theme--${le}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":se}),pe=it(w)?w({rtl:P,position:g,type:u,defaultClassName:fe}):In(fe,w),ue=!!A||!a,C={closeToast:h,type:u,theme:le};let b=null;return o===!1||(b=it(o)?o(C):I.isValidElement(o)?I.cloneElement(o,C):yy(C)),q.createElement(m,{isIn:D,done:U,position:g,preventExitTransition:n,nodeRef:r},q.createElement("div",{id:T,onClick:l,className:pe,...i,style:v,ref:r},q.createElement("div",{...D&&{role:E},className:it(_)?_({type:u}):In("Toastify__toast-body",_),style:d},Q!=null&&q.createElement("div",{className:In("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!oe})},Q),q.createElement("div",null,s)),b,q.createElement(mA,{...y&&!ue?{key:`pb-${y}`}:{},rtl:P,theme:le,delay:a,isRunning:t,isIn:D,closeToast:h,hide:f,type:u,style:p,className:c,controlledProgress:ue,progress:A||0})))},Ya=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},vA=Qa(Ya("bounce",!0));Qa(Ya("slide",!0));Qa(Ya("zoom"));Qa(Ya("flip"));const ac=I.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=hA(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(f){const h=In("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return it(o)?o({position:f,rtl:a,defaultClassName:h}):In(h,fs(o))}return I.useEffect(()=>{t&&(t.current=r.current)},[]),q.createElement("div",{ref:r,className:"Toastify",id:l},n((f,h)=>{const m=h.length?{...s}:{...s,pointerEvents:"none"};return q.createElement("div",{className:u(f),style:m,key:`container-${f}`},h.map((g,w)=>{let{content:v,props:_}=g;return q.createElement(gA,{..._,isIn:i(_.toastId),style:{..._.style,"--nth":w+1,"--len":h.length},key:`toast-${_.key}`},v)}))}))});ac.displayName="ToastContainer",ac.defaultProps={position:"top-right",transition:vA,autoClose:5e3,closeButton:yy,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let up,Vl=new Map,cp=[];Xn.on(2,e=>{up=e.containerId||e,Vl.set(up,e),cp.forEach(t=>{Xn.emit(0,t.content,t.options)}),cp=[]}).on(3,e=>{Vl.delete(e.containerId||e),Vl.size===0&&Xn.off(0).off(1).off(5)});function yA(){return Wn("div",{className:"App",children:[Ie(ac,{autoClose:3e3,hideProgressBar:!0}),Ie(Kw,{basename:"/mytaste2",children:Wn(jw,{children:[Ie(rs,{path:"/",element:Ie(iC,{})}),Ie(rs,{path:"/login",element:Ie(dA,{})}),Ie(rs,{path:"item/:id",element:Ie(oC,{})})]})})]})}Hl.createRoot(document.getElementById("root")).render(Ie(q.StrictMode,{children:Ie(yA,{})}));
