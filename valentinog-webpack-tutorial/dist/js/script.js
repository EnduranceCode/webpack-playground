(()=>{"use strict";function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}console.log("Hello webpack!");var r,n=(2,function(t){if(Array.isArray(t))return t}(r=[1,2])||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,l=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(l.push(e.value),2!==l.length);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return l}}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,2);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(r,2):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n[0],n[1],fetch("https://jsonplaceholder.typicode.com/users/").then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){return t})).then((function(t){return console.log(t)}))})();