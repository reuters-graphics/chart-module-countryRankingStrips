import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
// import { num2unitwords } from './utils/utils';

import D3Locale from '@reuters-graphics/d3-locale';
import throttle from 'lodash/throttle';

class CountryRankingStrips extends ChartComponent {
  defaultProps = {
    locale: 'en',
    chartTitle: '',
    dataParams: {
      key: 'key',
      value: 'value',
    },
    height: 100,
    margin: {
      top: 4,
      right: 8,
      bottom: 36,
      left: 8,
    },
    densityPlot: false,
    histogram: false,
    distributionProps: {
      bandwidth: 1,
      threshold: 35, // same as bin-width for histogram
      curveType: 'curveBasis',
    },
    annotation: { // for distribution chart
      size: 500,
      offset: 6,
      // orient: 'right', // left or right
    },
    rugPlot: true,
    rugProps: {
      height: 16,
      rugWidth: 1,
      rugColor: 'rgba(255, 255, 255, 0.75)',
      highlightWidth: 2,
      highlightColor: '#eec331',
      getTooltipText: (key) => key,
      // tooltipNumberFormatter: (num) => num,
      customAxisLabels: [],
      customAxisFormat: false,
      showSplitAxis: false,
      splitAxis: {
        value: 0,
        colors: ['#74c476', '#ee665b'],
      },
      // annotation: [
      //   {
      //     key: 'ES',
      //     text: 'Spain',
      //   },
      // ],
    },
    // markDataPoint: [// key should be same as dataParams
    //   {
    //     key: 'FR',
    //     // text: 'India',
    //   },
    //   // {
    //   //   key: 'CA',
    //   //   // text: 'Yemen',
    //   // },
    // ],
  };

  // defaultData = defaultData;

