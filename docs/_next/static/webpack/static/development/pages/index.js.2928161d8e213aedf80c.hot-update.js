webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _popData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popData.json */ \"./src/demo/popData.json\");\nvar _popData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./popData.json */ \"./src/demo/popData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions;\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases[element]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths[element]\n  };\n});\nDATA.casesPct = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases).map(function (element) {\n  return {\n    key: element,\n    value: 100 * (_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-1)[0] - _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-2)[0])\n  };\n});\nDATA.deathsPct = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths).map(function (element) {\n  return {\n    key: element,\n    value: 100 * (_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-1)[0] - _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-2)[0])\n  };\n}); // DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n// console.log(client.regions);\n// console.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n}; // console.log(_getCountryList('Asia'));\n// per pop\n\n\nvar pop = _popData_json__WEBPACK_IMPORTED_MODULE_14__.metadata.map(function (d) {\n  return {\n    key: d.iso_country_code_alpha_2,\n    population: d.population\n  };\n}); // DATA.cases = DATA.cases.map(e => {\n//   // console.log(pop.find(d => d.key === e.key).population);\n//   return {\n//     key: e.key,\n//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,\n//   };\n// });\n// DATA.deaths = DATA.deaths.map(e => {\n//   // console.log(pop.find(d => d.key === e.key).population);\n//   return {\n//     key: e.key,\n//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,\n//   };\n// });\n// cases\n\nvar dataEurope = DATA.cases.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.cases.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.cases.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.cases.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.cases.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.cases.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // deaths\n\nvar dataEurope1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe', dataEurope);\n\nvar dummyData = _defaultData_json__WEBPACK_IMPORTED_MODULE_12__.map(function (d, i) {\n  return {\n    key: i,\n    value: d\n  };\n});\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart2Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart2\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart1.data(DATA.casesPct).props({\n        rugProps: {\n          height: 16,\n          annotation: [{\n            value: 0,\n            text: 'India'\n          } // {\n          //   key: 'ME',\n          //   text: 'ME',\n          // },\n          // {\n          //   key: 'US',\n          //   // text: 'ME',\n          // },\n          ]\n        }\n      }).draw();\n\n      _this.chart2.data(DATA.deathsPct).draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart1.selection(this.chart1Container.current).data(dataAsia).props({\n        chartTitle: 'global cases',\n        locale: 'en',\n        dataParams: {\n          key: 'key',\n          value: 'value'\n        },\n        height: 150,\n        margin: {\n          top: 18,\n          right: 18,\n          bottom: 20,\n          left: 4\n        },\n        rugPlot: true,\n        rugProps: {\n          height: 16,\n          annotation: [{\n            key: 'IN',\n            text: 'India'\n          }, {\n            value: 0\n          }, {\n            key: 'BD',\n            text: 'BDbdbdbdbdbdb'\n          }]\n        }\n      }).draw();\n      this.chart2.selection(this.chart2Container.current).data(dataAsia1).props({\n        chartTitle: 'global deaths',\n        locale: 'en',\n        dataParams: {\n          key: 'key',\n          value: 'value'\n        },\n        height: 150,\n        margin: {\n          top: 18,\n          right: 18,\n          bottom: 20,\n          left: 4\n        },\n        rugPlot: true,\n        rugProps: {\n          height: 16,\n          annotation: [{\n            key: 'IN',\n            text: 'India'\n          }]\n        }\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart1.draw();\n      this.chart2.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 229,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart1\",\n        className: \"chart\",\n        ref: this.chart1Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 231,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        id: \"chart2\",\n        className: \"chart\",\n        ref: this.chart2Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 232,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RUb3RhbHMiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwidmFsdWUiLCJkZWF0aHMiLCJjYXNlc1BjdCIsImxhdGVzdFdlZWtseUF2Z3MiLCJzbGljZSIsImRlYXRoc1BjdCIsIl9nZXRDb3VudHJ5TGlzdCIsInJlZ2lvbiIsImZpbmQiLCJyIiwibmFtZSIsImNvdW50cmllcyIsImQiLCJpc29BbHBoYTIiLCJwb3AiLCJwb3BEYXRhIiwibWV0YWRhdGEiLCJpc29fY291bnRyeV9jb2RlX2FscGhhXzIiLCJwb3B1bGF0aW9uIiwiZGF0YUV1cm9wZSIsImZpbHRlciIsImluY2x1ZGVzIiwiZGF0YUFzaWEiLCJkYXRhTGF0YW0iLCJkYXRhQWZyaWNhIiwiZGF0YU9jZWFuaWEiLCJkYXRhTkFtZXJpY2EiLCJkYXRhRXVyb3BlMSIsImRhdGFBc2lhMSIsImRhdGFMYXRhbTEiLCJkYXRhQWZyaWNhMSIsImRhdGFPY2VhbmlhMSIsImRhdGFOQW1lcmljYTEiLCJkdW1teURhdGEiLCJkZWZhdWx0RGF0YSIsImkiLCJDaGFydENvbXBvbmVudCIsIndpZHRoIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJDaGFydCIsImRlYm91bmNlIiwiY2hhcnQxIiwiZGF0YSIsInByb3BzIiwicnVnUHJvcHMiLCJoZWlnaHQiLCJhbm5vdGF0aW9uIiwidGV4dCIsImRyYXciLCJjaGFydDIiLCJzZWxlY3Rpb24iLCJjaGFydDFDb250YWluZXIiLCJjdXJyZW50IiwiY2hhcnRUaXRsZSIsImxvY2FsZSIsImRhdGFQYXJhbXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJydWdQbG90IiwiY2hhcnQyQ29udGFpbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLCtFQUFKLEVBQWYsQyxDQUNBOztBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLE9BQXZCO0FBQ0FGLElBQUksQ0FBQ0csS0FBTCxHQUFhQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsNkNBQVMsQ0FBQ0MsWUFBVixDQUF1QkosS0FBbkMsRUFBMENLLEdBQTFDLENBQThDLFVBQUFDLE9BQU8sRUFBSTtBQUNwRSxTQUFPO0FBQ0xDLE9BQUcsRUFBRUQsT0FEQTtBQUVMRSxTQUFLLEVBQUVMLDZDQUFTLENBQUNDLFlBQVYsQ0FBdUJKLEtBQXZCLENBQTZCTSxPQUE3QjtBQUZGLEdBQVA7QUFJRCxDQUxZLENBQWI7QUFNQVQsSUFBSSxDQUFDWSxNQUFMLEdBQWNSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBUyxDQUFDQyxZQUFWLENBQXVCSyxNQUFuQyxFQUEyQ0osR0FBM0MsQ0FBK0MsVUFBQUMsT0FBTyxFQUFJO0FBQ3RFLFNBQU87QUFDTEMsT0FBRyxFQUFFRCxPQURBO0FBRUxFLFNBQUssRUFBRUwsNkNBQVMsQ0FBQ0MsWUFBVixDQUF1QkssTUFBdkIsQ0FBOEJILE9BQTlCO0FBRkYsR0FBUDtBQUlELENBTGEsQ0FBZDtBQU9BVCxJQUFJLENBQUNhLFFBQUwsR0FBZ0JULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyw2Q0FBUyxDQUFDUSxnQkFBVixDQUEyQlgsS0FBdkMsRUFBOENLLEdBQTlDLENBQWtELFVBQUFDLE9BQU8sRUFBSTtBQUMzRSxTQUFPO0FB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SyxVQUFFLEVBQUMsUUFBUjtBQUFpQixpQkFBUyxFQUFDLE9BQTNCO0FBQW1DLFdBQUcsRUFBRSxLQUFLZSxlQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLGlCQUFTLEVBQUMsT0FBM0I7QUFBbUMsV0FBRyxFQUFFLEtBQUtXLGVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQURGO0FBT0Q7Ozs7RUEvSDBCekIsNENBQUssQ0FBQ2dDLFM7O0FBa0lwQmxDLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlbW8vQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnLi4vbGliL2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2Z1cm5pdHVyZS9DaGFydENvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL3N0eWxlLWNvbG9yL2Rpc3QvY2F0ZWdvcmljYWwnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcbmltcG9ydCBjb3ZpZERhdGEgZnJvbSAnLi9jb3ZpZERhdGEuanNvbic7XG5pbXBvcnQgcG9wRGF0YSBmcm9tICcuL3BvcERhdGEuanNvbic7XG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuLy8gZm9ybWF0IGRhdGFcbmNvbnN0IERBVEEgPSB7fTtcbmNvbnN0IFJFR0lPTlMgPSBjbGllbnQucmVnaW9ucztcbkRBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmNhc2VzW2VsZW1lbnRdLFxuICB9O1xufSk7XG5EQVRBLmRlYXRocyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmRlYXRoc1tlbGVtZW50XSxcbiAgfTtcbn0pO1xuXG5EQVRBLmNhc2VzUGN0ID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuY2FzZXMpLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGVsZW1lbnQsXG4gICAgdmFsdWU6IDEwMCAqIChjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0gLSBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMilbMF0pLFxuICB9O1xufSk7XG5EQVRBLmRlYXRoc1BjdCA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZWxlbWVudCxcbiAgICB2YWx1ZTogMTAwICogKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0gLSBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5kZWF0aHNbZWxlbWVudF0uc2xpY2UoLTIpWzBdKSxcbiAgfTtcbn0pO1xuXG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKGNsaWVudC5yZWdpb25zKTtcbi8vIGNvbnNvbGUubG9nKERBVEEuY2FzZXMpO1xuY29uc3QgX2dldENvdW50cnlMaXN0ID0gKHJlZ2lvbikgPT4ge1xuICByZXR1cm4gUkVHSU9OUy5maW5kKHIgPT4gci5uYW1lID09PSByZWdpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMik7XG59O1xuXG4vLyBjb25zb2xlLmxvZyhfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKSk7XG5cbi8vIHBlciBwb3BcbmNvbnN0IHBvcCA9IHBvcERhdGEubWV0YWRhdGEubWFwKGQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZC5pc29fY291bnRyeV9jb2RlX2FscGhhXzIsXG4gICAgcG9wdWxhdGlvbjogZC5wb3B1bGF0aW9uLFxuICB9O1xufSk7XG5cbi8vIERBVEEuY2FzZXMgPSBEQVRBLmNhc2VzLm1hcChlID0+IHtcbi8vICAgLy8gY29uc29sZS5sb2cocG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24pO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZS5rZXksXG4vLyAgICAgdmFsdWU6IGUudmFsdWUgKiAxMDAwMDAgLyBwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbixcbi8vICAgfTtcbi8vIH0pO1xuLy8gREFUQS5kZWF0aHMgPSBEQVRBLmRlYXRocy5tYXAoZSA9PiB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBvcC5maW5kKGQgPT4gZC5rZXkgPT09IGUua2V5KS5wb3B1bGF0aW9uKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBrZXk6IGUua2V5LFxuLy8gICAgIHZhbHVlOiBlLnZhbHVlICogMTAwMDAwIC8gcG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24sXG4vLyAgIH07XG4vLyB9KTtcblxuLy8gY2FzZXNcbmNvbnN0IGRhdGFFdXJvcGUgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnRXVyb3BlJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFBc2lhID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUxhdGFtID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0xhdGluIEFtZXJpY2EgYW5kIHRoZSBDYXJpYmJlYW4nKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFmcmljYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdBZnJpY2EnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YU9jZWFuaWEgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnT2NlYW5pYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTkFtZXJpY2EgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTm9ydGhlcm4gQW1lcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5cbi8vIGRlYXRoc1xuY29uc3QgZGF0YUV1cm9wZTEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0V1cm9wZScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQXNpYTEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUxhdGFtMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbicpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQWZyaWNhMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQWZyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFPY2VhbmlhMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnT2NlYW5pYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTkFtZXJpY2ExID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdOb3J0aGVybiBBbWVyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbi8vIGNvbnNvbGUubG9nKCdldXJvcGUnLCBkYXRhRXVyb3BlKTtcblxuY29uc3QgZHVtbXlEYXRhID0gZGVmYXVsdERhdGEubWFwKChkLCBpKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBpLFxuICAgIHZhbHVlOiBkLFxuICB9O1xufSk7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHdpZHRoOiAnJyB9O1xuICBjaGFydDFDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY2hhcnQyQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0MSA9IG5ldyBDaGFydCgpO1xuICBjaGFydDIgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdGhpcy5jaGFydDEuZGF0YShEQVRBLmNhc2VzUGN0KS5wcm9wcyh7XG4gICAgICBydWdQcm9wczoge1xuICAgICAgICBoZWlnaHQ6IDE2LFxuICAgICAgICBhbm5vdGF0aW9uOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICB0ZXh0OiAnSW5kaWEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAga2V5OiAnTUUnLFxuICAgICAgICAgIC8vICAgdGV4dDogJ01FJyxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIGtleTogJ1VTJyxcbiAgICAgICAgICAvLyAgIC8vIHRleHQ6ICdNRScsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSkuZHJhdygpO1xuICAgIHRoaXMuY2hhcnQyLmRhdGEoREFUQS5kZWF0aHNQY3QpLmRyYXcoKTtcbiAgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0MVxuICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0MUNvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEoZGF0YUFzaWEpXG4gICAgICAucHJvcHMoe1xuICAgICAgICBjaGFydFRpdGxlOiAnZ2xvYmFsIGNhc2VzJyxcbiAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICBkYXRhUGFyYW1zOiB7XG4gICAgICAgICAga2V5OiAna2V5JyxcbiAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgIHRvcDogMTgsXG4gICAgICAgICAgcmlnaHQ6IDE4LFxuICAgICAgICAgIGJvdHRvbTogMjAsXG4gICAgICAgICAgbGVmdDogNCxcbiAgICAgICAgfSxcbiAgICAgICAgcnVnUGxvdDogdHJ1ZSxcbiAgICAgICAgcnVnUHJvcHM6IHtcbiAgICAgICAgICBoZWlnaHQ6IDE2LFxuICAgICAgICAgIGFubm90YXRpb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnSU4nLFxuICAgICAgICAgICAgICB0ZXh0OiAnSW5kaWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdCRCcsXG4gICAgICAgICAgICAgIHRleHQ6ICdCRGJkYmRiZGJkYmRiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuZHJhdygpO1xuXG4gICAgdGhpcy5jaGFydDJcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydDJDb250YWluZXIuY3VycmVudClcbiAgICAgIC5kYXRhKGRhdGFBc2lhMSlcbiAgICAgIC5wcm9wcyh7XG4gICAgICAgIGNoYXJ0VGl0bGU6ICdnbG9iYWwgZGVhdGhzJyxcbiAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICBkYXRhUGFyYW1zOiB7XG4gICAgICAgICAga2V5OiAna2V5JyxcbiAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgIHRvcDogMTgsXG4gICAgICAgICAgcmlnaHQ6IDE4LFxuICAgICAgICAgIGJvdHRvbTogMjAsXG4gICAgICAgICAgbGVmdDogNCxcbiAgICAgICAgfSxcbiAgICAgICAgcnVnUGxvdDogdHJ1ZSxcbiAgICAgICAgcnVnUHJvcHM6IHtcbiAgICAgICAgICBoZWlnaHQ6IDE2LFxuICAgICAgICAgIGFubm90YXRpb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnSU4nLFxuICAgICAgICAgICAgICB0ZXh0OiAnSW5kaWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byByZXNpemUgY2hhcnQgd2l0aCB0aGUgd2luZG93LlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICB0aGlzLmNoYXJ0MS5kcmF3KCk7XG4gICAgdGhpcy5jaGFydDIuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgIHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQxJyBjbGFzc05hbWU9J2NoYXJ0JyByZWY9e3RoaXMuY2hhcnQxQ29udGFpbmVyfSAvPlxuICAgICAgICA8ZGl2IGlkPSdjaGFydDInIGNsYXNzTmFtZT0nY2hhcnQnIHJlZj17dGhpcy5jaGFydDJDb250YWluZXJ9IC8+XG4gICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})