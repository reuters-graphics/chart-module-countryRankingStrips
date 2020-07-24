webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _popData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popData.json */ \"./src/demo/popData.json\");\nvar _popData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./popData.json */ \"./src/demo/popData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_15___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions;\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.cases[element]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestTotals.deaths[element]\n  };\n}); // DATA.cases = Object.keys(covidData.latestWeeklyAvgs.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestWeeklyAvgs.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestWeeklyAvgs.deaths).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestWeeklyAvgs.deaths[element].slice(-1)[0],\n//   };\n// });\n// DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n// console.log(client.regions);\n// console.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n}; // console.log(_getCountryList('Asia'));\n// per pop\n\n\nvar pop = _popData_json__WEBPACK_IMPORTED_MODULE_14__.metadata.map(function (d) {\n  return {\n    key: d.iso_country_code_alpha_2,\n    population: d.population\n  };\n});\nDATA.cases = DATA.cases.map(function (e) {\n  // console.log(pop.find(d => d.key === e.key).population);\n  return {\n    key: e.key,\n    value: e.value * 100000 / pop.find(function (d) {\n      return d.key === e.key;\n    }).population\n  };\n});\nDATA.deaths = DATA.deaths.map(function (e) {\n  // console.log(pop.find(d => d.key === e.key).population);\n  return {\n    key: e.key,\n    value: e.value * 100000 / pop.find(function (d) {\n      return d.key === e.key;\n    }).population\n  };\n}); // cases\n\nvar dataEurope = DATA.cases.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.cases.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.cases.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.cases.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.cases.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.cases.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // deaths\n\nvar dataEurope1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica1 = DATA.deaths.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe', dataEurope);\n\nvar dummyData = _defaultData_json__WEBPACK_IMPORTED_MODULE_12__.map(function (d, i) {\n  return {\n    key: i,\n    value: d\n  };\n});\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1Container\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart1\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart1.draw(); // this.chart2.draw();\n\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart1.selection(this.chart1Container.current).data(dataEurope).props({\n        chartTitle: 'europe cases',\n        rugPlot: true,\n        rugProps: {\n          height: 16,\n          annotation: [{\n            key: 'ES',\n            text: 'Spain'\n          }, {\n            key: 'GB',\n            text: 'UK'\n          }]\n        }\n      }).draw(); // Use our chart module.\n      // this.chart2\n      //   .selection(this.chart2Container.current)\n      //   .data(dataEurope1)\n      //   .props({\n      //     chartTitle: 'europe deaths',\n      //     distributionProps: {\n      //       bandwidth: 1,\n      //       threshold: 35,\n      //       xTicks: 5,\n      //       curveType: 'curveBasis',\n      //     },\n      //     markDataPoint: [// key should be same as dataParams\n      //       {\n      //         key: 'IT',\n      //         // text: 'India',\n      //       },\n      //       {\n      //         key: 'ES',\n      //         // text: 'India',\n      //       },\n      //       {\n      //         key: 'FR',\n      //         // text: 'India',\n      //       },\n      //     ],\n      //   })\n      //   .draw();\n      // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart1.draw(); // this.chart2.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 194,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart1\",\n        className: \"chart\",\n        ref: this.chart1Container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 196,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RUb3RhbHMiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwidmFsdWUiLCJkZWF0aHMiLCJfZ2V0Q291bnRyeUxpc3QiLCJyZWdpb24iLCJmaW5kIiwiciIsIm5hbWUiLCJjb3VudHJpZXMiLCJkIiwiaXNvQWxwaGEyIiwicG9wIiwicG9wRGF0YSIsIm1ldGFkYXRhIiwiaXNvX2NvdW50cnlfY29kZV9hbHBoYV8yIiwicG9wdWxhdGlvbiIsImUiLCJkYXRhRXVyb3BlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJkYXRhQXNpYSIsImRhdGFMYXRhbSIsImRhdGFBZnJpY2EiLCJkYXRhT2NlYW5pYSIsImRhdGFOQW1lcmljYSIsImRhdGFFdXJvcGUxIiwiZGF0YUFzaWExIiwiZGF0YUxhdGFtMSIsImRhdGFBZnJpY2ExIiwiZGF0YU9jZWFuaWExIiwiZGF0YU5BbWVyaWNhMSIsImR1bW15RGF0YSIsImRlZmF1bHREYXRhIiwiaSIsIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydDEiLCJkcmF3Iiwic2VsZWN0aW9uIiwiY2hhcnQxQ29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJwcm9wcyIsImNoYXJ0VGl0bGUiLCJydWdQbG90IiwicnVnUHJvcHMiLCJoZWlnaHQiLCJhbm5vdGF0aW9uIiwidGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQVksWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxNQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0FGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS0QsTUFBMUM7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBO0FBQ0EsV0FBS2YsTUFBTCxDQUFZQyxJQUFaLEdBSG1CLENBSW5CO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NOLEtBREQsR0FDVyxLQUFLc0IsS0FEaEIsQ0FDQ3RCLEtBREQ7QUFFUCxhQUNFLE1BQUMsaUVBQUQ7QUFBZ0IsYUFBSyxFQUFFQSxLQUF2QjtBQUE4QixnQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDdUIsUUFBTCxDQUFjO0FBQUV2QixpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLGlCQUFTLEVBQUMsT0FBM0I7QUFBbUMsV0FBRyxFQUFFLEtBQUtRLGVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGO0FBT0Q7Ozs7RUE1RjBCUCw0Q0FBSyxDQUFDdUIsUzs7QUErRnBCekIsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGNvdmlkRGF0YSBmcm9tICcuL2NvdmlkRGF0YS5qc29uJztcbmltcG9ydCBwb3BEYXRhIGZyb20gJy4vcG9wRGF0YS5qc29uJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG4vLyBmb3JtYXQgZGF0YVxuY29uc3QgREFUQSA9IHt9O1xuY29uc3QgUkVHSU9OUyA9IGNsaWVudC5yZWdpb25zO1xuREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXMpLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGVsZW1lbnQsXG4gICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuY2FzZXNbZWxlbWVudF0sXG4gIH07XG59KTtcbkRBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFRvdGFscy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGVsZW1lbnQsXG4gICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RUb3RhbHMuZGVhdGhzW2VsZW1lbnRdLFxuICB9O1xufSk7XG5cbi8vIERBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuY2FzZXNbZWxlbWVudF0uc2xpY2UoLTEpWzBdLFxuLy8gICB9O1xuLy8gfSk7XG4vLyBEQVRBLmRlYXRocyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbi8vICAgfTtcbi8vIH0pO1xuXG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdENvdW50cy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIERBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdENvdW50cy5kZWF0aHMpLm1hcChlbGVtZW50ID0+IHtcbi8vIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRoc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4vLyAgIH07XG4vLyB9KTtcbi8vIGNvbnNvbGUubG9nKGNsaWVudC5yZWdpb25zKTtcbi8vIGNvbnNvbGUubG9nKERBVEEuY2FzZXMpO1xuY29uc3QgX2dldENvdW50cnlMaXN0ID0gKHJlZ2lvbikgPT4ge1xuICByZXR1cm4gUkVHSU9OUy5maW5kKHIgPT4gci5uYW1lID09PSByZWdpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMik7XG59O1xuXG4vLyBjb25zb2xlLmxvZyhfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKSk7XG5cbi8vIHBlciBwb3BcbmNvbnN0IHBvcCA9IHBvcERhdGEubWV0YWRhdGEubWFwKGQgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleTogZC5pc29fY291bnRyeV9jb2RlX2FscGhhXzIsXG4gICAgcG9wdWxhdGlvbjogZC5wb3B1bGF0aW9uLFxuICB9O1xufSk7XG5cbkRBVEEuY2FzZXMgPSBEQVRBLmNhc2VzLm1hcChlID0+IHtcbiAgLy8gY29uc29sZS5sb2cocG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24pO1xuICByZXR1cm4ge1xuICAgIGtleTogZS5rZXksXG4gICAgdmFsdWU6IGUudmFsdWUgKiAxMDAwMDAgLyBwb3AuZmluZChkID0+IGQua2V5ID09PSBlLmtleSkucG9wdWxhdGlvbixcbiAgfTtcbn0pO1xuREFUQS5kZWF0aHMgPSBEQVRBLmRlYXRocy5tYXAoZSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHBvcC5maW5kKGQgPT4gZC5rZXkgPT09IGUua2V5KS5wb3B1bGF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGUua2V5LFxuICAgIHZhbHVlOiBlLnZhbHVlICogMTAwMDAwIC8gcG9wLmZpbmQoZCA9PiBkLmtleSA9PT0gZS5rZXkpLnBvcHVsYXRpb24sXG4gIH07XG59KTtcblxuLy8gY2FzZXNcbmNvbnN0IGRhdGFFdXJvcGUgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnRXVyb3BlJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFBc2lhID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUxhdGFtID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0xhdGluIEFtZXJpY2EgYW5kIHRoZSBDYXJpYmJlYW4nKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFmcmljYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdBZnJpY2EnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YU9jZWFuaWEgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnT2NlYW5pYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTkFtZXJpY2EgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTm9ydGhlcm4gQW1lcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5cbi8vIGRlYXRoc1xuY29uc3QgZGF0YUV1cm9wZTEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0V1cm9wZScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQXNpYTEgPSBEQVRBLmRlYXRocy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FzaWEnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUxhdGFtMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbicpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQWZyaWNhMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQWZyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFPY2VhbmlhMSA9IERBVEEuZGVhdGhzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnT2NlYW5pYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTkFtZXJpY2ExID0gREFUQS5kZWF0aHMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdOb3J0aGVybiBBbWVyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbi8vIGNvbnNvbGUubG9nKCdldXJvcGUnLCBkYXRhRXVyb3BlKTtcblxuY29uc3QgZHVtbXlEYXRhID0gZGVmYXVsdERhdGEubWFwKChkLCBpKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBpLFxuICAgIHZhbHVlOiBkLFxuICB9O1xufSk7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHdpZHRoOiAnJyB9O1xuICBjaGFydDFDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgLy8gY2hhcnQyQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0MSA9IG5ldyBDaGFydCgpO1xuICAvLyBjaGFydDIgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdGhpcy5jaGFydDEuZHJhdygpO1xuICAgIC8vIHRoaXMuY2hhcnQyLmRyYXcoKTtcbiAgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICB0aGlzLmNoYXJ0MVxuICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0MUNvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEoZGF0YUV1cm9wZSlcbiAgICAgIC5wcm9wcyh7XG4gICAgICAgIGNoYXJ0VGl0bGU6ICdldXJvcGUgY2FzZXMnLFxuICAgICAgICBydWdQbG90OiB0cnVlLFxuICAgICAgICBydWdQcm9wczoge1xuICAgICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgICAgYW5ub3RhdGlvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdFUycsXG4gICAgICAgICAgICAgIHRleHQ6ICdTcGFpbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdHQicsXG4gICAgICAgICAgICAgIHRleHQ6ICdVSycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmRyYXcoKTtcbiAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICAvLyB0aGlzLmNoYXJ0MlxuICAgIC8vICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0MkNvbnRhaW5lci5jdXJyZW50KVxuICAgIC8vICAgLmRhdGEoZGF0YUV1cm9wZTEpXG4gICAgLy8gICAucHJvcHMoe1xuICAgIC8vICAgICBjaGFydFRpdGxlOiAnZXVyb3BlIGRlYXRocycsXG4gICAgLy8gICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgLy8gICAgICAgYmFuZHdpZHRoOiAxLFxuICAgIC8vICAgICAgIHRocmVzaG9sZDogMzUsXG4gICAgLy8gICAgICAgeFRpY2tzOiA1LFxuICAgIC8vICAgICAgIGN1cnZlVHlwZTogJ2N1cnZlQmFzaXMnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBtYXJrRGF0YVBvaW50OiBbLy8ga2V5IHNob3VsZCBiZSBzYW1lIGFzIGRhdGFQYXJhbXNcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBrZXk6ICdJVCcsXG4gICAgLy8gICAgICAgICAvLyB0ZXh0OiAnSW5kaWEnLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAga2V5OiAnRVMnLFxuICAgIC8vICAgICAgICAgLy8gdGV4dDogJ0luZGlhJyxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIGtleTogJ0ZSJyxcbiAgICAvLyAgICAgICAgIC8vIHRleHQ6ICdJbmRpYScsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuZHJhdygpO1xuXG4gICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGlmIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCwgdG9vLlxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgdGhpcy5jaGFydDEuZHJhdygpO1xuICAgIC8vIHRoaXMuY2hhcnQyLmRyYXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnRDb250YWluZXIgd2lkdGg9e3dpZHRofSBzZXRXaWR0aD17KHdpZHRoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGggfSl9PlxuICAgICAgICB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgIDxkaXYgaWQ9J2NoYXJ0MScgY2xhc3NOYW1lPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0MUNvbnRhaW5lcn0gLz5cbiAgICAgICAgey8qIDxkaXYgaWQ9J2NoYXJ0MicgY2xhc3NOYW1lPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0MkNvbnRhaW5lcn0gLz4gKi99XG4gICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})