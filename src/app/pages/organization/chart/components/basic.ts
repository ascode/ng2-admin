import { Component } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
// 主题
import 'echarts/theme/dark';
@Component({
  selector: 'basic',
  templateUrl: './basic.html',
})
export class BasicComponent {
  constructor() {}
  option: EChartOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
}
