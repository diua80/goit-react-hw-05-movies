/*! For license information please see 617.9bc71a31.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617,321],{1687:function(t,r,e){e.d(r,{FL:function(){return c},Wf:function(){return f},XT:function(){return a},c0:function(){return u},f6:function(){return s}});var n=e(5861),o=e(1243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var b={};f(b,c,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(F([])));L&&L!==e&&n.call(L,c)&&(b=L);var E=w.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),f(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),f(E,s,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var a=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=f9944208ed63ee0d0f0d08bbf7324d06");case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=f9944208ed63ee0d0f0d08bbf7324d06"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=f9944208ed63ee0d0f0d08bbf7324d06"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=f9944208ed63ee0d0f0d08bbf7324d06"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&api_key=f9944208ed63ee0d0f0d08bbf7324d06"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},4321:function(t,r,e){e.r(r);var n=e(8881),o=e(184);r.default=function(){return(0,o.jsx)(n.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{position:"absolute",top:"50%",left:"50%"},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})}},617:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=e(5861),o=e(9439),i=e(2791),a=e(7689),c=e(1687),u=e(1087),s=e(4321),f=e(184),h=function(t){var r,e,n=t.movie,o=(t.movieId,(0,a.TH)()),c=(0,i.useRef)(null!==(r=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/"),h=n.original_title,l=n.poster_path,p=n.vote_average,v=n.overview,d=n.genres,y=n.release_date;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.rU,{to:c.current,children:"GO TO THE MOVIES"}),(0,f.jsxs)("section",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(l),alt:h}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{children:[h," (",null===y||void 0===y?void 0:y.split("-")[0],")"]}),(0,f.jsxs)("p",{children:["User Score:"," ",0===p?"NR":"".concat(Math.floor(100*p/10),"%")]}),(0,f.jsxs)("p",{children:["Overview",v]}),(0,f.jsxs)("p",{children:["Genres: ",null===d||void 0===d?void 0:d.map((function(t){return t.name})).join(", ")]})]})]}),(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)("section",{children:(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)(s.default,{}),children:(0,f.jsx)(a.j3,{})})})]})};function l(){l=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(F([])));L&&L!==e&&n.call(L,a)&&(b=L);var E=w.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var p=function(){var t=(0,i.useState)({}),r=(0,o.Z)(t,2),e=r[0],u=r[1],s=(0,a.UO)().movieId;return(0,i.useEffect)((function(){if(s)try{var t=function(){var t=(0,n.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.FL)(s);case 2:r=t.sent,u(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(r){console.error("\u041f\u043e\u043c\u0438\u043b\u043e\u0447\u043a\u0430:",r)}}),[s]),console.log(e),(0,f.jsx)(h,{movie:e,movieId:s})}}}]);
//# sourceMappingURL=617.9bc71a31.chunk.js.map