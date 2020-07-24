webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 30,\n        xTicks: 5,\n        curveType: 'curveBasis'\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      },\n      markDataPoint: [{\n        key: 'IN',\n        text: 'India'\n      }]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var allData = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var data = allData.filter(function (d) {\n        return d[props.dataParams.value];\n      });\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      }); // console.log(d3.extent(dataValues));\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());\n\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickValues(xScale.domain())\n      // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      ); // chartSVG.appendSelect('g.axis-y')\n      //   .attr('transform', `translate(${props.margin.left},0)`)\n      //   .call(d3.axisLeft(yScale).ticks(null, '%'))\n      //   .call(g => g.select('.domain').remove());\n      // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot'); // RUGPLOT\n      // const rugs = plot.append('g').selectAll('rect')\n      //   .data(data.filter(d => d.value >= 19 && d.value <= 28));\n      // rugs.enter().append('rect')\n      //   .attr('class', d => `${d.key}`)\n      //   .attr('data-value', d => `${d.value}`)\n      //   .attr('x', d => xScale(d.value))\n      //   .attr('y', props.margin.top)\n      //   .attr('height', props.height - props.margin.top - props.margin.bottom)\n      //   .attr('width', width / data.length)\n      //   .style('mix-blend-mode', 'multiply')\n      //   .attr('stroke', 1)\n      //   .attr('fill', 'orange');\n      // HISTOGRAM CODE\n      // plot.append('g')\n      //   .attr('fill', '#bbb')\n      //   .selectAll('rect')\n      //   .data(bins)\n      //   .join('rect')\n      //   .attr('x', d => xScale(d.x0) + 1)\n      //   .attr('y', d => {\n      //     // console.log(d.length, data.length);\n      //     return yScale(d.length / data.length);\n      //   })\n      //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)\n      //   .attr('height', d => yScale(0) - yScale(d.length / data.length));\n\n      plot.appendSelect('path.distribution-area').attr('class', 'area distribution-area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      console.log('area', _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].polygonArea(density));\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine); // HIGHLIGHT DATA PONT\n      // add distrubution clipping mask\n\n      chartSVG.append('defs').appendSelect('clipPath').attr('id', 'clip-path').append('path').attr('d', distributionArea(density));\n      var highlight = plot.append('g').selectAll('rect').data(props.markDataPoint);\n      highlight.enter().append('rect').attr('class', function (d) {\n        return \"\".concat(d.key || d.value);\n      }).attr('data-value', function (d) {\n        return d.value ? \"\".concat(d.value) : allData.find(function (e) {\n          if (e.key === d.key) {\n            console.log(e.value);\n            return \"\".concat(e.value);\n          }\n        });\n      }).attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.margin.top).attr('height', props.height - props.margin.top - props.margin.bottom).attr('width', width / data.length).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT\n      // const dataHighlight = bins.find(element => {\n      //   return element.includes(6.2960862166761205);\n      // });\n      // console.log((dataHighlight));\n      // const pathHighlight = (d) => {\n      //   return [\n      //     [(d.x0), (0)],\n      //     [(d.x0), (0.3)],\n      //     [(d.x1), (0.3)],\n      //     [(d.x1), (0)],\n      //   ];\n      // };\n      // console.log(pathHighlight(dataHighlight));\n      // plot.appendSelect('path.area-highlight')\n      //   .attr('class', 'area-highlight')\n      //   .datum(pathHighlight(dataHighlight))\n      //   .attr('fill', 'red')\n      //   .style('clip-path', 'url(#clip-path)')\n      //   .attr('d', distributionArea);\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImN1cnZlVHlwZSIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm1hcmtEYXRhUG9pbnQiLCJ0ZXh0IiwiZGVmYXVsdERhdGEiLCJhbGxEYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJmaWx0ZXIiLCJkIiwiZGF0YVZhbHVlcyIsIm1hcCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsImRhdHVtIiwicG9seWdvbkFyZWEiLCJhcHBlbmQiLCJoaWdobGlnaHQiLCJzZWxlY3RBbGwiLCJlbnRlciIsImZpbmQiLCJlIiwic3R5bGUiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQUE1QixHQUFrQ1MsS0FBSyxDQUFDVixNQUFOLENBQWFHLE1BYmpFLEVBY0dxRCxJQWRILENBY1EsT0FkUixFQWNpQjFDLEtBQUssR0FBR0wsSUFBSSxDQUFDeUIsTUFkOUIsRUFlR21DLEtBZkgsQ0FlUyxnQkFmVCxFQWUyQixVQWYzQixFQWdCR2IsSUFoQkgsQ0FnQlEsUUFoQlIsRUFnQmtCLENBaEJsQixFQWlCR0EsSUFqQkgsQ0FpQlEsTUFqQlIsRUFpQmdCLFFBakJoQixFQTlJSyxDQWlLTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBdk5nQ2MsNEQ7O0FBME5wQmpGLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDAuNSxcbiAgICAgIHRocmVzaG9sZDogMzAsXG4gICAgICB4VGlja3M6IDUsXG4gICAgICBjdXJ2ZVR5cGU6ICdjdXJ2ZUJhc2lzJyxcbiAgICB9LFxuICAgIGhlaWdodDogMjUwLFxuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvdHRvbTogMjAsXG4gICAgICBsZWZ0OiAyMCxcbiAgICB9LFxuICAgIG1hcmtEYXRhUG9pbnQ6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnSU4nLFxuICAgICAgICB0ZXh0OiAnSW5kaWEnLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGRlZmF1bHREYXRhID0gZGVmYXVsdERhdGE7XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBhbGxEYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkMy50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApO1xuXG4gICAgLy8gREVGSU5FIFNDQUxFU1xuICAgIGNvbnN0IGRhdGEgPSBhbGxEYXRhLmZpbHRlcihkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pO1xuICAgIGNvbnN0IGRhdGFWYWx1ZXMgPSBkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy52YWx1ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGQzLmV4dGVudChkYXRhVmFsdWVzKSk7XG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YVZhbHVlcykpLm5pY2UoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKTtcblxuICAgIGNvbnN0IHRocmVzaG9sZHMgPSB4U2NhbGUudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMudGhyZXNob2xkKTtcbiAgICBjb25zdCBiaW5zID0gZDMuaGlzdG9ncmFtKClcbiAgICAgIC5kb21haW4oeFNjYWxlLmRvbWFpbigpKVxuICAgICAgLnRocmVzaG9sZHModGhyZXNob2xkcykoZGF0YVZhbHVlcyk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoYmlucywgZCA9PiBkLmxlbmd0aCkgLyBkYXRhLmxlbmd0aF0pXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkM1twcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5jdXJ2ZVR5cGVdKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueShkID0+IHlTY2FsZShkWzFdKSk7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb25BcmVhID0gZDMuYXJlYSgpXG4gICAgICAuY3VydmUoZDNbcHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuY3VydmVUeXBlXSlcbiAgICAgIC54KGQgPT4geFNjYWxlKGRbMF0pKVxuICAgICAgLnkxKGQgPT4geVNjYWxlKGRbMV0pKVxuICAgICAgLnkwKGQgPT4geVNjYWxlKDApKTtcblxuICAgIC8vIERJU1RSSUJVVElPTiBNQVRIXG4gICAgY29uc3Qga2RlID0gKGtlcm5lbCwgdGhyZXNob2xkcywgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHMubWFwKHQgPT4gW3QsIGQzLm1lYW4oZGF0YSwgZCA9PiBrZXJuZWwodCAtIGQpKV0pO1xuICAgIH07XG4gICAgY29uc3QgZXBhbmVjaG5pa292ID0gKGJhbmR3aWR0aCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT4gTWF0aC5hYnMoeCAvPSBiYW5kd2lkdGgpIDw9IDEgPyAwLjc1ICogKDEgLSB4ICogeCkgLyBiYW5kd2lkdGggOiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBkZW5zaXR5ID0ga2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBkYXRhVmFsdWVzKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSk7XG5cbiAgICBjb25zb2xlLmxvZygnZGVuc2l0eScsIGRlbnNpdHkpO1xuICAgIGNvbnNvbGUubG9nKCdiaW5zJywgYmlucyk7XG5cbiAgICAvLyBEUkFXIENIQVJUXG4gICAgY29uc3QgY2hhcnRTVkcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnQ291bnRyeVJhbmtpbmdTdHJpcHMnKTtcblxuICAgIC8vIGFkZCBheGlzXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyBheGlzLXgnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAgIC50aWNrVmFsdWVzKHRocmVzaG9sZHMpXG4gICAgICAgICAgLy8gLnRpY2tWYWx1ZXMoeFNjYWxlLmRvbWFpbigpKVxuICAgICAgICAgIC8vIC50aWNrcyhwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy54VGlja3MpXG4gICAgICAgICAgLy8gLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdClcbiAgICAgICk7XG5cbiAgICAvLyBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy15JylcbiAgICAvLyAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cHJvcHMubWFyZ2luLmxlZnR9LDApYClcbiAgICAvLyAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkudGlja3MobnVsbCwgJyUnKSlcbiAgICAvLyAgIC5jYWxsKGcgPT4gZy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKSk7XG5cbiAgICAvLyBhZGQgZGlzdHJpYnV0aW9uIHBhdGhcbiAgICBjb25zdCBwbG90ID0gY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLnBsb3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Bsb3QnKTtcblxuICAgIC8vIFJVR1BMT1RcbiAgICAvLyBjb25zdCBydWdzID0gcGxvdC5hcHBlbmQoJ2cnKS5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgIC8vICAgLmRhdGEoZGF0YS5maWx0ZXIoZCA9PiBkLnZhbHVlID49IDE5ICYmIGQudmFsdWUgPD0gMjgpKTtcbiAgICAvLyBydWdzLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAvLyAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYCR7ZC5rZXl9YClcbiAgICAvLyAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBgJHtkLnZhbHVlfWApXG4gICAgLy8gICAuYXR0cigneCcsIGQgPT4geFNjYWxlKGQudmFsdWUpKVxuICAgIC8vICAgLmF0dHIoJ3knLCBwcm9wcy5tYXJnaW4udG9wKVxuICAgIC8vICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tKVxuICAgIC8vICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggLyBkYXRhLmxlbmd0aClcbiAgICAvLyAgIC5zdHlsZSgnbWl4LWJsZW5kLW1vZGUnLCAnbXVsdGlwbHknKVxuICAgIC8vICAgLmF0dHIoJ3N0cm9rZScsIDEpXG4gICAgLy8gICAuYXR0cignZmlsbCcsICdvcmFuZ2UnKTtcblxuICAgIC8vIEhJU1RPR1JBTSBDT0RFXG4gICAgLy8gcGxvdC5hcHBlbmQoJ2cnKVxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnI2JiYicpXG4gICAgLy8gICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAvLyAgIC5kYXRhKGJpbnMpXG4gICAgLy8gICAuam9pbigncmVjdCcpXG4gICAgLy8gICAuYXR0cigneCcsIGQgPT4geFNjYWxlKGQueDApICsgMSlcbiAgICAvLyAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGQubGVuZ3RoLCBkYXRhLmxlbmd0aCk7XG4gICAgLy8gICAgIHJldHVybiB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmF0dHIoJ3dpZHRoJywgZCA9PiB4U2NhbGUoZC54MSkgLSB4U2NhbGUoZC54MCkgLSAxKVxuICAgIC8vICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4geVNjYWxlKDApIC0geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmRpc3RyaWJ1dGlvbi1hcmVhJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcmVhIGRpc3RyaWJ1dGlvbi1hcmVhJylcbiAgICAgIC5kYXR1bShkZW5zaXR5KVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkFyZWEpO1xuXG4gICAgY29uc29sZS5sb2coJ2FyZWEnLCBkMy5wb2x5Z29uQXJlYSgoZGVuc2l0eSkpKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmxpbmUnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMS41KVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkxpbmUpO1xuXG4gICAgLy8gSElHSExJR0hUIERBVEEgUE9OVFxuXG4gICAgLy8gYWRkIGRpc3RydWJ1dGlvbiBjbGlwcGluZyBtYXNrXG4gICAgY2hhcnRTVkcuYXBwZW5kKCdkZWZzJylcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ2NsaXBQYXRoJylcbiAgICAgIC5hdHRyKCdpZCcsICdjbGlwLXBhdGgnKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkFyZWEoZGVuc2l0eSkpO1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gcGxvdC5hcHBlbmQoJ2cnKS5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEocHJvcHMubWFya0RhdGFQb2ludCk7XG5cbiAgICBoaWdobGlnaHQuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgJHtkLmtleSB8fCBkLnZhbHVlfWApXG4gICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4ge1xuICAgICAgICByZXR1cm4gKGQudmFsdWUpID8gYCR7ZC52YWx1ZX1gIDpcbiAgICAgICAgICBhbGxEYXRhLmZpbmQoZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IGQua2V5KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm4gYCR7ZS52YWx1ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneScsIHByb3BzLm1hcmdpbi50b3ApXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCAvIGRhdGEubGVuZ3RoKVxuICAgICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gRk9SIEhJR0hMSUdIVElORyBUSEUgQklOIFdJVEggVEhFIERBVEEgUE9JTlRcbiAgICAvLyBjb25zdCBkYXRhSGlnaGxpZ2h0ID0gYmlucy5maW5kKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgcmV0dXJuIGVsZW1lbnQuaW5jbHVkZXMoNi4yOTYwODYyMTY2NzYxMjA1KTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKChkYXRhSGlnaGxpZ2h0KSk7XG5cbiAgICAvLyBjb25zdCBwYXRoSGlnaGxpZ2h0ID0gKGQpID0+IHtcbiAgICAvLyAgIHJldHVybiBbXG4gICAgLy8gICAgIFsoZC54MCksICgwKV0sXG4gICAgLy8gICAgIFsoZC54MCksICgwLjMpXSxcbiAgICAvLyAgICAgWyhkLngxKSwgKDAuMyldLFxuICAgIC8vICAgICBbKGQueDEpLCAoMCldLFxuICAgIC8vICAgXTtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhIaWdobGlnaHQoZGF0YUhpZ2hsaWdodCkpO1xuICAgIC8vIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmFyZWEtaGlnaGxpZ2h0JylcbiAgICAvLyAgIC5hdHRyKCdjbGFzcycsICdhcmVhLWhpZ2hsaWdodCcpXG4gICAgLy8gICAuZGF0dW0ocGF0aEhpZ2hsaWdodChkYXRhSGlnaGxpZ2h0KSlcbiAgICAvLyAgIC5hdHRyKCdmaWxsJywgJ3JlZCcpXG4gICAgLy8gICAuc3R5bGUoJ2NsaXAtcGF0aCcsICd1cmwoI2NsaXAtcGF0aCknKVxuICAgIC8vICAgLmF0dHIoJ2QnLCBkaXN0cmlidXRpb25BcmVhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlSYW5raW5nU3RyaXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})