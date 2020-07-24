webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 1,\n        xTicks: 10\n      },\n      height: 200,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      });\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.xTicks);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(data);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, data.map(function (d) {\n        return d[props.dataParams.value];\n      }));\n      console.log(density); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axs-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot'); // const distPath = plot.selectAll('path');\n\n      plot.appendSelect('path').data(density).attr('fill', 'none').attr('stroke', '#000').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine); // const circles = g.selectAll('circle')\n      //   .data(data, (d, i) => i);\n      // circles\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke);\n      // circles.enter().append('circle')\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke)\n      //   .style('stroke-width', props.strokeWidth)\n      //   .attr('cy', props.height / 2)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .merge(circles)\n      //   .transition(transition)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .attr('r', d => d / 2);\n      // circles.exit()\n      //   .transition(transition)\n      //   .attr('r', 0)\n      //   .remove();\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwieCIsInkiLCJrZGUiLCJrZXJuZWwiLCJ0IiwibWVhbiIsImVwYW5lY2huaWtvdiIsIk1hdGgiLCJhYnMiLCJkZW5zaXR5IiwiY29uc29sZSIsImxvZyIsImNoYXJ0U1ZHIiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1ZhbHVlcyIsInBsb3QiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxZQUFNLEVBQUUsSUFESztBQUViQyxnQkFBVSxFQUFFO0FBQ1ZDLFdBQUcsRUFBRSxLQURLO0FBRVZDLGFBQUssRUFBRTtBQUZHLE9BRkM7QUFNYkMsdUJBQWlCLEVBQUU7QUFDakJDLGlCQUFTLEVBQUUs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RSxRQUlHK0MsSUFKSCxDQUtJckMsaURBQUUsQ0FBQ3NDLFVBQUgsQ0FBY2pDLE1BQWQsRUFDR2tDLFVBREgsQ0FDYzVCLFVBRGQsQ0FMSixDQU9NO0FBUE47QUFVQXVCLGNBQVEsQ0FBQ0MsWUFBVCxDQUFzQixVQUF0QixFQTVESyxDQThETDs7QUFFQSxVQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQixRQUF0QixFQUNWQyxJQURVLENBQ0wsT0FESyxFQUNJLE1BREosQ0FBYixDQWhFSyxDQW1FTDs7QUFFQUksVUFBSSxDQUFDTCxZQUFMLENBQWtCLE1BQWxCLEVBQ0cxQyxJQURILENBQ1FzQyxPQURSLEVBRUdLLElBRkgsQ0FFUSxNQUZSLEVBRWdCLE1BRmhCLEVBR0dBLElBSEgsQ0FHUSxRQUhSLEVBR2tCLE1BSGxCLEVBSUdBLElBSkgsQ0FJUSxjQUpSLEVBSXdCLEdBSnhCLEVBS0dBLElBTEgsQ0FLUSxpQkFMUixFQUsyQixPQUwzQixFQU1HQSxJQU5ILENBTVEsR0FOUixFQU1hbEIsZ0JBTmIsRUFyRUssQ0E2RUw7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQS9IZ0N1Qiw0RDs7QUFrSXBCL0QsbUZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuY2xhc3MgQ291bnRyeVJhbmtpbmdTdHJpcHMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgZGF0YVBhcmFtczoge1xuICAgICAga2V5OiAna2V5JyxcbiAgICAgIHZhbHVlOiAndmFsdWUnLFxuICAgIH0sXG4gICAgZGlzdHJpYnV0aW9uUHJvcHM6IHtcbiAgICAgIGJhbmR3aWR0aDogMSxcbiAgICAgIHhUaWNrczogMTAsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhVmFsdWVzKSkubmljZSgpXG4gICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pO1xuXG4gICAgY29uc3QgdGhyZXNob2xkcyA9IHhTY2FsZS50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy54VGlja3MpO1xuICAgIGNvbnN0IGJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgLmRvbWFpbih4U2NhbGUuZG9tYWluKCkpXG4gICAgICAudGhyZXNob2xkcyh0aHJlc2hvbGRzKShkYXRhKTtcblxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChiaW5zLCBkID0+IGQubGVuZ3RoKSAvIGRhdGEubGVuZ3RoXSlcbiAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uTGluZSA9IGQzLmxpbmUoKVxuICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55KGQgPT4geVNjYWxlKGRbMV0pKTtcblxuICAgIC8vIERJU1RSSUJVVElPTiBNQVRIXG4gICAgY29uc3Qga2RlID0gKGtlcm5lbCwgdGhyZXNob2xkcywgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHMubWFwKHQgPT4gW3QsIGQzLm1lYW4oZGF0YSwgZCA9PiBrZXJuZWwodCAtIGQpKV0pO1xuICAgIH07XG4gICAgY29uc3QgZXBhbmVjaG5pa292ID0gKGJhbmR3aWR0aCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT4gTWF0aC5hYnMoeCAvPSBiYW5kd2lkdGgpIDw9IDEgPyAwLjc1ICogKDEgLSB4ICogeCkgLyBiYW5kd2lkdGggOiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBkZW5zaXR5ID0ga2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pKTtcblxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkpO1xuXG4gICAgLy8gRFJBVyBDSEFSVFxuICAgIGNvbnN0IGNoYXJ0U1ZHID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ0NvdW50cnlSYW5raW5nU3RyaXBzJyk7XG5cbiAgICAvLyBhZGQgYXhpc1xuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhzLXgnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAgIC50aWNrVmFsdWVzKHRocmVzaG9sZHMpXG4gICAgICAgICAgLy8gLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdClcbiAgICAgICk7XG5cbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy15Jyk7XG5cbiAgICAvLyBhZGQgZGlzdHJpYnV0aW9uIHBhdGhcblxuICAgIGNvbnN0IHBsb3QgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cucGxvdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAncGxvdCcpO1xuXG4gICAgLy8gY29uc3QgZGlzdFBhdGggPSBwbG90LnNlbGVjdEFsbCgncGF0aCcpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGgnKVxuICAgICAgLmRhdGEoZGVuc2l0eSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxLjUpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICAvLyBjb25zdCBjaXJjbGVzID0gZy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgLy8gICAuZGF0YShkYXRhLCAoZCwgaSkgPT4gaSk7XG5cbiAgICAvLyBjaXJjbGVzXG4gICAgLy8gICAuc3R5bGUoJ2ZpbGwnLCBwcm9wcy5maWxsKVxuICAgIC8vICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpO1xuXG4gICAgLy8gY2lyY2xlcy5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcbiAgICAvLyAgIC5zdHlsZSgnZmlsbCcsIHByb3BzLmZpbGwpXG4gICAgLy8gICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLnN0cm9rZSlcbiAgICAvLyAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlV2lkdGgpXG4gICAgLy8gICAuYXR0cignY3knLCBwcm9wcy5oZWlnaHQgLyAyKVxuICAgIC8vICAgLmF0dHIoJ2N4JywgKGQsIGkpID0+XG4gICAgLy8gICAgIGRhdGEuc2xpY2UoMCwgaSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgKyAoZCAvIDIpXG4gICAgLy8gICApXG4gICAgLy8gICAubWVyZ2UoY2lyY2xlcylcbiAgICAvLyAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgLy8gICAuYXR0cignY3gnLCAoZCwgaSkgPT5cbiAgICAvLyAgICAgZGF0YS5zbGljZSgwLCBpKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSArIChkIC8gMilcbiAgICAvLyAgIClcbiAgICAvLyAgIC5hdHRyKCdyJywgZCA9PiBkIC8gMik7XG5cbiAgICAvLyBjaXJjbGVzLmV4aXQoKVxuICAgIC8vICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAvLyAgIC5hdHRyKCdyJywgMClcbiAgICAvLyAgIC5yZW1vdmUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlSYW5raW5nU3RyaXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})