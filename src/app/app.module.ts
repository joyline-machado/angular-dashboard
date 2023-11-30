import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { AreaChartComponent } from './dashboard/area-chart/area-chart.component';
import { PieBarChartComponent } from './dashboard/pie-bar-chart/pie-bar-chart.component';
import { NegativeBarChartComponent } from './dashboard/negative-bar-chart/negative-bar-chart.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BarChartComponent,
    AreaChartComponent,
    PieBarChartComponent,
    NegativeBarChartComponent,
    TimelineComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    NgxEchartsDirective,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
