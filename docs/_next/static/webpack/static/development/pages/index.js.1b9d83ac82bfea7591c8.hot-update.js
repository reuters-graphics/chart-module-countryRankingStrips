webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 25,\n        xTicks: 5\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      });\n      console.log(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues));\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom - 24, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues);\n      console.log(kde(epanechnikov(props.distributionProps.bandwidth), thresholds, [1.1619958988380041]));\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(xScale.domain()) // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var rugs = plot.append('g').selectAll('rect').data(data);\n      rugs.enter().append('rect').attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.height - props.margin.bottom - 24).attr('height', 24).attr('width', 1).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // const distPath = plot.selectAll('path');\n\n      plot.append('g').attr('fill', '#bbb').selectAll('rect').data(bins).join('rect').attr('x', function (d) {\n        return xScale(d.x0) + 1;\n      }).attr('y', function (d) {\n        console.log(d.length, data.length);\n        return yScale(d.length / data.length);\n      }).attr('width', function (d) {\n        return xScale(d.x1) - xScale(d.x0) - 1;\n      }).attr('height', function (d) {\n        return yScale(0) - yScale(d.length / data.length);\n      });\n      plot.appendSelect('path.area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine);\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJleHRlbnQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm5pY2UiLCJyYW5nZSIsInRocmVzaG9sZHMiLCJ0aWNrcyIsImJpbnMiLCJoaXN0b2dyYW0iLCJ5U2NhbGUiLCJtYXgiLCJsZW5ndGgiLCJkaXN0cmlidXRpb25MaW5lIiwibGluZSIsImN1cnZlIiwiY3VydmVCYXNpcyIsIngiLCJ5IiwiZGlzdHJpYnV0aW9uQXJlYSIsImFyZWEiLCJ5MSIsInkwIiwia2RlIiwia2VybmVsIiwidCIsIm1lYW4iLCJlcGFuZWNobmlrb3YiLCJNYXRoIiwiYWJzIiwiZGVuc2l0eSIsImNoYXJ0U1ZHIiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1ZhbHVlcyIsInBsb3QiLCJydWdzIiwiYXBwZW5kIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJzdHlsZSIsImpvaW4iLCJ4MCIsIngxIiwiZGF0dW0iLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNi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b25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuXG5jbGFzcyBDb3VudHJ5UmFua2luZ1N0cmlwcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBkYXRhUGFyYW1zOiB7XG4gICAgICBrZXk6ICdrZXknLFxuICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBkaXN0cmlidXRpb25Qcm9wczoge1xuICAgICAgYmFuZHdpZHRoOiAwLjUsXG4gICAgICB0aHJlc2hvbGQ6IDI1LFxuICAgICAgeFRpY2tzOiA1LFxuICAgIH0sXG4gICAgaGVpZ2h0OiAyNTAsXG4gICAgbWFyZ2luOiB7XG4gICAgICB0b3A6IDIwLFxuICAgICAgcmlnaHQ6IDIwLFxuICAgICAgYm90dG9tOiAyMCxcbiAgICAgIGxlZnQ6IDIwLFxuICAgIH0sXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICAvLyBERUZJTkUgU0NBTEVTXG4gICAgY29uc3QgZGF0YVZhbHVlcyA9IGRhdGEubWFwKGQgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLnZhbHVlXSk7XG4gICAgY29uc29sZS5sb2coZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKTtcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhVmFsdWVzKSkubmljZSgpXG4gICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pO1xuXG4gICAgY29uc3QgdGhyZXNob2xkcyA9IHhTY2FsZS50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy50aHJlc2hvbGQpO1xuICAgIGNvbnN0IGJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgLmRvbWFpbih4U2NhbGUuZG9tYWluKCkpXG4gICAgICAudGhyZXNob2xkcyh0aHJlc2hvbGRzKShkYXRhVmFsdWVzKTtcblxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChiaW5zLCBkID0+IGQubGVuZ3RoKSAvIGRhdGEubGVuZ3RoXSlcbiAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSAtIDI0LCBwcm9wcy5tYXJnaW4udG9wXSk7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb25MaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVCYXNpcylcbiAgICAgIC54KGQgPT4geFNjYWxlKGRbMF0pKVxuICAgICAgLnkoZCA9PiB5U2NhbGUoZFsxXSkpO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uQXJlYSA9IGQzLmFyZWEoKVxuICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55MShkID0+IHlTY2FsZShkWzFdKSlcbiAgICAgIC55MChkID0+IHlTY2FsZSgwKSk7XG5cbiAgICAvLyBESVNUUklCVVRJT04gTUFUSFxuICAgIGNvbnN0IGtkZSA9IChrZXJuZWwsIHRocmVzaG9sZHMsIGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aHJlc2hvbGRzLm1hcCh0ID0+IFt0LCBkMy5tZWFuKGRhdGEsIGQgPT4ga2VybmVsKHQgLSBkKSldKTtcbiAgICB9O1xuICAgIGNvbnN0IGVwYW5lY2huaWtvdiA9IChiYW5kd2lkdGgpID0+IHtcbiAgICAgIHJldHVybiB4ID0+IE1hdGguYWJzKHggLz0gYmFuZHdpZHRoKSA8PSAxID8gMC43NSAqICgxIC0geCAqIHgpIC8gYmFuZHdpZHRoIDogMDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVuc2l0eSA9IGtkZShlcGFuZWNobmlrb3YocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuYmFuZHdpZHRoKSwgdGhyZXNob2xkcywgZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zb2xlLmxvZyhrZGUoZXBhbmVjaG5pa292KHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLmJhbmR3aWR0aCksIHRocmVzaG9sZHMsIFsxLjE2MTk5NTg5ODgzODAwNDFdKSk7XG5cbiAgICBjb25zb2xlLmxvZygnZGVuc2l0eScsIGRlbnNpdHkpO1xuICAgIGNvbnNvbGUubG9nKCdiaW5zJywgYmlucyk7XG5cbiAgICAvLyBEUkFXIENIQVJUXG4gICAgY29uc3QgY2hhcnRTVkcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnQ291bnRyeVJhbmtpbmdTdHJpcHMnKTtcblxuICAgIC8vIGFkZCBheGlzXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyBheGlzLXgnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAgIC50aWNrVmFsdWVzKHhTY2FsZS5kb21haW4oKSlcbiAgICAgICAgICAvLyAudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMueFRpY2tzKVxuICAgICAgICAgIC8vIC50aWNrRm9ybWF0KGRhdGVGb3JtYXQpXG4gICAgICApO1xuXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteScpO1xuXG4gICAgLy8gYWRkIGRpc3RyaWJ1dGlvbiBwYXRoXG5cbiAgICBjb25zdCBwbG90ID0gY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLnBsb3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Bsb3QnKTtcblxuICAgIGNvbnN0IHJ1Z3MgPSBwbG90LmFwcGVuZCgnZycpLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShkYXRhKTtcbiAgICBydWdzLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneScsIHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSAyNClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAyNClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEpXG4gICAgICAuc3R5bGUoJ21peC1ibGVuZC1tb2RlJywgJ211bHRpcGx5JylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAxKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnb3JhbmdlJyk7XG5cbiAgICAvLyBjb25zdCBkaXN0UGF0aCA9IHBsb3Quc2VsZWN0QWxsKCdwYXRoJyk7XG5cbiAgICBwbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignZmlsbCcsICcjYmJiJylcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoYmlucylcbiAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC54MCkgKyAxKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZC5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZShkLngxKSAtIHhTY2FsZShkLngwKSAtIDEpXG4gICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB5U2NhbGUoMCkgLSB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCkpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGguYXJlYScpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZmlsbCcsICdvcmFuZ2UnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmxpbmUnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMS41KVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkxpbmUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeVJhbmtpbmdTdHJpcHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})