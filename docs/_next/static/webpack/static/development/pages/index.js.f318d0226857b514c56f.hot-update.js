webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 7,\n        xTicks: 10\n      },\n      height: 200,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      });\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.xTicks);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues);\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axs-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot'); // const rugs = plot.selectAll('rect')\n      //   .data(data);\n      // rugs.enter().append('rect')\n      //   .attr('x', d => xScale(d.value))\n      //   .attr('y', props.height - 100)\n      //   .attr('height', 24)\n      //   .attr('width', 2)\n      //   .style('mix-blend-mode', 'multiply')\n      //   .attr('stroke', 1)\n      //   .attr('fill', 'orange');\n      // const distPath = plot.selectAll('path');\n\n      plot.append('g').attr('fill', '#bbb').selectAll('rect').data(bins).join('rect').attr('x', function (d) {\n        return xScale(d.x0) + 1;\n      }).attr('y', function (d) {\n        console.log(d.length, data.length);\n        return yScale(d.length / data.length);\n      }).attr('width', function (d) {\n        return xScale(d.x1) - xScale(d.x0) - 1;\n      }).attr('height', function (d) {\n        return yScale(0) - yScale(d.length / data.length);\n      });\n      plot.appendSelect('path').datum(density).attr('fill', 'none').attr('stroke', '#000').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine);\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJ0aHJlc2hvbGRzIiwidGlja3MiLCJiaW5zIiwiaGlzdG9ncmFtIiwieVNjYWxlIiwibWF4IiwibGVuZ3RoIiwiZGlzdHJpYnV0aW9uTGluZSIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlQmFzaXMiLCJ4IiwieSIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsImFwcGVuZCIsInNlbGVjdEFsbCIsImpvaW4iLCJ4MCIsIngxIiwiZGF0dW0iLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxZQUFNLEVBQUUsSUFESztBQUViQyxnQkFBVSxFQUFFO0FBQ1ZDLFdBQUcsRUFBRSxLQURLO0FBRVZDLGFBQUssRUFBRTtBQUZHLE9B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QUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUNWLENBQUMsQ0FBQ1ksTUFBRixHQUFXdkIsSUFBSSxDQUFDdUIsTUFBakIsQ0FBdEI7QUFBQSxPQVhuQjtBQWFFdUIsVUFBSSxDQUFDTCxZQUFMLENBQWtCLE1BQWxCLEVBQ0NXLEtBREQsQ0FDT2YsT0FEUCxFQUVDSyxJQUZELENBRU0sTUFGTixFQUVjLE1BRmQsRUFHQ0EsSUFIRCxDQUdNLFFBSE4sRUFHZ0IsTUFIaEIsRUFJQ0EsSUFKRCxDQUlNLGNBSk4sRUFJc0IsR0FKdEIsRUFLQ0EsSUFMRCxDQUtNLGlCQUxOLEVBS3lCLE9BTHpCLEVBTUNBLElBTkQsQ0FNTSxHQU5OLEVBTVdsQixnQkFOWDtBQVFGLGFBQU8sSUFBUDtBQUNEOzs7O0VBOUhnQzZCLDREOztBQWlJcEJwRSxtRkFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuXG5jbGFzcyBDb3VudHJ5UmFua2luZ1N0cmlwcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBkYXRhUGFyYW1zOiB7XG4gICAgICBrZXk6ICdrZXknLFxuICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBkaXN0cmlidXRpb25Qcm9wczoge1xuICAgICAgYmFuZHdpZHRoOiA3LFxuICAgICAgeFRpY2tzOiAxMCxcbiAgICB9LFxuICAgIGhlaWdodDogMjAwLFxuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvdHRvbTogMjAsXG4gICAgICBsZWZ0OiAyMCxcbiAgICB9LFxuICB9O1xuXG4gIGRlZmF1bHREYXRhID0gZGVmYXVsdERhdGE7XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkMy50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApO1xuXG4gICAgLy8gREVGSU5FIFNDQUxFU1xuICAgIGNvbnN0IGRhdGFWYWx1ZXMgPSBkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pO1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKVxuICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKTtcblxuICAgIGNvbnN0IHRocmVzaG9sZHMgPSB4U2NhbGUudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMueFRpY2tzKTtcbiAgICBjb25zdCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgIC5kb21haW4oeFNjYWxlLmRvbWFpbigpKVxuICAgICAgLnRocmVzaG9sZHModGhyZXNob2xkcykoZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYmlucywgZCA9PiBkLmxlbmd0aCkgLyBkYXRhLmxlbmd0aF0pXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueShkID0+IHlTY2FsZShkWzFdKSk7XG5cbiAgICAvLyBESVNUUklCVVRJT04gTUFUSFxuICAgIGNvbnN0IGtkZSA9IChrZXJuZWwsIHRocmVzaG9sZHMsIGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aHJlc2hvbGRzLm1hcCh0ID0+IFt0LCBkMy5tZWFuKGRhdGEsIGQgPT4ga2VybmVsKHQgLSBkKSldKTtcbiAgICB9O1xuICAgIGNvbnN0IGVwYW5lY2huaWtvdiA9IChiYW5kd2lkdGgpID0+IHtcbiAgICAgIHJldHVybiB4ID0+IE1hdGguYWJzKHggLz0gYmFuZHdpZHRoKSA8PSAxID8gMC43NSAqICgxIC0geCAqIHgpIC8gYmFuZHdpZHRoIDogMDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVuc2l0eSA9IGtkZShlcGFuZWNobmlrb3YocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuYmFuZHdpZHRoKSwgdGhyZXNob2xkcywgZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zb2xlLmxvZygnZGVuc2l0eScsIGRlbnNpdHkpO1xuICAgIGNvbnNvbGUubG9nKCdiaW5zJywgYmlucyk7XG5cbiAgICAvLyBEUkFXIENIQVJUXG4gICAgY29uc3QgY2hhcnRTVkcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnQ291bnRyeVJhbmtpbmdTdHJpcHMnKTtcblxuICAgIC8vIGFkZCBheGlzXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyBheHMteCcpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgICAgLnRpY2tWYWx1ZXModGhyZXNob2xkcylcbiAgICAgICAgICAvLyAudGlja0Zvcm1hdChkYXRlRm9ybWF0KVxuICAgICAgKTtcblxuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXknKTtcblxuICAgIC8vIGFkZCBkaXN0cmlidXRpb24gcGF0aFxuXG4gICAgY29uc3QgcGxvdCA9IGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5wbG90JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdwbG90Jyk7XG5cbiAgICAvLyBjb25zdCBydWdzID0gcGxvdC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgIC8vICAgLmRhdGEoZGF0YSk7XG4gICAgLy8gcnVncy5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gICAgLy8gICAuYXR0cigneCcsIGQgPT4geFNjYWxlKGQudmFsdWUpKVxuICAgIC8vICAgLmF0dHIoJ3knLCBwcm9wcy5oZWlnaHQgLSAxMDApXG4gICAgLy8gICAuYXR0cignaGVpZ2h0JywgMjQpXG4gICAgLy8gICAuYXR0cignd2lkdGgnLCAyKVxuICAgIC8vICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gY29uc3QgZGlzdFBhdGggPSBwbG90LnNlbGVjdEFsbCgncGF0aCcpO1xuXG5cbiAgICBwbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignZmlsbCcsICcjYmJiJylcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoYmlucylcbiAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC54MCkgKyAxKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZC5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZShkLngxKSAtIHhTY2FsZShkLngwKSAtIDEpXG4gICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB5U2NhbGUoMCkgLSB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCkpO1xuXG4gICAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aCcpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxLjUpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UmFua2luZ1N0cmlwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})