function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("2Fivl",(function(r,t){var n,i,a,l;n=r.exports,i="JsonPixabayApi",a=function(){return s},Object.defineProperty(n,i,{get:a,set:l,enumerable:!0,configurable:!0});var u=o("iJYdK");class s{fetchFromAPi(){const e=new URLSearchParams({key:s.API,q:"",image_type:"photo",page:this.page,per_page:10,orientation:"horizontal",safesearch:!0});return fetch(`${s.URL}?${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){this.page=null,this.per_page=null}}e(u)(s,"URL","https://pixabay.com/api/"),e(u)(s,"API","36975301-73934ce38cce9a2bf3ac84bc9")})),o.register("iJYdK",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}})),o("2Fivl");
//# sourceMappingURL=index.a9214e6b.js.map
