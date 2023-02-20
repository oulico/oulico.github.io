"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./lib/getPostsMetaData.js":
/*!*********************************!*\
  !*** ./lib/getPostsMetaData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostsPath\": () => (/* binding */ getAllPostsPath),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getPostsMetaData\": () => (/* binding */ getPostsMetaData)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n// current 'posts' directory\nconst postsDirectory = path.join(process.cwd(), \"posts\");\nconst mdx_file_extension = \".mdx\";\nfunction getAllFilesInDirectory() {\n    const fileNames = fs.readdirSync(postsDirectory);\n    return fileNames.map((fileName)=>{\n        return path.parse(fileName);\n    });\n}\nfunction getMdxFiles() {\n    const allFiles = getAllFilesInDirectory();\n    return allFiles.filter((parsedFile)=>parsedFile.ext == mdx_file_extension);\n}\nfunction getAllPostsPath() {\n    const allMdxFiles = getMdxFiles();\n    return allMdxFiles.map((parsedFile)=>{\n        return {\n            params: {\n                id: parsedFile.name\n            }\n        };\n    });\n}\nfunction getPostsMetaData() {\n    const allMdxFiles = getMdxFiles();\n    const postsMetaData = allMdxFiles.map((parsedFile)=>{\n        const fullPath = path.join(postsDirectory, parsedFile.base);\n        // get MDX metadata and content\n        const fileContents = fs.readFileSync(fullPath, \"utf8\");\n        // get metadata, content\n        const { data , content  } = matter(fileContents);\n        let metadata = data;\n        metadata[\"id\"] = parsedFile.name;\n        return metadata;\n    });\n    return postsMetaData;\n}\nfunction getPostData(id) {\n    const fullPath = path.join(postsDirectory, id + mdx_file_extension);\n    // get MDX metadata and content\n    const fileContents = fs.readFileSync(fullPath, \"utf8\");\n    // get metadata, content\n    const { data , content  } = matter(fileContents);\n    let metadata = data;\n    metadata[\"id\"] = id;\n    return {\n        metadata: metadata,\n        content: content\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0UG9zdHNNZXRhRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxPQUFPRCxtQkFBT0EsQ0FBQztBQUNyQixNQUFNRSxTQUFTRixtQkFBT0EsQ0FBQztBQUV2Qiw0QkFBNEI7QUFDNUIsTUFBTUcsaUJBQWlCRixLQUFLRyxJQUFJLENBQUNDLFFBQVFDLEdBQUcsSUFBSTtBQUNoRCxNQUFNQyxxQkFBcUI7QUFFM0IsU0FBU0MseUJBQXlCO0lBQ2hDLE1BQU1DLFlBQVlWLEdBQUdXLFdBQVcsQ0FBQ1A7SUFDakMsT0FBT00sVUFBVUUsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDakMsT0FBT1gsS0FBS1ksS0FBSyxDQUFDRDtJQUNwQjtBQUNGO0FBRUEsU0FBU0UsY0FBYztJQUNyQixNQUFNQyxXQUFXUDtJQUNqQixPQUFPTyxTQUFTQyxNQUFNLENBQUMsQ0FBQ0MsYUFBZUEsV0FBV0MsR0FBRyxJQUFJWDtBQUMzRDtBQUVPLFNBQVNZLGtCQUFrQjtJQUNoQyxNQUFNQyxjQUFjTjtJQUNwQixPQUFPTSxZQUFZVCxHQUFHLENBQUMsQ0FBQ00sYUFBZTtRQUNyQyxPQUFPO1lBQ0xJLFFBQVE7Z0JBQ05DLElBQUlMLFdBQVdNLElBQUk7WUFDckI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNDLG1CQUFtQjtJQUNqQyxNQUFNSixjQUFjTjtJQUVwQixNQUFNVyxnQkFBZ0JMLFlBQVlULEdBQUcsQ0FBQyxDQUFDTSxhQUFlO1FBQ3BELE1BQU1TLFdBQVd6QixLQUFLRyxJQUFJLENBQUNELGdCQUFnQmMsV0FBV1UsSUFBSTtRQUUxRCwrQkFBK0I7UUFDL0IsTUFBTUMsZUFBZTdCLEdBQUc4QixZQUFZLENBQUNILFVBQVU7UUFDL0Msd0JBQXdCO1FBQ3hCLE1BQU0sRUFBRUksS0FBSSxFQUFFQyxRQUFPLEVBQUUsR0FBRzdCLE9BQU8wQjtRQUNqQyxJQUFJSSxXQUFXRjtRQUNmRSxRQUFRLENBQUMsS0FBSyxHQUFHZixXQUFXTSxJQUFJO1FBQ2hDLE9BQU9TO0lBQ1Q7SUFDQSxPQUFPUDtBQUNULENBQUM7QUFFTSxTQUFTUSxZQUFZWCxFQUFFLEVBQUU7SUFDOUIsTUFBTUksV0FBV3pCLEtBQUtHLElBQUksQ0FBQ0QsZ0JBQWdCbUIsS0FBS2Y7SUFFaEQsK0JBQStCO0lBQy9CLE1BQU1xQixlQUFlN0IsR0FBRzhCLFlBQVksQ0FBQ0gsVUFBVTtJQUMvQyx3QkFBd0I7SUFDeEIsTUFBTSxFQUFFSSxLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHN0IsT0FBTzBCO0lBRWpDLElBQUlJLFdBQVdGO0lBQ2ZFLFFBQVEsQ0FBQyxLQUFLLEdBQUdWO0lBRWpCLE9BQU87UUFBRVUsVUFBVUE7UUFBVUQsU0FBU0E7SUFBUTtBQUNoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlkZXZibG9nLy4vbGliL2dldFBvc3RzTWV0YURhdGEuanM/MWZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgbWF0dGVyID0gcmVxdWlyZSgnZ3JheS1tYXR0ZXInKTtcblxuLy8gY3VycmVudCAncG9zdHMnIGRpcmVjdG9yeVxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3RzJyk7XG5jb25zdCBtZHhfZmlsZV9leHRlbnNpb24gPSAnLm1keCc7XG5cbmZ1bmN0aW9uIGdldEFsbEZpbGVzSW5EaXJlY3RvcnkoKSB7XG4gIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbiAgcmV0dXJuIGZpbGVOYW1lcy5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHBhdGgucGFyc2UoZmlsZU5hbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWR4RmlsZXMoKSB7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0QWxsRmlsZXNJbkRpcmVjdG9yeSgpO1xuICByZXR1cm4gYWxsRmlsZXMuZmlsdGVyKChwYXJzZWRGaWxlKSA9PiBwYXJzZWRGaWxlLmV4dCA9PSBtZHhfZmlsZV9leHRlbnNpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHNQYXRoKCkge1xuICBjb25zdCBhbGxNZHhGaWxlcyA9IGdldE1keEZpbGVzKCk7XG4gIHJldHVybiBhbGxNZHhGaWxlcy5tYXAoKHBhcnNlZEZpbGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBwYXJzZWRGaWxlLm5hbWUsXG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdHNNZXRhRGF0YSgpIHtcbiAgY29uc3QgYWxsTWR4RmlsZXMgPSBnZXRNZHhGaWxlcygpO1xuXG4gIGNvbnN0IHBvc3RzTWV0YURhdGEgPSBhbGxNZHhGaWxlcy5tYXAoKHBhcnNlZEZpbGUpID0+IHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgcGFyc2VkRmlsZS5iYXNlKTtcblxuICAgIC8vIGdldCBNRFggbWV0YWRhdGEgYW5kIGNvbnRlbnRcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4Jyk7XG4gICAgLy8gZ2V0IG1ldGFkYXRhLCBjb250ZW50XG4gICAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcbiAgICBsZXQgbWV0YWRhdGEgPSBkYXRhO1xuICAgIG1ldGFkYXRhWydpZCddID0gcGFyc2VkRmlsZS5uYW1lO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfSk7XG4gIHJldHVybiBwb3N0c01ldGFEYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGlkICsgbWR4X2ZpbGVfZXh0ZW5zaW9uKTtcblxuICAvLyBnZXQgTURYIG1ldGFkYXRhIGFuZCBjb250ZW50XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKTtcbiAgLy8gZ2V0IG1ldGFkYXRhLCBjb250ZW50XG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgbGV0IG1ldGFkYXRhID0gZGF0YTtcbiAgbWV0YWRhdGFbJ2lkJ10gPSBpZDtcblxuICByZXR1cm4geyBtZXRhZGF0YTogbWV0YWRhdGEsIGNvbnRlbnQ6IGNvbnRlbnQgfTtcbn1cbiJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJwYXRoIiwibWF0dGVyIiwicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIm1keF9maWxlX2V4dGVuc2lvbiIsImdldEFsbEZpbGVzSW5EaXJlY3RvcnkiLCJmaWxlTmFtZXMiLCJyZWFkZGlyU3luYyIsIm1hcCIsImZpbGVOYW1lIiwicGFyc2UiLCJnZXRNZHhGaWxlcyIsImFsbEZpbGVzIiwiZmlsdGVyIiwicGFyc2VkRmlsZSIsImV4dCIsImdldEFsbFBvc3RzUGF0aCIsImFsbE1keEZpbGVzIiwicGFyYW1zIiwiaWQiLCJuYW1lIiwiZ2V0UG9zdHNNZXRhRGF0YSIsInBvc3RzTWV0YURhdGEiLCJmdWxsUGF0aCIsImJhc2UiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsIm1ldGFkYXRhIiwiZ2V0UG9zdERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/getPostsMetaData.js\n");

