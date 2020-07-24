webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 30,\n        xTicks: 5\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      });\n      console.log(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues));\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom - 24, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues);\n      console.log(kde(epanechnikov(props.distributionProps.bandwidth), thresholds, [1.1619958988380041]));\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale) // .tickValues(thresholds)\n      .ticks(props.distributionProps.xTicks) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var rugs = plot.append('g').selectAll('rect').data(data);\n      rugs.enter().append('rect').attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.height - props.margin.bottom - 24).attr('height', 24).attr('width', 2).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // const distPath = plot.selectAll('path');\n      // plot.append('g')\n      //   .attr('fill', '#bbb')\n      //   .selectAll('rect')\n      //   .data(bins)\n      //   .join('rect')\n      //   .attr('x', d => xScale(d.x0) + 1)\n      //   .attr('y', d => {\n      //     console.log(d.length, data.length);\n      //     return yScale(d.length / data.length);\n      //   })\n      //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)\n      //   .attr('height', d => yScale(0) - yScale(d.length / data.length));\n\n      plot.appendSelect('path.area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine);\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJleHRlbnQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwieCIsInkiLCJkaXN0cmlidXRpb25BcmVhIiwiYXJlYSIsInkxIiwieTAiLCJrZGUiLCJrZXJuZWwiLCJ0IiwibWVhbiIsImVwYW5lY2huaWtvdiIsIk1hdGgiLCJhYnMiLCJkZW5zaXR5IiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJwbG90IiwicnVncyIsImFwcGVuZCIsInNlbGVjdEFsbCIsImVudGVyIiwic3R5bGUiLCJkYXR1bSIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLG9COzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLFlBQU0sRUFBRSxJQURLO0FBRWJDLGdCQUFVLEVBQUU7QUFD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UixFQUt3QixHQUx4QixFQU1HQSxJQU5ILENBTVEsaUJBTlIsRUFNMkIsT0FOM0IsRUFPR0EsSUFQSCxDQU9RLEdBUFIsRUFPYXBCLGdCQVBiO0FBU0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqSmdDOEIsNEQ7O0FBb0pwQnhFLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDAuNSxcbiAgICAgIHRocmVzaG9sZDogMzAsXG4gICAgICB4VGlja3M6IDUsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDI1MCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICBjb25zb2xlLmxvZyhkMy5leHRlbnQoZGF0YVZhbHVlcykpO1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKVxuICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKTtcblxuICAgIGNvbnN0IHRocmVzaG9sZHMgPSB4U2NhbGUudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMudGhyZXNob2xkKTtcbiAgICBjb25zdCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgIC5kb21haW4oeFNjYWxlLmRvbWFpbigpKVxuICAgICAgLnRocmVzaG9sZHModGhyZXNob2xkcykoZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYmlucywgZCA9PiBkLmxlbmd0aCkgLyBkYXRhLmxlbmd0aF0pXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSAyNCwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uTGluZSA9IGQzLmxpbmUoKVxuICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55KGQgPT4geVNjYWxlKGRbMV0pKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkFyZWEgPSBkMy5hcmVhKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueTEoZCA9PiB5U2NhbGUoZFsxXSkpXG4gICAgICAueTAoZCA9PiB5U2NhbGUoMCkpO1xuXG4gICAgLy8gRElTVFJJQlVUSU9OIE1BVEhcbiAgICBjb25zdCBrZGUgPSAoa2VybmVsLCB0aHJlc2hvbGRzLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhyZXNob2xkcy5tYXAodCA9PiBbdCwgZDMubWVhbihkYXRhLCBkID0+IGtlcm5lbCh0IC0gZCkpXSk7XG4gICAgfTtcbiAgICBjb25zdCBlcGFuZWNobmlrb3YgPSAoYmFuZHdpZHRoKSA9PiB7XG4gICAgICByZXR1cm4geCA9PiBNYXRoLmFicyh4IC89IGJhbmR3aWR0aCkgPD0gMSA/IDAuNzUgKiAoMSAtIHggKiB4KSAvIGJhbmR3aWR0aCA6IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbnNpdHkgPSBrZGUoZXBhbmVjaG5pa292KHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLmJhbmR3aWR0aCksIHRocmVzaG9sZHMsIGRhdGFWYWx1ZXMpO1xuXG4gICAgY29uc29sZS5sb2coa2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBbMS4xNjE5OTU4OTg4MzgwMDQxXSkpO1xuXG4gICAgY29uc29sZS5sb2coJ2RlbnNpdHknLCBkZW5zaXR5KTtcbiAgICBjb25zb2xlLmxvZygnYmlucycsIGJpbnMpO1xuXG4gICAgLy8gRFJBVyBDSEFSVFxuICAgIGNvbnN0IGNoYXJ0U1ZHID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ0NvdW50cnlSYW5raW5nU3RyaXBzJyk7XG5cbiAgICAvLyBhZGQgYXhpc1xuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhpcy14JylcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7cHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbX0pYClcbiAgICAgIC5jYWxsKFxuICAgICAgICBkMy5heGlzQm90dG9tKHhTY2FsZSlcbiAgICAgICAgICAvLyAudGlja1ZhbHVlcyh0aHJlc2hvbGRzKVxuICAgICAgICAgIC50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy54VGlja3MpXG4gICAgICAgICAgLy8gLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdClcbiAgICAgICk7XG5cbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy15Jyk7XG5cbiAgICAvLyBhZGQgZGlzdHJpYnV0aW9uIHBhdGhcblxuICAgIGNvbnN0IHBsb3QgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cucGxvdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAncGxvdCcpO1xuXG4gICAgY29uc3QgcnVncyA9IHBsb3QuYXBwZW5kKCdnJykuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgIC5kYXRhKGRhdGEpO1xuICAgIHJ1Z3MuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHhTY2FsZShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCd5JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSAtIDI0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDI0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMilcbiAgICAgIC5zdHlsZSgnbWl4LWJsZW5kLW1vZGUnLCAnbXVsdGlwbHknKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIDEpXG4gICAgICAuYXR0cignZmlsbCcsICdvcmFuZ2UnKTtcblxuICAgIC8vIGNvbnN0IGRpc3RQYXRoID0gcGxvdC5zZWxlY3RBbGwoJ3BhdGgnKTtcblxuICAgIC8vIHBsb3QuYXBwZW5kKCdnJylcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJyNiYmInKVxuICAgIC8vICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLy8gICAuZGF0YShiaW5zKVxuICAgIC8vICAgLmpvaW4oJ3JlY3QnKVxuICAgIC8vICAgLmF0dHIoJ3gnLCBkID0+IHhTY2FsZShkLngwKSArIDEpXG4gICAgLy8gICAuYXR0cigneScsIGQgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhkLmxlbmd0aCwgZGF0YS5sZW5ndGgpO1xuICAgIC8vICAgICByZXR1cm4geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5hdHRyKCd3aWR0aCcsIGQgPT4geFNjYWxlKGQueDEpIC0geFNjYWxlKGQueDApIC0gMSlcbiAgICAvLyAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IHlTY2FsZSgwKSAtIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKSk7XG5cbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5hcmVhJylcbiAgICAgIC5kYXR1bShkZW5zaXR5KVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkFyZWEpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGgubGluZScpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxLjUpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UmFua2luZ1N0cmlwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})