import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  public series: ApexNonAxisChartSeries;
  public chart: ApexChart;
  public responsive: ApexResponsive[];
  public labels: any;

  constructor() {
    this.series = [44, 55, 13, 43, 22];
    this.chart = {
      width: 380,
      type: 'pie'
    };
    this.labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
    this.responsive = [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }];
  }
}
