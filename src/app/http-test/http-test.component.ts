
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';

import * as clubIDG from '../club-chooser/club-chooser.component';



@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {











 
  constructor(public http: Http) { }

ApiDataName;
  ngOnInit() {


  }

}
