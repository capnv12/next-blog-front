webpackHotUpdate_N_E("pages/_app",{

/***/ "./actions/media.js":
/*!**************************!*\
  !*** ./actions/media.js ***!
  \**************************/
/*! exports provided: getStrapiMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStrapiMedia\", function() { return getStrapiMedia; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./actions/api.js\");\n\nfunction getStrapiMedia(media) {\n  var imageUrl = media.url.startsWith('/') ? Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getStrapiURL\"])(media.url) : media.url;\n  console.log(media); // return imageUrl;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9tZWRpYS5qcz81ZTI5Il0sIm5hbWVzIjpbImdldFN0cmFwaU1lZGlhIiwibWVkaWEiLCJpbWFnZVVybCIsInVybCIsInN0YXJ0c1dpdGgiLCJnZXRTdHJhcGlVUkwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxHQUFOLENBQVVDLFVBQVYsQ0FBcUIsR0FBckIsSUFDZEMseURBQVksQ0FBQ0osS0FBSyxDQUFDRSxHQUFQLENBREUsR0FFZEYsS0FBSyxDQUFDRSxHQUZUO0FBR0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaLEVBSnFDLENBS3JDO0FBQ0EiLCJmaWxlIjoiLi9hY3Rpb25zL21lZGlhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcblx0Y29uc3QgaW1hZ2VVcmwgPSBtZWRpYS51cmwuc3RhcnRzV2l0aCgnLycpXG5cdFx0PyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKVxuXHRcdDogbWVkaWEudXJsO1xuXHRjb25zb2xlLmxvZyhtZWRpYSk7XG5cdC8vIHJldHVybiBpbWFnZVVybDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/media.js\n");

/***/ })

})