webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 1,\n        xTicks: 10\n      },\n      height: 200,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data, function (d) {\n        return d[props.dataParams.value];\n      })).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.xTicks);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(data);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, data);\n      console.log(density); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axs-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var distPath = plot.selectAll('path').datum(density);\n      distPath.enter().append('path').attr('fill', 'none').attr('stroke', '#000').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine).merge(distPath).transition(transition).attr('d', distributionLine);\n      distPath.exit().transition(transition).remove(); // const circles = g.selectAll('circle')\n      //   .data(data, (d, i) => i);\n      // circles\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke);\n      // circles.enter().append('circle')\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke)\n      //   .style('stroke-width', props.strokeWidth)\n      //   .attr('cy', props.height / 2)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .merge(circles)\n      //   .transition(transition)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .attr('r', d => d / 2);\n      // circles.exit()\n      //   .transition(transition)\n      //   .attr('r', 0)\n      //   .remove();\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsImV4dGVudCIsImQiLCJuaWNlIiwicmFuZ2UiLCJ0aHJlc2hvbGRzIiwidGlja3MiLCJiaW5zIiwiaGlzdG9ncmFtIiwieVNjYWxlIiwibWF4IiwibGVuZ3RoIiwiZGlzdHJpYnV0aW9uTGluZSIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlQmFzaXMiLCJ4IiwieSIsImtkZSIsImtlcm5lbCIsIm1hcCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsImRpc3RQYXRoIiwic2VsZWN0QWxsIiwiZGF0dW0iLCJlbnRlciIsImFwcGVuZCIsIm1lcmdlIiwiZXhpdCIsInJlbW92ZSIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLG9COzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLFlBQU0sRUFBRSxJQURLO0FBRWJDLGdCQUFVLEVBQUU7QUFDVkMsV0FBRyxFQUFFLEtBREs7QUFF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TjtBQVVBd0IsY0FBUSxDQUFDQyxZQUFULENBQXNCLFVBQXRCLEVBN0RLLENBK0RMOztBQUVBLFVBQU1LLElBQUksR0FBR04sUUFBUSxDQUFDQyxZQUFULENBQXNCLFFBQXRCLEVBQ1ZDLElBRFUsQ0FDTCxPQURLLEVBQ0ksTUFESixDQUFiO0FBR0EsVUFBTUssUUFBUSxHQUFHRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxNQUFmLEVBQ2RDLEtBRGMsQ0FDUlosT0FEUSxDQUFqQjtBQUdBVSxjQUFRLENBQUNHLEtBQVQsR0FBaUJDLE1BQWpCLENBQXdCLE1BQXhCLEVBQ0dULElBREgsQ0FDUSxNQURSLEVBQ2dCLE1BRGhCLEVBRUdBLElBRkgsQ0FFUSxRQUZSLEVBRWtCLE1BRmxCLEVBR0dBLElBSEgsQ0FHUSxjQUhSLEVBR3dCLEdBSHhCLEVBSUdBLElBSkgsQ0FJUSxpQkFKUixFQUkyQixPQUozQixFQUtHQSxJQUxILENBS1EsR0FMUixFQUthbkIsZ0JBTGIsRUFNRzZCLEtBTkgsQ0FNU0wsUUFOVCxFQU9HekMsVUFQSCxDQU9jQSxVQVBkLEVBUUdvQyxJQVJILENBUVEsR0FSUixFQVFhbkIsZ0JBUmI7QUFVQXdCLGNBQVEsQ0FBQ00sSUFBVCxHQUFnQi9DLFVBQWhCLENBQTJCQSxVQUEzQixFQUF1Q2dELE1BQXZDLEdBakZLLENBbUZMO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFySWdDQyw0RDs7QUF3SXBCdEUsbUZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuY2xhc3MgQ291bnRyeVJhbmtpbmdTdHJpcHMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgZGF0YVBhcmFtczoge1xuICAgICAga2V5OiAna2V5JyxcbiAgICAgIHZhbHVlOiAndmFsdWUnLFxuICAgIH0sXG4gICAgZGlzdHJpYnV0aW9uUHJvcHM6IHtcbiAgICAgIGJhbmR3aWR0aDogMSxcbiAgICAgIHhUaWNrczogMTAsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhLCBkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pKS5uaWNlKClcbiAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSk7XG5cbiAgICBjb25zdCB0aHJlc2hvbGRzID0geFNjYWxlLnRpY2tzKHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLnhUaWNrcyk7XG4gICAgY29uc3QgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAuZG9tYWluKHhTY2FsZS5kb21haW4oKSlcbiAgICAgIC50aHJlc2hvbGRzKHRocmVzaG9sZHMpKGRhdGEpO1xuXG5cblxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChiaW5zLCBkID0+IGQubGVuZ3RoKSAvIGRhdGEubGVuZ3RoXSlcbiAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uTGluZSA9IGQzLmxpbmUoKVxuICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55KGQgPT4geVNjYWxlKGRbMV0pKTtcblxuICAgIC8vIERJU1RSSUJVVElPTiBNQVRIXG4gICAgY29uc3Qga2RlID0gKGtlcm5lbCwgdGhyZXNob2xkcywgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHMubWFwKHQgPT4gW3QsIGQzLm1lYW4oZGF0YSwgZCA9PiBrZXJuZWwodCAtIGQpKV0pO1xuICAgIH07XG4gICAgY29uc3QgZXBhbmVjaG5pa292ID0gKGJhbmR3aWR0aCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT4gTWF0aC5hYnMoeCAvPSBiYW5kd2lkdGgpIDw9IDEgPyAwLjc1ICogKDEgLSB4ICogeCkgLyBiYW5kd2lkdGggOiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBkZW5zaXR5ID0ga2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBkYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkpO1xuXG4gICAgLy8gRFJBVyBDSEFSVFxuICAgIGNvbnN0IGNoYXJ0U1ZHID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ0NvdW50cnlSYW5raW5nU3RyaXBzJyk7XG5cbiAgICAvLyBhZGQgYXhpc1xuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhzLXgnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAgIC50aWNrVmFsdWVzKHRocmVzaG9sZHMpXG4gICAgICAgICAgLy8gLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdClcbiAgICAgICk7XG5cbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy15Jyk7XG5cbiAgICAvLyBhZGQgZGlzdHJpYnV0aW9uIHBhdGhcbiAgICBcbiAgICBjb25zdCBwbG90ID0gY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLnBsb3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Bsb3QnKTtcblxuICAgIGNvbnN0IGRpc3RQYXRoID0gcGxvdC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpO1xuXG4gICAgZGlzdFBhdGguZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyMwMDAnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDEuNSlcbiAgICAgIC5hdHRyKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25MaW5lKVxuICAgICAgLm1lcmdlKGRpc3RQYXRoKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICBkaXN0UGF0aC5leGl0KCkudHJhbnNpdGlvbih0cmFuc2l0aW9uKS5yZW1vdmUoKTtcblxuICAgIC8vIGNvbnN0IGNpcmNsZXMgPSBnLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAvLyAgIC5kYXRhKGRhdGEsIChkLCBpKSA9PiBpKTtcblxuICAgIC8vIGNpcmNsZXNcbiAgICAvLyAgIC5zdHlsZSgnZmlsbCcsIHByb3BzLmZpbGwpXG4gICAgLy8gICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLnN0cm9rZSk7XG5cbiAgICAvLyBjaXJjbGVzLmVudGVyKCkuYXBwZW5kKCdjaXJjbGUnKVxuICAgIC8vICAgLnN0eWxlKCdmaWxsJywgcHJvcHMuZmlsbClcbiAgICAvLyAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMuc3Ryb2tlKVxuICAgIC8vICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBwcm9wcy5zdHJva2VXaWR0aClcbiAgICAvLyAgIC5hdHRyKCdjeScsIHByb3BzLmhlaWdodCAvIDIpXG4gICAgLy8gICAuYXR0cignY3gnLCAoZCwgaSkgPT5cbiAgICAvLyAgICAgZGF0YS5zbGljZSgwLCBpKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSArIChkIC8gMilcbiAgICAvLyAgIClcbiAgICAvLyAgIC5tZXJnZShjaXJjbGVzKVxuICAgIC8vICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAvLyAgIC5hdHRyKCdjeCcsIChkLCBpKSA9PlxuICAgIC8vICAgICBkYXRhLnNsaWNlKDAsIGkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApICsgKGQgLyAyKVxuICAgIC8vICAgKVxuICAgIC8vICAgLmF0dHIoJ3InLCBkID0+IGQgLyAyKTtcblxuICAgIC8vIGNpcmNsZXMuZXhpdCgpXG4gICAgLy8gICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgIC8vICAgLmF0dHIoJ3InLCAwKVxuICAgIC8vICAgLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeVJhbmtpbmdTdHJpcHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})