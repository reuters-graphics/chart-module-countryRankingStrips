webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/utils/utils.js":
/*!********************************!*\
  !*** ./src/lib/utils/utils.js ***!
  \********************************/
/*! exports provided: num2unitwords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"num2unitwords\", function() { return num2unitwords; });\nvar num2unitwords = function num2unitwords(d, precision) {\n  precision = precision || 2;\n  d = parseFloat(d).toFixed(precision);\n  return d < 1000 ? d : d < 1000000 ? \"\".concat(d / 1000, \"K\") : d < 1000000000 ? \"\".concat(d / 1000000, \"M\") : \"\".concat(d / 1000000000, \"B\");\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3V0aWxzLmpzP2I2OTkiXSwibmFtZXMiOlsibnVtMnVuaXR3b3JkcyIsImQiLCJwcmVjaXNpb24iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFJQyxTQUFKLEVBQWtCO0FBQ3RDQSxXQUFTLEdBQUdBLFNBQVMsSUFBSSxDQUF6QjtBQUNBRCxHQUFDLEdBQUdFLFVBQVUsQ0FBQ0YsQ0FBRCxDQUFWLENBQWNHLE9BQWQsQ0FBc0JGLFNBQXRCLENBQUo7QUFDQSxTQUFPRCxDQUFDLEdBQUcsSUFBSixHQUFXQSxDQUFYLEdBQWVBLENBQUMsR0FBRyxPQUFKLGFBQWtCQSxDQUFDLEdBQUcsSUFBdEIsU0FBaUNBLENBQUMsR0FBRyxVQUFKLGFBQXFCQSxDQUFDLEdBQUcsT0FBekIsbUJBQTJDQSxDQUFDLEdBQUcsVUFBL0MsTUFBdkQ7QUFDRCxDQUpEOztBQU1BIiwiZmlsZSI6Ii4vc3JjL2xpYi91dGlscy91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG51bTJ1bml0d29yZHMgPSAoZCwgcHJlY2lzaW9uKSA9PiB7XG4gIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCAyO1xuICBkID0gcGFyc2VGbG9hdChkKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gIHJldHVybiBkIDwgMTAwMCA/IGQgOiBkIDwgMTAwMDAwMCA/IGAkeyhkIC8gMTAwMCl9S2AgOiBkIDwgMTAwMDAwMDAwMCA/IGAkeyhkIC8gMTAwMDAwMCl9TWAgOiBgJHsoZCAvIDEwMDAwMDAwMDApfUJgO1xufTtcblxuZXhwb3J0IHsgbnVtMnVuaXR3b3JkcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/utils/utils.js\n");

/***/ })

})