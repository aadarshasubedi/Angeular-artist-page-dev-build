// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-club-jumper',
  templateUrl: './club-jumper.component.html',
  styleUrls: ['./club-jumper.component.css']
})
@Injectable()

@Input()
export class ClubJumperComponent implements OnInit {

  clubIDInput;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
