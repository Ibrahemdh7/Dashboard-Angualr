import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public xaxis: ApexXAxis;

  constructor() {
    this.series = [{
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }];
    this.chart = {
      height: 350,
      type: 'bar',
    };
    this.xaxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    };
  }
}
