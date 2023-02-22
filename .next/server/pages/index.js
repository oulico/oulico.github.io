"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9814:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/getPostsMetaData.js
var getPostsMetaData = __webpack_require__(533);
;// CONCATENATED MODULE: ./pages/index.js





function Home({ postsData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1ee25fe49c518e47" + " " + "info-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(head_namespaceObject, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-1ee25fe49c518e47",
                        children: "Coding between lines"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Front-end Dev Blog",
                        className: "jsx-1ee25fe49c518e47"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                className: "jsx-1ee25fe49c518e47",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../public/images/anita.jpeg",
                    className: "jsx-1ee25fe49c518e47"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "jsx-1ee25fe49c518e47" + " " + "info-description",
                children: "Hi I'm Batman, the saviour of Gotham City and I like to roam in nights to bash the bad guys."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "jsx-1ee25fe49c518e47" + " " + "info-description",
                children: [
                    "But please don't call me as a source for ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        className: "jsx-1ee25fe49c518e47",
                        children: "Corona Virus"
                    }),
                    " and it could be the ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        className: "jsx-1ee25fe49c518e47",
                        children: "Joker"
                    }),
                    " who might have started this mess."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "jsx-1ee25fe49c518e47"
            }),
            postsData.map((metadata)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-1ee25fe49c518e47",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link, {
                            href: `/blog/${metadata.id}`,
                            children: metadata.title
                        }, metadata.title),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-1ee25fe49c518e47" + " " + "post-description",
                            children: metadata.description
                        })
                    ]
                }, metadata.id);
            }),
            jsx_runtime_.jsx(style_, {
                id: "1ee25fe49c518e47",
                children: ".info-container.jsx-1ee25fe49c518e47{margin:0 5%0 5%}img.jsx-1ee25fe49c518e47{width:20%;max-width:20%;height:auto;margin-left:40%}.info-description.jsx-1ee25fe49c518e47{font-size:20px}"
            })
        ]
    });
}
async function getStaticProps() {
    const postsData = (0,getPostsMetaData/* getPostsMetaData */.Qk)();
    return {
        props: {
            postsData: postsData
        }
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,664,533], () => (__webpack_exec__(9814)));
module.exports = __webpack_exports__;

})();