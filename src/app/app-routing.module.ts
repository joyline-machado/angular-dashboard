import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './iot-dashboard/guard/auth.guard';

const routes: Routes = [
  
  { path: '',canActivate: [authGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'login', component : LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
