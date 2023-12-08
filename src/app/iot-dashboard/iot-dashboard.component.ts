import { Component } from '@angular/core';

@Component({
  selector: 'app-iot-dashboard',
  templateUrl: './iot-dashboard.component.html',
  styleUrls: ['./iot-dashboard.component.scss']
})
export class IotDashboardComponent {

  gateOn: boolean = true;
  security: boolean = true;

  // lights indoor
  kitchen: boolean = true;
  dining: boolean = false;
  living: boolean = false;
  bedRoom: boolean = true;
  bathRoom: boolean = false;
  storeRoom: boolean = true;

  // lights outdoor
  frontDoor: boolean = false;
  backDoor: boolean = true;
  pool: boolean = false;
  garage: boolean = true;
  mainDoor: boolean = false;

  // Other Appliences
  tv: Boolean = false;
  appleTv: boolean = true;
  soundSystem: boolean = true;
  airConditioner: boolean = false;
  fridge: boolean = false;
  washingMachine: boolean = true;

  mainGate() {
    this.gateOn = !this.gateOn;
  }

  securitySystem() {
    this.security = !this.security
  }

}
