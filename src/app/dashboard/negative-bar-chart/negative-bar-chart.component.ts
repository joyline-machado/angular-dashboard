import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-negative-bar-chart',
  templateUrl: './negative-bar-chart.component.html',
  styleUrls: ['./negative-bar-chart.component.scss']
})
export class NegativeBarChartComponent implements OnInit {

  // echart
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions: EChartsOption = {};
  chartData: any;

  constructor(private http : HttpClient) {
    // echart
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];

  }

  ngOnInit(): void {

    const url: string = '../../assets/data-managed.json';
    this.http.get(url).subscribe((response) => {
      this.chartData = response;
      console.log(this.chartData);

      const allData = this.chartData['data'].map((data: any) => data.value);

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

            data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            axisTick: {
              alignWithLabel: false,
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
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
            data: allData,
            itemStyle: {
              color: function (params) {
                return Number(params.value) >= 0 ? '#7460ee' : '#afc979';
              },
            },

          }
        ]
      }

    })

    }



}
