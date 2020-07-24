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
      chartTitle: 'europe cases',
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
              key: 'US',
              text: 'Lorem Ipsum US',
            },
            {
              key: 'IN',
              text: 'Lorem Ipsum IN',
            },
          ],
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
  annotation: [
     {
    key: 'US',
    text: 'Lorem Ipsum US',
    },
    {
      key: 'IN',
      text: 'Lorem Ipsum IN',
    },
  ],
}
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
