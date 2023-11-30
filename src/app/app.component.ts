import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-dashboard';
  active = 1;

   isLargeScreen!: boolean;

  showLeftIcon = true;

  ngOnInit() {
    this.checkScreenSize();
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



  

  
}