  draw() {
    const allData = this.data();
    const props = this.props();
    const node = this.selection().node();

    const { width } = node.getBoundingClientRect();

    const transition = d3.transition()
      .duration(750);

    // number formatters
    const locale = new D3Locale(props.locale);
    const numFormat = locale.format(',');
    const num2unitwords = locale.format('.3~s');
    const tooltipNumberFormatter = props.rugProps.tooltipNumberFormatter || num2unitwords;

    // ADD CHART TITLE
    if (props.chartTitle) {
      this.selection()
        .appendSelect('div.chart-title')
        .attr('class', 'font-display chart-title')
        .html(`<h6>${props.chartTitle}</h6>`);
    }

    // FIX DATA
    // filter null and NaN, keep 0's
    let data = allData.filter(d => parseFloat(d[props.dataParams.value]) !== 'null' && !isNaN(parseFloat(d[props.dataParams.value])));

    let dataValues = data.map(d => d[props.dataParams.value]);

    const extent = d3.extent(dataValues);
    const min = extent[0];
    const max = extent[1];

    // We normalize data to fit in a range 0 - 100
    const normalize = d => 100 * (d - min) / (max - min);

    if (props.histogram || props.densityPlot) {
      dataValues = dataValues.map(d => normalize(d));
      data = data.map(d => {
        return {
          key: d[props.dataParams.key],
          value: normalize(d[props.dataParams.value]),
        };
      });
    }
    // console.log((data));

    // DEFINE SCALES
    const xScale = d3.scaleLinear()
      .domain(d3.extent(dataValues)).nice()
      .range([props.margin.left, width - props.margin.right]);

    let thresholds, bins, yScale;
    if (props.histogram || props.densityPlot) {
      thresholds = xScale.ticks(props.distributionProps.threshold);
      bins = d3.histogram()
        .domain(xScale.domain())
        .thresholds(thresholds)(dataValues);

      yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length) / data.length])
        .range([props.height - props.margin.bottom, props.margin.top]);
    }
    // DRAW CHART
    const chartSVG = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .attr('class', 'CountryRankingStrips');

    // add chart plot holder
    const plot = chartSVG.appendSelect('g.plot')
      .attr('class', 'plot');

    // add axis
    if (props.histogram || props.densityPlot) {
      chartSVG.appendSelect('g.axis-x')
        .attr('class', 'axis axis-x')
        .transition(transition)
        .attr('transform', `translate(0,${props.height - props.margin.bottom})`)
        .call(
          d3.axisBottom(xScale)
          // .tickValues(thresholds)
            .tickValues(xScale.domain())
            .tickFormat(numFormat)
        );

    // chartSVG.appendSelect('g.axis-y')
    //   .attr('transform', `translate(${props.margin.left},0)`)
    //   .call(d3.axisLeft(yScale).ticks(null, '%'))
    //   .call(g => g.select('.domain').remove());
    }

    if (props.densityPlot) {
      const distributionLine = d3.line()
        .curve(d3[props.distributionProps.curveType])
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]));

      const distributionArea = d3.area()
        .curve(d3[props.distributionProps.curveType])
        .x(d => xScale(d[0]))
        .y1(d => yScale(d[1]))
        .y0(d => yScale(0));

      // DISTRIBUTION MATH
      const kde = (kernel, thresholds, data) => {
        return thresholds.map(t => [t, d3.mean(data, d => kernel(t - d))]);
      };
      const epanechnikov = (bandwidth) => {
        return x => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
      };

      const density = kde(epanechnikov(props.distributionProps.bandwidth), thresholds, dataValues);

      // console.log(yScale.domain());

      console.log('density', density);
      console.log('bins', bins);

      plot.appendSelect('path.distribution-area')
        .attr('class', 'area distribution-area')
        .datum(density)
        .transition(transition)
        .attr('stroke-linejoin', 'round')
        .attr('d', distributionArea);

      // console.log('area', d3.polygonArea((density)));

      plot.appendSelect('path.distribution-line')
        .attr('class', 'line distribution-line')
        .datum(density)
        .transition(transition)
        .attr('stroke-linejoin', 'round')
        .attr('d', distributionLine);

      // HIGHLIGHT DATA PONT
      if (props.markDataPoint) {
      // set data point
        const markerData = props.markDataPoint.map(element => {
          const val = (element[props.dataParams.value] !== null && !isNaN(element[props.dataParams.value])) ? normalize(element[props.dataParams.value]) : normalize(allData.find(e => e[props.dataParams.key] === element[props.dataParams.key])[props.dataParams.value]);

          let posDist = 0;
          const posBin = bins.find((element, i) => {
            posDist = i;
            return element.includes(val);
          });

          const densityScale = d3.scaleLinear()
            .domain([posBin.x0, posBin.x1])
            .range([density[posDist][1], density[posDist + 1][1]]);

          return {
            key: element[props.dataParams.key] || `value${val}`,
            value: val,
            text: element.text,
            densityIndex: posDist,
            density: densityScale(val),
            bin: posBin,
          };
        });
        // width of highlight rect
        const highlightWidth = width / data.length;

        // console.log(markerData);

        // add distrubution clipping mask
        const svgDefs = chartSVG.appendSelect('defs');

        svgDefs.appendSelect('clipPath')
          .attr('id', `${node.id}-clip-path`)
          .appendSelect('path')
          .transition(transition)
          .attr('d', distributionArea(density));

        // add highlight shape
        const highlightGroup = chartSVG.appendSelect('g.highlights')
          .attr('class', 'highlights');
        const highlights = highlightGroup.selectAll('rect')
          .data(markerData, d => d.key);

        highlights.enter().append('rect')
          .attr('class', d => `${d.key}`)
          .attr('data-value', d => d.value)
          .attr('x', d => xScale(d.value) - 0.5 * highlightWidth)
          .attr('y', props.height - props.margin.bottom)
          .attr('height', props.height - props.margin.top - props.margin.bottom)
          .attr('width', highlightWidth)
          .style('clip-path', `url(#${node.id}-clip-path)`)
          .merge(highlights)
          .transition(transition.delay(50).duration(750))
          .attr('class', d => `${d.key}`)
          .attr('data-value', d => d.value)
          .attr('x', d => xScale(d.value) - 0.5 * highlightWidth)
          .attr('y', props.margin.top)
          .attr('height', props.height - props.margin.top - props.margin.bottom)
          .attr('width', highlightWidth)
          .style('clip-path', `url(#${node.id}-clip-path)`);

        highlights.exit()
          .attr('height', 0)
          .transition(transition)
          .remove();

        // add highlight marker for annotation
        const arc = {};
        arc.right = {
          draw: function(context, size) {
            const r = Math.sqrt(2 * size / Math.PI);
            // const orgin = (4 * r) / (3 * Math.PI); // the orgin of the circle
            context.arc(r, -props.annotation.offset, r, Math.PI, -Math.PI / 2, false);
          },
        };
        arc.left = {
          draw: function(context, size) {
            const r = Math.sqrt(2 * size / Math.PI);
            // const orgin = (4 * r) / (3 * Math.PI); // the orgin of the circle
            context.arc(-r, -props.annotation.offset, r, 0, -Math.PI / 2, true);
          },
        };

        const pointerSymbol = d3.symbol().type(arc[props.annotation.orient]).size(props.annotation.size);
        const arcRadius = Math.sqrt(2 * props.annotation.size / Math.PI);

        // const symBolMarker = props.markDataPoint.map(d => {
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

        const highlightMarkers = highlightGroup.selectAll('g.marker-g')
          .data(markerData, d => d.key);

        const markerG = highlightMarkers.enter().append('g')
          .attr('class', d => `marker-g ${d.key}`)
          .attr('transform', d => `translate(${xScale(d.value)}, ${yScale(d.density)})`);

        markerG.append('path')
          .attr('class', d => `marker ${d.key}`)
          .attr('fill', 'none')
          .attr('d', d => props.annotation.orient ? pointerSymbol() :
            (
              xScale(d.value) >= width / 5 ? d3.symbol().type(arc.left).size(props.annotation.size)() : d3.symbol().type(arc.right).size(props.annotation.size)()
            ));
        markerG.append('text')
          .attr('transform', d => xScale(d.value) >= width / 5 ? `translate(${-arcRadius - 6}, ${-arcRadius - 6})` : `translate(${arcRadius + 6}, ${-arcRadius - 6})`)
          .attr('text-anchor', d => xScale(d.value) >= width / 5 ? 'end' : 'start')
          .append('tspan')
          .text(d => d.text ? `${d.text}` : `${d.key}`);

        highlightMarkers
          .merge(highlightMarkers)
          .transition(transition)
          .attr('transform', d => `translate(${xScale(d.value)}, ${yScale(d.density)})`);

        highlightMarkers.exit().remove();
      }
    }

    // RUGPLOT
    if (props.rugPlot) {
      const rugPosition = {
        y: props.height - props.margin.bottom - props.rugProps.height - 4,
        height: props.rugProps.height,
      };
      var xScaleRug;
      // add rugplot axis
      if (props.histogram || props.densityPlot) {
        xScaleRug = xScale;
      } else {
        xScaleRug = d3.scaleLinear()
          .domain(d3.extent(dataValues))
          // .domain([-d3.extent(dataValues)[1], d3.extent(dataValues)[1]])
          .range([props.margin.left, width - props.margin.right]);
        const rugXAxis = chartSVG.appendSelect('g.axis-x')
          .attr('class', 'axis axis-x')
          .transition(transition)
          .attr('transform', `translate(0,${props.height - props.margin.bottom})`);

        if (props.rugProps.customAxisLabels) {
          rugXAxis.call(
            d3.axisBottom(xScaleRug)
              .tickValues(props.rugProps.customAxisLabels.map(d => d.pos))
              .tickFormat((d, i) => props.rugProps.customAxisLabels[i].label)
              .tickSize(20)
          );
        } else {
          rugXAxis.call(
            d3.axisBottom(xScaleRug)
              .tickValues(xScaleRug.domain())
              .tickFormat(numFormat)
              .tickSize(20)
          );
        }
        // custom label format
        if (props.rugProps.customAxisFormat) {
          this.selection().select('.CountryRankingStrips .axis.axis-x').classed('customAxisFormat', 'true');
        }
      }
      // custom split axis
      let splitAxisHeight = 0;
      const splitAxis = chartSVG.appendSelect('g.split-axis')
        .attr('class', 'split-axis')
        .attr('transform', `translate(0,${props.height - props.margin.bottom})`);
      if (props.rugProps.showSplitAxis && props.rugProps.splitAxis) {
        splitAxisHeight = 2;
        // left
        splitAxis.appendSelect('rect.axis-left')
          .attr('class', 'axis-left')
          .style('fill', props.rugProps.splitAxis.colors[0])
          .style('stroke', props.rugProps.splitAxis.colors[0])
          .style('stroke-width', 1)
          .attr('x', xScaleRug.range()[0])
          .attr('y', -2)
          .attr('height', splitAxisHeight)
          .attr('width', xScaleRug(props.rugProps.splitAxis.value) - xScaleRug.range()[0] - 1);
        // right
        splitAxis.appendSelect('rect.axis-right')
          .attr('class', 'axis-right')
          .style('fill', props.rugProps.splitAxis.colors[1])
          .style('stroke', props.rugProps.splitAxis.colors[1])
          .style('stroke-width', 1)
          .attr('x', xScaleRug(props.rugProps.splitAxis.value) + 1)
          .attr('y', -2)
          .attr('height', splitAxisHeight)
          .attr('width', xScaleRug.range()[1] - xScaleRug(props.rugProps.splitAxis.value));

        // add css colors to the axis labels
        chartSVG.select('g.axis').classed('split-axis', true);
        // chartSVG.select('g.axis.customAxisFormat g.tick:first-of-type text').style('fill', props.rugProps.splitAxis.colors[0]);
        // chartSVG.select('g.axis.customAxisFormat g.tick:last-of-type text').style('fill', props.rugProps.splitAxis.colors[1]);
      } else {
        splitAxis.remove();
        chartSVG.select('g.axis').classed('split-axis', false);
      }

      const rugPlot = plot.appendSelect('g.rugplot')
        .attr('class', 'rugplot');

      const rugs = rugPlot.selectAll('rect')
        .data(data, d => d.key);
      rugs.enter().append('rect')
        .attr('class', d => `${d[props.dataParams.key]}`)
        .attr('data-value', d => `${d[props.dataParams.value]}`)
        .style('fill', props.rugProps.rugColor)
        // .style('fill', d => d[props.dataParams.value] < 0 ? '#ee665b' : '#74c476')
        .attr('x', d => xScaleRug(d[props.dataParams.value]) - props.rugProps.rugWidth / 2)
        .attr('y', rugPosition.y)
        .attr('height', rugPosition.height)
        .attr('width', props.rugProps.rugWidth)
        .merge(rugs)
        .transition(transition)
        .attr('x', d => xScaleRug(d[props.dataParams.value]) - props.rugProps.rugWidth / 2)
        .attr('y', rugPosition.y)
        .attr('height', rugPosition.height)
        .attr('width', props.rugProps.rugWidth);

      rugs.exit().remove();

      // add highlight

      if (props.rugProps.annotation && !(props.histogram || props.densityPlot)) {
        const markerData = props.rugProps.annotation.map(element => {
          // console.log(element);
          const val = (element[props.dataParams.value] !== null && !isNaN(element[props.dataParams.value])) ? (element[props.dataParams.value]) : (data.find(e => e[props.dataParams.key] === element[props.dataParams.key])[props.dataParams.value]);

          return {
            key: element[props.dataParams.key] || `value${val}`,
            value: val,
            text: element.text || props.rugProps.getTooltipText(element[props.dataParams.key]),
            // text: element.text || element[props.dataParams.key],
          };
        });
        const tooltipData = data.map(element => {
          return {
            key: element[props.dataParams.key],
            value: element[props.dataParams.value],
            text: props.rugProps.getTooltipText(element[props.dataParams.key]),
          };
        });

        // console.log(markerData);
        const _annoPos = (text, val) => {
          let textPos = 0;
          let textAnchor = 'middle';
          const textLen = text.length * 3;
          if (textLen) {
            if (xScaleRug(val) + textLen >= xScaleRug.range()[1]) {
              textPos = 6;
              textAnchor = 'end';
            }
            if (xScaleRug(val) - textLen <= xScaleRug.range()[0]) {
              textPos = -6;
              textAnchor = 'start';
            }
          }
          return {
            xPos: textPos,
            xAnchor: textAnchor,

          };
        };

        const markerPos = Math.sqrt(2 * (rugPosition.height * 3) / Math.PI) + 4;
        const markerSymbol = d3.symbol().type(d3.symbolTriangle).size(rugPosition.height * 3);

        const highlightGroup = chartSVG.appendSelect('g.highlights')
          .attr('class', 'highlights');

        const rugBgBar = highlightGroup.appendSelect('rect.highlight-bar')
          .attr('class', 'highlight-bar')
          // .style('opacity', 0.55)
          .attr('x', xScaleRug.range()[0])
          .attr('y', rugPosition.y)
          .attr('height', rugPosition.height)
          .attr('width', xScaleRug.range()[1] - xScaleRug.range()[0]);

        const _drawTooltips = (data, classList) => {
          const marker = highlightGroup.selectAll('path.marker-rug')
            .data(data, d => d.key);

          marker.enter().append('path')
            .attr('class', d => {
              return markerData.find(m => m.key === d.key) ? `marker-rug ${d.key} ${classList} highlighted` : `marker-rug ${d.key} ${classList}`;
            })
            .attr('fill', 'none')
            .attr('d', markerSymbol)
            .attr('transform', d => `translate(${xScaleRug(d.value)}, ${rugPosition.y - markerPos}) rotate(180)`)
            .merge(marker)
            .interrupt()
            .transition(transition)
            .attr('transform', d => `translate(${xScaleRug(d.value)}, ${rugPosition.y - markerPos}) rotate(180)`);
          marker.exit().remove();

          const markerText = highlightGroup.selectAll('text.marker-text')
            .data(data, d => d.key);

          markerText.enter().append('text')
            .attr('transform', d => `translate(${xScaleRug(d.value) + _annoPos(d.text, d.value).xPos}, ${rugPosition.y - 2 * markerPos - 2})`)
            .attr('class', d => {
              return markerData.find(m => m.key === d.key) ? `marker-text ${d.key} ${classList} highlighted` : `marker-text ${d.key} ${classList}`;
            })
            .text(d => `${d.text}`)
            .attr('text-anchor', d => _annoPos(d.text, d.value).xAnchor)
            .merge(markerText)
            .interrupt()
            .transition(transition)
            .attr('transform', d => `translate(${xScaleRug(d.value) + _annoPos(d.text, d.value).xPos}, ${rugPosition.y - 2 * markerPos - 2})`)
            .text(d => `${d.text}`)
            .attr('text-anchor', d => _annoPos(d.text, d.value).xAnchor);

          markerText.exit().remove();

          // display values at point
          const markerTextValues = highlightGroup.selectAll('text.marker-textvalue')
            .data(data, d => d.key);

          markerTextValues.enter().append('text')
            .attr('transform', d => `translate(${xScaleRug(d.value) + _annoPos(d.text, d.value).xPos}, ${props.height - props.margin.bottom + 12 + splitAxisHeight})`)
            .attr('class', d => `marker-textvalue ${d.key} ${classList}`)
            .text(d => `${tooltipNumberFormatter(d.value)}`)
            .attr('text-anchor', d => _annoPos(d.text, d.value).xAnchor)
            .merge(markerTextValues)
            .interrupt()
            .transition(transition)
            .attr('transform', d => `translate(${xScaleRug(d.value) + _annoPos(d.text, d.value).xPos}, ${props.height - props.margin.bottom + 12 + splitAxisHeight})`)
            .text(d => `${tooltipNumberFormatter(d.value)}`)
            .attr('text-anchor', d => _annoPos(d.text, d.value).xAnchor);

          markerTextValues.exit().remove();
        };

        // this.selection().select('.highlights').lower();

        // TOOLTIP AND HIGHLIGHTS
        const _setDefaultTooltip = () => {
          // draw highlight label
          _drawTooltips(markerData, 'active');

          // deselect old rugs
          this.selection().selectAll('.CountryRankingStrips .rugplot rect').classed('highlighted', false)
            .style('stroke-width', props.rugProps.rugWidth)
            .style('stroke', 'none')
            .style('fill', props.rugProps.rugColor);
          // // highlight new data
          markerData.forEach(element => {
          //   this.selection().selectAll('.CountryRankingStrips .highlights path.marker-rug').classed('active', false);
          //   this.selection().selectAll('.CountryRankingStrips .highlights text.marker-text').classed('active', false);

            //   this.selection().select(`.CountryRankingStrips .highlights path.marker-rug.${element.key}`).classed('active highlighted', true);
            //   this.selection().select(`.CountryRankingStrips .highlights text.marker-text.${element.key}`).classed('active highlighted', true);
            //   this.selection().select(`.CountryRankingStrips .highlights text.marker-textvalue.${element.key}`).classed('active highlighted', true);

            this.selection().select(`.CountryRankingStrips .rugplot rect.${element.key}`).classed('highlighted', true)
              .style('stroke-width', props.rugProps.highlightWidth / 2)
              .style('stroke', props.rugProps.highlightColor)
              .style('fill', props.rugProps.highlightColor)
              .raise();
          });
        };

        const _getActiveTooltip = (pos) => {
          const mouseVal = xScaleRug.invert(pos);
          // const lookup = tooltipData.filter(d => markerData.find(e => e.key !== d.key));
          return tooltipData.reduce((prev, curr) => {
            return (Math.abs(curr.value - mouseVal) < Math.abs(prev.value - mouseVal) ? curr : prev);
          });
        };
        const _setActiveTooltip = (el) => {
          // draw hover label
          _drawTooltips((el instanceof Array) ? el : [el], 'active');

          // this.selection().selectAll('.CountryRankingStrips .highlights path.marker-rug').classed('active', true);
          // this.selection().selectAll('.CountryRankingStrips .highlights text.marker-text').classed('active', true);
          // this.selection().selectAll('.CountryRankingStrips .highlights text.marker-textvalue').classed('active', true);

          // // hide the highlighted labels
          // markerData.forEach(element => {
          //   this.selection().select(`.CountryRankingStrips .highlights path.marker-rug.${element.key}`).classed('active highlighted', false);
          //   this.selection().select(`.CountryRankingStrips .highlights text.marker-text.${element.key}`).classed('active highlighted', false);
          // });
        };

        // highlight the rugs
        _setDefaultTooltip();
        // this.selection().select('.CountryRankingStrips .highlights rect.highlight-bar')
        rugBgBar.on('mouseenter mousemove touchstart touchmove', throttle(() => {
          if (!d3.event) return;
          _setActiveTooltip(_getActiveTooltip(d3.mouse(chartSVG.node())[0]));
        }, 50));

        rugBgBar.on('mouseleave touchend touchcancel', () => {
          _setDefaultTooltip();
        });
      }
    }

    // HISTOGRAM CODE
    if (props.histogram) {
      const hists = plot.appendSelect('g.histogram')
        .attr('class', 'histogram')
        .selectAll('rect')
        .data(bins);

      hists.enter().append('rect')
        .attr('x', d => xScale(d.x0) + 1)
        .attr('y', d => yScale(d.length / data.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr('height', d => yScale(0) - yScale(d.length / data.length))
        .merge(hists)
        .transition(transition)
        .attr('x', d => xScale(d.x0) + 1)
        .attr('y', d => yScale(d.length / data.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr('height', d => yScale(0) - yScale(d.length / data.length));

      hists.exit().remove();

      // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT
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
}

export default CountryRankingStrips;
