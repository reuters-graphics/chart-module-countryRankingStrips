webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 1,\n        threshold: 30,\n        xTicks: 5,\n        curveType: 'curveBasis'\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      },\n      markDataPoint: [{\n        key: 'IN',\n        text: 'India'\n      }]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var allData = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var data = allData.filter(function (d) {\n        return d[props.dataParams.value];\n      });\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      }); // console.log(d3.extent(dataValues));\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());\n\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickValues(xScale.domain())\n      // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      ); // chartSVG.appendSelect('g.axis-y')\n      //   .attr('transform', `translate(${props.margin.left},0)`)\n      //   .call(d3.axisLeft(yScale).ticks(null, '%'))\n      //   .call(g => g.select('.domain').remove());\n      // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      plot.appendSelect('path.distribution-area').attr('class', 'area distribution-area').datum(density).transition(transition).attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      console.log('area', _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].polygonArea(density));\n      plot.appendSelect('path.distribution-line').attr('class', 'line distribution-line').datum(density).transition(transition).attr('stroke-linejoin', 'round').attr('d', distributionLine); // RUGPLOT\n      // const rugs = plot.append('g').selectAll('rect')\n      //   .data(data.filter(d => d.value >= 19 && d.value <= 28));\n      // rugs.enter().append('rect')\n      //   .attr('class', d => `${d.key}`)\n      //   .attr('data-value', d => `${d.value}`)\n      //   .attr('x', d => xScale(d.value))\n      //   .attr('y', props.margin.top)\n      //   .attr('height', props.height - props.margin.top - props.margin.bottom)\n      //   .attr('width', width / data.length)\n      //   .style('mix-blend-mode', 'multiply')\n      //   .attr('stroke', 1)\n      //   .attr('fill', 'orange');\n      // HISTOGRAM CODE\n      // plot.append('g')\n      //   .attr('fill', '#bbb')\n      //   .selectAll('rect')\n      //   .data(bins)\n      //   .join('rect')\n      //   .attr('x', d => xScale(d.x0) + 1)\n      //   .attr('y', d => {\n      //     // console.log(d.length, data.length);\n      //     return yScale(d.length / data.length);\n      //   })\n      //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)\n      //   .attr('height', d => yScale(0) - yScale(d.length / data.length));\n      // HIGHLIGHT DATA PONT\n      // add distrubution clipping mask\n\n      var svgDefs = chartSVG.appendSelect('defs');\n      svgDefs.appendSelect('clipPath').attr('id', 'clip-path').appendSelect('path').attr('d', distributionArea(density)); // add highlight shape\n\n      var highlightGroup = chartSVG.appendSelect('g.highlights').attr('class', 'highlights');\n      var highlights = highlightGroup.selectAll('rect').data(props.markDataPoint);\n      highlights.enter().append('rect').attr('class', function (d) {\n        return \"\".concat(d.key);\n      }).attr('data-value', function (d) {\n        return d.value ? \"\".concat(d.value) : \"\".concat(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('x', function (d) {\n        return d.value ? xScale(d.value) : xScale(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('y', props.height - props.margin.bottom).attr('height', 0).attr('width', width / data.length).style('clip-path', 'url(#clip-path)').merge(highlights).transition(transition.delay(0).duration(1000)).attr('class', function (d) {\n        return \"\".concat(d.key);\n      }).attr('data-value', function (d) {\n        return d.value ? \"\".concat(d.value) : \"\".concat(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('x', function (d) {\n        return d.value ? xScale(d.value) : xScale(allData.find(function (e) {\n          return e.key === d.key;\n        })[props.dataParams.value]);\n      }).attr('y', props.margin.top).attr('height', props.height - props.margin.top - props.margin.bottom).attr('width', width / data.length).style('clip-path', 'url(#clip-path)');\n      highlights.exit().attr('height', 0).transition(transition).remove(); // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT\n      // const dataHighlight = bins.find(element => {\n      //   return element.includes(6.2960862166761205);\n      // });\n      // console.log((dataHighlight));\n      // const pathHighlight = (d) => {\n      //   return [\n      //     [(d.x0), (0)],\n      //     [(d.x0), (0.3)],\n      //     [(d.x1), (0.3)],\n      //     [(d.x1), (0)],\n      //   ];\n      // };\n      // console.log(pathHighlight(dataHighlight));\n      // plot.appendSelect('path.area-highlight')\n      //   .attr('class', 'area-highlight')\n      //   .datum(pathHighlight(dataHighlight))\n      //   .attr('fill', 'red')\n      //   .style('clip-path', 'url(#clip-path)')\n      //   .attr('d', distributionArea);\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImN1cnZlVHlwZSIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm1hcmtEYXRhUG9pbnQiLCJ0ZXh0IiwiZGVmYXVsdERhdGEiLCJhbGxEYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJmaWx0ZXIiLCJkIiwiZGF0YVZhbHVlcyIsIm1hcCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsImRhdHVtIiwicG9seWdvbkFyZWEiLCJzdmdEZWZzIiwiaGlnaGxpZ2h0R3JvdXAiLCJoaWdobGlnaHRzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhcHBlbmQiLCJmaW5kIiwiZSIsInN0eWxlIiwibWVyZ2UiLCJkZWxheSIsImV4aXQi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LENBQUMzQixHQUFoQjtBQUFBLFNBQWQsRUFBbUNrQixLQUFLLENBQUNuQixVQUFOLENBQWlCRSxLQUFwRCxDQUFELENBQXRDO0FBQUEsT0FoQmQsRUFpQkcrRCxJQWpCSCxDQWlCUSxHQWpCUixFQWlCYTlDLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQWpCMUIsRUFrQkd1RCxJQWxCSCxDQWtCUSxRQWxCUixFQWtCa0I5QyxLQUFLLENBQUNYLE1BQU4sR0FBZVcsS0FBSyxDQUFDVixNQUFOLENBQWFDLEdBQTVCLEdBQWtDUyxLQUFLLENBQUNWLE1BQU4sQ0FBYUcsTUFsQmpFLEVBbUJHcUQsSUFuQkgsQ0FtQlEsT0FuQlIsRUFtQmlCMUMsS0FBSyxHQUFHTCxJQUFJLENBQUN5QixNQW5COUIsRUFvQkdxQyxLQXBCSCxDQW9CUyxXQXBCVCxFQW9Cc0IsaUJBcEJ0QjtBQXNCQU4sZ0JBQVUsQ0FBQ1MsSUFBWCxHQUNHbEIsSUFESCxDQUNRLFFBRFIsRUFDa0IsQ0FEbEIsRUFFR3pDLFVBRkgsQ0FFY0EsVUFGZCxFQUdHNEQsTUFISCxHQW5LSyxDQXdLTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBOU5nQ0MsNEQ7O0FBaU9wQnZGLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDEsXG4gICAgICB0aHJlc2hvbGQ6IDMwLFxuICAgICAgeFRpY2tzOiA1LFxuICAgICAgY3VydmVUeXBlOiAnY3VydmVCYXNpcycsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDI1MCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgICBtYXJrRGF0YVBvaW50OiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ0lOJyxcbiAgICAgICAgdGV4dDogJ0luZGlhJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgYWxsRGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCBkYXRhID0gYWxsRGF0YS5maWx0ZXIoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkMy5leHRlbnQoZGF0YVZhbHVlcykpO1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKS5uaWNlKClcbiAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSk7XG5cbiAgICBjb25zdCB0aHJlc2hvbGRzID0geFNjYWxlLnRpY2tzKHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLnRocmVzaG9sZCk7XG4gICAgY29uc3QgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAuZG9tYWluKHhTY2FsZS5kb21haW4oKSlcbiAgICAgIC50aHJlc2hvbGRzKHRocmVzaG9sZHMpKGRhdGFWYWx1ZXMpO1xuXG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGJpbnMsIGQgPT4gZC5sZW5ndGgpIC8gZGF0YS5sZW5ndGhdKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCBwcm9wcy5tYXJnaW4udG9wXSk7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb25MaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDNbcHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuY3VydmVUeXBlXSlcbiAgICAgIC54KGQgPT4geFNjYWxlKGRbMF0pKVxuICAgICAgLnkoZCA9PiB5U2NhbGUoZFsxXSkpO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uQXJlYSA9IGQzLmFyZWEoKVxuICAgICAgLmN1cnZlKGQzW3Byb3BzLmRpc3RyaWJ1dGlvblByb3BzLmN1cnZlVHlwZV0pXG4gICAgICAueChkID0+IHhTY2FsZShkWzBdKSlcbiAgICAgIC55MShkID0+IHlTY2FsZShkWzFdKSlcbiAgICAgIC55MChkID0+IHlTY2FsZSgwKSk7XG5cbiAgICAvLyBESVNUUklCVVRJT04gTUFUSFxuICAgIGNvbnN0IGtkZSA9IChrZXJuZWwsIHRocmVzaG9sZHMsIGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aHJlc2hvbGRzLm1hcCh0ID0+IFt0LCBkMy5tZWFuKGRhdGEsIGQgPT4ga2VybmVsKHQgLSBkKSldKTtcbiAgICB9O1xuICAgIGNvbnN0IGVwYW5lY2huaWtvdiA9IChiYW5kd2lkdGgpID0+IHtcbiAgICAgIHJldHVybiB4ID0+IE1hdGguYWJzKHggLz0gYmFuZHdpZHRoKSA8PSAxID8gMC43NSAqICgxIC0geCAqIHgpIC8gYmFuZHdpZHRoIDogMDtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVuc2l0eSA9IGtkZShlcGFuZWNobmlrb3YocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuYmFuZHdpZHRoKSwgdGhyZXNob2xkcywgZGF0YVZhbHVlcyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpO1xuXG4gICAgY29uc29sZS5sb2coJ2RlbnNpdHknLCBkZW5zaXR5KTtcbiAgICBjb25zb2xlLmxvZygnYmlucycsIGJpbnMpO1xuXG4gICAgLy8gRFJBVyBDSEFSVFxuICAgIGNvbnN0IGNoYXJ0U1ZHID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ0NvdW50cnlSYW5raW5nU3RyaXBzJyk7XG5cbiAgICAvLyBhZGQgYXhpc1xuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhpcy14JylcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7cHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbX0pYClcbiAgICAgIC5jYWxsKFxuICAgICAgICBkMy5heGlzQm90dG9tKHhTY2FsZSlcbiAgICAgICAgICAudGlja1ZhbHVlcyh0aHJlc2hvbGRzKVxuICAgICAgICAgIC8vIC50aWNrVmFsdWVzKHhTY2FsZS5kb21haW4oKSlcbiAgICAgICAgICAvLyAudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMueFRpY2tzKVxuICAgICAgICAgIC8vIC50aWNrRm9ybWF0KGRhdGVGb3JtYXQpXG4gICAgICApO1xuXG4gICAgLy8gY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteScpXG4gICAgLy8gICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fSwwKWApXG4gICAgLy8gICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tzKG51bGwsICclJykpXG4gICAgLy8gICAuY2FsbChnID0+IGcuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCkpO1xuXG4gICAgLy8gYWRkIGRpc3RyaWJ1dGlvbiBwYXRoXG4gICAgY29uc3QgcGxvdCA9IGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5wbG90JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdwbG90Jyk7XG5cbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5kaXN0cmlidXRpb24tYXJlYScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJlYSBkaXN0cmlidXRpb24tYXJlYScpXG4gICAgICAuZGF0dW0oZGVuc2l0eSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYSk7XG5cbiAgICBjb25zb2xlLmxvZygnYXJlYScsIGQzLnBvbHlnb25BcmVhKChkZW5zaXR5KSkpO1xuXG4gICAgcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGguZGlzdHJpYnV0aW9uLWxpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmUgZGlzdHJpYnV0aW9uLWxpbmUnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkxpbmUpO1xuXG4gICAgLy8gUlVHUExPVFxuICAgIC8vIGNvbnN0IHJ1Z3MgPSBwbG90LmFwcGVuZCgnZycpLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLy8gICAuZGF0YShkYXRhLmZpbHRlcihkID0+IGQudmFsdWUgPj0gMTkgJiYgZC52YWx1ZSA8PSAyOCkpO1xuICAgIC8vIHJ1Z3MuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgIC8vICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgJHtkLmtleX1gKVxuICAgIC8vICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGAke2QudmFsdWV9YClcbiAgICAvLyAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC52YWx1ZSkpXG4gICAgLy8gICAuYXR0cigneScsIHByb3BzLm1hcmdpbi50b3ApXG4gICAgLy8gICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pXG4gICAgLy8gICAuYXR0cignd2lkdGgnLCB3aWR0aCAvIGRhdGEubGVuZ3RoKVxuICAgIC8vICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG4gICAgLy8gICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gSElTVE9HUkFNIENPREVcbiAgICAvLyBwbG90LmFwcGVuZCgnZycpXG4gICAgLy8gICAuYXR0cignZmlsbCcsICcjYmJiJylcbiAgICAvLyAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgIC8vICAgLmRhdGEoYmlucylcbiAgICAvLyAgIC5qb2luKCdyZWN0JylcbiAgICAvLyAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC54MCkgKyAxKVxuICAgIC8vICAgLmF0dHIoJ3knLCBkID0+IHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZC5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcbiAgICAvLyAgICAgcmV0dXJuIHlTY2FsZShkLmxlbmd0aCAvIGRhdGEubGVuZ3RoKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuYXR0cignd2lkdGgnLCBkID0+IHhTY2FsZShkLngxKSAtIHhTY2FsZShkLngwKSAtIDEpXG4gICAgLy8gICAuYXR0cignaGVpZ2h0JywgZCA9PiB5U2NhbGUoMCkgLSB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCkpO1xuXG4gICAgLy8gSElHSExJR0hUIERBVEEgUE9OVFxuICAgIC8vIGFkZCBkaXN0cnVidXRpb24gY2xpcHBpbmcgbWFza1xuICAgIGNvbnN0IHN2Z0RlZnMgPSBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2RlZnMnKTtcblxuICAgIHN2Z0RlZnMuYXBwZW5kU2VsZWN0KCdjbGlwUGF0aCcpXG4gICAgICAuYXR0cignaWQnLCAnY2xpcC1wYXRoJylcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKGRlbnNpdHkpKTtcblxuICAgIC8vIGFkZCBoaWdobGlnaHQgc2hhcGVcbiAgICBjb25zdCBoaWdobGlnaHRHcm91cCA9IGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5oaWdobGlnaHRzJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdoaWdobGlnaHRzJyk7XG4gICAgY29uc3QgaGlnaGxpZ2h0cyA9IGhpZ2hsaWdodEdyb3VwLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShwcm9wcy5tYXJrRGF0YVBvaW50KTtcblxuICAgIGhpZ2hsaWdodHMuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgJHtkLmtleX1gKVxuICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IHtcbiAgICAgICAgcmV0dXJuIChkLnZhbHVlKSA/IGAke2QudmFsdWV9YCA6IGAke2FsbERhdGEuZmluZChlID0+IGUua2V5ID09PSBkLmtleSlbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV19YDtcbiAgICAgIH0pXG4gICAgICAuYXR0cigneCcsIGQgPT4gZC52YWx1ZSA/IHhTY2FsZShkLnZhbHVlKSA6IHhTY2FsZShhbGxEYXRhLmZpbmQoZSA9PiBlLmtleSA9PT0gZC5rZXkpW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKSlcbiAgICAgIC5hdHRyKCd5JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLyBkYXRhLmxlbmd0aClcbiAgICAgIC5zdHlsZSgnY2xpcC1wYXRoJywgJ3VybCgjY2xpcC1wYXRoKScpXG4gICAgICAubWVyZ2UoaGlnaGxpZ2h0cylcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24uZGVsYXkoMCkuZHVyYXRpb24oMTAwMCkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGAke2Qua2V5fWApXG4gICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4ge1xuICAgICAgICByZXR1cm4gKGQudmFsdWUpID8gYCR7ZC52YWx1ZX1gIDogYCR7YWxsRGF0YS5maW5kKGUgPT4gZS5rZXkgPT09IGQua2V5KVtwcm9wcy5kYXRhUGFyYW1zLnZhbHVlXX1gO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnZhbHVlID8geFNjYWxlKGQudmFsdWUpIDogeFNjYWxlKGFsbERhdGEuZmluZChlID0+IGUua2V5ID09PSBkLmtleSlbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pKVxuICAgICAgLmF0dHIoJ3knLCBwcm9wcy5tYXJnaW4udG9wKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLyBkYXRhLmxlbmd0aClcbiAgICAgIC5zdHlsZSgnY2xpcC1wYXRoJywgJ3VybCgjY2xpcC1wYXRoKScpO1xuXG4gICAgaGlnaGxpZ2h0cy5leGl0KClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIEZPUiBISUdITElHSFRJTkcgVEhFIEJJTiBXSVRIIFRIRSBEQVRBIFBPSU5UXG4gICAgLy8gY29uc3QgZGF0YUhpZ2hsaWdodCA9IGJpbnMuZmluZChlbGVtZW50ID0+IHtcbiAgICAvLyAgIHJldHVybiBlbGVtZW50LmluY2x1ZGVzKDYuMjk2MDg2MjE2Njc2MTIwNSk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygoZGF0YUhpZ2hsaWdodCkpO1xuXG4gICAgLy8gY29uc3QgcGF0aEhpZ2hsaWdodCA9IChkKSA9PiB7XG4gICAgLy8gICByZXR1cm4gW1xuICAgIC8vICAgICBbKGQueDApLCAoMCldLFxuICAgIC8vICAgICBbKGQueDApLCAoMC4zKV0sXG4gICAgLy8gICAgIFsoZC54MSksICgwLjMpXSxcbiAgICAvLyAgICAgWyhkLngxKSwgKDApXSxcbiAgICAvLyAgIF07XG4gICAgLy8gfTtcbiAgICAvLyBjb25zb2xlLmxvZyhwYXRoSGlnaGxpZ2h0KGRhdGFIaWdobGlnaHQpKTtcbiAgICAvLyBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5hcmVhLWhpZ2hsaWdodCcpXG4gICAgLy8gICAuYXR0cignY2xhc3MnLCAnYXJlYS1oaWdobGlnaHQnKVxuICAgIC8vICAgLmRhdHVtKHBhdGhIaWdobGlnaHQoZGF0YUhpZ2hsaWdodCkpXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdyZWQnKVxuICAgIC8vICAgLnN0eWxlKCdjbGlwLXBhdGgnLCAndXJsKCNjbGlwLXBhdGgpJylcbiAgICAvLyAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UmFua2luZ1N0cmlwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})