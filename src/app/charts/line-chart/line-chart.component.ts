import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  public series: ApexAxisChartSeries;
  public chart: ApexChart;

  public title: ApexTitleSubtitle;

  constructor() {
    this.series = [{
      name: "Sample",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }];
    this.chart = {
      type: 'line',
      height: 350
    };
    this.title = {
      text: 'Line Chart'
    };
    // Additional chart options
    // ...
  }
}
