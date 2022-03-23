import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Golvlampa } from '../Golvlampa';
import { TradfriService } from '../TradfriService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   brightness: number = 0;
   status: boolean =  false;
   public golvlampa: Golvlampa = new Golvlampa("", "", "", "", "");

  constructor(private service: TradfriService) { }

  ngOnInit(): void {
    this.golvlampaStatus();
    this.getGolvlampa();
  }

turnOn() {
  this.service.turnOn().subscribe(
    (data: any) => {
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
    
    if(!this.status) {
      this.status = true;
    }
}


golvlampaStatus() {
  this.service.status().subscribe(
    (data: any) => {
     this.status = data;
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
}

getGolvlampa() {
  this.service.getGolvlampa().subscribe(
    (data: any) => {
    console.log(data);
    this.golvlampa.name = data.name;
    this.golvlampa.deviceName = data.deviceInfo[1];
    this.golvlampa.manifacturer = data.deviceInfo[0];
    this.golvlampa.firmwareVersion = data.deviceInfo[3];
    this.golvlampa.brightness = data.brightness;

    console.log(this.golvlampa);
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
}

turnOff() {
  this.service.turnOff().subscribe(
    (data: any) => {
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
    if(this.status) {
      this.status = false;
    }
}

changeBrightness() {
  console.log('ljusstyrka ' + this.brightness );
  this.service.setBrightness(this.brightness).subscribe(
    (data: any) => {
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
}


}


