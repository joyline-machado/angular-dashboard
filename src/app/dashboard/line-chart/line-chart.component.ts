import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { UniversalTransition } from 'echarts/features';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  // echart
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions1: EChartsOption = {};
  echartsOptions2: EChartsOption = {};


  constructor() {
    // echart
    this.echartsExtentions = [LineChart, TooltipComponent, GridComponent, LegendComponent, UniversalTransition];

  }

  ngOnInit(): void {
    this.echartsOptions1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      xAxis: {
        type: 'category',
        data: ['', '', '', '', '', '', '', ''],
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          data: [3, 5, 1, 6, 5, 4, 8, 3],
          type: 'line',
          color: '#59e2d1',
          showSymbol: false,
        }
      ],
      grid: {
        top: '2px',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%'
      }


    }

    this.echartsOptions2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      xAxis: {
        type: 'category',
        data: ['', '', '', '', '', '', '', ''],
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          data: [4, 6, 3, 2, 5, 6, 5, 4],
          type: 'line',
          color: '#f4516c',
          showSymbol: false,
        }
      ],
      grid: {
        top: '2px',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%'
      }


    }
  }



}
