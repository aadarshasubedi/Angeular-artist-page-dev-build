
import { BodyComponent } from '../body/body.component';

// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';


@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.css']
})
export class BottomBannerComponent implements OnInit {

triggerAnimation(){
// triger the animation in the subscription module after clicking on the button

  console.log("Animation triggered");
}

reset() {

  // reset animation script over here


}

  constructor() { }

  ngOnInit() {
  }

}
