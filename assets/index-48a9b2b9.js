function Ry(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function xy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ui={},Oy={get exports(){return Ui},set exports(e){Ui=e}},oa={},I={},Ny={get exports(){return I},set exports(e){I=e}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Ly=Symbol.for("react.portal"),Dy=Symbol.for("react.fragment"),by=Symbol.for("react.strict_mode"),My=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Fy=Symbol.for("react.context"),Uy=Symbol.for("react.forward_ref"),zy=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),Vy=Symbol.for("react.lazy"),jd=Symbol.iterator;function By(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var _p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,Ip={};function ii(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||_p}ii.prototype.isReactComponent={};ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kp(){}kp.prototype=ii.prototype;function fc(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||_p}var hc=fc.prototype=new kp;hc.constructor=fc;Ep(hc,ii.prototype);hc.isPureReactComponent=!0;var Vd=Array.isArray,Tp=Object.prototype.hasOwnProperty,pc={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Tp.call(t,r)&&!Cp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ho,type:e,key:o,ref:s,props:i,_owner:pc.current}}function Hy(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function Wy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bd=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wy(""+e.key):t.toString(36)}function Yo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ho:case Ly:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+rl(s,0):r,Vd(i)?(n="",e!=null&&(n=e.replace(Bd,"$&/")+"/"),Yo(i,t,n,"",function(u){return u})):i!=null&&(mc(i)&&(i=Hy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Bd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Vd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+rl(o,a);s+=Yo(o,t,n,l,i)}else if(l=By(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+rl(o,a++),s+=Yo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ao(e,t,n){if(e==null)return e;var r=[],i=0;return Yo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ky(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Xo={transition:null},Gy={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:pc};W.Children={map:Ao,forEach:function(e,t,n){Ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ao(e,function(){t++}),t},toArray:function(e){return Ao(e,function(t){return t})||[]},only:function(e){if(!mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=ii;W.Fragment=Dy;W.Profiler=My;W.PureComponent=fc;W.StrictMode=by;W.Suspense=zy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ep({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=pc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Tp.call(t,l)&&!Cp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ho,type:e.type,key:i,ref:o,props:r,_owner:s}};W.createContext=function(e){return e={$$typeof:Fy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$y,_context:e},e.Consumer=e};W.createElement=Ap;W.createFactory=function(e){var t=Ap.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Uy,render:e}};W.isValidElement=mc;W.lazy=function(e){return{$$typeof:Vy,_payload:{_status:-1,_result:e},_init:Ky}};W.memo=function(e,t){return{$$typeof:jy,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ge.current.useCallback(e,t)};W.useContext=function(e){return Ge.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ge.current.useEffect(e,t)};W.useId=function(){return Ge.current.useId()};W.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ge.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};W.useRef=function(e){return Ge.current.useRef(e)};W.useState=function(e){return Ge.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ge.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(Ny);const B=xy(I),Gl=Ry({__proto__:null,default:B},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=I,Qy=Symbol.for("react.element"),Yy=Symbol.for("react.fragment"),Xy=Object.prototype.hasOwnProperty,Jy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Xy.call(t,r)&&!Zy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:o,ref:s,props:i,_owner:Jy.current}}oa.Fragment=Yy;oa.jsx=Pp;oa.jsxs=Pp;(function(e){e.exports=oa})(Oy);const Hd=Ui.Fragment,M=Ui.jsx,Ze=Ui.jsxs;var ql={},Ql={},e0={get exports(){return Ql},set exports(e){Ql=e}},ct={},Yl={},t0={get exports(){return Yl},set exports(e){Yl=e}},Rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,b){var $=C.length;C.push(b);e:for(;0<$;){var ie=$-1>>>1,x=C[ie];if(0<i(x,b))C[ie]=b,C[$]=x,$=ie;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var b=C[0],$=C.pop();if($!==b){C[0]=$;e:for(var ie=0,x=C.length,O=x>>>1;ie<O;){var N=2*(ie+1)-1,F=C[N],S=N+1,K=C[S];if(0>i(F,$))S<x&&0>i(K,F)?(C[ie]=K,C[S]=$,ie=S):(C[ie]=F,C[N]=$,ie=N);else if(S<x&&0>i(K,$))C[ie]=K,C[S]=$,ie=S;else break e}}return b}function i(C,b){var $=C.sortIndex-b.sortIndex;return $!==0?$:C.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,m=3,g=!1,w=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=C)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function y(C){if(v=!1,p(C),!w)if(n(l)!==null)w=!0,me(E);else{var b=n(u);b!==null&&ce(y,b.startTime-C)}}function E(C,b){w=!1,v&&(v=!1,d(T),T=-1),g=!0;var $=m;try{for(p(b),h=n(l);h!==null&&(!(h.expirationTime>b)||C&&!se());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,m=h.priorityLevel;var x=ie(h.expirationTime<=b);b=e.unstable_now(),typeof x=="function"?h.callback=x:h===n(l)&&r(l),p(b)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var N=n(u);N!==null&&ce(y,N.startTime-b),O=!1}return O}finally{h=null,m=$,g=!1}}var A=!1,P=null,T=-1,z=5,D=-1;function se(){return!(e.unstable_now()-D<z)}function Y(){if(P!==null){var C=e.unstable_now();D=C;var b=!0;try{b=P(!0,C)}finally{b?ae():(A=!1,P=null)}}else A=!1}var ae;if(typeof c=="function")ae=function(){c(Y)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=Y,ae=function(){he.postMessage(null)}}else ae=function(){_(Y,0)};function me(C){P=C,A||(A=!0,ae())}function ce(C,b){T=_(function(){C(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,me(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var $=m;m=b;try{return C()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,b){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=m;m=C;try{return b()}finally{m=$}},e.unstable_scheduleCallback=function(C,b,$){var ie=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,C){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=$+x,C={id:f++,callback:b,priorityLevel:C,startTime:$,expirationTime:x,sortIndex:-1},$>ie?(C.sortIndex=$,t(u,C),n(l)===null&&C===n(u)&&(v?(d(T),T=-1):v=!0,ce(y,$-ie))):(C.sortIndex=x,t(l,C),w||g||(w=!0,me(E))),C},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(C){var b=m;return function(){var $=m;m=b;try{return C.apply(this,arguments)}finally{m=$}}}})(Rp);(function(e){e.exports=Rp})(t0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=I,ut=Yl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Op=new Set,zi={};function mr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(zi[e]=t,e=0;e<t.length;e++)Op.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,n0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wd={},Kd={};function r0(e){return Xl.call(Kd,e)?!0:Xl.call(Wd,e)?!1:n0.test(e)?Kd[e]=!0:(Wd[e]=!0,!1)}function i0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function o0(e,t,n,r){if(t===null||typeof t>"u"||i0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,vc);$e[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,vc);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,vc);$e[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function yc(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(o0(t,n,i,r)&&(n=null),r||i===null?r0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=Gd&&e[Gd]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,il;function Si(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var ol=!1;function sl(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function s0(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case kr:return"Portal";case Jl:return"Profiler";case wc:return"StrictMode";case Zl:return"Suspense";case eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lp:return(e.displayName||"Context")+".Consumer";case Np:return(e._context.displayName||"Context")+".Provider";case Sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:tu(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return tu(e(t))}catch{}}return null}function a0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(t);case 8:return t===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e){var t=bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=l0(e))}function Mp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nu(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $p(e,t){t=t.checked,t!=null&&yc(e,"checked",t,!1)}function ru(e,t){$p(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&iu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function iu(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _i=Array.isArray;function $r(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(_i(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Fp(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Up(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Up(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u0=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){u0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function Vp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var c0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(e,t){if(t){if(c0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,Fr=null,Ur=null;function Jd(e){if(e=go(e)){if(typeof cu!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ca(t),cu(e.stateNode,e.type,t))}}function Bp(e){Fr?Ur?Ur.push(e):Ur=[e]:Fr=e}function Hp(){if(Fr){var e=Fr,t=Ur;if(Ur=Fr=null,Jd(e),t)for(e=0;e<t.length;e++)Jd(t[e])}}function Wp(e,t){return e(t)}function Kp(){}var al=!1;function Gp(e,t,n){if(al)return e(t,n);al=!0;try{return Wp(e,t,n)}finally{al=!1,(Fr!==null||Ur!==null)&&(Kp(),Hp())}}function Vi(e,t){var n=e.stateNode;if(n===null)return null;var r=ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var du=!1;if(rn)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){du=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{du=!1}function d0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ti=!1,ys=null,ws=!1,fu=null,f0={onError:function(e){Ti=!0,ys=e}};function h0(e,t,n,r,i,o,s,a,l){Ti=!1,ys=null,d0.apply(f0,arguments)}function p0(e,t,n,r,i,o,s,a,l){if(h0.apply(this,arguments),Ti){if(Ti){var u=ys;Ti=!1,ys=null}else throw Error(k(198));ws||(ws=!0,fu=u)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zd(e){if(gr(e)!==e)throw Error(k(188))}function m0(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zd(i),e;if(o===r)return Zd(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Qp(e){return e=m0(e),e!==null?Yp(e):null}function Yp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yp(e);if(t!==null)return t;e=e.sibling}return null}var Xp=ut.unstable_scheduleCallback,ef=ut.unstable_cancelCallback,g0=ut.unstable_shouldYield,v0=ut.unstable_requestPaint,Ee=ut.unstable_now,y0=ut.unstable_getCurrentPriorityLevel,Ic=ut.unstable_ImmediatePriority,Jp=ut.unstable_UserBlockingPriority,Ss=ut.unstable_NormalPriority,w0=ut.unstable_LowPriority,Zp=ut.unstable_IdlePriority,sa=null,Ut=null;function S0(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:I0,_0=Math.log,E0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(_0(e)/E0|0)|0}var Oo=64,No=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ei(a):(o&=s,o!==0&&(r=Ei(o)))}else s=n&~i,s!==0?r=Ei(s):o!==0&&(r=Ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function k0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Rt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=k0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function em(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function C0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function tm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nm,Tc,rm,im,om,pu=!1,Lo=[],Cn=null,An=null,Pn=null,Bi=new Map,Hi=new Map,vn=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function pi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=go(t),t!==null&&Tc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P0(e,t,n,r,i){switch(t){case"focusin":return Cn=pi(Cn,e,t,n,r,i),!0;case"dragenter":return An=pi(An,e,t,n,r,i),!0;case"mouseover":return Pn=pi(Pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,pi(Bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hi.set(o,pi(Hi.get(o)||null,e,t,n,r,i)),!0}return!1}function sm(e){var t=qn(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=qp(n),t!==null){e.blockedOn=t,om(e.priority,function(){rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return t=go(n),t!==null&&Tc(t),e.blockedOn=n,!1;t.shift()}return!0}function nf(e,t,n){Jo(e)&&n.delete(t)}function R0(){pu=!1,Cn!==null&&Jo(Cn)&&(Cn=null),An!==null&&Jo(An)&&(An=null),Pn!==null&&Jo(Pn)&&(Pn=null),Bi.forEach(nf),Hi.forEach(nf)}function mi(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,R0)))}function Wi(e){function t(i){return mi(i,e)}if(0<Lo.length){mi(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&mi(Cn,e),An!==null&&mi(An,e),Pn!==null&&mi(Pn,e),Bi.forEach(t),Hi.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)sm(n),n.blockedOn===null&&vn.shift()}var zr=dn.ReactCurrentBatchConfig,Es=!0;function x0(e,t,n,r){var i=te,o=zr.transition;zr.transition=null;try{te=1,Cc(e,t,n,r)}finally{te=i,zr.transition=o}}function O0(e,t,n,r){var i=te,o=zr.transition;zr.transition=null;try{te=4,Cc(e,t,n,r)}finally{te=i,zr.transition=o}}function Cc(e,t,n,r){if(Es){var i=mu(e,t,n,r);if(i===null)yl(e,t,r,Is,n),tf(e,r);else if(P0(i,e,t,n,r))r.stopPropagation();else if(tf(e,r),t&4&&-1<A0.indexOf(e)){for(;i!==null;){var o=go(i);if(o!==null&&nm(o),o=mu(e,t,n,r),o===null&&yl(e,t,r,Is,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Is=null;function mu(e,t,n,r){if(Is=null,e=Ec(r),e=qn(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Is=e,null}function am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y0()){case Ic:return 1;case Jp:return 4;case Ss:case w0:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var En=null,Ac=null,Zo=null;function lm(){if(Zo)return Zo;var e,t=Ac,n=t.length,r,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zo=i.slice(e,1<r?1-r:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function rf(){return!1}function dt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Do:rf,this.isPropagationStopped=rf,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=dt(oi),mo=ye({},oi,{view:0,detail:0}),N0=dt(mo),ul,cl,gi,aa=ye({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(ul=e.screenX-gi.screenX,cl=e.screenY-gi.screenY):cl=ul=0,gi=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),of=dt(aa),L0=ye({},aa,{dataTransfer:0}),D0=dt(L0),b0=ye({},mo,{relatedTarget:0}),dl=dt(b0),M0=ye({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=dt(M0),F0=ye({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U0=dt(F0),z0=ye({},oi,{data:0}),sf=dt(z0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B0[e])?!!t[e]:!1}function Rc(){return H0}var W0=ye({},mo,{key:function(e){if(e.key){var t=j0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=dt(W0),G0=ye({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=dt(G0),q0=ye({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Q0=dt(q0),Y0=ye({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=dt(Y0),J0=ye({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=dt(J0),e1=[9,13,27,32],xc=rn&&"CompositionEvent"in window,Ci=null;rn&&"documentMode"in document&&(Ci=document.documentMode);var t1=rn&&"TextEvent"in window&&!Ci,um=rn&&(!xc||Ci&&8<Ci&&11>=Ci),lf=String.fromCharCode(32),uf=!1;function cm(e,t){switch(e){case"keyup":return e1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function n1(e,t){switch(e){case"compositionend":return dm(t);case"keypress":return t.which!==32?null:(uf=!0,lf);case"textInput":return e=t.data,e===lf&&uf?null:e;default:return null}}function r1(e,t){if(Cr)return e==="compositionend"||!xc&&cm(e,t)?(e=lm(),Zo=Ac=En=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return um&&t.locale!=="ko"?null:t.data;default:return null}}var i1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i1[e.type]:t==="textarea"}function fm(e,t,n,r){Bp(r),t=ks(t,"onChange"),0<t.length&&(n=new Pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,Ki=null;function o1(e){Im(e,0)}function la(e){var t=Rr(e);if(Mp(t))return e}function s1(e,t){if(e==="change")return t}var hm=!1;if(rn){var fl;if(rn){var hl="oninput"in document;if(!hl){var df=document.createElement("div");df.setAttribute("oninput","return;"),hl=typeof df.oninput=="function"}fl=hl}else fl=!1;hm=fl&&(!document.documentMode||9<document.documentMode)}function ff(){Ai&&(Ai.detachEvent("onpropertychange",pm),Ki=Ai=null)}function pm(e){if(e.propertyName==="value"&&la(Ki)){var t=[];fm(t,Ki,e,Ec(e)),Gp(o1,t)}}function a1(e,t,n){e==="focusin"?(ff(),Ai=t,Ki=n,Ai.attachEvent("onpropertychange",pm)):e==="focusout"&&ff()}function l1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return la(Ki)}function u1(e,t){if(e==="click")return la(t)}function c1(e,t){if(e==="input"||e==="change")return la(t)}function d1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:d1;function Gi(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xl.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function hf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,t){var n=hf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hf(n)}}function mm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gm(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f1(e){var t=gm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mm(n.ownerDocument.documentElement,n)){if(r!==null&&Oc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pf(n,o);var s=pf(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h1=rn&&"documentMode"in document&&11>=document.documentMode,Ar=null,gu=null,Pi=null,vu=!1;function mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||Ar==null||Ar!==vs(r)||(r=Ar,"selectionStart"in r&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Gi(Pi,r)||(Pi=r,r=ks(gu,"onSelect"),0<r.length&&(t=new Pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},pl={},vm={};rn&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ua(e){if(pl[e])return pl[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vm)return pl[e]=t[n];return e}var ym=ua("animationend"),wm=ua("animationiteration"),Sm=ua("animationstart"),_m=ua("transitionend"),Em=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Em.set(e,t),mr(t,[e])}for(var ml=0;ml<gf.length;ml++){var gl=gf[ml],p1=gl.toLowerCase(),m1=gl[0].toUpperCase()+gl.slice(1);jn(p1,"on"+m1)}jn(ym,"onAnimationEnd");jn(wm,"onAnimationIteration");jn(Sm,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(_m,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function vf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p0(r,t,void 0,e),e.currentTarget=null}function Im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;vf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;vf(i,a,u),o=l}}}if(ws)throw e=fu,ws=!1,fu=null,e}function de(e,t){var n=t[Eu];n===void 0&&(n=t[Eu]=new Set);var r=e+"__bubble";n.has(r)||(km(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),km(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function qi(e){if(!e[Mo]){e[Mo]=!0,Op.forEach(function(n){n!=="selectionchange"&&(g1.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,vl("selectionchange",!1,t))}}function km(e,t,n,r){switch(am(t)){case 1:var i=x0;break;case 4:i=O0;break;default:i=Cc}n=i.bind(null,t,n,e),i=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Gp(function(){var u=o,f=Ec(n),h=[];e:{var m=Em.get(e);if(m!==void 0){var g=Pc,w=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":g=K0;break;case"focusin":w="focus",g=dl;break;case"focusout":w="blur",g=dl;break;case"beforeblur":case"afterblur":g=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Q0;break;case ym:case wm:case Sm:g=$0;break;case _m:g=X0;break;case"scroll":g=N0;break;case"wheel":g=Z0;break;case"copy":case"cut":case"paste":g=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=af}var v=(t&4)!==0,_=!v&&e==="scroll",d=v?m!==null?m+"Capture":null:m;v=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Vi(c,d),y!=null&&v.push(Qi(c,y,p)))),_)break;c=c.return}0<v.length&&(m=new g(m,w,null,n,f),h.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==uu&&(w=n.relatedTarget||n.fromElement)&&(qn(w)||w[on]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?qn(w):null,w!==null&&(_=gr(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=of,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=af,y="onPointerLeave",d="onPointerEnter",c="pointer"),_=g==null?m:Rr(g),p=w==null?m:Rr(w),m=new v(y,c+"leave",g,n,f),m.target=_,m.relatedTarget=p,y=null,qn(f)===u&&(v=new v(d,c+"enter",w,n,f),v.target=p,v.relatedTarget=_,y=v),_=y,g&&w)t:{for(v=g,d=w,c=0,p=v;p;p=Sr(p))c++;for(p=0,y=d;y;y=Sr(y))p++;for(;0<c-p;)v=Sr(v),c--;for(;0<p-c;)d=Sr(d),p--;for(;c--;){if(v===d||d!==null&&v===d.alternate)break t;v=Sr(v),d=Sr(d)}v=null}else v=null;g!==null&&yf(h,m,g,v,!1),w!==null&&_!==null&&yf(h,_,w,v,!0)}}e:{if(m=u?Rr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=s1;else if(cf(m))if(hm)E=c1;else{E=l1;var A=a1}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=u1);if(E&&(E=E(e,u))){fm(h,E,n,f);break e}A&&A(e,m,u),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&iu(m,"number",m.value)}switch(A=u?Rr(u):window,e){case"focusin":(cf(A)||A.contentEditable==="true")&&(Ar=A,gu=u,Pi=null);break;case"focusout":Pi=gu=Ar=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,mf(h,n,f);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":mf(h,n,f)}var P;if(xc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Cr?cm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(um&&n.locale!=="ko"&&(Cr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Cr&&(P=lm()):(En=f,Ac="value"in En?En.value:En.textContent,Cr=!0)),A=ks(u,T),0<A.length&&(T=new sf(T,e,null,n,f),h.push({event:T,listeners:A}),P?T.data=P:(P=dm(n),P!==null&&(T.data=P)))),(P=t1?n1(e,n):r1(e,n))&&(u=ks(u,"onBeforeInput"),0<u.length&&(f=new sf("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=P))}Im(h,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vi(e,n),o!=null&&r.unshift(Qi(e,o,i)),o=Vi(e,t),o!=null&&r.push(Qi(e,o,i))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yf(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vi(n,o),l!=null&&s.unshift(Qi(n,l,a))):i||(l=Vi(n,o),l!=null&&s.push(Qi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var v1=/\r\n?/g,y1=/\u0000|\uFFFD/g;function wf(e){return(typeof e=="string"?e:""+e).replace(v1,`
`).replace(y1,"")}function $o(e,t,n){if(t=wf(t),wf(e)!==t&&n)throw Error(k(425))}function Ts(){}var yu=null,wu=null;function Su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(e){return Sf.resolve(null).then(e).catch(_1)}:_u;function _1(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var si=Math.random().toString(36).slice(2),Mt="__reactFiber$"+si,Yi="__reactProps$"+si,on="__reactContainer$"+si,Eu="__reactEvents$"+si,E1="__reactListeners$"+si,I1="__reactHandles$"+si;function qn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_f(e);e!==null;){if(n=e[Mt])return n;e=_f(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[Mt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ca(e){return e[Yi]||null}var Iu=[],xr=-1;function Vn(e){return{current:e}}function fe(e){0>xr||(e.current=Iu[xr],Iu[xr]=null,xr--)}function le(e,t){xr++,Iu[xr]=e.current,e.current=t}var zn={},Ve=Vn(zn),tt=Vn(!1),ir=zn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function Cs(){fe(tt),fe(Ve)}function Ef(e,t,n){if(Ve.current!==zn)throw Error(k(168));le(Ve,t),le(tt,n)}function Tm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,a0(e)||"Unknown",i));return ye({},n,r)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,ir=Ve.current,le(Ve,e),le(tt,tt.current),!0}function If(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Tm(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,fe(tt),fe(Ve),le(Ve,e)):fe(tt),le(tt,n)}var Qt=null,da=!1,Sl=!1;function Cm(e){Qt===null?Qt=[e]:Qt.push(e)}function k1(e){da=!0,Cm(e)}function Bn(){if(!Sl&&Qt!==null){Sl=!0;var e=0,t=te;try{var n=Qt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,da=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),Xp(Ic,Bn),i}finally{te=t,Sl=!1}}return null}var Or=[],Nr=0,Ps=null,Rs=0,pt=[],mt=0,or=null,Yt=1,Xt="";function Hn(e,t){Or[Nr++]=Rs,Or[Nr++]=Ps,Ps=e,Rs=t}function Am(e,t,n){pt[mt++]=Yt,pt[mt++]=Xt,pt[mt++]=or,or=e;var r=Yt;e=Xt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var o=32-Rt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Yt=1<<32-Rt(t)+i|n<<i|r,Xt=o+e}else Yt=1<<o|n<<i|r,Xt=e}function Nc(e){e.return!==null&&(Hn(e,1),Am(e,1,0))}function Lc(e){for(;e===Ps;)Ps=Or[--Nr],Or[Nr]=null,Rs=Or[--Nr],Or[Nr]=null;for(;e===or;)or=pt[--mt],pt[mt]=null,Xt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var at=null,ot=null,pe=!1,Pt=null;function Pm(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:Yt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tu(e){if(pe){var t=ot;if(t){var n=t;if(!kf(e,t)){if(ku(e))throw Error(k(418));t=Rn(n.nextSibling);var r=at;t&&kf(e,t)?Pm(r,n):(e.flags=e.flags&-4097|2,pe=!1,at=e)}}else{if(ku(e))throw Error(k(418));e.flags=e.flags&-4097|2,pe=!1,at=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Fo(e){if(e!==at)return!1;if(!pe)return Tf(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Su(e.type,e.memoizedProps)),t&&(t=ot)){if(ku(e))throw Rm(),Error(k(418));for(;t;)Pm(e,t),t=Rn(t.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?Rn(e.stateNode.nextSibling):null;return!0}function Rm(){for(var e=ot;e;)e=Rn(e.nextSibling)}function qr(){ot=at=null,pe=!1}function Dc(e){Pt===null?Pt=[e]:Pt.push(e)}var T1=dn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var xs=Vn(null),Os=null,Lr=null,bc=null;function Mc(){bc=Lr=Os=null}function $c(e){var t=xs.current;fe(xs),e._currentValue=t}function Cu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jr(e,t){Os=e,bc=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(Os===null)throw Error(k(308));Lr=e,Os.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var Qn=null;function Fc(e){Qn===null?Qn=[e]:Qn.push(e)}function xm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fc(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Fc(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}function Cf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ns(e,t,n,r){var i=e.updateQueue;gn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=ye({},h,m);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=s,e.lanes=s,e.memoizedState=h}}function Af(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Nm=new xp.Component().refs;function Au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fa={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(xt(t,e,i,r),ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(xt(t,e,i,r),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Nn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(xt(t,e,r,n),ts(t,e,r))}};function Pf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,o):!0}function Lm(e,t,n){var r=!1,i=zn,o=t.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=nt(t)?ir:Ve.current,r=t.contextTypes,o=(r=r!=null)?Gr(e,i):zn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fa.enqueueReplaceState(t,t.state,null)}function Pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Nm,Uc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=nt(t)?ir:Ve.current,i.context=Gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Au(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fa.enqueueReplaceState(i,i.state,null),Ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Nm&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xf(e){var t=e._init;return t(e._payload)}function Dm(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Ln(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=Al(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,y){var E=p.type;return E===Tr?f(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&xf(E)===c.type)?(y=i(c,p.props),y.ref=vi(d,c,p),y.return=d,y):(y=as(p.type,p.key,p.props,null,d.mode,y),y.ref=vi(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Pl(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function f(d,c,p,y,E){return c===null||c.tag!==7?(c=tr(p,d.mode,y,E),c.return=d,c):(c=i(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Al(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Po:return p=as(c.type,c.key,c.props,null,d.mode,p),p.ref=vi(d,null,c),p.return=d,p;case kr:return c=Pl(c,d.mode,p),c.return=d,c;case mn:var y=c._init;return h(d,y(c._payload),p)}if(_i(c)||fi(c))return c=tr(c,d.mode,p,null),c.return=d,c;Uo(d,c)}return null}function m(d,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Po:return p.key===E?l(d,c,p,y):null;case kr:return p.key===E?u(d,c,p,y):null;case mn:return E=p._init,m(d,c,E(p._payload),y)}if(_i(p)||fi(p))return E!==null?null:f(d,c,p,y,null);Uo(d,p)}return null}function g(d,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,E);case kr:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,E);case mn:var A=y._init;return g(d,c,p,A(y._payload),E)}if(_i(y)||fi(y))return d=d.get(p)||null,f(c,d,y,E,null);Uo(c,y)}return null}function w(d,c,p,y){for(var E=null,A=null,P=c,T=c=0,z=null;P!==null&&T<p.length;T++){P.index>T?(z=P,P=null):z=P.sibling;var D=m(d,P,p[T],y);if(D===null){P===null&&(P=z);break}e&&P&&D.alternate===null&&t(d,P),c=o(D,c,T),A===null?E=D:A.sibling=D,A=D,P=z}if(T===p.length)return n(d,P),pe&&Hn(d,T),E;if(P===null){for(;T<p.length;T++)P=h(d,p[T],y),P!==null&&(c=o(P,c,T),A===null?E=P:A.sibling=P,A=P);return pe&&Hn(d,T),E}for(P=r(d,P);T<p.length;T++)z=g(P,d,T,p[T],y),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?T:z.key),c=o(z,c,T),A===null?E=z:A.sibling=z,A=z);return e&&P.forEach(function(se){return t(d,se)}),pe&&Hn(d,T),E}function v(d,c,p,y){var E=fi(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var A=E=null,P=c,T=c=0,z=null,D=p.next();P!==null&&!D.done;T++,D=p.next()){P.index>T?(z=P,P=null):z=P.sibling;var se=m(d,P,D.value,y);if(se===null){P===null&&(P=z);break}e&&P&&se.alternate===null&&t(d,P),c=o(se,c,T),A===null?E=se:A.sibling=se,A=se,P=z}if(D.done)return n(d,P),pe&&Hn(d,T),E;if(P===null){for(;!D.done;T++,D=p.next())D=h(d,D.value,y),D!==null&&(c=o(D,c,T),A===null?E=D:A.sibling=D,A=D);return pe&&Hn(d,T),E}for(P=r(d,P);!D.done;T++,D=p.next())D=g(P,d,T,D.value,y),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?T:D.key),c=o(D,c,T),A===null?E=D:A.sibling=D,A=D);return e&&P.forEach(function(Y){return t(d,Y)}),pe&&Hn(d,T),E}function _(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Tr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Po:e:{for(var E=p.key,A=c;A!==null;){if(A.key===E){if(E=p.type,E===Tr){if(A.tag===7){n(d,A.sibling),c=i(A,p.props.children),c.return=d,d=c;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&xf(E)===A.type){n(d,A.sibling),c=i(A,p.props),c.ref=vi(d,A,p),c.return=d,d=c;break e}n(d,A);break}else t(d,A);A=A.sibling}p.type===Tr?(c=tr(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=as(p.type,p.key,p.props,null,d.mode,y),y.ref=vi(d,c,p),y.return=d,d=y)}return s(d);case kr:e:{for(A=p.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Pl(p,d.mode,y),c.return=d,d=c}return s(d);case mn:return A=p._init,_(d,c,A(p._payload),y)}if(_i(p))return w(d,c,p,y);if(fi(p))return v(d,c,p,y);Uo(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Al(p,d.mode,y),c.return=d,d=c),s(d)):n(d,c)}return _}var Qr=Dm(!0),bm=Dm(!1),vo={},zt=Vn(vo),Xi=Vn(vo),Ji=Vn(vo);function Yn(e){if(e===vo)throw Error(k(174));return e}function zc(e,t){switch(le(Ji,t),le(Xi,e),le(zt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:su(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=su(t,e)}fe(zt),le(zt,t)}function Yr(){fe(zt),fe(Xi),fe(Ji)}function Mm(e){Yn(Ji.current);var t=Yn(zt.current),n=su(t,e.type);t!==n&&(le(Xi,e),le(zt,n))}function jc(e){Xi.current===e&&(fe(zt),fe(Xi))}var ge=Vn(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Vc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var ns=dn.ReactCurrentDispatcher,El=dn.ReactCurrentBatchConfig,sr=0,ve=null,ke=null,Re=null,Ds=!1,Ri=!1,Zi=0,C1=0;function Ue(){throw Error(k(321))}function Bc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,o){if(sr=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?x1:O1,e=n(r,i),Ri){o=0;do{if(Ri=!1,Zi=0,25<=o)throw Error(k(301));o+=1,Re=ke=null,t.updateQueue=null,ns.current=N1,e=n(r,i)}while(Ri)}if(ns.current=bs,t=ke!==null&&ke.next!==null,sr=0,Re=ke=ve=null,Ds=!1,t)throw Error(k(300));return e}function Wc(){var e=Zi!==0;return Zi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function Et(){if(ke===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,ke=e;else{if(e===null)throw Error(k(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function eo(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=Et(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((sr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,ve.lanes|=f,ar|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ot(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=Et(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ot(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $m(){}function Fm(e,t){var n=ve,r=Et(),i=t(),o=!Ot(r.memoizedState,i);if(o&&(r.memoizedState=i,et=!0),r=r.queue,Kc(jm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,to(9,zm.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(k(349));sr&30||Um(n,t,i)}return i}function Um(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zm(e,t,n,r){t.value=n,t.getSnapshot=r,Vm(t)&&Bm(e)}function jm(e,t,n){return n(function(){Vm(t)&&Bm(e)})}function Vm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function Bm(e){var t=sn(e,1);t!==null&&xt(t,e,1,-1)}function Of(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=R1.bind(null,ve,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hm(){return Et().memoizedState}function rs(e,t,n,r){var i=bt();ve.flags|=e,i.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var i=Et();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&Bc(r,s.deps)){i.memoizedState=to(t,n,o,r);return}}ve.flags|=e,i.memoizedState=to(1|t,n,o,r)}function Nf(e,t){return rs(8390656,8,e,t)}function Kc(e,t){return ha(2048,8,e,t)}function Wm(e,t){return ha(4,2,e,t)}function Km(e,t){return ha(4,4,e,t)}function Gm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qm(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,Gm.bind(null,t,e),n)}function Gc(){}function Qm(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ym(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xm(e,t,n){return sr&21?(Ot(n,t)||(n=em(),ve.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function A1(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{te=n,El.transition=r}}function Jm(){return Et().memoizedState}function P1(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zm(e))eg(t,n);else if(n=xm(e,t,n,r),n!==null){var i=Ke();xt(n,e,r,i),tg(n,t,r)}}function R1(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zm(e))eg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,s)){var l=t.interleaved;l===null?(i.next=i,Fc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=xm(e,t,i,r),n!==null&&(i=Ke(),xt(n,e,r,i),tg(n,t,r))}}function Zm(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function eg(e,t){Ri=Ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}var bs={readContext:_t,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},x1={readContext:_t,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Nf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,Gm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=P1.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Of,useDebugValue:Gc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Of(!1),t=e[0];return e=A1.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=bt();if(pe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),xe===null)throw Error(k(349));sr&30||Um(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Nf(jm.bind(null,r,o,e),[e]),r.flags|=2048,to(9,zm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=xe.identifierPrefix;if(pe){var n=Xt,r=Yt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=C1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O1={readContext:_t,useCallback:Qm,useContext:_t,useEffect:Kc,useImperativeHandle:qm,useInsertionEffect:Wm,useLayoutEffect:Km,useMemo:Ym,useReducer:Il,useRef:Hm,useState:function(){return Il(eo)},useDebugValue:Gc,useDeferredValue:function(e){var t=Et();return Xm(t,ke.memoizedState,e)},useTransition:function(){var e=Il(eo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:$m,useSyncExternalStore:Fm,useId:Jm,unstable_isNewReconciler:!1},N1={readContext:_t,useCallback:Qm,useContext:_t,useEffect:Kc,useImperativeHandle:qm,useInsertionEffect:Wm,useLayoutEffect:Km,useMemo:Ym,useReducer:kl,useRef:Hm,useState:function(){return kl(eo)},useDebugValue:Gc,useDeferredValue:function(e){var t=Et();return ke===null?t.memoizedState=e:Xm(t,ke.memoizedState,e)},useTransition:function(){var e=kl(eo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:$m,useSyncExternalStore:Fm,useId:Jm,unstable_isNewReconciler:!1};function Xr(e,t){try{var n="",r=t;do n+=s0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L1=typeof WeakMap=="function"?WeakMap:Map;function ng(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,Uu=r),Ru(e,t)},n}function rg(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Lf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=G1.bind(null,e,t,n),t.then(e,e))}function Df(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var D1=dn.ReactCurrentOwner,et=!1;function He(e,t,n,r){t.child=e===null?bm(t,null,n,r):Qr(t,e.child,n,r)}function Mf(e,t,n,r,i){n=n.render;var o=t.ref;return jr(t,i),r=Hc(e,t,n,r,o,i),n=Wc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(pe&&n&&Nc(t),t.flags|=1,He(e,t,r,i),t.child)}function $f(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!td(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ig(e,t,o,r,i)):(e=as(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(s,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function ig(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gi(o,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,an(e,t,i)}return xu(e,t,n,r,i)}function og(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(br,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(br,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(br,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(br,it),it|=r;return He(e,t,i,n),t.child}function sg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xu(e,t,n,r,i){var o=nt(n)?ir:Ve.current;return o=Gr(t,o),jr(t,i),n=Hc(e,t,n,r,o,i),r=Wc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(pe&&r&&Nc(t),t.flags|=1,He(e,t,n,i),t.child)}function Ff(e,t,n,r,i){if(nt(n)){var o=!0;As(t)}else o=!1;if(jr(t,i),t.stateNode===null)is(e,t),Lm(t,n,r),Pu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=nt(n)?ir:Ve.current,u=Gr(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rf(t,s,r,u),gn=!1;var m=t.memoizedState;s.state=m,Ns(t,r,s,i),l=t.memoizedState,a!==r||m!==l||tt.current||gn?(typeof f=="function"&&(Au(t,n,f,r),l=t.memoizedState),(a=gn||Pf(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Om(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ct(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?ir:Ve.current,l=Gr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&Rf(t,s,r,l),gn=!1,m=t.memoizedState,s.state=m,Ns(t,r,s,i);var w=t.memoizedState;a!==h||m!==w||tt.current||gn?(typeof g=="function"&&(Au(t,n,g,r),w=t.memoizedState),(u=gn||Pf(t,n,u,r,m,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,o,i)}function Ou(e,t,n,r,i,o){sg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&If(t,n,!1),an(e,t,o);r=t.stateNode,D1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Qr(t,e.child,null,o),t.child=Qr(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&If(t,n,!0),t.child}function ag(e){var t=e.stateNode;t.pendingContext?Ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ef(e,t.context,!1),zc(e,t.containerInfo)}function Uf(e,t,n,r,i){return qr(),Dc(i),t.flags|=256,He(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function lg(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(ge,i&1),e===null)return Tu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ga(s,r,0,null),e=tr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lu(n),t.memoizedState=Nu,e):qc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return b1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ln(a,o):(o=tr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Lu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Nu,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qc(e,t){return t=ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&Dc(r),Qr(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(k(422))),zo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ga({mode:"visible",children:r.children},i,0,null),o=tr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qr(t,e.child,null,s),t.child.memoizedState=Lu(s),t.memoizedState=Nu,o);if(!(t.mode&1))return zo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Tl(o,r,void 0),zo(e,t,s,r)}if(a=(s&e.childLanes)!==0,et||a){if(r=xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sn(e,i),xt(r,e,i,-1))}return ed(),r=Tl(Error(k(421))),zo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=q1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=Rn(i.nextSibling),at=t,pe=!0,Pt=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=Xt,pt[mt++]=or,Yt=e.id,Xt=e.overflow,or=t),t=qc(t,r.children),t.flags|=4096,t)}function zf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cu(e.return,t,n)}function Cl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ug(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zf(e,n,t);else if(e.tag===19)zf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ls(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ls(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,o);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M1(e,t,n){switch(t.tag){case 3:ag(t),qr();break;case 5:Mm(t);break;case 1:nt(t.type)&&As(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?lg(e,t,n):(le(ge,ge.current&1),e=an(e,t,n),e!==null?e.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ug(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,og(e,t,n)}return an(e,t,n)}var cg,Du,dg,fg;cg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};dg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(zt.current);var o=null;switch(n){case"input":i=nu(e,i),r=nu(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=ou(e,i),r=ou(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ts)}au(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};fg=function(e,t,n,r){n!==r&&(t.flags|=4)};function yi(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $1(e,t,n){var r=t.pendingProps;switch(Lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return nt(t.type)&&Cs(),ze(t),null;case 3:return r=t.stateNode,Yr(),fe(tt),fe(Ve),Vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Vu(Pt),Pt=null))),Du(e,t),ze(t),null;case 5:jc(t);var i=Yn(Ji.current);if(n=t.type,e!==null&&t.stateNode!=null)dg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ze(t),null}if(e=Yn(zt.current),Fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Yi]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)de(Ii[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":qd(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":Yd(r,o),de("invalid",r)}au(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),i=["children",""+a]):zi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&de("scroll",r)}switch(n){case"input":Ro(r),Qd(r,o,!0);break;case"textarea":Ro(r),Xd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ts)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Up(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Mt]=t,e[Yi]=r,cg(e,t,!1,!1),t.stateNode=e;e:{switch(s=lu(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)de(Ii[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":qd(e,r),i=nu(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":Yd(e,r),i=ou(e,r),de("invalid",e);break;default:i=r}au(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(e,l):typeof l=="number"&&ji(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&yc(e,o,l,s))}switch(n){case"input":Ro(e),Qd(e,r,!1);break;case"textarea":Ro(e),Xd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$r(e,!!r.multiple,o,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ts)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)fg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Yn(Ji.current),Yn(zt.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:$o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return ze(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ot!==null&&t.mode&1&&!(t.flags&128))Rm(),qr(),t.flags|=98560,o=!1;else if(o=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Mt]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else Pt!==null&&(Vu(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Ce===0&&(Ce=3):ed())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Yr(),Du(e,t),e===null&&qi(t.stateNode.containerInfo),ze(t),null;case 10:return $c(t.type._context),ze(t),null;case 17:return nt(t.type)&&Cs(),ze(t),null;case 19:if(fe(ge),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)yi(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ls(e),s!==null){for(t.flags|=128,yi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Jr&&(t.flags|=128,r=!0,yi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ls(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pe)return ze(t),null}else 2*Ee()-o.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,yi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Zc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function F1(e,t){switch(Lc(t),t.tag){case 1:return nt(t.type)&&Cs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(),fe(tt),fe(Ve),Vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return Yr(),null;case 10:return $c(t.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var jo=!1,je=!1,U1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function bu(e,t,n){try{n()}catch(r){Se(e,t,r)}}var jf=!1;function z1(e,t){if(yu=Es,e=gm(),Oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Es=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,_=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ct(t.type,v),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){Se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=jf,jf=!1,w}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bu(t,n,o)}i=i.next}while(i!==r)}}function pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hg(e){var t=e.alternate;t!==null&&(e.alternate=null,hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Yi],delete t[Eu],delete t[E1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pg(e){return e.tag===5||e.tag===3||e.tag===4}function Vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ts));else if(r!==4&&(e=e.child,e!==null))for($u(e,t,n),e=e.sibling;e!==null;)$u(e,t,n),e=e.sibling}function Fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fu(e,t,n),e=e.sibling;e!==null;)Fu(e,t,n),e=e.sibling}var be=null,At=!1;function hn(e,t,n){for(n=n.child;n!==null;)mg(e,t,n),n=n.sibling}function mg(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:je||Dr(n,t);case 6:var r=be,i=At;be=null,hn(e,t,n),be=r,At=i,be!==null&&(At?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(At?(e=be,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Wi(e)):wl(be,n.stateNode));break;case 4:r=be,i=At,be=n.stateNode.containerInfo,At=!0,hn(e,t,n),be=r,At=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&bu(n,t,s),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!je&&(Dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,hn(e,t,n),je=r):hn(e,t,n);break;default:hn(e,t,n)}}function Bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U1),t.forEach(function(r){var i=Q1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,At=!1;break e;case 3:be=a.stateNode.containerInfo,At=!0;break e;case 4:be=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(be===null)throw Error(k(160));mg(o,s,i),be=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gg(t,e),t=t.sibling}function gg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),r&4){try{xi(3,e,e.return),pa(3,e)}catch(v){Se(e,e.return,v)}try{xi(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:Tt(t,e),Dt(e),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(Tt(t,e),Dt(e),r&512&&n!==null&&Dr(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(v){Se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$p(i,o),lu(a,s);var u=lu(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?Vp(i,h):f==="dangerouslySetInnerHTML"?zp(i,h):f==="children"?ji(i,h):yc(i,f,h,u)}switch(a){case"input":ru(i,o);break;case"textarea":Fp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?$r(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?$r(i,!!o.multiple,o.defaultValue,!0):$r(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yi]=o}catch(v){Se(e,e.return,v)}}break;case 6:if(Tt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Se(e,e.return,v)}}break;case 3:if(Tt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xc=Ee())),r&4&&Bf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,Tt(t,e),je=u):Tt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(h=L=f;L!==null;){switch(m=L,g=m.child,m.tag){case 0:case 11:case 14:case 15:xi(4,m,m.return);break;case 1:Dr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Dr(m,m.return);break;case 22:if(m.memoizedState!==null){Wf(h);continue}}g!==null?(g.return=m,L=g):Wf(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jp("display",s))}catch(v){Se(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Se(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tt(t,e),Dt(e),r&4&&Bf(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pg(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var o=Vf(e);Fu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Vf(e);$u(e,a,s);break;default:throw Error(k(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function j1(e,t,n){L=e,vg(e)}function vg(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||jo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=jo;var u=je;if(jo=s,(je=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Kf(i):l!==null?(l.return=s,L=l):Kf(i);for(;o!==null;)L=o,vg(o),o=o.sibling;L=i,jo=a,je=u}Hf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Hf(e)}}function Hf(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Af(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Af(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Wi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}je||t.flags&512&&Mu(t)}catch(m){Se(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Wf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Kf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pa(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var o=t.return;try{Mu(t)}catch(l){Se(t,o,l)}break;case 5:var s=t.return;try{Mu(t)}catch(l){Se(t,s,l)}}}catch(l){Se(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var V1=Math.ceil,Ms=dn.ReactCurrentDispatcher,Qc=dn.ReactCurrentOwner,yt=dn.ReactCurrentBatchConfig,q=0,xe=null,Ie=null,Me=0,it=0,br=Vn(0),Ce=0,no=null,ar=0,ma=0,Yc=0,Oi=null,Je=null,Xc=0,Jr=1/0,qt=null,$s=!1,Uu=null,On=null,Vo=!1,In=null,Fs=0,Ni=0,zu=null,os=-1,ss=0;function Ke(){return q&6?Ee():os!==-1?os:os=Ee()}function Nn(e){return e.mode&1?q&2&&Me!==0?Me&-Me:T1.transition!==null?(ss===0&&(ss=em()),ss):(e=te,e!==0||(e=window.event,e=e===void 0?16:am(e.type)),e):1}function xt(e,t,n,r){if(50<Ni)throw Ni=0,zu=null,Error(k(185));po(e,n,r),(!(q&2)||e!==xe)&&(e===xe&&(!(q&2)&&(ma|=n),Ce===4&&yn(e,Me)),rt(e,r),n===1&&q===0&&!(t.mode&1)&&(Jr=Ee()+500,da&&Bn()))}function rt(e,t){var n=e.callbackNode;T0(e,t);var r=_s(e,e===xe?Me:0);if(r===0)n!==null&&ef(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ef(n),t===1)e.tag===0?k1(Gf.bind(null,e)):Cm(Gf.bind(null,e)),S1(function(){!(q&6)&&Bn()}),n=null;else{switch(tm(r)){case 1:n=Ic;break;case 4:n=Jp;break;case 16:n=Ss;break;case 536870912:n=Zp;break;default:n=Ss}n=Tg(n,yg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yg(e,t){if(os=-1,ss=0,q&6)throw Error(k(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=_s(e,e===xe?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=q;q|=2;var o=Sg();(xe!==e||Me!==t)&&(qt=null,Jr=Ee()+500,er(e,t));do try{W1();break}catch(a){wg(e,a)}while(1);Mc(),Ms.current=o,q=i,Ie!==null?t=0:(xe=null,Me=0,t=Ce)}if(t!==0){if(t===2&&(i=hu(e),i!==0&&(r=i,t=ju(e,i))),t===1)throw n=no,er(e,0),yn(e,r),rt(e,Ee()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!B1(i)&&(t=Us(e,r),t===2&&(o=hu(e),o!==0&&(r=o,t=ju(e,o))),t===1))throw n=no,er(e,0),yn(e,r),rt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wn(e,Je,qt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=Xc+500-Ee(),10<t)){if(_s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_u(Wn.bind(null,e,Je,qt),t);break}Wn(e,Je,qt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Rt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=_u(Wn.bind(null,e,Je,qt),r);break}Wn(e,Je,qt);break;case 5:Wn(e,Je,qt);break;default:throw Error(k(329))}}}return rt(e,Ee()),e.callbackNode===n?yg.bind(null,e):null}function ju(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Us(e,t),e!==2&&(t=Je,Je=n,t!==null&&Vu(t)),e}function Vu(e){Je===null?Je=e:Je.push.apply(Je,e)}function B1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~Yc,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Gf(e){if(q&6)throw Error(k(327));Vr();var t=_s(e,0);if(!(t&1))return rt(e,Ee()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=hu(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=no,er(e,0),yn(e,t),rt(e,Ee()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Je,qt),rt(e,Ee()),null}function Jc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Jr=Ee()+500,da&&Bn())}}function lr(e){In!==null&&In.tag===0&&!(q&6)&&Vr();var t=q;q|=1;var n=yt.transition,r=te;try{if(yt.transition=null,te=1,e)return e()}finally{te=r,yt.transition=n,q=t,!(q&6)&&Bn()}}function Zc(){it=br.current,fe(br)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w1(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cs();break;case 3:Yr(),fe(tt),fe(Ve),Vc();break;case 5:jc(r);break;case 4:Yr();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:$c(r.type._context);break;case 22:case 23:Zc()}n=n.return}if(xe=e,Ie=e=Ln(e.current,null),Me=it=t,Ce=0,no=null,Yc=ma=ar=0,Je=Oi=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qn=null}return e}function wg(e,t){do{var n=Ie;try{if(Mc(),ns.current=bs,Ds){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ds=!1}if(sr=0,Re=ke=ve=null,Ri=!1,Zi=0,Qc.current=null,n===null||n.return===null){Ce=1,no=t,Ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Df(s);if(g!==null){g.flags&=-257,bf(g,s,a,o,t),g.mode&1&&Lf(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){Lf(o,u,t),ed();break e}l=Error(k(426))}}else if(pe&&a.mode&1){var _=Df(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),bf(_,s,a,o,t),Dc(Xr(l,a));break e}}o=l=Xr(l,a),Ce!==4&&(Ce=2),Oi===null?Oi=[o]:Oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=ng(o,l,t);Cf(o,d);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(On===null||!On.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=rg(o,a,t);Cf(o,y);break e}}o=o.return}while(o!==null)}Eg(n)}catch(E){t=E,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Sg(){var e=Ms.current;return Ms.current=bs,e===null?bs:e}function ed(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),xe===null||!(ar&268435455)&&!(ma&268435455)||yn(xe,Me)}function Us(e,t){var n=q;q|=2;var r=Sg();(xe!==e||Me!==t)&&(qt=null,er(e,t));do try{H1();break}catch(i){wg(e,i)}while(1);if(Mc(),q=n,Ms.current=r,Ie!==null)throw Error(k(261));return xe=null,Me=0,Ce}function H1(){for(;Ie!==null;)_g(Ie)}function W1(){for(;Ie!==null&&!g0();)_g(Ie)}function _g(e){var t=kg(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Eg(e):Ie=t,Qc.current=null}function Eg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=F1(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Ie=null;return}}else if(n=$1(n,t,it),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ce===0&&(Ce=5)}function Wn(e,t,n){var r=te,i=yt.transition;try{yt.transition=null,te=1,K1(e,t,n,r)}finally{yt.transition=i,te=r}return null}function K1(e,t,n,r){do Vr();while(In!==null);if(q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(C0(e,o),e===xe&&(Ie=xe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Tg(Ss,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var s=te;te=1;var a=q;q|=4,Qc.current=null,z1(e,n),gg(n,e),f1(wu),Es=!!yu,wu=yu=null,e.current=n,j1(n),v0(),q=a,te=s,yt.transition=o}else e.current=n;if(Vo&&(Vo=!1,In=e,Fs=i),o=e.pendingLanes,o===0&&(On=null),S0(n.stateNode),rt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($s)throw $s=!1,e=Uu,Uu=null,e;return Fs&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===zu?Ni++:(Ni=0,zu=e):Ni=0,Bn(),null}function Vr(){if(In!==null){var e=tm(Fs),t=yt.transition,n=te;try{if(yt.transition=null,te=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,Fs=0,q&6)throw Error(k(331));var i=q;for(q|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:xi(8,f,o)}var h=f.child;if(h!==null)h.return=f,L=h;else for(;L!==null;){f=L;var m=f.sibling,g=f.return;if(hg(f),f===u){L=null;break}if(m!==null){m.return=g,L=m;break}L=g}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xi(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,L=d;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){s=L;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,L=p;else e:for(s=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pa(9,a)}}catch(E){Se(a,a.return,E)}if(a===s){L=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,L=y;break e}L=a.return}}if(q=i,Bn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{te=n,yt.transition=t}}return!1}function qf(e,t,n){t=Xr(n,t),t=ng(e,t,1),e=xn(e,t,1),t=Ke(),e!==null&&(po(e,1,t),rt(e,t))}function Se(e,t,n){if(e.tag===3)qf(e,e,n);else for(;t!==null;){if(t.tag===3){qf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Xr(n,e),e=rg(t,e,1),t=xn(t,e,1),e=Ke(),t!==null&&(po(t,1,e),rt(t,e));break}}t=t.return}}function G1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Me&n)===n&&(Ce===4||Ce===3&&(Me&130023424)===Me&&500>Ee()-Xc?er(e,0):Yc|=n),rt(e,t)}function Ig(e,t){t===0&&(e.mode&1?(t=No,No<<=1,!(No&130023424)&&(No=4194304)):t=1);var n=Ke();e=sn(e,t),e!==null&&(po(e,t,n),rt(e,n))}function q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ig(e,n)}function Q1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ig(e,n)}var kg;kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,M1(e,t,n);et=!!(e.flags&131072)}else et=!1,pe&&t.flags&1048576&&Am(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;is(e,t),e=t.pendingProps;var i=Gr(t,Ve.current);jr(t,n),i=Hc(null,t,r,e,i,n);var o=Wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(o=!0,As(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(t),i.updater=fa,t.stateNode=i,i._reactInternals=t,Pu(t,r,e,n),t=Ou(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Nc(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=X1(r),e=Ct(r,e),i){case 0:t=xu(null,t,r,e,n);break e;case 1:t=Ff(null,t,r,e,n);break e;case 11:t=Mf(null,t,r,e,n);break e;case 14:t=$f(null,t,r,Ct(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),xu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Ff(e,t,r,i,n);case 3:e:{if(ag(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Om(e,t),Ns(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xr(Error(k(423)),t),t=Uf(e,t,r,n,i);break e}else if(r!==i){i=Xr(Error(k(424)),t),t=Uf(e,t,r,n,i);break e}else for(ot=Rn(t.stateNode.containerInfo.firstChild),at=t,pe=!0,Pt=null,n=bm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){t=an(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Mm(t),e===null&&Tu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Su(r,i)?s=null:o!==null&&Su(r,o)&&(t.flags|=32),sg(e,t),He(e,t,s,n),t.child;case 6:return e===null&&Tu(t),null;case 13:return lg(e,t,n);case 4:return zc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Mf(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,le(xs,r._currentValue),r._currentValue=s,o!==null)if(Ot(o.value,s)){if(o.children===i.children&&!tt.current){t=an(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=tn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Cu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jr(t,n),i=_t(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),$f(e,t,r,i,n);case 15:return ig(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),is(e,t),t.tag=1,nt(r)?(e=!0,As(t)):e=!1,jr(t,n),Lm(t,r,i),Pu(t,r,i,n),Ou(null,t,r,!0,e,n);case 19:return ug(e,t,n);case 22:return og(e,t,n)}throw Error(k(156,t.tag))};function Tg(e,t){return Xp(e,t)}function Y1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Y1(e,t,n,r)}function td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X1(e){if(typeof e=="function")return td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sc)return 11;if(e===_c)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")td(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tr:return tr(n.children,i,o,t);case wc:s=8,i|=8;break;case Jl:return e=gt(12,n,t,i|2),e.elementType=Jl,e.lanes=o,e;case Zl:return e=gt(13,n,t,i),e.elementType=Zl,e.lanes=o,e;case eu:return e=gt(19,n,t,i),e.elementType=eu,e.lanes=o,e;case Dp:return ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Np:s=10;break e;case Lp:s=9;break e;case Sc:s=11;break e;case _c:s=14;break e;case mn:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function ga(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nd(e,t,n,r,i,o,s,a,l){return e=new J1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(o),e}function Z1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cg(e){if(!e)return zn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(nt(n))return Tm(e,n,t)}return t}function Ag(e,t,n,r,i,o,s,a,l){return e=nd(n,r,!0,e,i,o,s,a,l),e.context=Cg(null),n=e.current,r=Ke(),i=Nn(n),o=tn(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,po(e,i,r),rt(e,r),e}function va(e,t,n,r){var i=t.current,o=Ke(),s=Nn(i);return n=Cg(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,s),e!==null&&(xt(e,i,s,o),ts(e,i,s)),s}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rd(e,t){Qf(e,t),(e=e.alternate)&&Qf(e,t)}function ew(){return null}var Pg=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}ya.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));va(e,t,null,null)};ya.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){va(null,e,null,null)}),t[on]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=im();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&sm(e)}};function od(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function tw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=zs(s);o.call(u)}}var s=Ag(t,r,e,0,null,!1,!1,"",Yf);return e._reactRootContainer=s,e[on]=s.current,qi(e.nodeType===8?e.parentNode:e),lr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zs(l);a.call(u)}}var l=nd(e,0,!1,null,null,!1,!1,"",Yf);return e._reactRootContainer=l,e[on]=l.current,qi(e.nodeType===8?e.parentNode:e),lr(function(){va(t,l,n,r)}),l}function Sa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=zs(s);a.call(l)}}va(t,s,e,i)}else s=tw(n,t,e,i,r);return zs(s)}nm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(kc(t,n|1),rt(t,Ee()),!(q&6)&&(Jr=Ee()+500,Bn()))}break;case 13:lr(function(){var r=sn(e,1);if(r!==null){var i=Ke();xt(r,e,1,i)}}),rd(e,1)}};Tc=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Ke();xt(t,e,134217728,n)}rd(e,134217728)}};rm=function(e){if(e.tag===13){var t=Nn(e),n=sn(e,t);if(n!==null){var r=Ke();xt(n,e,t,r)}rd(e,t)}};im=function(){return te};om=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};cu=function(e,t,n){switch(t){case"input":if(ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ca(r);if(!i)throw Error(k(90));Mp(r),ru(r,i)}}}break;case"textarea":Fp(e,n);break;case"select":t=n.value,t!=null&&$r(e,!!n.multiple,t,!1)}};Wp=Jc;Kp=lr;var nw={usingClientEntryPoint:!1,Events:[go,Rr,ca,Bp,Hp,Jc]},wi={findFiberByHostInstance:qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rw={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qp(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{sa=Bo.inject(rw),Ut=Bo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(t))throw Error(k(200));return Z1(e,t,null,n)};ct.createRoot=function(e,t){if(!od(e))throw Error(k(299));var n=!1,r="",i=Pg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,!1,r,i),e[on]=t.current,qi(e.nodeType===8?e.parentNode:e),new id(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Qp(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return lr(e)};ct.hydrate=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!od(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ag(t,null,e,1,n??null,i,!1,o,s),e[on]=t.current,qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ya(t)};ct.render=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!wa(e))throw Error(k(40));return e._reactRootContainer?(lr(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};ct.unstable_batchedUpdates=Jc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wa(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Sa(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ct})(e0);var Xf=Ql;ql.createRoot=Xf.createRoot,ql.hydrateRoot=Xf.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const Jf="popstate";function iw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Bu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:js(i)}return sw(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ow(){return Math.random().toString(36).substr(2,8)}function Zf(e,t){return{usr:e.state,key:e.key,idx:t}}function Bu(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ai(t):t,{state:n,key:t&&t.key||r||ow()})}function js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ai(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=kn.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(ro({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){a=kn.Pop;let _=f(),d=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:d})}function m(_,d){a=kn.Push;let c=Bu(v.location,_,d);n&&n(c,_),u=f()+1;let p=Zf(c,u),y=v.createHref(c);try{s.pushState(p,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:v.location,delta:1})}function g(_,d){a=kn.Replace;let c=Bu(v.location,_,d);n&&n(c,_),u=f();let p=Zf(c,u),y=v.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:v.location,delta:0})}function w(_){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof _=="string"?_:js(_);return Ae(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let v={get action(){return a},get location(){return e(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jf,h),l=_,()=>{i.removeEventListener(Jf,h),l=null}},createHref(_){return t(i,_)},createURL:w,encodeLocation(_){let d=w(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(_){return s.go(_)}};return v}var eh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eh||(eh={}));function aw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ai(t):t,i=ad(r.pathname||"/",n);if(i==null)return null;let o=Rg(e);lw(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=vw(o[a],Sw(i));return s}function Rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Dn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rg(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:mw(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of xg(o.path))i(o,s,l)}),t}function xg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=xg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function lw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uw=/^:\w+$/,cw=3,dw=2,fw=1,hw=10,pw=-2,th=e=>e==="*";function mw(e,t){let n=e.split("/"),r=n.length;return n.some(th)&&(r+=pw),t&&(r+=dw),n.filter(i=>!th(i)).reduce((i,o)=>i+(uw.test(o)?cw:o===""?fw:hw),r)}function gw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=yw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:Dn([i,f.pathname]),pathnameBase:kw(Dn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Dn([i,f.pathnameBase]))}return o}function yw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ww(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let m=a[h]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[f]=_w(a[h]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ww(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Sw(e){try{return decodeURI(e)}catch(t){return sd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _w(e,t){try{return decodeURIComponent(e)}catch(n){return sd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ew(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ai(e):e;return{pathname:n?n.startsWith("/")?n:Iw(n,t):t,search:Tw(r),hash:Cw(i)}}function Iw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Og(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ng(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ai(e):(i=ro({},e),Ae(!i.pathname||!i.pathname.includes("?"),Rl("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Rl("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Rl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let l=Ew(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),kw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Rw=typeof Object.is=="function"?Object.is:Pw,{useState:xw,useEffect:Ow,useLayoutEffect:Nw,useDebugValue:Lw}=Gl;function Dw(e,t,n){const r=t(),[{inst:i},o]=xw({inst:{value:r,getSnapshot:t}});return Nw(()=>{i.value=r,i.getSnapshot=t,xl(i)&&o({inst:i})},[e,r,t]),Ow(()=>(xl(i)&&o({inst:i}),e(()=>{xl(i)&&o({inst:i})})),[e]),Lw(r),r}function xl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Rw(n,r)}catch{return!0}}function bw(e,t,n){return t()}const Mw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$w=!Mw,Fw=$w?bw:Dw;"useSyncExternalStore"in Gl&&(e=>e.useSyncExternalStore)(Gl);const Lg=I.createContext(null),Dg=I.createContext(null),yo=I.createContext(null),_a=I.createContext(null),vr=I.createContext({outlet:null,matches:[]}),bg=I.createContext(null);function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hu.apply(this,arguments)}function Uw(e,t){let{relative:n}=t===void 0?{}:t;wo()||Ae(!1);let{basename:r,navigator:i}=I.useContext(yo),{hash:o,pathname:s,search:a}=Mg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Dn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function wo(){return I.useContext(_a)!=null}function Ea(){return wo()||Ae(!1),I.useContext(_a).location}function ld(){wo()||Ae(!1);let{basename:e,navigator:t}=I.useContext(yo),{matches:n}=I.useContext(vr),{pathname:r}=Ea(),i=JSON.stringify(Og(n).map(a=>a.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Ng(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Dn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function zw(){let{matches:e}=I.useContext(vr),t=e[e.length-1];return t?t.params:{}}function Mg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(vr),{pathname:i}=Ea(),o=JSON.stringify(Og(r).map(s=>s.pathnameBase));return I.useMemo(()=>Ng(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function jw(e,t){wo()||Ae(!1);let{navigator:n}=I.useContext(yo),r=I.useContext(Dg),{matches:i}=I.useContext(vr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Ea(),u;if(t){var f;let v=typeof t=="string"?ai(t):t;a==="/"||(f=v.pathname)!=null&&f.startsWith(a)||Ae(!1),u=v}else u=l;let h=u.pathname||"/",m=a==="/"?h:h.slice(a.length)||"/",g=aw(e,{pathname:m}),w=Ww(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Dn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Dn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?I.createElement(_a.Provider,{value:{location:Hu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kn.Pop}},w):w}function Vw(){let e=Qw(),t=Aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}class Bw extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(vr.Provider,{value:this.props.routeContext},I.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hw(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Lg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(vr.Provider,{value:t},r)}function Ww(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ae(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=I.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=I.createElement(Vw,null));let f=t.concat(r.slice(0,a+1)),h=()=>{let m=o;return l?m=u:s.route.Component?m=I.createElement(s.route.Component,null):s.route.element&&(m=s.route.element),I.createElement(Hw,{match:s,routeContext:{outlet:o,matches:f},children:m})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?I.createElement(Bw,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var nh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(nh||(nh={}));var Vs;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Vs||(Vs={}));function Kw(e){let t=I.useContext(Dg);return t||Ae(!1),t}function Gw(e){let t=I.useContext(vr);return t||Ae(!1),t}function qw(e){let t=Gw(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function Qw(){var e;let t=I.useContext(bg),n=Kw(Vs.UseRouteError),r=qw(Vs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function _r(e){Ae(!1)}function Yw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:o,static:s=!1}=e;wo()&&Ae(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ai(r));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:g="default"}=r,w=I.useMemo(()=>{let v=ad(u,a);return v==null?null:{location:{pathname:v,search:f,hash:h,state:m,key:g},navigationType:i}},[a,u,f,h,m,g,i]);return w==null?null:I.createElement(yo.Provider,{value:l},I.createElement(_a.Provider,{children:n,value:w}))}function Xw(e){let{children:t,location:n}=e,r=I.useContext(Lg),i=r&&!t?r.router.routes:Wu(t);return jw(i,n)}var rh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(rh||(rh={}));new Promise(()=>{});function Wu(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,Wu(r.props.children,t));return}r.type!==_r&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Wu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}function Jw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Zw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function eS(e,t){return e.button===0&&(!t||t==="_self")&&!Zw(e)}const tS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function nS(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=iw({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(a),[o]),I.createElement(Yw,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const rS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nr=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f}=t,h=Jw(t,tS),{basename:m}=I.useContext(yo),g,w=!1;if(typeof u=="string"&&iS.test(u)&&(g=u,rS)){let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=ad(p.pathname,m);p.origin===c.origin&&y!=null?u=y+p.search+p.hash:w=!0}let v=Uw(u,{relative:i}),_=oS(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function d(c){r&&r(c),c.defaultPrevented||_(c)}return I.createElement("a",Ku({},h,{href:g||v,onClick:w||o?r:d,ref:n,target:l}))});var ih;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ih||(ih={}));var oh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(oh||(oh={}));function oS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=ld(),l=Ea(),u=Mg(e,{relative:s});return I.useCallback(f=>{if(eS(f,n)){f.preventDefault();let h=r!==void 0?r:js(l)===js(u);a(e,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}/**
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
 */const $g=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sS=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[f],n[h],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($g(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new aS;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class aS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lS=function(e){const t=$g(e);return Fg.encodeByteArray(t,!0)},Bs=function(e){return lS(e).replace(/\./g,"")},Ug=function(e){try{return Fg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function uS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cS=()=>uS().__FIREBASE_DEFAULTS__,dS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ug(e[1]);return t&&JSON.parse(t)},ud=()=>{try{return cS()||dS()||fS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zg=e=>{var t,n;return(n=(t=ud())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hS=e=>{const t=zg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},pS=()=>{var e;return(e=ud())===null||e===void 0?void 0:e.config},jg=e=>{var t;return(t=ud())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class mS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function gS(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Bs(JSON.stringify(n)),Bs(JSON.stringify(s)),a].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Vg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wS(){const e=Be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bg(){try{return typeof indexedDB=="object"}catch{return!1}}function Hg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function SS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _S="FirebaseError";class Lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_S,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?ES(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Lt(i,a,r)}}function ES(e,t){return e.replace(IS,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const IS=/\{\$([^}]+)}/g;function kS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function io(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(sh(o)&&sh(s)){if(!io(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sh(e){return e!==null&&typeof e=="object"}/**
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
 */function So(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function TS(e,t){const n=new CS(e,t);return n.subscribe.bind(n)}class CS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ol),i.error===void 0&&(i.error=Ol),i.complete===void 0&&(i.complete=Ol);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ol(){}/**
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
 */const PS=1e3,RS=2,xS=4*60*60*1e3,OS=.5;function ah(e,t=PS,n=RS){const r=t*Math.pow(n,e),i=Math.round(OS*r*(Math.random()-.5)*2);return Math.min(xS,r+i)}/**
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
 */function Kt(e){return e&&e._delegate?e._delegate:e}class Nt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class NS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(DS(t))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kn){return this.instances.has(t)}getOptions(t=Kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kn){return this.component?this.component.multipleInstances?t:Kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LS(e){return e===Kn?void 0:e}function DS(e){return e.instantiationMode==="EAGER"}/**
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
 */class bS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new NS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ee||(ee={}));const MS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},$S=ee.INFO,FS={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},US=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=FS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ia{constructor(t){this.name=t,this._logLevel=$S,this._logHandler=US,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?MS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const zS=(e,t)=>t.some(n=>e instanceof n);let lh,uh;function jS(){return lh||(lh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VS(){return uh||(uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,Gu=new WeakMap,Kg=new WeakMap,Nl=new WeakMap,cd=new WeakMap;function BS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(bn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Wg.set(n,e)}).catch(()=>{}),cd.set(t,e),t}function HS(e){if(Gu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Gu.set(e,t)}let qu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Gu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function WS(e){qu=e(qu)}function KS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ll(this),t,...n);return Kg.set(r,t.sort?t.sort():[t]),bn(r)}:VS().includes(e)?function(...t){return e.apply(Ll(this),t),bn(Wg.get(this))}:function(...t){return bn(e.apply(Ll(this),t))}}function GS(e){return typeof e=="function"?KS(e):(e instanceof IDBTransaction&&HS(e),zS(e,jS())?new Proxy(e,qu):e)}function bn(e){if(e instanceof IDBRequest)return BS(e);if(Nl.has(e))return Nl.get(e);const t=GS(e);return t!==e&&(Nl.set(e,t),cd.set(t,e)),t}const Ll=e=>cd.get(e);function Gg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=bn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(bn(s.result),l.oldVersion,l.newVersion,bn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qS=["get","getKey","getAll","getAllKeys","count"],QS=["put","add","delete","clear"],Dl=new Map;function ch(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dl.get(t))return Dl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=QS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dl.set(t,o),o}WS(e=>({...e,get:(t,n,r)=>ch(t,n)||e.get(t,n,r),has:(t,n)=>!!ch(t,n)||e.has(t,n)}));/**
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
 */class YS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qu="@firebase/app",dh="0.9.5";/**
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
 */const ur=new Ia("@firebase/app"),JS="@firebase/app-compat",ZS="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",r_="@firebase/auth",i_="@firebase/auth-compat",o_="@firebase/database",s_="@firebase/database-compat",a_="@firebase/functions",l_="@firebase/functions-compat",u_="@firebase/installations",c_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",h_="@firebase/performance",p_="@firebase/performance-compat",m_="@firebase/remote-config",g_="@firebase/remote-config-compat",v_="@firebase/storage",y_="@firebase/storage-compat",w_="@firebase/firestore",S_="@firebase/firestore-compat",__="firebase",E_="9.18.0";/**
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
 */const Yu="[DEFAULT]",I_={[Qu]:"fire-core",[JS]:"fire-core-compat",[e_]:"fire-analytics",[ZS]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[r_]:"fire-auth",[i_]:"fire-auth-compat",[o_]:"fire-rtdb",[s_]:"fire-rtdb-compat",[a_]:"fire-fn",[l_]:"fire-fn-compat",[u_]:"fire-iid",[c_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[h_]:"fire-perf",[p_]:"fire-perf-compat",[m_]:"fire-rc",[g_]:"fire-rc-compat",[v_]:"fire-gcs",[y_]:"fire-gcs-compat",[w_]:"fire-fst",[S_]:"fire-fst-compat","fire-js":"fire-js",[__]:"fire-js-all"};/**
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
 */const Hs=new Map,Xu=new Map;function k_(e,t){try{e.container.addComponent(t)}catch(n){ur.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bt(e){const t=e.name;if(Xu.has(t))return ur.debug(`There were multiple attempts to register component ${t}.`),!1;Xu.set(t,e);for(const n of Hs.values())k_(n,e);return!0}function wr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const T_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new yr("app","Firebase",T_);/**
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
 */class C_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const _o=E_;function qg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Yu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=pS()),!n)throw Mn.create("no-options");const o=Hs.get(i);if(o){if(io(n,o.options)&&io(r,o.config))return o;throw Mn.create("duplicate-app",{appName:i})}const s=new bS(i);for(const l of Xu.values())s.addComponent(l);const a=new C_(n,r,s);return Hs.set(i,a),a}function dd(e=Yu){const t=Hs.get(e);if(!t&&e===Yu)return qg();if(!t)throw Mn.create("no-app",{appName:e});return t}function wt(e,t,n){var r;let i=(r=I_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}Bt(new Nt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const A_="firebase-heartbeat-database",P_=1,oo="firebase-heartbeat-store";let bl=null;function Qg(){return bl||(bl=Gg(A_,P_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oo)}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),bl}async function R_(e){try{return(await Qg()).transaction(oo).objectStore(oo).get(Yg(e))}catch(t){if(t instanceof Lt)ur.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ur.warn(n.message)}}}async function fh(e,t){try{const r=(await Qg()).transaction(oo,"readwrite");return await r.objectStore(oo).put(t,Yg(e)),r.done}catch(n){if(n instanceof Lt)ur.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function Yg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const x_=1024,O_=30*24*60*60*1e3;class N_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=O_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hh(),{heartbeatsToSend:n,unsentEntries:r}=L_(this._heartbeatsCache.heartbeats),i=Bs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hh(){return new Date().toISOString().substring(0,10)}function L_(e,t=x_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ph(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ph(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bg()?Hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ph(e){return Bs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function b_(e){Bt(new Nt("platform-logger",t=>new YS(t),"PRIVATE")),Bt(new Nt("heartbeat",t=>new N_(t),"PRIVATE")),wt(Qu,dh,e),wt(Qu,dh,"esm2017"),wt("fire-js","")}b_("");var M_="firebase",$_="9.18.0";/**
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
 */wt(M_,$_,"app");/**
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
 */let Xe=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let li="9.18.0";/**
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
 */const Zr=new Ia("@firebase/firestore");function Ws(e,...t){if(Zr.logLevel<=ee.DEBUG){const n=t.map(hd);Zr.debug(`Firestore (${li}): ${e}`,...n)}}function fd(e,...t){if(Zr.logLevel<=ee.ERROR){const n=t.map(hd);Zr.error(`Firestore (${li}): ${e}`,...n)}}function Xg(e,...t){if(Zr.logLevel<=ee.WARN){const n=t.map(hd);Zr.warn(`Firestore (${li}): ${e}`,...n)}}function hd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function Ht(e="Unexpected state"){const t=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: `+e;throw fd(t),new Error(t)}function ln(e,t){e||Ht()}function pd(e,t){return e}/**
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
 */const mh="ok",F_="cancelled",Li="unknown",oe="invalid-argument",U_="deadline-exceeded",z_="not-found",j_="permission-denied",Ju="unauthenticated",V_="resource-exhausted",ei="failed-precondition",B_="aborted",H_="out-of-range",Jg="unimplemented",W_="internal",K_="unavailable";let H=class extends Lt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */let Zg=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},G_=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}},q_=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},Q_=class{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(ln(typeof t.accessToken=="string"),new Zg(t.accessToken,new Xe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}},Y_=class{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(ln(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}},X_=class{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new Y_(this.t,this.i,this.o,this.u))}start(t,n){t.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},J_=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Z_=class{constructor(t){this.m=t,this.appCheck=null,t.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(ln(typeof t.token=="string"),new J_(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}};/**
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
 */let eE=class{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}},ev=class Zu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Zu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zu&&t.projectId===this.projectId&&t.database===this.database}},tv=class ec{constructor(t,n,r){n===void 0?n=0:n>t.length&&Ht(),r===void 0?r=t.length-n:r>t.length-n&&Ht(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ec.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ec?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}};class We extends tv{construct(t,n,r){return new We(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(oe,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}const tE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends tv{construct(t,n,r){return new $t(t,n,r)}static isValidIdentifier(t){return tE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new H(oe,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(oe,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(oe,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new H(oe,"Unterminated ` in path: "+t);return new $t(n)}static emptyPath(){return new $t([])}}/**
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
 */class vt{constructor(t){this.path=t}static fromPath(t){return new vt(We.fromString(t))}static fromName(t){return new vt(We.fromString(t).popFirst(5))}static empty(){return new vt(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&We.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return We.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vt(new We(t.slice()))}}/**
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
 */function nE(e,t,n){if(!n)throw new H(oe,`Function ${e}() cannot be called with an empty ${t}.`)}function gh(e){if(vt.isDocumentKey(e))throw new H(oe,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function rE(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ht()}function nv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new H(oe,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rE(e);throw new H(oe,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */let Ho=null;function iE(){return Ho===null?Ho=268435456+Math.round(2147483648*Math.random()):Ho++,"0x"+Ho.toString(16)}/**
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
 */function oE(e){return e==null}function vh(e){return e===0&&1/e==-1/0}/**
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
 */const sE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var yh,G;function wh(e){if(e===void 0)return fd("RPC_ERROR","HTTP error has no status"),Li;switch(e){case 200:return mh;case 400:return ei;case 401:return Ju;case 403:return j_;case 404:return z_;case 409:return B_;case 416:return H_;case 429:return V_;case 499:return F_;case 500:return Li;case 501:return Jg;case 503:return K_;case 504:return U_;default:return e>=200&&e<300?mh:e>=400&&e<500?ei:e>=500&&e<600?W_:Li}}/**
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
 */(G=yh||(yh={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";class aE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.p=n+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}A(t,n,r,i,o){const s=iE(),a=this.I(t,n);Ws("RestConnection",`Sending RPC '${t}' ${s}:`,a,r);const l={};return this.T(l,i,o),this.R(t,a,l,r).then(u=>(Ws("RestConnection",`Received RPC '${t}' ${s}: `,u),u),u=>{throw Xg("RestConnection",`RPC '${t}' ${s} failed with error: `,u,"url: ",a,"request:",r),u})}P(t,n,r,i,o,s){return this.A(t,n,r,i,o)}T(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+li,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}I(t,n){const r=sE[t];return`${this.p}/v1/${n}:${r}`}}{constructor(t,n){super(t),this.V=n}$(t,n){throw new Error("Not supported by FetchConnection")}async R(t,n,r,i){var o;const s=JSON.stringify(i);let a;try{a=await this.V(n,{method:"POST",headers:r,body:s})}catch(l){const u=l;throw new H(wh(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(o=l==null?void 0:l.error)===null||o===void 0?void 0:o.message;throw new H(wh(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}function Pe(e,t){return e<t?-1:e>t?1:0}function lE(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */function Sh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function md(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
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
 */class uE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class un{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new uE("Invalid base64 string: "+i):i}}(t);return new un(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new un(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}un.EMPTY_BYTE_STRING=new un("");const cE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(e){if(ln(!!e),typeof e=="string"){let t=0;const n=cE.exec(e);if(ln(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Te(e.seconds),nanos:Te(e.nanos)}}function Te(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function so(e){return typeof e=="string"?un.fromBase64String(e):un.fromUint8Array(e)}/**
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
 */class nn{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new H(oe,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(oe,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new H(oe,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(oe,"Timestamp seconds out of range: "+t)}static now(){return nn.fromMillis(Date.now())}static fromDate(t){return nn.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new nn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pe(this.nanoseconds,t.nanoseconds):Pe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function rv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iv(e){const t=e.mapValue.fields.__previous_value__;return rv(t)?iv(t):t}function ao(e){const t=cr(e.mapValue.fields.__local_write_time__.timestampValue);return new nn(t.seconds,t.nanos)}/**
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
 */const Wo={fields:{__type__:{stringValue:"__max__"}}};function dr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rv(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:Ht()}function Ks(e,t){if(e===t)return!0;const n=dr(e);if(n!==dr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ao(e).isEqual(ao(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=cr(r.timestampValue),s=cr(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return so(r.bytesValue).isEqual(so(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Te(r.geoPointValue.latitude)===Te(i.geoPointValue.latitude)&&Te(r.geoPointValue.longitude)===Te(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Te(r.integerValue)===Te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Te(r.doubleValue),s=Te(i.doubleValue);return o===s?vh(o)===vh(s):isNaN(o)&&isNaN(s)}return!1}(e,t);case 9:return lE(e.arrayValue.values||[],t.arrayValue.values||[],Ks);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(Sh(o)!==Sh(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!Ks(o[a],s[a])))return!1;return!0}(e,t);default:return Ht()}}function lo(e,t){return(e.values||[]).find(n=>Ks(n,t))!==void 0}function Gs(e,t){if(e===t)return 0;const n=dr(e),r=dr(t);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(e.booleanValue,t.booleanValue);case 2:return function(i,o){const s=Te(i.integerValue||i.doubleValue),a=Te(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(e,t);case 3:return _h(e.timestampValue,t.timestampValue);case 4:return _h(ao(e),ao(t));case 5:return Pe(e.stringValue,t.stringValue);case 6:return function(i,o){const s=so(i),a=so(o);return s.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=Pe(s[l],a[l]);if(u!==0)return u}return Pe(s.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const s=Pe(Te(i.latitude),Te(o.latitude));return s!==0?s:Pe(Te(i.longitude),Te(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=Gs(s[l],a[l]);if(u)return u}return Pe(s.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Wo&&o===Wo)return 0;if(i===Wo)return 1;if(o===Wo)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let f=0;f<a.length&&f<u.length;++f){const h=Pe(a[f],u[f]);if(h!==0)return h;const m=Gs(s[a[f]],l[u[f]]);if(m!==0)return m}return Pe(a.length,u.length)}(e.mapValue,t.mapValue);default:throw Ht()}}function _h(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Pe(e,t);const n=cr(e),r=cr(t),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function ov(e){return!!e&&"arrayValue"in e}function Eh(e){return!!e&&"nullValue"in e}function Ih(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ml(e){return!!e&&"mapValue"in e}function Di(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return md(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Di(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Di(e.arrayValue.values[n]);return t}return Object.assign({},e)}class kh{constructor(t,n){this.position=t,this.inclusive=n}}/**
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
 */class sv{}class Gt extends sv{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new dE(t,n,r):n==="array-contains"?new pE(t,r):n==="in"?new mE(t,r):n==="not-in"?new gE(t,r):n==="array-contains-any"?new vE(t,r):new Gt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new fE(t,r):new hE(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ht()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}let av=class lv extends sv{constructor(t,n){super(),this.filters=t,this.op=n,this.S=null}static create(t,n){return new lv(t,n)}matches(t){return this.op==="and"?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.q(n=>n.isInequality());return t!==null?t.field:null}q(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}},dE=class extends Gt{constructor(t,n,r){super(t,n,r),this.key=vt.fromName(r.referenceValue)}matches(t){const n=vt.comparator(t.key,this.key);return this.matchesComparison(n)}},fE=class extends Gt{constructor(t,n){super(t,"in",n),this.keys=uv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}},hE=class extends Gt{constructor(t,n){super(t,"not-in",n),this.keys=uv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}};function uv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>vt.fromName(r.referenceValue))}let pE=class extends Gt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ov(n)&&lo(n.arrayValue,this.value)}},mE=class extends Gt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}},gE=class extends Gt{constructor(t,n){super(t,"not-in",n)}matches(t){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!lo(this.value.arrayValue,n)}},vE=class extends Gt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ov(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}};/**
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
 */let ls=class{constructor(t,n="asc"){this.field=t,this.dir=n}};/**
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
 */let ht=class us{constructor(t){this.timestamp=t}static fromTimestamp(t){return new us(t)}static min(){return new us(new nn(0,0))}static max(){return new us(new nn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
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
 */let Er=class tc{constructor(t){this.value=t}static empty(){return new tc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Di(n)}setAll(t){let n=$t.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Di(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ks(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){md(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new tc(Di(this.value))}};/**
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
 */let yE=class Gn{constructor(t,n,r,i,o,s,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(t){return new Gn(t,0,ht.min(),ht.min(),ht.min(),Er.empty(),0)}static newFoundDocument(t,n,r,i){return new Gn(t,1,n,ht.min(),r,i,0)}static newNoDocument(t,n){return new Gn(t,2,n,ht.min(),ht.min(),Er.empty(),0)}static newUnknownDocument(t,n){return new Gn(t,3,n,ht.min(),ht.min(),Er.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ht.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Er.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Er.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ht.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
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
 */let wE=class{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.O=null}};function Th(e,t=null,n=[],r=[],i=null,o=null,s=null){return new wE(e,t,n,r,i,o,s)}/**
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
 */let SE=class{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.k=null,this.C=null,this.startAt,this.endAt}};function _E(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function EE(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ch(e){const t=pd(e);if(t.k===null){t.k=[];const n=EE(t),r=_E(t);if(n!==null&&r===null)n.isKeyField()||t.k.push(new ls(n)),t.k.push(new ls($t.keyField(),"asc"));else{let i=!1;for(const o of t.explicitOrderBy)t.k.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.k.push(new ls($t.keyField(),o))}}}return t.k}function IE(e){const t=pd(e);if(!t.C)if(t.limitType==="F")t.C=Th(t.path,t.collectionGroup,Ch(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const o of Ch(t)){const s=o.dir==="desc"?"asc":"desc";n.push(new ls(o.field,s))}const r=t.endAt?new kh(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new kh(t.startAt.position,t.startAt.inclusive):null;t.C=Th(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.C}/**
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
 */const kE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CE=(()=>({and:"AND",or:"OR"}))();let AE=class{constructor(t,n){this.databaseId=t,this.L=n}};function Ah(e){return ln(!!e),ht.fromTimestamp(function(t){const n=cr(t);return new nn(n.seconds,n.nanos)}(e))}function PE(e,t){return function(n){return new We(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function RE(e,t){const n=function(i){const o=We.fromString(i);return ln(dv(o)),o}(t);if(n.get(1)!==e.databaseId.projectId)throw new H(oe,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new H(oe,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vt((ln((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ph(e,t){return PE(e.databaseId,t)}function xE(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ph(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ph(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return cv(av.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Ir(f.field),direction:OE(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.L||oE(u)?u:{value:u}}(e,t.limit);var a;return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function OE(e){return kE[e]}function NE(e){return TE[e]}function LE(e){return CE[e]}function Ir(e){return{fieldPath:e.canonicalString()}}function cv(e){return e instanceof Gt?function(t){if(t.op==="=="){if(Ih(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NAN"}};if(Eh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ih(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NAN"}};if(Eh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(t.field),op:NE(t.op),value:t.value}}}(e):e instanceof av?function(t){const n=t.getFilters().map(r=>cv(r));return n.length===1?n[0]:{compositeFilter:{op:LE(t.op),filters:n}}}(e):Ht()}function dv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */function DE(e){return new AE(e,!0)}/**
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
 */class bE extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.M=i,this.et=!1}nt(){if(this.et)throw new H(ei,"The client has already been terminated.")}A(t,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.A(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ju&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(Li,i.toString())})}P(t,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.P(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Ju&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(Li,o.toString())})}terminate(){this.et=!0}}async function ME(e,t){const n=pd(e),r=xE(n.M,IE(t));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,s,a){const l=RE(o,s.name),u=Ah(s.updateTime),f=s.createTime?Ah(s.createTime):ht.min(),h=new Er({mapValue:{fields:s.fields}}),m=yE.newFoundDocument(l,u,f,h);return a&&m.setHasCommittedMutations(),a?m.setHasCommittedMutations():m}(n.M,i.document,void 0))}/**
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
 */const bi=new Map;function $E(e){if(e._terminated)throw new H(ei,"The client has already been terminated.");if(!bi.has(e)){Ws("ComponentProvider","Initializing Datastore");const o=function(l){return new aE(l,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new eE(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=DE(e._databaseId),a=function(l,u,f,h){return new bE(l,u,f,h)}(e._authCredentials,e._appCheckCredentials,o,s);bi.set(e,a)}var t,n,r,i;/**
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
*/return bi.get(e)}class Rh{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new H(oe,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(oe,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,i,o,s){if(i===!0&&s===!0)throw new H(oe,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class gd{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(ei,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new H(ei,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rh(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new G_;switch(n.type){case"gapi":const r=n.client;return new X_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(oe,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=bi.get(t);n&&(Ws("ComponentProvider","Removing Datastore"),bi.delete(t),n.terminate())}(this),Promise.resolve()}}function FE(e,t){const n=typeof e=="object"?e:dd(),r=typeof e=="string"?e:t||"(default)",i=wr(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const o=hS("firestore");o&&UE(i,...o)}return i}function UE(e,t,n,r={}){var i;const o=(e=nv(e,gd))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&Xg("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Xe.MOCK_USER;else{s=gS(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(oe,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(l)}e._authCredentials=new q_(new Zg(s,a))}}/**
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
 */class ui{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ui(this.firestore,t,this._key)}}class ka{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ka(this.firestore,t,this._query)}}class Br extends ka{constructor(t,n,r){super(t,n,new SE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ui(this.firestore,null,new vt(t))}withConverter(t){return new Br(this.firestore,t,this._path)}}function zE(e,t,...n){if(e=Kt(e),nE("collection","path",t),e instanceof gd){const r=We.fromString(t,...n);return gh(r),new Br(e,null,r)}{if(!(e instanceof ui||e instanceof Br))throw new H(oe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(We.fromString(t,...n));return gh(r),new Br(e.firestore,null,r)}}/**
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
 */class qs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qs(un.fromBase64String(t))}catch(n){throw new H(oe,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new qs(un.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class fv{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new H(oe,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class jE{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new H(oe,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new H(oe,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pe(this._lat,t._lat)||Pe(this._long,t._long)}}const VE=new RegExp("[~\\*/\\[\\]]");function BE(e,t,n){if(t.search(VE)>=0)throw xh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new fv(...t.split("."))._internalPath}catch{throw xh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xh(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new H(oe,a+e+l)}/**
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
 */class HE{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ui(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(KE("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hv extends HE{data(){return super.data()}}class WE{constructor(t,n){this._docs=n,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,n){this._docs.forEach(t,n)}}function KE(e,t){return typeof t=="string"?BE(e,t):t instanceof fv?t._internalPath:t._delegate._internalPath}class GE extends class{convertValue(t,n="none"){switch(dr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Te(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(so(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Ht()}}convertObject(t,n){const r={};return md(t.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new jE(Te(t.latitude),Te(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=iv(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(t));default:return null}}convertTimestamp(t){const n=cr(t);return new nn(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=We.fromString(t);ln(dv(r));const i=new ev(r.get(1),r.get(3)),o=new vt(r.popFirst(5));return i.isEqual(n)||fd(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new qs(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ui(this.firestore,null,n)}}function qE(e){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new H(Jg,"limitToLast() queries require specifying at least one orderBy() clause")})((e=nv(e,ka))._query);const t=$E(e.firestore),n=new GE(e.firestore);return ME(t,e._query).then(r=>{const i=r.map(o=>new hv(e.firestore,n,o.key,o,e.converter));return e._query.limitType==="L"&&i.reverse(),new WE(e,i)})}(function(e){li=e})(`${_o}_lite`),Bt(new Nt("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new gd(new Q_(e.getProvider("auth-internal")),new Z_(e.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new H(oe,'"projectId" not provided in firebase.initializeApp.');return new ev(o.options.projectId,s)}(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),wt("firestore-lite","3.9.0",""),wt("firestore-lite","3.9.0","esm2017");const pv="@firebase/installations",vd="0.6.4";/**
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
 */const mv=1e4,gv=`w:${vd}`,vv="FIS_v2",QE="https://firebaseinstallations.googleapis.com/v1",YE=60*60*1e3,XE="installations",JE="Installations";/**
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
 */const ZE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},fr=new yr(XE,JE,ZE);function yv(e){return e instanceof Lt&&e.code.includes("request-failed")}/**
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
 */function wv({projectId:e}){return`${QE}/projects/${e}/installations`}function Sv(e){return{token:e.token,requestStatus:2,expiresIn:tI(e.expiresIn),creationTime:Date.now()}}async function _v(e,t){const r=(await t.json()).error;return fr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ev({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function eI(e,{refreshToken:t}){const n=Ev(e);return n.append("Authorization",nI(t)),n}async function Iv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function tI(e){return Number(e.replace("s","000"))}function nI(e){return`${vv} ${e}`}/**
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
 */async function rI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wv(e),i=Ev(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:vv,appId:e.appId,sdkVersion:gv},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Iv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Sv(u.authToken)}}else throw await _v("Create Installation",l)}/**
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
 */function kv(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function iI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oI=/^[cdef][\w-]{21}$/,nc="";function sI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=aI(e);return oI.test(n)?n:nc}catch{return nc}}function aI(e){return iI(e).substr(0,22)}/**
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
 */function Ta(e){return`${e.appName}!${e.appId}`}/**
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
 */const Tv=new Map;function Cv(e,t){const n=Ta(e);Av(n,t),lI(n,t)}function Av(e,t){const n=Tv.get(e);if(n)for(const r of n)r(t)}function lI(e,t){const n=uI();n&&n.postMessage({key:e,fid:t}),cI()}let Xn=null;function uI(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=e=>{Av(e.data.key,e.data.fid)}),Xn}function cI(){Tv.size===0&&Xn&&(Xn.close(),Xn=null)}/**
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
 */const dI="firebase-installations-database",fI=1,hr="firebase-installations-store";let $l=null;function yd(){return $l||($l=Gg(dI,fI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hr)}}})),$l}async function Qs(e,t){const n=Ta(e),i=(await yd()).transaction(hr,"readwrite"),o=i.objectStore(hr),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Cv(e,t.fid),t}async function Pv(e){const t=Ta(e),r=(await yd()).transaction(hr,"readwrite");await r.objectStore(hr).delete(t),await r.done}async function Ca(e,t){const n=Ta(e),i=(await yd()).transaction(hr,"readwrite"),o=i.objectStore(hr),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Cv(e,a.fid),a}/**
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
 */async function wd(e){let t;const n=await Ca(e.appConfig,r=>{const i=hI(r),o=pI(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===nc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function hI(e){const t=e||{fid:sI(),registrationStatus:0};return Rv(t)}function pI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=mI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:gI(e)}:{installationEntry:t}}async function mI(e,t){try{const n=await rI(e,t);return Qs(e.appConfig,n)}catch(n){throw yv(n)&&n.customData.serverCode===409?await Pv(e.appConfig):await Qs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function gI(e){let t=await Oh(e.appConfig);for(;t.registrationStatus===1;)await kv(100),t=await Oh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wd(e);return r||n}return t}function Oh(e){return Ca(e,t=>{if(!t)throw fr.create("installation-not-found");return Rv(t)})}function Rv(e){return vI(e)?{fid:e.fid,registrationStatus:0}:e}function vI(e){return e.registrationStatus===1&&e.registrationTime+mv<Date.now()}/**
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
 */async function yI({appConfig:e,heartbeatServiceProvider:t},n){const r=wI(e,n),i=eI(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:gv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Iv(()=>fetch(r,a));if(l.ok){const u=await l.json();return Sv(u)}else throw await _v("Generate Auth Token",l)}function wI(e,{fid:t}){return`${wv(e)}/${t}/authTokens:generate`}/**
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
 */async function Sd(e,t=!1){let n;const r=await Ca(e.appConfig,o=>{if(!xv(o))throw fr.create("not-registered");const s=o.authToken;if(!t&&EI(s))return o;if(s.requestStatus===1)return n=SI(e,t),o;{if(!navigator.onLine)throw fr.create("app-offline");const a=kI(o);return n=_I(e,a),a}});return n?await n:r.authToken}async function SI(e,t){let n=await Nh(e.appConfig);for(;n.authToken.requestStatus===1;)await kv(100),n=await Nh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Sd(e,t):r}function Nh(e){return Ca(e,t=>{if(!xv(t))throw fr.create("not-registered");const n=t.authToken;return TI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function _I(e,t){try{const n=await yI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Qs(e.appConfig,r),n}catch(n){if(yv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Qs(e.appConfig,r)}throw n}}function xv(e){return e!==void 0&&e.registrationStatus===2}function EI(e){return e.requestStatus===2&&!II(e)}function II(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+YE}function kI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function TI(e){return e.requestStatus===1&&e.requestTime+mv<Date.now()}/**
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
 */async function CI(e){const t=e,{installationEntry:n,registrationPromise:r}=await wd(t);return r?r.catch(console.error):Sd(t).catch(console.error),n.fid}/**
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
 */async function AI(e,t=!1){const n=e;return await PI(n),(await Sd(n,t)).token}async function PI(e){const{registrationPromise:t}=await wd(e);t&&await t}/**
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
 */function RI(e){if(!e||!e.options)throw Fl("App Configuration");if(!e.name)throw Fl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fl(e){return fr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ov="installations",xI="installations-internal",OI=e=>{const t=e.getProvider("app").getImmediate(),n=RI(t),r=wr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NI=e=>{const t=e.getProvider("app").getImmediate(),n=wr(t,Ov).getImmediate();return{getId:()=>CI(n),getToken:i=>AI(n,i)}};function LI(){Bt(new Nt(Ov,OI,"PUBLIC")),Bt(new Nt(xI,NI,"PRIVATE"))}LI();wt(pv,vd);wt(pv,vd,"esm2017");/**
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
 */const Ys="analytics",DI="firebase_id",bI="origin",MI=60*1e3,$I="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nv="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new Ia("@firebase/analytics");/**
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
 */function Lv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function FI(e,t){const n=document.createElement("script");n.src=`${Nv}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function UI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zI(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Lv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){lt.error(a)}e("config",i,o)}async function jI(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Lv(n);for(const l of s){const u=a.find(h=>h.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){lt.error(o)}}function VI(e,t,n,r){async function i(o,s,a){try{o==="event"?await jI(e,t,n,s,a):o==="config"?await zI(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){lt.error(l)}}return i}function BI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=VI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function HI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Nv)&&n.src.includes(e))return n;return null}/**
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
 */const WI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},St=new yr("analytics","Analytics",WI);/**
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
 */const KI=30,GI=1e3;class qI{constructor(t={},n=GI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Dv=new qI;function QI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function YI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:QI(r)},o=$I.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function XI(e,t=Dv,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw St.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ek;return setTimeout(async()=>{a.abort()},n!==void 0?n:MI),bv({appId:r,apiKey:i,measurementId:o},s,a,t)}async function bv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Dv){var o;const{appId:s,measurementId:a}=e;try{await JI(r,t)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await YI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!ZI(u)){if(i.deleteThrottleMetadata(s),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?ah(n,i.intervalMillis,KI):ah(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,h),lt.debug(`Calling attemptFetch again in ${f} millis`),bv(e,h,r,i)}}function JI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ZI(e){if(!(e instanceof Lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ek{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function nk(){if(Bg())try{await Hg()}catch(e){return lt.warn(St.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return lt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rk(e,t,n,r,i,o,s){var a;const l=XI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),t.push(l);const u=nk().then(g=>{if(g)return r.getId()}),[f,h]=await Promise.all([l,u]);HI(o)||FI(o,f.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[bI]="firebase",m.update=!0,h!=null&&(m[DI]=h),i("config",f.measurementId,m),f.measurementId}/**
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
 */class ik{constructor(t){this.app=t}_delete(){return delete Mi[this.app.options.appId],Promise.resolve()}}let Mi={},Lh=[];const Dh={};let Ul="dataLayer",ok="gtag",bh,Mv,Mh=!1;function sk(){const e=[];if(Vg()&&e.push("This is a browser extension environment."),SS()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=St.create("invalid-analytics-context",{errorInfo:t});lt.warn(n.message)}}function ak(e,t,n){sk();const r=e.options.appId;if(!r)throw St.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(Mi[r]!=null)throw St.create("already-exists",{id:r});if(!Mh){UI(Ul);const{wrappedGtag:o,gtagCore:s}=BI(Mi,Lh,Dh,Ul,ok);Mv=o,bh=s,Mh=!0}return Mi[r]=rk(e,Lh,Dh,t,bh,Ul,n),new ik(e)}function lk(e=dd()){e=Kt(e);const t=wr(e,Ys);return t.isInitialized()?t.getImmediate():uk(e)}function uk(e,t={}){const n=wr(e,Ys);if(n.isInitialized()){const i=n.getImmediate();if(io(t,n.getOptions()))return i;throw St.create("already-initialized")}return n.initialize({options:t})}function ck(e,t,n,r){e=Kt(e),tk(Mv,Mi[e.app.options.appId],t,n,r).catch(i=>lt.error(i))}const $h="@firebase/analytics",Fh="0.9.4";function dk(){Bt(new Nt(Ys,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ak(r,i,n)},"PUBLIC")),Bt(new Nt("analytics-internal",e,"PRIVATE")),wt($h,Fh),wt($h,Fh,"esm2017");function e(t){try{const n=t.getProvider(Ys).getImmediate();return{logEvent:(r,i,o)=>ck(n,r,i,o)}}catch(n){throw St.create("interop-component-reg-failed",{reason:n})}}}dk();function _d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $v(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fk=$v,Fv=new yr("auth","Firebase",$v());/**
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
 */const Uh=new Ia("@firebase/auth");function cs(e,...t){Uh.logLevel<=ee.ERROR&&Uh.error(`Auth (${_o}): ${e}`,...t)}/**
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
 */function Wt(e,...t){throw Ed(e,...t)}function jt(e,...t){return Ed(e,...t)}function Uv(e,t,n){const r=Object.assign(Object.assign({},fk()),{[t]:n});return new yr("auth","Firebase",r).create(t,{appName:e.name})}function hk(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Wt(e,"argument-error"),Uv(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ed(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Fv.create(e,...t)}function U(e,t,...n){if(!e)throw Ed(t,...n)}function Jt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw cs(t),new Error(t)}function cn(e,t){e||Jt(t)}/**
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
 */const zh=new Map;function Zt(e){cn(e instanceof Function,"Expected a class definition");let t=zh.get(e);return t?(cn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zh.set(e,t),t)}/**
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
 */function pk(e,t){const n=wr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(io(o,t??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:t})}function mk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function rc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function gk(){return jh()==="http:"||jh()==="https:"}function jh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function vk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||Vg()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Eo{constructor(t,n){this.shortDelay=t,this.longDelay=n,cn(n>t,"Short delay should be less than long delay!"),this.isMobile=vS()||yS()}get(){return vk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Id(e,t){cn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class zv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Sk=new Eo(3e4,6e4);function _k(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Aa(e,t,n,r,i={}){return jv(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=So(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),zv.fetch()(Vv(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function jv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wk),t);try{const i=new Ik(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ko(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ko(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ko(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uv(e,f,u);Wt(e,f)}}catch(i){if(i instanceof Lt)throw i;Wt(e,"internal-error",{message:String(i)})}}async function Ek(e,t,n,r,i={}){const o=await Aa(e,t,n,r,i);return"mfaPendingCredential"in o&&Wt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Vv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Id(e.config,i):`${e.config.apiScheme}://${i}`}class Ik{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),Sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function kk(e,t){return Aa(e,"POST","/v1/accounts:delete",t)}async function Tk(e,t){return Aa(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function $i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ck(e,t=!1){const n=Kt(e),r=await n.getIdToken(t),i=kd(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$i(zl(i.auth_time)),issuedAtTime:$i(zl(i.iat)),expirationTime:$i(zl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function zl(e){return Number(e)*1e3}function kd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ug(n);return i?JSON.parse(i):(cs("Failed to decode base64 JWT payload"),null)}catch(i){return cs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ak(e){const t=kd(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function uo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lt&&Pk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Pk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Rk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await uo(e,Tk(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Nk(o.providerUserInfo):[],a=Ok(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Bv(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function xk(e){const t=Kt(e);await Xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ok(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Nk(e){return e.map(t=>{var{providerId:n}=t,r=_d(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Lk(e,t){const n=await jv(e,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Vv(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zv.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ak(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Lk(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new co;return r&&(U(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function pn(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=_d(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await uo(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ck(this,t)}reload(){return xk(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await uo(this,kk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:y,isAnonymous:E,providerData:A,stsTokenManager:P}=n;U(p&&P,t,"internal-error");const T=co.fromJSON(this.name,P);U(typeof p=="string",t,"internal-error"),pn(h,t.name),pn(m,t.name),U(typeof y=="boolean",t,"internal-error"),U(typeof E=="boolean",t,"internal-error"),pn(g,t.name),pn(w,t.name),pn(v,t.name),pn(_,t.name),pn(d,t.name),pn(c,t.name);const z=new rr({uid:p,auth:t,email:m,emailVerified:y,displayName:h,isAnonymous:E,photoURL:w,phoneNumber:g,tenantId:v,stsTokenManager:T,createdAt:d,lastLoginAt:c});return A&&Array.isArray(A)&&(z.providerData=A.map(D=>Object.assign({},D))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new co;i.updateFromServerResponse(n);const o=new rr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Xs(o),o}}/**
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
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Hv.type="NONE";const Vh=Hv;/**
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
 */function ds(e,t,n){return`firebase:${e}:${t}:${n}`}class Hr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,o),this.fullPersistenceKey=ds("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Hr(Zt(Vh),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Zt(Vh);const s=ds(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=rr._fromJSON(t,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Hr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Hr(o,t,r))}}/**
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
 */function Bh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qv(t))return"Blackberry";if(Yv(t))return"Webos";if(Td(t))return"Safari";if((t.includes("chrome/")||Kv(t))&&!t.includes("edge/"))return"Chrome";if(qv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wv(e=Be()){return/firefox\//i.test(e)}function Td(e=Be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kv(e=Be()){return/crios\//i.test(e)}function Gv(e=Be()){return/iemobile/i.test(e)}function qv(e=Be()){return/android/i.test(e)}function Qv(e=Be()){return/blackberry/i.test(e)}function Yv(e=Be()){return/webos/i.test(e)}function Pa(e=Be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Dk(e=Be()){var t;return Pa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function bk(){return wS()&&document.documentMode===10}function Xv(e=Be()){return Pa(e)||qv(e)||Yv(e)||Qv(e)||/windows phone/i.test(e)||Gv(e)}function Mk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jv(e,t=[]){let n;switch(e){case"Browser":n=Bh(Be());break;case"Worker":n=`${Bh(Be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${r}`}/**
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
 */class $k{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Fk{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hh(this),this.idTokenSubscription=new Hh(this),this.beforeStateQueue=new $k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Kt(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Zt(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return U(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ra(e){return Kt(e)}class Hh{constructor(t){this.auth=t,this.observer=null,this.addObserver=TS(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Uk(e,t,n){const r=Ra(e);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Zv(t),{host:s,port:a}=zk(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jk()}function Zv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zk(e){const t=Zv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Wh(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Wh(s)}}}function Wh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function jk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ey{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(t){return Jt("not implemented")}_linkToIdToken(t,n){return Jt("not implemented")}_getReauthenticationResolver(t){return Jt("not implemented")}}/**
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
 */async function Wr(e,t){return Ek(e,"POST","/v1/accounts:signInWithIdp",_k(e,t))}/**
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
 */const Vk="http://localhost";class pr extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=_d(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new pr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Wr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Wr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Wr(t,n)}buildRequest(){const t={requestUri:Vk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=So(n)}return t}}/**
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
 */class Cd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends Cd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Io{constructor(){super("facebook.com")}static credential(t){return pr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pr._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Sn extends Io{constructor(){super("github.com")}static credential(t){return pr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sn.credentialFromTaggedObject(t)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Sn.credential(t.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
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
 */class _n extends Io{constructor(){super("twitter.com")}static credential(t,n){return pr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */class ti{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await rr._fromIdTokenResponse(t,r,i),s=Kh(r);return new ti({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Kh(r);return new ti({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Kh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Js extends Lt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Js.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Js(t,n,r,i)}}function ty(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Js._fromErrorAndOperation(e,o,t,r):o})}async function Bk(e,t,n=!1){const r=await uo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ti._forOperation(e,"link",r)}/**
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
 */async function Hk(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await uo(e,ty(r,i,t,e),n);U(o.idToken,r,"internal-error");const s=kd(o.idToken);U(s,r,"internal-error");const{sub:a}=s;return U(e.uid===a,r,"user-mismatch"),ti._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),o}}/**
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
 */async function Wk(e,t,n=!1){const r="signIn",i=await ty(e,r,t),o=await ti._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function Kk(e,t,n,r){return Kt(e).onIdTokenChanged(t,n,r)}function Gk(e,t,n){return Kt(e).beforeAuthStateChanged(t,n)}function Ad(e,t,n,r){return Kt(e).onAuthStateChanged(t,n,r)}const Zs="__sak";/**
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
 */class ny{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qk(){const e=Be();return Td(e)||Pa(e)}const Qk=1e3,Yk=10;class ry extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qk()&&Mk(),this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);bk()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Yk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ry.type="LOCAL";const Xk=ry;/**
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
 */class iy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}iy.type="SESSION";const oy=iy;/**
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
 */function Jk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new xa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Jk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
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
 */function Pd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Zk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Pd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Vt(){return window}function eT(e){Vt().location.href=e}/**
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
 */function sy(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function tT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function rT(){return sy()?self:null}/**
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
 */const ay="firebaseLocalStorageDb",iT=1,ea="firebaseLocalStorage",ly="fbase_key";class ko{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(e,t){return e.transaction([ea],t?"readwrite":"readonly").objectStore(ea)}function oT(){const e=indexedDB.deleteDatabase(ay);return new ko(e).toPromise()}function ic(){const e=indexedDB.open(ay,iT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ea,{keyPath:ly})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ea)?t(r):(r.close(),await oT(),t(await ic()))})})}async function Gh(e,t,n){const r=Oa(e,!0).put({[ly]:t,value:n});return new ko(r).toPromise()}async function sT(e,t){const n=Oa(e,!1).get(t),r=await new ko(n).toPromise();return r===void 0?null:r.value}function qh(e,t){const n=Oa(e,!0).delete(t);return new ko(n).toPromise()}const aT=800,lT=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>lT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(rT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await tT(),!this.activeServiceWorker)return;this.sender=new Zk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ic();return await Gh(t,Zs,"1"),await qh(t,Zs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>sT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Oa(i,!1).getAll();return new ko(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const uT=uy;/**
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
 */function cT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function dT(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=jt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",cT().appendChild(r)})}function fT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Eo(3e4,6e4);/**
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
 */function cy(e,t){return t?Zt(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Rd extends ey{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Wr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Wr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hT(e){return Wk(e.auth,new Rd(e),e.bypassAuthState)}function pT(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),Hk(n,new Rd(e),e.bypassAuthState)}async function mT(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),Bk(n,new Rd(e),e.bypassAuthState)}/**
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
 */class dy{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:Wt(this.auth,"internal-error")}}resolve(t){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gT=new Eo(2e3,1e4);async function vT(e,t,n){const r=Ra(e);hk(e,t,Cd);const i=cy(r,n);return new Jn(r,"signInViaPopup",t,i).executeNotNull()}class Jn extends dy{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const t=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,gT.get())};t()}}Jn.currentPopupAction=null;/**
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
 */const yT="pendingRedirect",fs=new Map;class wT extends dy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=fs.get(this.auth._key());if(!t){try{const r=await ST(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}fs.set(this.auth._key(),t)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ST(e,t){const n=IT(t),r=ET(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _T(e,t){fs.set(e._key(),t)}function ET(e){return Zt(e._redirectPersistence)}function IT(e){return ds(yT,e.config.apiKey,e.name)}async function kT(e,t,n=!1){const r=Ra(e),i=cy(r,t),s=await new wT(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const TT=10*60*1e3;class CT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!fy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qh(t))}saveEventToCache(t){this.cachedEventUids.add(Qh(t)),this.lastProcessedEventTime=Date.now()}}function Qh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(e);default:return!1}}/**
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
 */async function PT(e,t={}){return Aa(e,"GET","/v1/projects",t)}/**
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
 */const RT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xT=/^https?/;async function OT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await PT(e);for(const n of t)try{if(NT(n))return}catch{}Wt(e,"unauthorized-domain")}function NT(e){const t=rc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!xT.test(n))return!1;if(RT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LT=new Eo(3e4,6e4);function Yh(){const e=Vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function DT(e){return new Promise((t,n)=>{var r,i,o;function s(){Yh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yh(),n(jt(e,"network-request-failed"))},timeout:LT.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Vt().gapi)===null||o===void 0)&&o.load)s();else{const a=fT("iframefcb");return Vt()[a]=()=>{gapi.load?s():n(jt(e,"network-request-failed"))},dT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw hs=null,t})}let hs=null;function bT(e){return hs=hs||DT(e),hs}/**
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
 */const MT=new Eo(5e3,15e3),$T="__/auth/iframe",FT="emulator/auth/iframe",UT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jT(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Id(t,FT):`https://${e.config.authDomain}/${$T}`,r={apiKey:t.apiKey,appName:e.name,v:_o},i=zT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${So(r).slice(1)}`}async function VT(e){const t=await bT(e),n=Vt().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:jT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=jt(e,"network-request-failed"),a=Vt().setTimeout(()=>{o(s)},MT.get());function l(){Vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const BT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HT=500,WT=600,KT="_blank",GT="http://localhost";class Xh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qT(e,t,n,r=HT,i=WT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Be().toLowerCase();n&&(a=Kv(u)?KT:n),Wv(u)&&(t=t||GT,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(Dk(u)&&a!=="_self")return QT(t||"",a),new Xh(null);const h=window.open(t||"",a,f);U(h,e,"popup-blocked");try{h.focus()}catch{}return new Xh(h)}function QT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YT="__/auth/handler",XT="emulator/auth/handler";function Jh(e,t,n,r,i,o){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_o,eventId:i};if(t instanceof Cd){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",kS(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Io){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${JT(e)}?${So(a).slice(1)}`}function JT({config:e}){return e.emulator?Id(e,XT):`https://${e.authDomain}/${YT}`}/**
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
 */const jl="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=kT,this._overrideRedirectResult=_T}async _openPopup(t,n,r,i){var o;cn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Jh(t,n,r,rc(),i);return qT(t,s,Pd())}async _openRedirect(t,n,r,i){return await this._originValidation(t),eT(Jh(t,n,r,rc(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(cn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await VT(t),r=new CT(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(jl,{type:jl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[jl];s!==void 0&&n(!!s),Wt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xv()||Td()||Pa()}}const eC=ZT;var Zh="@firebase/auth",ep="0.21.5";/**
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
 */class tC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rC(e){Bt(new Nt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{U(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),U(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jv(e)},f=new Fk(a,l,u);return mk(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Bt(new Nt("auth-internal",t=>{const n=Ra(t.getProvider("auth").getImmediate());return(r=>new tC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(Zh,ep,nC(e)),wt(Zh,ep,"esm2017")}/**
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
 */const iC=5*60,oC=jg("authIdTokenMaxAge")||iC;let tp=null;const sC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oC)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aC(e=dd()){const t=wr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=pk(e,{popupRedirectResolver:eC,persistence:[uT,Xk,oy]}),r=jg("authTokenSyncURL");if(r){const o=sC(r);Gk(n,o,()=>o(n.currentUser)),Kk(n,s=>o(s))}const i=zg("auth");return i&&Uk(n,`http://${i}`),n}rC("Browser");const lC={apiKey:"AIzaSyDLJMQU6rx2L5bOszJ6ZgT2SwGEsDxK7rQ",authDomain:"mytaste-app.firebaseapp.com",databaseURL:"https://mytaste-app.firebaseio.com",projectId:"mytaste-app",storageBucket:"mytaste-app.appspot.com",messagingSenderId:"414485531416",appId:"1:414485531416:web:a537fe3c24c3938758ec6d"},xd=qg(lC);lk(xd);const uC=new Ft,Na=aC(xd),cC=FE(xd),dC="items",fC=async()=>{const e=zE(cC,dC);return(await qE(e)).docs.map(n=>n.data())};var ta={},hC={get exports(){return ta},set exports(e){ta=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=Symbol.for("react.element"),Nd=Symbol.for("react.portal"),La=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Ma=Symbol.for("react.provider"),$a=Symbol.for("react.context"),pC=Symbol.for("react.server_context"),Fa=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),za=Symbol.for("react.suspense_list"),ja=Symbol.for("react.memo"),Va=Symbol.for("react.lazy"),mC=Symbol.for("react.offscreen"),hy;hy=Symbol.for("react.module.reference");function It(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Od:switch(e=e.type,e){case La:case ba:case Da:case Ua:case za:return e;default:switch(e=e&&e.$$typeof,e){case pC:case $a:case Fa:case Va:case ja:case Ma:return e;default:return t}}case Nd:return t}}}ne.ContextConsumer=$a;ne.ContextProvider=Ma;ne.Element=Od;ne.ForwardRef=Fa;ne.Fragment=La;ne.Lazy=Va;ne.Memo=ja;ne.Portal=Nd;ne.Profiler=ba;ne.StrictMode=Da;ne.Suspense=Ua;ne.SuspenseList=za;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return It(e)===$a};ne.isContextProvider=function(e){return It(e)===Ma};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Od};ne.isForwardRef=function(e){return It(e)===Fa};ne.isFragment=function(e){return It(e)===La};ne.isLazy=function(e){return It(e)===Va};ne.isMemo=function(e){return It(e)===ja};ne.isPortal=function(e){return It(e)===Nd};ne.isProfiler=function(e){return It(e)===ba};ne.isStrictMode=function(e){return It(e)===Da};ne.isSuspense=function(e){return It(e)===Ua};ne.isSuspenseList=function(e){return It(e)===za};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===La||e===ba||e===Da||e===Ua||e===za||e===mC||typeof e=="object"&&e!==null&&(e.$$typeof===Va||e.$$typeof===ja||e.$$typeof===Ma||e.$$typeof===$a||e.$$typeof===Fa||e.$$typeof===hy||e.getModuleId!==void 0)};ne.typeOf=It;(function(e){e.exports=ne})(hC);function gC(e){function t(x,O,N,F,S){for(var K=0,R=0,we=0,X=0,Z,V,Ne=0,Ye=0,Q,Fe=Q=Z=0,J=0,Le=0,ci=0,De=0,Co=N.length,di=Co-1,kt,j="",_e="",tl="",nl="",fn;J<Co;){if(V=N.charCodeAt(J),J===di&&R+X+we+K!==0&&(R!==0&&(V=R===47?10:47),X=we=K=0,Co++,di++),R+X+we+K===0){if(J===di&&(0<Le&&(j=j.replace(m,"")),0<j.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:j+=N.charAt(J)}V=59}switch(V){case 123:for(j=j.trim(),Z=j.charCodeAt(0),Q=1,De=++J;J<Co;){switch(V=N.charCodeAt(J)){case 123:Q++;break;case 125:Q--;break;case 47:switch(V=N.charCodeAt(J+1)){case 42:case 47:e:{for(Fe=J+1;Fe<di;++Fe)switch(N.charCodeAt(Fe)){case 47:if(V===42&&N.charCodeAt(Fe-1)===42&&J+2!==Fe){J=Fe+1;break e}break;case 10:if(V===47){J=Fe+1;break e}}J=Fe}}break;case 91:V++;case 40:V++;case 34:case 39:for(;J++<di&&N.charCodeAt(J)!==V;);}if(Q===0)break;J++}switch(Q=N.substring(De,J),Z===0&&(Z=(j=j.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Le&&(j=j.replace(m,"")),V=j.charCodeAt(1),V){case 100:case 109:case 115:case 45:Le=O;break;default:Le=me}if(Q=t(O,Le,Q,V,S+1),De=Q.length,0<C&&(Le=n(me,j,ci),fn=a(3,Q,Le,O,ae,Y,De,V,S,F),j=Le.join(""),fn!==void 0&&(De=(Q=fn.trim()).length)===0&&(V=0,Q="")),0<De)switch(V){case 115:j=j.replace(A,s);case 100:case 109:case 45:Q=j+"{"+Q+"}";break;case 107:j=j.replace(c,"$1 $2"),Q=j+"{"+Q+"}",Q=he===1||he===2&&o("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=j+Q,F===112&&(Q=(_e+=Q,""))}else Q="";break;default:Q=t(O,n(O,j,ci),Q,F,S+1)}tl+=Q,Q=ci=Le=Fe=Z=0,j="",V=N.charCodeAt(++J);break;case 125:case 59:if(j=(0<Le?j.replace(m,""):j).trim(),1<(De=j.length))switch(Fe===0&&(Z=j.charCodeAt(0),Z===45||96<Z&&123>Z)&&(De=(j=j.replace(" ",":")).length),0<C&&(fn=a(1,j,O,x,ae,Y,_e.length,F,S,F))!==void 0&&(De=(j=fn.trim()).length)===0&&(j="\0\0"),Z=j.charCodeAt(0),V=j.charCodeAt(1),Z){case 0:break;case 64:if(V===105||V===99){nl+=j+N.charAt(J);break}default:j.charCodeAt(De-1)!==58&&(_e+=i(j,Z,V,j.charCodeAt(2)))}ci=Le=Fe=Z=0,j="",V=N.charCodeAt(++J)}}switch(V){case 13:case 10:R===47?R=0:1+Z===0&&F!==107&&0<j.length&&(Le=1,j+="\0"),0<C*$&&a(0,j,O,x,ae,Y,_e.length,F,S,F),Y=1,ae++;break;case 59:case 125:if(R+X+we+K===0){Y++;break}default:switch(Y++,kt=N.charAt(J),V){case 9:case 32:if(X+K+R===0)switch(Ne){case 44:case 58:case 9:case 32:kt="";break;default:V!==32&&(kt=" ")}break;case 0:kt="\\0";break;case 12:kt="\\f";break;case 11:kt="\\v";break;case 38:X+R+K===0&&(Le=ci=1,kt="\f"+kt);break;case 108:if(X+R+K+ue===0&&0<Fe)switch(J-Fe){case 2:Ne===112&&N.charCodeAt(J-3)===58&&(ue=Ne);case 8:Ye===111&&(ue=Ye)}break;case 58:X+R+K===0&&(Fe=J);break;case 44:R+we+X+K===0&&(Le=1,kt+="\r");break;case 34:case 39:R===0&&(X=X===V?0:X===0?V:X);break;case 91:X+R+we===0&&K++;break;case 93:X+R+we===0&&K--;break;case 41:X+R+K===0&&we--;break;case 40:if(X+R+K===0){if(Z===0)switch(2*Ne+3*Ye){case 533:break;default:Z=1}we++}break;case 64:R+we+X+K+Fe+Q===0&&(Q=1);break;case 42:case 47:if(!(0<X+K+we))switch(R){case 0:switch(2*V+3*N.charCodeAt(J+1)){case 235:R=47;break;case 220:De=J,R=42}break;case 42:V===47&&Ne===42&&De+2!==J&&(N.charCodeAt(De+2)===33&&(_e+=N.substring(De,J+1)),kt="",R=0)}}R===0&&(j+=kt)}Ye=Ne,Ne=V,J++}if(De=_e.length,0<De){if(Le=O,0<C&&(fn=a(2,_e,Le,x,ae,Y,De,F,S,F),fn!==void 0&&(_e=fn).length===0))return nl+_e+tl;if(_e=Le.join(",")+"{"+_e+"}",he*ue!==0){switch(he!==2||o(_e,2)||(ue=0),ue){case 111:_e=_e.replace(y,":-moz-$1")+_e;break;case 112:_e=_e.replace(p,"::-webkit-input-$1")+_e.replace(p,"::-moz-$1")+_e.replace(p,":-ms-input-$1")+_e}ue=0}}return nl+_e+tl}function n(x,O,N){var F=O.trim().split(_);O=F;var S=F.length,K=x.length;switch(K){case 0:case 1:var R=0;for(x=K===0?"":x[0]+" ";R<S;++R)O[R]=r(x,O[R],N).trim();break;default:var we=R=0;for(O=[];R<S;++R)for(var X=0;X<K;++X)O[we++]=r(x[X]+" ",F[R],N).trim()}return O}function r(x,O,N){var F=O.charCodeAt(0);switch(33>F&&(F=(O=O.trim()).charCodeAt(0)),F){case 38:return O.replace(d,"$1"+x.trim());case 58:return x.trim()+O.replace(d,"$1"+x.trim());default:if(0<1*N&&0<O.indexOf("\f"))return O.replace(d,(x.charCodeAt(0)===58?"":"$1")+x.trim())}return x+O}function i(x,O,N,F){var S=x+";",K=2*O+3*N+4*F;if(K===944){x=S.indexOf(":",9)+1;var R=S.substring(x,S.length-1).trim();return R=S.substring(0,x).trim()+R+";",he===1||he===2&&o(R,1)?"-webkit-"+R+R:R}if(he===0||he===2&&!o(S,1))return S;switch(K){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(se,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return R=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+S+"-ms-flex-pack"+R+S;case 1005:return w.test(S)?S.replace(g,":-webkit-")+S.replace(g,":-moz-")+S:S;case 1e3:switch(R=S.substring(13).trim(),O=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(O)){case 226:R=S.replace(E,"tb");break;case 232:R=S.replace(E,"tb-rl");break;case 220:R=S.replace(E,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+R+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(O=(S=x).length-10,R=(S.charCodeAt(O)===33?S.substring(0,O):S).substring(x.indexOf(":",7)+1).trim(),K=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:S=S.replace(R,"-webkit-"+R)+";"+S;break;case 207:case 102:S=S.replace(R,"-webkit-"+(102<K?"inline-":"")+"box")+";"+S.replace(R,"-webkit-"+R)+";"+S.replace(R,"-ms-"+R+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return R=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+R+"-ms-flex-"+R+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(T,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(T,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(D.test(x)===!0)return(R=x.substring(x.indexOf(":")+1)).charCodeAt(0)===115?i(x.replace("stretch","fill-available"),O,N,F).replace(":fill-available",":stretch"):S.replace(R,"-webkit-"+R)+S.replace(R,"-moz-"+R.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,N+F===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function o(x,O){var N=x.indexOf(O===1?":":"{"),F=x.substring(0,O!==3?N:10);return N=x.substring(N+1,x.length-1),b(O!==2?F:F.replace(z,"$1"),N,O)}function s(x,O){var N=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return N!==O+";"?N.replace(P," or ($1)").substring(4):"("+O+")"}function a(x,O,N,F,S,K,R,we,X,Z){for(var V=0,Ne=O,Ye;V<C;++V)switch(Ye=ce[V].call(f,x,Ne,N,F,S,K,R,we,X,Z)){case void 0:case!1:case!0:case null:break;default:Ne=Ye}if(Ne!==O)return Ne}function l(x){switch(x){case void 0:case null:C=ce.length=0;break;default:if(typeof x=="function")ce[C++]=x;else if(typeof x=="object")for(var O=0,N=x.length;O<N;++O)l(x[O]);else $=!!x|0}return l}function u(x){return x=x.prefix,x!==void 0&&(b=null,x?typeof x!="function"?he=1:(he=2,b=x):he=0),u}function f(x,O){var N=x;if(33>N.charCodeAt(0)&&(N=N.trim()),ie=N,N=[ie],0<C){var F=a(-1,O,N,N,ae,Y,0,0,0,0);F!==void 0&&typeof F=="string"&&(O=F)}var S=t(me,N,O,0,0);return 0<C&&(F=a(-2,S,N,N,ae,Y,S.length,0,0,0),F!==void 0&&(S=F)),ie="",ue=0,Y=ae=1,S}var h=/^\0+/g,m=/[\0\r\f]/g,g=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,_=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,T=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,Y=1,ae=1,ue=0,he=1,me=[],ce=[],C=0,b=null,$=0,ie="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var vC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yC(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,np=yC(function(e){return wC.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),oc={},SC={get exports(){return oc},set exports(e){oc=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,Ld=Oe?Symbol.for("react.element"):60103,Dd=Oe?Symbol.for("react.portal"):60106,Ba=Oe?Symbol.for("react.fragment"):60107,Ha=Oe?Symbol.for("react.strict_mode"):60108,Wa=Oe?Symbol.for("react.profiler"):60114,Ka=Oe?Symbol.for("react.provider"):60109,Ga=Oe?Symbol.for("react.context"):60110,bd=Oe?Symbol.for("react.async_mode"):60111,qa=Oe?Symbol.for("react.concurrent_mode"):60111,Qa=Oe?Symbol.for("react.forward_ref"):60112,Ya=Oe?Symbol.for("react.suspense"):60113,_C=Oe?Symbol.for("react.suspense_list"):60120,Xa=Oe?Symbol.for("react.memo"):60115,Ja=Oe?Symbol.for("react.lazy"):60116,EC=Oe?Symbol.for("react.block"):60121,IC=Oe?Symbol.for("react.fundamental"):60117,kC=Oe?Symbol.for("react.responder"):60118,TC=Oe?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ld:switch(e=e.type,e){case bd:case qa:case Ba:case Wa:case Ha:case Ya:return e;default:switch(e=e&&e.$$typeof,e){case Ga:case Qa:case Ja:case Xa:case Ka:return e;default:return t}}case Dd:return t}}}function py(e){return ft(e)===qa}re.AsyncMode=bd;re.ConcurrentMode=qa;re.ContextConsumer=Ga;re.ContextProvider=Ka;re.Element=Ld;re.ForwardRef=Qa;re.Fragment=Ba;re.Lazy=Ja;re.Memo=Xa;re.Portal=Dd;re.Profiler=Wa;re.StrictMode=Ha;re.Suspense=Ya;re.isAsyncMode=function(e){return py(e)||ft(e)===bd};re.isConcurrentMode=py;re.isContextConsumer=function(e){return ft(e)===Ga};re.isContextProvider=function(e){return ft(e)===Ka};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ld};re.isForwardRef=function(e){return ft(e)===Qa};re.isFragment=function(e){return ft(e)===Ba};re.isLazy=function(e){return ft(e)===Ja};re.isMemo=function(e){return ft(e)===Xa};re.isPortal=function(e){return ft(e)===Dd};re.isProfiler=function(e){return ft(e)===Wa};re.isStrictMode=function(e){return ft(e)===Ha};re.isSuspense=function(e){return ft(e)===Ya};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ba||e===qa||e===Wa||e===Ha||e===Ya||e===_C||typeof e=="object"&&e!==null&&(e.$$typeof===Ja||e.$$typeof===Xa||e.$$typeof===Ka||e.$$typeof===Ga||e.$$typeof===Qa||e.$$typeof===IC||e.$$typeof===kC||e.$$typeof===TC||e.$$typeof===EC)};re.typeOf=ft;(function(e){e.exports=re})(SC);var Md=oc,CC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},AC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},my={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$d={};$d[Md.ForwardRef]=PC;$d[Md.Memo]=my;function rp(e){return Md.isMemo(e)?my:$d[e.$$typeof]||CC}var RC=Object.defineProperty,xC=Object.getOwnPropertyNames,ip=Object.getOwnPropertySymbols,OC=Object.getOwnPropertyDescriptor,NC=Object.getPrototypeOf,op=Object.prototype;function gy(e,t,n){if(typeof t!="string"){if(op){var r=NC(t);r&&r!==op&&gy(e,r,n)}var i=xC(t);ip&&(i=i.concat(ip(t)));for(var o=rp(e),s=rp(t),a=0;a<i.length;++a){var l=i[a];if(!AC[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=OC(t,l);try{RC(e,l,u)}catch{}}}}return e}var LC=gy;function en(){return(en=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sp=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},sc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ta.typeOf(e)},na=Object.freeze([]),$n=Object.freeze({});function fo(e){return typeof e=="function"}function ap(e){return e.displayName||e.name||"Component"}function Fd(e){return e&&typeof e.styledComponentId=="string"}var ni=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ud=typeof window<"u"&&"HTMLElement"in window,DC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function To(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var bC=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&To(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ps=new Map,ra=new Map,Fi=1,Go=function(e){if(ps.has(e))return ps.get(e);for(;ra.has(Fi);)Fi++;var t=Fi++;return ps.set(e,t),ra.set(t,e),t},MC=function(e){return ra.get(e)},$C=function(e,t){t>=Fi&&(Fi=t+1),ps.set(e,t),ra.set(t,e)},FC="style["+ni+'][data-styled-version="5.3.9"]',UC=new RegExp("^"+ni+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),zC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},jC=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(UC);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&($C(u,l),zC(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},VC=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},vy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(ni))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ni,"active"),r.setAttribute("data-styled-version","5.3.9");var s=VC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},BC=function(){function e(n){var r=this.element=vy(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}To(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),HC=function(){function e(n){var r=this.element=vy(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),WC=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),lp=Ud,KC={isServer:!Ud,useCSSOMInjection:!DC},yy=function(){function e(n,r,i){n===void 0&&(n=$n),r===void 0&&(r={}),this.options=en({},KC,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ud&&lp&&(lp=!1,function(o){for(var s=document.querySelectorAll(FC),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ni)!=="active"&&(jC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Go(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(en({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new WC(s):o?new BC(s):new HC(s),new bC(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Go(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Go(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Go(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=MC(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var f=ni+".g"+s+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(m){m.length>0&&(h+=m+",")}),o+=""+u+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),GC=/(a)(d)/gi,up=function(e){return String.fromCharCode(e+(e>25?39:97))};function ac(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=up(t%52)+n;return(up(t%52)+n).replace(GC,"$1-$2")}var Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wy=function(e){return Mr(5381,e)};function qC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fo(n)&&!Fd(n))return!1}return!0}var QC=wy("5.3.9"),YC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qC(t),this.componentId=n,this.baseHash=Mr(QC,n),this.baseStyle=r,yy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=ri(this.rules,t,n,r).join(""),a=ac(Mr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=Mr(this.baseHash,r.hash),h="",m=0;m<u;m++){var g=this.rules[m];if(typeof g=="string")h+=g;else if(g){var w=ri(g,t,n,r),v=Array.isArray(w)?w.join(""):w;f=Mr(f,v+m),h+=v}}if(h){var _=ac(f>>>0);if(!n.hasNameForId(i,_)){var d=r(h,"."+_,void 0,i);n.insertRules(i,_,d)}o.push(_)}}return o.join(" ")},e}(),XC=/^\s*\/\/.*$/gm,JC=[":","[",".","#"];function ZC(e){var t,n,r,i,o=e===void 0?$n:e,s=o.options,a=s===void 0?$n:s,l=o.plugins,u=l===void 0?na:l,f=new gC(a),h=[],m=function(v){function _(d){if(d)try{v(d+"}")}catch{}}return function(d,c,p,y,E,A,P,T,z,D){switch(d){case 1:if(z===0&&c.charCodeAt(0)===64)return v(c+";"),"";break;case 2:if(T===0)return c+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(p[0]+c),"";default:return c+(D===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(_)}}}(function(v){h.push(v)}),g=function(v,_,d){return _===0&&JC.indexOf(d[n.length])!==-1||d.match(i)?v:"."+t};function w(v,_,d,c){c===void 0&&(c="&");var p=v.replace(XC,""),y=_&&d?d+" "+_+" { "+p+" }":p;return t=c,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(d||!_?"":_,y)}return f.use([].concat(u,[function(v,_,d){v===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,g))},m,function(v){if(v===-2){var _=h;return h=[],_}}])),w.hash=u.length?u.reduce(function(v,_){return _.name||To(15),Mr(v,_.name)},5381).toString():"",w}var Sy=B.createContext();Sy.Consumer;var _y=B.createContext(),e2=(_y.Consumer,new yy),lc=ZC();function t2(){return I.useContext(Sy)||e2}function n2(){return I.useContext(_y)||lc}var r2=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=lc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return To(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=lc),this.name+t.hash},e}(),i2=/([A-Z])/,o2=/([A-Z])/g,s2=/^ms-/,a2=function(e){return"-"+e.toLowerCase()};function cp(e){return i2.test(e)?e.replace(o2,a2).replace(s2,"-ms-"):e}var dp=function(e){return e==null||e===!1||e===""};function ri(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=ri(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(dp(e))return"";if(Fd(e))return"."+e.styledComponentId;if(fo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return ri(l,t,n,r)}var u;return e instanceof r2?n?(e.inject(n,r),e.getName(r)):e:sc(e)?function f(h,m){var g,w,v=[];for(var _ in h)h.hasOwnProperty(_)&&!dp(h[_])&&(Array.isArray(h[_])&&h[_].isCss||fo(h[_])?v.push(cp(_)+":",h[_],";"):sc(h[_])?v.push.apply(v,f(h[_],_)):v.push(cp(_)+": "+(g=_,(w=h[_])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||g in vC?String(w).trim():w+"px")+";"));return m?[m+" {"].concat(v,["}"]):v}(e):e.toString()}var fp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function l2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return fo(e)||sc(e)?fp(ri(sp(na,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:fp(ri(sp(e,n)))}var u2=function(e,t,n){return n===void 0&&(n=$n),e.theme!==n.theme&&e.theme||t||n.theme},c2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d2=/(^-|-$)/g;function Vl(e){return e.replace(c2,"-").replace(d2,"")}var f2=function(e){return ac(wy(e)>>>0)};function qo(e){return typeof e=="string"&&!0}var uc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},h2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function p2(e,t,n){var r=e[n];uc(t)&&uc(r)?Ey(r,t):e[n]=t}function Ey(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(uc(s))for(var a in s)h2(a)&&p2(e,s[a],a)}return e}var Iy=B.createContext();Iy.Consumer;var Bl={};function ky(e,t,n){var r=Fd(e),i=!qo(e),o=t.attrs,s=o===void 0?na:o,a=t.componentId,l=a===void 0?function(c,p){var y=typeof c!="string"?"sc":Vl(c);Bl[y]=(Bl[y]||0)+1;var E=y+"-"+f2("5.3.9"+y+Bl[y]);return p?p+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,f=u===void 0?function(c){return qo(c)?"styled."+c:"Styled("+ap(c)+")"}(e):u,h=t.displayName&&t.componentId?Vl(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var w,v=new YC(n,h,r?e.componentStyle:void 0),_=v.isStatic&&s.length===0,d=function(c,p){return function(y,E,A,P){var T=y.attrs,z=y.componentStyle,D=y.defaultProps,se=y.foldedComponentIds,Y=y.shouldForwardProp,ae=y.styledComponentId,ue=y.target,he=function(F,S,K){F===void 0&&(F=$n);var R=en({},S,{theme:F}),we={};return K.forEach(function(X){var Z,V,Ne,Ye=X;for(Z in fo(Ye)&&(Ye=Ye(R)),Ye)R[Z]=we[Z]=Z==="className"?(V=we[Z],Ne=Ye[Z],V&&Ne?V+" "+Ne:V||Ne):Ye[Z]}),[R,we]}(u2(E,I.useContext(Iy),D)||$n,E,T),me=he[0],ce=he[1],C=function(F,S,K,R){var we=t2(),X=n2(),Z=S?F.generateAndInjectStyles($n,we,X):F.generateAndInjectStyles(K,we,X);return Z}(z,P,me),b=A,$=ce.$as||E.$as||ce.as||E.as||ue,ie=qo($),x=ce!==E?en({},E,{},ce):E,O={};for(var N in x)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?O.as=x[N]:(Y?Y(N,np,$):!ie||np(N))&&(O[N]=x[N]));return E.style&&ce.style!==E.style&&(O.style=en({},E.style,{},ce.style)),O.className=Array.prototype.concat(se,ae,C!==ae?C:null,E.className,ce.className).filter(Boolean).join(" "),O.ref=b,I.createElement($,O)}(w,c,p,_)};return d.displayName=f,(w=B.forwardRef(d)).attrs=m,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):na,w.styledComponentId=h,w.target=r?e.target:e,w.withComponent=function(c){var p=t.componentId,y=function(A,P){if(A==null)return{};var T,z,D={},se=Object.keys(A);for(z=0;z<se.length;z++)T=se[z],P.indexOf(T)>=0||(D[T]=A[T]);return D}(t,["componentId"]),E=p&&p+"-"+(qo(c)?c:Vl(ap(c)));return ky(c,en({},y,{attrs:m,componentId:E}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Ey({},e.defaultProps,c):c}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&LC(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var cc=function(e){return function t(n,r,i){if(i===void 0&&(i=$n),!ta.isValidElementType(r))return To(1,String(r));var o=function(){return n(r,i,l2.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,en({},i,{},s))},o.attrs=function(s){return t(n,r,en({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(ky,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){cc[e]=cc(e)});const Qe=cc;var Ty={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hp=B.createContext&&B.createContext(Ty),Fn=globalThis&&globalThis.__assign||function(){return Fn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fn.apply(this,arguments)},m2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Cy(e){return e&&e.map(function(t,n){return B.createElement(t.tag,Fn({key:n},t.attr),Cy(t.child))})}function zd(e){return function(t){return B.createElement(g2,Fn({attr:Fn({},e.attr)},t),Cy(e.child))}}function g2(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=m2(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),B.createElement("svg",Fn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Fn(Fn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&B.createElement("title",null,o),e.children)};return hp!==void 0?B.createElement(hp.Consumer,null,function(n){return t(n)}):t(Ty)}function v2(e){return zd({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]})(e)}function y2(e){return zd({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]})(e)}function w2(e){return zd({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}const S2=Qe.div`
  position: fixed;
  top: 0;
  height: 70px;
  //background-color: ${e=>e.theme.separator};
  background-color: black;
  width: 100%;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  font-family: 'Jura', sans-serif;
`,_2=Qe.div`
  font-size: 32px;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  height: 100%;
`,E2=Qe.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-top: 6px;
`,I2=Qe.span`
  font-size: 32px;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
`,k2=Qe.img`
  height: 32px;
  max-width: 32px;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
`,T2=()=>{const[e,t]=I.useState(null);return I.useEffect(()=>{Ad(Na,n=>{n?t(n):console.log("user is logged out")})},[]),Ze(S2,{children:[M(nr,{to:"/",children:M(I2,{children:"MyTaste"})}),e?M(nr,{to:"/profile",children:M(k2,{src:e.photoURL})}):M(nr,{to:"/login",children:Ze(_2,{children:[M(y2,{}),M(E2,{children:"Log in"})]})})]})},C2=Qe.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 70px;
  background-color: ${e=>e.theme.separator};
  background-color: black;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Jura', sans-serif;
`,pp=Qe.div`
  font-size: 32px;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  height: 100%;
`,mp=Qe.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-top: 6px;
`,A2=()=>Ze(C2,{children:[M(nr,{to:"/",children:Ze(pp,{children:[M(v2,{}),M(mp,{children:"Home"})]})}),M(nr,{to:"/search",children:Ze(pp,{children:[M(w2,{}),M(mp,{children:"Search"})]})})]}),P2=Qe.div`
  display: flex;
  flex-direction: column;
`,R2=Qe.div`
  margin: 80px 1rem;

  display: flex;
  flex-direction: column;
`;function x2(){const[e,t]=I.useState([]);return I.useEffect(()=>{fC().then(n=>{t(n)}).catch(n=>console.error(n.message))},[]),I.useEffect(()=>{Ad(Na,n=>{n?n.uid:console.log("user is logged out")})},[]),Ze(P2,{children:[M(T2,{}),M(R2,{children:e.map(n=>M(nr,{to:"/item/"+n.id,children:Ze("div",{children:[M("div",{children:n.image&&M("img",{src:n.image,className:"card-img-top",alt:"image",height:"100px"})}),Ze("div",{children:[M("h4",{children:n.title}),Ze("div",{children:[n.averageRatingCount||"0"," ",n.averageRatingCount===1?"vote":"votes"]})]})]})},n.title))}),M(A2,{})]})}function O2(){const{id:e}=zw();return Ze("h1",{children:["Item: ",e]})}const N2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAuCAYAAAB50MjgAAAAAXNSR0IArs4c6QAAD0lJREFUeAHtXQt0VNW5/mbmzCOTCUQSQoJBQ0NijAHUAEJraAERWUixLNcS7L2XdhWsVWutfVBN24VrVS3UltZKl66mVaxU6b2ktyK9lEa4baQqLwuFVAIRkTSYGCE0k3memdNvnzOPM5MJTCaJhPT8a53M2Xv/Zz++/e3///eeMwAYYiBgIGAgYCDw74WAKWm4Ih29koqMpIHAJY2Awt5HL3UgevKbZn3r6G327MINZrOl6JIeptF5A4EkBMLh0Olgd/t9u9eV/5ZFYhFA0ulY7M5xP/v+MmfhDZP02TqNi3T75nEZD//Gf5FaN5odCQgIg251FWzgWF7mJYsxmcWfiEhmizTsiC/6NtwWYxQw4/PSQkDwmz2OWXY9+fUh0KU1KqO3BgLpIxDjuZ786T9uaBoIjAAEDPKPgEk0hpAZAgb5M8PNeGoEIGCQfwRMojGEzBAwyJ8ZbsZTIwABg/wjYBKNIWSGgEH+zHAznhoBCMQO/AdjLMGjTfBtrYd84jhCba1QggFY8sbCOvla2D81H7ZpMwejGaMOA4FBQWBQyB9qfx/d6x5B8OD+Xp0K/eMUxOXbvhVS1VSMWr0GlqLLe+kZGQYCHzUCAw57gk1/w9l7P5eS+MmDkQ8fRPf6x5OzjbSBwEVBYECWP9TZgXMPPwDF3Z3QeUvxFZBKy6GEw5BbmhFmCCREKqvAqO88lqA7lImi8RYsrbQgl6PsORdGw34ZhwNai6UVVjww3Yx9r/qxsW2Qe2Ezo/YzVjg7ZNTuCg1y5YnVLZ1jx5wxYTyzJYjDiUVqqqjKhuc+bUXXUT/u2KK+z5VCK0VWrhmrpkkoIHZBfxgH3pLR0JVCb6iysiVs/ooduR8Gcc8zAbQMQTsDIn/3ujUJxDePLYDr/tWwz6pJ6Kq/cRfDnpeR861HYM4ZlVA2VInlS7Kw8ppEx7Z4jg1/2OzFuhYFN063oXICUD4vhI2/6gcp0uhw0cesmFtKaEtNqCL5U5EyjWrSUDHh5lkSyqj5yVySv8uEVUtsqM5WsOl/AmjkQndaTeqbXA57GtVFVKbPsuN7c6T4G2DMX8C8ZQd8WLl9aBezvpcOJqQcE7L0mYN4nzH5lbOvwVpYj6ClGAiZYc7LR+4Pn4FlfO943l4zB+L6qCSn1BYhvoKmAwH87hhw42wbaopMWHC7Db9f68cOWvyJtPx7/zK4xBdjPP12AC8dUJDdTk8zpIMmyf8YwLzRCrZHrHJlGReDTcHHrBr5Y82ny9mxVqyJEL/z3SCefzOEsmutWHyVBROvt2PFGx5s/Ig8gDoz7Lc3NojBvcmY/OH3X4B96hlYCr3oqZ+I7C/cm5L4g9vd9GpzWSN63hAe3i5DBGUNtPabVjtQaDGjOhd4p9SCq680I9hiwrYPxG8bTKj9TwdmTzBDCilo7VDgyjXBfcyPFbuAui/YcZk/hLdpXafxWVDn1JEAvvqKVn9Cz7LZBi1/zhgFRW+FgQobnloowdcVQrfNgrI8E+RAGK9u92HdYfV3FfHHx0rY+B82ONqDWPnroKr/07vtKOiMp59musgj48G6IGZXSJg8SsHUgwoeWm7HBJuoyoQ7v+TExO1e/CpSsyNfwtNftGlte8P4v5d9+DExSZalH5cgLK7cEcAdbF+VlhBsK7OxoMCEWVebsPF1Da9Vt9pxa4UFLrbpc4fwxx1+/PjteJ1V19nwjRoJhS6+SEm8mg8GYvMh6l3EkO2uGRJchLPzlIyzTguKQmJcqcOcqiorvjHXisIsrb6D+/345gDCyozJr5zbo+IijfMiZ1U7rPNuUdP6P4+/fP4foNxYbkENJ2+w5fQ/FfXXClKWhOc+T9LvDKL+ZAifXdsTa2rFBAvyOSmFEZ/6wEon5hZoxe6ACcX0EkIco7TPsdR1uSTMzAPcNEUuTsDEKXZ87e8y1rRoz8X/mlA0mvpZZlAdXrruXDFh7E8hSUCekDBmLFhEL3TYn+gdzimQqJtfYsENCOLNcgmVgjxsezbT29jvMpEmtB2sOz/fzLoV5BFGK0kURVPifdQGiH5Jo/kc2/axbQf7tfh2O/av9aFRFOokL1sbb/PBRI+4rq4H63R6K+7IwjKGdULcXhoKMnjxUidy6z1YwwVQxAX/k4VaD3wsF2OqpOd4YTSwZLOMqul2PMiQTYgoz58gIV8kiH2qMEd48x9y7yKekAOsz2ZC9SwHnvZ5cffrNDAZSGJQ3J8KfO/FtM15V8FkIdpJ0nCYm6TzXH8lIYdE2oJ4co9Wd26RFfd+1olXVzux/iYLciINBvRNc3NVoxJfQf2mHixZ34O6IxqgUQponwq2Rsq3CuZR8sZoBNBS8b8JLjtaiVvGV9Z6sISkaxXtE7NZ9EIJwo4d/FDkWFA1Fph/TRRXMz5ZAUy/Qpuy1mbN40RsMwL0civWe7FfjREUPP+UB7V6rxJpe1GsbTMqkttmq5c5E3oDYW3X3GpD7S029XPFlRwv8VqqEj+KhyeGV808KzE24b6bNeK3cp+waL0Ht28KwM2qXSTxci6w5RHiv39IK7+tPqj9vIq4pApz7r9JI/6JPV4seMIDoS+kbKYVpepd//9kTv7+t9XriUCUFL1KBp6xrcGHeT/z4Q9HQ+gSJzwWE6bMcOCFO6O2Md5GTj6ttEiSQPUntfz/b0lhTVi+OVJ+1h937/Gazn/nbo9ufsNoj5w6RT4SHnydYYaQiiouyvHxxVV6jRWfKBZTpuCtoyn6x5KotbdFb0RFlPTaNmG0U2tPjsxNNUOXmincwF9vVT9njQdyCs1qaIQPZfwigseLDUGV3KCFv5LtCS8k+rmzURtL90kZ70QGO47WP1q+IxK2dJ8Ka8+Lx3oJPWFkUU6Y7MDm+7NQF/EqtBEpPUWvKlJk9GZCCqWUWY4JPD88ohb5PCeQFQ7BYo5aKe2J4iSrGCQO7XTrUcmNuNhoerA+qxhK3cSw5djhINZt0cCv4WnFt7mRc5XYsCJbRirSCSCjhs+ZRJ5o36LlgZQVRLX6+EyEpw8loLEpBN8Mhinss5DWPX6cKLWj5iobFoqMUAi7+ziejXoCoZYgabWt4HC7gpkMq8aME4sshB1bPWgiFp+4JQuLJ5gQ5KIoYCiYijh6WybmWuw9XAKweLSp5mUzromV94GzeDqlcBwS65W4sDrP8Z5GKJWnSPlsUmaqMSSppE6Gc6bBTPI3y6Pw0JlK3HWyEYsmfipBeePdUapo2f+7L4if7oiz5oq8oXE81dfbsLiEm8oSYNuzGh0aD4XgJvmFpxdWMd4LoLuTsTDzXfQODFXRwsLx3OxeNGkL4RT7UKZuXoG3GH/v5nTX5FlU0rm5Odx7gc65PRdQ6KO4tYMehRv6YmK4/A0vXuxScJq6lZoNUZ9qaSaW3MC7+F3ADcxp4FUlvk8RpYzHRdSmWXbgymLiKA4UuMcZoy5ABR1UKIssxkllLN/LcnocsdHuS6KLunm3F19WN9wMAa8jfY/IGX8HkDn5xy3H79/diR+4p5BIFjx1aBOmjr0axa5xKft/zqNgy97oELR/HGiGODUZAql/U8adJYwRi3iuf78FzZ0kMzeK2uSE8HoXMFnfbg/DEQakM7lpe5Au9ZY2BZUlur5xsWQEFKsQm7fzWaYIv/W94X0Y+9mHMi5gMDbc/QH5EfEGgiDvHYszMWo4o/VoaROWrXJg3HY/tibVrE9Gn9HnNe7yY/+1TlRzU7zyHifmvcu2cnjMyROqmBCvPSTwXC7Gh76ehUU6vJo4x6dplf97XwjVNRZUL3SirlxGjtjQEg+5I4iXuKCu/RvL6d2mzHdiY5kMB8tV8utgV9tTMYzXVznHiU2TZJyxW1DJ0yfUmHHbkwH1RC/WvzRvMja9jvy5aMj+nEp80Van7yzu3vldNLbt69X00bMn8MDmd9F2Nh7yzKuyxOLLXg8MMKObpvue+gBayTqJhBZEziWI7nMyNtQlnq5orlpB7S98OEQ3KiyU0Ne7cHDhcr0kyD97tLEk6CVoMEHrnUD8OGdFRKGK3gPpH98ZIXjXqZBm5dtkNKuVKdjXFMdRCx/Upvi4gm0klRAXT3cqxqi32p+021bwzQ1evHFa7Cl4olUiacTnSdGxQ348Jqw023n0WerwOFjgNYV4CeNw7IA/ZpX3Nvqw4UBIxXEij33zudLcJP73nufxLXUbuSd7KbJvKWYb6kkP8wUuCac9EQxFfT/aI6seupALRRBf5rFZ3YuZEV80pVvOyJr7qNvz6sPZIj8t6fB8iGXbH0R3MCGowxWuIpRfNpF7TDNOdrfh7bPvwBR28Oz6Llg91chmKPvzlVkYNzr9tTfvscQ20uoglXK4rygQ5jCooOU8VRTxdYf7ShT8slFGR48J/3VnFpbS8nYe8eGO3+mZk27LF1GPYy7lmFtoYQckPE4sFZErHXZLZLEn1yfwFYcFbpYLUvcSUQc3uMKAJODPRbNmsYTX/szjXO4DK6byW+X5/FaZnu6uJ/znCWVYH124h/N5+jzz2asfkYydteouRDUjGXnzaMUFzjz8ZHYtvv7aWpzxC7OpyXvu0xCXXhSzD96iJzHKfxsemb28X8TX19Pf++6+JiWhIh7NLbRhJk3OtKttcDP2z1VjAgUNf7rEiC/GxTG3JIwvwwTjd7H/OZ9cEF9RB8O2ZLnpZrGBN/OS0MWQM1d8d0E5sT94gb6zvmQ3nFx5mun0TW8fFU7OL8fG+d9HdcE1fWjEs0tyLscTiz+O6/TxdLz4It4x7HmWX/gwvvWR+C4Lwxwe4z3/nAc/HySgL+LghmXTDa/4UHdARidtsPjC0Mdvnd9gaLNyV+oj3KEYxIDCnuQONZ05ji3Hd+D4uffQ6n4f/lAAeY5cVOWVY27xDZjDy8xQKBPJNOzJpC3jmZGLwKCFPckQVY6ZhMoZk5KzjbSBwLBEIDMzPCyHYnTKQKB/CBjk7x9ehvYIQsAg/wiaTGMo/UPAIH//8DK0RxACBvlH0GQaQ+kfAgb5+4eXoT2CEDDIP4Im0xhK/xAwyN8/vAztEYSAnvxKSPZ9IP7zt+Emw7FPww0joz8XRkDwm1qxt/30L7aFO5u2PrZ60621FmtW7A3TC1dpaBgIDH8EQkFvZ8ffX3mUPY29PKR/t0d4AfGPDVzOS/x+Tl/GpCEGApcsAsLai39K5B+8xA/N1AWQTHCxAMRvaZLzmWWIgcAljYBYAOL99Jjlv6RHY3TeQGAgCPwLjsfs3HaOnC0AAAAASUVORK5CYII=",L2=Qe.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  color: red;
`,D2=()=>{const e=ld(),t=()=>{vT(Na,uC).then(n=>{const r=n.user;console.log(r.email),e("/")}).catch(n=>{n.code;const r=n.message;n.customData.email,Ft.credentialFromError(n),console.log(r)})};return M(L2,{children:M("button",{children:M("img",{src:N2,alt:"google-login-button",onClick:()=>{t()}})})})};function Ay(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ay(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Tn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ay(e))&&(r&&(r+=" "),r+=t);return r}const ms=e=>typeof e=="number"&&!isNaN(e),ia=e=>typeof e=="string",st=e=>typeof e=="function",gs=e=>ia(e)||st(e)?e:null,Hl=e=>I.isValidElement(e)||ia(e)||st(e)||ms(e);function b2(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Za(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:l,preventExitTransition:u,done:f,nodeRef:h,isIn:m}=s;const g=r?`${t}--${l}`:t,w=r?`${n}--${l}`:n,v=I.useRef(0);return I.useLayoutEffect(()=>{const _=h.current,d=g.split(" "),c=p=>{p.target===h.current&&(_.dispatchEvent(new Event("d")),_.removeEventListener("animationend",c),_.removeEventListener("animationcancel",c),v.current===0&&p.type!=="animationcancel"&&_.classList.remove(...d))};_.classList.add(...d),_.addEventListener("animationend",c),_.addEventListener("animationcancel",c)},[]),I.useEffect(()=>{const _=h.current,d=()=>{_.removeEventListener("animationend",d),i?b2(_,f,o):f()};m||(u?d():(v.current=1,_.className+=` ${w}`,_.addEventListener("animationend",d)))},[m]),B.createElement(B.Fragment,null,a)}}function gp(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const Zn={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Qo=e=>{let{theme:t,type:n,...r}=e;return B.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Wl={info:function(e){return B.createElement(Qo,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return B.createElement(Qo,{...e},B.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return B.createElement(Qo,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return B.createElement(Qo,{...e},B.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return B.createElement("div",{className:"Toastify__spinner"})}};function M2(e){const[,t]=I.useReducer(g=>g+1,0),[n,r]=I.useState([]),i=I.useRef(null),o=I.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=I.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;function l(g){let{containerId:w}=g;const{limit:v}=a.props;!v||w&&a.containerId!==w||(a.count-=a.queue.length,a.queue=[])}function u(g){r(w=>g==null?[]:w.filter(v=>v!==g))}function f(){const{toastContent:g,toastProps:w,staleId:v}=a.queue.shift();m(g,w,v)}function h(g,w){let{delay:v,staleId:_,...d}=w;if(!Hl(g)||function(Y){return!i.current||a.props.enableMultiContainer&&Y.containerId!==a.props.containerId||o.has(Y.toastId)&&Y.updateId==null}(d))return;const{toastId:c,updateId:p,data:y}=d,{props:E}=a,A=()=>u(c),P=p==null;P&&a.count++;const T={...E,style:E.toastStyle,key:a.toastKey++,...d,toastId:c,updateId:p,data:y,closeToast:A,isIn:!1,className:gs(d.className||E.toastClassName),bodyClassName:gs(d.bodyClassName||E.bodyClassName),progressClassName:gs(d.progressClassName||E.progressClassName),autoClose:!d.isLoading&&(z=d.autoClose,D=E.autoClose,z===!1||ms(z)&&z>0?z:D),deleteToast(){const Y=gp(o.get(c),"removed");o.delete(c),Zn.emit(4,Y);const ae=a.queue.length;if(a.count=c==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),ae>0){const ue=c==null?a.props.limit:1;if(ae===1||ue===1)a.displayedToast++,f();else{const he=ue>ae?ae:ue;a.displayedToast=he;for(let me=0;me<he;me++)f()}}else t()}};var z,D;T.iconOut=function(Y){let{theme:ae,type:ue,isLoading:he,icon:me}=Y,ce=null;const C={theme:ae,type:ue};return me===!1||(st(me)?ce=me(C):I.isValidElement(me)?ce=I.cloneElement(me,C):ia(me)||ms(me)?ce=me:he?ce=Wl.spinner():(b=>b in Wl)(ue)&&(ce=Wl[ue](C))),ce}(T),st(d.onOpen)&&(T.onOpen=d.onOpen),st(d.onClose)&&(T.onClose=d.onClose),T.closeButton=E.closeButton,d.closeButton===!1||Hl(d.closeButton)?T.closeButton=d.closeButton:d.closeButton===!0&&(T.closeButton=!Hl(E.closeButton)||E.closeButton);let se=g;I.isValidElement(g)&&!ia(g.type)?se=I.cloneElement(g,{closeToast:A,toastProps:T,data:y}):st(g)&&(se=g({closeToast:A,toastProps:T,data:y})),E.limit&&E.limit>0&&a.count>E.limit&&P?a.queue.push({toastContent:se,toastProps:T,staleId:_}):ms(v)?setTimeout(()=>{m(se,T,_)},v):m(se,T,_)}function m(g,w,v){const{toastId:_}=w;v&&o.delete(v);const d={content:g,props:w};o.set(_,d),r(c=>[...c,_].filter(p=>p!==v)),Zn.emit(4,gp(d,d.props.updateId==null?"added":"updated"))}return I.useEffect(()=>(a.containerId=e.containerId,Zn.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),Zn.emit(3,a)}),[]),I.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(g){const w=new Map,v=Array.from(o.values());return e.newestOnTop&&v.reverse(),v.forEach(_=>{const{position:d}=_.props;w.has(d)||w.set(d,[]),w.get(d).push(_)}),Array.from(w,_=>g(_[0],_[1]))},containerRef:i,isToastActive:s}}function vp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function yp(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function $2(e){const[t,n]=I.useState(!1),[r,i]=I.useState(!1),o=I.useRef(null),s=I.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=I.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:f,onClick:h,closeOnClick:m}=e;function g(y){if(e.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),document.addEventListener("touchmove",d),document.addEventListener("touchend",c);const E=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=E.getBoundingClientRect(),E.style.transition="",s.x=vp(y.nativeEvent),s.y=yp(y.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function w(y){if(s.boundingRect){const{top:E,bottom:A,left:P,right:T}=s.boundingRect;y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=P&&s.x<=T&&s.y>=E&&s.y<=A?_():v()}}function v(){n(!0)}function _(){n(!1)}function d(y){const E=o.current;s.canDrag&&E&&(s.didMove=!0,t&&_(),s.x=vp(y),s.y=yp(y),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),E.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,E.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function c(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c);const y=o.current;if(s.canDrag&&s.didMove&&y){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${e.draggableDirection}(0)`,y.style.opacity="1"}}I.useEffect(()=>{a.current=e}),I.useEffect(()=>(o.current&&o.current.addEventListener("d",v,{once:!0}),st(e.onOpen)&&e.onOpen(I.isValidElement(e.children)&&e.children.props),()=>{const y=a.current;st(y.onClose)&&y.onClose(I.isValidElement(y.children)&&y.children.props)}),[]),I.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",v),window.addEventListener("blur",_)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",_))}),[e.pauseOnFocusLoss]);const p={onMouseDown:g,onTouchStart:g,onMouseUp:w,onTouchEnd:w};return l&&u&&(p.onMouseEnter=_,p.onMouseLeave=v),m&&(p.onClick=y=>{h&&h(y),s.canCloseOnClick&&f()}),{playToast:v,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:p}}function Py(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return B.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},B.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},B.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F2(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:f,isIn:h,theme:m}=e;const g=o||l&&u===0,w={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(w.transform=`scaleX(${u})`);const v=Tn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),_=st(s)?s({rtl:f,type:i,defaultClassName:v}):Tn(v,s);return B.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:_,style:w,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const U2=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=$2(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:f,closeToast:h,transition:m,position:g,className:w,style:v,bodyClassName:_,bodyStyle:d,progressClassName:c,progressStyle:p,updateId:y,role:E,progress:A,rtl:P,toastId:T,deleteToast:z,isIn:D,isLoading:se,iconOut:Y,closeOnClick:ae,theme:ue}=e,he=Tn("Toastify__toast",`Toastify__toast-theme--${ue}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":ae}),me=st(w)?w({rtl:P,position:g,type:u,defaultClassName:he}):Tn(he,w),ce=!!A||!a,C={closeToast:h,type:u,theme:ue};let b=null;return o===!1||(b=st(o)?o(C):I.isValidElement(o)?I.cloneElement(o,C):Py(C)),B.createElement(m,{isIn:D,done:z,position:g,preventExitTransition:n,nodeRef:r},B.createElement("div",{id:T,onClick:l,className:me,...i,style:v,ref:r},B.createElement("div",{...D&&{role:E},className:st(_)?_({type:u}):Tn("Toastify__toast-body",_),style:d},Y!=null&&B.createElement("div",{className:Tn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!se})},Y),B.createElement("div",null,s)),b,B.createElement(F2,{...y&&!ce?{key:`pb-${y}`}:{},rtl:P,theme:ue,delay:a,isRunning:t,isIn:D,closeToast:h,hide:f,type:u,style:p,className:c,controlledProgress:ce,progress:A||0})))},el=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},z2=Za(el("bounce",!0));Za(el("slide",!0));Za(el("zoom"));Za(el("flip"));const dc=I.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=M2(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(f){const h=Tn("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return st(o)?o({position:f,rtl:a,defaultClassName:h}):Tn(h,gs(o))}return I.useEffect(()=>{t&&(t.current=r.current)},[]),B.createElement("div",{ref:r,className:"Toastify",id:l},n((f,h)=>{const m=h.length?{...s}:{...s,pointerEvents:"none"};return B.createElement("div",{className:u(f),style:m,key:`container-${f}`},h.map((g,w)=>{let{content:v,props:_}=g;return B.createElement(U2,{..._,isIn:i(_.toastId),style:{..._.style,"--nth":w+1,"--len":h.length},key:`toast-${_.key}`},v)}))}))});dc.displayName="ToastContainer",dc.defaultProps={position:"top-right",transition:z2,autoClose:5e3,closeButton:Py,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let wp,Kl=new Map,Sp=[];Zn.on(2,e=>{wp=e.containerId||e,Kl.set(wp,e),Sp.forEach(t=>{Zn.emit(0,t.content,t.options)}),Sp=[]}).on(3,e=>{Kl.delete(e.containerId||e),Kl.size===0&&Zn.off(0).off(1).off(5)});const j2=Qe.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`,V2=()=>Ze(j2,{children:[M("h2",{children:"Page Not Found, sjø"}),M("p",{children:M(nr,{to:"/",children:"Back to Home"})})]}),B2=Qe.img`
  height: 200px;
  max-width: 200px;
  margin: 2rem 0;
  border-radius: 50%;
`,H2=Qe.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`,W2=Qe.div`
  width: 80%;
  border-top: 1px solid ${e=>e.theme.separator};
  margin: 2rem 0 2rem 0;
`,K2=()=>{ld();const[e,t]=I.useState(null),n=()=>{console.log("not implemented")};return I.useEffect(()=>{Ad(Na,r=>{r?t(r):console.log("user is logged out")})},[]),M(Hd,{children:M(H2,{children:e&&Ze(Hd,{children:[M(B2,{src:e.photoURL}),M("h3",{children:e.displayName}),M(W2,{}),M("button",{onClick:n,children:"Log out"})]})})})};function G2(){return Ze("div",{className:"App",children:[M(dc,{autoClose:3e3,hideProgressBar:!0}),M(nS,{basename:"/mytaste2",children:Ze(Xw,{children:[M(_r,{path:"/",element:M(x2,{})}),M(_r,{path:"/login",element:M(D2,{})}),M(_r,{path:"/item/:id",element:M(O2,{})}),M(_r,{path:"/profile",element:M(K2,{})}),M(_r,{path:"/*",element:M(V2,{})})]})})]})}ql.createRoot(document.getElementById("root")).render(M(B.StrictMode,{children:M(G2,{})}));
