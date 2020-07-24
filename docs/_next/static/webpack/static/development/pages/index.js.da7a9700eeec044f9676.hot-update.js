webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 1,\n        xTicks: 10\n      },\n      height: 200,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.xTicks);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, data); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axs-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var distPath = plot.selectAll('path').datum(density);\n      distPath.enter().append('path'); // const circles = g.selectAll('circle')\n      //   .data(data, (d, i) => i);\n      // circles\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke);\n      // circles.enter().append('circle')\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke)\n      //   .style('stroke-width', props.strokeWidth)\n      //   .attr('cy', props.height / 2)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .merge(circles)\n      //   .transition(transition)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .attr('r', d => d / 2);\n      // circles.exit()\n      //   .transition(transition)\n      //   .attr('r', 0)\n      //   .remove();\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsImV4dGVudCIsIm5pY2UiLCJyYW5nZSIsInRocmVzaG9sZHMiLCJ0aWNrcyIsImJpbnMiLCJoaXN0b2dyYW0iLCJ5U2NhbGUiLCJtYXgiLCJkIiwibGVuZ3RoIiwiZGlzdHJpYnV0aW9uTGluZSIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlQmFzaXMiLCJ4IiwieSIsImtkZSIsImtlcm5lbCIsIm1hcCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjaGFydFNWRyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tWYWx1ZXMiLCJwbG90IiwiZGlzdFBhdGgiLCJzZWxlY3RBbGwiLCJkYXR1bSIsImVudGVyIiwiYXBwZW5kIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsWUFBTSxFQUFFLElBREs7QUFFYkMsZ0JBQVUsRUFBRTtBQUNWQyxXQUFHLEVBQUUsS0FESztBQUVWQyxhQUFLLEVBQUU7QUFGRyxPQUZDO0FBTWJDLHVCQUFpQixFQUFFO0FBQ2pCQyxpQkFBUyxFQUFFLENBRE07QUFFakJDLGNBQU0sRUFBRTtBQUZTLE9BTk47QUFVYkMsWUFBTSxFQUFFLEdBVks7QUFXYkMsWUFBTSxFQUFFO0FBQ05DLFdBQUcsRUFBRSxFQURDO0FBRU5DLGFBQUssRUFBRSxFQUZEO0FBR05DLGNBQU0sRUFBRSxFQUhGO0FBSU5DLFlBQUksRUFBRTtBQUpBO0FBWEssSzs7c05BbUJEQyw4Qzs7Ozs7OzsyQkFFUDtBQUNMLFVBQU1DLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS0EsS0FBTCxFQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLFNBQUwsR0FBaUJELElBQWpCLEVBQWI7O0FBSEssa0NBS2FBLElBQUksQ0FBQ0UscUJBQUwsRUFMYjtBQUFBLFVBS0dDLEtBTEgseUJBS0dBLEtBTEg7O0FBT0wsVUFBTUMsVUFBVSxHQUFHQyxpREFBRSxDQUFDRCxVQUFILEdBQ2hCRSxRQURnQixDQUNQLEdBRE8sQ0FBbkIsQ0FQSyxDQVVMOztBQUNBLFVBQU1DLE1BQU0sR0FBR0YsaURBQUUsQ0FBQ0csV0FBSCxHQUNaQyxNQURZLENBQ0xKLGlEQUFFLENBQUNLLE1BQUgsQ0FBVVosSUFBVixDQURLLEVBQ1lhLElBRFosR0FFWkMsS0FGWSxDQUVOLENBQUNiLEtBQUssQ0FBQ1AsTUFBTixDQUFhSSxJQUFkLEVBQW9CTyxLQUFLLEdBQUdKLEtBQUssQ0FBQ1AsTUFBTixDQUFhRSxLQUF6QyxDQUZNLENBQWY7QUFJQSxVQUFNbUIsVUFBVSxHQUFHTixNQUFNLENBQUNPLEtBQVAsQ0FBYWYsS0FBSyxDQUFDWCxpQkFBTixDQUF3QkUsTUFBckMsQ0FBbkI7QUFDQSxVQUFNeUIsSUFBSSxHQUFHVixpREFBRSxDQUFDVyxTQUFILEdBQ1ZQLE1BRFUsQ0FDSEYsTUFBTSxDQUFDRSxNQUFQLEVBREcsRUFFVkksVUFGVSxDQUVDQSxVQUZELENBQWI7QUFJQSxVQUFNSSxNQUFNLEdBQUdaLGlEQUFFLENBQUNHLFdBQUgsR0FDWkMsTUFEWSxDQUNMLENBQUMsQ0FBRCxFQUFJSixpREFBRSxDQUFDYSxHQUFILENBQU9ILElBQVAsRUFBYSxVQUFBSSxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxNQUFOO0FBQUEsT0FBZCxJQUE4QnRCLElBQUksQ0FBQ3NCLE1BQXZDLENBREssRUFFWlIsS0FGWSxDQUVOLENBQUNiLEtBQUssQ0FBQ1IsTUFBTixHQUFlUSxLQUFLLENBQUNQLE1BQU4sQ0FBYUcsTUFBN0IsRUFBcUNJLEtBQUssQ0FBQ1AsTUFBTixDQUFhQyxHQUFsRCxDQUZNLENBQWY7QUFJQSxVQUFNNEIsZ0JBQWdCLEdBQUdoQixpREFBRSxDQUFDaUIsSUFBSCxHQUN0QkMsS0FEc0IsQ0FDaEJsQixpREFBRSxDQUFDbUIsVUFEYSxFQUV0QkMsQ0FGc0IsQ0FFcEIsVUFBQU4sQ0FBQztBQUFBLGVBQUlaLE1BQU0sQ0FBQ1ksQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFWO0FBQUEsT0FGbUIsRUFHdEJPLENBSHNCLENBR3BCLFVBQUFQLENBQUM7QUFBQSxlQUFJRixNQUFNLENBQUNFLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVjtBQUFBLE9BSG1CLENBQXpCLENBeEJLLENBNkJMOztBQUNBLFVBQU1RLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLE1BQUQsRUFBU2YsVUFBVCxFQUFxQmYsSUFBckIsRUFBOEI7QUFDeEMsZUFBT2UsVUFBVSxDQUFDZ0IsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSxpQkFBSSxDQUFDQSxDQUFELEVBQUl6QixpREFBRSxDQUFDMEIsSUFBSCxDQUFRakMsSUFBUixFQUFjLFVBQUFxQixDQUFDO0FBQUEsbUJBQUlTLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHWCxDQUFMLENBQVY7QUFBQSxXQUFmLENBQUosQ0FBSjtBQUFBLFNBQWhCLENBQVA7QUFDRCxPQUZEOztBQUdBLFVBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUMzQyxTQUFELEVBQWU7QUFDbEMsZUFBTyxVQUFBb0MsQ0FBQztBQUFBLGlCQUFJUSxJQUFJLENBQUNDLEdBQUwsQ0FBU1QsQ0FBQyxJQUFJcEMsU0FBZCxLQUE0QixDQUE1QixHQUFnQyxRQUFRLElBQUlvQyxDQUFDLEdBQUdBLENBQWhCLElBQXFCcEMsU0FBckQsR0FBaUUsQ0FBckU7QUFBQSxTQUFSO0FBQ0QsT0FGRDs7QUFJQSxVQUFNOEMsT0FBTyxHQUFHUixHQUFHLENBQUNLLFlBQVksQ0FBQ2pDLEtBQUssQ0FBQ1gsaUJBQU4sQ0FBd0JDLFNBQXpCLENBQWIsRUFBa0R3QixVQUFsRCxFQUE4RGYsSUFBOUQsQ0FBbkIsQ0FyQ0ssQ0F1Q0w7O0FBQ0EsVUFBTXNDLFFBQVEsR0FBRyxLQUFLbkMsU0FBTCxHQUNkb0MsWUFEYyxDQUNELEtBREMsRUFDTTtBQUROLE9BRWRDLElBRmMsQ0FFVCxPQUZTLEVBRUFuQyxLQUZBLEVBR2RtQyxJQUhjLENBR1QsUUFIUyxFQUdDdkMsS0FBSyxDQUFDUixNQUhQLEVBSWQrQyxJQUpjLENBSVQsT0FKUyxFQUlBLHNCQUpBLENBQWpCLENBeENLLENBOENMOztBQUNBRixjQUFRLENBQUNDLFlBQVQsQ0FBc0IsVUFBdEIsRUFDR0MsSUFESCxDQUNRLE9BRFIsRUFDaUIsWUFEakIsRUFFR2xDLFVBRkgsQ0FFY0EsVUFGZCxFQUdHa0MsSUFISCxDQUdRLFdBSFIsd0JBR29DdkMsS0FBSyxDQUFDUixNQUFOLEdBQWVRLEtBQUssQ0FBQ1AsTUFBTixDQUFhRyxNQUhoRSxRQUlHNEMsSUFKSCxDQUtJbEMsaURBQUUsQ0FBQ21DLFVBQUgsQ0FBY2pDLE1BQWQsRUFDR2tDLFVBREgsQ0FDYzVCLFVBRGQsQ0FMSixDQU9NO0FBUE47QUFVQXVCLGNBQVEsQ0FBQ0MsWUFBVCxDQUFzQixVQUF0QixFQXpESyxDQTJETDs7QUFDQSxVQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQixRQUF0QixFQUNWQyxJQURVLENBQ0wsT0FESyxFQUNJLE1BREosQ0FBYjtBQUdBLFVBQU1LLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsTUFBZixFQUNkQyxLQURjLENBQ1JWLE9BRFEsQ0FBakI7QUFHQVEsY0FBUSxDQUFDRyxLQUFULEdBQWlCQyxNQUFqQixDQUF3QixNQUF4QixFQWxFSyxDQXFFTDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBdkhnQ0MsNEQ7O0FBMEhwQmpFLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDEsXG4gICAgICB4VGlja3M6IDEwLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgbWFyZ2luOiB7XG4gICAgICB0b3A6IDIwLFxuICAgICAgcmlnaHQ6IDIwLFxuICAgICAgYm90dG9tOiAyMCxcbiAgICAgIGxlZnQ6IDIwLFxuICAgIH0sXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICAvLyBERUZJTkUgU0NBTEVTXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSkpLm5pY2UoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKTtcblxuICAgIGNvbnN0IHRocmVzaG9sZHMgPSB4U2NhbGUudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMueFRpY2tzKTtcbiAgICBjb25zdCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgIC5kb21haW4oeFNjYWxlLmRvbWFpbigpKVxuICAgICAgLnRocmVzaG9sZHModGhyZXNob2xkcyk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYmlucywgZCA9PiBkLmxlbmd0aCkgLyBkYXRhLmxlbmd0aF0pXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueShkID0+IHlTY2FsZShkWzFdKSk7XG5cbiAgICAvLyBESVNUUklCVVRJT04gTUFUSFxuICAgIGNvbnN0IGtkZSA9IChrZXJuZWwsIHRocmVzaG9sZHMsIGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aHJlc2hvbGRzLm1hcCh0ID0+IFt0LCBkMy5tZWFuKGRhdGEsIGQgPT4ga2VybmVsKHQgLSBkKSldKTtcbiAgICB9O1xuICAgIGNvbnN0IGVwYW5lY2huaWtvdiA9IChiYW5kd2lkdGgpID0+IHtcbiAgICAgIHJldHVybiB4ID0+IE1hdGguYWJzKHggLz0gYmFuZHdpZHRoKSA8PSAxID8gMC43NSAqICgxIC0geCAqIHgpIC8gYmFuZHdpZHRoIDogMDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVuc2l0eSA9IGtkZShlcGFuZWNobmlrb3YocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuYmFuZHdpZHRoKSwgdGhyZXNob2xkcywgZGF0YSk7XG5cbiAgICAvLyBEUkFXIENIQVJUXG4gICAgY29uc3QgY2hhcnRTVkcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnQ291bnRyeVJhbmtpbmdTdHJpcHMnKTtcblxuICAgIC8vIGFkZCBheGlzXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyBheHMteCcpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgICAgLnRpY2tWYWx1ZXModGhyZXNob2xkcylcbiAgICAgICAgICAvLyAudGlja0Zvcm1hdChkYXRlRm9ybWF0KVxuICAgICAgKTtcblxuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXknKTtcblxuICAgIC8vIGFkZCBkaXN0cmlidXRpb24gcGF0aFxuICAgIGNvbnN0IHBsb3QgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cucGxvdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAncGxvdCcpO1xuXG4gICAgY29uc3QgZGlzdFBhdGggPSBwbG90LnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAuZGF0dW0oZGVuc2l0eSk7XG5cbiAgICBkaXN0UGF0aC5lbnRlcigpLmFwcGVuZCgncGF0aCcpO1xuXG5cbiAgICAvLyBjb25zdCBjaXJjbGVzID0gZy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgLy8gICAuZGF0YShkYXRhLCAoZCwgaSkgPT4gaSk7XG5cbiAgICAvLyBjaXJjbGVzXG4gICAgLy8gICAuc3R5bGUoJ2ZpbGwnLCBwcm9wcy5maWxsKVxuICAgIC8vICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpO1xuXG4gICAgLy8gY2lyY2xlcy5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcbiAgICAvLyAgIC5zdHlsZSgnZmlsbCcsIHByb3BzLmZpbGwpXG4gICAgLy8gICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLnN0cm9rZSlcbiAgICAvLyAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlV2lkdGgpXG4gICAgLy8gICAuYXR0cignY3knLCBwcm9wcy5oZWlnaHQgLyAyKVxuICAgIC8vICAgLmF0dHIoJ2N4JywgKGQsIGkpID0+XG4gICAgLy8gICAgIGRhdGEuc2xpY2UoMCwgaSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgKyAoZCAvIDIpXG4gICAgLy8gICApXG4gICAgLy8gICAubWVyZ2UoY2lyY2xlcylcbiAgICAvLyAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgLy8gICAuYXR0cignY3gnLCAoZCwgaSkgPT5cbiAgICAvLyAgICAgZGF0YS5zbGljZSgwLCBpKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSArIChkIC8gMilcbiAgICAvLyAgIClcbiAgICAvLyAgIC5hdHRyKCdyJywgZCA9PiBkIC8gMik7XG5cbiAgICAvLyBjaXJjbGVzLmV4aXQoKVxuICAgIC8vICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAvLyAgIC5hdHRyKCdyJywgMClcbiAgICAvLyAgIC5yZW1vdmUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlSYW5raW5nU3RyaXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})