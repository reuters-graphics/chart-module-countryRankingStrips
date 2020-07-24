webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        threshold: 30,\n        xTicks: 5,\n        curveType: 'curveBasis'\n      },\n      height: 250,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      }); // console.log(d3.extent(dataValues));\n\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.threshold);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom - 24, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"][props.distributionProps.curveType]).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());\n\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(xScale.domain()) // .ticks(props.distributionProps.xTicks)\n      // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y').attr('transform', \"translate(\".concat(props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisLeft(yScale).ticks(null, '%')).call(function (g) {\n        return g.select('.domain').remove();\n      }); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var rugs = plot.append('g').selectAll('rect').data(data);\n      rugs.enter().append('rect').attr('class', function (d) {\n        return \"\".concat(d.key);\n      }).attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.height - props.margin.bottom - 24).attr('height', 24).attr('width', 1).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // const distPath = plot.selectAll('path');\n\n      plot.append('g').attr('fill', '#bbb').selectAll('rect').data(bins).join('rect').attr('x', function (d) {\n        return xScale(d.x0);\n      }).attr('y', function (d) {\n        // console.log(d.length, data.length);\n        return yScale(d.length / data.length);\n      }).attr('width', function (d) {\n        return xScale(d.x1) - xScale(d.x0);\n      }).attr('height', function (d) {\n        return yScale(0) - yScale(d.length / data.length);\n      });\n      plot.appendSelect('path.area').attr('class', 'distribution-area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      console.log('area', _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].polygonArea(density));\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', 'red').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine); // HIGHLIGHT DATA PONT\n      // const pointPath\n      // const binWidth =\n\n      var dataHighlight = bins.find(function (element) {\n        return element.includes(6.2960862166761205);\n      });\n      console.log(kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataHighlight)); // const pathHighlight = (d) => {\n      //   return [\n      //     [xScale(d.x0), yScale(0)],\n      //     [xScale(d.x0), yScale(30)],\n      //     [xScale(d.x1), yScale(30)],\n      //     [xScale(d.x1), yScale(0)],\n      //   ];\n      // };\n      // console.log(pa;thHighlight(dataHighlight))\n      // plot.appendSelect('path.area-highlight')\n      //   .attr('class', 'area-highlight')\n      //   .datum(pathHighlight(dataHighlight))\n      //   .attr('fill', 'red')\n      //   .attr('d', distributionArea);\n\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInRocmVzaG9sZCIsInhUaWNrcyIsImN1cnZlVHlwZSIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwibmljZSIsInJhbmdlIiwidGhyZXNob2xkcyIsInRpY2tzIiwiYmlucyIsImhpc3RvZ3JhbSIsInlTY2FsZSIsIm1heCIsImxlbmd0aCIsImRpc3RyaWJ1dGlvbkxpbmUiLCJsaW5lIiwiY3VydmUiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwiYXhpc0xlZnQiLCJnIiwic2VsZWN0IiwicmVtb3ZlIiwicGxvdCIsInJ1Z3MiLCJhcHBlbmQiLCJzZWxlY3RBbGwiLCJlbnRlciIsInN0eWxlIiwiam9pbiIsIngwIiwieDEiLCJkYXR1bSIsInBvbHlnb25BcmVhIiwiZGF0YUhpZ2hsaWdodCIsImZpbmQiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJDaGFydENvbXBvbmVu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QUNULFlBQUwsQ0FBa0IsV0FBbEIsRUFDR2tCLEtBREgsQ0FDU3RCLE9BRFQsRUFFR25DLFVBRkgsQ0FFY0EsVUFGZCxFQUdHd0MsSUFISCxDQUdRLE1BSFIsRUFHZ0IsTUFIaEIsRUFJR0EsSUFKSCxDQUlRLFFBSlIsRUFJa0IsS0FKbEIsRUFLR0EsSUFMSCxDQUtRLGNBTFIsRUFLd0IsR0FMeEIsRUFNR0EsSUFOSCxDQU1RLGlCQU5SLEVBTTJCLE9BTjNCLEVBT0dBLElBUEgsQ0FPUSxHQVBSLEVBT2FyQixnQkFQYixFQXZISyxDQWdJTDtBQUNBO0FBQ0E7O0FBQ0EsVUFBTXdDLGFBQWEsR0FBRzdDLElBQUksQ0FBQzhDLElBQUwsQ0FBVSxVQUFBQyxPQUFPLEVBQUk7QUFDekMsZUFBT0EsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGtCQUFqQixDQUFQO0FBQ0QsT0FGcUIsQ0FBdEI7QUFJQTFCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxHQUFHLENBQUNJLFlBQVksQ0FBQ3JDLEtBQUssQ0FBQ2IsaUJBQU4sQ0FBd0JDLFNBQXpCLENBQWIsRUFBa0Q2QixVQUFsRCxFQUE4RCtDLGFBQTlELENBQWYsRUF2SUssQ0F5SUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQWpMZ0NJLDREOztBQW9McEJ0RixtRkFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuXG5jbGFzcyBDb3VudHJ5UmFua2luZ1N0cmlwcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBkYXRhUGFyYW1zOiB7XG4gICAgICBrZXk6ICdrZXknLFxuICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICBkaXN0cmlidXRpb25Qcm9wczoge1xuICAgICAgYmFuZHdpZHRoOiAwLjUsXG4gICAgICB0aHJlc2hvbGQ6IDMwLFxuICAgICAgeFRpY2tzOiA1LFxuICAgICAgY3VydmVUeXBlOiAnY3VydmVCYXNpcycsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDI1MCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkMy5leHRlbnQoZGF0YVZhbHVlcykpO1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGFWYWx1ZXMpKS5uaWNlKClcbiAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSk7XG5cbiAgICBjb25zdCB0aHJlc2hvbGRzID0geFNjYWxlLnRpY2tzKHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLnRocmVzaG9sZCk7XG4gICAgY29uc3QgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAuZG9tYWluKHhTY2FsZS5kb21haW4oKSlcbiAgICAgIC50aHJlc2hvbGRzKHRocmVzaG9sZHMpKGRhdGFWYWx1ZXMpO1xuXG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGJpbnMsIGQgPT4gZC5sZW5ndGgpIC8gZGF0YS5sZW5ndGhdKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tIC0gMjQsIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkM1twcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5jdXJ2ZVR5cGVdKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueShkID0+IHlTY2FsZShkWzFdKSk7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb25BcmVhID0gZDMuYXJlYSgpXG4gICAgICAuY3VydmUoZDNbcHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuY3VydmVUeXBlXSlcbiAgICAgIC54KGQgPT4geFNjYWxlKGRbMF0pKVxuICAgICAgLnkxKGQgPT4geVNjYWxlKGRbMV0pKVxuICAgICAgLnkwKGQgPT4geVNjYWxlKDApKTtcblxuICAgIC8vIERJU1RSSUJVVElPTiBNQVRIXG4gICAgY29uc3Qga2RlID0gKGtlcm5lbCwgdGhyZXNob2xkcywgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHMubWFwKHQgPT4gW3QsIGQzLm1lYW4oZGF0YSwgZCA9PiBrZXJuZWwodCAtIGQpKV0pO1xuICAgIH07XG4gICAgY29uc3QgZXBhbmVjaG5pa292ID0gKGJhbmR3aWR0aCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT4gTWF0aC5hYnMoeCAvPSBiYW5kd2lkdGgpIDw9IDEgPyAwLjc1ICogKDEgLSB4ICogeCkgLyBiYW5kd2lkdGggOiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBkZW5zaXR5ID0ga2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBkYXRhVmFsdWVzKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSk7XG5cbiAgICBjb25zb2xlLmxvZygnZGVuc2l0eScsIGRlbnNpdHkpO1xuICAgIGNvbnNvbGUubG9nKCdiaW5zJywgYmlucyk7XG5cbiAgICAvLyBEUkFXIENIQVJUXG4gICAgY29uc3QgY2hhcnRTVkcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnQ291bnRyeVJhbmtpbmdTdHJpcHMnKTtcblxuICAgIC8vIGFkZCBheGlzXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyBheGlzLXgnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tfSlgKVxuICAgICAgLmNhbGwoXG4gICAgICAgIGQzLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAgIC50aWNrVmFsdWVzKHhTY2FsZS5kb21haW4oKSlcbiAgICAgICAgICAvLyAudGlja3MocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMueFRpY2tzKVxuICAgICAgICAgIC8vIC50aWNrRm9ybWF0KGRhdGVGb3JtYXQpXG4gICAgICApO1xuXG4gICAgY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLmF4aXMteScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fSwwKWApXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tzKG51bGwsICclJykpXG4gICAgICAuY2FsbChnID0+IGcuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCkpO1xuXG4gICAgLy8gYWRkIGRpc3RyaWJ1dGlvbiBwYXRoXG5cbiAgICBjb25zdCBwbG90ID0gY2hhcnRTVkcuYXBwZW5kU2VsZWN0KCdnLnBsb3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Bsb3QnKTtcblxuICAgIGNvbnN0IHJ1Z3MgPSBwbG90LmFwcGVuZCgnZycpLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShkYXRhKTtcbiAgICBydWdzLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYCR7ZC5rZXl9YClcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneScsIHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSAyNClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAyNClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEpXG4gICAgICAuc3R5bGUoJ21peC1ibGVuZC1tb2RlJywgJ211bHRpcGx5JylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAxKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnb3JhbmdlJyk7XG5cbiAgICAvLyBjb25zdCBkaXN0UGF0aCA9IHBsb3Quc2VsZWN0QWxsKCdwYXRoJyk7XG5cbiAgICBwbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignZmlsbCcsICcjYmJiJylcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoYmlucylcbiAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB4U2NhbGUoZC54MCkpXG4gICAgICAuYXR0cigneScsIGQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkLmxlbmd0aCwgZGF0YS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4geFNjYWxlKGQueDEpIC0geFNjYWxlKGQueDApKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4geVNjYWxlKDApIC0geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmFyZWEnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Rpc3RyaWJ1dGlvbi1hcmVhJylcbiAgICAgIC5kYXR1bShkZW5zaXR5KVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkFyZWEpO1xuXG4gICAgY29uc29sZS5sb2coJ2FyZWEnLCBkMy5wb2x5Z29uQXJlYSgoZGVuc2l0eSkpKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmxpbmUnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMS41KVxuICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAuYXR0cignZCcsIGRpc3RyaWJ1dGlvbkxpbmUpO1xuXG4gICAgLy8gSElHSExJR0hUIERBVEEgUE9OVFxuICAgIC8vIGNvbnN0IHBvaW50UGF0aFxuICAgIC8vIGNvbnN0IGJpbldpZHRoID1cbiAgICBjb25zdCBkYXRhSGlnaGxpZ2h0ID0gYmlucy5maW5kKGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuaW5jbHVkZXMoNi4yOTYwODYyMTY2NzYxMjA1KTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGtkZShlcGFuZWNobmlrb3YocHJvcHMuZGlzdHJpYnV0aW9uUHJvcHMuYmFuZHdpZHRoKSwgdGhyZXNob2xkcywgZGF0YUhpZ2hsaWdodCkpO1xuXG4gICAgLy8gY29uc3QgcGF0aEhpZ2hsaWdodCA9IChkKSA9PiB7XG4gICAgLy8gICByZXR1cm4gW1xuICAgIC8vICAgICBbeFNjYWxlKGQueDApLCB5U2NhbGUoMCldLFxuICAgIC8vICAgICBbeFNjYWxlKGQueDApLCB5U2NhbGUoMzApXSxcbiAgICAvLyAgICAgW3hTY2FsZShkLngxKSwgeVNjYWxlKDMwKV0sXG4gICAgLy8gICAgIFt4U2NhbGUoZC54MSksIHlTY2FsZSgwKV0sXG4gICAgLy8gICBdO1xuICAgIC8vIH07XG4gICAgLy8gY29uc29sZS5sb2cocGE7dGhIaWdobGlnaHQoZGF0YUhpZ2hsaWdodCkpXG4gICAgLy8gcGxvdC5hcHBlbmRTZWxlY3QoJ3BhdGguYXJlYS1oaWdobGlnaHQnKVxuICAgIC8vICAgLmF0dHIoJ2NsYXNzJywgJ2FyZWEtaGlnaGxpZ2h0JylcbiAgICAvLyAgIC5kYXR1bShwYXRoSGlnaGxpZ2h0KGRhdGFIaWdobGlnaHQpKVxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAncmVkJylcbiAgICAvLyAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UmFua2luZ1N0cmlwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})