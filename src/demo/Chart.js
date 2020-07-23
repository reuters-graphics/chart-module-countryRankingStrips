import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';
import covidData from './covidData.json';
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';

const client = new AtlasMetadataClient();
// format data
const DATA = {};
const REGIONS = client.regions;
// DATA.cases = Object.keys(covidData.latestTotals.cases).map(element => {
//   return {
//     key: element,
//     value: covidData.latestTotals.cases[element],
//   };
// });
// DATA.deaths = Object.keys(covidData.latestTotals.deaths).map(element => {
//   return {
//     key: element,
//     value: covidData.latestTotals.deaths[element],
//   };
// });

DATA.cases = Object.keys(covidData.latestWeeklyAvgs.cases).map(element => {
  return {
    key: element,
    value: covidData.latestWeeklyAvgs.cases[element].slice(-1)[0],
  };
});
DATA.deaths = Object.keys(covidData.latestWeeklyAvgs.deaths).map(element => {
  return {
    key: element,
    value: covidData.latestWeeklyAvgs.deaths[element].slice(-1)[0],
  };
});

// DATA.cases = Object.keys(covidData.latestCounts.cases).map(element => {
//   return {
//     key: element,
//     value: covidData.latestCounts.cases[element].slice(-1)[0],
//   };
// });
// DATA.deaths = Object.keys(covidData.latestCounts.deaths).map(element => {
// return {
//     key: element,
//     value: covidData.latestCounts.deaths[element].slice(-1)[0],
//   };
// });
// console.log(client.regions);
// console.log(DATA.cases);
const _getCountryList = (region) => {
  return REGIONS.find(r => r.name === region).countries.map(d => d.isoAlpha2);
};

// console.log(_getCountryList('Asia'));

const dataEurope = DATA.deaths.filter(d => _getCountryList('Europe').includes(d.key));
const dataAsia = DATA.deaths.filter(d => _getCountryList('Asia').includes(d.key));
const dataLatam = DATA.deaths.filter(d => _getCountryList('Latin America and the Caribbean').includes(d.key));
const dataAfrica = DATA.deaths.filter(d => _getCountryList('Africa').includes(d.key));
const dataOceania = DATA.deaths.filter(d => _getCountryList('Oceania').includes(d.key));
const dataNAmerica = DATA.deaths.filter(d => _getCountryList('Northern America').includes(d.key));
// console.log('europe', dataEurope);

const dummyData = defaultData.map((d, i) => {
  return {
    key: i,
    value: d,
  };
});

class ChartComponent extends React.Component {
  state = { width: '' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart
      .selection(this.chartContainer.current)
      .data(dataNAmerica)
      .props({

      })
      .draw();

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    this.chart.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart' ref={this.chartContainer} />
      </ChartContainer>
    );
  }
}

export default ChartComponent;
