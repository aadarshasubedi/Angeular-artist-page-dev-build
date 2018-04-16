
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';


@Component({
  selector: 'app-aplication-header',
  templateUrl: './aplication-header.component.html',
  styleUrls: ['./aplication-header.component.css']
})
export class AplicationHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
