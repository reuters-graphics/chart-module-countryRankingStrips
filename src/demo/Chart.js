import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';
import covidData from './covidData.json';
import popData from './popData.json';
import max from 'lodash/maxBy';
import min from 'lodash/minBy';
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

DATA.casesPct = Object.keys(covidData.latestWeeklyAvgs.cases).map(element => {
  return {
    key: element,
    value: 100 * (covidData.latestWeeklyAvgs.cases[element].slice(-1)[0] - covidData.latestWeeklyAvgs.cases[element].slice(-2)[0]),
  };
});
DATA.deathsPct = Object.keys(covidData.latestWeeklyAvgs.deaths).map(element => {
  return {
    key: element,
    value: 100 * (covidData.latestWeeklyAvgs.deaths[element].slice(-1)[0] - covidData.latestWeeklyAvgs.deaths[element].slice(-2)[0]),
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

// per pop
const pop = popData.metadata.map(d => {
  return {
    key: d.iso_country_code_alpha_2,
    population: d.population,
  };
});

// DATA.cases = DATA.cases.map(e => {
//   // console.log(pop.find(d => d.key === e.key).population);
//   return {
//     key: e.key,
//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,
//   };
// });
// DATA.deaths = DATA.deaths.map(e => {
//   // console.log(pop.find(d => d.key === e.key).population);
//   return {
//     key: e.key,
//     value: e.value * 100000 / pop.find(d => d.key === e.key).population,
//   };
// });

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
    this.chart1.data(dataAsia).props({
      rugProps: {
        height: 16,
        // getTooltipText: (key) => key,
        // highlightColor: '#ee665b',
        customAxisLabels: [{ pos: min(dataAsia, 'value').value, label: 'left-label' }, { pos: max(dataAsia, 'value').value, label: 'right-label' }],
        showSplitAxis: false,
        annotation: [
          {
            key: 'PK',
            text: 'PK',
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
    }).draw();
    this.chart2.props({
      rugProps: {
        height: 16,
        // getTooltipText: (key) => key,
        // highlightColor: '#ee665b',
        customAxisLabels: [{ pos: min(DATA.deathsPct, 'value').value, label: '← decreasing most' }, { pos: max(DATA.deathsPct, 'value').value, label: 'increasing most →' }],
        showSplitAxis: true,
        splitAxis: {
          value: 0,
          // colors: ['green', 'red'],
        },
        annotation: [
          {
            key: 'SD',
            text: 'SD',
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
    }).data(DATA.deathsPct).draw();
  }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart1
      .selection(this.chart1Container.current)
      .data(DATA.casesPct)
      .props({
        chartTitle: 'global cases',
        locale: 'en',
        dataParams: {
          key: 'key',
          value: 'value',
        },
        height: 150,
        margin: {
          top: 4,
          right: 8,
          bottom: 36,
          left: 8,
        },
        rugPlot: true,
        rugProps: {
          height: 16,
          getTooltipText: (key) => `${key}works!`,
          customAxisFormat: true,
          customAxisLabels: [{ pos: min(DATA.casesPct, 'value').value, label: '| decreasing most' }, { pos: max(DATA.casesPct, 'value').value, label: 'increasing most |' }],
          rugColor: 'rgba(255, 255, 255, 0.75)',
          highlightWidth: 2,
          highlightColor: '#eec331',
          showSplitAxis: true,
          splitAxis: {
            value: 0,
            // colors: ['green', 'red'],
          },
          annotation: [
            {
              key: 'IN',
              // text: 'India',
            },
            // {
            //   value: 0,
            //
          ],
        },
      })
      .draw();

    this.chart2
      .selection(this.chart2Container.current)
      .data(dataAsia1)
      .props({
        chartTitle: 'global deaths',
        locale: 'en',
        dataParams: {
          key: 'key',
          value: 'value',
        },
        height: 150,
        margin: {
          top: 4,
          right: 8,
          bottom: 36,
          left: 8,
        },
        rugPlot: true,
        rugProps: {
          height: 16,
          getTooltipText: (key) => `${key}works!`,
          customAxisFormat: true,
          customAxisLabels: [{ pos: min(dataAsia1, 'value').value, label: 'left-label' }, { pos: max(dataAsia1, 'value').value, label: 'right-label' }],
          rugColor: 'rgba(255, 255, 255, 0.75)',
          highlightWidth: 2,
          highlightColor: '#eec331',
          showSplitAxis: false,
          annotation: [
            {
              key: 'IN',
              text: 'India',
            },
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
