webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _popData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popData.json */ \"./src/demo/popData.json\");\nvar _popData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./popData.json */ \"./src/demo/popData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions;\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases[element]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths[element]\n  };\n});\nDATA.casesPct = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases).map(function (element) {\n  return {\n    key: element,\n    value: 100 * (_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-1)[0] - _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-2)[0])\n  };\n});\nDATA.deathsPct = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths).map(function (element) {\n  return {\n    key: element,\n    value: 100 * (_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-1)[0] - _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-2)[0])\n  };\n}); // DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n// console.log(client.regions);\n// console.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n}; // console.log(_getCountryList('Asia'));\n// per pop\n\n\nvar pop = _popData_json__WEBPACK_IMPORTED_MODULE_14__.metadata.map(function (d) {\n  return {\n    key: d.iso_country_code_alpha_2,\n    population: d.population\n  };\n}); // DATA.cases = DATA.cases.map(e => {\n//   // console.log(pop.find(d => d.key === e.key).population);\n//   return {\n//     key: e.key,\n//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,\n//   };\n// });\n// DATA.deaths = DATA.deaths.map(e => {\n//   // console.log(pop.find(d => d.key === e.key).population);\n//   return {\n//     key: e.key,\n//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,\n//   };\n// });\n// cases\n\nvar dataEurope = DATA.cases.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.cases.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.cases.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.cases.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.cases.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.cases.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // deaths\n\nvar dataEurope1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe', dataEurope);\n\nvar dummyData = _defaultData_json__WEBPACK_IMPORTED_MODULE_12__.map(function (d, i) {\n  return {\n    key: i,\n    value: d\n  };\n});\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart2Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart2\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart1.data(DATA.casesPct).props({\n        rugProps: {\n          height: 16,\n          annotation: [{\n            value: 0,\n            text: 'zero'\n          } // {\n          //   key: 'ME',\n          //   text: 'ME',\n          // },\n          // {\n          //   key: 'US',\n          //   // text: 'ME',\n          // },\n          ]\n        }\n      }).draw();\n\n      _this.chart2.data(DATA.deathsPct).draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart1.selection(this.chart1Container.current).data(dataAsia).props({\n        chartTitle: 'global cases',\n        locale: 'en',\n        dataParams: {\n          key: 'key',\n          value: 'value'\n        },\n        height: 150,\n        margin: {\n          top: 18,\n          right: 18,\n          bottom: 20,\n          left: 4\n        },\n        rugPlot: true,\n        rugProps: {\n          height: 16,\n          annotation: [{\n            key: 'IN',\n            text: 'India'\n          } // {\n          //   value: 0,\n          //\n          ]\n        }\n      }).draw();\n      this.chart2.selection(this.chart2Container.current).data(dataAsia1).props({\n        chartTitle: 'global deaths',\n        locale: 'en',\n        dataParams: {\n          key: 'key',\n          value: 'value'\n        },\n        height: 150,\n        margin: {\n          top: 18,\n          right: 18,\n          bottom: 20,\n          left: 4\n        },\n        rugPlot: true,\n        rugProps: {\n          height: 16,\n          annotation: [{\n            key: 'IN',\n            text: 'India'\n          }]\n        }\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart1.draw();\n      this.chart2.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 225,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart1\",\n        className: \"chart\",\n        ref: this.chart1Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 227,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        id: \"chart2\",\n        className: \"chart\",\n        ref: this.chart2Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 228,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RUb3RhbHMiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwidmFsdWUiLCJkZWF0aHMiLCJjYXNlc1BjdCIsImxhdGVzdFdlZWtseUF2Z3MiLCJzbGljZSIsImRlYXRoc1BjdCIsIl9nZXRDb3VudHJ5TGlzdCIsInJlZ2lvbiIsImZpbmQiLCJyIiwibmFtZSIsImNvdW50cmllcyIsImQiLCJpc29BbHBoYTIiLCJwb3AiLCJwb3BEYXRhIiwibWV0YWRhdGEiLCJpc29fY291bnRyeV9jb2RlX2FscGhhXzIiLCJwb3B1bGF0aW9uIiwiZGF0YUV1cm9wZSIsImZpbHRlciIsImluY2x1ZGVzIiwiZGF0YUFzaWEiLCJkYXRhTGF0YW0iLCJkYXRhQWZyaWNhIiwiZGF0YU9jZWFuaWEiLCJkYXRhTkFtZXJpY2EiLCJkYXRhRXVyb3BlMSIsImRhdGFBc2lhMSIsImRhdGFMYXRhbTEiLCJkYXRhQWZyaWNhMSIsImRhdGFPY2VhbmlhMSIsImRhdGFOQW1lcmljYTEiLCJkdW1teURhdGEiLCJkZWZhdWx0RGF0YSIsImkiLCJDaGFydENvbXBvbmVudCIsIndpZHRoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJDaGFydCIsImRlYm91bmNlIiwiY2hhcnQxIiwiZGF0YSIsInByb3BzIiwicnVnUHJvcHMiLCJoZWlnaHQiLCJhbm5vdGF0aW9uIiwidGV4dCIsImRyYXciLCJjaGFydDIiLCJzZWxlY3Rpb24iLCJjaGFydDFDb250YWluZXIiLCJjdXJyZW50IiwiY2hhcnRUaXRsZSIsImxvY2FsZSIsImRhdGFQYXJhbXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJydWdQbG90IiwiY2hhcnQyQ29udGFpbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLCtFQUFKLEVBQWYsQyxDQUNBOztBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLE9BQXZCO0FBQ0FGLElBQUksQ0FBQ0csS0FBTCxHQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsNkNBQVMsQ0FBQ0MsWUFBVixDQUF1QkosS0FBbkMsRUFBMENLLEdBQTFDLENBQThDLFVBQUFDLE9BQU8sRUFBSTtBQUNwRSxTQUFPO0FBQ0xDLE9BQUcsRUFBRUQsT0FEQTtBQUVMRSxTQUFLLEVBQUVMLDZDQUFTLENBQUNDLFlBQVYsQ0FBdUJKLEtBQXZCLENBQTZCTSxPQUE3QjtBQUZGLEdBQVA7QUFJRCxDQUxZLENBQWI7QUFNQVQsSUFBSSxDQUFDWSxNQUFMLEdBQWNSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBUyxDQUFDQyxZQUFWLENBQXVCSyxNQUFuQyxFQUEyQ0osR0FBM0MsQ0FBK0MsVUFBQUMsT0FBTyxFQUFJO0FBQ3RFLFNBQU87QUFDTEMsT0FBRyxFQUFFRCxPQURBO0FBRUxFLFNBQUssRUFBRUwsNkNBQVMsQ0FBQ0MsWUFBVixDQUF1QkssTUFBdkIsQ0FBOEJILE9BQTlCO0FBRkYsR0FBUDtBQUlELENBTGEsQ0FBZDtBQU9BVCxJQUFJLENBQUNhLFFBQUwsR0FBZ0JULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBUyxDQUFDUSxnQkFBVixDQUEyQlgsS0FBdkMsRUFBOENLLEdBQTlDLENBQWtELFVBQUFDLE9BQU8sRUFBSTtBQUMzRSxTQUFPO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyxPQUEzQjtBQUFtQyxXQUFHLEVBQUUsS0FBS1csZUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLENBREY7QUFPRDs7OztFQTNIMEJ6Qiw0Q0FBSyxDQUFDZ0MsUzs7QUE4SHBCbEMsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGNvdmlkRGF0YSBmcm9tICcuL2NvdmlkRGF0YS5qc29uJztcbmltcG9ydCBwb3BEYXRhIGZyb20gJy4vcG9wRGF0YS5qc29uJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG4vLyBmb3JtYXQgZGF0YVxuY29uc3QgREFUQSA9IHt9O1xuY29uc3QgUkVHSU9OUyA9IGNsaWVudC5yZWdpb25zO1xuREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXMpLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGVsZW1lbnQsXG4gICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXNbZWxlbWVudF0sXG4gIH07XG59KTtcbkRBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFRvdGFscy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGVsZW1lbnQsXG4gICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzW2VsZW1lbnRdLFxuICB9O1xufSk7XG5cbkRBVEEuY2FzZXNQY3QgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogMTAwICogKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmNhc2VzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSAtIGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmNhc2VzW2VsZW1lbnRdLnNsaWNlKC0yKVswXSksXG4gIH07XG59KTtcbkRBVEEuZGVhdGhzUGN0ID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiAxMDAgKiAoY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSAtIGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMilbMF0pLFxuICB9O1xufSk7XG5cbi8vIERBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmNhc2VzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbi8vICAgfTtcbi8vIH0pO1xuLy8gREFUQS5kZWF0aHMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuLy8gcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RDb3VudHMuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbi8vICAgfTtcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coY2xpZW50LnJlZ2lvbnMpO1xuLy8gY29uc29sZS5sb2coREFUQS5jYXNlcyk7XG5jb25zdCBfZ2V0Q291bnRyeUxpc3QgPSAocmVnaW9uKSA9PiB7XG4gIHJldHVybiBSRUdJT05TLmZpbmQociA9PiByLm5hbWUgPT09IHJlZ2lvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEyKTtcbn07XG5cbi8vIGNvbnNvbGUubG9nKF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpKTtcblxuLy8gcGVyIHBvcFxuY29uc3QgcG9wID0gcG9wRGF0YS5tZXRhZGF0YS5tYXAoZCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBkLmlzb19jb3VudHJ5X2NvZGVfYWxwaGFfMixcbiAgICBwb3B1bGF0aW9uOiBkLnBvcHVsYXRpb24sXG4gIH07XG59KTtcblxuLy8gREFUQS5jYXNlcyA9IERBVEEuY2FzZXMubWFwKGUgPT4ge1xuLy8gICAvLyBjb25zb2xlLmxvZyhwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbik7XG4vLyAgIHJldHVybiB7XG4vLyAgICAga2V5OiBlLmtleSxcbi8vICAgICB2YWx1ZTogZS52YWx1ZSAqIDEwMDAwMCAvIHBvcC5maW5kKGQgPT4gZC5rZXkgPT09IGUua2V5KS5wb3B1bGF0aW9uLFxuLy8gICB9O1xuLy8gfSk7XG4vLyBEQVRBLmRlYXRocyA9IERBVEEuZGVhdGhzLm1hcChlID0+IHtcbi8vICAgLy8gY29uc29sZS5sb2cocG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24pO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZS5rZXksXG4vLyAgICAgdmFsdWU6IGUudmFsdWUgKiAxMDAwMDAgLyBwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbixcbi8vICAgfTtcbi8vIH0pO1xuXG4vLyBjYXNlc1xuY29uc3QgZGF0YUV1cm9wZSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdFdXJvcGUnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFzaWEgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTGF0YW0gPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbicpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQWZyaWNhID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FmcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhT2NlYW5pYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdPY2VhbmlhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFOQW1lcmljYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdOb3J0aGVybiBBbWVyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcblxuLy8gZGVhdGhzXG5jb25zdCBkYXRhRXVyb3BlMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnRXVyb3BlJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFBc2lhMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTGF0YW0xID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdMYXRpbiBBbWVyaWNhIGFuZCB0aGUgQ2FyaWJiZWFuJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFBZnJpY2ExID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdBZnJpY2EnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YU9jZWFuaWExID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdPY2VhbmlhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFOQW1lcmljYTEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ05vcnRoZXJuIEFtZXJpY2EnKS5pbmNsdWRlcyhkLmtleSkpO1xuLy8gY29uc29sZS5sb2coJ2V1cm9wZScsIGRhdGFFdXJvcGUpO1xuXG5jb25zdCBkdW1teURhdGEgPSBkZWZhdWx0RGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGksXG4gICAgdmFsdWU6IGQsXG4gIH07XG59KTtcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgd2lkdGg6ICcnIH07XG4gIGNoYXJ0MUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjaGFydDJDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgY2hhcnQxID0gbmV3IENoYXJ0KCk7XG4gIGNoYXJ0MiA9IG5ldyBDaGFydCgpO1xuXG4gIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICB0aGlzLmNoYXJ0MS5kYXRhKERBVEEuY2FzZXNQY3QpLnByb3BzKHtcbiAgICAgIHJ1Z1Byb3BzOiB7XG4gICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgIGFubm90YXRpb246IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIHRleHQ6ICd6ZXJvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGtleTogJ01FJyxcbiAgICAgICAgICAvLyAgIHRleHQ6ICdNRScsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBrZXk6ICdVUycsXG4gICAgICAgICAgLy8gICAvLyB0ZXh0OiAnTUUnLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLmRyYXcoKTtcbiAgICB0aGlzLmNoYXJ0Mi5kYXRhKERBVEEuZGVhdGhzUGN0KS5kcmF3KCk7XG4gIH0sIDI1MCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gVXNlIG91ciBjaGFydCBtb2R1bGUuXG4gICAgdGhpcy5jaGFydDFcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydDFDb250YWluZXIuY3VycmVudClcbiAgICAgIC5kYXRhKGRhdGFBc2lhKVxuICAgICAgLnByb3BzKHtcbiAgICAgICAgY2hhcnRUaXRsZTogJ2dsb2JhbCBjYXNlcycsXG4gICAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgIGtleTogJ2tleScsXG4gICAgICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICB0b3A6IDE4LFxuICAgICAgICAgIHJpZ2h0OiAxOCxcbiAgICAgICAgICBib3R0b206IDIwLFxuICAgICAgICAgIGxlZnQ6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHJ1Z1Bsb3Q6IHRydWUsXG4gICAgICAgIHJ1Z1Byb3BzOiB7XG4gICAgICAgICAgaGVpZ2h0OiAxNixcbiAgICAgICAgICBhbm5vdGF0aW9uOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ0lOJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0luZGlhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICB0aGlzLmNoYXJ0MlxuICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0MkNvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEoZGF0YUFzaWExKVxuICAgICAgLnByb3BzKHtcbiAgICAgICAgY2hhcnRUaXRsZTogJ2dsb2JhbCBkZWF0aHMnLFxuICAgICAgICBsb2NhbGU6ICdlbicsXG4gICAgICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgICAgICBrZXk6ICdrZXknLFxuICAgICAgICAgIHZhbHVlOiAndmFsdWUnLFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgdG9wOiAxOCxcbiAgICAgICAgICByaWdodDogMTgsXG4gICAgICAgICAgYm90dG9tOiAyMCxcbiAgICAgICAgICBsZWZ0OiA0LFxuICAgICAgICB9LFxuICAgICAgICBydWdQbG90OiB0cnVlLFxuICAgICAgICBydWdQcm9wczoge1xuICAgICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgICAgYW5ub3RhdGlvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdJTicsXG4gICAgICAgICAgICAgIHRleHQ6ICdJbmRpYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmRyYXcoKTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIHRoaXMuY2hhcnQxLmRyYXcoKTtcbiAgICB0aGlzLmNoYXJ0Mi5kcmF3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgey8qIFRoaXMgaXMgb3VyIGNoYXJ0IGNvbnRhaW5lciDwn5GHICovfVxuICAgICAgICA8ZGl2IGlkPSdjaGFydDEnIGNsYXNzTmFtZT0nY2hhcnQnIHJlZj17dGhpcy5jaGFydDFDb250YWluZXJ9IC8+XG4gICAgICAgIDxkaXYgaWQ9J2NoYXJ0MicgY2xhc3NOYW1lPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0MkNvbnRhaW5lcn0gLz5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})