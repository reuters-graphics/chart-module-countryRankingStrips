import * as d3 from 'd3';
import { selection } from 'd3';
import merge from 'lodash/merge';
import D3Locale from '@reuters-graphics/d3-locale';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  var _super5 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var CountryRankingStrips = /*#__PURE__*/function (_ChartComponent) {
  _inherits(CountryRankingStrips, _ChartComponent);

  var _super = _createSuper(CountryRankingStrips);

  function CountryRankingStrips() {
    var _this;

    _classCallCheck(this, CountryRankingStrips);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      locale: 'en',
      chartTitle: '',
      dataParams: {
        key: 'key',
        value: 'value'
      },
      height: 100,
      margin: {
        top: 18,
        right: 18,
        bottom: 20,
        left: 4
      },
      densityPlot: false,
      histogram: false,
      distributionProps: {
        bandwidth: 1,
        threshold: 35,
        // same as bin-width for histogram
        curveType: 'curveBasis'
      },
      annotation: {
        // for distribution chart
        size: 500,
        offset: 6 // orient: 'right', // left or right

      },
      rugPlot: true,
      rugProps: {
        height: 16,
        customAxisLabels: ['left-label', 'right-label'],
        customAxisFormat: true,
        rugWidth: 1,
        rugColor: 'rgba(255, 255, 255, 0.25)' // annotation: [
        //   {
        //     key: 'ES',
        //     text: 'Spain',
        //   },
        // ],

      } // markDataPoint: [// key should be same as dataParams
      //   {
      //     key: 'FR',
      //     // text: 'India',
      //   },
      //   // {
      //   //   key: 'CA',
      //   //   // text: 'Yemen',
      //   // },
      // ],

    });

    return _this;
  }

  _createClass(CountryRankingStrips, [{
    key: "draw",
    // defaultData = defaultData;
    value: function draw() {
      var allData = this.data();
      var props = this.props();
      var node = this.selection().node();

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var transition = d3.transition().duration(750); // number formatters

      var locale = new D3Locale(props.locale);
      var numFormat = locale.format(','); // ADD CHART TITLE

      if (props.chartTitle) {
        this.selection().appendSelect('div.chart-title').attr('class', 'font-display chart-title').html("<h6>".concat(props.chartTitle, "</h6>"));
      } // FIX DATA
      // filter null and NaN, keep 0's


      var data = allData.filter(function (d) {
        return parseFloat(d[props.dataParams.value]) !== 'null' && !isNaN(parseFloat(d[props.dataParams.value]));
      });
      var dataValues = data.map(function (d) {
        return d[props.dataParams.value];
      });
      var extent = d3.extent(dataValues);
      var min = extent[0];
      var max = extent[1]; // We normalize data to fit in a range 0 - 100

      var normalize = function normalize(d) {
        return 100 * (d - min) / (max - min);
      };

      if (props.histogram || props.densityPlot) {
        dataValues = dataValues.map(function (d) {
          return normalize(d);
        });
        data = data.map(function (d) {
          return {
            key: d[props.dataParams.key],
            value: normalize(d[props.dataParams.value])
          };
        });
      }

      console.log(data); // DEFINE SCALES

      var xScale = d3.scaleLinear().domain(d3.extent(dataValues)).nice().range([props.margin.left, width - props.margin.right]);
      var thresholds, bins, yScale;

      if (props.histogram || props.densityPlot) {
        thresholds = xScale.ticks(props.distributionProps.threshold);
        bins = d3.histogram().domain(xScale.domain()).thresholds(thresholds)(dataValues);
        yScale = d3.scaleLinear().domain([0, d3.max(bins, function (d) {
          return d.length;
        }) / data.length]).range([props.height - props.margin.bottom, props.margin.top]);
      } // DRAW CHART


      var chartSVG = this.selection().appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width).attr('height', props.height).attr('class', 'CountryRankingStrips'); // add chart plot holder

      var plot = chartSVG.appendSelect('g.plot').attr('class', 'plot'); // add axis

      if (props.histogram || props.densityPlot) {
        chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', "translate(0,".concat(props.height - props.margin.bottom, ")")).call(d3.axisBottom(xScale) // .tickValues(thresholds)
        .tickValues(xScale.domain()).tickFormat(numFormat)); // chartSVG.appendSelect('g.axis-y')
        //   .attr('transform', `translate(${props.margin.left},0)`)
        //   .call(d3.axisLeft(yScale).ticks(null, '%'))
        //   .call(g => g.select('.domain').remove());
      }

      if (props.densityPlot) {
        var distributionLine = d3.line().curve(d3[props.distributionProps.curveType]).x(function (d) {
          return xScale(d[0]);
        }).y(function (d) {
          return yScale(d[1]);
        });
        var distributionArea = d3.area().curve(d3[props.distributionProps.curveType]).x(function (d) {
          return xScale(d[0]);
        }).y1(function (d) {
          return yScale(d[1]);
        }).y0(function (d) {
          return yScale(0);
        }); // DISTRIBUTION MATH

        var kde = function kde(kernel, thresholds, data) {
          return thresholds.map(function (t) {
            return [t, d3.mean(data, function (d) {
              return kernel(t - d);
            })];
          });
        };

        var epanechnikov = function epanechnikov(bandwidth) {
          return function (x) {
            return Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
          };
        };

        var density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues); // console.log(yScale.domain());

        console.log('density', density);
        console.log('bins', bins);
        plot.appendSelect('path.distribution-area').attr('class', 'area distribution-area').datum(density).transition(transition).attr('stroke-linejoin', 'round').attr('d', distributionArea); // console.log('area', d3.polygonArea((density)));

        plot.appendSelect('path.distribution-line').attr('class', 'line distribution-line').datum(density).transition(transition).attr('stroke-linejoin', 'round').attr('d', distributionLine); // HIGHLIGHT DATA PONT

        if (props.markDataPoint) {
          // set data point
          var markerData = props.markDataPoint.map(function (element) {
            var val = element[props.dataParams.value] ? normalize(element[props.dataParams.value]) : normalize(allData.find(function (e) {
              return e[props.dataParams.key] === element[props.dataParams.key];
            })[props.dataParams.value]);
            var posDist = 0;
            var posBin = bins.find(function (element, i) {
              posDist = i;
              return element.includes(val);
            });
            var densityScale = d3.scaleLinear().domain([posBin.x0, posBin.x1]).range([density[posDist][1], density[posDist + 1][1]]);
            return {
              key: element[props.dataParams.key],
              value: val,
              text: element.text,
              densityIndex: posDist,
              density: densityScale(val),
              bin: posBin
            };
          }); // width of highlight rect

          var highlightWidth = width / data.length; // console.log(markerData);
          // add distrubution clipping mask

          var svgDefs = chartSVG.appendSelect('defs');
          svgDefs.appendSelect('clipPath').attr('id', "".concat(node.id, "-clip-path")).appendSelect('path').transition(transition).attr('d', distributionArea(density)); // add highlight shape

          var highlightGroup = chartSVG.appendSelect('g.highlights').attr('class', 'highlights');
          var highlights = highlightGroup.selectAll('rect').data(markerData);
          highlights.enter().append('rect').attr('class', function (d) {
            return "".concat(d.key);
          }).attr('data-value', function (d) {
            return d.value;
          }).attr('x', function (d) {
            return xScale(d.value) - 0.5 * highlightWidth;
          }).attr('y', props.height - props.margin.bottom).attr('height', props.height - props.margin.top - props.margin.bottom).attr('width', highlightWidth).style('clip-path', "url(#".concat(node.id, "-clip-path)")).merge(highlights).transition(transition.delay(50).duration(750)).attr('class', function (d) {
            return "".concat(d.key);
          }).attr('data-value', function (d) {
            return d.value;
          }).attr('x', function (d) {
            return xScale(d.value) - 0.5 * highlightWidth;
          }).attr('y', props.margin.top).attr('height', props.height - props.margin.top - props.margin.bottom).attr('width', highlightWidth).style('clip-path', "url(#".concat(node.id, "-clip-path)"));
          highlights.exit().attr('height', 0).transition(transition).remove(); // add highlight marker for annotation

          var arc = {};
          arc.right = {
            draw: function draw(context, size) {
              var r = Math.sqrt(2 * size / Math.PI); // const orgin = (4 * r) / (3 * Math.PI); // the orgin of the circle

              context.arc(r, -props.annotation.offset, r, Math.PI, -Math.PI / 2, false);
            }
          };
          arc.left = {
            draw: function draw(context, size) {
              var r = Math.sqrt(2 * size / Math.PI); // const orgin = (4 * r) / (3 * Math.PI); // the orgin of the circle

              context.arc(-r, -props.annotation.offset, r, 0, -Math.PI / 2, true);
            }
          };
          var pointerSymbol = d3.symbol().type(arc[props.annotation.orient]).size(props.annotation.size);
          var arcRadius = Math.sqrt(2 * props.annotation.size / Math.PI); // const symBolMarker = props.markDataPoint.map(d => {
          //   return {
          //     key: d[props.dataParams.key],
          //     line: [
          //       [25, -25], [20, -25], [5, -20], [0, 0],
          //     ],
          //   };
          // });
          // const pathMarker = d3.line()
          //   .curve(d3.curveBasis)
          //   .x(d => (d[0]))
          //   .y(d => (d[1]));

          var highlightMarkers = highlightGroup.selectAll('g.marker-g').data(markerData, function (d) {
            return d.key;
          });
          var markerG = highlightMarkers.enter().append('g').attr('class', function (d) {
            return "marker-g ".concat(d.key);
          }).attr('transform', function (d) {
            return "translate(".concat(xScale(d.value), ", ").concat(yScale(d.density), ")");
          });
          markerG.append('path').attr('class', function (d) {
            return "marker ".concat(d.key);
          }).attr('fill', 'none').attr('d', function (d) {
            return props.annotation.orient ? pointerSymbol() : xScale(d.value) >= width / 5 ? d3.symbol().type(arc.left).size(props.annotation.size)() : d3.symbol().type(arc.right).size(props.annotation.size)();
          });
          markerG.append('text').attr('transform', function (d) {
            return xScale(d.value) >= width / 5 ? "translate(".concat(-arcRadius - 6, ", ").concat(-arcRadius - 6, ")") : "translate(".concat(arcRadius + 6, ", ").concat(-arcRadius - 6, ")");
          }).attr('text-anchor', function (d) {
            return xScale(d.value) >= width / 5 ? 'end' : 'start';
          }).append('tspan').text(function (d) {
            return d.text ? "".concat(d.text) : "".concat(d.key);
          });
          highlightMarkers.merge(highlightMarkers).transition(transition).attr('transform', function (d) {
            return "translate(".concat(xScale(d.value), ", ").concat(yScale(d.density), ")");
          });
          highlightMarkers.exit().remove();
        }
      } // RUGPLOT


      if (props.rugPlot) {
        var rugPosition = {
          y: props.height - props.margin.bottom - props.rugProps.height - 4,
          height: props.rugProps.height
        }; // add rugplot axis

        if (!props.histogram || !props.densityPlot) {
          var rugXAxis = chartSVG.appendSelect('g.axis-x').attr('class', 'axis axis-x').transition(transition).attr('transform', "translate(0,".concat(props.height - props.margin.bottom, ")"));

          if (props.rugProps.customAxisLabels) {
            rugXAxis.call(d3.axisBottom(xScale).tickValues(xScale.domain()).tickFormat(function (d, i) {
              return props.rugProps.customAxisLabels[i];
            }));
          } else {
            rugXAxis.call(d3.axisBottom(xScale).tickValues(xScale.domain()).tickFormat(numFormat));
          } // custom label format


          if (props.rugProps.customAxisFormat) {
            d3.select("#".concat(node.id, " .CountryRankingStrips .axis.axis-x")).classed('customAxisFormat', 'true');
          }
        }

        var rugPlot = plot.appendSelect('g.rugplot').attr('class', 'rugplot');
        var rugs = rugPlot.selectAll('rect').data(data);
        rugs.enter().append('rect').attr('class', function (d) {
          return "".concat(d.key);
        }) // .attr('data-value', d => `${d.value}`)
        .style('fill', props.rugProps.rugColor).attr('x', function (d) {
          return xScale(d.value) - props.rugProps.rugWidth / 2;
        }).attr('y', rugPosition.y).attr('height', rugPosition.height).attr('width', props.rugProps.rugWidth).merge(rugs).transition(transition).attr('x', function (d) {
          return xScale(d.value) - props.rugProps.rugWidth / 2;
        }).attr('y', rugPosition.y).attr('height', rugPosition.height).attr('width', props.rugProps.rugWidth);
        rugs.raise().exit().remove(); // add highlight

        if (props.rugProps.annotation && !(props.histogram || props.densityPlot)) {
          var _highlightGroup = chartSVG.appendSelect('g.highlights').attr('class', 'highlights');

          _highlightGroup.appendSelect('rect.highlight-bar').attr('class', 'highlight-bar').style('opacity', 0.55).attr('x', xScale.range()[0]).attr('y', rugPosition.y).attr('height', rugPosition.height).attr('width', xScale.range()[1] - xScale.range()[0]).transition(transition).attr('width', xScale.range()[1] - xScale.range()[0]);

          var _markerData = props.rugProps.annotation.map(function (element) {
            var val = element[props.dataParams.value] ? element[props.dataParams.value] : data.find(function (e) {
              return e[props.dataParams.key] === element[props.dataParams.key];
            })[props.dataParams.value];
            return {
              key: element[props.dataParams.key],
              value: val,
              text: element.text || element[props.dataParams.key]
            };
          });

          var markerPos = Math.sqrt(2 * (rugPosition.height * 3) / Math.PI) + 4;
          var markerSymbol = d3.symbol().type(d3.symbolTriangle).size(rugPosition.height * 3);

          var _highlightMarkers = _highlightGroup.selectAll('g.marker-g').data(_markerData, function (d) {
            return d.key;
          });

          var _markerG = _highlightMarkers.enter().append('g').attr('class', function (d) {
            return "marker-g ".concat(d.key);
          }).attr('transform', function (d) {
            return "translate(".concat(xScale(d.value), ", ").concat(rugPosition.y - markerPos, ")");
          });

          _markerG.append('path').attr('class', function (d) {
            return "marker-rug ".concat(d.key);
          }).style('transform', 'rotate(180deg)').attr('fill', 'none').attr('d', markerSymbol);

          _markerG.append('text').attr('transform', "translate(0, ".concat(-markerPos - 2, ")")).attr('text-anchor', 'middle').append('tspan').text(function (d) {
            return "".concat(d.text);
          });

          _highlightMarkers.merge(_highlightMarkers).transition(transition).attr('transform', function (d) {
            return "translate(".concat(xScale(d.value), ", ").concat(rugPosition.y - markerPos, ")");
          });

          _highlightMarkers.exit().remove();

          d3.select("#".concat(node.id, " .highlights")).lower(); // highlight the rugs

          _markerData.forEach(function (element) {
            d3.select("#".concat(node.id, " .CountryRankingStrips rect.").concat(element.key)).classed('highlighted', 'true');
          });
        }
      } // HISTOGRAM CODE


      if (props.histogram) {
        var hists = plot.appendSelect('g.histogram').attr('class', 'histogram').selectAll('rect').data(bins);
        hists.enter().append('rect').attr('x', function (d) {
          return xScale(d.x0) + 1;
        }).attr('y', function (d) {
          return yScale(d.length / data.length);
        }).attr('width', function (d) {
          return xScale(d.x1) - xScale(d.x0) - 1;
        }).attr('height', function (d) {
          return yScale(0) - yScale(d.length / data.length);
        }).merge(hists).transition(transition).attr('x', function (d) {
          return xScale(d.x0) + 1;
        }).attr('y', function (d) {
          return yScale(d.length / data.length);
        }).attr('width', function (d) {
          return xScale(d.x1) - xScale(d.x0) - 1;
        }).attr('height', function (d) {
          return yScale(0) - yScale(d.length / data.length);
        });
        hists.exit().remove(); // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT
        // const dataHighlight = bins.find(element => {
        //   return element.includes(6.2960862166761205);
        // });
        // console.log((dataHighlight));
        // const posHighlight = (d) => {
        //   return [
        //     [(d.x0), (0)],
        //     [(d.x0), density[(d.x0)][1]],
        //     [(d.x1), density[(d.x1)][1]],
        //     [(d.x1), (0)],
        //   ];
        // };
        // console.log(pathHighlight(dataHighlight));
        // plot.appendSelect('path.area-highlight')
        //   .attr('class', 'area-highlight')
        //   .datum(pathHighlight(dataHighlight))
        //   .attr('fill', 'red')
        //   .style('clip-path', 'url(#clip-path)')
        //   .attr('d', distributionArea);
      }

      return this;
    }
  }]);

  return CountryRankingStrips;
}(ChartComponent);

export default CountryRankingStrips;
