webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryRankingStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryRankingStrips);\n\n  function CountryRankingStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryRankingStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      dataParams: {\n        key: 'key',\n        value: 'value'\n      },\n      distributionProps: {\n        bandwidth: 0.5,\n        xTicks: 10\n      },\n      height: 200,\n      margin: {\n        top: 20,\n        right: 20,\n        bottom: 20,\n        left: 20\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryRankingStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // DEFINE SCALES\n\n      var dataValues = data.map(function (d) {\n        return d[props.dataParams.value];\n      });\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(dataValues)).range([props.margin.left, width - props.margin.right]);\n      var thresholds = xScale.ticks(props.distributionProps.xTicks);\n      var bins = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(bins, function (d) {\n        return d.length;\n      }) / data.length]).range([props.height - props.margin.bottom - 25, props.margin.top]);\n      var distributionLine = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y(function (d) {\n        return yScale(d[1]);\n      });\n      var distributionArea = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveBasis).x(function (d) {\n        return xScale(d[0]);\n      }).y1(function (d) {\n        return yScale(d[1]);\n      }).y0(function (d) {\n        return yScale(0);\n      }); // DISTRIBUTION MATH\n\n      var kde = function kde(kernel, thresholds, data) {\n        return thresholds.map(function (t) {\n          return [t, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(data, function (d) {\n            return kernel(t - d);\n          })];\n        });\n      };\n\n      var epanechnikov = function epanechnikov(bandwidth) {\n        return function (x) {\n          return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;\n        };\n      };\n\n      var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues);\n      console.log('density', density);\n      console.log('bins', bins); // DRAW CHART\n\n      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add axis\n\n      chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(xScale).tickValues(thresholds) // .tickFormat(dateFormat)\n      );\n      chartSVG.appendSelect('g.axis-y'); // add distribution path\n\n      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot');\n      var rugs = plot.append('g').selectAll('rect').data(data);\n      rugs.enter().append('rect').attr('x', function (d) {\n        return xScale(d.value);\n      }).attr('y', props.height - props.margin.bottom - 24).attr('height', 24).attr('width', 2).style('mix-blend-mode', 'multiply').attr('stroke', 1).attr('fill', 'orange'); // const distPath = plot.selectAll('path');\n      // plot.append('g')\n      //   .attr('fill', '#bbb')\n      //   .selectAll('rect')\n      //   .data(bins)\n      //   .join('rect')\n      //   .attr('x', d => xScale(d.x0) + 1)\n      //   .attr('y', d => {\n      //     console.log(d.length, data.length);\n      //     return yScale(d.length / data.length);\n      //   })\n      //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)\n      //   .attr('height', d => yScale(0) - yScale(d.length / data.length));\n\n      plot.appendSelect('path.area').datum(density).transition(transition).attr('fill', 'orange').attr('stroke', 'none').attr('stroke-linejoin', 'round').attr('d', distributionArea);\n      plot.appendSelect('path.line').datum(density).transition(transition).attr('fill', 'none').attr('stroke', '#000').attr('stroke-width', 1.5).attr('stroke-linejoin', 'round').attr('d', distributionLine);\n      return this;\n    }\n  }]);\n\n  return CountryRankingStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryRankingStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQ291bnRyeVJhbmtpbmdTdHJpcHMiLCJsb2NhbGUiLCJkYXRhUGFyYW1zIiwia2V5IiwidmFsdWUiLCJkaXN0cmlidXRpb25Qcm9wcyIsImJhbmR3aWR0aCIsInhUaWNrcyIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRlZmF1bHREYXRhIiwiZGF0YSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwidHJhbnNpdGlvbiIsImQzIiwiZHVyYXRpb24iLCJkYXRhVmFsdWVzIiwibWFwIiwiZCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwiZXh0ZW50IiwicmFuZ2UiLCJ0aHJlc2hvbGRzIiwidGlja3MiLCJiaW5zIiwiaGlzdG9ncmFtIiwieVNjYWxlIiwibWF4IiwibGVuZ3RoIiwiZGlzdHJpYnV0aW9uTGluZSIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlQmFzaXMiLCJ4IiwieSIsImRpc3RyaWJ1dGlvbkFyZWEiLCJhcmVhIiwieTEiLCJ5MCIsImtkZSIsImtlcm5lbCIsInQiLCJtZWFuIiwiZXBhbmVjaG5pa292IiwiTWF0aCIsImFicyIsImRlbnNpdHkiLCJjb25zb2xlIiwibG9nIiwiY2hhcnRTVkciLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrVmFsdWVzIiwicGxvdCIsInJ1Z3MiLCJhcHBlbmQiLCJzZWxlY3RBbGwiLCJlbnRlciIsInN0eWxlIiwiZGF0dW0iLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxZQUFNLEVBQUUsSUFESztBQUViQyxnQkFBVSxFQUFFO0FBQ1ZDLFdBQUcsRUFBRSxLQURLO0FBRVZDLGFBQUssRUFBRTtBQUZHLE9BRkM7QUFNYkMsdUJBQWlCLEVBQUU7QUFDakJDLGlCQUFTLEVBQUUsR0FETTtBQUVqQkMsY0FBTSxFQUFFO0FBRlMsT0FOTjtBQVViQyxZQUFNLEVBQUUsR0FWSztBQVdiQyxZQUFNLEVBQUU7QUFDTkMsV0FBRyxFQUFFLEVBREM7QUFFTkMsYUFBSyxFQUFFLEVBRkQ7QUFHTkMsY0FBTSxFQUFFLEVBSEY7QUFJTkMsWUFBSSxFQUFFO0FBSkE7QUFYSyxLOztzTkFtQkRDLDhDOzs7Ozs7OzJCQUVQO0FBQ0wsVUFBTUMsSUFBSSxHQUFHLEtBQUtBLElBQUwsRUFBYjtBQUNBLFVBQU1DLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjs7QUFISyxrQ0FLYUEsSUFBSSxDQUFDRSxxQkFBTCxFQUxiO0FBQUEsVUFLR0MsS0FMSCx5QkFLR0EsS0FMSDs7QUFPTCxVQUFNQyxVQUFVLEdBQUdDLGlEQUFFLENBQUNELFVBQUgsR0FDaEJFLFFBRGdCLENBQ1AsR0FETyxDQUFuQixDQVBLLENBVUw7O0FBQ0EsVUFBTUMsVUFBVSxHQUFHVCxJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDVixLQUFLLENBQUNkLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUw7QUFBQSxPQUFWLENBQW5CO0FBQ0EsVUFBTXVCLE1BQU0sR0FBR0wsaURBQUUsQ0FBQ00sV0FBSCxHQUNaQyxNQURZLENBQ0xQLGlEQUFFLENBQUNRLE1BQUgsQ0FBVU4sVUFBVixDQURLLEVBRVpPLEtBRlksQ0FFTixDQUFDZixLQUFLLENBQUNQLE1BQU4sQ0FBYUksSUFBZCxFQUFvQk8sS0FBSyxHQUFHSixLQUFLLENBQUNQLE1BQU4sQ0FBYUUsS0FBekMsQ0FGTSxDQUFmO0FBSUEsVUFBTXFCLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxLQUFQLENBQWFqQixLQUFLLENBQUNYLGlCQUFOLENBQXdCRSxNQUFyQyxDQUFuQjtBQUNBLFVBQU0yQixJQUFJLEdBQUdaLGlEQUFFLENBQUNhLFNBQUgsR0FDVk4sTUFEVSxDQUNIRixNQUFNLENBQUNFLE1BQVAsRUFERyxFQUVWRyxVQUZVLENBRUNBLFVBRkQsRUFFYVIsVUFGYixDQUFiO0FBSUEsVUFBTVksTUFBTSxHQUFHZCxpREFBRSxDQUFDTSxXQUFILEdBQ1pDLE1BRFksQ0FDTCxDQUFDLENBQUQsRUFBSVAsaURBQUUsQ0FBQ2UsR0FBSCxDQUFPSCxJQUFQLEVBQWEsVUFBQVIsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ1ksTUFBTjtBQUFBLE9BQWQsSUFBOEJ2QixJQUFJLENBQUN1QixNQUF2QyxDQURLLEVBRVpQLEtBRlksQ0FFTixDQUFDZixLQUFLLENBQUNSLE1BQU4sR0FBZVEsS0FBSyxDQUFDUCxNQUFOLENBQWFHLE1BQTVCLEdBQXFDLEVBQXRDLEVBQTBDSSxLQUFLLENBQUNQLE1BQU4sQ0FBYUMsR0FBdkQsQ0FGTSxDQUFmO0FBSUEsVUFBTTZCLGdCQUFnQixHQUFHakIsaURBQUUsQ0FBQ2tCLElBQUgsR0FDdEJDLEtBRHNCLENBQ2hCbkIsaURBQUUsQ0FBQ29CLFVBRGEsRUFFdEJDLENBRnNCLENBRXBCLFVBQUFqQixDQUFDO0FBQUEsZUFBSUMsTUFBTSxDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVY7QUFBQSxPQUZtQixFQUd0QmtCLENBSHNCLENBR3BCLFVBQUFsQixDQUFDO0FBQUEsZUFBSVUsTUFBTSxDQUFDVixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVY7QUFBQSxPQUhtQixDQUF6QjtBQUtBLFVBQU1tQixnQkFBZ0IsR0FBR3ZCLGlEQUFFLENBQUN3QixJQUFILEdBQ3RCTCxLQURzQixDQUNoQm5CLGlEQUFFLENBQUNvQixVQURhLEVBRXRCQyxDQUZzQixDQUVwQixVQUFBakIsQ0FBQztBQUFBLGVBQUlDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFWO0FBQUEsT0FGbUIsRUFHdEJxQixFQUhzQixDQUduQixVQUFBckIsQ0FBQztBQUFBLGVBQUlVLE1BQU0sQ0FBQ1YsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFWO0FBQUEsT0FIa0IsRUFJdEJzQixFQUpzQixDQUluQixVQUFBdEIsQ0FBQztBQUFBLGVBQUlVLE1BQU0sQ0FBQyxDQUFELENBQVY7QUFBQSxPQUprQixDQUF6QixDQTlCSyxDQW9DTDs7QUFDQSxVQUFNYSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxNQUFELEVBQVNsQixVQUFULEVBQXFCakIsSUFBckIsRUFBOEI7QUFDeEMsZUFBT2lCLFVBQVUsQ0FBQ1AsR0FBWCxDQUFlLFVBQUEwQixDQUFDO0FBQUEsaUJBQUksQ0FBQ0EsQ0FBRCxFQUFJN0IsaURBQUUsQ0FBQzhCLElBQUgsQ0FBUXJDLElBQVIsRUFBYyxVQUFBVyxDQUFDO0FBQUEsbUJBQUl3QixNQUFNLENBQUNDLENBQUMsR0FBR3pCLENBQUwsQ0FBVjtBQUFBLFdBQWYsQ0FBSixDQUFKO0FBQUEsU0FBaEIsQ0FBUDtBQUNELE9BRkQ7O0FBR0EsVUFBTTJCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUMvQyxTQUFELEVBQWU7QUFDbEMsZUFBTyxVQUFBcUMsQ0FBQztBQUFBLGlCQUFJVyxJQUFJLENBQUNDLEdBQUwsQ0FBU1osQ0FBQyxJQUFJckMsU0FBZCxLQUE0QixDQUE1QixHQUFnQyxRQUFRLElBQUlxQyxDQUFDLEdBQUdBLENBQWhCLElBQXFCckMsU0FBckQsR0FBaUUsQ0FBckU7QUFBQSxTQUFSO0FBQ0QsT0FGRDs7QUFJQSxVQUFNa0QsT0FBTyxHQUFHUCxHQUFHLENBQUNJLFlBQVksQ0FBQ3JDLEtBQUssQ0FBQ1gsaUJBQU4sQ0FBd0JDLFNBQXpCLENBQWIsRUFBa0QwQixVQUFsRCxFQUE4RFIsVUFBOUQsQ0FBbkI7QUFFQWlDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE9BQXZCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0J4QixJQUFwQixFQS9DSyxDQWlETDs7QUFDQSxVQUFNeUIsUUFBUSxHQUFHLEtBQUt6QyxTQUFMLEdBQ2QwQyxZQURjLENBQ0QsS0FEQyxFQUNNO0FBRE4sT0FFZEMsSUFGYyxDQUVULE9BRlMsRUFFQXpDLEtBRkEsRUFHZHlDLElBSGMsQ0FHVCxRQUhTLEVBR0M3QyxLQUFLLENBQUNSLE1BSFAsRUFJZHFELElBSmMsQ0FJVCxPQUpTLEVBSUEsc0JBSkEsQ0FBakIsQ0FsREssQ0F3REw7O0FBQ0FGLGNBQVEsQ0FBQ0MsWUFBVCxDQUFzQixVQUF0QixFQUNHQyxJQURILENBQ1EsT0FEUixFQUNpQixhQURqQixFQUVHeEMsVUFGSCxDQUVjQSxVQUZkLEVBR0d3QyxJQUhILENBR1EsV0FIUix3QkFHb0M3QyxLQUFLLENBQUNSLE1BQU4sR0FBZVEsS0FBSyxDQUFDUCxNQUFOLENBQWFHLE1BSGhFLFFBSUdrRCxJQUpILENBS0l4QyxpREFBRSxDQUFDeUMsVUFBSCxDQUFjcEMsTUFBZCxFQUNHcUMsVUFESCxDQUNjaEMsVUFEZCxDQUxKLENBT007QUFQTjtBQVVBMkIsY0FBUSxDQUFDQyxZQUFULENBQXNCLFVBQXRCLEVBbkVLLENBcUVMOztBQUVBLFVBQU1LLElBQUksR0FBR04sUUFBUSxDQUFDQyxZQUFULENBQXNCLFFBQXRCLEVBQ1ZDLElBRFUsQ0FDTCxPQURLLEVBQ0ksTUFESixDQUFiO0FBR0EsVUFBTUssSUFBSSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxHQUFaLEVBQWlCQyxTQUFqQixDQUEyQixNQUEzQixFQUNWckQsSUFEVSxDQUNMQSxJQURLLENBQWI7QUFFQW1ELFVBQUksQ0FBQ0csS0FBTCxHQUFhRixNQUFiLENBQW9CLE1BQXBCLEVBQ0dOLElBREgsQ0FDUSxHQURSLEVBQ2EsVUFBQW5DLENBQUM7QUFBQSxlQUFJQyxNQUFNLENBQUNELENBQUMsQ0FBQ3RCLEtBQUgsQ0FBVjtBQUFBLE9BRGQsRUFFR3lELElBRkgsQ0FFUSxHQUZSLEVBRWE3QyxLQUFLLENBQUNSLE1BQU4sR0FBZVEsS0FBSyxDQUFDUCxNQUFOLENBQWFHLE1BQTVCLEdBQXFDLEVBRmxELEVBR0dpRCxJQUhILENBR1EsUUFIUixFQUdrQixFQUhsQixFQUlHQSxJQUpILENBSVEsT0FKUixFQUlpQixDQUpqQixFQUtHUyxLQUxILENBS1MsZ0JBTFQsRUFLMkIsVUFMM0IsRUFNR1QsSUFOSCxDQU1RLFFBTlIsRUFNa0IsQ0FObEIsRUFPR0EsSUFQSCxDQU9RLE1BUFIsRUFPZ0IsUUFQaEIsRUE1RUssQ0FxRkw7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFJLFVBQUksQ0FBQ0wsWUFBTCxDQUFrQixXQUFsQixFQUNHVyxLQURILENBQ1NmLE9BRFQsRUFFR25DLFVBRkgsQ0FFY0EsVUFGZCxFQUdHd0MsSUFISCxDQUdRLE1BSFIsRUFHZ0IsUUFIaEIsRUFJR0EsSUFKSCxDQUlRLFFBSlIsRUFJa0IsTUFKbEIsRUFLR0EsSUFMSCxDQUtRLGlCQUxSLEVBSzJCLE9BTDNCLEVBTUdBLElBTkgsQ0FNUSxHQU5SLEVBTWFoQixnQkFOYjtBQVFBb0IsVUFBSSxDQUFDTCxZQUFMLENBQWtCLFdBQWxCLEVBQ0dXLEtBREgsQ0FDU2YsT0FEVCxFQUVHbkMsVUFGSCxDQUVjQSxVQUZkLEVBR0d3QyxJQUhILENBR1EsTUFIUixFQUdnQixNQUhoQixFQUlHQSxJQUpILENBSVEsUUFKUixFQUlrQixNQUpsQixFQUtHQSxJQUxILENBS1EsY0FMUixFQUt3QixHQUx4QixFQU1HQSxJQU5ILENBTVEsaUJBTlIsRUFNMkIsT0FOM0IsRUFPR0EsSUFQSCxDQU9RLEdBUFIsRUFPYXRCLGdCQVBiO0FBU0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUE1SWdDaUMsNEQ7O0FBK0lwQnhFLG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5cbmNsYXNzIENvdW50cnlSYW5raW5nU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgIGtleTogJ2tleScsXG4gICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIGRpc3RyaWJ1dGlvblByb3BzOiB7XG4gICAgICBiYW5kd2lkdGg6IDAuNSxcbiAgICAgIHhUaWNrczogMTAsXG4gICAgfSxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBtYXJnaW46IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogMjAsXG4gICAgfSxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgIC8vIERFRklORSBTQ0FMRVNcbiAgICBjb25zdCBkYXRhVmFsdWVzID0gZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMudmFsdWVdKTtcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhVmFsdWVzKSlcbiAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSk7XG5cbiAgICBjb25zdCB0aHJlc2hvbGRzID0geFNjYWxlLnRpY2tzKHByb3BzLmRpc3RyaWJ1dGlvblByb3BzLnhUaWNrcyk7XG4gICAgY29uc3QgYmlucyA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgICAuZG9tYWluKHhTY2FsZS5kb21haW4oKSlcbiAgICAgIC50aHJlc2hvbGRzKHRocmVzaG9sZHMpKGRhdGFWYWx1ZXMpO1xuXG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGJpbnMsIGQgPT4gZC5sZW5ndGgpIC8gZGF0YS5sZW5ndGhdKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tIC0gMjUsIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgIGNvbnN0IGRpc3RyaWJ1dGlvbkxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKVxuICAgICAgLngoZCA9PiB4U2NhbGUoZFswXSkpXG4gICAgICAueShkID0+IHlTY2FsZShkWzFdKSk7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb25BcmVhID0gZDMuYXJlYSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVCYXNpcylcbiAgICAgIC54KGQgPT4geFNjYWxlKGRbMF0pKVxuICAgICAgLnkxKGQgPT4geVNjYWxlKGRbMV0pKVxuICAgICAgLnkwKGQgPT4geVNjYWxlKDApKTtcblxuICAgIC8vIERJU1RSSUJVVElPTiBNQVRIXG4gICAgY29uc3Qga2RlID0gKGtlcm5lbCwgdGhyZXNob2xkcywgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRocmVzaG9sZHMubWFwKHQgPT4gW3QsIGQzLm1lYW4oZGF0YSwgZCA9PiBrZXJuZWwodCAtIGQpKV0pO1xuICAgIH07XG4gICAgY29uc3QgZXBhbmVjaG5pa292ID0gKGJhbmR3aWR0aCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT4gTWF0aC5hYnMoeCAvPSBiYW5kd2lkdGgpIDw9IDEgPyAwLjc1ICogKDEgLSB4ICogeCkgLyBiYW5kd2lkdGggOiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBkZW5zaXR5ID0ga2RlKGVwYW5lY2huaWtvdihwcm9wcy5kaXN0cmlidXRpb25Qcm9wcy5iYW5kd2lkdGgpLCB0aHJlc2hvbGRzLCBkYXRhVmFsdWVzKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZW5zaXR5JywgZGVuc2l0eSk7XG4gICAgY29uc29sZS5sb2coJ2JpbnMnLCBiaW5zKTtcblxuICAgIC8vIERSQVcgQ0hBUlRcbiAgICBjb25zdCBjaGFydFNWRyA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ3N2ZycpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLmhlaWdodClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdDb3VudHJ5UmFua2luZ1N0cmlwcycpO1xuXG4gICAgLy8gYWRkIGF4aXNcbiAgICBjaGFydFNWRy5hcHBlbmRTZWxlY3QoJ2cuYXhpcy14JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIGF4aXMteCcpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b219KWApXG4gICAgICAuY2FsbChcbiAgICAgICAgZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgICAgLnRpY2tWYWx1ZXModGhyZXNob2xkcylcbiAgICAgICAgICAvLyAudGlja0Zvcm1hdChkYXRlRm9ybWF0KVxuICAgICAgKTtcblxuICAgIGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5heGlzLXknKTtcblxuICAgIC8vIGFkZCBkaXN0cmlidXRpb24gcGF0aFxuXG4gICAgY29uc3QgcGxvdCA9IGNoYXJ0U1ZHLmFwcGVuZFNlbGVjdCgnZy5wbG90JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdwbG90Jyk7XG5cbiAgICBjb25zdCBydWdzID0gcGxvdC5hcHBlbmQoJ2cnKS5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoZGF0YSk7XG4gICAgcnVncy5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIGQgPT4geFNjYWxlKGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ3knLCBwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tIC0gMjQpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMjQpXG4gICAgICAuYXR0cignd2lkdGgnLCAyKVxuICAgICAgLnN0eWxlKCdtaXgtYmxlbmQtbW9kZScsICdtdWx0aXBseScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ29yYW5nZScpO1xuXG4gICAgLy8gY29uc3QgZGlzdFBhdGggPSBwbG90LnNlbGVjdEFsbCgncGF0aCcpO1xuXG4gICAgLy8gcGxvdC5hcHBlbmQoJ2cnKVxuICAgIC8vICAgLmF0dHIoJ2ZpbGwnLCAnI2JiYicpXG4gICAgLy8gICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAvLyAgIC5kYXRhKGJpbnMpXG4gICAgLy8gICAuam9pbigncmVjdCcpXG4gICAgLy8gICAuYXR0cigneCcsIGQgPT4geFNjYWxlKGQueDApICsgMSlcbiAgICAvLyAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGQubGVuZ3RoLCBkYXRhLmxlbmd0aCk7XG4gICAgLy8gICAgIHJldHVybiB5U2NhbGUoZC5sZW5ndGggLyBkYXRhLmxlbmd0aCk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmF0dHIoJ3dpZHRoJywgZCA9PiB4U2NhbGUoZC54MSkgLSB4U2NhbGUoZC54MCkgLSAxKVxuICAgIC8vICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4geVNjYWxlKDApIC0geVNjYWxlKGQubGVuZ3RoIC8gZGF0YS5sZW5ndGgpKTtcblxuICAgIHBsb3QuYXBwZW5kU2VsZWN0KCdwYXRoLmFyZWEnKVxuICAgICAgLmRhdHVtKGRlbnNpdHkpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnb3JhbmdlJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uQXJlYSk7XG5cbiAgICBwbG90LmFwcGVuZFNlbGVjdCgncGF0aC5saW5lJylcbiAgICAgIC5kYXR1bShkZW5zaXR5KVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxLjUpXG4gICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgIC5hdHRyKCdkJywgZGlzdHJpYnV0aW9uTGluZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5UmFua2luZ1N0cmlwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})