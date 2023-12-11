import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LineChartComponent } from '../dashboard/line-chart/line-chart.component';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BarChartComponent } from '../dashboard/bar-chart/bar-chart.component';
import { AreaChartComponent } from '../dashboard/area-chart/area-chart.component';
import { PieBarChartComponent } from '../dashboard/pie-bar-chart/pie-bar-chart.component';
import { NegativeBarChartComponent } from '../dashboard/negative-bar-chart/negative-bar-chart.component';
import { LoginComponent } from '../login/login.component';
import { IotDashboardComponent } from '../iot-dashboard/iot-dashboard.component';
import { AreaLineChartComponent } from '../iot-dashboard/area-line-chart/area-line-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from '../dashboard/timeline/timeline.component';
import { InboxComponent } from '../inbox/inbox.component';
import { ContactCardComponent } from '../contact-card/contact-card.component';


@NgModule({
  declarations: [
    MainComponent,
    LineChartComponent,
    DashboardComponent,
    BarChartComponent,
    AreaChartComponent,
    PieBarChartComponent,
    NegativeBarChartComponent,
    LoginComponent,
    IotDashboardComponent,
    AreaLineChartComponent,
    TimelineComponent,
    InboxComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgxEchartsDirective,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ]
})
export class MainModule { }
