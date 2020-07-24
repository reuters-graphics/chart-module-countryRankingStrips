webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14___default.a(); // format data\n\nvar DATA = {};\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases[element]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths[element]\n  };\n}); // DATA.cases = Object.keys(covidData.latestWeeklyAvgs.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestWeeklyAvgs.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestWeeklyAvgs.deaths).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestWeeklyAvgs.deaths[element].slice(-1)[0],\n//   };\n// });\n// DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n\nonsole.log(client.regions);\nconsole.log(DATA.cases);\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(DATA.cases).props({}).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiY2FzZXMiLCJPYmplY3QiLCJrZXlzIiwiY292aWREYXRhIiwibGF0ZXN0VG90YWxzIiwibWFwIiwiZWxlbWVudCIsImtleSIsInZhbHVlIiwiZGVhdGhzIiwib25zb2xlIiwibG9nIiwicmVnaW9ucyIsImNvbnNvbGUiLCJDaGFydENvbXBvbmVudCIsIndpZHRoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJDaGFydCIsImRlYm91bmNlIiwiY2hhcnQiLCJkcmF3Iiwic2VsZWN0aW9uIiwiY2hhcnRDb250YWluZXIiLCJjdXJyZW50IiwiZGF0YSIsInByb3BzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0VBQUosRUFBZixDLENBQ0E7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQUEsSUFBSSxDQUFDQyxLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBUyxDQUFDQyxZQUFWLENBQXVCSixLQUFuQyxFQUEwQ0ssR0FBMUMsQ0FBOEMsVUFBQUMsT0FBTyxFQUFJO0FBQ3BFLFNBQU87QUFDTEMsT0FBRyxFQUFFRCxPQURBO0FBRUxFLFNBQUssRUFBRUwsNkNBQVMsQ0FBQ0MsWUFBVixDQUF1QkosS0FBdkIsQ0FBNkJNLE9BQTdCO0FBRkYsR0FBUDtBQUlELENBTFksQ0FBYjtBQU1BUCxJQUFJLENBQUNVLE1BQUwsR0FBY1IsTUFBTSxDQUFDQyxJQUFQLENBQVlDLDZDQUFTLENBQUNDLFlBQVYsQ0FBdUJLLE1BQW5DLEVBQTJDSixHQUEzQyxDQUErQyxVQUFBQyxPQUFPLEVBQUk7QUFDdEUsU0FBTztBQUNMQyxPQUFHLEVBQUVELE9BREE7QUFFTEUsU0FBSyxFQUFFTCw2Q0FBUyxDQUFDQyxZQUFWLENBQXVCSyxNQUF2QixDQUE4QkgsT0FBOUI7QUFGRixHQUFQO0FBSUQsQ0FMYSxDQUFkLEMsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FJLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXZCxNQUFNLENBQUNlLE9BQWxCO0FBRUFDLE9BQU8sQ0FBQ0YsR0FBUixDQUFZWixJQUFJLENBQUNDLEtBQWpCOztJQUNNYyxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLFdBQUssRUFBRTtBQUFULEs7O3lOQUNTQyw0Q0FBSyxDQUFDQyxTQUFOLEU7O2dOQUdULElBQUlDLHFEQUFKLEU7O2lOQUdDQyx1REFBUSxDQUFDLFlBQU07QUFBRSxZQUFLQyxLQUFMLENBQVdDLElBQVg7QUFBb0IsS0FBN0IsRUFBK0IsR0FBL0IsQzs7Ozs7Ozt3Q0FFRztBQUNsQjtBQUNBLFdBQUtELEtBQUwsQ0FDR0UsU0FESCxDQUNhLEtBQUtDLGNBQUwsQ0FBb0JDLE9BRGpDLEVBRUdDLElBRkgsQ0FFUTFCLElBQUksQ0FBQ0MsS0FGYixFQUdHMEIsS0FISCxDQUdTLEVBSFQsRUFNR0wsSUFOSCxHQUZrQixDQVVsQjs7QUFDQU0sWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxNQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0FGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS0QsTUFBMUM7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBO0FBQ0EsV0FBS1QsS0FBTCxDQUFXQyxJQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NOLEtBREQsR0FDVyxLQUFLZ0IsS0FEaEIsQ0FDQ2hCLEtBREQ7QUFFUCxhQUNFLE1BQUMsaUVBQUQ7QUFBZ0IsYUFBSyxFQUFFQSxLQUF2QjtBQUE4QixnQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDaUIsUUFBTCxDQUFjO0FBQUVqQixpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLFdBQUcsRUFBRSxLQUFLUSxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQU1EOzs7O0VBM0MwQlAsNENBQUssQ0FBQ2lCLFM7O0FBOENwQm5CLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlbW8vQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnLi4vbGliL2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2Z1cm5pdHVyZS9DaGFydENvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL3N0eWxlLWNvbG9yL2Rpc3QvY2F0ZWdvcmljYWwnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcbmltcG9ydCBjb3ZpZERhdGEgZnJvbSAnLi9jb3ZpZERhdGEuanNvbic7XG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuLy8gZm9ybWF0IGRhdGFcbmNvbnN0IERBVEEgPSB7fTtcbkRBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmNhc2VzW2VsZW1lbnRdLFxuICB9O1xufSk7XG5EQVRBLmRlYXRocyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmRlYXRoc1tlbGVtZW50XSxcbiAgfTtcbn0pO1xuLy8gREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzKS5tYXAoZWxlbWVudCA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5kZWF0aHNbZWxlbWVudF0uc2xpY2UoLTEpWzBdLFxuLy8gICB9O1xuLy8gfSk7XG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbm9uc29sZS5sb2coY2xpZW50LnJlZ2lvbnMpXG5cbmNvbnNvbGUubG9nKERBVEEuY2FzZXMpO1xuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgd2lkdGg6ICcnIH07XG4gIGNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG5cbiAgLy8gQSByZXNpemUgZnVuY3Rpb24gdG8gcmVkcmF3IHRoZSBjaGFydC5cbiAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4geyB0aGlzLmNoYXJ0LmRyYXcoKTsgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgIC5kYXRhKERBVEEuY2FzZXMpXG4gICAgICAucHJvcHMoe1xuXG4gICAgICB9KVxuICAgICAgLmRyYXcoKTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgIHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})