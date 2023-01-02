!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["React","styled"],t):"object"==typeof exports?exports.TimePicker=t(require("react"),require("styled-components")):e.TimePicker=t(e.React,e.styled)}(this,((e,t)=>(()=>{var n={703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},639:t=>{"use strict";t.exports=e},602:e=>{"use strict";e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{default:()=>N});var e=o(639),t=o.n(e);const n=function(e){var n=e.children,r=e.open;return t().createElement("div",{className:r?"show-modal":"modal"},t().createElement("div",{className:"modal-content"},n))};var r=o(602);const i=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=t().useRef();t().useEffect((function(){o.current=n}),[n]),t().useEffect((function(){if(r&&r.addEventListener){var t=function(e){return o.current(e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}}),[e,r])};var u;function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,f,m="#21928c",p=200,d=o.n(r)().div.attrs((function(e){return{dist:e.thumbDistance}}))(u||(s=["\n  width: ",'px;\n  &:after {\n    content: "";\n    height: 1px;\n    background: ',";\n    border: solid 2px ",";\n    border-radius: 4px;\n    width: ",'px;\n    position: absolute;\n    top: -2px;\n    left: 0;\n  }\n  &:before {\n    content: "";\n    width: 25px;\n    height: 25px;\n    background: ',";\n    border-radius: 50%;\n    position: absolute;\n    left: ","px;\n    top: -12px;\n  }\n"],f||(f=s.slice(0)),u=Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))),p,m,m,(function(e){return e.dist}),m,(function(e){return e.dist}));const y=function(e){var n=e.startStep,r=e.endStep,o=e.onChangeValue,a=e.initialValue,u=e.label,l=t().useRef(null),s=c(t().useState(!1),2),f=s[0],m=s[1],y=c(t().useState(p),2),v=y[0],h=y[1],b=c(t().useState({right:0,left:0}),2),g=b[0],S=b[1],E=c(t().useState(0),2),A=E[0],O=E[1];t().useEffect((function(){o(a);var e=p/(r-n+1);O(e),a<r&&h(e*(a-1))}),[]);var j=function(e){var t=l.current.getBoundingClientRect();S({right:t.right,left:t.left}),m(!0),e.preventDefault()},w=function(e){var t=(e.pageX||e.touches&&e.touches[0].clientX)-g.left;if((e.touches||f)&&t>=0&&t<=p){h(t);var a=t>p-A/2?r:Math.floor(t/A);o(a=a<n?n:a>r?r:a)}},x=function(e){m(!1)};return i("mouseup",x),i("touchstart",x),t().createElement(t().Fragment,null,t().createElement("label",null,u),t().createElement("div",{className:"slider ",onTouchMove:w,onTouchEnd:j,onMouseDown:j,onMouseMove:w,ref:l},t().createElement(d,{className:"slider-track",thumbDistance:v})))};function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){return Number.parseInt(e)<10?"0"+e:e},g=function(e){var t=v(e.split(":"),2),n=t[0],r=t[1],o=Number.parseInt(n),a=Number.parseInt(r);return o>0&&o<=12&&a>=0&&a<=59};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const A=function(e){var n=e.onSetHoursMinutes,r=e.onClose,o=e.inputHours,a=e.inputMinutes,i=S(t().useState(o),2),u=i[0],c=i[1],l=S(t().useState(a),2),s=l[0],f=l[1];return t().createElement("div",{className:"edit-form"},t().createElement(y,{startStep:1,endStep:12,onChangeValue:function(e){var t=b(e);c(t),n({minutes:s,hours:t})},initialValue:Number.parseInt(u),label:"Hours"}),t().createElement(y,{startStep:0,endStep:59,onChangeValue:function(e){var t=b(e);f(t),n({minutes:t,hours:u})},initialValue:Number.parseInt(s),label:"Minutes"}),t().createElement("div",{className:"accept-time"},t().createElement("button",{onClick:r,name:"close"},"Close")))};function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const j=function(e){var n,r,o=e.ampm,a=e.onChange,i=(n=t().useState(!1),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],c=i[1];t().useEffect((function(){c("AM"===o)}),[o]);return t().createElement(t().Fragment,null,t().createElement("span",{className:"toggle"},t().createElement("input",{type:"checkbox",id:"switch",value:u,onChange:function(e){return t=e.target.checked,c(t),void a(t?"AM":"PM");var t}}),t().createElement("label",{htmlFor:"switch"},t().createElement("span",{className:u?"on":"off"},"AM"),t().createElement("span",{className:u?"off":"on"},"PM"))))};var w=o(697),x=o.n(w);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){var r=e.time,o=void 0===r?"12:00":r,a=e.amOrPm,i=void 0===a?"AM":a,u=e.onChange,c=M(t().useState(!1),2),l=c[0],s=c[1],f=M(t().useState(o),2),m=f[0],p=f[1],d=M(t().useState(i),2),y=d[0],h=d[1],S=M(t().useState(),2),E=S[0],O=S[1];t().useEffect((function(){o&&p(o);var e="string"==typeof i?i.toUpperCase():"AM";!function(e){return"AM"===e||"PM"===e}(e)?h("AM"):h(e)}),[]);var w=function(e){O(),e.preventDefault(),s("close"!==e.target.name)};return t().createElement("div",{className:"time-picker"},t().createElement("div",{className:"time"},t().createElement("span",{className:"time-input",onClick:w},t().createElement("input",{className:E?"has-error":"",type:"text",maxLength:"5",value:m,onChange:function(e){O();var t=e.target.value;t.length&&s(!1),p(t),u("".concat(t," ").concat(y))},onKeyPress:function(e){if("Enter"===e.key)if(s(!1),g(m)){var t=function(e){if(!g(e))throw new Error("Invalid format");var t=v(e.split(":"),2),n=t[0],r=t[1];return"".concat(b(n),":").concat(b(r))}(m);setTime(t),u("".concat(t," ").concat(y))}else O("Invaid Time Format: Please use hh:mm")}}),t().createElement("span",{className:"time-input-modal",onClick:w},t().createElement(n,{open:l},t().createElement(A,{onSetHoursMinutes:function(e){var t,n,r=(t=e.hours,n=e.minutes,"".concat(t,":").concat(n));p(r),u("".concat(r," ").concat(y))},inputHours:m.slice(0,2),inputMinutes:m.slice(-2),onClose:w})))),t().createElement(j,{ampm:y,onChange:function(e){h(e),u("".concat(m," ").concat(e))}})),t().createElement("span",{className:"error"},E))};const T=C;C.propTypes={time:function(e,t,n){if(!g(e[t]))return new Error("Invalid Time Format supplied to ".concat(n,".  Please use hh:mm"))},ampm:x().string,onChange:x().func};const N=T})(),a})()));