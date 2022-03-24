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
  status: boolean = false;
  public golvlampa: Golvlampa = new Golvlampa("", "", "", "", "");
  colour: number = 0;
  constructor(private service: TradfriService) { }

  ngOnInit(): void {
    this.getGolvlampa();
    this.golvlampaStatus();
    this.golvlampaColour();
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

    if (!this.status) {
      this.status = true;
    }
  }

  switchState(): void {
    if (!this.status) {
      this.status = true;
      this.turnOn();
    }
    else if (this.status) {
      this.status = false;
      this.turnOff();
    }
  }

  golvlampaStatus() {
    this.service.status().subscribe(
      (data: any) => {
        this.status = data;
        console.log(this.colour)
      }, (error: HttpErrorResponse) => {
        if (!error.error.hasOwnProperty('error')) {
          console.log(error.message);
          return;
        }
      });
  }


  golvlampaColour() {
    this.service.colour().subscribe(
      (data: any) => {
        this.colour = data
        console.log(this.colour)
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
        this.golvlampa.name = data.name;
        this.golvlampa.deviceName = data.deviceInfo[1];
        this.golvlampa.manifacturer = data.deviceInfo[0];
        this.golvlampa.firmwareVersion = data.deviceInfo[3];
        this.golvlampa.brightness = data.brightness;
        this.colour = data.colourHex;

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
    if (this.status) {
      this.status = false;
    }
  }


  changeColour(colour: number) {
    this.service.changeColour(colour).subscribe(
      (data: any) => {
      }, (error: HttpErrorResponse) => {
        if (!error.error.hasOwnProperty('error')) {
          console.log(error.message);
          return;
        }
      });
    this.colour = colour;
  }

  changeBrightness() {
    console.log('ljusstyrka ' + this.brightness);
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


