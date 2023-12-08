import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Database, onValue, ref, set, update } from '@angular/fire/database';
import { EChartsOption } from 'echarts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-area-line-chart',
  templateUrl: './area-line-chart.component.html',
  styleUrls: ['./area-line-chart.component.scss']
})
export class AreaLineChartComponent {
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions1: EChartsOption = {};
  echartsOptions2: EChartsOption = {};
  echartsOptions3: EChartsOption = {};

  chartData: any;

  updatingEarningData: any;
  updatingSalesData: any;
  updatingVisitsData: any;
  updatingLikesData: any;

  constructor(
    private http: HttpClient,
    private database: Database,
  ) {
    this.echartsExtentions = [TooltipComponent, GridComponent, LegendComponent];

  }

  ngOnInit(): void {

    // this.getData();
    // this.updateData();
    // console.log("getdata",this.getData())
    // console.log(this.generateRandomData())
    // this.generateRandomData()

    const url: string = '../../assets/area-charts.json';
    this.http.get(url).subscribe((response) => {
      this.chartData = response;
      console.log(this.chartData);

      const earningData = this.chartData['earning'].map((data: any) => data.value);
      const salesData = this.chartData['sales'].map((data: any) => data.value);
      const visitsData = this.chartData['visits'].map((data: any) => data.value);



      this.echartsOptions1 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', ''],
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: earningData,
            // data: [
            //   {"value": 6 },
            //   {"value": 8 },
            //   {"value": 8 },
            //   {"value": 5 },
            //   {"value": 1 },
            //   {"value": 4 },
            //   {"value": 7 },
            // ],
            // data: this.generateRandomData(),
            type: 'line',
            lineStyle: {
              color: '#f8a45e',
              width: 2,
            },
            areaStyle: {},
            color: '#fcd3b2',
            showSymbol: false,
          }
        ],
        grid: {
          width: '100%',
          left: '0',
          right: '0',
          bottom: '0',
          top: '6px',
          height: '100%',

        }
      }

      // chart2
      this.echartsOptions2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', ''],
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            // data: [9, 6, 3, 5, 2, 7, 4],
            data: salesData,
            type: 'line',
            lineStyle: {
              color: '#6a5583',
              width: 2,
            },
            areaStyle: {},
            color: '#bdb3c8',
            showSymbol: false,
          }
        ],
        grid: {
          width: '100%',
          left: '0',
          right: '0',
          bottom: '0',
          top: '6px',
          height: '100%',

        }
      }

      // chart3
      this.echartsOptions3 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', ''],
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            // data: [2, 4, 8, 5, 7, 4, 3],
            data: visitsData,
            type: 'line',
            lineStyle: {
              color: '#53b0c8',
              width: 2,
            },
            areaStyle: {},
            color: '#b3dce7',
            showSymbol: false,
          }
        ],
        grid: {
          width: '100%',
          left: '0',
          right: '0',
          bottom: '0',
          top: '6px',
          height: '100%',

        }
      }


    })



  }

  generateRandomData() {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10) + 1);
  }

  

}
