!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["React","styled"],t):"object"==typeof exports?exports.TimePicker=t(require("react"),require("styled-components")):e.TimePicker=t(e.React,e.styled)}(this,((e,t)=>(()=>{var n={703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},639:t=>{"use strict";t.exports=e},602:e=>{"use strict";e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{default:()=>R});var e=o(639),t=o.n(e);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const r=function(e){var r,o,a=e.ampm,i=e.onChange,l=(r=t().useState(!1),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(r,o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],u=l[1];t().useEffect((function(){u("AM"===a)}),[a]);return t().createElement(t().Fragment,null,t().createElement("span",{className:"toggle"},t().createElement("input",{type:"checkbox",id:"switch",value:c,onChange:function(e){return t=e.target.checked,u(t),void i(t?"AM":"PM");var t}}),t().createElement("label",{htmlFor:"switch"},t().createElement("span",{className:c?"on":"off"},"AM"),t().createElement("span",{className:c?"off":"on"},"PM"))))},i=function(e){var n=e.children,r=e.open;return t().createElement("div",{className:r?"show-modal":"modal"},t().createElement("div",{className:"modal-content"},n))};var l=o(602);const c=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=t().useRef();t().useEffect((function(){o.current=n}),[n]),t().useEffect((function(){if(r&&r.addEventListener){var t=function(e){return o.current(e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}}),[e,r])};var u;function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,p,y="#21928c",d=200,h=o.n(l)().div.attrs((function(e){return{dist:e.thumbDistance}}))(u||(m=["\n  width: ",'px;\n  &:after {\n    content: "";\n    height: 1px;\n    background: ',";\n    border: solid 2px ",";\n    border-radius: 4px;\n    width: ",'px;\n    position: absolute;\n    top: -2px;\n    left: 0;\n  }\n  &:before {\n    content: "";\n    width: 25px;\n    height: 25px;\n    background: ',";\n    border-radius: 50%;\n    position: absolute;\n    left: ","px;\n    top: -12px;\n  }\n"],p||(p=m.slice(0)),u=Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(p)}}))),d,y,y,(function(e){return e.dist}),y,(function(e){return e.dist}));const v=function(e){var n=e.startStep,r=e.endStep,o=e.onChangeValue,a=e.initialValue,i=e.label,l=t().useRef(null),u=s(t().useState(!1),2),f=u[0],m=u[1],p=s(t().useState(d),2),y=p[0],v=p[1],b=s(t().useState({right:0,left:0}),2),g=b[0],S=b[1],E=s(t().useState(0),2),A=E[0],j=E[1];t().useEffect((function(){o(a);var e=d/(r-n+1);j(e),a<r&&v(e*(a-1))}),[]);var O=function(e){var t=l.current.getBoundingClientRect();S({right:t.right,left:t.left}),m(!0),e.preventDefault()},w=function(e){var t=(e.pageX||e.touches&&e.touches[0].clientX)-g.left;if((e.touches||f)&&t>=0&&t<=d){v(t);var a=t>d-A/2?r:Math.floor(t/A);o(a=a<n?n:a>r?r:a)}},x=function(e){m(!1)};return c("mouseup",x),c("touchstart",x),t().createElement(t().Fragment,null,t().createElement("label",null,i),t().createElement("div",{className:"slider ",onTouchMove:w,onTouchEnd:O,onMouseDown:O,onMouseMove:w,ref:l},t().createElement(h,{className:"slider-track",thumbDistance:y})))};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){return Number.parseInt(e)<10?"0"+e:e},E=function(e){if(e&&e.length){var t=b(e.split(":"),2),n=t[0],r=t[1],o=Number.parseInt(n),a=Number.parseInt(r);return o>0&&o<=12&&a>=0&&a<=59}return!0},A=function(e){return"AM"===e||"PM"===e};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=function(e){var n=e.onNewTime,r=e.onClose,o=e.time,a=t().useState(function(e){return"string"==typeof e&&e.length?e.slice(0,2):0}(o)),i=j(a,2),l=i[0],c=i[1],u=t().useState(function(e){return"string"==typeof e&&e.length?e.slice(3,5):0}(o)),s=j(u,2),f=s[0],m=s[1];return t().createElement("div",{className:"edit-form"},t().createElement(v,{startStep:1,endStep:12,onChangeValue:function(e){var t=S(e);c(t),e&&n("".concat(t,":").concat(f))},initialValue:Number.parseInt(l),label:"Hours"}),t().createElement(v,{startStep:0,endStep:59,onChangeValue:function(e){var t=S(e);m(t),e&&n("".concat(l,":").concat(t))},initialValue:Number.parseInt(f),label:"Minutes"}),t().createElement("div",{className:"accept-time"},t().createElement("button",{onClick:r,name:"close"},"Close")))};function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const C=function(e){var n=e.time,r=e.onChange,o=x(t().useState(n),2),a=o[0],l=o[1],c=x(t().useState(!1),2),u=c[0],s=c[1],f=x(t().useState(),2),m=f[0],p=f[1],y=function(e){e.preventDefault(),s("close"!==e.target.name)};return t().createElement(t().Fragment,null,t().createElement("span",{className:"time-input",onClick:y},t().createElement("input",{className:m?"has-error":"",type:"text",maxLength:"5",value:a,onChange:function(e){p();var t=e.target.value;t.length&&s(!1),l(t),E(t)&&r(t)},onKeyPress:function(e){if("Enter"===e.key)if(s(!1),E(a)){var t=function(e){if(e.indexOf(":")>0&&e.length>=4){var t=b(e.split(":"),2),n=t[0],r=t[1];return 1===n.length?"".concat(S(n),":").concat(r):"".concat(n,":").concat(r)}}(a);l(t),r(t)}else p("Invaid Time Format: Please use hh:mm")},"area-label":"Time",pattern:"[1-9]","data-cy":"time-enter"}),t().createElement("span",{className:"time-input-modal",onClick:y},t().createElement(i,{open:u},t().createElement(w,{onNewTime:function(e){p(),l(e),r(e)},time:a,onClose:y})))),t().createElement("span",{className:"error"},m))};var I=o(697),T=o.n(I);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var n=e.time,o=void 0===n?"":n,a=e.onChange,i=t().useState(function(e){if("string"==typeof e&&5===e.length){var t=b(e.slice(0,5).split(":"),2),n=t[0],r=t[1];return"".concat(function(e,t){return"".concat(e,":").concat(t)}(S(n.trim()),S(r.trim())))}return e}(o)),l=N(i,2),c=l[0],u=l[1],s=t().useState(function(e){if("string"==typeof e&&5===e.length){var t=e.slice(-2).toUpperCase();return A(t)||"AM"}return"AM"}(o)),f=N(s,2),m=f[0],p=f[1];return t().createElement("div",{className:"time-picker"},t().createElement("div",{className:"time"},t().createElement(C,{time:c,onChange:function(e){u(e),e&&m&&a("".concat(e," ").concat(m))}}),t().createElement(r,{ampm:m,onChange:function(e){p(e),o&&e&&a("".concat(c," ").concat(e))}})))};const _=k;k.propTypes={time:function(e,t,n){var r=e[t],o=r.slice(-2);return E(r.slice(0,-2))?"string"!=typeof o||A(o.toUpperCase())?void 0:new Error("Invalid AM | PM Format supplied to ".concat(n,".  Please use hh:mm AM|PM  3:30 AM")):new Error("Invalid Time Format supplied to ".concat(n,".  Please use hh:mm AM|PM"))},ampm:T().string,onChange:T().func};const R=_})(),a})()));