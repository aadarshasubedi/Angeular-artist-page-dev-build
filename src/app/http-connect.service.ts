import { BaseRequestOptions, RequestOptions } from '@angular/http';

import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from './club-chooser/club-chooser.component';

@Injectable()
export class HttpConnectService extends BaseRequestOptions {

  constructor() { 
    super();

    // General API data
var URL:String = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key

// ENter the aplication key header here for the wr1 api
    this.headers.set('Application-Key','6CAEA9D43AC5DF96CEF21C78A73A3');
    var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');


  }

}

export const requestOptionsProvider = { provide: RequestOptions, useClass: HttpConnectService };