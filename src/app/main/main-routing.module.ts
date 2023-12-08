import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IotDashboardComponent } from '../iot-dashboard/iot-dashboard.component';
import { InboxComponent } from '../inbox/inbox.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path:'', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'iot', component: IotDashboardComponent },
      { path: 'inbox', component: InboxComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
