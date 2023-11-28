import { Component, OnInit } from '@angular/core';
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

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
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        right : 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Mobile',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          color: '#6ebdd1',
          emphasis: {
            focus: 'series'
          },
          data: [2350, 3205, 4250, 2351, 5632]
        },
        {
          name: 'Laptop',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          color: '#f9ab6c',
          emphasis: {
            focus: 'series'
          },
          data: [2341, 2583, 1592, 2674, 2323]
        },
        {
          name: 'Computer',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          color : '#afc979',
          emphasis: {
            focus: 'series'
          },
          data: [1212, 5214, 2325, 4235, 2519]
        },
        
      ]
    }
  }



}
