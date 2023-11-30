import { Component, OnInit } from '@angular/core';
import { BarChart } from "echarts/charts";
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { EChartsOption } from 'echarts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  chartData: any;
  category: any;

  // echart
  readonly echartsExtentions: any[];
  // echartsOptions: object = {};
  echartsOptions: EChartsOption = {};

  constructor(private http: HttpClient) {
    // echart
    this.echartsExtentions = [BarChart, TooltipComponent, GridComponent, LegendComponent];

  }

  ngOnInit(): void {
    const url: string = '../../assets/bar-chart.json';
    this.http.get(url).subscribe((response) => {
      this.chartData = response;
      console.log(this.chartData);


      const categories = this.chartData['bar-chart'].map((item: any) => item.category);
      const seriesData = this.chartData['bar-chart'][0].seris.map((serisItem: any) => ({
        name: serisItem.name,
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        color: this.getColorBasedOnName(serisItem.name),
        data: this.chartData['bar-chart'].map((item: any) =>
          item.seris.find((seris: any) => seris.name === serisItem.name)?.value
        ),
      }));

      const legendData = this.chartData['bar-chart'][0].seris.map((serisItem: any) => serisItem.name);

      this.echartsOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          right: 0,
          data: legendData,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: categories,
        },
        yAxis: {
          type: 'value',
        },
        series: seriesData,
      };
    });
  }

  getColorBasedOnName(value: string): string {
    switch (value) {
      case 'Mobile':
        return '#6ebdd1';
      case 'Laptop':
        return '#f9ab6c';
      case 'Computer':
        return '#afc979'
      default:
        return 'gray';
    }
  }

}
