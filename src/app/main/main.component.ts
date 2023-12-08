import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  title = 'angular-dashboard';
  active = 1;

  loaded : boolean = false;

   isLargeScreen!: boolean;

  showLeftIcon = true;

  constructor(
    private authService : AuthService
  ){
this.loaded = false;
  }

  ngOnInit() {
    this.checkScreenSize();
    this.loaded = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // this.isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
    this.isLargeScreen = window.innerWidth >= 1024; // Adjust the breakpoint as needed
  }

  toggleIcon() {
    this.showLeftIcon = !this.showLeftIcon;
  }


  onLogout(){
    this.authService.logout();
  }

  

  
}