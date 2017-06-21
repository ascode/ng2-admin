import { Component, ViewChild } from '@angular/core';

import { EChartOption, ECharts } from 'echarts-ng2';

@Component({
    selector: 'method-charts',
    template:`<echarts-ng2 #echarts [option]="option"></echarts-ng2>
<div class="row">
    <div class="col-md-12">
        <a class="btn btn-primary" (click)="onEvent()">绑定点击事件</a>
        <a class="btn btn-primary" (click)="offEvent()">解除点击事件</a>
    </div>
</div>`,
})
export class CustomComponent {
    @ViewChild('echarts') echarts: ECharts;
    option: EChartOption = {
          tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
        
    };

    onEvent() {
        console.log('34343');
        console.log(this.echarts);
        this.echarts.on('click', (params: Object) => {
            console.log(params);
        });
    }
    offEvent() {
        this.echarts.off('click');
    }
}