import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {

  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions1: EChartsOption = {};
  echartsOptions2: EChartsOption = {};
  echartsOptions3: EChartsOption = {};
  echartsOptions4: EChartsOption = {};

  constructor() {
    this.echartsExtentions = [TooltipComponent, GridComponent, LegendComponent];

    
  }

  ngOnInit(): void {

    


    // setInterval(() => {
    //   (this.echartsOptions1.series as any).data = this.generateRandomData();
    // }, 2000);

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
          data: [6, 8, 8, 5, 1, 4, 7],
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
          data: [9, 6, 3, 5, 2, 7, 4],
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
          data: [2, 4, 8, 5, 7, 4, 3],
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

    // chart4
    this.echartsOptions4 = {
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
          data: [6, 4, 2, 5, 1, 4,7],
          type: 'line',
          lineStyle: {
            color: '#5182bd',
            width: 2,
          },
          areaStyle: {},
          color: '#b5cae3',
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

    // change chart values after 2 seconds
    setInterval(() => {
        
        this.echartsOptions1 = {
          ...this.echartsOptions1,
          series: [
            {
              data: this.generateRandomData(),
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
        };

        this.echartsOptions2 = {
          ...this.echartsOptions1,
          series: [
            {
              data: this.generateRandomData(),
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
        };
        
        this.echartsOptions3 = {
          ...this.echartsOptions1,
          series: [
            {
              data: this.generateRandomData(),
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
        };

        this.echartsOptions4 = {
          ...this.echartsOptions1,
          series: [
            {
              data: this.generateRandomData(),
              type: 'line',
              lineStyle: {
                color: '#5182bd',
                width: 2,
              },
              areaStyle: {},
              color: '#b5cae3',
              showSymbol: false,
            }
          ],
        };
      
    
    }, 2000);

  }

  generateRandomData(): number[] {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10) + 1);
  }

}
