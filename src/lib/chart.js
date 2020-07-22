import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
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
      threshold: 30,
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
    markDataPoint: [
      {
        key: 'IN',
        text: 'India',
      },
    ],
  };

  defaultData = defaultData;

  draw() {
    const allData = this.data();
    const props = this.props();
    const node = this.selection().node();

    const { width } = node.getBoundingClientRect();

    const transition = d3.transition()
      .duration(750);

    // DEFINE SCALES
    const data = allData.filter(d => d[props.dataParams.value]);
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
          .tickValues(thresholds)
          // .tickValues(xScale.domain())
          // .ticks(props.distributionProps.xTicks)
          // .tickFormat(dateFormat)
      );

    // chartSVG.appendSelect('g.axis-y')
    //   .attr('transform', `translate(${props.margin.left},0)`)
    //   .call(d3.axisLeft(yScale).ticks(null, '%'))
    //   .call(g => g.select('.domain').remove());

    // add distribution path
    const plot = chartSVG.appendSelect('g.plot')
      .attr('class', 'plot');

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

    plot.appendSelect('path.distribution-area')
      .attr('class', 'area distribution-area')
      .datum(density)
      .transition(transition)
      .attr('stroke-linejoin', 'round')
      .attr('d', distributionArea);

    console.log('area', d3.polygonArea((density)));

    plot.appendSelect('path.distribution-line')
      .attr('class', 'line distribution-line')
      .datum(density)
      .transition(transition)
      .attr('stroke-linejoin', 'round')
      .attr('d', distributionLine);

    // HIGHLIGHT DATA PONT

    // add distrubution clipping mask
    const svgDefs = chartSVG.appendSelect('defs');

    svgDefs.appendSelect('clipPath')
      .attr('id', 'clip-path')
      .appendSelect('path')
      .attr('d', distributionArea(density));

    // add highlight shape
    const highlightGroup = chartSVG.appendSelect('g.highlights')
      .attr('class', 'highlights');
    const highlights = highlightGroup.selectAll('rect')
      .data(props.markDataPoint);

    highlights.enter().append('rect')
      .attr('class', d => `${d.key}`)
      .attr('data-value', d => {
        return (d.value) ? `${d.value}` : `${allData.find(e => e.key === d.key)[props.dataParams.value]}`;
      })
      .attr('x', d => d.value ? xScale(d.value) : xScale(allData.find(e => e.key === d.key)[props.dataParams.value]))
      .attr('y', props.height - props.margin.bottom)
      .attr('height', 0)
      .attr('width', width / data.length)
      .style('clip-path', 'url(#clip-path)')
      .merge(highlights)
      .transition(transition.delay(0).duration(1000))
      .attr('class', d => `${d.key}`)
      .attr('data-value', d => {
        return (d.value) ? `${d.value}` : `${allData.find(e => e.key === d.key)[props.dataParams.value]}`;
      })
      .attr('x', d => d.value ? xScale(d.value) : xScale(allData.find(e => e.key === d.key)[props.dataParams.value]))
      .attr('y', props.margin.top)
      .attr('height', props.height - props.margin.top - props.margin.bottom)
      .attr('width', width / data.length)
      .style('clip-path', 'url(#clip-path)');

    highlights.exit()
      .attr('height', 0)
      .transition(transition)
      .remove();

    // FOR HIGHLIGHTING THE BIN WITH THE DATA POINT
    // const dataHighlight = bins.find(element => {
    //   return element.includes(6.2960862166761205);
    // });

    // console.log((dataHighlight));

    // const pathHighlight = (d) => {
    //   return [
    //     [(d.x0), (0)],
    //     [(d.x0), (0.3)],
    //     [(d.x1), (0.3)],
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
