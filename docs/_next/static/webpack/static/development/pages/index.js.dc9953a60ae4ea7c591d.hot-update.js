webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _popData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popData.json */ \"./src/demo/popData.json\");\nvar _popData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./popData.json */ \"./src/demo/popData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions; // DATA.cases = Object.keys(covidData.latestTotals.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.cases[element],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestTotals.deaths).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.deaths[element],\n//   };\n// });\n\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-1)[0]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-1)[0]\n  };\n}); // DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n// console.log(client.regions);\n// console.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n}; // console.log(_getCountryList('Asia'));\n// per pop\n\n\nvar pop = _popData_json__WEBPACK_IMPORTED_MODULE_14__.metadata.map(function (d) {\n  return {\n    key: d.iso_country_code_alpha_2,\n    population: d.population\n  };\n});\nDATA.cases = DATA.cases.map(function (e) {\n  // console.log(pop.find(d => d.key === e.key).population);\n  return {\n    key: e.key,\n    value: e.value / pop.find(function (d) {\n      return d.key === e.key;\n    }).population\n  };\n});\nDATA.deaths = DATA.deaths.map(function (e) {\n  // console.log(pop.find(d => d.key === e.key).population);\n  return {\n    key: e.key,\n    value: e.value / pop.find(function (d) {\n      return d.key === e.key;\n    }).population\n  };\n});\nvar dataEurope = DATA.cases.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.cases.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.cases.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.cases.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.cases.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.cases.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe', dataEurope);\n\nvar dummyData = _defaultData_json__WEBPACK_IMPORTED_MODULE_12__.map(function (d, i) {\n  return {\n    key: i,\n    value: d\n  };\n});\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart2Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart1.draw();\n    }, 250));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart2.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart1.selection(this.chart1Container.current).data(DATA.cases).props({\n        markDataPoint: [// key should be same as dataParams\n        {\n          key: 'FR' // text: 'India',\n\n        }]\n      }).draw(); // Use our chart module.\n\n      this.chart2.selection(this.chart2Container.current).data(dataEurope).props({\n        markDataPoint: [// key should be same as dataParams\n        {\n          key: 'FR' // text: 'India',\n\n        }]\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart1\",\n        className: \"countryRankingStrips\",\n        ref: this.chart1Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        id: \"chart2\",\n        className: \"countryRankingStrips\",\n        ref: this.chart2Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RXZWVrbHlBdmdzIiwibWFwIiwiZWxlbWVudCIsImtleSIsInZhbHVlIiwic2xpY2UiLCJkZWF0aHMiLCJfZ2V0Q291bnRyeUxpc3QiLCJyZWdpb24iLCJmaW5kIiwiciIsIm5hbWUiLCJjb3VudHJpZXMiLCJkIiwiaXNvQWxwaGEyIiwicG9wIiwicG9wRGF0YSIsIm1ldGFkYXRhIiwiaXNvX2NvdW50cnlfY29kZV9hbHBoYV8yIiwicG9wdWxhdGlvbiIsImUiLCJkYXRhRXVyb3BlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJkYXRhQXNpYSIsImRhdGFMYXRhbSIsImRhdGFBZnJpY2EiLCJkYXRhT2NlYW5pYSIsImRhdGFOQW1lcmljYSIsImR1bW15RGF0YSIsImRlZmF1bHREYXRhIiwiaSIsIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydDEiLCJkcmF3IiwiY2hhcnQyIiwic2VsZWN0aW9uIiwiY2hhcnQxQ29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJwcm9wcyIsIm1hcmtEYXRhUG9pbnQiLCJjaGFydDJDb250YWluZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoYXJ0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxJQUFJ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SFQsRUFXR29DLElBWEgsR0Fma0IsQ0E0QmxCOztBQUNBUyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckI7QUFDQUYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLRCxNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLRSxLQUFMLENBQVdiLElBQVg7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ04sS0FERCxHQUNXLEtBQUtvQixLQURoQixDQUNDcEIsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUFnQixhQUFLLEVBQUVBLEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNxQixRQUFMLENBQWM7QUFBRXJCLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyxzQkFBM0I7QUFBa0QsV0FBRyxFQUFFLEtBQUtTLGVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyxzQkFBM0I7QUFBa0QsV0FBRyxFQUFFLEtBQUtLLGVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQURGO0FBT0Q7Ozs7RUFoRTBCYiw0Q0FBSyxDQUFDcUIsUzs7QUFtRXBCdkIsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGNvdmlkRGF0YSBmcm9tICcuL2NvdmlkRGF0YS5qc29uJztcbmltcG9ydCBwb3BEYXRhIGZyb20gJy4vcG9wRGF0YS5qc29uJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG4vLyBmb3JtYXQgZGF0YVxuY29uc3QgREFUQSA9IHt9O1xuY29uc3QgUkVHSU9OUyA9IGNsaWVudC5yZWdpb25zO1xuLy8gREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXMpLm1hcChlbGVtZW50ID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXNbZWxlbWVudF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFRvdGFscy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzW2VsZW1lbnRdLFxuLy8gICB9O1xuLy8gfSk7XG5cbkRBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuY2FzZXNbZWxlbWVudF0uc2xpY2UoLTEpWzBdLFxuICB9O1xufSk7XG5EQVRBLmRlYXRocyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbiAgfTtcbn0pO1xuXG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKGNsaWVudC5yZWdpb25zKTtcbi8vIGNvbnNvbGUubG9nKERBVEEuY2FzZXMpO1xuY29uc3QgX2dldENvdW50cnlMaXN0ID0gKHJlZ2lvbikgPT4ge1xuICByZXR1cm4gUkVHSU9OUy5maW5kKHIgPT4gci5uYW1lID09PSByZWdpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMik7XG59O1xuXG4vLyBjb25zb2xlLmxvZyhfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKSk7XG5cbi8vIHBlciBwb3BcbmNvbnN0IHBvcCA9IHBvcERhdGEubWV0YWRhdGEubWFwKGQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZC5pc29fY291bnRyeV9jb2RlX2FscGhhXzIsXG4gICAgcG9wdWxhdGlvbjogZC5wb3B1bGF0aW9uLFxuICB9O1xufSk7XG5cbkRBVEEuY2FzZXMgPSBEQVRBLmNhc2VzLm1hcChlID0+IHtcbiAgLy8gY29uc29sZS5sb2cocG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGtleTogZS5rZXksXG4gICAgdmFsdWU6IGUudmFsdWUgLyBwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbixcbiAgfTtcbn0pO1xuREFUQS5kZWF0aHMgPSBEQVRBLmRlYXRocy5tYXAoZSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHBvcC5maW5kKGQgPT4gZC5rZXkgPT09IGUua2V5KS5wb3B1bGF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGUua2V5LFxuICAgIHZhbHVlOiBlLnZhbHVlIC8gcG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24sXG4gIH07XG59KTtcblxuY29uc3QgZGF0YUV1cm9wZSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdFdXJvcGUnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFzaWEgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTGF0YW0gPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbicpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQWZyaWNhID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FmcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhT2NlYW5pYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdPY2VhbmlhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFOQW1lcmljYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdOb3J0aGVybiBBbWVyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbi8vIGNvbnNvbGUubG9nKCdldXJvcGUnLCBkYXRhRXVyb3BlKTtcblxuY29uc3QgZHVtbXlEYXRhID0gZGVmYXVsdERhdGEubWFwKChkLCBpKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBpLFxuICAgIHZhbHVlOiBkLFxuICB9O1xufSk7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHdpZHRoOiAnJyB9O1xuICBjaGFydDFDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY2hhcnQyQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0MSA9IG5ldyBDaGFydCgpO1xuXG4gIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHsgdGhpcy5jaGFydDEuZHJhdygpOyB9LCAyNTApO1xuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMuY2hhcnQyLmRyYXcoKTsgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0MVxuICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0MUNvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEoREFUQS5jYXNlcylcbiAgICAgIC5wcm9wcyh7XG4gICAgICAgIG1hcmtEYXRhUG9pbnQ6IFsvLyBrZXkgc2hvdWxkIGJlIHNhbWUgYXMgZGF0YVBhcmFtc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ0ZSJyxcbiAgICAgICAgICAgIC8vIHRleHQ6ICdJbmRpYScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgICAuZHJhdygpO1xuICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgIHRoaXMuY2hhcnQyXG4gICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnQyQ29udGFpbmVyLmN1cnJlbnQpXG4gICAgICAuZGF0YShkYXRhRXVyb3BlKVxuICAgICAgLnByb3BzKHtcbiAgICAgICAgbWFya0RhdGFQb2ludDogWy8vIGtleSBzaG91bGQgYmUgc2FtZSBhcyBkYXRhUGFyYW1zXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnRlInLFxuICAgICAgICAgICAgLy8gdGV4dDogJ0luZGlhJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byByZXNpemUgY2hhcnQgd2l0aCB0aGUgd2luZG93LlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICB0aGlzLmNoYXJ0LmRyYXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnRDb250YWluZXIgd2lkdGg9e3dpZHRofSBzZXRXaWR0aD17KHdpZHRoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGggfSl9PlxuICAgICAgICB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgIDxkaXYgaWQ9J2NoYXJ0MScgY2xhc3NOYW1lPSdjb3VudHJ5UmFua2luZ1N0cmlwcycgcmVmPXt0aGlzLmNoYXJ0MUNvbnRhaW5lcn0gLz5cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQyJyBjbGFzc05hbWU9J2NvdW50cnlSYW5raW5nU3RyaXBzJyByZWY9e3RoaXMuY2hhcnQyQ29udGFpbmVyfSAvPlxuICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})