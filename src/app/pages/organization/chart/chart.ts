import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
	selector: 'chart',
	template:`<router-outlet></router-outlet>`
})

export class ChartComponent {
 option: EChartOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","口红"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20,50]
        }]
    };
}