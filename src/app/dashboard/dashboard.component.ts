import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toastr : ToastrService
  ) {

  }

  ngOnInit(): void {
    this.toastr.info('Welcome to Dashboard pannel!');
  }

}
