webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n/* harmony import */ var _covidData_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covidData.json */ \"./src/demo/covidData.json\");\nvar _covidData_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./covidData.json */ \"./src/demo/covidData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-countryRankingStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_14___default.a(); // format data\n\nvar DATA = {};\nvar REGIONS = client.regions; // DATA.cases = Object.keys(covidData.latestTotals.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.cases[element],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestTotals.deaths).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestTotals.deaths[element],\n//   };\n// });\n\nDATA.cases = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.cases[element].slice(-1)[0]\n  };\n});\nDATA.deaths = Object.keys(_covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths).map(function (element) {\n  return {\n    key: element,\n    value: _covidData_json__WEBPACK_IMPORTED_MODULE_13__.latestWeeklyAvgs.deaths[element].slice(-1)[0]\n  };\n}); // DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {\n//   return {\n//     key: element,\n//     value: covidData.latestCounts.cases[element].slice(-1)[0],\n//   };\n// });\n// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {\n// return {\n//     key: element,\n//     value: covidData.latestCounts.deaths[element].slice(-1)[0],\n//   };\n// });\n\nconsole.log(client.regions);\nconsole.log(DATA.cases);\n\nvar _getCountryList = function _getCountryList(region) {\n  return REGIONS.find(function (r) {\n    return r.name === region;\n  }).countries.map(function (d) {\n    return d.isoAlpha2;\n  });\n};\n\nconsole.log(_getCountryList('Asia'));\nvar dataEurope = DATA.cases.filter(function (d) {\n  return _getCountryList('Europe').includes(d.key);\n});\nvar dataAsia = DATA.cases.filter(function (d) {\n  return _getCountryList('Asia').includes(d.key);\n});\nvar dataLatam = DATA.cases.filter(function (d) {\n  return _getCountryList('Latin America and the Caribbean').includes(d.key);\n});\nvar dataAfrica = DATA.cases.filter(function (d) {\n  return _getCountryList('Africa').includes(d.key);\n});\nvar dataOceania = DATA.cases.filter(function (d) {\n  return _getCountryList('Oceania').includes(d.key);\n});\nvar dataNAmerica = DATA.cases.filter(function (d) {\n  return _getCountryList('Northern America').includes(d.key);\n}); // console.log('europe',dataEurope);\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(dataAsia).props({}).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNsaWVudCIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJEQVRBIiwiUkVHSU9OUyIsInJlZ2lvbnMiLCJjYXNlcyIsIk9iamVjdCIsImtleXMiLCJjb3ZpZERhdGEiLCJsYXRlc3RXZWVrbHlBdmdzIiwibWFwIiwiZWxlbWVudCIsImtleSIsInZhbHVlIiwic2xpY2UiLCJkZWF0aHMiLCJjb25zb2xlIiwibG9nIiwiX2dldENvdW50cnlMaXN0IiwicmVnaW9uIiwiZmluZCIsInIiLCJuYW1lIiwiY291bnRyaWVzIiwiZCIsImlzb0FscGhhMiIsImRhdGFFdXJvcGUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImRhdGFBc2lhIiwiZGF0YUxhdGFtIiwiZGF0YUFmcmljYSIsImRhdGFPY2VhbmlhIiwiZGF0YU5BbWVyaWNhIiwiQ2hhcnRDb21wb25lbnQiLCJ3aWR0aCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ2hhcnQiLCJkZWJvdW5jZSIsImNoYXJ0IiwiZHJhdyIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJwcm9wcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLCtFQUFKLEVBQWYsQyxDQUNBOztBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLE9BQXZCLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxVQUFFLEVBQUMsT0FBUjtBQUFnQixXQUFHLEVBQUUsS0FBS1EsY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREY7QUFNRDs7OztFQTNDMEJQLDRDQUFLLENBQUNpQixTOztBQThDcEJuQiw2RUFBZiIsImZpbGUiOiIuL3NyYy9kZW1vL0NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJy4uL2xpYi9jaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9mdXJuaXR1cmUvQ2hhcnRDb250YWluZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9zdHlsZS1jb2xvci9kaXN0L2NhdGVnb3JpY2FsJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5pbXBvcnQgY292aWREYXRhIGZyb20gJy4vY292aWREYXRhLmpzb24nO1xuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcblxuY29uc3QgY2xpZW50ID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcbi8vIGZvcm1hdCBkYXRhXG5jb25zdCBEQVRBID0ge307XG5jb25zdCBSRUdJT05TID0gY2xpZW50LnJlZ2lvbnM7XG4vLyBEQVRBLmNhc2VzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFRvdGFscy5jYXNlcykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFRvdGFscy5jYXNlc1tlbGVtZW50XSxcbi8vICAgfTtcbi8vIH0pO1xuLy8gREFUQS5kZWF0aHMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0VG90YWxzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGtleTogZWxlbWVudCxcbi8vICAgICB2YWx1ZTogY292aWREYXRhLmxhdGVzdFRvdGFscy5kZWF0aHNbZWxlbWVudF0sXG4vLyAgIH07XG4vLyB9KTtcblxuREFUQS5jYXNlcyA9IE9iamVjdC5rZXlzKGNvdmlkRGF0YS5sYXRlc3RXZWVrbHlBdmdzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5jYXNlc1tlbGVtZW50XS5zbGljZSgtMSlbMF0sXG4gIH07XG59KTtcbkRBVEEuZGVhdGhzID0gT2JqZWN0LmtleXMoY292aWREYXRhLmxhdGVzdFdlZWtseUF2Z3MuZGVhdGhzKS5tYXAoZWxlbWVudCA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5OiBlbGVtZW50LFxuICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0V2Vla2x5QXZncy5kZWF0aHNbZWxlbWVudF0uc2xpY2UoLTEpWzBdLFxuICB9O1xufSk7XG5cbi8vIERBVEEuY2FzZXMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmNhc2VzKS5tYXAoZWxlbWVudCA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAga2V5OiBlbGVtZW50LFxuLy8gICAgIHZhbHVlOiBjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmNhc2VzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbi8vICAgfTtcbi8vIH0pO1xuLy8gREFUQS5kZWF0aHMgPSBPYmplY3Qua2V5cyhjb3ZpZERhdGEubGF0ZXN0Q291bnRzLmRlYXRocykubWFwKGVsZW1lbnQgPT4ge1xuLy8gcmV0dXJuIHtcbi8vICAgICBrZXk6IGVsZW1lbnQsXG4vLyAgICAgdmFsdWU6IGNvdmlkRGF0YS5sYXRlc3RDb3VudHMuZGVhdGhzW2VsZW1lbnRdLnNsaWNlKC0xKVswXSxcbi8vICAgfTtcbi8vIH0pO1xuY29uc29sZS5sb2coY2xpZW50LnJlZ2lvbnMpO1xuY29uc29sZS5sb2coREFUQS5jYXNlcyk7XG5jb25zdCBfZ2V0Q291bnRyeUxpc3QgPSAocmVnaW9uKSA9PiB7XG4gIHJldHVybiBSRUdJT05TLmZpbmQociA9PiByLm5hbWUgPT09IHJlZ2lvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEyKTtcbn07XG5cbmNvbnNvbGUubG9nKF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpKTtcblxuY29uc3QgZGF0YUV1cm9wZSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdFdXJvcGUnKS5pbmNsdWRlcyhkLmtleSkpO1xuY29uc3QgZGF0YUFzaWEgPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnQXNpYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhTGF0YW0gPSBEQVRBLmNhc2VzLmZpbHRlcihkID0+IF9nZXRDb3VudHJ5TGlzdCgnTGF0aW4gQW1lcmljYSBhbmQgdGhlIENhcmliYmVhbicpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhQWZyaWNhID0gREFUQS5jYXNlcy5maWx0ZXIoZCA9PiBfZ2V0Q291bnRyeUxpc3QoJ0FmcmljYScpLmluY2x1ZGVzKGQua2V5KSk7XG5jb25zdCBkYXRhT2NlYW5pYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdPY2VhbmlhJykuaW5jbHVkZXMoZC5rZXkpKTtcbmNvbnN0IGRhdGFOQW1lcmljYSA9IERBVEEuY2FzZXMuZmlsdGVyKGQgPT4gX2dldENvdW50cnlMaXN0KCdOb3J0aGVybiBBbWVyaWNhJykuaW5jbHVkZXMoZC5rZXkpKTtcbi8vIGNvbnNvbGUubG9nKCdldXJvcGUnLGRhdGFFdXJvcGUpO1xuXG5jbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyB3aWR0aDogJycgfTtcbiAgY2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMuY2hhcnQuZHJhdygpOyB9LCAyNTApO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLmRhdGEoZGF0YUFzaWEpXG4gICAgICAucHJvcHMoe1xuXG4gICAgICB9KVxuICAgICAgLmRyYXcoKTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgIHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})