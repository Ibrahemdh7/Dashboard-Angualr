import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DatatableComponent } from './Components/datatable/datatable.component';
import { CreateComponent } from './modals/create/create.component';
import { UpdateComponent } from './modals/update/update.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { SidbarComponent } from './Components/dashboard/sidbar/sidbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    DashboardComponent,
    DatatableComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    SidbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
