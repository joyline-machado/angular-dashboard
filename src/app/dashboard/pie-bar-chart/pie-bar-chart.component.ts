import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-pie-bar-chart',
  templateUrl: './pie-bar-chart.component.html',
  styleUrls: ['./pie-bar-chart.component.scss']
})
export class PieBarChartComponent implements OnInit {

  // echart
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptionsPie: EChartsOption = {};
  echartsOptions: EChartsOption = {};

  chartData: any;

  constructor(private http: HttpClient) {
    // echart
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];

  }

  ngOnInit(): void {

    const url: string = '../../assets/weekely-earnings.json';
    this.http.get(url).subscribe((response) => {
      this.chartData = response;
      console.log(this.chartData);

      const earningData = this.chartData['weekely-earning'].map((data: any) => data.earning);

      
      const totalEarnings = this.calculateTotalEarnings();
      console.log(totalEarnings)

      this.echartsOptionsPie = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          // doesn't perfectly work with our tricks, disable it
          selectedMode: false
        },
        series: [
          {
            // name: 'Access From',
            type: 'pie',
            radius: ['75%', '95%'],
            center: ['50%', '60%'],
            // adjust the start angle
            startAngle: 200,
            label: {
              show: true,
              position: 'center',
              fontWeight: 'bold',
              fontSize: '22px',
              formatter(param) {
                // correct the percentage
                return '63'
                // return totalEarnings;
              }
            },
            data: [
              {
                value: 63,
                itemStyle: {
                  color: '#000'
                }
              },
              {
                // make an record to fill the bottom 50%
                value: 10 + 20 + 20 + 20 + 10,
                itemStyle: {
                  // stop the chart from rendering this piece
                  color: 'none',
                  decal: {
                    symbol: 'none'
                  }
                },
                label: {
                  show: false
                }
              }
            ]
          }
        ]
      }

      this.echartsOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            data: ['', '', '', '', '', '', '', ''],
            axisTick: {
              alignWithLabel: true,
              show: false,
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
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [
          {
            // name: 'Direct',
            type: 'bar',
            barWidth: '30%',
            data: earningData,
            color: '#7460ee'
          }
        ]
      }

    })

  }

  calculateTotalEarnings(): number {
    const earningsArray = this.chartData["weekely-earning"].map((week: any) => week.earning);
    return earningsArray.reduce((sum: number, earning: number) => sum + earning, 0);
  }



}


