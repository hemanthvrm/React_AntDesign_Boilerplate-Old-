import React, {Component} from 'react';
import requireAuth from '../requireAuth';
import {PieChart} from 'react-d3-components';


class D3chart extends Component {
  render() {
    var data = {
      label: 'Completed',
      values: [{ x: 'In Progress', y: 10 }, { x: 'Completed', y: 4 }, { x: 'Failed', y: 3 }]
    };

    var tooltipScatter = function (x, y) {
      return `${x}:${y}`
    };

    var sort = null;

    return (
      <PieChart
        data={data}
        width={500}
        height={400}
        tooltipHtml={tooltipScatter}
        tooltipMode={'fixed'}
        tooltipOffset={{ top: 175, left: 150 }}
        margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
        sort={sort}
        innerRadius={90}
      />
    );
  }
}

export default D3chart; //temp
//export default requireAuth(D3chart);
