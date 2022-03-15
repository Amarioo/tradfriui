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
  constructor(private service: TradfriService) { }

  ngOnInit(): void {
  }

turnOn() {
  console.log('PÅ');
  this.service.turnOn().subscribe(
    (data: any) => {
      console.log('vamos')
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
}

turnOff() {
  console.log('AV');
  
  this.service.turnOff().subscribe(
    (data: any) => {
      console.log('vamos')
    }, (error: HttpErrorResponse) => {
      if (!error.error.hasOwnProperty('error')) {
        console.log(error.message);
        return;
      }
    });
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


