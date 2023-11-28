import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-negative-bar-chart',
  templateUrl: './negative-bar-chart.component.html',
  styleUrls: ['./negative-bar-chart.component.scss']
})
export class NegativeBarChartComponent  implements OnInit {

  // echart
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions: EChartsOption = {};

  constructor() {
    // echart
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];

  }

  ngOnInit(): void {
    this.echartsOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '0',
        top: '-3%',
        height: '100px',
        containLabel: false,
        width: '100%'
      },
      xAxis: [
        {
          type: 'category',
          
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: false,
            show: false
          },
          axisLabel: {
            show: false
          },
           axisLine : {
            show: false
          },
          splitLine: {
            show: false
          },
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
         
        }
      ],
      series: [
        {
          // name: '',
          type: 'bar',
          barWidth: '20%',
          data: [ 2, -5, 5, -1, 4, -9, 8, -3, 3, -8, 9 , -4, 1, -5, 5],
          itemStyle: {
            color: function (params) {
              return Number(params.value) >= 0 ? '#7460ee' : '#afc979';
            },
          },
        
        }
      ]
    }
  }



}
