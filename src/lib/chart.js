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
      xTicks: 10,
    },
    height: 200,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  };

  defaultData = defaultData;

  draw() {
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();

    const { width } = node.getBoundingClientRect();

    const transition = d3.transition()
      .duration(750);

    // DEFINE SCALES
    const dataValues = data.map(d => d[props.dataParams.value]);
    const xScale = d3.scaleLinear()
      .domain(d3.extent(dataValues))
      .range([props.margin.left, width - props.margin.right]);

    const thresholds = xScale.ticks(props.distributionProps.xTicks);
    const bins = d3.histogram()
      .domain(xScale.domain())
      .thresholds(thresholds)(dataValues);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length) / data.length])
      .range([props.height - props.margin.bottom - 24, props.margin.top]);

    const distributionLine = d3.line()
      .curve(d3.curveBasis)
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    const distributionArea = d3.area()
      .curve(d3.curveBasis)
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
          // .tickFormat(dateFormat)
      );

    chartSVG.appendSelect('g.axis-y');

    // add distribution path

    const plot = chartSVG.appendSelect('g.plot')
      .attr('class', 'plot');

    const rugs = plot.append('g').selectAll('rect')
      .data(data);
    rugs.enter().append('rect')
      .attr('x', d => xScale(d.value))
      .attr('y', props.height - props.margin.bottom - 24)
      .attr('height', 24)
      .attr('width', 2)
      .style('mix-blend-mode', 'multiply')
      .attr('stroke', 1)
      .attr('fill', 'orange');

    // const distPath = plot.selectAll('path');

    // plot.append('g')
    //   .attr('fill', '#bbb')
    //   .selectAll('rect')
    //   .data(bins)
    //   .join('rect')
    //   .attr('x', d => xScale(d.x0) + 1)
    //   .attr('y', d => {
    //     console.log(d.length, data.length);
    //     return yScale(d.length / data.length);
    //   })
    //   .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
    //   .attr('height', d => yScale(0) - yScale(d.length / data.length));

    plot.appendSelect('path.area')
      .datum(density)
      .transition(transition)
      .attr('fill', 'orange')
      .attr('stroke', 'none')
      .attr('stroke-linejoin', 'round')
      .attr('d', distributionArea);

    plot.appendSelect('path.line')
      .datum(density)
      .transition(transition)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('d', distributionLine);

    return this;
  }
}

export default CountryRankingStrips;
