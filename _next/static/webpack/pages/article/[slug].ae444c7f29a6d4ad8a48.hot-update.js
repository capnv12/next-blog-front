webpackHotUpdate_N_E("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/api */ \"./actions/api.js\");\n/* harmony import */ var _components_HeroImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeroImage */ \"./components/HeroImage.js\");\n/* harmony import */ var _components_ImageC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ImageC */ \"./components/ImageC.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/marerobert/Desktop/next-blog/frontend/pages/article/[slug].js\",\n    _this = undefined;\n\n\n\n\n // import { getStrapiMedia } from '../../actions/media';\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article;\n  var seo = {\n    metaTitle: article.title,\n    metaDescription: article.description,\n    shareImage: article.image,\n    article: true\n  };\n\n  if (!article) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      statusCode: 404\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        seo: seo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HeroImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: article.title,\n          image: article.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n          className: \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"article-details\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"date\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_moment__WEBPACK_IMPORTED_MODULE_8___default.a, {\n                format: \"MMM Do YYYY\",\n                children: article.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 9\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"author\",\n              children: [article.author.picture && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ImageC__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                image: article.author.picture,\n                height: 30,\n                width: 30\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"\",\n                children: [\"By \", article.author.name]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 9\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {\n            source: article.content,\n            escapeHtml: false,\n            transformImageUri: function transformImageUri(uri) {\n              return uri.startsWith('http') ? uri : Object(_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getStrapiURL\"])(uri);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, _this);\n  }\n};\n\n_c = Article;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"slug__Wrapper\",\n  componentId: \"sc-1kp2yny-0\"\n})([\"background:#fff;padding:0.6em;.article-details{display:flex;justify-content:space-between;.date{}.author{display:flex;padding:0.6em;p{margin:0 0.6em;}}}\"]);\n_c2 = Wrapper;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Article\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsInNlbyIsIm1ldGFUaXRsZSIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiaW1hZ2UiLCJwdWJsaXNoZWRfYXQiLCJhdXRob3IiLCJwaWN0dXJlIiwibmFtZSIsImNvbnRlbnQiLCJ1cmkiLCJzdGFydHNXaXRoIiwiZ2V0U3RyYXBpVVJMIiwiV3JhcHBlciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNoQyxNQUFNQyxHQUFHLEdBQUc7QUFDWEMsYUFBUyxFQUFFRixPQUFPLENBQUNHLEtBRFI7QUFFWEMsbUJBQWUsRUFBRUosT0FBTyxDQUFDSyxXQUZkO0FBR1hDLGNBQVUsRUFBRU4sT0FBTyxDQUFDTyxLQUhUO0FBSVhQLFdBQU8sRUFBRTtBQUpFLEdBQVo7O0FBT0EsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDYix3QkFBTyxxRUFBQyxpREFBRDtBQUFPLGdCQUFVLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ04sd0JBQ0MscUVBQUMsMERBQUQ7QUFBQSw4QkFDQyxxRUFBQyx1REFBRDtBQUFLLFdBQUcsRUFBRUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNDLHFFQUFDLDZEQUFEO0FBQVcsZUFBSyxFQUFFRCxPQUFPLENBQUNHLEtBQTFCO0FBQWlDLGVBQUssRUFBRUgsT0FBTyxDQUFDTztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMscUVBQUMsT0FBRDtBQUFTLG1CQUFTLEVBQUMsV0FBbkI7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNDLHFFQUFDLG1EQUFEO0FBQVEsc0JBQU0sRUFBQyxhQUFmO0FBQUEsMEJBQThCUCxPQUFPLENBQUNRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSx5QkFDRVIsT0FBTyxDQUFDUyxNQUFSLENBQWVDLE9BQWYsaUJBQ0EscUVBQUMsMERBQUQ7QUFDQyxxQkFBSyxFQUFFVixPQUFPLENBQUNTLE1BQVIsQ0FBZUMsT0FEdkI7QUFFQyxzQkFBTSxFQUFFLEVBRlQ7QUFHQyxxQkFBSyxFQUFFO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQVFDO0FBQUcseUJBQVMsRUFBQyxFQUFiO0FBQUEsa0NBQW9CVixPQUFPLENBQUNTLE1BQVIsQ0FBZUUsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFnQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0QsZUFpQ0MscUVBQUMscURBQUQ7QUFDQyxrQkFBTSxFQUFFWCxPQUFPLENBQUNZLE9BRGpCO0FBRUMsc0JBQVUsRUFBRSxLQUZiO0FBR0MsNkJBQWlCLEVBQUUsMkJBQUNDLEdBQUQ7QUFBQSxxQkFDbEJBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLE1BQWYsSUFBeUJELEdBQXpCLEdBQStCRSxpRUFBWSxDQUFDRixHQUFELENBRHpCO0FBQUE7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBaURBO0FBQ0QsQ0E3REQ7O0tBQU1kLE87QUE4RE4sSUFBTWlCLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnS0FBYjtNQUFNRixPOztBQXFDU2pCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Nlbyc7XG5pbXBvcnQgeyBmZXRjaEFQSSwgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hcGknO1xuLy8gaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21lZGlhJztcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZXJvSW1hZ2UnO1xuaW1wb3J0IEltYWdlQyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlQyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG5cdGNvbnN0IHNlbyA9IHtcblx0XHRtZXRhVGl0bGU6IGFydGljbGUudGl0bGUsXG5cdFx0bWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxuXHRcdHNoYXJlSW1hZ2U6IGFydGljbGUuaW1hZ2UsXG5cdFx0YXJ0aWNsZTogdHJ1ZSxcblx0fTtcblxuXHRpZiAoIWFydGljbGUpIHtcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxTZW8gc2VvPXtzZW99IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PEhlcm9JbWFnZSB0aXRsZT17YXJ0aWNsZS50aXRsZX0gaW1hZ2U9e2FydGljbGUuaW1hZ2V9IC8+XG5cdFx0XHRcdFx0PFdyYXBwZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCI+e2FydGljbGUucHVibGlzaGVkX2F0fTwvTW9tZW50PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cblx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZS5hdXRob3IucGljdHVyZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VDXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlPXthcnRpY2xlLmF1dGhvci5waWN0dXJlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezMwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiXCI+Qnkge2FydGljbGUuYXV0aG9yLm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdj5cblx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZS5hdXRob3IucGljdHVyZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VDXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlPXthcnRpY2xlLmF1dGhvci5waWN0dXJlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezMwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIlwiPkJ5IHthcnRpY2xlLmF1dGhvci5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdDxSZWFjdE1hcmtkb3duXG5cdFx0XHRcdFx0XHRcdHNvdXJjZT17YXJ0aWNsZS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRlc2NhcGVIdG1sPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtSW1hZ2VVcmk9eyh1cmkpID0+XG5cdFx0XHRcdFx0XHRcdFx0dXJpLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IHVyaSA6IGdldFN0cmFwaVVSTCh1cmkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9XcmFwcGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn07XG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0cGFkZGluZzogMC42ZW07XG5cdC5hcnRpY2xlLWRldGFpbHMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdC5kYXRlIHtcblx0XHR9XG5cdFx0LmF1dGhvciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0cGFkZGluZzogMC42ZW07XG5cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDAgMC42ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cdGNvbnN0IGFydGljbGUgPSBhd2FpdCBmZXRjaEFQSShcblx0XHRgL2FydGljbGVzP3NsdWc9JHtjb250ZXh0LnF1ZXJ5LnNsdWd9JnN0YXR1cz1wdWJsaXNoZWRgXG5cdCk7XG5cblx0aWYgKGFydGljbGUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0YXJ0aWNsZTogYXJ0aWNsZVswXSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRjb250ZXh0LnJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9wczoge30sXG5cdFx0fTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

})