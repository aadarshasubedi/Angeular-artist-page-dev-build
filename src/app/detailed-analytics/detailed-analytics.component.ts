
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';
// import club number from global variable
import * as clubIDG from '../club-chooser/club-chooser.component';


// Developed by Avi Tannenbaum for WR1
// API testing wall data

// General API data
var URL:String = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');


/*
if( $(‘#target’).hasClass(‘blue’) ) {
$(document.body).addClass(‘yellow’);
}

*/

@Injectable()

@Component({
  selector: 'app-detailed-analytics',
  templateUrl: './detailed-analytics.component.html',
  styleUrls: ['./detailed-analytics.component.css']
})
export class DetailedAnalyticsComponent implements OnInit {
  @Input () clubID: string;
   values: number[] = [20, 35, 45, 17];


  followersDetail;
  constructor(public http: Http) { }


// get he artist Bakgroundrequest
getArtistWall(clubID){
  
  
var headers = new Headers();
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
// wall url is over here
   var clubWallBackground = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers}).map(
    res => res.json()).subscribe(
      data => this.followersDetail = JSON.stringify(data.club.stats.followers), 

  err => this.logError(err),
  () => console.log('Arist backgrouns Image Loaded') ); 
  {}
}

logError(err) {
  console.error('There was an error: ' + err);
}
 

  ngOnInit() {

    // get the actual background url data from the angular data

this.followersDetail = this.followersDetail;

this.followersDetail = [];
this.followersDetail = this.getArtistWall(clubIDG.clubIDGt);

  }

}
