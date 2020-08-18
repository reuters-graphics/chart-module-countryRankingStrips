![](./badge.svg)

# CountryRankingStrips
Makes a Density Plot | Histogram | Rug plot for 1-D data. Check out how to modify the chart properties. Out of the box, it makes a Rug plot. 

### Install

```
$ yarn add @reuters-graphics/chart-module-countryrankingstrips
```

### Use

```javascript
import CountryRankingStrips from '@reuters-graphics/chart-module-countryrankingstrips';

const myChart = new CountryRankingStrips();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  // Data has to be an array of objects. If the accessor names are different, map them in the dataParams prop.
  .data([
    {key: 'US', value: 1000},
    {key: 'IN', value: 300},
    ...
    ]) 
  .props({ 
      locale: 'en',
      chartTitle: 'global cases',
      dataParams: {
          key: 'key',
          value: 'value',
        },
        height: 50,
        margin: {
          top: 4,
          right: 8,
          bottom: 36,
          left: 8,
        },
        rugPlot: true,
        rugProps: {
          height: 16,
          rugWidth: 1,
          rugColor: 'rgba(255, 255, 255, 0.75)',
          highlightWidth: 2,
          highlightColor: '#eec331',
          annotation: [
            {
              key: 'US',
              text: 'Lorem Ipsum US',
            },
            ...
          ],
          customAxisLabels: [{ pos: 0, label: 'left-label' }, { pos: 100, label: 'right-label' }],
          customAxisFormat: true,
          showSplitAxis: true,
          splitAxis: {
            value: 0,
            colors: ['#74c476', '#ee665b'],
          },
          getTooltipText: (key) => key,
          tooltipNumberFormatter: (num) => num,
        },
    })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([3, 4, 5])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$CountryRankingStrips-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$CountryRankingStrips-container: '#chart';

@import '~@reuters-graphics/chart-module-countryrankingstrips/scss/main';
```

### Modify chart properties

Specify the locale for number formatting ```locale: 'en'``` 
Add a title to the chart. Default blank. ```chartTitle: ''``` 
Specify the accessors for the data to override ```key``` and ```value```.
```javascript
dataParams: {
  key: 'key',
  value: 'value',
},
```
Height of the chart. ```height: 100```

Add Margins
```javascript
margin: {
  top: 18,
  right: 18,
  bottom: 20,
  left: 4,
},
```

##### 1. To draw a density plot
```densityPlot: true```
```javascript
distributionProps: {
  bandwidth: 1,
  threshold: 35, // same as bin-width for histogram
  curveType: 'curveBasis',
},
```
##### 2. To add a histogram to the plot
```histogram: true```
Highlight data points
```javascript
markDataPoint: [// key should be same as dataParams
  {
    key: 'US',
    text: 'Lorem Ipsum US',
  },
  {
    key: 'IN',
    text: 'Lorem Ipsum IN',
  },
]
```
Add annotation to the distribution
```javascript
    annotation: { // for distribution chart
      size: 500,
      offset: 6,
      orient: 'right', // left or right. Skip it for auto
    },
```
##### 3. Make a simple rug plot
Set ```densityPlot: false```, ```histogram: false``` and ```rugPlot: true```
Customise the plot height and add labels
```javascript
rugProps: {
  height: 16,
  rugWidth: 1,
  rugColor: 'rgba(255, 255, 255, 0.75)',
  highlightWidth: 2, // adds half of this value as stroke
  highlightColor: '#eec331', 
  activeRugZoom: 2, // amount in pixels the rug pops out on hover
  showTipMarker: true, // show or hide the tip marker
  annotation: [ // if no text is specified, shows just a pointer by default
     {
    key: 'US',
    text: 'Lorem Ipsum US',
    },
    {
      key: 'IN',
      text: 'Lorem Ipsum IN',
    },
  ],
  // Override default min-max number labels
  customAxisLabels: [{ pos: 0, label: 'left-label' }, { pos: 100, label: 'right-label' }],
  customAxisFormat: true, // show labels without ticks
  showSplitAxis: true, // for data that might have a central pivot
  splitAxis: {
    value: 0, // value to split the axis at
    colors: ['#74c476', '#ee665b'],
  },
  getTooltipText: (key) => key, // function to fetch text to be shown on the tooltips
  tooltipNumberFormatter: (num) => num, // number formatter based on number type and locale
}
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
