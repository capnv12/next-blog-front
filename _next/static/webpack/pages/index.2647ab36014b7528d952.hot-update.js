webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImageC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageC */ \"./components/ImageC.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _actions_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/media */ \"./actions/media.js\");\n\n\nvar _jsxFileName = \"/Users/marerobert/Desktop/next-blog/frontend/components/Card.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var article = _ref.article;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/article/\".concat(article.slug),\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        style: {\n          background: \"url(\".concat(Object(_actions_media__WEBPACK_IMPORTED_MODULE_5__[\"getStrapiMedia\"])(article.image), \") center / cover no-repeat\")\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"body\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/category/\".concat(article.category.slug),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"category\",\n              children: article.category.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 8\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"title\",\n            children: article.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-info\",\n            children: article.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Card;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"Card__Container\",\n  componentId: \"a01ro0-0\"\n})([\"height:400px;overflow:hidden;text-align:center;margin:0.6em;transition:all 0.3s ease-in-out;position:relative;.card-info{width:100%;height:50%;position:absolute;bottom:-120px;left:0;margin:0 auto;padding:0.6em;color:#fff;font-style:16px;line-height:24px;z-index:20;opacity:0;transition:bottom 0.3s,opacity 0.3s cubic-bezier(0.33,0.66,0.66,1);}.category{text-transform:uppercase;color:#fff;font-size:12px;:hover{text-decoration:underline;}}.title{color:#fff;font-size:20px;padding:1em 0.6em;}&:hover{.card-info{opacity:1;padding-top:2.6em;bottom:0;background-image:linear-gradient( rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 21%,rgba(0,0,0,0.6) 80% );}box-shadow:4px 8px 10px rgba(0,0,0,0.5);}\"]);\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsImFydGljbGUiLCJzbHVnIiwiYmFja2dyb3VuZCIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzdCLHNCQUNDLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY0EsT0FBTyxDQUFDQyxJQUF0QixDQUFWO0FBQXdDLFlBQVEsTUFBaEQ7QUFBQSwyQkFDQztBQUFBLDZCQUNDLHFFQUFDLFNBQUQ7QUFDQyxhQUFLLEVBQUU7QUFDTkMsb0JBQVUsZ0JBQVNDLHFFQUFjLENBQ2hDSCxPQUFPLENBQUNJLEtBRHdCLENBQXZCO0FBREosU0FEUjtBQUFBLCtCQU9DO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxzQkFBZUosT0FBTyxDQUFDSyxRQUFSLENBQWlCSixJQUFoQyxDQUFWO0FBQWtELG9CQUFRLE1BQTFEO0FBQUEsbUNBQ0M7QUFBRyx1QkFBUyxFQUFDLFVBQWI7QUFBQSx3QkFBeUJELE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFJQztBQUFHLHFCQUFTLEVBQUMsT0FBYjtBQUFBLHNCQUFzQk4sT0FBTyxDQUFDTztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBTUM7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxzQkFBNEJQLE9BQU8sQ0FBQ1E7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNCQSxDQXZCRDs7S0FBTVQsSTtBQXlCTixJQUFNVSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa3JCQUFmO01BQU1GLFM7QUFxRFNWLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2VDIGZyb20gJy4vSW1hZ2VDJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcuLi9hY3Rpb25zL21lZGlhJztcbmNvbnN0IENhcmQgPSAoeyBhcnRpY2xlIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGluayBocmVmPXtgL2FydGljbGUvJHthcnRpY2xlLnNsdWd9YH0gcGFzc0hyZWY+XG5cdFx0XHQ8YT5cblx0XHRcdFx0PENvbnRhaW5lclxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBgdXJsKCR7Z2V0U3RyYXBpTWVkaWEoXG5cdFx0XHRcdFx0XHRcdGFydGljbGUuaW1hZ2Vcblx0XHRcdFx0XHRcdCl9KSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXRgLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHthcnRpY2xlLmNhdGVnb3J5LnNsdWd9YH0gcGFzc0hyZWY+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2FydGljbGUuY2F0ZWdvcnkubmFtZX08L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnthcnRpY2xlLnRpdGxlfTwvcD5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWluZm9cIj57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHQpO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0aGVpZ2h0OiA0MDBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDAuNmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdC5jYXJkLWluZm8ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogNTAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IC0xMjBweDtcblx0XHRsZWZ0OiAwO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHBhZGRpbmc6IDAuNmVtO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc3R5bGU6IDE2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0ei1pbmRleDogMjA7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjMzLCAwLjY2LCAwLjY2LCAxKTtcblx0fVxuXHQuY2F0ZWdvcnkge1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXG5cdFx0OmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdH1cblx0fVxuXHQudGl0bGUge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRwYWRkaW5nOiAxZW0gMC42ZW07XG5cdH1cblx0Jjpob3ZlciB7XG5cdFx0LmNhcmQtaW5mbyB7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0cGFkZGluZy10b3A6IDIuNmVtO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0XHRyZ2JhKDAsIDAsIDAsIDApIDAlLFxuXHRcdFx0XHRyZ2JhKDAsIDAsIDAsIDAuMykgMjElLFxuXHRcdFx0XHRyZ2JhKDAsIDAsIDAsIDAuNikgODAlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGJveC1zaGFkb3c6IDRweCA4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})