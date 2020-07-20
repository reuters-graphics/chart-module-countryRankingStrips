![](./badge.svg)

# CountryRankingStrips

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
  .data([1, 2, 3])
  .props({ stroke: 'orange' })
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

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
