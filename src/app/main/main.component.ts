import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TradfriService } from '../TradfriService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   brightness: number = 0;
   status: boolean =  false;
  constructor(private service: TradfriService) { }

  ngOnInit(): void {
    this.golvlampaStatus();
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


