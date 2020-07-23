import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import D3Locale from '@reuters-graphics/d3-locale';
import defaultData from './defaultData.json';

class CountryRankingStrips extends ChartComponent {
  defaultProps = {
    locale: 'en',
    dataParams: {
      key: 'key',
      value: 'value',
    },
    distributionProps: {
      bandwidth: 0.5,
      threshold: 35,
      xTicks: 5,
      curveType: 'curveBasis',
    },
    height: 250,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
    markDataPoint: [// key should be same as dataParams
      {
        key: 'US',
        // text: 'India',
      },
      {
        key: 'YE',
        // text: 'Yemen',
      },
    ],
    annotation: {
      size: 500,
      offset: 6,
      // orient: 'right', // left or right
    },
  };

  defaultData = defaultData;

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

    // DEFINE SCALES
    // filter null and NaN, keep 0's
    const data = allData.filter(d => parseFloat(d[props.dataParams.value]) !== 'null' && !isNaN(parseFloat(d[props.dataParams.value])));

    const dataValues = data.map(d => d[props.dataParams.value]);
    // console.log(d3.extent(dataValues));
    const xScale = d3.scaleLinear()
      .domain(d3.extent(dataValues)).nice()
      .range([props.margin.left, width - props.margin.right]);

    const thresholds = xScale.ticks(props.distributionProps.threshold);
    const bins = d3.histogram()
      .domain(xScale.domain())
      .thresholds(thresholds)(dataValues);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length) / data.length])
      .range([props.height - props.margin.bottom, props.margin.top]);

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

    // DRAW CHART
    const chartSVG = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .attr('class', 'CountryRankingStrips');

    // add axis
    chartSVG.appendSelect('g.axis-x')
      .attr('class', 'axis axis-x')
      .transition(transition)
      .attr('transform', `translate(0,${props.height - props.margin.bottom})`)
      .call(
        d3.axisBottom(xScale)
          // .tickValues(thresholds)
          .tickValues(xScale.domain())
          // .ticks(props.distributionProps.xTicks)
          .tickFormat(numFormat)
      );

    // chartSVG.appendSelect('g.axis-y')
    //   .attr('transform', `translate(${props.margin.left},0)`)
    //   .call(d3.axisLeft(yScale).ticks(null, '%'))
    //   .call(g => g.select('.domain').remove());

    // add distribution path
    const plot = chartSVG.appendSelect('g.plot')
      .attr('class', 'plot');

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

    // RUGPLOT
    // const rugs = plot.append('g').selectAll('rect')
    //   .data(data.filter(d => d.value >= 19 && d.value <= 28));
    // rugs.enter().append('rect')
    //   .attr('class', d => `${d.key}`)
    //   .attr('data-value', d => `${d.value}`)
    //   .attr('x', d => xScale(d.value))
    //   .attr('y', props.margin.top)
    //   .attr('height', props.height - props.margin.top - props.margin.bottom)
    //   .attr('width', width / data.length)
    //   .style('mix-blend-mode', 'multiply')
    //   .attr('stroke', 1)
    //   .attr('fill', 'orange');

    // HISTOGRAM CODE
    // plot.append('g')
    //   .attr('fill', '#bbb')
    //   .selectAll('rect')
    //   .data(bins)
    //   .join('rect')
    //   .attr('x', d => xScale(d.x0) + 1)
    //   .attr('y', d => {
    //     // console.log(d.length, data.length);
    //     return yScale(d.length / data.length);
    //   })
    //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
    //   .attr('height', d => yScale(0) - yScale(d.length / data.length));

    // HIGHLIGHT DATA PONT
    // set data point
    const markerData = props.markDataPoint.map(element => {
      const val = element[props.dataParams.value] ? element[props.dataParams.value] : allData.find(e => e[props.dataParams.key] === element[props.dataParams.key])[props.dataParams.value];

      let posDist = 0;
      const posBin = bins.find((element, i) => {
        posDist = i;
        return element.includes(val);
      });

      const densityScale = d3.scaleLinear()
        .domain([posBin.x0, posBin.x1])
        .range([density[posDist][1], density[posDist + 1][1]]);

      return {
        key: element[props.dataParams.key],
        value: val,
        text: element.text,
        densityIndex: posDist,
        density: densityScale(val),
        bin: posBin,
      };
    });
    // width of highlight rect
    const highlightWidth = width / data.length;

    console.log(markerData);

    // add distrubution clipping mask
    const svgDefs = chartSVG.appendSelect('defs');

    svgDefs.appendSelect('clipPath')
      .attr('id', 'clip-path')
      .appendSelect('path')
      .transition(transition)
      .attr('d', distributionArea(density));

    // add highlight shape
    const highlightGroup = chartSVG.appendSelect('g.highlights')
      .attr('class', 'highlights');
    const highlights = highlightGroup.selectAll('rect')
      .data(markerData);

    highlights.enter().append('rect')
      .attr('class', d => `${d.key}`)
      .attr('data-value', d => d.value)
      .attr('x', d => xScale(d.value) - 0.5 * highlightWidth)
      .attr('y', props.height - props.margin.bottom)
      .attr('height', props.height - props.margin.top - props.margin.bottom)
      .attr('width', highlightWidth)
      .style('clip-path', 'url(#clip-path)')
      .merge(highlights)
      .transition(transition.delay(50).duration(750))
      .attr('class', d => `${d.key}`)
      .attr('data-value', d => d.value)
      .attr('x', d => xScale(d.value) - 0.5 * highlightWidth)
      .attr('y', props.margin.top)
      .attr('height', props.height - props.margin.top - props.margin.bottom)
      .attr('width', highlightWidth)
      .style('clip-path', 'url(#clip-path)');

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

    return this;
  }
}

export default CountryRankingStrips;
