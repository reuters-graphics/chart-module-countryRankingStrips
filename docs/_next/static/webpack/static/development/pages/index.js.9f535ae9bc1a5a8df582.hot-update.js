webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _popData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popData.json */ \"./src/demo/popData.json\");\nvar _popData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./popData.json */ \"./src/demo/popData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions; // DATA.cases = Object.keys(covidData.latestTotals.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.cases[element],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestTotals.deaths).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.deaths[element],\n//   };\n// });\n\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-1)[0]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-1)[0]\n  };\n}); // DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n// console.log(client.regions);\n// console.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n}; // console.log(_getCountryList('Asia'));\n// per pop\n\n\nvar pop = _popData_json__WEBPACK_IMPORTED_MODULE_14__.metadata.map(function (d) {\n  return {\n    key: d.iso_country_code_alpha_2,\n    population: d.population\n  };\n});\nDATA.cases = DATA.cases.map(function (e) {\n  // console.log(pop.find(d => d.key === e.key).population);\n  return {\n    key: e.key,\n    value: e.value / pop.find(function (d) {\n      return d.key === e.key;\n    }).population\n  };\n});\nvar dataEurope = DATA.deaths.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.deaths.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.deaths.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.deaths.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.deaths.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.deaths.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe', dataEurope);\n\nvar dummyData = _defaultData_json__WEBPACK_IMPORTED_MODULE_12__.map(function (d, i) {\n  return {\n    key: i,\n    value: d\n  };\n});\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(dummyData).props({}).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RXZWVrbHlBdmdzIiwibWFwIiwiZWxlbWVudCIsImtleSIsInZhbHVlIiwic2xpY2UiLCJkZWF0aHMiLCJfZ2V0Q291bnRyeUxpc3QiLCJyZWdpb24iLCJmaW5kIiwiciIsIm5hbWUiLCJjb3VudHJpZXMiLCJkIiwiaXNvQWxwaGEyIiwicG9wIiwicG9wRGF0YSIsIm1ldGFkYXRhIiwiaXNvX2NvdW50cnlfY29kZV9hbHBoYV8yIiwicG9wdWxhdGlvbiIsImUiLCJkYXRhRXVyb3BlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJkYXRhQXNpYSIsImRhdGFMYXRhbSIsImRhdGFBZnJpY2EiLCJkYXRhT2NlYW5pYSIsImRhdGFOQW1lcmljYSIsImR1bW15RGF0YSIsImRlZmF1bHREYXRhIiwiaSIsIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydCIsImRyYXciLCJzZWxlY3Rpb24iLCJjaGFydENvbnRhaW5lciIsImN1cnJlbnQiLCJkYXRhIiwicHJvcHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0VBQUosRUFBZixDLENBQ0E7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxJ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RSxZQUFLQyxLQUFMLENBQVdDLElBQVg7QUFBb0IsS0FBN0IsRUFBK0IsR0FBL0IsQzs7Ozs7Ozt3Q0FFRztBQUNsQjtBQUNBLFdBQUtELEtBQUwsQ0FDR0UsU0FESCxDQUNhLEtBQUtDLGNBQUwsQ0FBb0JDLE9BRGpDLEVBRUdDLElBRkgsQ0FFUWQsU0FGUixFQUdHZSxLQUhILENBR1MsRUFIVCxFQU1HTCxJQU5ILEdBRmtCLENBVWxCOztBQUNBTSxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckI7QUFDQUYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLRCxNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLVCxLQUFMLENBQVdDLElBQVg7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ04sS0FERCxHQUNXLEtBQUtnQixLQURoQixDQUNDaEIsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUFnQixhQUFLLEVBQUVBLEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNpQixRQUFMLENBQWM7QUFBRWpCLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsV0FBRyxFQUFFLEtBQUtRLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGO0FBTUQ7Ozs7RUEzQzBCUCw0Q0FBSyxDQUFDaUIsUzs7QUE4Q3BCbkIsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGNvdmlkRGF0YSBmcm9tICcuL2NvdmlkRGF0YS5qc29uJztcbmltcG9ydCBwb3BEYXRhIGZyb20gJy4vcG9wRGF0YS5qc29uJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG4vLyBmb3JtYXQgZGF0YVxuY29uc3QgREFUQSA9IHt9O1xuY29uc3QgUkVHSU9OUyA9IGNsaWVudC5yZWdpb25zO1xuLy8gREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXMpLm1hcChlbGVtZW50ID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXNbZWxlbWVudF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFRvdGFscy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzW2VsZW1lbnRdLFxuLy8gICB9O1xuLy8gfSk7XG5cbkRBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuY2FzZXNbZWxlbWVudF0uc2xpY2UoLTEpWzBdLFxuICB9O1xufSk7XG5EQVRBLmRlYXRocyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbiAgfTtcbn0pO1xuXG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKGNsaWVudC5yZWdpb25zKTtcbi8vIGNvbnNvbGUubG9nKERBVEEuY2FzZXMpO1xuY29uc3QgX2dldENvdW50cnlMaXN0ID0gKHJlZ2lvbikgPT4ge1xuICByZXR1cm4gUkVHSU9OUy5maW5kKHIgPT4gci5uYW1lID09PSByZWdpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMik7XG59O1xuXG4vLyBjb25zb2xlLmxvZyhfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKSk7XG5cbi8vIHBlciBwb3BcbmNvbnN0IHBvcCA9IHBvcERhdGEubWV0YWRhdGEubWFwKGQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZC5pc29fY291bnRyeV9jb2RlX2FscGhhXzIsXG4gICAgcG9wdWxhdGlvbjogZC5wb3B1bGF0aW9uLFxuICB9O1xufSk7XG5cbkRBVEEuY2FzZXMgPSBEQVRBLmNhc2VzLm1hcChlID0+IHtcbiAgLy8gY29uc29sZS5sb2cocG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGtleTogZS5rZXksXG4gICAgdmFsdWU6IGUudmFsdWUgLyBwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbixcbiAgfTtcbn0pO1xuXG5jb25zdCBkYXRhRXVyb3BlID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdFdXJvcGUnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFzaWEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUxhdGFtID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdMYXRpbiBBbWVyaWNhIGFuZCB0aGUgQ2FyaWJiZWFuJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFBZnJpY2EgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FmcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhT2NlYW5pYSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnT2NlYW5pYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTkFtZXJpY2EgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ05vcnRoZXJuIEFtZXJpY2EnKS5pbmNsdWRlcyhkLmtleSkpO1xuLy8gY29uc29sZS5sb2coJ2V1cm9wZScsIGRhdGFFdXJvcGUpO1xuXG5jb25zdCBkdW1teURhdGEgPSBkZWZhdWx0RGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGksXG4gICAgdmFsdWU6IGQsXG4gIH07XG59KTtcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgd2lkdGg6ICcnIH07XG4gIGNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG5cbiAgLy8gQSByZXNpemUgZnVuY3Rpb24gdG8gcmVkcmF3IHRoZSBjaGFydC5cbiAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4geyB0aGlzLmNoYXJ0LmRyYXcoKTsgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgIC5kYXRhKGR1bW15RGF0YSlcbiAgICAgIC5wcm9wcyh7XG5cbiAgICAgIH0pXG4gICAgICAuZHJhdygpO1xuXG4gICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGlmIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCwgdG9vLlxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgdGhpcy5jaGFydC5kcmF3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgey8qIFRoaXMgaXMgb3VyIGNoYXJ0IGNvbnRhaW5lciDwn5GHICovfVxuICAgICAgICA8ZGl2IGlkPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0Q29udGFpbmVyfSAvPlxuICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})