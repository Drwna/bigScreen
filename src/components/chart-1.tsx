import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红古区', '永登区', '皋兰区', '榆中区', '兰州新区'],
        axisTick: {show: false},
        axisLabel: {
          fontSize: px(12),
          interval: 0,
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          },
        }
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {lineStyle: {color: '#686a75'}},
        axisLabel: {
          fontSize: px(12)
        }
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      series: [
        {
          name: '人数',
          type: 'bar',
          data: [5, 20, 24, 10, 10, 32, 8, 12, 19, 6],
        },
      ]
    }));
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};
export {Chart1};