/***/ }),

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blog),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var _lib_getPostsMetaData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/getPostsMetaData */ \"./lib/getPostsMetaData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__]);\n([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst components = {\n    h1: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                fontSize: \"calc(1rem + 1.5vw)\",\n                color: \"black\",\n                margin: \"1vh 0 1vh 0\"\n            },\n            ...props\n        }, void 0, false, {\n            fileName: \"/Volumes/Macintosh HD - Workplace/mydevblog/mydevblog/pages/blog/[id].js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, undefined),\n    p: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                fontSize: \"calc(1rem + 0.1vw)\",\n                color: \"#000000e6\",\n                margin: \"0vh 0 1vh 0\"\n            },\n            ...props\n        }, void 0, false, {\n            fileName: \"/Volumes/Macintosh HD - Workplace/mydevblog/mydevblog/pages/blog/[id].js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, undefined)\n};\nfunction Blog({ postMetadata , postContent  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-4b699aa219fdc237\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4b699aa219fdc237\" + \" \" + \"blog-content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, {\n                    ...postContent,\n                    components: components\n                }, void 0, false, {\n                    fileName: \"/Volumes/Macintosh HD - Workplace/mydevblog/mydevblog/pages/blog/[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Volumes/Macintosh HD - Workplace/mydevblog/mydevblog/pages/blog/[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4b699aa219fdc237\",\n                children: \".blog-content.jsx-4b699aa219fdc237{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:100%;-webkit-flex:100%;-moz-box-flex:100%;-ms-flex:100%;flex:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:1vw 25vw 1vw 25vw;width:50vw;max-width:50vw}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Macintosh HD - Workplace/mydevblog/mydevblog/pages/blog/[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticPaths() {\n    const paths = (0,_lib_getPostsMetaData__WEBPACK_IMPORTED_MODULE_4__.getAllPostsPath)();\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const postData = await (0,_lib_getPostsMetaData__WEBPACK_IMPORTED_MODULE_4__.getPostData)(params.id);\n    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(postData.content);\n    return {\n        props: {\n            postMetadata: postData.metadata,\n            postContent: mdxSource,\n            id: params.id\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1Y7QUFDOEI7QUFFMUUsTUFBTUksYUFBYTtJQUNqQkMsSUFBSSxDQUFDQyxzQkFDSCw4REFBQ0Q7WUFDQ0UsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsUUFBUTtZQUNWO1lBQ0MsR0FBR0osS0FBSzs7Ozs7O0lBSWJLLEdBQUcsQ0FBQ0wsc0JBQ0YsOERBQUNLO1lBQ0NKLE9BQU87Z0JBQ0xDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFFBQVE7WUFDVjtZQUNDLEdBQUdKLEtBQUs7Ozs7OztBQUdmO0FBRWUsU0FBU00sS0FBSyxFQUFFQyxhQUFZLEVBQUVDLFlBQVcsRUFBRSxFQUFFO0lBQzFELHFCQUNFLDhEQUFDQzs7OzBCQUNDLDhEQUFDQTswREFBYzswQkFDYiw0RUFBQ2Qsc0RBQVNBO29CQUFFLEdBQUdhLFdBQVc7b0JBQUVWLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlaEQsQ0FBQztBQUVNLGVBQWVZLGlCQUFpQjtJQUNyQyxNQUFNQyxRQUFRZixzRUFBZUE7SUFDN0IsT0FBTztRQUNMZTtRQUNBQyxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyxNQUFNQyxXQUFXLE1BQU1sQixrRUFBV0EsQ0FBQ2lCLE9BQU9FLEVBQUU7SUFDNUMsTUFBTUMsWUFBWSxNQUFNdkIsb0VBQVNBLENBQUNxQixTQUFTRyxPQUFPO0lBQ2xELE9BQU87UUFDTGxCLE9BQU87WUFDTE8sY0FBY1EsU0FBU0ksUUFBUTtZQUMvQlgsYUFBYVM7WUFDYkQsSUFBSUYsT0FBT0UsRUFBRTtRQUNmO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlkZXZibG9nLy4vcGFnZXMvYmxvZy9baWRdLmpzPzVjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBNRFhSZW1vdGUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHNQYXRoLCBnZXRQb3N0RGF0YSB9IGZyb20gJy4uLy4uL2xpYi9nZXRQb3N0c01ldGFEYXRhJztcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgaDE6IChwcm9wcykgPT4gKFxuICAgIDxoMVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6ICdjYWxjKDFyZW0gKyAxLjV2dyknLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgbWFyZ2luOiAnMXZoIDAgMXZoIDAnLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuXG4gIHA6IChwcm9wcykgPT4gKFxuICAgIDxwXG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogJ2NhbGMoMXJlbSArIDAuMXZ3KScsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMGU2JyxcbiAgICAgICAgbWFyZ2luOiAnMHZoIDAgMXZoIDAnLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RNZXRhZGF0YSwgcG9zdENvbnRlbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY29udGVudFwiPlxuICAgICAgICA8TURYUmVtb3RlIHsuLi5wb3N0Q29udGVudH0gY29tcG9uZW50cz17Y29tcG9uZW50c30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ibG9nLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogMXZ3IDI1dncgMXZ3IDI1dnc7XG4gICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0c1BhdGgoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcbiAgY29uc3QgbWR4U291cmNlID0gYXdhaXQgc2VyaWFsaXplKHBvc3REYXRhLmNvbnRlbnQpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0TWV0YWRhdGE6IHBvc3REYXRhLm1ldGFkYXRhLFxuICAgICAgcG9zdENvbnRlbnQ6IG1keFNvdXJjZSxcbiAgICAgIGlkOiBwYXJhbXMuaWQsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXJpYWxpemUiLCJNRFhSZW1vdGUiLCJnZXRBbGxQb3N0c1BhdGgiLCJnZXRQb3N0RGF0YSIsImNvbXBvbmVudHMiLCJoMSIsInByb3BzIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luIiwicCIsIkJsb2ciLCJwb3N0TWV0YWRhdGEiLCJwb3N0Q29udGVudCIsImRpdiIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicG9zdERhdGEiLCJpZCIsIm1keFNvdXJjZSIsImNvbnRlbnQiLCJtZXRhZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[id].js"));
module.exports = __webpack_exports__;

})();