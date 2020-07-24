webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 30,\n        xTicks: 5,\n        curveType: 'curveBasis'\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      },\n      markDataPoint: [{\n        key: 'IN',\n        text: 'India'\n      }]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var allData = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var data = allData.filter(function (d) {\n        return d[props.dataParams.value];\n      });\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      }); // console.log(d3.extent(dataValues));\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());\n\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickValues(xScale.domain())\n      // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      ); // chartSVG.appendSelect('g.axis-y')\n      //   .attr('transform', `translate(${props.margin.left},0)`)\n      //   .call(d3.axisLeft(yScale).ticks(null, '%'))\n      //   .call(g => g.select('.domain').remove());\n      // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot'); // RUGPLOT\n      // const rugs = plot.append('g').selectAll('rect')\n      //   .data(data.filter(d => d.value >= 19 && d.value <= 28));\n      // rugs.enter().append('rect')\n      //   .attr('class', d => `${d.key}`)\n      //   .attr('data-value', d => `${d.value}`)\n      //   .attr('x', d => xScale(d.value))\n      //   .attr('y', props.margin.top)\n      //   .attr('height', props.height - props.margin.top - props.margin.bottom)\n      //   .attr('width', width / data.length)\n      //   .style('mix-blend-mode', 'multiply')\n      //   .attr('stroke', 1)\n      //   .attr('fill', 'orange');\n      // HISTOGRAM CODE\n      // plot.append('g')\n      //   .attr('fill', '#bbb')\n      //   .selectAll('rect')\n      //   .data(bins)\n      //   .join('rect')\n      //   .attr('x', d => xScale(d.x0) + 1)\n      //   .attr('y', d => {\n      //     // console.log(d.length, data.length);\n      //     return yScale(d.length / data.length);\n      //   })\n      //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)\n      //   .attr('height', d => yScale(0) - yScale(d.length / data.length));\n\n      plot.appendSelect('path.distribution-area').attr('class', 'area distribution-area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      console.log('area', _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].polygonArea(density));\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine); // HIGHLIGHT DATA PONT\n      // add distrubution clipping mask\n\n      chartSVG.append('defs').appendSelect('clipPath').attr('id', 'clip-path').append('path').attr('d', distributionArea(density));\n      var highlight = plot.append('g').selectAll('rect').data(props.markDataPoint);\n      highlight.enter().append('rect').attr('class', function (d) {\n        return \"\".concat(d.key);\n      }).attr('data-value', function (d) {\n        return d.value ? \"\".concat(d.value) : \"\".concat(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('x', function (d) {\n        return d.value ? xScale(d.value) : xScale(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('y', props.margin.top).attr('height', props.height - props.margin.top - props.margin.bottom).attr('width', width / data.length).style('clip-path', 'url(#clip-path)').attr('stroke', 1).attr('fill', 'orange'); // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT\n      // const dataHighlight = bins.find(element => {\n      //   return element.includes(6.2960862166761205);\n      // });\n      // console.log((dataHighlight));\n      // const pathHighlight = (d) => {\n      //   return [\n      //     [(d.x0), (0)],\n      //     [(d.x0), (0.3)],\n      //     [(d.x1), (0.3)],\n      //     [(d.x1), (0)],\n      //   ];\n      // };\n      // console.log(pathHighlight(dataHighlight));\n      // plot.appendSelect('path.area-highlight')\n      //   .attr('class', 'area-highlight')\n      //   .datum(pathHighlight(dataHighlight))\n      //   .attr('fill', 'red')\n      //   .style('clip-path', 'url(#clip-path)')\n      //   .attr('d', distributionArea);\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImN1cnZlVHlwZSIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm1hcmtEYXRhUG9pbnQiLCJ0ZXh0IiwiZGVmYXVsdERhdGEiLCJhbGxEYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJmaWx0ZXIiLCJkIiwiZGF0YVZhbHVlcyIsIm1hcCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsImRhdHVtIiwicG9seWdvbkFyZWEiLCJhcHBlbmQiLCJoaWdobGlnaHQiLCJzZWxlY3RBbGwiLCJlbnRlciIsImZpbmQiLCJlIiwic3R5bGUiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsT0FMZCxFQU1HK0QsSUFOSCxDQU1RLEdBTlIsRUFNYTlDLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQU4xQixFQU9HdUQsSUFQSCxDQU9RLFFBUFIsRUFPa0I5QyxLQUFLLENBQUNYLE1BQU4sR0FBZVcsS0FBSyxDQUFDVixNQUFOLENBQWFDLEdBQTVCLEdBQWtDUyxLQUFLLENBQUNWLE1BQU4sQ0FBYUcsTUFQakUsRUFRR3FELElBUkgsQ0FRUSxPQVJSLEVBUWlCMUMsS0FBSyxHQUFHTCxJQUFJLENBQUN5QixNQVI5QixFQVNHbUMsS0FUSCxDQVNTLFdBVFQsRUFTc0IsaUJBVHRCLEVBVUdiLElBVkgsQ0FVUSxRQVZSLEVBVWtCLENBVmxCLEVBV0dBLElBWEgsQ0FXUSxNQVhSLEVBV2dCLFFBWGhCLEVBOUlLLENBMkpMO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqTmdDYyw0RDs7QUFvTnBCakYsbUZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuY2xhc3MgQ291bnRyeVJhbmtpbmdTdHJpcHMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgZGF0YVBhcmFtczoge1xuICAgICAga2V5OiAna2V5JyxcbiAgICAgIHZhbHVlOiAndmFsdWUnLFxuICAgIH0sXG4gICAgZGlzdHJpYnV0aW9uUHJvcHM6IHtcbiAgICAgIGJhbmR3aWR0aDogMC41LFxuICAgICAgdGhyZXNob2xkOiAzMCxcbiAgICAgIHhUaWNrczogNSxcbiAgICAgIGN1cnZlVHlwZTogJ2N1cnZlQmFzaXMnLFxuICAgIH0sXG4gICAgaGVpZ2h0OiAyNTAsXG4gICAgbWFyZ2luOiB7XG4gICAgICB0b3A6IDIwLFxuICAgICAgcmlnaHQ6IDIwLFxuICAgICAgYm90dG9tOiAyMCxcbiAgICAgIGxlZnQ6IDIwLFxuICAgIH0sXG4gICAgbWFya0RhdGFQb2ludDogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdJTicsXG4gICAgICAgIHRleHQ6ICdJbmRpYScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGFsbERhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICAvLyBERUZJTkUgU0NBTEVTXG4gICAgY29uc3QgZGF0YSA9IGFsbERhdGEuZmlsdGVyKGQgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLnZhbHVlXSk7XG4gICAgY29uc3QgZGF0YVZhbHVlcyA9IGRhdGEubWFwKGQgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLnZhbHVlXSk7XG4gICAgLy8gY29uc29sZS5sb2coZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKTtcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhVmFsdWVzKSkubmljZSgpXG4gICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pO1xuXG4gICAgY29uc3QgdGhyZXNob2xkcyA9IHhTY2FsZS50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy50aHJlc2hvbGQpO1xuICAgIGNvbnN0IGJpbnMgPSBkMy5oaXN0b2dyYW0oKVxuICAgICAgLmRvbWFpbih4U2NhbGUuZG9tYWluKCkpXG4gICAgICAudGhyZXNob2xkcyh0aHJlc2hvbGRzKShkYXRhVmFsdWVzKTtcblxuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChiaW5zLCBkID0+IGQubGVuZ3RoKSAvIGRhdGEubGVuZ3RoXSlcbiAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uTGluZSA9IGQzLmxpbmUoKVxuICAgICAgLmN1cnZlKGQzW3Byb3BzLmRpc3RyaWJ1dGlvblByb3BzLmN1cnZlVHlwZV0pXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55KGQgPT4geVNjYWxlKGRbMV0pKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkFyZWEgPSBkMy5hcmVhKClcbiAgICAgIC5jdXJ2ZShkM1twcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5jdXJ2ZVR5cGVdKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueTEoZCA9PiB5U2NhbGUoZFsxXSkpXG4gICAgICAueTAoZCA9PiB5U2NhbGUoMCkpO1xuXG4gICAgLy8gRElTVFJJQlVUSU9OIE1BVEhcbiAgICBjb25zdCBrZGUgPSAoa2VybmVsLCB0aHJlc2hvbGRzLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhyZXNob2xkcy5tYXAodCA9PiBbdCwgZDMubWVhbihkYXRhLCBkID0+IGtlcm5lbCh0IC0gZCkpXSk7XG4gICAgfTtcbiAgICBjb25zdCBlcGFuZWNobmlrb3YgPSAoYmFuZHdpZHRoKSA9PiB7XG4gICAgICByZXR1cm4geCA9PiBNYXRoLmFicyh4IC89IGJhbmR3aWR0aCkgPD0gMSA/IDAuNzUgKiAoMSAtIHggKiB4KSAvIGJhbmR3aWR0aCA6IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbnNpdHkgPSBrZGUoZXBhbmVjaG5pa292KHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLmJhbmR3aWR0aCksIHRocmVzaG9sZHMsIGRhdGFWYWx1ZXMpO1xuXG4gICAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZW5zaXR5JywgZGVuc2l0eSk7XG4gICAgY29uc29sZS5sb2coJ2JpbnMnLCBiaW5zKTtcblxuICAgIC8vIERSQVcgQ0hBUlRcbiAgICBjb25zdCBjaGFydFNWRyA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ3N2ZycpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdDb3VudHJ5UmFua2luZ1N0cmlwcycpO1xuXG4gICAgLy8gYWRkIGF4aXNcbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy14JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIGF4aXMteCcpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgICAgLnRpY2tWYWx1ZXModGhyZXNob2xkcylcbiAgICAgICAgICAvLyAudGlja1ZhbHVlcyh4U2NhbGUuZG9tYWluKCkpXG4gICAgICAgICAgLy8gLnRpY2tzKHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLnhUaWNrcylcbiAgICAgICAgICAvLyAudGlja0Zvcm1hdChkYXRlRm9ybWF0KVxuICAgICAgKTtcblxuICAgIC8vIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXknKVxuICAgIC8vICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwcm9wcy5tYXJnaW4ubGVmdH0sMClgKVxuICAgIC8vICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrcyhudWxsLCAnJScpKVxuICAgIC8vICAgLmNhbGwoZyA9PiBnLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpKTtcblxuICAgIC8vIGFkZCBkaXN0cmlidXRpb24gcGF0aFxuICAgIGNvbnN0IHBsb3QgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cucGxvdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAncGxvdCcpO1xuXG4gICAgLy8gUlVHUExPVFxuICAgIC8vIGNvbnN0IHJ1Z3MgPSBwbG90LmFwcGVuZCgnZycpLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLy8gICAuZGF0YShkYXRhLmZpbHRlcihkID0+IGQudmFsdWUgPj0gMTkgJiYgZC52YWx1ZSA8PSAyOCkpO1xuICAgIC8vIHJ1Z3MuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgIC8vICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgJHtkLmtleX1gKVxuICAgIC8vICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGAke2QudmFsdWV9YClcbiAgICAvLyAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC52YWx1ZSkpXG4gICAgLy8gICAuYXR0cigneScsIHByb3BzLm1hcmdpbi50b3ApXG4gICAgLy8gICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pXG4gICAgLy8gICAuYXR0cignd2lkdGgnLCB3aWR0aCAvIGRhdGEubGVuZ3RoKVxuICAgIC8vICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gSElTVE9HUkFNIENPREVcbiAgICAvLyBwbG90LmFwcGVuZCgnZycpXG4gICAgLy8gICAuYXR0cignZmlsbCcsICcjYmJiJylcbiAgICAvLyAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgIC8vICAgLmRhdGEoYmlucylcbiAgICAvLyAgIC5qb2luKCdyZWN0JylcbiAgICAvLyAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC54MCkgKyAxKVxuICAgIC8vICAgLmF0dHIoJ3knLCBkID0+IHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZC5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcbiAgICAvLyAgICAgcmV0dXJuIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZShkLngxKSAtIHhTY2FsZShkLngwKSAtIDEpXG4gICAgLy8gICAuYXR0cignaGVpZ2h0JywgZCA9PiB5U2NhbGUoMCkgLSB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCkpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGguZGlzdHJpYnV0aW9uLWFyZWEnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyZWEgZGlzdHJpYnV0aW9uLWFyZWEnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnb3JhbmdlJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYSk7XG5cbiAgICBjb25zb2xlLmxvZygnYXJlYScsIGQzLnBvbHlnb25BcmVhKChkZW5zaXR5KSkpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGgubGluZScpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxLjUpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICAvLyBISUdITElHSFQgREFUQSBQT05UXG5cbiAgICAvLyBhZGQgZGlzdHJ1YnV0aW9uIGNsaXBwaW5nIG1hc2tcbiAgICBjaGFydFNWRy5hcHBlbmQoJ2RlZnMnKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnY2xpcFBhdGgnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2NsaXAtcGF0aCcpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYShkZW5zaXR5KSk7XG5cbiAgICBjb25zdCBoaWdobGlnaHQgPSBwbG90LmFwcGVuZCgnZycpLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShwcm9wcy5tYXJrRGF0YVBvaW50KTtcblxuICAgIGhpZ2hsaWdodC5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGAke2Qua2V5fWApXG4gICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4ge1xuICAgICAgICByZXR1cm4gKGQudmFsdWUpID8gYCR7ZC52YWx1ZX1gIDogYCR7YWxsRGF0YS5maW5kKGUgPT4gZS5rZXkgPT09IGQua2V5KVtwcm9wcy5kYXRhUGFyYW1zLnZhbHVlXX1gO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnZhbHVlID8geFNjYWxlKGQudmFsdWUpIDogeFNjYWxlKGFsbERhdGEuZmluZChlID0+IGUua2V5ID09PSBkLmtleSlbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pKVxuICAgICAgLmF0dHIoJ3knLCBwcm9wcy5tYXJnaW4udG9wKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLyBkYXRhLmxlbmd0aClcbiAgICAgIC5zdHlsZSgnY2xpcC1wYXRoJywgJ3VybCgjY2xpcC1wYXRoKScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gRk9SIEhJR0hMSUdIVElORyBUSEUgQklOIFdJVEggVEhFIERBVEEgUE9JTlRcbiAgICAvLyBjb25zdCBkYXRhSGlnaGxpZ2h0ID0gYmlucy5maW5kKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgcmV0dXJuIGVsZW1lbnQuaW5jbHVkZXMoNi4yOTYwODYyMTY2NzYxMjA1KTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKChkYXRhSGlnaGxpZ2h0KSk7XG5cbiAgICAvLyBjb25zdCBwYXRoSGlnaGxpZ2h0ID0gKGQpID0+IHtcbiAgICAvLyAgIHJldHVybiBbXG4gICAgLy8gICAgIFsoZC54MCksICgwKV0sXG4gICAgLy8gICAgIFsoZC54MCksICgwLjMpXSxcbiAgICAvLyAgICAgWyhkLngxKSwgKDAuMyldLFxuICAgIC8vICAgICBbKGQueDEpLCAoMCldLFxuICAgIC8vICAgXTtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhIaWdobGlnaHQoZGF0YUhpZ2hsaWdodCkpO1xuICAgIC8vIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmFyZWEtaGlnaGxpZ2h0JylcbiAgICAvLyAgIC5hdHRyKCdjbGFzcycsICdhcmVhLWhpZ2hsaWdodCcpXG4gICAgLy8gICAuZGF0dW0ocGF0aEhpZ2hsaWdodChkYXRhSGlnaGxpZ2h0KSlcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ3JlZCcpXG4gICAgLy8gICAuc3R5bGUoJ2NsaXAtcGF0aCcsICd1cmwoI2NsaXAtcGF0aCknKVxuICAgIC8vICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlSYW5raW5nU3RyaXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})