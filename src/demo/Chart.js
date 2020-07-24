import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';
import covidData from './covidData.json';
import popData from './popData.json';
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';

const client = new AtlasMetadataClient();
// format data
const DATA = {};
const REGIONS = client.regions;
DATA.cases = Object.keys(covidData.latestTotals.cases).map(element => {
  return {
    key: element,
    value: covidData.latestTotals.cases[element],
  };
});
DATA.deaths = Object.keys(covidData.latestTotals.deaths).map(element => {
  return {
    key: element,
    value: covidData.latestTotals.deaths[element],
  };
});

// DATA.cases = Object.keys(covidData.latestWeeklyAvgs.cases).map(element => {
//   return {
//     key: element,
//     value: covidData.latestWeeklyAvgs.cases[element].slice(-1)[0],
//   };
// });
// DATA.deaths = Object.keys(covidData.latestWeeklyAvgs.deaths).map(element => {
//   return {
//     key: element,
//     value: covidData.latestWeeklyAvgs.deaths[element].slice(-1)[0],
//   };
// });

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

// per pop
const pop = popData.metadata.map(d => {
  return {
    key: d.iso_country_code_alpha_2,
    population: d.population,
  };
});

DATA.cases = DATA.cases.map(e => {
  // console.log(pop.find(d => d.key === e.key).population);
  return {
    key: e.key,
    value: e.value * 100000 / pop.find(d => d.key === e.key).population,
  };
});
DATA.deaths = DATA.deaths.map(e => {
  // console.log(pop.find(d => d.key === e.key).population);
  return {
    key: e.key,
    value: e.value * 100000 / pop.find(d => d.key === e.key).population,
  };
});

// cases
const dataEurope = DATA.cases.filter(d => _getCountryList('Europe').includes(d.key));
const dataAsia = DATA.cases.filter(d => _getCountryList('Asia').includes(d.key));
const dataLatam = DATA.cases.filter(d => _getCountryList('Latin America and the Caribbean').includes(d.key));
const dataAfrica = DATA.cases.filter(d => _getCountryList('Africa').includes(d.key));
const dataOceania = DATA.cases.filter(d => _getCountryList('Oceania').includes(d.key));
const dataNAmerica = DATA.cases.filter(d => _getCountryList('Northern America').includes(d.key));

// deaths
const dataEurope1 = DATA.deaths.filter(d => _getCountryList('Europe').includes(d.key));
const dataAsia1 = DATA.deaths.filter(d => _getCountryList('Asia').includes(d.key));
const dataLatam1 = DATA.deaths.filter(d => _getCountryList('Latin America and the Caribbean').includes(d.key));
const dataAfrica1 = DATA.deaths.filter(d => _getCountryList('Africa').includes(d.key));
const dataOceania1 = DATA.deaths.filter(d => _getCountryList('Oceania').includes(d.key));
const dataNAmerica1 = DATA.deaths.filter(d => _getCountryList('Northern America').includes(d.key));
// console.log('europe', dataEurope);

const dummyData = defaultData.map((d, i) => {
  return {
    key: i,
    value: d,
  };
});

class ChartComponent extends React.Component {
  state = { width: '' };
  chart1Container = React.createRef();
  chart2Container = React.createRef();

  // Instantiate and add our chart class to this component.
  chart1 = new Chart();
  chart2 = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => {
    this.chart1.draw();
    this.chart2.draw();
  }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart1
      .selection(this.chart1Container.current)
      .data(DATA.cases)
      .props({
        chartTitle: 'global cases',
        locale: 'en',
        dataParams: {
          key: 'key',
          value: 'value',
        },
        height: 100,
        margin: {
          top: 18,
          right: 18,
          bottom: 20,
          left: 4,
        },
        rugPlot: true,
        rugProps: {
          height: 16,
          annotation: [
            {
              key: 'ES',
              // text: 'Spain',
            },
            // {
            //   key: 'ME',
            //   text: 'ME',
            // },
            // {
            //   key: 'US',
            //   // text: 'ME',
            // },
          ],
        },
      })
      .draw();

    this.chart2
      .selection(this.chart2Container.current)
      .data(DATA.deaths)
      .props({
        chartTitle: 'global deaths',
        locale: 'en',
        dataParams: {
          key: 'key',
          value: 'value',
        },
        height: 100,
        margin: {
          top: 18,
          right: 18,
          bottom: 20,
          left: 4,
        },
        rugPlot: true,
        rugProps: {
          height: 16,
          annotation: [
            {
              key: 'ES',
              // text: 'Spain',
            },
            // {
            //   key: 'ME',
            //   text: 'ME',
            // },
            // {
            //   key: 'US',
            //   // text: 'ME',
            // },
          ],
        },
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
    this.chart1.draw();
    this.chart2.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart1' className='chart' ref={this.chart1Container} />
        <div id='chart2' className='chart' ref={this.chart2Container} />
      </ChartContainer>
    );
  }
}

export default ChartComponent;
