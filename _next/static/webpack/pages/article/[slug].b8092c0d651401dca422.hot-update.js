webpackHotUpdate_N_E("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/api */ \"./actions/api.js\");\n/* harmony import */ var _components_HeroImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeroImage */ \"./components/HeroImage.js\");\n/* harmony import */ var _components_ImageC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ImageC */ \"./components/ImageC.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/marerobert/Desktop/next-blog/frontend/pages/article/[slug].js\",\n    _this = undefined;\n\n\n\n\n // import { getStrapiMedia } from '../../actions/media';\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article;\n  var seo = {\n    metaTitle: article.title,\n    metaDescription: article.description,\n    shareImage: article.image,\n    article: true\n  };\n\n  if (!article) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      statusCode: 404\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }, _this);\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        seo: seo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HeroImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: article.title,\n          image: article.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {\n          source: article.content,\n          escapeHtml: false,\n          transformImageUri: function transformImageUri(uri) {\n            return uri.startsWith('http') ? uri : Object(_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getStrapiURL\"])(uri);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"uk-section\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"uk-container uk-container-small\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n              className: \"uk-divider-small\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"uk-grid-small uk-flex-left\",\n              \"data-uk-grid\": \"true\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: article.author.picture && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ImageC__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  image: article.author.picture,\n                  height: 30,\n                  width: 30\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 9\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"uk-width-expand\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"uk-margin-remove-bottom\",\n                  children: [\"By \", article.author.name]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 10\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"uk-text-meta uk-margin-remove-top\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_moment__WEBPACK_IMPORTED_MODULE_8___default.a, {\n                    format: \"MMM Do YYYY\",\n                    children: article.published_at\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 11\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 10\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 9\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, _this);\n  }\n};\n\n_c = Article;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"slug__Wrapper\",\n  componentId: \"sc-1kp2yny-0\"\n})([\"background:#fff;\"]);\n_c2 = Wrapper;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Article\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsInNlbyIsIm1ldGFUaXRsZSIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiaW1hZ2UiLCJjb250ZW50IiwidXJpIiwic3RhcnRzV2l0aCIsImdldFN0cmFwaVVSTCIsImF1dGhvciIsInBpY3R1cmUiLCJuYW1lIiwicHVibGlzaGVkX2F0IiwiV3JhcHBlciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNoQyxNQUFNQyxHQUFHLEdBQUc7QUFDWEMsYUFBUyxFQUFFRixPQUFPLENBQUNHLEtBRFI7QUFFWEMsbUJBQWUsRUFBRUosT0FBTyxDQUFDSyxXQUZkO0FBR1hDLGNBQVUsRUFBRU4sT0FBTyxDQUFDTyxLQUhUO0FBSVhQLFdBQU8sRUFBRTtBQUpFLEdBQVo7O0FBT0EsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDYix3QkFBTyxxRUFBQyxpREFBRDtBQUFPLGdCQUFVLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ04sd0JBQ0MscUVBQUMsMERBQUQ7QUFBQSw4QkFDQyxxRUFBQyx1REFBRDtBQUFLLFdBQUcsRUFBRUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyxPQUFEO0FBQVMsaUJBQVMsRUFBQyxXQUFuQjtBQUFBLGdDQUNDLHFFQUFDLDZEQUFEO0FBQVcsZUFBSyxFQUFFRCxPQUFPLENBQUNHLEtBQTFCO0FBQWlDLGVBQUssRUFBRUgsT0FBTyxDQUFDTztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMscUVBQUMscURBQUQ7QUFDQyxnQkFBTSxFQUFFUCxPQUFPLENBQUNRLE9BRGpCO0FBRUMsb0JBQVUsRUFBRSxLQUZiO0FBR0MsMkJBQWlCLEVBQUUsMkJBQUNDLEdBQUQ7QUFBQSxtQkFDbEJBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLE1BQWYsSUFBeUJELEdBQXpCLEdBQStCRSxpRUFBWSxDQUFDRixHQUFELENBRHpCO0FBQUE7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQVNDO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLGlDQUFmO0FBQUEsb0NBQ0M7QUFBSSx1QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUE0Qyw4QkFBYSxNQUF6RDtBQUFBLHNDQUNDO0FBQUEsMEJBQ0VULE9BQU8sQ0FBQ1ksTUFBUixDQUFlQyxPQUFmLGlCQUNBLHFFQUFDLDBEQUFEO0FBQ0MsdUJBQUssRUFBRWIsT0FBTyxDQUFDWSxNQUFSLENBQWVDLE9BRHZCO0FBRUMsd0JBQU0sRUFBRSxFQUZUO0FBR0MsdUJBQUssRUFBRTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBVUM7QUFBSyx5QkFBUyxFQUFDLGlCQUFmO0FBQUEsd0NBQ0M7QUFBRywyQkFBUyxFQUFDLHlCQUFiO0FBQUEsb0NBQ0tiLE9BQU8sQ0FBQ1ksTUFBUixDQUFlRSxJQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFJQztBQUFHLDJCQUFTLEVBQUMsbUNBQWI7QUFBQSx5Q0FDQyxxRUFBQyxtREFBRDtBQUFRLDBCQUFNLEVBQUMsYUFBZjtBQUFBLDhCQUE4QmQsT0FBTyxDQUFDZTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUF1Q0E7QUFDRCxDQW5ERDs7S0FBTWhCLE87QUFvRE4sSUFBTWlCLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBYjtNQUFNRixPOztBQXNCU2pCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Nlbyc7XG5pbXBvcnQgeyBmZXRjaEFQSSwgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hcGknO1xuLy8gaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21lZGlhJztcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZXJvSW1hZ2UnO1xuaW1wb3J0IEltYWdlQyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlQyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG5cdGNvbnN0IHNlbyA9IHtcblx0XHRtZXRhVGl0bGU6IGFydGljbGUudGl0bGUsXG5cdFx0bWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxuXHRcdHNoYXJlSW1hZ2U6IGFydGljbGUuaW1hZ2UsXG5cdFx0YXJ0aWNsZTogdHJ1ZSxcblx0fTtcblxuXHRpZiAoIWFydGljbGUpIHtcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxTZW8gc2VvPXtzZW99IC8+XG5cdFx0XHRcdDxXcmFwcGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxIZXJvSW1hZ2UgdGl0bGU9e2FydGljbGUudGl0bGV9IGltYWdlPXthcnRpY2xlLmltYWdlfSAvPlxuXHRcdFx0XHRcdDxSZWFjdE1hcmtkb3duXG5cdFx0XHRcdFx0XHRzb3VyY2U9e2FydGljbGUuY29udGVudH1cblx0XHRcdFx0XHRcdGVzY2FwZUh0bWw9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtSW1hZ2VVcmk9eyh1cmkpID0+XG5cdFx0XHRcdFx0XHRcdHVyaS5zdGFydHNXaXRoKCdodHRwJykgPyB1cmkgOiBnZXRTdHJhcGlVUkwodXJpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItc21hbGxcIj5cblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cInVrLWRpdmlkZXItc21hbGxcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZS5hdXRob3IucGljdHVyZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZUNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZT17YXJ0aWNsZS5hdXRob3IucGljdHVyZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezMwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC1leHBhbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJ5IHthcnRpY2xlLmF1dGhvci5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1yZW1vdmUtdG9wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj57YXJ0aWNsZS5wdWJsaXNoZWRfYXR9PC9Nb21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvV3JhcHBlcj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn07XG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZDogI2ZmZjtcbmA7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblx0Y29uc3QgYXJ0aWNsZSA9IGF3YWl0IGZldGNoQVBJKFxuXHRcdGAvYXJ0aWNsZXM/c2x1Zz0ke2NvbnRleHQucXVlcnkuc2x1Z30mc3RhdHVzPXB1Ymxpc2hlZGBcblx0KTtcblxuXHRpZiAoYXJ0aWNsZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRhcnRpY2xlOiBhcnRpY2xlWzBdLFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGNvbnRleHQucmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiB7fSxcblx0XHR9O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

})