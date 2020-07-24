webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 30,\n        xTicks: 5,\n        curveType: 'curveBasis'\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      }); // console.log(d3.extent(dataValues));\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom - 24, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());\n\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(xScale.domain()) // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y').attr('transform', \"translate(\".concat(props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisLeft(yScale).ticks(null, '%')).call(function (g) {\n        return g.select('.domain').remove();\n      }); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var rugs = plot.append('g').selectAll('rect').data(data);\n      rugs.enter().append('rect').attr('class', function (d) {\n        return \"\".concat(d.key);\n      }).attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.height - props.margin.bottom - 24).attr('height', 24).attr('width', 1).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // const distPath = plot.selectAll('path');\n\n      plot.append('g').attr('fill', '#bbb').selectAll('rect').data(bins).join('rect').attr('x', function (d) {\n        return xScale(d.x0) + 1;\n      }).attr('y', function (d) {\n        // console.log(d.length, data.length);\n        return yScale(d.length / data.length);\n      }).attr('width', function (d) {\n        return xScale(d.x1) - xScale(d.x0) - 1;\n      }).attr('height', function (d) {\n        return yScale(0) - yScale(d.length / data.length);\n      });\n      plot.appendSelect('path.area').attr('class', 'distribution-area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      console.log('area', _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].polygonArea(density));\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine); // HIGHLIGHT DATA PONT\n      // const pointPath\n      // const binWidth =\n\n      var dataHighlight = bins.find(function (element) {\n        return element.includes(6.2960862166761205);\n      });\n      console.log(kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataHighlight));\n\n      var pathHighlight = function pathHighlight(d) {\n        return [[xScale(d.x0), yScale(0)], [xScale(d.x0), yScale(3)], [xScale(d.x1), yScale(3)], [xScale(d.x1), yScale(0)]];\n      };\n\n      console.log(pathHighlight(dataHighlight));\n      plot.appendSelect('path.area-highlight').attr('class', 'area-highlight').datum(pathHighlight(dataHighlight)).attr('fill', 'red').attr('d', distributionArea);\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImN1cnZlVHlwZSIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwiYXhpc0xlZnQiLCJnIiwic2VsZWN0IiwicmVtb3ZlIiwicGxvdCIsInJ1Z3MiLCJhcHBlbmQiLCJzZWxlY3RBbGwiLCJlbnRlciIsInN0eWxlIiwiam9pbiIsIngwIiwieDEiLCJkYXR1bSIsInBvbHlnb25BcmVhIiwiZGF0YUhpZ2hsaWdodCIsImZpbmQiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJwYXRoSGlnaGxpZ2h0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QUQsQ0FBckIsQ0FKSyxDQUFQO0FBTUQsT0FQRDs7QUFRQW9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMEIsYUFBYSxDQUFDSixhQUFELENBQXpCO0FBQ0FYLFVBQUksQ0FBQ1QsWUFBTCxDQUFrQixxQkFBbEIsRUFDR0MsSUFESCxDQUNRLE9BRFIsRUFDaUIsZ0JBRGpCLEVBRUdpQixLQUZILENBRVNNLGFBQWEsQ0FBQ0osYUFBRCxDQUZ0QixFQUdHbkIsSUFISCxDQUdRLE1BSFIsRUFHZ0IsS0FIaEIsRUFJR0EsSUFKSCxDQUlRLEdBSlIsRUFJYWhCLGdCQUpiO0FBTUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqTGdDd0MsNEQ7O0FBb0xwQnZGLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDAuNSxcbiAgICAgIHRocmVzaG9sZDogMzAsXG4gICAgICB4VGlja3M6IDUsXG4gICAgICBjdXJ2ZVR5cGU6ICdjdXJ2ZUJhc2lzJyxcbiAgICB9LFxuICAgIGhlaWdodDogMjUwLFxuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvdHRvbTogMjAsXG4gICAgICBsZWZ0OiAyMCxcbiAgICB9LFxuICB9O1xuXG4gIGRlZmF1bHREYXRhID0gZGVmYXVsdERhdGE7XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkMy50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApO1xuXG4gICAgLy8gREVGSU5FIFNDQUxFU1xuICAgIGNvbnN0IGRhdGFWYWx1ZXMgPSBkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGQzLmV4dGVudChkYXRhVmFsdWVzKSk7XG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YVZhbHVlcykpLm5pY2UoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKTtcblxuICAgIGNvbnN0IHRocmVzaG9sZHMgPSB4U2NhbGUudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMudGhyZXNob2xkKTtcbiAgICBjb25zdCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgIC5kb21haW4oeFNjYWxlLmRvbWFpbigpKVxuICAgICAgLnRocmVzaG9sZHModGhyZXNob2xkcykoZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYmlucywgZCA9PiBkLmxlbmd0aCkgLyBkYXRhLmxlbmd0aF0pXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSAyNCwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uTGluZSA9IGQzLmxpbmUoKVxuICAgICAgLmN1cnZlKGQzW3Byb3BzLmRpc3RyaWJ1dGlvblByb3BzLmN1cnZlVHlwZV0pXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55KGQgPT4geVNjYWxlKGRbMV0pKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkFyZWEgPSBkMy5hcmVhKClcbiAgICAgIC5jdXJ2ZShkM1twcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5jdXJ2ZVR5cGVdKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueTEoZCA9PiB5U2NhbGUoZFsxXSkpXG4gICAgICAueTAoZCA9PiB5U2NhbGUoMCkpO1xuXG4gICAgLy8gRElTVFJJQlVUSU9OIE1BVEhcbiAgICBjb25zdCBrZGUgPSAoa2VybmVsLCB0aHJlc2hvbGRzLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhyZXNob2xkcy5tYXAodCA9PiBbdCwgZDMubWVhbihkYXRhLCBkID0+IGtlcm5lbCh0IC0gZCkpXSk7XG4gICAgfTtcbiAgICBjb25zdCBlcGFuZWNobmlrb3YgPSAoYmFuZHdpZHRoKSA9PiB7XG4gICAgICByZXR1cm4geCA9PiBNYXRoLmFicyh4IC89IGJhbmR3aWR0aCkgPD0gMSA/IDAuNzUgKiAoMSAtIHggKiB4KSAvIGJhbmR3aWR0aCA6IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbnNpdHkgPSBrZGUoZXBhbmVjaG5pa292KHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLmJhbmR3aWR0aCksIHRocmVzaG9sZHMsIGRhdGFWYWx1ZXMpO1xuXG4gICAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZW5zaXR5JywgZGVuc2l0eSk7XG4gICAgY29uc29sZS5sb2coJ2JpbnMnLCBiaW5zKTtcblxuICAgIC8vIERSQVcgQ0hBUlRcbiAgICBjb25zdCBjaGFydFNWRyA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ3N2ZycpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdDb3VudHJ5UmFua2luZ1N0cmlwcycpO1xuXG4gICAgLy8gYWRkIGF4aXNcbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy14JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIGF4aXMteCcpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgICAgLnRpY2tWYWx1ZXMoeFNjYWxlLmRvbWFpbigpKVxuICAgICAgICAgIC8vIC50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy54VGlja3MpXG4gICAgICAgICAgLy8gLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdClcbiAgICAgICk7XG5cbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy15JylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cHJvcHMubWFyZ2luLmxlZnR9LDApYClcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkudGlja3MobnVsbCwgJyUnKSlcbiAgICAgIC5jYWxsKGcgPT4gZy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKSk7XG5cbiAgICAvLyBhZGQgZGlzdHJpYnV0aW9uIHBhdGhcblxuICAgIGNvbnN0IHBsb3QgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cucGxvdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAncGxvdCcpO1xuXG4gICAgY29uc3QgcnVncyA9IHBsb3QuYXBwZW5kKCdnJykuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgIC5kYXRhKGRhdGEpO1xuICAgIHJ1Z3MuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgJHtkLmtleX1gKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHhTY2FsZShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCd5JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSAtIDI0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDI0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMSlcbiAgICAgIC5zdHlsZSgnbWl4LWJsZW5kLW1vZGUnLCAnbXVsdGlwbHknKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIDEpXG4gICAgICAuYXR0cignZmlsbCcsICdvcmFuZ2UnKTtcblxuICAgIC8vIGNvbnN0IGRpc3RQYXRoID0gcGxvdC5zZWxlY3RBbGwoJ3BhdGgnKTtcblxuICAgIHBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdmaWxsJywgJyNiYmInKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShiaW5zKVxuICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHhTY2FsZShkLngwKSArIDEpXG4gICAgICAuYXR0cigneScsIGQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkLmxlbmd0aCwgZGF0YS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4geFNjYWxlKGQueDEpIC0geFNjYWxlKGQueDApIC0gMSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IHlTY2FsZSgwKSAtIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKSk7XG5cbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5hcmVhJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkaXN0cmlidXRpb24tYXJlYScpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZmlsbCcsICdvcmFuZ2UnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKTtcblxuICAgIGNvbnNvbGUubG9nKCdhcmVhJywgZDMucG9seWdvbkFyZWEoKGRlbnNpdHkpKSk7XG5cbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5saW5lJylcbiAgICAgIC5kYXR1bShkZW5zaXR5KVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZWQnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEuNSlcbiAgICAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25MaW5lKTtcblxuICAgIC8vIEhJR0hMSUdIVCBEQVRBIFBPTlRcbiAgICAvLyBjb25zdCBwb2ludFBhdGhcbiAgICAvLyBjb25zdCBiaW5XaWR0aCA9XG4gICAgY29uc3QgZGF0YUhpZ2hsaWdodCA9IGJpbnMuZmluZChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LmluY2x1ZGVzKDYuMjk2MDg2MjE2Njc2MTIwNSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhrZGUoZXBhbmVjaG5pa292KHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLmJhbmR3aWR0aCksIHRocmVzaG9sZHMsIGRhdGFIaWdobGlnaHQpKTtcblxuICAgIGNvbnN0IHBhdGhIaWdobGlnaHQgPSAoZCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW3hTY2FsZShkLngwKSwgeVNjYWxlKDApXSxcbiAgICAgICAgW3hTY2FsZShkLngwKSwgeVNjYWxlKDMpXSxcbiAgICAgICAgW3hTY2FsZShkLngxKSwgeVNjYWxlKDMpXSxcbiAgICAgICAgW3hTY2FsZShkLngxKSwgeVNjYWxlKDApXSxcbiAgICAgIF07XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhwYXRoSGlnaGxpZ2h0KGRhdGFIaWdobGlnaHQpKTtcbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5hcmVhLWhpZ2hsaWdodCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJlYS1oaWdobGlnaHQnKVxuICAgICAgLmRhdHVtKHBhdGhIaWdobGlnaHQoZGF0YUhpZ2hsaWdodCkpXG4gICAgICAuYXR0cignZmlsbCcsICdyZWQnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlSYW5raW5nU3RyaXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})